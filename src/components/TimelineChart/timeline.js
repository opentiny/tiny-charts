import { formatDate } from '../../util/convert';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);

export default class TimeLine {
    constructor(
        canvasId,
        currentTime,
        option
    ) {

        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        // 获取配置项
        this.option = option;
        // 可选的每个刻度间隔代表多少分钟
        this.minuteStep = [1, 2, 5, 10, 15, 20, 30, 60, 120, 180, 240, 360, 720, 1440];
        // 最小刻度间距20px
        this.minScaleSpacing = 20;
        // 整个时间轴表示的时间长度
        this.totalHours = null;
        // 允许的最小大格长度px值 如果调小 大格会变密集
        this.minLargeScaleSpacing = 80;
        // 缩放层级
        this.zoom = 24;
        this.currentTime = currentTime;
        this.isMove = false;
        // this.isWheel = false;
        this.moveTimer = null;
        this.selectedPosition = [];
        // 设置时间是否可以启动
        this.setIsMove(this.option.isMove);
        // 设置时间轴是否可以缩放
        // this.setIsWheel(isWheel);
        // 鼠标是否被按下 用来确认时hover事件还是拖拽事件
        this.isMouseDownFlag = false;
        // 是否拖拽 用来确认mouseup时是点击事件还是拖拽事件
        this.isDragFlag = false;
        // 鼠标按下时鼠标x位置 在处理拖拽事件中用来比对
        this.mousedownX = 0;
        // 初始化时间轴
        this.init();
        // 叠加曲线图
        this.option.trendingData && this.drawLineChart(this.option);

        const _this = this;
        this.eventListener = {
            wheel(event) {
                // 事件this指向DOM元素
                _this.wheelEvent(event);
                _this.hoverMove(event);
            },
            mousedown(event) {
                _this.isMouseDownFlag = true;
                _this.mousedownX = _this.getMouseXRelativePos(event);
            },
            mouseup(event) {
                if (!_this.isDragFlag) {
                    _this.clickEvent(event);
                    _this.hoverMove(event);
                }
                // 初始化下面flag以免影响下次事件判断
                _this.isMouseDownFlag = false;
                _this.isDragFlag = false;
            },

            mousemove(event) {
                if (_this.isMouseDownFlag) {
                    _this.isDragFlag = true;
                    _this.dragMove(event);
                } else {
                    _this.hoverMove(event);

                }
            },
            mouseleave(event) {
                _this.init();
                document.getElementById('hoverPointer').style.display = 'none';
                document.getElementById('alarmTooltip').style.display = 'none';
                _this.isMouseDownFlag = false;
                _this.isDragFlag = false;
            }
        };

        // this.canvas.addEventListener("wheel", this.eventListener.wheel);
        this.canvas.addEventListener("mousedown", this.eventListener.mousedown);
        this.canvas.addEventListener("mousemove", this.eventListener.mousemove);
        this.canvas.addEventListener("mouseup", this.eventListener.mouseup);
        this.canvas.addEventListener("mouseleave", this.eventListener.mouseleave);
    }

    dragMove(event) {
        let posX = this.getMouseXRelativePos(event);
        let diffX = posX - this.mousedownX;
        let onePxsMS = (this.canvas.width - 40) / (this.totalHours * 60 * 60 * 1000);
        this.currentTime = this.currentTime - Math.round(diffX / onePxsMS);
        this.init();
        this.option.trendingData && this.drawLineChart(this.option);
        // 因为重新设置了currentTime 所以要重新设置鼠标按下位置
        // 否则偏移时间会进行累加 越拖越快越拖越快
        this.mousedownX = posX;
    }

    init() {
        // 更新初始时间戳
        this.refreshStartTimestamp();
        // 清空画布
        this.clearCanvas();
        // 画刻度
        this.drawScale();
        // 画当前时间游标
        this.option.currentTime && this.drawCursor(this.option.currentTime);
        // 画告警事件
        this.option.alarmData && this.drawAlarm(this.option);
        // 画状态区间
        this.option.statusRangeData && this.drawStatusRange(this.option);
    }

    // 更新初始时间戳
    refreshStartTimestamp() {
        if (this.option.timeRange !== undefined) {
            this.totalHours = (this.option.timeRange.endTime - this.option.timeRange.startTime) / (60 * 60 * 1000)
        }
        // 当currentTime改变或者整条时间轴代表的totalHours改变的时候 就刷新左边开始时间
        this.startTimestamp = this.option.timeRange && this.option.timeRange.startTime || this.currentTime - (this.totalHours * 60 * 60 * 1000);
    }

    // 清空画布
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // 画刻度
    drawScale() {
        // 一分钟多少像素
        let oneMinutePx = (this.canvas.width - 40) / (this.totalHours * 60);
        // 一毫秒多少像素
        let oneMSPx = oneMinutePx / (60 * 1000);
        // 刻度间隔 默认20px
        let scaleSpacing = this.minScaleSpacing;
        // 每格代表多少分钟
        let scaleUnit = scaleSpacing / oneMinutePx;

        let len = this.minuteStep.length;
        // 没有给出默认刻度就自动根据画布长度选择合适的刻度间隔
        if (this.option.interval != undefined) {
            scaleUnit = this.option.interval;
            scaleSpacing = oneMinutePx * scaleUnit;
        }
        else {
            for (let i = 0; i < len; i++) {
                if (scaleUnit < this.minuteStep[i]) {
                    // 选择正确的刻度单位分钟
                    scaleUnit = this.minuteStep[i];
                    // 每刻度之间的距离 = 一分钟多少像素 * 刻度单位
                    // 即 scaleUnit = scaleSpacing / oneMinutePx 的变形
                    // 主要是 this.totalHours 会变化 需要根据这个的变化来计算
                    scaleSpacing = oneMinutePx * scaleUnit;
                    break;
                }
            }
        }

        // 大格刻度相当于多少分钟
        let mediumStep = 30;
        if (this.option.mediumStep != undefined) {
            mediumStep = this.option.mediumStep;
        }
        else {
            for (let i = 0; i < len; i++) {
                if (this.minLargeScaleSpacing / oneMinutePx <= this.minuteStep[i]) {
                    mediumStep = this.minuteStep[i];
                    break;
                }
            }
        }


        let totalScales = (this.canvas.width - 40) / scaleSpacing;
        // 某个刻度距离最左端的距离
        let scaleLeft = 0;
        // 某个刻度的时间
        let scaleTime = this.startTimestamp;
        let lineHeight;
        // 因为中间点是currentTime是固定的 最右边不一定在某个刻度上 会有一定的偏移量
        let leftOffsetMs = scaleUnit * 60 * 1000 - (this.startTimestamp % (scaleUnit * 60 * 1000));
        // 开始时间偏移距离(px)
        let leftOffsetPx = leftOffsetMs * oneMSPx;
        // 一刻度多少毫秒
        let oneScalesMS = scaleSpacing / oneMSPx;
        let scaleLineHeight = this.canvas.height - 30;

        // 画刻度线和标签
        for (let i = 0; i < totalScales + 1; i++) {
            let date = new Date(scaleTime);
            if ((scaleTime / (60 * 1000)) % mediumStep == 0) {
                // 大格刻度标签长度
                lineHeight = 6;
                let scaleText = this.createScaleText(date);
                this.ctx.font = 'normal 12px HarmonyOS_Sans';
                // 文字颜色
                this.ctx.fillStyle = '#939393';
                this.ctx.fillText(scaleText, scaleLeft + 20 - this.ctx.measureText(scaleText).width / 2, this.canvas.height - 4);
            } else {
                // 小格刻度标签长度
                lineHeight = 3;
            }
            this.ctx.beginPath();
            this.ctx.moveTo(scaleLeft + 20, scaleLineHeight);
            this.ctx.lineTo(scaleLeft + 20, scaleLineHeight + lineHeight);
            this.ctx.closePath();
            this.ctx.lineWidth = 1;
            // 刻度线颜色
            this.ctx.strokeStyle = '#707070';
            this.ctx.stroke();
            // 距离 = 开始偏移距离 + 格数 * 每格得px;
            scaleLeft = leftOffsetPx + i * scaleSpacing;
            // 时间 = 左侧开始时间 + 偏移时间 + 格数 * 一格多少毫秒
            scaleTime = this.startTimestamp + leftOffsetMs + i * oneScalesMS;

        }
    }

    //画当前时间游标
    drawCursor(currentTime) {
        this.selectedPosition.push(this.getTimePos(currentTime), formatDate(currentTime, "hh:mm"));
        this.drawSelectedPointer(this.selectedPosition);
    }

    // 叠加告警事件圆点
    drawAlarm(option) {
        const alarmData = option.alarmData;
        const background = option.customBackground;
        for (let i = 0; i < alarmData.length; i++) {
            let x = this.getTimePos(alarmData[i].time);
            let type = alarmData[i].type;
            this.ctx.beginPath();
            this.ctx.arc(x, this.canvas.height - 60, 8, 0, 2 * Math.PI);
            this.ctx.closePath();
            this.ctx.fillStyle = background[type] || '#818181';
            this.ctx.fill();
        }
    }

    // 叠加告警事件圆点
    drawStatusRange(option) {
        const statusRangeData = option.statusRangeData;
        const background = option.customBackground;
        this.drawRoundRect(20, this.canvas.height - 40, this.canvas.width - 40, 8, 4);
        for (let i = 0; i < statusRangeData.length; i++) {
            let startPosition = this.getTimePos(statusRangeData[i].time[0]);
            let endPosition = this.getTimePos(statusRangeData[i].time[1]);
            let type = statusRangeData[i].type;
            this.ctx.beginPath();
            this.ctx.rect(startPosition, this.canvas.height - 40, endPosition - startPosition, 8);
            this.ctx.closePath();
            this.ctx.fillStyle = background[type] || '#818181';
            this.ctx.fill();
        }
    }

    // 绘制状态区间背景的圆角矩形
    drawRoundRect(x, y, width, height, radius) {
        this.ctx.beginPath();
        this.ctx.moveTo(x + radius, y);
        this.ctx.arcTo(x + width, y, x + width, y + height, radius);
        this.ctx.arcTo(x + width, y + height, x, y + height, radius);
        this.ctx.arcTo(x, y + height, x, y, radius);
        this.ctx.arcTo(x, y, x + width, y, radius);
        this.ctx.closePath();
        this.ctx.fillStyle = '#939393';
        this.ctx.fill();
    }

    // 初始化曲线图
    drawLineChart(option) {
        // 防止echarts重复init
        if (document.getElementById('chart_container') == null) {
            return
        }
        echarts.dispose(document.getElementById('chart_container'));
        let myChart = echarts.init(document.getElementById('chart_container'));
        const trendingData = option.trendingData;
        const arr = [];
        for (let i = 0; i < trendingData.length; i++) {
            const timestamp = trendingData[i].time;
            const percent = trendingData[i].percent;
            arr.push([timestamp, percent]);
        }
        let chartOption = {
            tooltip: {
                show: true,
                formatter: this.tipFormatter,
                trigger: 'axis',
                axisPointer: { type: 'line', lineStyle: { type: 'soild' } }
            },
            grid: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            xAxis: {
                type: 'time',
                min: this.startTimestamp,
                max: this.currentTime,
            },
            yAxis: {
                type: 'value',
                splitLine: { show: false },
                min: 0,
                max: 1
            },
            series: [
                {
                    type: 'line',
                    smooth: true,
                    data: arr,
                    symbol: 'circle',
                    symbolSize: 4,
                    showSymbol: false,
                    animation: false,
                    lineStyle: { color: 'rgba(255,255,255,0.2)' },

                }
            ]
        };
        Object.assign(chartOption['tooltip'], this.option.tooltip);
        myChart.setOption(chartOption);
    }

    // 曲线图的悬浮提示框样式
    tipFormatter = (params) => {
        const a = this.option.trendingData[params.dataIndex];
        return this.option.formatter(a);
    }

    // 鼠标悬浮事件
    hoverMove(event) {
        const mouseX = this.getMouseXRelativePos(event);
        const mouseY = this.getMouseYRelativePos(event);
        const hoverPointer = document.getElementById('hoverPointer');
        const alarmTooltip = document.getElementById('alarmTooltip');
        const alarmData = this.option.alarmData;

        if (mouseX > 0 && mouseX < this.canvas.width - 40) {
            this.showElement(hoverPointer);
            hoverPointer.style.left = mouseX - 1 + 20 + 'px';
            hoverPointer.style.top = this.canvas.height - 30 + 'px';
        } else {
            this.hideElement(hoverPointer);
        }

        if (alarmData) {
            for (const data of alarmData) {
                const x = this.getTimePos(data.time);
                if (this.isMouseInCircle(mouseX + 20, mouseY, x, this.canvas.height - 60)) {
                    this.showElement(alarmTooltip);
                    this.option.onCircleHover(alarmTooltip, data);
                    alarmTooltip.style.left = x - (alarmTooltip.clientWidth) / 2 + 'px';
                    alarmTooltip.style.top = this.canvas.height - 80 - (alarmTooltip.clientHeight) + 'px';
                    return;
                }
            }
            this.hideElement(alarmTooltip);
        }
    }

    // 判断鼠标是否在圆点内
    isMouseInCircle(mouseX, mouseY, x, y) {
        let distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
        return distance <= 8;
    }

    // 鼠标点击事件
    clickEvent(event) {
        // 计时器设置为静止
        // this.setIsMove(false);
        // 进入选中状态
        this.isSelected = true;
        const mouseX = this.getMouseXRelativePos(event);
        // const mouseY = this.getMouseYRelativePos(event);
        const time = this.getMousePosTime(event);
        this.selectedPosition.splice(0, this.selectedPosition.length);
        this.selectedPosition.push(mouseX + 20, formatDate(time, 'hh:mm'));
        const selectedPointer = document.getElementById('selectedPointer');
        const selectedTooltip = document.getElementById('selectedTooltip');
        const selectedCircle = document.getElementById('selectedCircle');
        if (mouseX > 0 && mouseX < this.canvas.width - 40) {
            this.drawSelectedPointer(this.selectedPosition);
        } else {
            this.hideElement(selectedPointer);
            this.hideElement(selectedTooltip);
            this.hideElement(selectedCircle);
        }

    }

    // 画选中状态的游标
    drawSelectedPointer(selectedPosition) {

        const selectedPointer = document.getElementById('selectedPointer');
        const selectedTooltip = document.getElementById('selectedTooltip');
        const selectedCircle = document.getElementById('selectedCircle');

        selectedPointer.style.left = selectedPosition[0] - 1 + 'px';
        selectedPointer.style.top = this.canvas.height - 42 + 'px';
        this.showElement(selectedPointer);

        selectedTooltip.innerHTML = `<p>${selectedPosition[1]}</p>`;
        selectedTooltip.style.left = selectedPosition[0] - 20 + 'px';
        selectedTooltip.style.top = this.canvas.height - 16 + 'px';
        this.showElement(selectedTooltip);

        selectedCircle.style.left = selectedPosition[0] - 4 + 'px';
        selectedCircle.style.top = this.canvas.height - 50 + 'px';
        this.showElement(selectedCircle);
    }

    // 设置长短刻度标签文字
    createScaleText(time) {
        // if (time.getHours() === 0 && time.getMinutes() === 0 && time.getMilliseconds() === 0) {
        //     return time.format("yyyy-MM-dd");
        // }
        if (time.getTime() === this.option.timeRange.startTime) {
            return formatDate(time, "00:00");
        } else if (time.getTime() === this.option.timeRange.endTime && (this.option.timeRange.endTime - this.option.timeRange.startTime) % (24 * 60 * 60 * 1000) === 0) {
            return formatDate(time, "24:00");
        }
        return formatDate(time, "hh:mm");
    }

    // 获取鼠标相对于canvas元素左侧20px的相对位置
    getMouseXRelativePos(event) {
        let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        let x = event.pageX || event.clientX + scrollX;
        // canvas元素距离窗口左侧距离
        let baseLeft = this.canvas.getBoundingClientRect().x;
        return x - baseLeft - 20;
    }

    // 获取鼠标相对于canvas元素上侧的相对位置
    getMouseYRelativePos(event) {
        let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        let y = event.pageY || event.clientY + scrollY;
        // canvas元素距离窗口左侧距离
        let baseTop = this.canvas.getBoundingClientRect().y;
        return y - baseTop;
    }

    // 根据画布的宽度和时间计算出鼠标所在的时间点
    getMousePosTime(event) {
        let posX = this.getMouseXRelativePos(event);
        // 每毫秒多少像素
        let onePxsMS = (this.canvas.width - 40) / (this.totalHours * 60 * 60 * 1000);
        let time = new Date(this.startTimestamp + posX / onePxsMS);
        return time;
    }

    // 根据时间点计算所在点距离canvas左侧20px的相对位置
    getTimePos(time) {
        // 每毫秒多少像素
        let onePxsMS = (this.canvas.width - 40) / (this.totalHours * 60 * 60 * 1000);
        let posX = (time - this.startTimestamp) * onePxsMS + 20;
        return posX;
    }

    // 显示元素
    showElement = (element) => {
        element.style.display = 'block';
    };

    // 隐藏元素
    hideElement = (element) => {
        element.style.display = 'none';
    };

    // 控制计时器是否启动
    setIsMove(isMove) {
        if (this.isMove === isMove) return;
        this.isMove = isMove;
        const clearTimer = () => {
            if (this.moveTimer) {
                clearInterval(this.moveTimer);
                this.moveTimer = null;
            }
        };
        if (isMove) {
            // 先清除之前的timer 否则会有两个timer同时进行
            if (this.moveTimer) {
                clearTimer();
            }
            this.moveTimer = setInterval(() => {
                this.currentTime += 1000;
                this.init();
            }, 1000);
        } else {
            clearTimer();
        }
    }

    // 清除定时器
    clearTimer1() {
        clearInterval(this.moveTimer);
    }

    // 滚动事件
    wheelEvent(event) {
        event.preventDefault();
        // 放大一倍or缩小一倍
        let delta = Math.max(-1, Math.min(1, event.wheelDelta));
        if (delta < 0) {
            this.zoom = this.zoom + 4;
            if (this.zoom >= 24) {
                //最大放大24小时
                this.zoom = 24;
            }
            this.totalHours = this.zoom;
        } else if (delta > 0) {
            this.zoom = this.zoom - 4;
            if (this.zoom <= 1) {
                //最小缩小1小时
                this.zoom = 1;
            }
            this.totalHours = this.zoom;
        }
        this.init();
    }

    //设置当前时间
    setCurrentTime(time) {
        let newTime;
        if (typeof time === "string") {
            newTime = new Date(time).getTime();
        } else if (typeof time === "object") {
            newTime = time.getTime && time.getTime();
        } else if (typeof time === "number") {
            newTime = time;
        }
        this.currentTime = newTime;
        this.init();
    }

    /* 
           1. 解绑所有事件
           2. 清空画布
           3. 清除timer
       */
    destroy() {
        this.canvas.removeEventListener("wheel", this.eventListener.wheel);
        this.canvas.removeEventListener("mousedown", this.eventListener.mousedown);
        this.canvas.removeEventListener("mousemove", this.eventListener.mousemove);
        this.canvas.removeEventListener("mouseup", this.eventListener.mouseup);
        this.canvas.removeEventListener("mouseleave", this.eventListener.mouseleave);
        this.clearCanvas();
        if (this.moveTimer) {
            clearInterval(this.moveTimer);
            this.moveTimer = null;
        }
    }
};