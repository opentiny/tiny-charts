import { appendHTML } from '../../util/dom';
import loading from './loading';

// 梯田dom
const svgContainer = `<svg class="terrace_svg_container"   xmlns="http://www.w3.org/2000/svg" version="1.1">
        <g class="terrace_g_container"></g>
    </svg>`;

// 中心dom
const domContainer = `<div class='terrace_dom_container'></div>`;

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
