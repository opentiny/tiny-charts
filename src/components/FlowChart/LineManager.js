import LineRound from './LineRound';
import LineBezier from './LineBezier';
import LineAnimation from './LineAnimation';
import { NODE_ID_PREFIX } from './NodeManager';
import { attr, addClass, createSvgByTag } from './util';

const LINE_ID_PREFIX = 'fc-line-';

const TYPE_ROUND = 'Round';
const TYPE_BEZIER = 'Bezier';
const TYPE_STRAIGHT = 'Straight';
const TYPE_ANIMATION = 'Animation';

const defaultStyle = {
    width: 1,
    color: '#c2c2c2',
    type: TYPE_ROUND,
};

const LineFactory = {
    [TYPE_ROUND]: LineRound,
    [TYPE_BEZIER]: LineBezier,
    [TYPE_STRAIGHT]: LineRound,
    [TYPE_ANIMATION]: LineAnimation,
}
export default class LineManager {
    // 连线样式
    style;
    // 连线数据计算器
    lineCreator;
    // 连线方向
    direction;

    constructor(data, container, containerPosn, option) {
        this.data = data;
        this.direction = option.direction;
        this.initColor(option);
        this.style = Object.assign(defaultStyle, option.lineStyle);
        this.createLineCreator(container);
        this.initArrow();
        this.container = container;
        this.containerPosn = containerPosn;
        this.getLineAlignStyle(data.edges);
        this.createLines(data.edges);
        this.connectVirtualLine(data.edges);
    }

    initColor(option) {
        if (option.theme && option.theme == 'dark') {
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
        this.lineCreator = new CreatorClass(this.style, container);
    }
    
    /**
     * 
     * 计算连线的对齐方式，是向前对齐，还是向后对齐
     */
    getLineAlignStyle(edges){
        edges.forEach(edge => {
            if(!edge.alignType){
                let sameSource = edges.filter(item =>{
                    return (item.source == edge.source) && (item !== edge) 
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
        this.lineCreator.setData(edge, this.data, this.direction);
        // 用户自定义edge位置修正
        if (edge.offset) {
            edge.offset(edge)
        }
    }

    /**
     * 拼接连线信息
     */
    setPath(edge) {
        return this.lineCreator.setPath(edge);
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
        if (this.style.dash) {
            attr(path, 'stroke-dasharray', 5);
        }
        if (edge.lineStyle && edge.lineStyle.dash) {
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
        return path;
    }

    // 将两段虚拟连线链接起来
    connectVirtualLine(edges){
        // 取出所有 target 为 virtual 的连线
        let targetVirtualEdges = edges.filter(function(edge) {
            return edge.target.indexOf('virtual') !== -1;
        });
        // 取出所有 source 为  virtual 的连线
        let sourceVirtualEdges = edges.filter(function(edge) {
            return edge.source.indexOf('virtual') !== -1;
        });
        targetVirtualEdges.forEach(targetEdge => {
            let sourceEdge = sourceVirtualEdges.filter(item=> item.source == targetEdge.target)[0];
            let targetEdgeDom = this.container.querySelector(`#${targetEdge.id}`);
            let sourceEdgeDom = this.container.querySelector(`#${sourceEdge.id}`);
            sourceEdgeDom.remove();
            let newPath =  targetEdgeDom.getAttribute('d') + ' L' + sourceEdgeDom.getAttribute('d').slice(1);
            let newId = LINE_ID_PREFIX + targetEdge.source + '-to-' + sourceEdge.target;
            targetEdgeDom.setAttribute('d', newPath);
            targetEdgeDom.setAttribute('id', newId);
        });
    }


    // 更新连线
    updateLine(domId) {
        let nodeId = domId.replace(NODE_ID_PREFIX, "");
        this.data.edges.forEach(edge => {
            if (edge.source == nodeId || edge.target == nodeId) {
                this.setData(edge);
                let id = LINE_ID_PREFIX + edge.source + '-to-' + edge.target;
                document.getElementById(id).setAttribute('d', this.setPath(edge));
            }
        });
    }

    // 更新所有连线
    updateAllLine () {
        this.data.nodes.forEach((node)=>{
            let domId = node.dom.id;
            this.updateLine(domId);
        })
    }
}
