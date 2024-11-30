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
// 线动效
export default class Animation {

  constructor() {
  }

  start(option) {
    this.unmount();
    option.type && this[option.type](option)
  }

  grow(option) {
    let path = option.path;
    let linePath = path.firstChild;
    linePath.setAttribute('style', '');
    let dasharray = linePath.getTotalLength();
    const animationName = `grow-${linePath.id}`;
    const style = document.createElement('style');
    let styleHtml = `
    @keyframes ${animationName} {
      from {
        stroke-dashoffset: ${dasharray};
      }
      to {
        stroke-dashoffset: 0;
      }
    }`;
    style.id = `style-grow-${linePath.id}`;
    style.innerHTML = styleHtml;
    linePath.style.cssText += `animation-name: ${animationName};animation-duration: 1s; animation-timing-function:linear;`;
    linePath.setAttribute('stroke-dasharray', dasharray);
    this.styleDom = style;
    document.head.appendChild(style);
  }

  dash(option) {
    let path = option.path;
    let linePath = path.firstChild;
    linePath.setAttribute('style', '');
    const animationName = `dash-${linePath.id}`;
    const style = document.createElement('style');
    let styleHtml = `
    @keyframes ${animationName} {
      from {
        stroke-dashoffset: 8%;
      }
      to {
        stroke-dashoffset: 0;
      }
    }`;
    style.id = `style-dash-${linePath.id}`;
    style.innerHTML = styleHtml;
    linePath.style.cssText += `animation-name: ${animationName};animation-duration: 2s; animation-timing-function:linear;animation-iteration-count:infinite;`;
    linePath.setAttribute('stroke-dasharray', 10);
    option.color && linePath.setAttribute('stroke', option.color);
    this.styleDom = style;
    document.head.appendChild(style);
  }

  streamer(option) {
    let path = option.path;
    let linePath = path.firstChild;
    let dasharray = linePath.getTotalLength();
    linePath.setAttribute('style', '');
    linePath.setAttribute('stroke-dasharray', '');
    option.color && linePath.setAttribute('stroke', option.color);
    let d = linePath.getAttribute('d');
    let trans = document.createElement('div');
    trans.setAttribute('id',`${linePath.id}-trans-streamer`)
    let str = '';
    for (let i = 0; i < Math.floor(dasharray / 50); i++) {
      str += `<div class="fc-trans-point" style="offset-path:path('${d}');
      offset-distance:${Number(25 * i)}%;
      animation-delay:-${i * 1}s;
                position: absolute;
                top: 0;
                left: 0;
                width: 8px;
                height: 3px;
                offset-distance: 0%;
                background-image: linear-gradient(to right, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255,0.8));"></div>`
    }
    trans.insertAdjacentHTML('beforeend', str);
    let canvasContainer = path.closest(".huicharts-canvas-container").getElementsByClassName("huicharts-animation-container")[0];
    canvasContainer?.appendChild(trans);
    const animationName = `streamer-${linePath.id}`;
    const style = document.createElement('style');
    let styleHtml = `
    @keyframes ${animationName} {
      from {
        offset-distance: 0;
      }
      to {
        offset-distance: 90%;
      }
    }`;
    style.id = `style-streamer-${linePath.id}`;
    style.innerHTML = styleHtml;
    for (var i = 0; i < trans.children.length; i++) {
      var child = trans.children[i];
      child.style.cssText += `animation-name: ${animationName};animation-duration: 2s; animation-timing-function:linear;animation-iteration-count:infinite;`;
    }
    this.styleDom = style;
    document.head.appendChild(style);
  }

  // 清空动效  ，在这里把 style 给删除掉
  unmount() {
    this.styleDom && document.head.removeChild(this.styleDom);
  }

}