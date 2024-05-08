/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { appendHTML } from '../../util/dom';
import loading from './loading';

// 梯田dom
const svgContainer = `<svg class="terrace_svg_container"   xmlns="http://www.w3.org/2000/svg" version="1.1">
        <g class="terrace_g_container"></g>
    </svg>`;

// 中心dom
const domContainer = '<div class=\'terrace_dom_container\'></div>';

// 加载dom
const loadingContainer = `<div class='terrace_loading_container'><div class="loading_dom"></div><div class="loading_svg">${loading}</div></div>`;

export function initContainer(dom) {
    let container = `<div class='terrace_container'>
    <div class="terrace_chart_container">
        ${svgContainer}
        ${domContainer}
    </div>
    ${loadingContainer}
    </div>`;
    appendHTML(dom, container);
}
