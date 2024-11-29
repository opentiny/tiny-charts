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
import forceCenter from './center';
import forceLink from './link';
import forceManyBody from './manyBody';
import forceCollide from './collide';
import forceSimulation from './simulation';

const initialRadius = 10;
const initialSize = 2 * initialRadius;
export default class NodeManager {
  // 节点数据
  data;
  layoutNodes;
  dom;

  constructor(data, option, container) {
    this.option = option;
    this.dom = container;
    this.render = option.render;
  }

  //调用动画函数

  /**
   * 创建节点
   */
  create() {
    const { data, width, height, strength, distance, key, symbolSize } =
      this.option;
    let simulation = forceSimulation(data.nodes, this.option);
    // 节点相互吸引（正值）或排斥(负值),默认的strength是-30
    simulation.force('charge', forceManyBody().strength(strength));
    // 节点往中心点吸引
    simulation.force('center', forceCenter(width / 2, height / 2));
    // 连接节点,创建固定距离
    const forceLinkIns = forceLink(data.links);
    if (key) {
      // 没有唯一的值，就以下标索引作为连接关系
      forceLinkIns.id((d) => d[key]);
    }
    // forceLink将链接的节点移动到一个固定的距离(distance)
    simulation.force('link', forceLinkIns.distance(distance));
    // 避免节点(circle)重叠,返回节点半径
    simulation.force(
      'collision',
      forceCollide().radius((node,index,nodes) => {
        return node.radius || node.symbolSize / 2 || symbolSize / 2 || initialRadius;
      })
    );
    simulation.on('tick', this.ticked);
    // simulation.alphaTarget(0.3).restart();
    // simulation.alphaDecay(1);

    let nodeDom = this.createNode(this.option, data.nodes);
    let linkDom = this.createLine(this.option, data.links);
    this.dom.appendChild(nodeDom);
    this.dom.appendChild(linkDom);
  }

  /*
   * 创建nodedom
   *
   */
  createNode(option, nodes) {
    let dom = document.createElement('div');
    dom.classList = ['fd-node-con'];
    nodes.forEach((item, index) => {
      // 节点信息
      let itemDom = document.createElement('div');
      itemDom.classList = ['fd-node'];
      itemDom.style.width =
        (item.symbolSize || option.symbolSize || initialSize) + 'px';
      itemDom.style.height =
        (item.symbolSize || option.symbolSize || initialSize) + 'px';
      let renderFun = item.render || option.render;
      renderFun && renderFun(itemDom, item, index);
      dom.appendChild(itemDom);
    });
    return dom;
  }

  /*
   * 创建lineDom
   *
   */
  createLine(option, links) {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.width = option.width;
    svg.style.height = option.height;
    let g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    links.forEach((res, index) => {
      let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('data-index', index);
      line.setAttribute('class', 'line');
      line.setAttribute(
        'stroke',
        res.lineColor || option.lineStyle.color || '#000'
      );
      option.lineStyle.style == 'dotted'
        ? line.setAttribute('stroke-dasharray', '2 2')
        : '';
      line.setAttribute(
        'stroke-width',
        option.lineStyle ? option.lineStyle.height + 'px' : '1px'
      );
      g.appendChild(line);
    });
    svg.appendChild(g);
    return svg;
  }

  // 迭代更新位置
  ticked() {
    let nodes = this.nodes(); // 此处的this是simulation
    let option = this.option();
    window.requestAnimationFrame(animate);

    function animate() {
      const $node = document.getElementsByClassName('fd-node');
      const $lines = document.getElementsByClassName('line');

      if ($node.length > 1) {
        nodes.forEach((res, index) => {
          const diff = res.radius || res.symbolSize / 2 || option.symbolSize / 2 || initialRadius;
          $node[index].style.transform = `translate(${res.x - diff}px, ${res.y - diff}px)`;
        });
        option.data.links.forEach((res, index) => {
          if ($lines[index]) {
            $lines[index].setAttribute('x1', res.source.x);
            $lines[index].setAttribute('y1', res.source.y);
            $lines[index].setAttribute('x2', res.target.x);
            $lines[index].setAttribute('y2', res.target.y);
          }
        });
      }
    }
  }
}
