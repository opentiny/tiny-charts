import { isParent } from '../../util/dom';
// TODO: mousemove 和 mouseup 改为绑定在this.dom
export default class RotateManager {
    currentTarget = null; 

    constructor(dom, option, selected, nodeManager) {
        this.dom = dom;
        this.data = option.data;
        this.selected = selected;
        this.nodeManager = nodeManager;
        this.angles = this.nodeManager.angles;
        this.drag = false;
        this.initWarppersEvent();
        this.initNodesEvent(this.dom);
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
                    }
                }
            });
            element.addEventListener('mousemove', (e) => {
                if(this.currentTarget){
                    this.drag = true;
                    this.currentTarget.endTouchPosition = { // 鼠标拖动的当前位置
                        x: e.clientX,
                        y: e.clientY
                    };
                    let endAngle = 360 * Math.atan((this.currentTarget.endTouchPosition.y - this.currentTarget.center.y) / (this.currentTarget.endTouchPosition.x - this.currentTarget.center.x))/(2 * Math.PI);
                    let startAngle = 360 * Math.atan((this.currentTarget.startTouchPosition.y - this.currentTarget.center.y) / (this.currentTarget.startTouchPosition.x - this.currentTarget.center.x))/(2 * Math.PI);
                    let rotate = 0;
                    console.log('startAngle' + startAngle)
                    console.log('endAngle' + endAngle)
                    if(endAngle >= 0 && startAngle >= 0){
                        // ???
                    }else if(endAngle < 0 && startAngle >= 0){
                        // endAngle = endAngle + 180;
                    }else if(endAngle < 0 && startAngle <= 0){
                        // ???
                    }else if(endAngle > 0 && startAngle < 0){
                        // startAngle = startAngle + 180;
                    }

                    rotate = endAngle - startAngle;
                    console.log('rotate' + rotate)
                    rotate = this.currentTarget.startRotate + rotate;
                    this.setRotateDeg(this.currentTarget.dom, -1, rotate);
                }                
            });
            element.addEventListener('mouseup', (e) => {
                if(this.drag && this.currentTarget){
                    let endRotate = this.getRotateDeg(this.currentTarget.dom);
                    let curIndex = this.currentTarget.index;
                    let unitAngle = this.angles[curIndex];
                    // step1. 吸附到最近的 unitAngle 倍数上
                    if(Math.abs(endRotate % unitAngle) >= unitAngle / 2){
                        if(endRotate >= 0){
                            endRotate = (Math.floor(endRotate / unitAngle) + 1) * unitAngle;
                        }else{
                            endRotate = (Math.ceil(endRotate / unitAngle) - 1) * unitAngle;
                        }
                    }else{
                        if(endRotate >= 0){
                            endRotate = Math.floor(endRotate / unitAngle) * unitAngle;
                        }else{
                            endRotate = Math.ceil(endRotate / unitAngle) * unitAngle;
                        }
                    }
                    // step2. 进行超限修正 
                    // 修正前旋转了多少位置
                    let dataLength = this.nodeManager.getDepthData(this.data, curIndex).length;
                    let changeIndex = (endRotate - this.currentTarget.startRotate) / unitAngle;
                    let endIndex = parseInt(changeIndex.toFixed()) + this.selected[curIndex];
                    // 右侧超限需要回转
                    if(endIndex >= dataLength){
                        this.selected[curIndex] = dataLength - 1; 
                        endRotate = endRotate - (endIndex - (dataLength - 1)) * unitAngle;
                    // 左侧超限需要回转
                    } else if(endIndex < 0){
                        this.selected[curIndex] = 0;
                        endRotate = endRotate + (Math.abs(endIndex)) * unitAngle;
                    // 正常范围内
                    } else if(this.selected[curIndex] !== endIndex){
                        this.selected[curIndex] = endIndex;
                    }
                    // 刷新下层数据
                    this.nodeManager.refreshWarpper(curIndex, this.selected);
                    this.setRotateDeg(this.currentTarget.dom, curIndex,  endRotate);
                }
                this.currentTarget = null;
                e.stopPropagation();
                e.preventDefault();
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
                this.setRotateDeg(warpperDom, warpperIndex,  rotate);
                // 刷新下层数据
                this.nodeManager.refreshWarpper(warpperIndex, this.selected);
            }
        });
    }

    // 旋转DOM，domIndex == -1 时表示仅旋转，不刷新内部组件selected状态， 避免了拖拽时的卡顿
    setRotateDeg(dom, domIndex, rotate){
        dom.style.transform = ` translateX(-50%) translateY(-50%) rotate(${rotate}deg)`;
        let data = domIndex === -1 ? undefined : this.nodeManager.getDepthData(this.data, domIndex);
        // 逆向旋转内部组件
        Array.from(dom.getElementsByClassName('ozc_card')).forEach((element, index) => {
            element.style.transform = `rotate(${-rotate}deg)`;
            if(domIndex !== -1){
                // 清空内部组件，并重新绘制 selected 状态
                element.innerHTML = '';
                this.nodeManager.render && this.nodeManager.render(element, data[index], {
                    boss: false,
                    selected: this.selected[domIndex] === index ? true : false
                });
            }
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

    // 以center为圆心，以start
    getMouseDeg(center, ){

    }
}














































































































