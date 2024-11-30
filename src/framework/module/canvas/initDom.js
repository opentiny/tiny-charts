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
import Grid from './grid';

const svgContainer =
    `<svg class="huicharts-lines-container" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%">
        <defs></defs><g class="huicharts-lines-g"></g>
     </svg>`;
const svgSecondContainer =
    `<svg class="huicharts-second-lines-container" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%">
        <defs></defs><g class="huicharts-second-lines-g"></g>
    </svg>`;
 
function initDom(dom, option) {
    // 画布最外层根容器
    let root = document.createElement('div');
    root.setAttribute('class', 'huicharts-container');
    dom?.appendChild(root);
    // 画布最外层容器
    let container = document.createElement('div');
    container.setAttribute('class', 'huicharts-canvas-container');
    root.appendChild(container);
    // 画布背景网格
    let bgCanvas;
    if (option?.show && option?.grid?.show) {
        bgCanvas = new Grid(container, option?.grid);
    }
    // 连线svg容器
    container.insertAdjacentHTML('beforeend', svgContainer);
    let lineContainer = dom.getElementsByClassName("huicharts-lines-container")[0];
    let lineGContainer = lineContainer.getElementsByClassName('huicharts-lines-g')[0];
    // 节点容器
    let nodeContainer = document.createElement('div');
    nodeContainer.setAttribute('class', 'huicharts-nodes-container');
    container.appendChild(nodeContainer);
    // 二次连线svg容器
    container.insertAdjacentHTML('beforeend', svgSecondContainer);
    let secondlineContainer = dom.getElementsByClassName("huicharts-second-lines-container ")[0];
    let secondlineGContainer = secondlineContainer.getElementsByClassName('huicharts-second-lines-g')[0];
    // 动效节点容器
    let animationContainer = document.createElement('div');
    animationContainer.setAttribute('class', 'huicharts-animation-container');
    container.appendChild(animationContainer);
    return {
        root,
        bgCanvas,
        container,
        lineContainer,
        nodeContainer,
        lineGContainer,
        animationContainer,
        secondlineContainer,
        secondlineGContainer
    }
}

export default initDom;
