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
import { pxToNumber } from '../../util/convert';
import merge from '../../util/merge';

let DOM_WIDTH = 10000;
let DOM_HEIGHT = 10000;

//设置滚轮的状态
let enableWheel = true;

// 画布拖拽管理器，具有通用性
// 支持鼠标拖拽和鼠标滚轮缩放
class DragManager {
    constructor(container, option) {
        option = merge({ scale: 1 }, option);
        // 画布容器
        this.container = container;
        DOM_WIDTH = option.size || DOM_WIDTH;
        DOM_HEIGHT = option.size || DOM_HEIGHT;
        this.isScale = option.isScale;
        // 当前缩放值
        this.scale = option.scale || 1;
        // 创建被拖拽画布
        this.insertDragDom();
        // 初始化画布位置到屏幕正中心
        this.initPosition();
        // 创建操作按钮
        this.createTools(option);
        this.scalePauseArr = [0.5, 0.7, 0.9, 1, 1.5]; // 缩放停顿值 三个区间，每个区间停顿两次
        this.scaleRefreshArr = [0.75, 0.95]; // 在这两处会刷新视图。视图分为三个区间0.5-0.75 0.75-0.95 0.95-1.5
        this.scaleLimit = {
            min: 0.5,
            max: 1.5
        };
        this.throldHold = 200;
        this.draging = false;
        this.dom.addEventListener('mousedown', this.bindMouseDown.bind(this));
        this.dom.addEventListener('mousemove', this.bindMouseMove.bind(this));
        this.dom.addEventListener('mouseup', this.bindMouseUp.bind(this));
        this.dom.addEventListener('mousewheel', this.bindMouseWheel.bind(this));
        this.container.addEventListener('mouseleave', this.bindMouseLeave.bind(this));
        // 设施画布初始化缩放
        let center = {
            x: this.containerRect.left + this.containerRect.width / 2,
            y: this.containerRect.top + this.containerRect.height / 2,
        };
        this.scaleDom(center.x, center.y, this.scale, false);
    }

    // 插入拖拽画布
    insertDragDom() {
        this.dom = document.createElement('div');
        this.dom.setAttribute('class', 'drag-container');
        this.dom.setAttribute('style', `width:${DOM_WIDTH}px;height:${DOM_HEIGHT}px`);
        this.container.appendChild(this.dom);
    }

    // 初始化this.dom的位置为屏幕正中间
    initPosition() {
        this.containerRect = this.container.getBoundingClientRect();
        this.dom.style.top = (DOM_HEIGHT - this.containerRect.height) / 2 * -1 + 'px';
        this.dom.style.left = (DOM_WIDTH - this.containerRect.width) / 2 * -1 + 'px';
    }

    // 鼠标按下事件
    bindMouseDown(e) {
        this.draging = false;
        this.startPos = {
            domx: pxToNumber(this.dom.style.left),
            domy: pxToNumber(this.dom.style.top),
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
            let targetX = this.startPos.domx + moveX;
            let targetY = this.startPos.domy + moveY;
            let target = this.limitPosition(targetX, targetY);
            this.dom.style.top = target.y + 'px';
            this.dom.style.left = target.x + 'px';
        }
    }

    // 鼠标抬起事件
    bindMouseUp(e) {
        if (this.draging && this.startPos) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.startPos = undefined;
    }

    // 鼠标离开容器事件
    bindMouseLeave(e) {
        if (this.draging) {
            let mouseupEvent = new Event('mouseup');
            this.dom.dispatchEvent(mouseupEvent);
            e.stopPropagation();
            e.preventDefault();
        }
    }

    // 每次scale变化都暴露给雪花图去刷新视图
    dragScaleChange(lastScale, newScale) {
        const dragCurrentVal = this.container.querySelector('.drag-currentVal');
        dragCurrentVal.innerHTML = (this.scale * 100).toFixed(0) + '%';
        let shouldUpdate = false;
        // 判断前后变化是否经过了this.scaleRefreshArr,否则不暴露事件，减少性能损耗
        this.scaleRefreshArr.forEach(item => {
            if (item > Math.min(lastScale, newScale) && item < Math.max(lastScale, newScale)) {
                shouldUpdate = true;
            }
        });
        if (!shouldUpdate) return;
        const event = new CustomEvent('dragScaleChange', { detail: { scaleVal: newScale } });
        window.dispatchEvent(event);
    }

    // 鼠标滚轮放大缩小
    bindMouseWheel(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.isScale === false) return;
        if (enableWheel) {
            enableWheel = false;
            // 设置延迟，一定时间内只触发一次滚轮事件(待修复，不能写死1200)
            setTimeout(() => {
                enableWheel = true;
            }, 1200);
            let lastScale = this.scale;
            let scaleUnit;
            let pauseIndex; // 当前的缩放倍数在区间中的索引
            for (let i = this.scalePauseArr.length - 1; i >= 0; i--) {
                if (e.deltaY < 0) {
                    if (this.scale < this.scalePauseArr[i]) {
                        pauseIndex = i;
                    } else if (this.scale === this.scalePauseArr[i]) {
                        pauseIndex = i + 1;
                    }
                } else {
                    if (this.scale < this.scalePauseArr[i]) {
                        pauseIndex = i;
                    } else if (this.scale === this.scalePauseArr[i]) {
                        pauseIndex = i - 1;
                    }
                }
            }
            if (e.deltaY < 0) { // 放大
                if (this.scale == this.scaleLimit.max) return;
            } else if (e.deltaY > 0) { // 缩小
                if (this.scale == this.scaleLimit.min) return;
            }
            scaleUnit = (this.scalePauseArr[pauseIndex] - this.scale);
            this.scale += scaleUnit;
            this.scale = Math.max(this.scale, this.scaleLimit.min);
            this.scale = Math.min(this.scale, this.scaleLimit.max);
            this.scaleDom(e.clientX, e.clientY, scaleUnit);
            this.dragScaleChange(lastScale, this.scale);
        }
    }

    // 点击+/-进行缩放,每次变化0.1
    bindClickScale(e) {
        let lastScale = this.scale;
        let scaleUnit = 0.1;
        if (e.deltaY < 0) {
            if (this.scale == this.scaleLimit.max) return;
            scaleUnit = 0.1;
        } else if (e.deltaY > 0) {
            if (this.scale == this.scaleLimit.min) return;
            scaleUnit = -0.1;
        }
        this.scale += scaleUnit;
        this.scale = Number(this.scale.toFixed(1));
        this.scale = Math.max(this.scale, this.scaleLimit.min);
        this.scale = Math.min(this.scale, this.scaleLimit.max);
        this.scaleDom(e.clientX, e.clientY, scaleUnit);
        this.dragScaleChange(lastScale, this.scale);
    }

    // 画布移动dx、dy距离
    moveDom(dx, dy) {
        this.dom.style.top = pxToNumber(this.dom.style.top) + dy + 'px';
        this.dom.style.left = pxToNumber(this.dom.style.left) + dx + 'px';
    }

    // 画布以x、y(client类型)为中心进行缩放, size是指每次更改了多少缩放值
    scaleDom(x, y, size, needToTransition = true) {
        let domRect = this.dom.getBoundingClientRect();
        // 缩放前位置
        let mouseInDom = {
            x: (x - domRect.left) / domRect.width * DOM_WIDTH,
            y: (y - domRect.top) / domRect.height * DOM_HEIGHT,
        };
        // 缩放后位置
        let dx = (DOM_WIDTH / 2 - mouseInDom.x) * size;
        let dy = (DOM_HEIGHT / 2 - mouseInDom.y) * size;
        this.dom.style['transform'] = `scale(${this.scale})`;
        this.moveDom(dx, dy);
        // 每次触发缩放时给个过渡，但是要按时清除。避免影响到拖拽
        if (needToTransition) {
            this.dom.style['transition'] = `all ${this.throldHold}ms`;
            setTimeout(() => {
                this.dom.style['transition'] = 'unset';
            }, this.throldHold);
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
        let containerRect = this.container.getBoundingClientRect();
        let dx = containerRect.left + containerRect.width / 2 - targetRect.left - targetRect.width / 2;
        let dy = containerRect.top + containerRect.height / 2 - targetRect.top - targetRect.height / 2;
        this.moveDom(dx, dy);
        callback && callback();
    }


    // 重置画布位置为屏幕中心
    resetPosition() {
        this.initPosition();
    }

    // 以屏幕为中心，重置画布缩放值为1
    resetScale() {
        let size = 1 - this.scale;
        this.scale = 1;
        let center = {
            x: this.containerRect.left + this.containerRect.width / 2,
            y: this.containerRect.top + this.containerRect.height / 2,
        };
        this.scaleDom(center.x, center.y, size);
    }

    // 重置画布为初始状态
    reset() {
        let lastScale = this.scale;
        this.resetPosition();
        this.resetScale();
        this.dragScaleChange(lastScale, this.scale);
    }

    // 修正画布位置，使画布x,y最大值不超过0，最小值不超过（容器宽度 - 画布宽度)
    limitPosition(targetX, targetY) {
        // 拖拽位置最大为0
        targetX = Math.min(0, targetX);
        targetY = Math.min(0, targetY);
        // 拖拽位置最小为（容器宽度 - 画布宽度)
        targetX = Math.max(targetX, (DOM_WIDTH - this.containerRect.width) * -1);
        targetY = Math.max(targetY, (DOM_HEIGHT - this.containerRect.height) * -1);
        return {
            x: targetX,
            y: targetY
        };
    }

    // 创建操作按钮
    createTools({ enlarge, center, shrunk }) {
        let baseEnlarge = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSI+Cjx0aXRsZT4yMDIxMDcwMl9WazVnNU5aUjQ0WllWTVZoWmdWbzVZNDRZRlpOMVpWWlVKVlJaaFVjPC90aXRsZT4KPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICA8ZyBpZD0i5Y2V55So5oi36K+m5oOFLeWFqOe9keaLk+aJkSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4NzguMDAwMDAwLCAtODkwLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICA8ZyBpZD0i57yW57uELTExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODcyLjAwMDAwMCwgODgwLjAwMDAwMCkiPgogICAgICA8ZyBpZD0iMjAyMTA3MDJfVms1ZzVOWlI0NFpZVk1WaFpnVm81WTQ0WUZaTjFaVlpVSlZSWmhVYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4wMDAwMDAsIDEwLjAwMDAwMCkiPgogICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiNEOEQ4RDgiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgLz4KICAgICAgICA8cGF0aCBkPSJNMTAuNSwzIEMxMC45MjczNjMyLDMgMTEuMjc5NTg5MywzLjMyMTcwMDE2IDExLjMyNzcyNjksMy43MzYxNDkwNiBMMTEuMzMzMzMzMywzLjgzMzMzMzMzIEwxMS4zMzMzMzMzLDkuNjY2NjY2NjcgTDE3LjE2NjY2NjcsOS42NjY2NjY2NyBDMTcuNjI2OTAzOSw5LjY2NjY2NjY3IDE4LDEwLjAzOTc2MjggMTgsMTAuNSBDMTgsMTAuOTI3MzYzMiAxNy42NzgyOTk4LDExLjI3OTU4OTMgMTcuMjYzODUwOSwxMS4zMjc3MjY5IEwxNy4xNjY2NjY3LDExLjMzMzMzMzMgTDExLjMzMzMzMzMsMTEuMzMzMzMzMyBMMTEuMzMzMzMzMywxNy4xNjY2NjY3IEMxMS4zMzMzMzMzLDE3LjYyNjkwMzkgMTAuOTYwMjM3MywxOCAxMC41LDE4IEMxMC4wNzI2MzY4LDE4IDkuNzIwNDEwNjcsMTcuNjc4Mjk5OCA5LjY3MjI3MzA4LDE3LjI2Mzg1MDkgTDkuNjY2NjY2NjcsMTcuMTY2NjY2NyBMOS42NjY2NjY2NywxMS4zMzMzMzMzIEwzLjgzMzMzMzMzLDExLjMzMzMzMzMgQzMuMzczMDk2MDQsMTEuMzMzMzMzMyAzLDEwLjk2MDIzNzMgMywxMC41IEMzLDEwLjA3MjYzNjggMy4zMjE3MDAxNiw5LjcyMDQxMDY3IDMuNzM2MTQ5MDYsOS42NzIyNzMwOCBMMy44MzMzMzMzMyw5LjY2NjY2NjY3IEw5LjY2NjY2NjY3LDkuNjY2NjY2NjcgTDkuNjY2NjY2NjcsMy44MzMzMzMzMyBDOS42NjY2NjY2NywzLjM3MzA5NjA0IDEwLjAzOTc2MjgsMyAxMC41LDMgWiIgaWQ9IuW9oueKtue7k+WQiCIgZmlsbD0iI0ZGRkZGRiIgLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9nPgo8L3N2Zz4=';
        let baseCenter = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSI+CiAgICA8dGl0bGU+MjAyMzAyMDdfVnBWcFZoMVFaZzFsMEFZNDVsWk1aVjBjMU5ZYzR4VTBaTVp0NVFZdzwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLljZXnlKjmiLfor6bmg4Ut5YWo572R5ouT5omRIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg3OC4wMDAwMDAsIC05MjIuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4NzIuMDAwMDAwLCA4ODAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iMjAyMzAyMDdfVnBWcFZoMVFaZzFsMEFZNDVsWk1aVjBjMU5ZYzR4VTBaTVp0NVFZdyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4wMDAwMDAsIDQyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjI5MTY2NjY3LDEzLjU0MTY2NjcgQzIuNjM2ODQ0NjMsMTMuNTQxNjY2NyAyLjkxNjY2NjY3LDEzLjgyMTQ4ODcgMi45MTY2NjY2NywxNC4xNjY2NjY3IEwyLjkxNjY2NjY3LDE1LjgzMzMzMzMgTDIuOTE2NjY2NjcsMTUuODMzMzMzMyBDMi45MTY2NjY2NywxNi40ODMwODAxIDMuNDEyNDA2NzMsMTcuMDE3MDQwNiA0LjA0NjI4MzMzLDE3LjA3NzYxMTIgTDQuMTY2NjY2NjcsMTcuMDgzMzMzMyBMNS44MzMzMzMzMywxNy4wODMzMzMzIEM2LjE3ODUxMTMsMTcuMDgzMzMzMyA2LjQ1ODMzMzMzLDE3LjM2MzE1NTMgNi40NTgzMzMzMywxNy43MDgzMzMzIEM2LjQ1ODMzMzMzLDE4LjA1MzUxMTMgNi4xNzg1MTEzLDE4LjMzMzMzMzMgNS44MzMzMzMzMywxOC4zMzMzMzMzIEw0LjE2NjY2NjY3LDE4LjMzMzMzMzMgTDQuMTY2NjY2NjcsMTguMzMzMzMzMyBDMi43ODU5NTQ3OSwxOC4zMzMzMzMzIDEuNjY2NjY2NjcsMTcuMjE0MDQ1MiAxLjY2NjY2NjY3LDE1LjgzMzMzMzMgTDEuNjY2NjY2NjcsMTQuMTY2NjY2NyBDMS42NjY2NjY2NywxMy44MjE0ODg3IDEuOTQ2NDg4NywxMy41NDE2NjY3IDIuMjkxNjY2NjcsMTMuNTQxNjY2NyBaIE0xOC4zMzMzMzMzLDE0LjE2NjY2NjcgTDE4LjMzMzMzMzMsMTUuODMzMzMzMyBMMTguMzMzMzMzMywxNS44MzMzMzMzIEMxOC4zMzMzMzMzLDE3LjIxNDA0NTIgMTcuMjE0MDQ1MiwxOC4zMzMzMzMzIDE1LjgzMzMzMzMsMTguMzMzMzMzMyBMMTQuMTY2NjY2NywxOC4zMzMzMzMzIEMxMy44MjE0ODg3LDE4LjMzMzMzMzMgMTMuNTQxNjY2NywxOC4wNTM1MTEzIDEzLjU0MTY2NjcsMTcuNzA4MzMzMyBDMTMuNTQxNjY2NywxNy4zNjMxNTUzIDEzLjgyMTQ4ODcsMTcuMDgzMzMzMyAxNC4xNjY2NjY3LDE3LjA4MzMzMzMgTDE1LjgzMzMzMzMsMTcuMDgzMzMzMyBMMTUuODMzMzMzMywxNy4wODMzMzMzIEMxNi40ODMwODAxLDE3LjA4MzMzMzMgMTcuMDE3MDQwNiwxNi41ODc1OTMzIDE3LjA3NzYxMTIsMTUuOTUzNzE2NyBMMTcuMDgzMzMzMywxNS44MzMzMzMzIEwxNy4wODMzMzMzLDE0LjE2NjY2NjcgQzE3LjA4MzMzMzMsMTMuODIxNDg4NyAxNy4zNjMxNTUzLDEzLjU0MTY2NjcgMTcuNzA4MzMzMywxMy41NDE2NjY3IEMxOC4wNTM1MTEzLDEzLjU0MTY2NjcgMTguMzMzMzMzMywxMy44MjE0ODg3IDE4LjMzMzMzMzMsMTQuMTY2NjY2NyBaIE0xOC4zMzMzMzMzLDQuMTY2NjY2NjcgTDE4LjMzMzMzMzMsNS44MzMzMzMzMyBDMTguMzMzMzMzMyw2LjE3ODUxMTMgMTguMDUzNTExMyw2LjQ1ODMzMzMzIDE3LjcwODMzMzMsNi40NTgzMzMzMyBDMTcuMzYzMTU1Myw2LjQ1ODMzMzMzIDE3LjA4MzMzMzMsNi4xNzg1MTEzIDE3LjA4MzMzMzMsNS44MzMzMzMzMyBMMTcuMDgzMzMzMyw0LjE2NjY2NjY3IEwxNy4wODMzMzMzLDQuMTY2NjY2NjcgQzE3LjA4MzMzMzMsMy41MTY5MTk5IDE2LjU4NzU5MzMsMi45ODI5NTk0MyAxNS45NTM3MTY3LDIuOTIyMzg4ODIgTDE1LjgzMzMzMzMsMi45MTY2NjY2NyBMMTQuMTY2NjY2NywyLjkxNjY2NjY3IEMxMy44MjE0ODg3LDIuOTE2NjY2NjcgMTMuNTQxNjY2NywyLjYzNjg0NDYzIDEzLjU0MTY2NjcsMi4yOTE2NjY2NyBDMTMuNTQxNjY2NywxLjk0NjQ4ODcgMTMuODIxNDg4NywxLjY2NjY2NjY3IDE0LjE2NjY2NjcsMS42NjY2NjY2NyBMMTUuODMzMzMzMywxLjY2NjY2NjY3IEwxNS44MzMzMzMzLDEuNjY2NjY2NjcgQzE3LjIxNDA0NTIsMS42NjY2NjY2NyAxOC4zMzMzMzMzLDIuNzg1OTU0NzkgMTguMzMzMzMzMyw0LjE2NjY2NjY3IFogTTYuNDU4MzMzMzMsMi4yOTE2NjY2NyBDNi40NTgzMzMzMywyLjYzNjg0NDYzIDYuMTc4NTExMywyLjkxNjY2NjY3IDUuODMzMzMzMzMsMi45MTY2NjY2NyBMNC4xNjY2NjY2NywyLjkxNjY2NjY3IEw0LjE2NjY2NjY3LDIuOTE2NjY2NjcgQzMuNTE2OTE5OSwyLjkxNjY2NjY3IDIuOTgyOTU5NDMsMy40MTI0MDY3MyAyLjkyMjM4ODgyLDQuMDQ2MjgzMzIgTDIuOTE2NjY2NjcsNC4xNjY2NjY2NyBMMi45MTY2NjY2Nyw1LjgzMjUgQzIuOTE2NjY2NjcsNi4xNzc2Nzc5NyAyLjYzNjg0NDYzLDYuNDU3NSAyLjI5MTY2NjY3LDYuNDU3NSBDMS45NDY0ODg3LDYuNDU3NSAxLjY2NjY2NjY3LDYuMTc3Njc3OTcgMS42NjY2NjY2Nyw1LjgzMjUgTDEuNjY2NjY2NjcsNC4xNjY2NjY2NyBMMS42NjY2NjY2Nyw0LjE2NjY2NjY3IEMxLjY2NjY2NjY3LDIuNzg1OTU0NzkgMi43ODU5NTQ3OSwxLjY2NjY2NjY3IDQuMTY2NjY2NjcsMS42NjY2NjY2NyBMNS44MzMzMzMzMywxLjY2NjY2NjY3IEM2LjE3ODUxMTMsMS42NjY2NjY2NyA2LjQ1ODMzMzMzLDEuOTQ2NDg4NyA2LjQ1ODMzMzMzLDIuMjkxNjY2NjcgWiIgaWQ9IuW9oueKtiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEzLjk1ODMzMzMsNSBMNi4wNDE2NjY2Nyw1IEM1LjQ2NjM3MDA1LDUgNSw1LjQ2NjM3MDA1IDUsNi4wNDE2NjY2NyBMNSwxMy45NTgzMzMzIEM1LDE0LjUzMzYyOTkgNS40NjYzNzAwNSwxNSA2LjA0MTY2NjY3LDE1IEwxMy45NTgzMzMzLDE1IEMxNC41MzM2Mjk5LDE1IDE1LDE0LjUzMzYyOTkgMTUsMTMuOTU4MzMzMyBMMTUsNi4wNDE2NjY2NyBDMTUsNS40NjYzNzAwNSAxNC41MzM2Mjk5LDUgMTMuOTU4MzMzMyw1IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
        let baseShrunk = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSI+CiAgICA8dGl0bGU+MjAyMTA3MDJfWThWZ1kwNDRZRTVSVUpabDVSMDQ0ODBGNXNVSTRFWXcwOVk4VmsxcDwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLljZXnlKjmiLfor6bmg4Ut5YWo572R5ouT5omRIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg3OC4wMDAwMDAsIC05NTQuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg3Mi4wMDAwMDAsIDg4MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSIyMDIxMDcwMl9ZOFZnWTA0NFlFNVJVSlpsNVIwNDQ4MEY1c1VJNEVZdzA5WThWazFwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjAwMDAwMCwgNzQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iI0Q4RDhEOCIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIi8+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3LjE2NjY2NjcsOSBDMTcuNjI2OTAzOSw5IDE4LDkuNDQ3NzE1MyAxOCwxMCBDMTgsMTAuNTEyODM1OCAxNy42NzgyOTk4LDEwLjkzNTUwNzIgMTcuMjYzODUwOSwxMC45OTMyNzIzIEwxNy4xNjY2NjY3LDExIEwzLjgzMzMzMzMzLDExIEMzLjM3MzA5NjA0LDExIDMsMTAuNTUyMjg0NyAzLDEwIEMzLDkuNDg3MTY0MiAzLjMyMTcwMDE2LDkuMDY0NDkyOCAzLjczNjE0OTA2LDkuMDA2NzI3NyBMMy44MzMzMzMzMyw5IEwxNy4xNjY2NjY3LDkgWiIgaWQ9IlN0cm9rZS0xIiBmaWxsPSIjRkZGRkZGIi8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
        let stateDom = `<div class="drag-tools">
            <div class='drag-scale'>
              <div class="drag-tool-item drag-tool-enlarge" style='background:url(${enlarge || baseEnlarge})'></div>
              <div class='drag-currentVal'>${(this.scale * 100).toFixed(0)}%</div>
              <div class="drag-tool-item drag-tool-shrunk" style='background:url(${shrunk || baseShrunk})'></div>
            </div>
            <div class='drag-reset'>
              <div class="drag-tool-item drag-tool-center" style='background:url(${center || baseCenter})'></div>
            </div>
        </div>`;
        this.container.insertAdjacentHTML('beforeend', stateDom);
        this.container.getElementsByClassName('drag-tool-enlarge')[0].addEventListener('click', () => {
            this.bindClickScale({
                deltaY: -100,
                clientX: this.containerRect.left + this.containerRect.width / 2,
                clientY: this.containerRect.top + this.containerRect.height / 2
            });
        });
        this.container.getElementsByClassName('drag-tool-center')[0].addEventListener('click', () => {
            this.reset();
        });
        this.container.getElementsByClassName('drag-tool-shrunk')[0].addEventListener('click', () => {
            this.bindClickScale({
                deltaY: 100,
                clientX: this.containerRect.left + this.containerRect.width / 2,
                clientY: this.containerRect.top + this.containerRect.height / 2
            });
        });
    }

    // 获取拖拽画布
    getDragDom() {
        return this.dom;
    }

    unInstall() {
        this.container.innerHTML = null;
        this.dom = null;
    }
}

export default DragManager;
