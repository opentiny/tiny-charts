/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import merge from '../../util/merge';
import { getEdge, getAngle } from '../../util/math';
import defendXSS from '../../util/defendXSS';
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

const LINE_STYLE = {
    color: '#BBBBBB'
}

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
        this.lineStyle = merge(LINE_STYLE, option.lineStyle);
        this.angles = [];
        // 余弦定理算出第一层圆圈中两个点之间的直线距离
        this.distance = getEdge(this.radius.min, this.radius.min, this.radius.angle);
        this.createWarppers();
        this.createInitNodes();
    }

    // 创建层级圆环
    createWarppers() {
        // 最顶层的圆环的位置
        this.depth = this.getDataDepth(this.data, 0);
        for (let index = 0; index < this.depth; index++) {
            let radius = this.radius.min + this.radius.gap * index;
            let width = defendXSS(radius * 2);
            let zindex = defendXSS(100 - index);
            // 圆环
            let warpper = `<div class="ozc_warpper" style='width: ${width}px;height: ${width}px;z-index: ${zindex}; transform: translateX(-50%) translateY(-50%) rotate(0deg);'></div>`;
            this.dom.insertAdjacentHTML('beforeend', warpper);
        }
        this.warppers = this.dom.getElementsByClassName('ozc_warpper');
        Array.from(this.warppers).forEach(element => {
            element.style.setProperty('--lineColor', this.lineStyle.color);
        })
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
        if(!data || data.length == 0){
            return;
        }else{
            warpper.style.display = 'block';
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
            this.warppers[level].style.transform = 'translateX(-50%) translateY(-50%) rotate(0deg)';
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



