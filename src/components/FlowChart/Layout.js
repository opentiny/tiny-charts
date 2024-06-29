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
import dagre from './dagre';
import { isObject,isNumber } from '../../util/type';

const VALID_DIRECTIONS = [
    'LR', // left to right
    'RL', // right to left
    'TB', // top to bottom
    'BT', // bottom to top
    'H',  // horizontal
    'V'   // vertical
];

const VDirection = ['TB', 'BT', 'V'];

let NODE_WIDTH = 50;
let NODE_HEIGHT = 50;
/**
 * 根据传入数据的 nodes 和 edges 计算出绘制流程图需要的位置信息
 * 包括节点位置和边的位置
 */
export default class Layout {
    data;

    constructor(data, option, containerSize) {
        this.data = data;
        // 执行位置算法
        this.doLayout(data, option);
        // 将整个图移动到container中心, 将节点位置同步到this.data.nodes和this.data.edges中
        this.revisePosn(containerSize, option.position);
    }

    /**
     * 执行位置算法
     */
    doLayout(data, options) {
      data.nodes.forEach((v,i)=>{
        if(i===0){
          NODE_WIDTH = v.width;
          NODE_HEIGHT = v.height;
        }else{
          if(v.width > NODE_WIDTH){
            NODE_WIDTH = v.width
          }
          if(v.height > NODE_HEIGHT){
            NODE_HEIGHT = v.height
          }
        }
      })
        let g = new dagre.graphlib.Graph();
        g.setDefaultEdgeLabel(()=> {
            return {};
        });
        g.setGraph({
            rankdir: options.direction || VALID_DIRECTIONS[0],
            nodesep: (VDirection.includes(options.direction) ? options.hGap : options.vGap) || 50,
            ranksep: (VDirection.includes(options.direction) ? options.vGap : options.hGap) || 50,
        });
        // TODO：此处要缺少计算level的算法

        // 对于跨level的node链接，需要在level中间添加虚拟节点，以完善节点布局
        // 计算出所有edges边数据
        let edges = [];
        data.edges.forEach((item) => {
            let source = data.nodes.find((node) => node.id === item.source);
            let target = data.nodes.find((node) => node.id === item.target);
            edges.push({
                source: item.source,
                target: item.target,
                sourceLevel: source.level,
                targetLevel: target.level,
            })
        });
        // 获取跨level的边数据
        let specialEdges = edges.filter((item) => {
            return item.targetLevel - item.sourceLevel > 1
        });
        // 从edges中删除跨level的连线数据
        specialEdges.forEach((item) => {
            let index = -1;
            data.edges.forEach((edge, i) => {
                if (edge.source === item.source && edge.target === item.target) {
                    index = i
                }
            })
            data.edges.splice(index, 1);
        });
        // 根据跨level的连线增加虚拟节点和虚拟连线
        specialEdges.forEach((item) => {
            let id = 'virtual_' + item.target + '_' + item.source;
            data.nodes.push({
                id,
                width: NODE_WIDTH,
                height: NODE_HEIGHT,
                innerWidth: NODE_WIDTH,
                innerHeight: NODE_HEIGHT
            });
            data.edges.push({
                source: item.source,
                target: id,
            });
            data.edges.push({
                source: id,
                target: item.target,
            });
        });
        // 给dagre赋值、执行布局算法
        data.nodes.forEach((node)=> {
            g.setNode(node.id, {
                id: node.id,
                level: node.level,
                width: node.width,
                height: node.height,
            });
        });
        data.edges.forEach((edge)=> {
            g.setEdge(edge.source, edge.target);
        });
        dagre.layout(g);
        let nodes = [];
        g.nodes().forEach((node)=> {
            let coord = g.node(node);
            let obj = {
                id: coord.id,
                level: coord.level,
                x: coord.x,
                y: coord.y,
            }
            nodes.push(obj)
        });
        nodes.forEach((node)=> {
            let current = data.nodes.find((item) => item.id === node.id);
            if (current) {
                current.x = node.x;
                current.y = node.y;
            }
        });
        // 用户自定义node位置修正
        data.nodes.forEach((node)=> {
            if(node.offset){
                node.offset(node)
            }
        });
    };


    /**
     * 1. 将图移动到container中心
     * 2. 将节点位置和连线位置同步到this.data中
     */
    revisePosn(containerSize, position) {
        let minX = 99999;
        let maxX = -99999;
        let minY = 99999;
        let maxY = -99999;
        this.data.nodes.forEach(node => {
            if (minX > node.x) {
                minX = node.x
            };
            if (minY > node.y) {
                minY = node.y
            };
            if (maxX < (node.x + node.width)) {
                maxX = node.x + node.width
            };
            if (maxY < (node.y + node.height)) {
                maxY = node.y + node.height
            };
        });

        // 默认居中显示
        let reviseX = containerSize.width / 2 - (maxX + minX) / 2;
        let reviseY = containerSize.height / 2 - (maxY + minY) / 2;
        let hasPosition = false;
        if(position && isObject(position)){
          hasPosition = true;
          let topVal = position.top;
          let leftVal = position.left;
          reviseY = isNumber(topVal) ? topVal : (topVal.includes('px') ? Number.parseInt(topVal) : containerSize.height*(Number.parseFloat(topVal)/100))
          reviseX = isNumber(leftVal) ? leftVal : (leftVal.includes('px') ? Number.parseInt(leftVal) : containerSize.width*(Number.parseFloat(leftVal)/100))
        }
        let revise = {
            x: reviseX,
            y: reviseY
        }
        this.data.nodesObj = {};
        this.data.nodes.forEach(node => {
            node.x = node.x + revise.x - (hasPosition ? 25 : 0) - node.width/2;
            node.y = node.y + revise.y - (hasPosition ? 25 : 0) - node.height/2;
            this.data.nodesObj[node.id] = node;
        });
    }
}



