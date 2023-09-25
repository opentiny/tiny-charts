import './index.less';
import NodeManager from './NodeManager';
import LineManager from './LineManager';
import { initContainer } from './insert.js'

export default class FlowChart {
    // 图表渲染容器
    dom;
    // 图表所需数据
    data;
    // 图表容器边距
    padding = 30;
    // 图表最外层容器
    container;
    // 图表svg元素容器
    svgContainer;
    // 图表html元素容器
    htmlContainer;
    // 图表容器的宽高变化监听器
    resizeObserver = null;
    /**
     * 拖拽中的节点
     * node： 拖拽的节点
     * nodePosn: 拖拽节点的尺寸信息
     * initDisX, initDisY： 拖拽开始时mouse与node左上角的距离 + 父容器与屏幕距离
     */
    draggingNode = {
        node: null,
        nodePosn: null,
        initDisX: 0,
        initDisY: 0
    };
    /**
     * 生成连线和计算位置
     */
    lineManager;
    /**
     * 生成节点和计算位置
     */
    nodeManager;

    constructor(dom, option) {
        this.dom = dom;
        this.option = option;
        initContainer(this.dom);
        this.container = this.dom.getElementsByClassName("fc-container")[0];
        this.svgContainer = this.dom.getElementsByClassName("fc-line-container")[0];
        this.htmlContainer = this.dom.getElementsByClassName("fc-node-container")[0];
        this.containerPosn = this.container.getBoundingClientRect();
        this.createNodes();
        this.createLines(); 
        this.setResizeObserver();
    }

      
    /**
     * 1.创建和渲染节点
     * 2.处理数据，并计算出节点位置
     * 3.移动节点到指定位置
     */
    createNodes(){
        this.data = this.option.data;
        // this.padding = this.option.padding || this.padding;
        // this.containerPosn = Object.assign(this.containerPosn, { padding: this.padding });
        this.nodeManager = new NodeManager(this.data, this.option, this.htmlContainer);
        // 此时节点已经渲染在dom上，可以获取到宽高，计算布局
        setTimeout(()=>{
            this.nodeManager.layoutNodes(this.data, this.containerPosn);
        },0);
    }

    /**
     * 由于要支持前端框架，框架在渲染node时是异步的
     * 因此，绘制线条时需要在微任务全部处理完成才行吗，使用 setTimeout(()=>{},0)
     */
    createLines(){
        setTimeout(()=>{
            let gContainer = this.svgContainer.getElementsByClassName('fc-line-g')[0];
            this.lineManager = new LineManager(this.data, gContainer, this.containerPosn, this.option);
            if(this.option.slient !== true){
                this.initEvent();
            }
        },10)
    }

    // 绑定事件
    initEvent() {
        // 鼠标按下节点，后续如果情况复杂，可能改为绑定在document上
        this.htmlContainer.childNodes.forEach((item, index) => {
            item.onmousedown = (mousedownEvent) => {
                // 鼠标按下时刷新containerPosn，防止页面滚动后，containerPosn未刷新的现象
                this.containerPosn = this.container.getBoundingClientRect();
                // 鼠标点击
                item.style.zIndex = 2;
                let itemPosn = item.getBoundingClientRect();
                this.draggingNode.node = item;
                this.draggingNode.nodePosn = itemPosn;
                this.draggingNode.initDisX = mousedownEvent.clientX - itemPosn.left + this.containerPosn.left;
                this.draggingNode.initDisY = mousedownEvent.clientY - itemPosn.top + this.containerPosn.top;
            }
        });
        // 鼠标移动
        document.onmousemove = (mousemoveEvent) => {
            if (this.draggingNode.node) {
                // requestAnimationFrame(() => {
                let moveX = mousemoveEvent.clientX - this.draggingNode.initDisX;
                let moveY = mousemoveEvent.clientY - this.draggingNode.initDisY;
                //边界处理
                if (moveX <= 0) {
                    moveX = 0;
                }
                if (moveX + this.draggingNode.nodePosn.width >= this.containerPosn.width) {
                    moveX = this.containerPosn.width - this.draggingNode.nodePosn.width;
                }
                if (moveY <= 0) {
                    moveY = 0;
                }
                if (moveY + this.draggingNode.nodePosn.height >= this.containerPosn.height) {
                    moveY = this.containerPosn.height - this.draggingNode.nodePosn.height;
                }
                // 设置定位
                this.draggingNode.node.style.left = moveX + 'px';
                this.draggingNode.node.style.top = moveY + 'px';
                // 更改节点和连线的位置
                let domId = this.draggingNode.node.id;
                this.nodeManager.updateNode(domId, moveX, moveY);
                this.lineManager.updateLine(domId);
            }
        };
        // 鼠标抬起
        document.onmouseup = (e) => {
            if (this.draggingNode.node) {
                this.draggingNode.node.style.zIndex = 1;
                this.draggingNode = {
                    node: null,
                    nodePosn: null,
                    initDisX: 0,
                    initDisY: 0
                };
            }
        }
        document.onmouseleave = (e) => {
            if (this.draggingNode.node) {
                this.draggingNode.node.style.zIndex = 1;
                this.draggingNode = {
                    node: null,
                    nodePosn: null,
                    initDisX: 0,
                    initDisY: 0
                };
            }
        }
    }

    // 监听容器样式变化
    setResizeObserver(){
        this.resizeObserver = new ResizeObserver(entries => {
          // 此处需要补充节流函数
          if(this.nodeManager && this.lineManager){
            this.containerPosn = this.container.getBoundingClientRect();
            this.nodeManager.layoutNodes(this.data, this.containerPosn);
            this.lineManager.updateAllLine();
          }
        });
        this.resizeObserver.observe(this.dom);
    }

    // 销毁图表
    destory(){
        this.resizeObserver.disconnect();
        this.dom.innerHTML = '';
    }
}