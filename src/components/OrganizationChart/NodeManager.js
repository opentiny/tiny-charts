import merge from "../../util/merge";
import { getEdge, getAngle } from "../../util/math";

const INIT_RADIUS = {
    min: 200,
    gap: 200,
    angle: 30,
    direction: 'bottom'
};

const DIRECTION_ANGLE = {
    top: 180,
    left: -90,
    right: 90,
    bottom: 0
};

export default class NodeManager {
    // 圆环容器
    dom;
    // 数据
    data;
    // 圆环细节 
    radius;
    // 每层选中index
    selected;
    // 每层旋转角度
    angles;

    constructor(dom, option, selected) {
        this.dom = dom;
        this.selected = selected;
        this.data = option.data;
        this.radius = merge(INIT_RADIUS, option.radius);
        this.render = option.render;
        this.angles = [];
        // 余弦定理算出第一层圆圈中两个点之间的直线距离
        this.distance = getEdge(this.radius.min, this.radius.min, this.radius.angle);
        this.createWarppers();
        this.createInitNodes();
    }

    // 创建层级圆环
    createWarppers() {
        // 最顶层的圆环的位置
        // const initTop = 400; // 此处要改成高度的一半
        this.depth = this.getDataDepth(this.data, 0);
        for (let index = 0; index < this.depth; index++) {
            let radius = this.radius.min + this.radius.gap * index;
            let width = radius * 2;
            let zindex = 100 - index;
            // 圆环
            let warpper = `<div class="ozc_warpper" style='width: ${width}px;height: ${width}px;z-index: ${zindex}; transform: translateX(-50%) translateY(-50%) rotate(0deg);'></div>`;
            this.dom.insertAdjacentHTML('beforeend', warpper);
            // // 竖线
            // let warpperLine = `<div class="ozc_warpper_line" style='top: ${top + this.radius * 2 - this.distance / 3}px;height: ${this.distance / 3}px;'></div>`;
            // this.dom.insertAdjacentHTML('beforeend', warpperLine);
            // // 标签
            // let warpperRect = `<div class="ozc_warpper_rect" style='top: ${top + this.radius * 2 - this.distance / 5}px;'>N层</div>`;
            // this.dom.insertAdjacentHTML('beforeend', warpperRect);
            // // 空数据提示
            // let warpperEmpty = `<div class="ozc_warpper_empty" style='top: ${top + this.radius * 2 - this.distance / 3 - 36}px;'>当前部门无子部门</div>`;
            // this.dom.insertAdjacentHTML('beforeend', warpperEmpty);
        }
        this.warppers = this.dom.getElementsByClassName('ozc_warpper');
    }

    // 创建初始节点和布局
    createInitNodes() {
        this.createBoss();
        let data = [this.data];
        for (let level = 0; level < this.depth; level++) {
            let preSelect = this.selected[level - 1] || 0;
            let nextSelect = this.selected[level] || 0;
            data = data[preSelect]?.children || [];
            this.createLevel(data, nextSelect, level);
        }
    }

    // 绘制最顶层管理者 
    createBoss() {
        let boss = this.createNode(this.data,  'left: 50%;top: 50%;transform: translateX(-50%) translateY(-50%);'); 
        this.dom.appendChild(boss);
    }

    /**
     * 绘制每层员工dom
     * @param {整层数据} data 
     * @param {选中dom下标} index 
     * @param {圆环容器} warpper 
     */
    createLevel(data, selectedIndex, warpperIndex){
        let warpper = this.warppers[warpperIndex];
        // let warpperLine = this.warpperLines[warpperIndex];
        // let warpperRect = this.warpperRects[warpperIndex];
        // let warpperEmpty = this.warpperEmptys[warpperIndex];
        if(!data || data.length == 0){
            // warpperEmpty.style.display = 'block';
            // warpper.style.display = 'none';
            // warpperLine.style.display = 'none';
            // warpperRect.style.display = 'none';
            return;
        }else{
            // warpperEmpty.style.display = 'none';
            warpper.style.display = 'block';
            // warpperLine.style.display = 'block';
            // warpperRect.style.display = 'block';
        }
        
        let radius = this.radius.min + warpperIndex * this.radius.gap;
        let distance = this.distance + warpperIndex * 10;
        let angleUnit = getAngle(radius, radius, distance)[2];
        let initAngle = selectedIndex * angleUnit * -1 + DIRECTION_ANGLE[this.radius.direction];
        this.angles[warpperIndex] = angleUnit;
        data.forEach((user, i) => {
            let center = { x: radius,y: radius };
            let angle = initAngle + angleUnit * i;
            let left = center.x + radius * Math.sin(Math.PI * angle / 180);
            let top = center.y + radius * Math.cos(Math.PI * angle / 180);
            let style = `left: ${left}px;top: ${top}px;`;
            let node = this.createNode(user, style, warpperIndex, i);
            warpper.appendChild(node);
        });
    }

    // 刷新数据和DOM
    refreshWarpper(warpperIndex, selected){
        this.selected = selected;
        for (let level = warpperIndex + 1; level < this.depth; level++) {
            this.warppers[level].style.transform = `translateX(-50%) translateY(-50%) rotate(0deg)`;
            this.warppers[level].innerHTML = '';
            let depthData = this.getDepthData(this.data, level);
            let nextSelect = this.selected[level] || 0;
            this.createLevel(depthData, nextSelect, level);
        }
    }

    createNode(data, style, warpperIndex, nodeIndex) {
        let node = document.createElement('div');
        node.setAttribute('style', style);
        node.setAttribute('class', 'ozc_card');
        node.setAttribute('data-node-index', nodeIndex);
        node.setAttribute('data-warpper-index', warpperIndex);
        let state = {
            boss: warpperIndex == undefined,
            selected: this.selected[warpperIndex] === nodeIndex ? true : false
        };
        this.render && this.render(node, data, state);
        return node;
    }

    
    // 获得指定层级的数据
    getDepthData(data, targetDepth) {
        let result = [data];
        for (let level = 0; level < this.depth; level++) {
            let preSelect =  this.selected[level - 1] || 0;
            result = result[preSelect]?.children || [];
            if(level === targetDepth){
                break;
            }
        }
        return result;
    }


    // 根据数据计算出层级深度
    getDataDepth(data, depth) {
        if (data && data.children && data.children.length > 0) {
            depth++;
            let childDepths = data.children.map(child => {
                return this.getDataDepth(child, depth);
            });
            depth = Math.max(...childDepths);
        }
        return depth;
    }
}



