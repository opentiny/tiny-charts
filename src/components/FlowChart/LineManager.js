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
import LineRound from './LineRound';
import LineBezier from './LineBezier';
import LineDirect from './LineDirect';
import { createTransLine, transLine } from './LineMode';
import { NODE_ID_PREFIX } from './NodeManager';
import { attr, addClass, createSvgByTag } from './util';

const LINE_ID_PREFIX = 'fc-line-';
const TYPE_ROUND = 'Round';
const TYPE_BEZIER = 'Bezier';
const TYPE_Direct = 'Direct';
const TYPE_STRAIGHT = 'Straight';

const defaultStyle = {
    width: 1,
    color: '#c2c2c2',
    type: TYPE_ROUND,
};

const LineFactory = {
    [TYPE_ROUND]: LineRound,
    [TYPE_Direct]: LineDirect,
    [TYPE_BEZIER]: LineBezier,
    [TYPE_STRAIGHT]: LineRound
}

// 流程线仅支持直线和折线图
const transLineType = ['Direct', 'Round', 'Straight'];
export default class LineManager {
    // 连线样式
    style;
    // 连线数据计算器
    lineCreator;
    // 连线方向
    direction;

    constructor(data, container, tagContainer, containerPosn, option) {
        this.data = data;
        this.option = option;
        this.tagContainer = tagContainer;
        this.direction = option.direction;
        this.initColor(option);
        this.style = Object.assign({},defaultStyle, option.lineStyle);
        this.createLineCreator(container);
        this.initArrow();
        this.container = container;
        this.containerPosn = containerPosn;
        this.getLineAlignStyle(data.edges);
        this.createLines(data.edges);
        this.connectVirtualLine(data.edges);
        this.createTags(data.edges);
    }

    initColor(option) {
        if (option.theme && option.theme === 'dark') {
            defaultStyle.color = '#ffffff';
        }
    }

    initArrow() {
        let arrow = document.getElementById('markerArrow');
        let color = this.style.color || '#c2c2c2';
        attr(arrow, 'fill', color);
    }

    /**
     * 生成连线数据计算器
     */
    createLineCreator(container) {
        if(this.style.type === TYPE_STRAIGHT){
            this.style.radius = 0;
        }
        const CreatorClass = LineFactory[this.style.type];
        this.lineCreator = new CreatorClass(this.style, {
            gContainer: container,
            tagContainer: this.tagContainer
        });
    }

    /**
     *
     * 计算连线的对齐方式，是向前对齐，还是向后对齐
     */
    getLineAlignStyle(edges){
        edges.forEach(edge => {
            if(!edge.alignType){
                let sameSource = edges.filter(item =>{
                    return (item.source === edge.source) && (item !== edge)
                });
                if(sameSource.length > 0){
                    edge.alignType = 'source';
                    sameSource.forEach(item => {
                        item.alignType = 'source';
                    });
                }
            }
        });
        edges.forEach(edge => {
            if(!edge.alignType){
                edge.alignType = 'target';
            }
        });
    }

    /**
     * 计算连线数据
     */
    setData(edge) {
        if(edge?.lineStyle?.type){ // edge节点应用自身设置的连线样式
            const CreatorClass = LineFactory[edge?.lineStyle?.type];
            let lineCreator= new CreatorClass(edge?.lineStyle, {
                gContainer: this.container,
                tagContainer: this.tagContainer
            })
            return lineCreator.setData(edge, this.data, this.direction);
        }else{
            this.lineCreator.setData(edge, this.data, this.direction);
        }
        // 用户自定义edge位置修正
        if (edge.offset) {
            edge.offset(edge)
        }
    }

    /**
     * 拼接连线信息
     */
    setPath(edge) {
        if(edge?.lineStyle?.type){ // edge节点应用自身设置的连线样式
            const CreatorClass = LineFactory[edge?.lineStyle?.type];
            let lineCreator= new CreatorClass(edge?.lineStyle, {
                gContainer: this.container,
                tagContainer: this.tagContainer
            })
            return lineCreator.setPath(edge)
        }else{
            return this.lineCreator.setPath(edge);
        }
    }

    // 根据数据创建连线
    createLines(edges) {
        edges.forEach(edge => {
            this.setData(edge);
            let path = this.createLine(edge);
            this.container.appendChild(path);
        });
    }

    // 创建连线dom
    createLine(edge) {
        let path = createSvgByTag('path');
        let id = LINE_ID_PREFIX + edge.source + '-to-' + edge.target;
        let d = this.setPath(edge);
        edge.id = id;
        attr(path, 'd', d);
        attr(path, 'id', id);
        if (this.style.color) {
            attr(path, 'stroke', this.style.color);
        }
        if (this.style.dash || this.style.mode === 'dash') {
            attr(path, 'stroke-dasharray', 5);
        }
        if (edge.lineStyle && edge.lineStyle.color) {
            attr(path, 'stroke', edge.lineStyle.color);
        }
        if (edge.lineStyle && ( edge.lineStyle.dash || edge.lineStyle.mode === 'dash')) {
            attr(path, 'stroke-dasharray', 5);
        }
        if (edge.lineStyle && edge.lineStyle.dash === false) {
            attr(path, 'stroke-dasharray', 0);
        }
        if (this.style.width) {
            attr(path, 'stroke-width', this.style.width + 'px');
        }
        if (edge.lineStyle && edge.lineStyle.width) {
            attr(path, 'stroke-width', edge.lineStyle.width + 'px');
        }
        addClass(path, 'fc-line');
        // type为Direct  不添加箭头
        const noDirect=edge?.lineStyle?.type===TYPE_Direct||this.style.type===TYPE_Direct
        addClass(path,noDirect?'fc-noArrow':'')

        if (this.isTransLine(edge)) {
          path = createTransLine(d, transLine(edge, id, edge.lineStyle?.transPattern || this.style.transPattern))
        }else{
          let childNode = document.getElementById(edge.id)
          childNode && document.getElementById('fc-trans-container').removeChild(childNode)
        }
        return path;
    }

    // 是否是流程线
    isTransLine(edge){
      let isTrans = false;
      if(transLineType.includes(this.style.type)){
        if(this.style.mode === 'trans'){
          isTrans = true;
          if('lineStyle' in edge && 'mode' in edge.lineStyle){
            if(edge.lineStyle.mode !== 'trans'){
              isTrans = false;
            }
          }
        }else{
          if('lineStyle' in edge && 'mode' in edge.lineStyle && edge.lineStyle.mode === 'trans'){
            isTrans = true;
          }
        }
      }
      return isTrans;
    }

    // 将两段虚拟连线链接起来
    connectVirtualLine(edges){
        // 取出所有 target 为 virtual 的连线
        let targetVirtualEdges = edges.filter((edge) => {
          return edge.target.includes('virtual');
        });
        // 取出所有 source 为  virtual 的连线
        let sourceVirtualEdges = edges.filter((edge) => {
          return edge.source.includes('virtual');
        });
        targetVirtualEdges.forEach(targetEdge => {
            let sourceEdge = sourceVirtualEdges.filter(item=> item.source === targetEdge.target)[0];
            let targetEdgeDom = this.container.querySelector(`#${targetEdge.id}`);
            let sourceEdgeDom = this.container.querySelector(`#${sourceEdge.id}`);
            sourceEdgeDom.remove();
            let newPath =  targetEdgeDom.getAttribute('d') + ' L' + sourceEdgeDom.getAttribute('d').slice(1);
            let newId = LINE_ID_PREFIX + targetEdge.source + '-to-' + sourceEdge.target;
            targetEdgeDom.setAttribute('d', newPath);
            targetEdgeDom.setAttribute('id', newId);
        });
    }

    createTags(edges){
        edges.forEach(edge => {
            this.option.renderTag && this.option.renderTag(this.tagContainer, edge);
        });
    }


    // 更新连线
    updateLine(domId) {
        let nodeId = domId?.replace(NODE_ID_PREFIX, '');
        this.data.edges.forEach(edge => {
            if (edge.source === nodeId || edge.target === nodeId) {
                this.setData(edge);
                let id = LINE_ID_PREFIX + edge.source + '-to-' + edge.target;
                if(this.isTransLine(edge)){
                  let parentNode = document.getElementById('fc-trans-container')
                  let updateChild = document.getElementById(id)
                  updateChild && parentNode.removeChild(updateChild);
                  createTransLine(this.setPath(edge), transLine(edge, id, edge.lineStyle?.transPattern || this.style.transPattern))
                }
                  document.getElementById(id)?.setAttribute('d', this.setPath(edge));
            }
        });
    }

    // 更新所有连线
    updateAllLine () {
        this.data.nodes.forEach((node)=>{
            let domId = node.dom?.id || node.id;
            this.updateLine(domId);
        })
    }
}
