/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import Paint from '../../../util/paint';
import { appendDom } from '../../../util/dom';
import { isString, isArray } from '../../../util/type';
import { getExceededMarkLineValue, handleRedPointerSeries, handleRedPointerRadar } from '../handleSeries';
import Theme from '../../../feature/token';
import { setStateBarColor, getStateList } from '../../ProcessChart/handleSeries';
import { getColor } from '../../../util/color';
import { handletipHtml, checkValue } from '../handleOptipn';
import defendXSS from '../../../util/defendXSS';
import merge from '../../../util/merge';
import chartToken from '../chartToken';

const SUFFIX_CLASSNAME = 'radarCanvas';

class GradientRadar {
    painter = null;
    centerPoint = {
        x: 0,
        y: 0
    };

    canvasDom = null;
    echartsIns = null;
    iChartOption = null;
    // 容器dom信息
    containerDom = {
        target: null,
        width: 0,
        height: 0
    };

    // 计算半径的标尺
    radiusScale = 0;
    radius = {
        isArray: false,
        value: undefined
    };

    pointsMap = null;
    baseOption = null;
    radarKeys = null;
    constructor(echartsIns, params) {
        this.echartsIns = echartsIns;
        const container = echartsIns.getDom();
        this.containerDom.target = container;
        this.getContainerSize();
        const { iChartOption, baseOption, radarKeys } = params;
        this.iChartOption = iChartOption;
        this.baseOption = baseOption;
        this.radarKeys = radarKeys;
    }

    // 初始化canvas
    init() {
        if (!this.iChartOption.gradient) return;
        if (!this.containerDom.target) return;
        this.initCanvas();
        this.moveStartToRadarCenter();
        this.getRadius();
        this.getPointsMap();
        this.paintRadarArea();
    }

    getContainerSize() {
        this.containerDom.width = this.echartsIns.getWidth();
        this.containerDom.height = this.echartsIns.getHeight();
    }

    setCanvasSize() {
        this.canvasDom.width = this.containerDom.width;
        this.canvasDom.height = this.containerDom.height;
    }

    initCanvas() {
        if (this.containerDom.target) {
            const dom = this.containerDom.target.getElementsByClassName(`huicharts-${SUFFIX_CLASSNAME}`)[0];
            if (dom) this.containerDom.target.removeChild(dom);
        }
        const canvas = document.createElement('canvas');
        this.canvasDom = canvas;
        canvas.id = SUFFIX_CLASSNAME;
        canvas.className = `huicharts-${SUFFIX_CLASSNAME}`;
        this.setCanvasSize();
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.position = 'absolute';
        canvas.style.left = 0;
        canvas.style.top = 0;
        canvas.style['pointer-events'] = 'none';
        appendDom(this.containerDom.target, canvas);
        this.initPainter();
    }

    initPainter() {
        const ctx = this.canvasDom.getContext('2d');
        this.painter = new Paint(ctx);
        this.setPainter();
    }

    setPainter() {
        this.painter.lineCap('round');
        this.painter.lineJoin('round');
        this.painter.lineWidth(chartToken.lineWidth);
    }

    // 根据配置获取实际半径的像素尺寸
    convertsRadiusToNub(val) {
        const r = this.formatterVal(val);
        return this.isPctString(val) ? (r * this.radiusScale / 2) : r;
    }

    getRadius() {
        this.getRadiusScale();
        const { position } = this.iChartOption;
        const radius = position?.radius || '50%';
        if (isArray(radius)) {
            this.radius.isArray = true;
            const [inner, outer] = radius;
            const innerR = this.convertsRadiusToNub(inner);
            const outerR = this.convertsRadiusToNub(outer);
            this.radius.value = [innerR, outerR];
        }
        else {
            this.radius.value = this.convertsRadiusToNub(radius);
        }
    }

    getRadiusScale() {
        // val若是百分比，采用可视区尺寸（容器高宽中较小一项），echarts的说明
        this.radiusScale = this.containerDom.width >= this.containerDom.height ? this.containerDom.height : this.containerDom.width;
    }

    // 移动canvas起点到雷达的起点
    moveStartToRadarCenter() {
        this.getCenterPoint();
        // 保存初始画布
        this.painter.save();
        this.painter.translate(this.centerPoint.x, this.centerPoint.y);
    }

    formatterVal(val) {
        if (this.isPctString(val)) {
            return Number.parseFloat(val) / 100;
        }
        return Number.parseFloat(val);
    }

    getPoint(val, isY) {
        const size = isY ? this.containerDom.height : this.containerDom.width;
        const actualVal = this.formatterVal(val);
        return this.isPctString(val) ? actualVal * size : actualVal;
    }

    // 判断是否是百分比
    isPctString(val) {
        return isString(val) && val.includes('%');
    }

    // 获取中心坐标
    getCenterPoint() {
        const { position } = this.iChartOption;
        const center = position?.center || ['50%', '50%'];
        const x = this.getPoint(center[0]);
        const y = this.getPoint(center[1], true);
        this.centerPoint.x = x;
        this.centerPoint.y = y;
    }

    //   清空画布
    clearCanvas() {
        this.painter.restore();
        this.painter.clearRect(0, 0, this.containerDom.width, this.containerDom.height);
    }

    paintRadarArea() {
        if (!this.pointsMap) return;
        const pointsCoordinate = this.pointsMap.map((item, index) => {
            const point = this.getPointCoordinate(item, index);
            return {
                ...item,
                point
            };
        });
        pointsCoordinate.forEach((point, pointIndex) => {
            pointIndex === this.pointsMap.length - 1 ? this.paintRadarSide(point, pointsCoordinate[0]) : this.paintRadarSide(point, pointsCoordinate[pointIndex + 1]);
        });
        pointsCoordinate.forEach((point) => {
            this.paintPoint(point);
        });
    }

    paintPoint(point) {
        const x = point.point[0];
        const y = point.point[1];
        const fillColor = chartToken.gradientItemBorderColor;
        const r = (chartToken.symbolSize - (2 * chartToken.lineWidth)) / 2 < 0 ? 0 : (chartToken.symbolSize - (2 * chartToken.lineWidth)) / 2;
        this.painter.fillStyle(fillColor);
        this.painter.beginPath();
        this.painter.moveTo(x, y);
        this.painter.arc(x, y, r, 0, 2 * Math.PI);
        this.painter.fill();
        this.painter.closePath();
    }

    judgePointAtCanvasCoordinateAxis(angle) {
        return angle === 0 || angle === 90 || angle === 270 || angle === 360;
    }

    paintRadarSide(point, nextPoint) {
        const x = point.point[0];
        const y = point.point[1];
        const x1 = nextPoint.point[0];
        const y1 = nextPoint.point[1];
        const linearGradient = this.painter.createLinearGradient(x, y, x1, y1);
        linearGradient.addColorStop(0, point.color);
        linearGradient.addColorStop(1, nextPoint.color);
        this.painter.strokeStyle(linearGradient);
        this.painter.beginPath();
        this.painter.moveTo(x, y);
        this.painter.lineTo(x1, y1);
        this.painter.stroke();
        this.painter.closePath();
    }

    // 点到圆心的距离
    getPointDistanceFromCenter(dataItem) {
        const { dataName, dataValue } = dataItem;
        const max = this.baseOption.radar[0].indicator.find(item => item.name === dataName).max;
        if (this.radius.isArray) {
            return (this.radius.value[1] - this.radius.value[0]) * (dataValue / max) + this.radius.value[0];
        }
        return this.radius.value * (dataValue / max);
    }

    getCoefficient(multiple, isYaxis = false) {
        if (isYaxis) {
            // multiple取值为0，2，4
            return multiple === 2 ? 1 : -1;
        }
        else {
            // multiple取值为1，3
            return multiple === 1 ? -1 : 1;
        }
    }

    //  逆时针方向方向，象限特殊判断和常规角度不一致
    judgeQuadrants(angle) {
        if (angle > 0 && angle < 90) {
            return 4;
        }
        else if (angle > 90 && angle < 180) {
            return 3;
        }
        else if (angle > 180 && angle < 270) {
            return 2;
        }
        else if (angle > 270 && angle < 360) {
            return 1;
        }
    }

    getPointCoordinate(dataItem, dataIndex) {
        const distance = this.getPointDistanceFromCenter(dataItem);
        // echarts加角度以逆时针的方向从90度加角度，特殊处理
        const angle = (360 / this.radarKeys.length) * dataIndex;
        let x = 0;
        let y = 0;
        if (this.judgePointAtCanvasCoordinateAxis(angle)) {
            const multiple = angle / 90;
            // 判断是否在y轴上
            const isYaxis = angle / 90 % 2 === 0;
            x = isYaxis ? 0 : (distance * this.getCoefficient(multiple));
            y = isYaxis ? (distance * this.getCoefficient(multiple, isYaxis)) : 0;
        }
        else {
            const quadrant = this.judgeQuadrants(angle);
            const actualAngle = (angle - (90 * (4 - quadrant))) * (Math.PI / 180);
            if (quadrant === 1) {
                x = Math.cos(actualAngle);
                y = Math.sin(actualAngle) * (-1);
            }
            else if (quadrant === 2) {
                x = Math.sin(actualAngle);
                y = Math.cos(actualAngle);
            }
            else if (quadrant === 3) {
                x = Math.cos(actualAngle) * (-1);
                y = Math.sin(actualAngle);
            }
            else {
                x = Math.sin(actualAngle) * (-1);
                y = Math.cos(actualAngle) * (-1);
            }
            x = x * distance;
            y = y * distance;
        }
        return [x, y];
    }

    setSeries() {
        if (!this.pointsMap) return;
        const seriesUnit = this.baseOption.series[0];
        seriesUnit.lineStyle.opacity = 0;
        seriesUnit.areaStyle.opacity = 0;
        seriesUnit.emphasis = {};
        this.pointsMap.forEach((item, index) => {
            const { seriesName, dataName, dataValue, color } = item;
            const dataNameIndex = this.radarKeys.indexOf(dataName);
            const unitRadar = handleRedPointerRadar(this.baseOption, this.radarKeys, dataNameIndex, dataName);
            const unitPointerSeries = handleRedPointerSeries(index, dataValue, seriesName, true);
            unitPointerSeries.itemStyle.color = color;
            unitPointerSeries.itemStyle.shadowBlur = 15;
            unitPointerSeries.itemStyle.shadowColor = color;
            unitPointerSeries.emphasis.itemStyle.color = color;
            unitPointerSeries.emphasis.itemStyle.borderColor = color;
            this.baseOption.radar.push(unitRadar);
            this.baseOption.series.push(unitPointerSeries);
        });
    }

    getPointColor(value, index) {
        const { state, color } = this.iChartOption;
        if (state) {
            const { colorState } = Theme.config;
            const stateColorGroup = {
                error: colorState.colorError,
                warning: colorState.colorAlert,
                subwarning: colorState.colorWarning,
                success: colorState.colorSuccess,
            };
            const successColor = stateColorGroup.success;
            const stateList = getStateList(state);
            return setStateBarColor(value, stateColorGroup, successColor, stateList);
        }
        else {
            return getColor(color, index);
        }
    }

    // 获取数据点的集合
    getPointsMap() {
        const { data } = this.iChartOption;
        const exceeded = getExceededMarkLineValue(data, 0, false);
        this.pointsMap = exceeded.map((item, index) => {
            const color = this.getPointColor(item.dataValue, index);
            return { ...item, color };
        });
    }

    setLegend() {
        this.baseOption.legend.show = false;
    }

    tipFormatter() {
        this.baseOption.tooltip.formatter = params => {
            const seriesdata = params.data;
            const dataName = seriesdata.name;
            let value = seriesdata.value;
            if (params.seriesName === 'threshold') {
                value = this.radarKeys.map(key => {
                    return this.iChartOption.data[dataName][key];
                });
            }
            let htmlString = `<div style="margin-bottom:4px;">${defendXSS(dataName)}</div>`;
            value.forEach((item, index) => {
                const color = this.pointsMap[index].color;
                htmlString += `<div style="margin-bottom:4px;">
            <span style="display:inline-block;width:8px;
            height:8px;margin-right:8px;border-radius:5px;
            background-color:${defendXSS(color)};"></span>
            <span style="display:inline-block;margin-right:8px;
            min-width:60px;font-size:12px">${defendXSS(this.radarKeys[index])}</span>
            <span style="font-size:14px">${defendXSS(checkValue(item))}</span>
            </div>`;
            });
            return htmlString;
        };
    }

    setTooltip() {
        const { tipHtml, tooltip } = this.iChartOption;
        tipHtml ? handletipHtml(this.baseOption.tooltip, tipHtml, this.radarKeys) : this.tipFormatter();
        if (tooltip) {
            merge(this.baseOption.tooltip, tooltip);
        }
        // 针对tooltip中传formatter做特殊处理
        if (tooltip?.formatter) {
            this.baseOption.tooltip.formatter = (params, ticket, callback) => {
                return tooltip.formatter(params, this.radarKeys, ticket, callback);
            };
        }
    }

    resize() {
        if (this.containerDom.target && this.canvasDom) {
            if (this.painter) this.clearCanvas();
            this.getContainerSize();
            // 修改canva的宽高属性会导致之前的ctx失效
            this.setCanvasSize();
            this.setPainter();
            this.moveStartToRadarCenter();
            this.getRadius();
            this.paintRadarArea();
        }
    }
}

export default GradientRadar;
