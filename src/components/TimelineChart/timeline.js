import { formatDate } from '../../util/convert';
import defendXSS from '../../util/defendXSS';
import Theme from '../../feature/token';
import chartToken from './chartToken';

export default class TimeLine {
    constructor(
        canvasId,
        currentTime,
        option
    ) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');

        // 获取配置项
        this.option = option;
        // 当前时间
        this.currentTime = currentTime;
        // 自定义时间轴的背景色
        this.canvas.style.background = this.option.background || 'transparent';
        // 整个时间轴的时间
        this.totalHours = null;
        // 刻度间隔(分钟)
        this.minuteStep = [1, 2, 5, 10, 15, 20, 30, 60, 120, 180, 240, 360, 720, 1440];
        // 最小刻度间距20px
        this.minScaleSpacing = 20;
        // 允许的最小大格长度px值 如果调小 大格会变密集
        this.minLargeScaleSpacing = 80;
        // 缩放层级
        this.zoom = 24;
        // 鼠标选中位置
        this.selectedPosition = [];
        // 初始化时间轴
        this.init();

        const _this = this;
        this.eventListener = {
            mouseup(event) {
                _this.clickEvent(event);
                _this.hoverMove(event);
            },
            mousemove(event) {
                _this.hoverMove(event);
            },
            mouseleave(event) {
                _this.init();
                document.getElementsByClassName('timeline_hoverPointer')[0].style.display = 'none';
                document.getElementsByClassName('timeline_alarmTooltip')[0].style.display = 'none';
            }
        };
        this.canvas.addEventListener('mousemove', this.eventListener.mousemove);
        this.canvas.addEventListener('mouseup', this.eventListener.mouseup);
        this.canvas.addEventListener('mouseleave', this.eventListener.mouseleave);
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
        // 画warning事件
        this.option.alarmData && this.drawAlarm(this.option);
        // 画状态区间背景
        this.drawRoundRect(20, this.canvas.height - 40, this.canvas.width - 40, 8, 4);
        // 画状态区间
        this.option.statusRangeData && this.drawStatusRange(this.option);
    }

    // 更新初始时间戳
    refreshStartTimestamp() {
        if (this.option.timeRange !== undefined) {
            this.totalHours = (this.option.timeRange.endTime - this.option.timeRange.startTime) / (60 * 60 * 1000)
        }
        // 当currentTime改变或者整个时间轴的totalHours改变的时候 就刷新左边开始时间
        this.startTimestamp = this.option.timeRange && this.option.timeRange.startTime || this.currentTime - (this.totalHours * 60 * 60 * 1000);
    }

    // 清空画布
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // 画刻度
    drawScale() {
        // px/分钟
        let oneMinutePx = (this.canvas.width - 40) / (this.totalHours * 60);
        // px/毫秒
        let oneMSPx = oneMinutePx / (60 * 1000);
        // 刻度间隔 默认20px
        let scaleSpacing = this.minScaleSpacing;
        // 每格代表多少分钟
        let scaleUnit = scaleSpacing / oneMinutePx;

        let len = this.minuteStep.length;
        // 配置项刻度间隔
        if (this.option.interval !== undefined) {
            scaleUnit = this.option.interval;
            scaleSpacing = oneMinutePx * scaleUnit;
        }
        // 自动根据画布长度选择合适的刻度间隔
        else {
            for (let i = 0; i < len; i++) {
                if (scaleUnit < this.minuteStep[i]) {                             
                    scaleUnit = this.minuteStep[i];
                    scaleSpacing = oneMinutePx * scaleUnit;
                    break;
                }
            }
        }

        // 大刻度相当于多少分钟
        let mediumStep = 30;
        if (this.option.mediumStep !== undefined) {
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
        let leftOffsetMs = scaleUnit * 60 * 1000 - (this.startTimestamp % (scaleUnit * 60 * 1000));
        // 开始时间偏移距离(px)
        let leftOffsetPx = leftOffsetMs * oneMSPx;
        // 一刻度多少毫秒
        let oneScalesMS = scaleSpacing / oneMSPx;
        let scaleLineHeight = this.canvas.height - 30;

        // 画刻度线和标签
        for (let i = 0; i < totalScales + 1; i++) {
            let date = new Date(scaleTime);
            if ((scaleTime / (60 * 1000)) % mediumStep === 0) {
                // 大格刻度标签长度
                lineHeight = 6;
                let scaleText = this.createScaleText(date);
                this.ctx.font = 'normal 12px HarmonyOS_Sans';
                // 文字颜色
                this.ctx.fillStyle = Theme.config.xAxisLabelColor;
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
            this.ctx.strokeStyle = Theme.config.xAxisTickLineColor;
            this.ctx.stroke();
            // 距离 = 开始偏移距离 + 格数 * 每格得px;
            scaleLeft = leftOffsetPx + i * scaleSpacing;
            // 时间 = 左侧开始时间 + 偏移时间 + 格数 * 一格多少毫秒
            scaleTime = this.startTimestamp + leftOffsetMs + i * oneScalesMS;
        }
    }

    // 画当前时间游标
    drawCursor(currentTime) {
        this.selectedPosition.push(this.getTimePos(currentTime), formatDate(currentTime, 'hh:mm'));
        this.drawSelectedPointer(this.selectedPosition);
    }

    // 叠加warning事件圆点
    drawAlarm(option) {
        const alarmData = option.alarmData;
        const background = option.customBackground;
        for (let i = 0; i < alarmData.length; i++) {
            let x = this.getTimePos(alarmData[i].time);
            let type = alarmData[i].type;
            this.ctx.beginPath();
            this.ctx.arc(x, this.canvas.height - 60, 8, 0, 2 * Math.PI);
            this.ctx.closePath();
            this.ctx.fillStyle = background[type] || Theme.config.colorState.colorNone;
            this.ctx.fill();
        }
    }

    // 叠加状态区间
    drawStatusRange(option) {
        const statusRangeData = option.statusRangeData;
        const timeRange = option.timeRange;
        const background = option.customBackground;
        for (let i = 0; i < statusRangeData.length; i++) {
            let startPosition = this.getTimePos(statusRangeData[i].time[0]);
            let endPosition = this.getTimePos(statusRangeData[i].time[1]);
            let type = statusRangeData[i].type;
            this.ctx.beginPath();
            if (statusRangeData[i].time[0] === timeRange.startTime && statusRangeData[i].time[1] === timeRange.endTime) {
                this.ctx.roundRect(startPosition, this.canvas.height - 40, endPosition - startPosition, 8, [8, 8, 8, 8]);
            } else if (statusRangeData[i].time[0] === timeRange.startTime) {
                this.ctx.roundRect(startPosition, this.canvas.height - 40, endPosition - startPosition, 8, [8, 0, 0, 8]);
            } else if (statusRangeData[i].time[1] === timeRange.endTime) {
                this.ctx.roundRect(startPosition, this.canvas.height - 40, endPosition - startPosition, 8, [0, 8, 8, 0]);
            } else {
                this.ctx.rect(startPosition, this.canvas.height - 40, endPosition - startPosition, 8);
            }
            this.ctx.closePath();
            this.ctx.fillStyle = background[type] || Theme.config.colorState.colorNone;
            this.ctx.fill();
        }
    }

    // 绘制状态区间背景的圆角矩形
    drawRoundRect(x, y, width, height, radius) {
        this.ctx.beginPath();
        this.ctx.roundRect(x, y, width, height, radius);
        this.ctx.closePath();
        this.ctx.fillStyle = chartToken.roundRectBg;
        this.ctx.fill();
    }

    // 鼠标悬浮事件
    hoverMove(event) {
        const mouseX = this.getMouseXRelativePos(event);
        const hoverPointer = document.getElementsByClassName('timeline_hoverPointer')[0];
        if (mouseX > 0 && mouseX < this.canvas.width - 40) {
            this.showElement(hoverPointer);
            hoverPointer.style.left = mouseX - 1 + 20 + 'px';
            hoverPointer.style.top = this.canvas.height - 30 + 'px';
        } else {
            this.hideElement(hoverPointer);
        }
        this.setAlarmTip(event, mouseX)
    }

    // 设置Alarm点的tip
    setAlarmTip(event, mouseX) {
        const mouseY = this.getMouseYRelativePos(event);
        const alarmTooltip = document.getElementsByClassName('timeline_alarmTooltip')[0];
        const alarmData = this.option.alarmData;
        if (alarmData) {
            this.processAlarmData(alarmData, mouseX, mouseY, alarmTooltip);
        }
    }

    processAlarmData(alarmData, mouseX, mouseY, alarmTooltip) {
        for (const data of alarmData) {
            const x = this.getTimePos(data.time);
            if (this.isMouseInCircle(mouseX + 20, mouseY, x, this.canvas.height - 60)) {
                this.showElement(alarmTooltip);
                this.option.onCircleHover(alarmTooltip, data);
                if ((x - (alarmTooltip.offsetWidth) / 2) < 0) {
                    alarmTooltip.style.left = '0px'
                } else if ((x - (alarmTooltip.offsetWidth) / 2) > (this.canvas.width - alarmTooltip.offsetWidth - 40)) {
                    alarmTooltip.style.left = this.canvas.width - (alarmTooltip.offsetWidth) + 'px'
                } else {
                    alarmTooltip.style.left = x - (alarmTooltip.offsetWidth / 2) + 'px';
                }
                alarmTooltip.style.top = this.canvas.height - 80 - (alarmTooltip.clientHeight) + 'px';
                return;
            }
        }
        this.hideElement(alarmTooltip);
    }

    // 判断鼠标是否在圆点内
    isMouseInCircle(mouseX, mouseY, x, y) {
        let distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
        return distance <= 8;
    }

    // 鼠标点击事件
    clickEvent(event) {
        // 进入选中状态
        this.isSelected = true;
        const mouseX = this.getMouseXRelativePos(event);
        const time = this.getMousePosTime(event);
        this.option.onClick && this.option.onClick(time.getTime());
        // 如果有点击时间，将时间赋值给配置项的当前时间
        this.option.currentTime = time;
        this.selectedPosition.splice(0, this.selectedPosition.length);
        this.selectedPosition.push(mouseX + 20, formatDate(time, 'hh:mm'));
        const selectedPointer = document.getElementsByClassName('timeline_selectedPointer')[0];
        const selectedTooltip = document.getElementsByClassName('timeline_selectedTooltip')[0];
        const selectedCircle = document.getElementsByClassName('timeline_selectedCircle')[0];
        if (mouseX > 0 && mouseX < (this.canvas.width - 40)) {
            this.drawSelectedPointer(this.selectedPosition);
        } else {
            this.hideElement(selectedPointer);
            this.hideElement(selectedTooltip);
            this.hideElement(selectedCircle);
        }
    }

    // 画选中状态的游标
    drawSelectedPointer(selectedPosition) {

        const selectedPointer = document.getElementsByClassName('timeline_selectedPointer')[0];
        const selectedTooltip = document.getElementsByClassName('timeline_selectedTooltip')[0];
        const selectedCircle = document.getElementsByClassName('timeline_selectedCircle')[0];

        selectedPointer.style.left = selectedPosition[0] - 1 + 'px';
        selectedPointer.style.top = this.canvas.height - 42 + 'px';
        this.showElement(selectedPointer);

        selectedTooltip.innerHTML = `<p>${defendXSS(selectedPosition[1])}</p>`;
        selectedTooltip.style.left = selectedPosition[0] - 20 + 'px';
        selectedTooltip.style.top = this.canvas.height - 16 + 'px';
        this.showElement(selectedTooltip);

        selectedCircle.style.left = selectedPosition[0] - 4 + 'px';
        selectedCircle.style.top = this.canvas.height - 50 + 'px';
        this.showElement(selectedCircle);
    }

    // 设置长短刻度标签文字
    createScaleText(time) {
        if (time.getTime() === this.option.timeRange.startTime) {
            return formatDate(time, '00:00');
        } else if (time.getTime() === this.option.timeRange.endTime && (this.option.timeRange.endTime - this.option.timeRange.startTime) % (24 * 60 * 60 * 1000) === 0) {
            return formatDate(time, '24:00');
        }
        return formatDate(time, 'hh:mm');
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

    hideElement = (element) => {
        element.style.display = 'none';
    };

    // 设置当前时间
    setCurrentTime(time) {
        let newTime;
        if (typeof time === 'string') {
            newTime = new Date(time).getTime();
        } else if (typeof time === 'object') {
            newTime = time.getTime && time.getTime();
        } else if (typeof time === 'number') {
            newTime = time;
        }
        this.currentTime = newTime;
        this.init();
    }
};