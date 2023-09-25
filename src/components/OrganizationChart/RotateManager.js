// TODO: mousemove 和 mouseup 改为绑定在this.dom
export default class RotateManager {
    currentTarget = null; 

    constructor(dom, option, selected, nodeManager) {
        this.dom = dom;
        this.data = option.data;
        this.selected = selected;
        this.nodeManager = nodeManager;
        this.unitAngle = this.nodeManager.unitAngle;
        this.initWarppersEvent();
        this.initNodesEvent(this.dom.getElementsByClassName('user_card'));
    }

    // 绑定转轮拖动事件
    initWarppersEvent(){
        this.warppers = this.dom.getElementsByClassName('ozc_warpper');
        Array.from(this.warppers).forEach((element, index) => {
            element.addEventListener('mousedown', (e) => {
                let currentTargetRect = e.currentTarget.getBoundingClientRect();
                this.currentTarget = {
                    dom: e.currentTarget, // 旋转DOM
                    index: index,         // 旋转的是第几层，0表示第一层，旋转后需要刷新下层数据，1表示第二层，旋转后无需刷新数据
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
                    this.currentTarget.endTouchPosition = { // 鼠标拖动的位置
                        x: e.clientX,
                        y: e.clientY
                    };
                    let endAngle = 360 * Math.atan((this.currentTarget.endTouchPosition.y - this.currentTarget.center.y) / (this.currentTarget.endTouchPosition.x - this.currentTarget.center.x))/(2 * Math.PI);
                    let startAngle = 360 * Math.atan((this.currentTarget.startTouchPosition.y - this.currentTarget.center.y) / (this.currentTarget.startTouchPosition.x - this.currentTarget.center.x))/(2 * Math.PI);
                    let rotate = 0;
                    if(endAngle >= 0 && startAngle >= 0){
                        rotate = endAngle - startAngle;
                    }else if(endAngle < 0 && startAngle >= 0){
                        endAngle = endAngle + 180;
                        rotate = endAngle - startAngle;
                    }else if(endAngle < 0 && startAngle <= 0){
                        rotate = endAngle - startAngle;
                    }else if(endAngle > 0 && startAngle < 0){
                        startAngle = startAngle + 180;
                        rotate = endAngle - startAngle;
                    }
                    rotate = this.currentTarget.startRotate + rotate;
                    this.setRotateDeg(this.currentTarget.dom, -1, rotate);
                }                
            });
            element.addEventListener('mouseup', (e) => {
                if(this.currentTarget){
                    let endRotate = this.getRotateDeg(this.currentTarget.dom);
                    // 吸附到最近的 this.unitAngle 倍数上
                    if(Math.abs(endRotate % this.unitAngle) >= 10){
                        if(endRotate >= 0){
                            endRotate = (Math.floor(endRotate / this.unitAngle) + 1) * this.unitAngle
                        }else{
                            endRotate = (Math.ceil(endRotate / this.unitAngle) - 1) * this.unitAngle
                        }
                    }else{
                        if(endRotate >= 0){
                            endRotate = Math.floor(endRotate / this.unitAngle) * this.unitAngle
                        }else{
                            endRotate = Math.ceil(endRotate / this.unitAngle) * this.unitAngle
                        }
                    }
                    // 如果为第一层旋转，则更改位置，刷新下层数据
                    if(this.currentTarget.index == 0){
                        let dataLength = this.data.children.length;
                        // 修正前旋转了多少位
                        let changeIndex = (endRotate - this.currentTarget.startRotate) / this.unitAngle;
                        let endIndex = changeIndex + this.selected[0];
                        // 修正右侧最大旋转角度
                        if(endIndex >= dataLength){
                            this.selected[0] = dataLength - 1; 
                            endRotate = endRotate - (endIndex - (dataLength - 1)) * this.unitAngle;
                        // 修正左侧最大旋转角度
                        }else if(endIndex < 0){
                            this.selected[0] = 0;
                            endRotate = endRotate + (Math.abs(endIndex)) * this.unitAngle;
                        }else if(this.selected[0] !== endIndex){
                            this.selected[0] = endIndex;
                            // 刷新下层数据
                            this.nodeManager.refreshSecondWarpper(this.selected);
                        }
        
                    // 如果为第二层，则仅仅更改位置
                    }else if(this.currentTarget.index == 1){
                        let dataLength = this.data.children[this.selected[0]].children.length;
                        // 修正前旋转了多少位
                        let changeIndex = (endRotate - this.currentTarget.startRotate) / this.unitAngle;
                        let endIndex = changeIndex + this.selected[1];
                        // 修正右侧最大旋转角度
                        if(endIndex >= dataLength){
                            this.selected[1] = dataLength - 1; 
                            endRotate = endRotate - (endIndex - (dataLength - 1)) * this.unitAngle;
                        // 修正左侧最大旋转角度
                        }else if(endIndex < 0){
                            this.selected[1] = 0;
                            endRotate = endRotate + (Math.abs(endIndex)) * this.unitAngle;
                        }else{
                            this.selected[1] = endIndex;
                        }
                    }
                    this.setRotateDeg(this.currentTarget.dom, this.currentTarget.index,  endRotate);
                    this.currentTarget = null;
                }
            });
        });
        this.dom.addEventListener('mouseleave', (e)=>{
            if(this.currentTarget){
                let mouseupEvent = new Event('mouseup');
                this.currentTarget.dom.dispatchEvent(mouseupEvent);
            }
        })
    }   

    // 绑定卡片点击事件
    initNodesEvent(nodes){
        Array.from(nodes).forEach((card, index) => {
            card.addEventListener('click', (e) => {
                let warpperIndex = parseInt(e.currentTarget.getAttribute('data-warpper-index'));
                let warpperDom = this.nodeManager.warppers[warpperIndex];
                let nodeIndex = parseInt(e.currentTarget.getAttribute('data-node-index'));
                let moveIndex = this.selected[warpperIndex] - nodeIndex;
                let rotate = this.unitAngle * moveIndex * -1;
                rotate = this.getRotateDeg(warpperDom) + rotate;
                this.selected[warpperIndex] = nodeIndex;
                this.setRotateDeg(warpperDom, warpperIndex,  rotate);
                if(warpperIndex == 0){
                    // 刷新下层数据
                    this.nodeManager.refreshSecondWarpper(this.selected);
                    this.initNodesEvent(this.nodeManager.warppers[1].getElementsByClassName('user_card'));
                }           
            });
        })
    }

    // 旋转DOM, 并且逆向旋转其内部组件, 选中的内部组件要轻微放大
    setRotateDeg(dom, domIndex, rotate){
        dom.style.transform = ` translateX(-50%) rotate(${rotate}deg)`;
        Array.from(dom.getElementsByClassName('user_card')).forEach((element, index) => {
            if(domIndex !== -1 && index == this.selected[domIndex]){
                element.style.transform = `rotate(${-rotate}deg)  scale(1.2)`;
            }else{
                element.style.transform = `rotate(${-rotate}deg)`;
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
}

