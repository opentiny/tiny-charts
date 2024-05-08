/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { isParent } from '../../util/dom';
import { pointsDirection, getAngleByPoints } from '../../util/math';

export default class RotateManager {
    currentTarget = null; 

    constructor(dom, option, selected, nodeManager) {
        this.dom = dom;
        this.data = option.data;
        this.selected = selected;
        this.nodeManager = nodeManager;
        this.angles = this.nodeManager.angles;
        this.drag = false;
        if(option.autoRotate){
            this.autoRotate(option.autoRotate);
        }else{
            this.initWarppersEvent();
            this.initNodesEvent(this.dom);
        }
    }

    // 绑定转轮拖动事件
    initWarppersEvent(){
        this.warppers = this.dom.getElementsByClassName('ozc_warpper');
        Array.from(this.warppers).forEach((element, index) => {
            element.addEventListener('mousedown', (e) => {
                let currentTargetRect = e.currentTarget.getBoundingClientRect();
                this.drag = false;
                this.currentTarget = {
                    dom: e.currentTarget, // 旋转元素
                    index: index,         // 旋转层数
                    center: {             // 旋转中心位置
                        x: currentTargetRect.x + currentTargetRect.width / 2,
                        y: currentTargetRect.y + currentTargetRect.height / 2,
                    },
                    startRotate: this.getRotateDeg(e.currentTarget), // 初始旋转角度
                    startTouchPosition: { // 鼠标拖动的起始位置
                        x: e.clientX,
                        y: e.clientY
                    },
                    clockwise: undefined, // true 表示顺时针方向
                }
            });
            element.addEventListener('mousemove', (e) => {
                if(this.currentTarget){
                    this.drag = true;
                    // 当前拖动的层级
                    let curLevel = this.currentTarget.index;
                    // 鼠标拖动的当前位置
                    this.currentTarget.endTouchPosition = { 
                        x: e.clientX,
                        y: e.clientY
                    };
                    // 是否为顺时针方向
                    let clockwise = pointsDirection(
                        this.currentTarget.center, 
                        this.currentTarget.startTouchPosition, 
                        this.currentTarget.endTouchPosition
                    );
                    // 旋转夹角，计算结论<=180°，要结合顺逆时判断是否>180°
                    let angle = getAngleByPoints(
                        this.currentTarget.center, 
                        this.currentTarget.startTouchPosition, 
                        this.currentTarget.endTouchPosition
                    )[1];
                    // 顺时针夹角为正，逆时针夹角为负
                    if(this.currentTarget.clockwise === undefined){
                        this.currentTarget.clockwise = clockwise;
                    } else if (this.currentTarget.clockwise !== clockwise){ 
                        // 用户旋转超过180度后，继续旋转, 极限是转到 350
                        if(angle > 10){  
                            angle = 360 - angle;
                        // 用户向另一个方向旋转了
                        }else{
                            this.currentTarget.clockwise = clockwise;
                        }
                    }
                    let rotate = angle;
                    rotate = angle * (this.currentTarget.clockwise ? 1 : -1); 
                    rotate = this.currentTarget.startRotate + rotate;
                    // 旋转时产生的临时选中下标
                    let selected = this.getSelected(rotate).selected;
                    // 旋转前选中的下标
                    let prevSelected = this.selected[curLevel];
                    this.setRotateDeg(this.currentTarget.dom, curLevel, rotate, selected, prevSelected);
                }                
            });
            element.addEventListener('mouseup', (e) => {
                if(this.drag && this.currentTarget){
                    let curIndex = this.currentTarget.index;
                    let endRotate = this.getRotateDeg(this.currentTarget.dom);
                    let result = this.getSelected(endRotate, true);
                    endRotate = result.rotate;
                    this.selected[curIndex] = result.selected
                    // 刷新下层数据
                    this.nodeManager.refreshWarpper(curIndex, this.selected);
                    this.setRotateDeg(this.currentTarget.dom, curIndex,  endRotate, this.selected[curIndex], -1);
                }
                this.currentTarget = null;
            });
        });
        this.dom.addEventListener('mouseleave', (e)=>{
            if(this.drag && this.currentTarget){
                let mouseupEvent = new Event('mouseup');
                this.currentTarget.dom.dispatchEvent(mouseupEvent);
                e.stopPropagation();
                e.preventDefault();
            }
        })
    }   

    // 绑定卡片点击事件
    initNodesEvent(container){
        container.addEventListener('click', (e) => {
            let parent = isParent(e.target, 'ozc_card');
            if(!this.drag && parent){
                let warpperIndex = parseInt(parent.getAttribute('data-warpper-index'));
                let nodeIndex = parseInt(parent.getAttribute('data-node-index'));
                let warpperDom = this.nodeManager.warppers[warpperIndex];
                let moveIndex = this.selected[warpperIndex] - nodeIndex;
                let rotate = this.angles[warpperIndex] * moveIndex * -1;
                rotate = this.getRotateDeg(warpperDom) + rotate;
                this.selected[warpperIndex] = nodeIndex;
                this.setRotateDeg(warpperDom, warpperIndex,  rotate, nodeIndex, -1);
                // 刷新下层数据
                this.nodeManager.refreshWarpper(warpperIndex, this.selected);
            }
        });
    }

    /**
     * 旋转 ozc_warpper
     * dom: ozc_warpper元素
     * domIndex： ozc_warpper下标
     * rotate： ozc_warpper目标旋转角度
     * selected： 当前选中的元素
     * prevSelected： 拖拽过程前选中的元素（上一个选中元素）
     */
    setRotateDeg(dom, domIndex, rotate, selected, prevSelected){
        dom.style.transform = ` translateX(-50%) translateY(-50%) rotate(${rotate}deg)`;
        let data = this.nodeManager.getDepthData(this.data, domIndex);
        // 逆向旋转ozc_card
        Array.from(dom.getElementsByClassName('ozc_card')).forEach((element, index) => {
            element.style.transform = `rotate(${-rotate}deg)`;
            // 清空ozc_card，并重新绘制 selected 状态
            element.innerHTML = '';
            this.nodeManager.render && this.nodeManager.render(element, data[index], {
                boss: false,
                selected: selected === index ? true : false,
                prevSelected: prevSelected === index ? true : false,
            });
        }); 
    }

    // 从DOM的内联样式上取出旋转角度
    getRotateDeg(element){
        let transform = element.style.transform;
        let degIndex = transform.indexOf('deg)');
        let rotateIndex = transform.indexOf('rotate(');
        let targetRotate = parseFloat(transform.slice(rotateIndex + 'rotate('.length, degIndex));
        return targetRotate;
    }
    
    // 根据当前旋转角度计算出选中的单位, correct = true时表示需要对角度进行修正
    getSelected(rotate, correct){
        let curIndex = this.currentTarget.index;
        let unitAngle = this.angles[curIndex];
        // step1. 吸附到最近的 unitAngle 倍数上
        if(Math.abs(rotate % unitAngle) >= unitAngle / 2){
            if(rotate >= 0){
                rotate = (Math.floor(rotate / unitAngle) + 1) * unitAngle;
            }else{
                rotate = (Math.ceil(rotate / unitAngle) - 1) * unitAngle;
            }
        }else{
            if(rotate >= 0){
                rotate = Math.floor(rotate / unitAngle) * unitAngle;
            }else{
                rotate = Math.ceil(rotate / unitAngle) * unitAngle;
            }
        }
        // step2. 进行超限修正 
        // 修正前旋转了多少位置
        let dataLength = this.nodeManager.getDepthData(this.data, curIndex).length;
        let changeIndex = (rotate - this.currentTarget.startRotate) / unitAngle;
        let endIndex = parseInt(changeIndex.toFixed()) + this.selected[curIndex];
        let selectedIndex = 0;
        // 右侧超限需要回转
        if(endIndex >= dataLength) {
            selectedIndex = dataLength - 1; 
            correct && (rotate = rotate - (endIndex - (dataLength - 1)) * unitAngle);
        // 左侧超限需要回转
        } else if (endIndex < 0){
            selectedIndex = 0;
            correct && (rotate = rotate + (Math.abs(endIndex)) * unitAngle);
        // 正常范围内
        } else {
            selectedIndex = endIndex;
        }
        return {
            rotate: rotate,
            selected: selectedIndex
        };
    }

    // 自动旋转
    autoRotate(option){
        let current = 0;
        let speed = option.speed || 1;
        let direction = option.direction || 'clockwise';
        let warppers = this.dom.getElementsByClassName('ozc_warpper');
        function rotate(){
            if(direction === 'clockwise'){
                current += speed;
            }else{
                current -= speed;
            }
            Array.from(warppers).forEach((element) => {
                element.style.transform = ` translateX(-50%) translateY(-50%) rotate(${current}deg)`;
                Array.from(element.getElementsByClassName('ozc_card')).forEach((card) => {
                    card.style.transform = `rotate(${-current}deg)`;
                }); 
            });
            window.requestAnimationFrame(rotate);
        }
        window.requestAnimationFrame(rotate);
    }
}














































































































