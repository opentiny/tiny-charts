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
import merge from '../../../util/merge';
import { isObject } from '../../../util/type';

const SVG_TYPE = {
    DOT: 'dot',
    MESH: 'mesh',
    DOUBLE_MESH: 'doubleMesh'
}
class Grid {
    // 画布容器
    container = null

    // 默认样式配置
    defaultOption = {
        type: SVG_TYPE.DOT,
        show: false,
        size: 30,
        config: {
            color: '#aaaaaa',
            unitSize: 1
        }
    }

    // 双线网格默认配置
    doubleMeshDefaultConfig = [
        {
            color: '#eee',    // 主网格线颜色
            unitSize: 1, // 主网格线宽度
        },
        {
            color: '#ddd',    // 次网格线颜色
            unitSize: 1, // 次网格线宽度
            factor: 4,        // 主次网格线间隔
        }
    ]

    constructor(container, option) {
        if (option && isObject(option)) {
            //配置doubleMesh默认值
            if (option?.type === SVG_TYPE.DOUBLE_MESH) this.defaultOption.config = this.doubleMeshDefaultConfig;
            merge(this.defaultOption, option);
        }
        this.container = container;
        this.bgCanvas = document.createElement('canvas');
        this.bgCanvas.setAttribute('class', 'huicharts-canvas-bg');
        this.bgCanvas.width = this.container.offsetWidth;
        this.bgCanvas.height = this.container.offsetHeight;
        this.bgCanvasCtx = this.bgCanvas.getContext('2d');
        this.container.appendChild(this.bgCanvas);
        this.draw({
            scale: 1,
            offset: { x: 0, y: 0 }
        });
    }

    // 绘制网格
    draw(option) {
        let scale = option.scale;
        let offset = option.offset;
        //画布清空
        this.bgCanvasCtx.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);
        //保存初始状态
        this.bgCanvasCtx.save();
        //画布原点进行偏移
        //间隔
        const step = this.defaultOption.size;
        this.scale = scale;
        //视口放缩后的宽高
        const viewportWidth = this.bgCanvas.width / scale;
        const viewportHeight = this.bgCanvas.height / scale;
        this.bgCanvasCtx.translate(offset.x+this.bgCanvas.width/2, offset.y+this.bgCanvas.height/2);
        //画布放缩
        this.bgCanvasCtx.scale(scale, scale);
        //刻度线的起始位置
        
        //小于或等于的整数
        const startX = Math.floor(-offset.x / scale / step) * step - viewportWidth/2;
        const startY = Math.floor(-offset.y / scale / step) * step - viewportHeight/2;
        const endX = startX + viewportWidth + step;
        const endY = startY + viewportHeight + step;
        let drawOption = { startX, endX, startY, endY, step };
        if (this.defaultOption?.type === SVG_TYPE.MESH) {
            // 绘制网格
            this.drawMesh(drawOption)
        } else if (this.defaultOption?.type === SVG_TYPE.DOT) {
            // 绘制点
            this.drawDOT(drawOption)
        } else {
            // 绘制双层网格
            this.drawDoubleMesh(drawOption)
        }
    }

    // 绘制点背景
    drawDOT(option) {
        let { startX, endX, startY, endY, step } = option;
        // 绘制底图
        const size = (this.defaultOption.config.unitSize || 1) * this.scale; // 点的大小

        for (let x = 0; x > startX; x -= step) {
            for (let y = 0; y > startY; y -= step) {
                this.drawPoint(x, y, size);
            }
            for (let y = 0; y <= endY; y += step) {
                this.drawPoint(x, y, size);
            }
        }
        for (let x = step; x <= endX; x += step) {
            for (let y = 0; y > startY; y -= step) {
                this.drawPoint(x, y, size);
            }
            for (let y = 0; y <= endY; y += step) {
                this.drawPoint(x, y, size);
            }
        }
        this.bgCanvasCtx.restore();
    }

    // 绘制点
    drawPoint(x, y, size) {
        this.bgCanvasCtx.fillStyle = this.defaultOption.config.color;
        this.bgCanvasCtx.beginPath();
        this.bgCanvasCtx.arc(x, y, size, 0, Math.PI * 2);
        this.bgCanvasCtx.fill();
    }

    // 绘制网格背景
    drawMesh(option) {
        let { startX, endX, startY, endY, step } = option;
        this.bgCanvasCtx.strokeStyle =  this.defaultOption.config.color;
        this.bgCanvasCtx.lineWidth = (this.defaultOption.config.unitSize || 1) * this.scale;
        for (let x = 0; x > startX; x -= step) {
            this.bgCanvasCtx.beginPath();
            this.bgCanvasCtx.moveTo(x, startY);
            this.bgCanvasCtx.lineTo(x, endY);
            this.bgCanvasCtx.stroke();
        }
        for (let x = step; x <= endX; x += step) {
            this.bgCanvasCtx.beginPath();
            this.bgCanvasCtx.moveTo(x, startY);
            this.bgCanvasCtx.lineTo(x, endY);
            this.bgCanvasCtx.stroke();
        }

        for (let y = 0; y > startY; y -= step) {
            this.bgCanvasCtx.beginPath();
            this.bgCanvasCtx.moveTo(startX, y);
            this.bgCanvasCtx.lineTo(endX, y);
            this.bgCanvasCtx.stroke();
        }
        for (let y = 0; y <= endY; y += step) {
            this.bgCanvasCtx.beginPath();
            this.bgCanvasCtx.moveTo(startX, y);
            this.bgCanvasCtx.lineTo(endX, y);
            this.bgCanvasCtx.stroke();
        }
        this.bgCanvasCtx.restore();
    }

    // 绘制双层网格背景
    drawDoubleMesh(option) {
        let { startX, endX, startY, endY, step } = option;
        // 绘制第一层网格
        this.bgCanvasCtx.strokeStyle = this.defaultOption.config[0]?.color;
        this.bgCanvasCtx.lineWidth = this.defaultOption.config[0]?.unitSize * this.scale;
        let secondGridSize = step * (this.defaultOption.config[1]?.factor || 4);
        
        for (let x = 0; x > startX; x -= step) {
            this.bgCanvasCtx.beginPath();
            this.bgCanvasCtx.moveTo(x, startY);
            this.bgCanvasCtx.lineTo(x, endY);
            this.bgCanvasCtx.stroke();
        }
        for (let x = step; x <= endX; x += step) {
            this.bgCanvasCtx.beginPath();
            this.bgCanvasCtx.moveTo(x, startY);
            this.bgCanvasCtx.lineTo(x, endY);
            this.bgCanvasCtx.stroke();
        }

        for (let y = 0; y > startY; y -= step) {
            this.bgCanvasCtx.beginPath();
            this.bgCanvasCtx.moveTo(startX, y);
            this.bgCanvasCtx.lineTo(endX, y);
            this.bgCanvasCtx.stroke();
        }
        for (let y = 0; y <= endY; y += step) {
            this.bgCanvasCtx.beginPath();
            this.bgCanvasCtx.moveTo(startX, y);
            this.bgCanvasCtx.lineTo(endX, y);
            this.bgCanvasCtx.stroke();
        }

        // 绘制第二层网格
        this.bgCanvasCtx.strokeStyle = this.defaultOption.config[1]?.color;
        this.bgCanvasCtx.lineWidth = this.defaultOption.config[1]?.unitSize * this.scale;  
        for (let x = 0; x > startX; x -= secondGridSize) {
            this.bgCanvasCtx.beginPath();
            this.bgCanvasCtx.moveTo(x, startY);
            this.bgCanvasCtx.lineTo(x, endY);
            this.bgCanvasCtx.stroke();
        }
        for (let x = 0; x <= endX; x += secondGridSize) {
            this.bgCanvasCtx.beginPath();
            this.bgCanvasCtx.moveTo(x, startY);
            this.bgCanvasCtx.lineTo(x, endY);
            this.bgCanvasCtx.stroke();
        }

        for (let y = 0; y > startY; y -= secondGridSize) {
            this.bgCanvasCtx.beginPath();
            this.bgCanvasCtx.moveTo(startX, y);
            this.bgCanvasCtx.lineTo(endX, y);
            this.bgCanvasCtx.stroke();
        }
        for (let y = 0; y <= endY; y += secondGridSize) {
            this.bgCanvasCtx.beginPath();
            this.bgCanvasCtx.moveTo(startX, y);
            this.bgCanvasCtx.lineTo(endX, y);
            this.bgCanvasCtx.stroke();
        }
        this.bgCanvasCtx.restore();
    }

    roundDownGridSize(num, GridSize) {
        // 判断是否有余数，有余数则取小于当前值的最近值
        if (num % GridSize !== 0) {
          num = Math.floor(num / GridSize) * GridSize;
        }
        return num;
    }

    // 获取网格大小
    getSize() {
        return this.defaultOption.size;
    }

    // 设置网格大小
    setSize(size) {
        this.defaultOption.size = size;
    }

    // 显示网格
    show() {
        if (this.container) {
            this.draw();
        }
    }

    // 隐藏网格
    hide() {
        if (this.container && this.bgCanvas) {
            this.clear();
        }
    }

    // 清除网格
    clear() {
        if (this.container && this.bgCanvas) {
            this.bgCanvasCtx.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);
        }
    }

    setGrid(option, scale, offset) {
        if (option && isObject(option)) {
            //配置doubleMesh默认值
            if (option?.type === SVG_TYPE.DOUBLE_MESH) this.defaultOption.config = this.doubleMeshDefaultConfig;
            merge(this.defaultOption, option);
        }
        this.draw({
            scale,
            offset
        });
    }
}

export default Grid;