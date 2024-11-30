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
import initDom from './initDom';
import Tool from './tool';
import merge from '../../../util/merge';
import { Animation } from '../animation/index';
import { pxToNumber } from '../../../util/convert';
class CanvasManager {
    constructor(dom, option) {
        this.defaultOption = {
            scale: 1,
            scaleUnit: 0.1,
            scaleAllow: true,
            scaleThrottle: 200,
            scaleLimit: {
                min: 0.5,
                max: 1.5
            },
        };
        option = merge(this.defaultOption, option);
        this.option = option;
        // 画布容器
        this.dom = dom;
        // 是否允许缩放
        this.scaleAllow = option.scaleAllow;
        // 当前缩放值(初始化时，将其约束在极值范围之内)
        this.scale = Math.min(Math.max(option.scale, option.scaleLimit.min), option.scaleLimit.max);
        this.lastScale = this.scale;
        // 上一次操作的位置
        this.nodeOffset = {
            x: 0,
            y: 0
        };
        this.translateX = 0;
        this.translateY = 0;
        // 缩放节流时间
        this.scaleThrottle = option.scaleThrottle;
        // 实际动效时长
        this.transitionDuration = Math.max(this.scaleThrottle - 50, 0);
        // 创建各层容器
        this.insertDragDom();
        // 外容器相关参数
        this.containerRect = this.dom.getBoundingClientRect();
        //节点容器相关参数
        this.nodeRect = this.nodeContainer.getBoundingClientRect();
        // 缩放单位
        this.scaleUnit = option.scaleUnit;
        // 缩放上下限
        this.scaleLimit = {
            min: option.scaleLimit.min,
            max: option.scaleLimit.max
        };
        this.draging = false;
        if (option.show) {
            // 创建操作按钮
            let self = this;
            this.tool = new Tool()
            this.tool.createTools(option, this.root, this);
            this.container.addEventListener('mousedown', this.bindMouseDown.bind(this));
            this.container.addEventListener('mousemove', this.bindMouseMove.bind(this));
            this.container.addEventListener('mouseup', this.bindMouseUp.bind(this));
            // 在允许使用滚轮的时候 绑定事件wheel
            if (self.scaleAllow) {
                window.addEventListener('wheel', function (event) {
                    // 判断事件发生的位置是否在this.container内
                    if (self.container.contains(event.target)) {
                        event.preventDefault();
                        self.bindMouseWheel(event)
                    }
                }.bind(this.container), { passive: false });
            } 
            this.dom.addEventListener('mouseleave', this.bindMouseLeave.bind(this));
        }
        // 初始化设置画布位置到屏幕正中心
        this.initPosition();
    }

    // 插入拖拽画布
    insertDragDom() {
        let containers = initDom(this.dom, this.option);
        this.containers = containers;
        this.root = containers.root;
        this.container = containers.container;
        this.bgCanvas = containers.bgCanvas;
        this.lineContainer = containers.lineContainer;
        this.nodeContainer = containers.nodeContainer;
        this.lineGContainer = containers.lineGContainer;
        this.secondlineGContainer = containers.secondlineGContainer;
        this.animationContainer = containers.animationContainer;
    }

    // 设置this.dom的位置为屏幕正中间
    initPosition() {
        // 重置node container中心位置
        this.nodeOrigin = {
            x: this.containerRect.width / 2,
            y: this.containerRect.height / 2
        }
        // 设施画布初始化缩放
        let center = {
            x: this.containerRect.left + this.containerRect.width / 2,
            y: this.containerRect.top + this.containerRect.height / 2,
        };
        this.scaleDom(center.x, center.y, this.scale, true);
    }

    // 鼠标按下事件
    bindMouseDown(e) {
        this.draging = false;
        this.startPos = {
            domx: pxToNumber(this.nodeContainer.style.left),
            domy: pxToNumber(this.nodeContainer.style.top),
            mousex: e.clientX,
            mousey: e.clientY
        };
    }

    // 鼠标拖拽事件
    bindMouseMove(e) {
        if (this.startPos) {
            this.draging = true;
            let moveX = e.clientX - this.startPos.mousex;
            let moveY = e.clientY - this.startPos.mousey;
            if (moveX == 0 && moveY == 0) return;
            this.draging = true;
            this.nodeOffset = {
                x: this.startPos.domx + moveX,
                y: this.startPos.domy + moveY
            }
            this.nodeContainer.style.top = this.nodeOffset.y + 'px';
            this.nodeContainer.style.left = this.nodeOffset.x + 'px';
            this.animationContainer.style.top = this.nodeOffset.y + 'px';
            this.animationContainer.style.left = this.nodeOffset.x + 'px';
            // 计算lineG的偏移值
            this.lineGOffset = this.computeLineGOffset();
            this.lineGContainer.style.transform = `matrix(${this.scale},0,0,${this.scale},${this.lineGOffset.x},${this.lineGOffset.y})`;
            this.secondlineGContainer.style.transform = `matrix(${this.scale},0,0,${this.scale},${this.lineGOffset.x},${this.lineGOffset.y})`;
            this.bgCanvas?.draw({
                scale: this.scale,
                offset: this.nodeOffset
            })
            this.onMove({
                type: 'move', 
                offset: {
                    x: e.movementX,
                    y: e.movementY
                },
                scale: this.scale,
                lastScale: this.lastScale,
                center: this.nodeOrigin
            });
            this.setNodeContainerCenter();
        }
    }

    // 鼠标抬起事件
    bindMouseUp(e) {
        if (this.draging && this.startPos) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.startPos = undefined;
        this.setNodeContainerCenter();
    }

    // 鼠标离开容器事件
    bindMouseLeave(e) {
        if (this.draging) {
            let mouseupEvent = new Event('mouseup');
            this.container.dispatchEvent(mouseupEvent);
            e.stopPropagation();
            e.preventDefault();
        }
        this.setNodeContainerCenter();
    }

    // 鼠标滚轮放大缩小
    bindMouseWheel(e, isTool) {
        if (this.scaleAllow || isTool) {
            e.stopPropagation?.();
            e.preventDefault?.();
            // 鼠标滚轮操作时，节流处理
            if (!isTool) {
                this.scaleAllow = false;
                // 滚动节流
                setTimeout(() => {
                    this.scaleAllow = true;
                }, this.scaleThrottle);
            }
            this.lastScale = this.scale;
            let scaleUnit = this.scaleUnit;
            if (e.deltaY < 0) { // 放大
                if (this.scale == this.scaleLimit.max) return;
                scaleUnit = this.scaleUnit * 1;
            } else if (e.deltaY > 0) { // 缩小
                if (this.scale == this.scaleLimit.min) return;
                scaleUnit = this.scaleUnit * -1;
            }
            this.scale += scaleUnit;
            this.scale = Number(this.scale.toFixed(1));
            this.scale = Math.max(this.scale, this.scaleLimit.min);
            this.scale = Math.min(this.scale, this.scaleLimit.max);
            this.scaleDom(e.clientX, e.clientY, scaleUnit);
            this.onScale({
                lastScale: this.lastScale,
                currentScale: this.scale
            });
        }
    }

    // 点击+/-进行缩放,每次变化 
    bindClickScale(e) {
        this.bindMouseWheel(e, true);
    }

    // 画布缩放回调
    onScale() { }

    // 画布移动回调
    onMove() { }

    // 画布移动到this.nodeOffset位置
    moveDom(mouseInNode) {
        setTimeout(() => {
            this.nodeRect = this.nodeContainer.getBoundingClientRect();
            // node节点实际位置圆心
            this.setNodeContainerCenter();
        }, this.transitionDuration);

        // 操作按钮区更新文本显示
        this.tool?.updataVal(this.scale);

        // 底图跟随位移
        let self = this;
        let animation = new Animation(this.bgCanvas, {
            start: {
                scale: self.lastScale,
                nodeOffset: self.lastNodeOffset,
                lineGOffset: self.lastLineGOffset
            },
            end: {
                scale: self.scale,
                nodeOffset: self.nodeOffset,
                lineGOffset: self.lineGOffset
            },
            duration: self.transitionDuration,
            onUpdate: function (params, elapsed, element) {
                self.bgCanvas?.draw({
                    scale: params.scale,
                    offset: params.nodeOffset
                })
                // 位移 svg node
                self.nodeContainer.style['transform'] = `scale(${params.scale})`;
                self.nodeContainer.style.left = `${params.nodeOffset.x}px `;
                self.nodeContainer.style.top = `${params.nodeOffset.y}px `;
                self.animationContainer.style['transform'] = `scale(${params.scale})`;
                self.animationContainer.style.left = `${params.nodeOffset.x}px `;
                self.animationContainer.style.top = `${params.nodeOffset.y}px `;
                self.lineGContainer.style.transform = `matrix(${params.scale},0,0,${params.scale},${params.lineGOffset.x},${params.lineGOffset.y})`;
                self.secondlineGContainer.style.transform = `matrix(${params.scale},0,0,${params.scale},${params.lineGOffset.x},${params.lineGOffset.y})`;
                
            }
        })
        animation.start();
        this.onMove({
            type: 'scale',
            offset: mouseInNode,
            scale: this.scale,
            lastScale: this.lastScale,
            center: this.nodeOrigin
        });
    }

    // 画布以x、y(client类型)为中心进行缩放, size是指每次更改了多少缩放值, resetPosition是指重置为初始化位置
    scaleDom(x, y, size, resetPosition) {
        // 鼠标相对与画布的位置
        let mouseInCanvas = {
            x: this.compute('-', x, this.containerRect.left).result,
            y: this.compute('-', y, this.containerRect.top).result
        }
        // 偏移量 鼠标位置（缩放点）与圆心的横向纵向距离 * 缩放量
        let mouseInNode = {
            x: -(this.compute('-', mouseInCanvas.x, this.nodeOrigin.x).result / this.lastScale * size),
            y: -(this.compute('-', mouseInCanvas.y, this.nodeOrigin.y).result / this.lastScale * size),
        };
        // 记录上一次的位置，用于canvas动画
        this.lastLineGOffset = this.lineGOffset || { x: 0, y: 0 };
        this.lastNodeOffset = this.nodeOffset;
        this.nodeOffset = {
            x: this.compute('+', this.nodeOffset.x, mouseInNode.x).result,
            y: this.compute('+', this.nodeOffset.y, mouseInNode.y).result
        }
        // 重置为初始化位置时，重置node偏移位置
        if (resetPosition) {
            this.nodeOffset = {
                x: 0,
                y: 0
            }
        }
        // 计算lineG的偏移值  也就是容器层的实际left top
        this.lineGOffset = this.computeLineGOffset();
        this.moveDom(mouseInNode);
    }

    //精度计算 type为计算方法 使用方法 compute('+', 4, 2, 4).next('-', 1, 2).result;
    compute(type, ...args) {
        let self = this;
        // 计算放大倍数
        const getPower = (numbers) => {
            const lens = numbers.map(num => num.toString().split(".")[1]?.length || 0);
            // 获取最大长度
            const len = Math.max(...lens);
            // 计算返回放大倍数
            return Math.pow(10, len)
        }
        // 获取放大倍数
        const power = getPower(args);
        // 获取放大后的值
        const newNumbers = args.map(num => Math.round(num * power));
        // 计算结果
        let result = 0;
        switch (type) {
            case "+":
                result = newNumbers.reduce((preNumber, nextNumber) => preNumber + nextNumber);
                break;
            case "-":
                result = newNumbers.reduce((preNumber, nextNumber) => preNumber - nextNumber);
                break;
            case "*":
                result = newNumbers.reduce((preNumber, nextNumber) => preNumber * nextNumber);
                break;
            case "/":
                result = newNumbers.reduce((preNumber, nextNumber) => preNumber / nextNumber);
                break;
            default:
                break;
        }
        return {
            result: result / power,
            next(nextType, ...nextArgs) {
                return self.compute(nextType, result / power, ...nextArgs);
            }
        }
    }

    // 移动画布，使target显示在容器正中心的位置
    moveTargetToCenter(target, callback) {
        // 原传参类型为dom节点，新增选择器传参，如id选择器和class选择器的字符串
        if (typeof (target) === 'string') {
            target = document.querySelector(target);
        }
        if (!target) {
            return;
        }
        let targetRect = target.getBoundingClientRect();
        this.nodeOffset = {
            x: this.compute('+', this.nodeOffset.x, this.containerRect.left, this.containerRect.width / 2).next('-', targetRect.left, targetRect.width / 2).result,
            y: this.compute('+', this.nodeOffset.y, this.containerRect.top, this.containerRect.height / 2).next('-', targetRect.top, targetRect.height / 2).result
        }
        // 计算lineG的偏移值
        this.lineGOffset = this.computeLineGOffset();
        this.moveDom();
        callback && callback();
    }

    // 计算lineG的偏移值 通过原始宽度计算出左侧缩放量 + 需设置的nodeOffset 计算得出lineG的偏移值
    computeLineGOffset() {
        let lineGOffset = {
            x: this.compute('+', this.nodeOffset.x, this.containerRect.width * ((1 - this.scale) / 2)).result,
            y: this.compute('+', this.nodeOffset.y, this.containerRect.height * ((1 - this.scale) / 2)).result
        }
        return lineGOffset
    }

    // 设置NodeContainer 圆心
    setNodeContainerCenter() {
        this.nodeRect = this.nodeContainer.getBoundingClientRect();
        this.nodeOrigin = {
            x: this.nodeRect.width / 2 + (this.nodeRect.left - this.containerRect.left),
            y: this.nodeRect.height / 2 + (this.nodeRect.top - this.containerRect.top)
        }
    }

    // 重置画布位置为屏幕中心
    resetPosition() {
        this.initPosition();
    }

    // 重置画布缩放值为1
    resetScale() {
        this.scale = 1;
    }

    // 设置Grid
    setGrid(option) {
        this.bgCanvas.setGrid(option, this.scale, this.nodeOffset);
    }

    // 重置画布为初始状态
    reset() {
        this.lastScale = this.scale;
        this.resetScale();
        this.initPosition();
        this.onScale({
            lastScale: this.lastScale,
            currentScale: this.scale
        })
    }

    // 获取画布DOM
    getCanvasDom() {
        return this.container;
    }

    // 卸载画布
    unInstall() {
        this.dom.innerHTML = null;
        this.container = null;
    }

    // 后续要添加刷新画布.刷新网格配置的接口
    // refresh .....
}

export default CanvasManager;