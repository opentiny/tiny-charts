import { NODE_ID_PREFIX } from './NodeManager';
import { attr, addClass, createSvgByTag } from './util';

const ENTER_ID_PREFIX = 'ftc-enter-line-';
const EXIT_ID_PREFIX = 'ftc-exit-line-';
const ENTER_LINE = 'enter-line';
const EXIT_LINE = 'exit-line';

export default class LineManager {
    // 连线数据
    lines;
    // exitLine和enterLine之间的菱形半径
    radius = 9;
    // enterLine默认长度
    distance;

    constructor(data, container, layout) {
        this.lines = {};
        this.container = container;
        this.containerPosn = container.getBoundingClientRect();;
        this.distance = layout.xSpace / 2;
        this.createLines(data, null);
    }

    /**
     * 保存连线数据
     */
    set(type, id, startId, endId, startPosn, endPosn) {
        this.lines[id] = {
            type,
            endId,
            endPosn,
            startId,
            startPosn
        }
    }

    // 根据数据创建连线
    // TODO: 代码待优化，特别是获取宽高时
    createLines(node, parentNode) {
        // 绘制enter line
        if (node.children && node.children.length > 0) {
            let path = this.createEnterLine(node.dom, this.containerPosn);
            this.container.appendChild(path);
        }
        // 绘制exit line
        if (node.parent) {
            let path = this.createExitLine(node.dom, parentNode, this.containerPosn);
            this.container.appendChild(path);
        }
        if (node.children && node.children.length > 0) {
            node.children.forEach(child => {
                this.createLines(child, node.dom);
            });
        }
    }

    /**
     * 创建enterLine
     * 在创建连线时，同时保存数据到lines
     * 注意：getBoundingClientRect取得的位置是相对于浏览器视窗的
     * node：enterLine指向的节点
     * containerPosn: 是最外层父容器距离视窗的位置信息
     **/
    createEnterLine(enterNode, containerPosn) {
        let posn = enterNode.getBoundingClientRect();
        let pathStart = {
            x: posn.left - this.distance - containerPosn.left,
            y: posn.top + posn.height / 2 - containerPosn.top
        };
        let pathEnd = {
            x: pathStart.x + this.distance,
            y: pathStart.y
        };
        let path = createSvgByTag('path');
        let id = ENTER_ID_PREFIX + enterNode.id.replace(NODE_ID_PREFIX, '');
        let d = `M${pathStart.x},${pathStart.y} L${pathEnd.x},${pathEnd.y}`
        attr(path, 'd', d);
        attr(path, 'id', id);
        addClass(path, ['ftc-line', 'ftc-enter-line']);
        this.set(ENTER_LINE, id, null, enterNode.id, pathStart, pathEnd);
        return path;
    }

    /**
     * 创建exitLine
     * 在创建连线时，同时保存数据到lines
     * exitNode：enterLine引出的节点
     * enterNode：enterLine指向的节点
     * containerPosn: 是最外层父容器距离视窗的位置信息
     **/
    createExitLine(exitNode, enterNode, containerPosn) {
        let exitPosn = exitNode.getBoundingClientRect();
        let enterPosn = enterNode.getBoundingClientRect();
        let pathStart = {
            x: exitPosn.left + exitPosn.width / 2 - containerPosn.left,
            y: exitPosn.top + exitPosn.height / 2 - containerPosn.top,
        };
        let pathEnd = {
            x: enterPosn.left - this.distance - containerPosn.left,
            y: enterPosn.top + enterPosn.height / 2 - containerPosn.top
        }
        let newPathEnd = this.reduceExitLine(pathStart, pathEnd)
        let path = createSvgByTag('path');
        let id = EXIT_ID_PREFIX + exitNode.id.replace(NODE_ID_PREFIX, '');
        let d = `M${pathStart.x},${pathStart.y} L${newPathEnd.x},${newPathEnd.y}`;
        attr(path, 'd', d);
        attr(path, 'id', id);
        addClass(path, 'ftc-line');
        this.set(EXIT_LINE, id, exitNode.id, enterNode.id, pathStart, pathEnd);
        return path;
    }

    updateExitLine(id, startPosn, endPosn) {
        this.lines[id].startPosn = startPosn;
        this.lines[id].endPosn = endPosn;
        let newEndPosn = this.reduceExitLine(startPosn, endPosn);
        document.getElementById(id).setAttribute('d', `M${startPosn.x},${startPosn.y} L${newEndPosn.x},${newEndPosn.y}`);
    }

    updateEnterLine(id, startPosn, endPosn) {
        this.lines[id].startPosn = startPosn;
        this.lines[id].endPosn = endPosn;
        document.getElementById(id).setAttribute('d', `M${startPosn.x},${startPosn.y} L${endPosn.x},${endPosn.y}`);
    }

    /**
     * 将箭头线向后缩，因为exitLine指向的位置有一个菱形
     * 如果不向后缩，箭头会覆盖到菱形上
     **/
    reduceExitLine(start, end) {
        let disX = end.x - start.x
        let disY = end.y - start.y;
        let angle = Math.atan2(disY, disX);
        return {
            x: end.x - this.radius * Math.cos(angle),
            y: end.y - this.radius * Math.sin(angle)
        }
    }
}