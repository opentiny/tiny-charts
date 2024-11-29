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
import defendXSS from '../../../util/defendXSS';
import { attr, addClass, createDom } from '../../../util/dom';
export default class Tag {

  constructor(data) {
    this.tag = data.tag || { text: '' };
  }

  render() {
    let text = defendXSS(this.tag.text);
    let { background, color, radius } = this.tag.style;
    let g = createDom('g');
    let width = this.measureTextWidth(text);
    addClass(g, 'huicharts-line-tag');
    g.innerHTML =
      `<rect fill="${background}" x="-${width/2}" y="-15" rx="${radius}" ry="${radius}" width="${width+10}" height="20""></rect>
        <text font-size="14" xml:space="preserve" fill="${color}" text-anchor="middle" pointer-events="none">
          <tspan>${text}</tspan>
        </text>`;
    return g;
  }

  setPosition(path, edge) {
    let g = path.getElementsByTagName("g");
    let { position } = this.tag.style;
    if (g.length) {
      const startX = edge.startConnector.absolute.x;
      const endX = edge.endConnector.absolute.x;
      const startY = edge.startConnector.absolute.y;
      const endY = edge.endConnector.absolute.y;
      let xPos = startX + (endX - startX)*position;
      let yPos = startY + (endY - startY)*position;
      attr(g[0], 'transform', `translate(${xPos}, ${yPos})`)
      attr(g[0], 'display', 'block')
    }
  }
  
  measureTextWidth(text, font) {
    // 创建一个canvas元素用于测量文本
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
 
    // 设置文本的样式
    context.font = font || '16px Arial';
 
    // 测量文本
    const metrics = context.measureText(text);
    return metrics.width;
}
}