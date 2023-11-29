import { appendHTML } from '../../util/dom';
import loading from './loading';

// 雷达图dom
const radarContainer = `<div class='wave_radar_container'></div>`;

// 中心dom
const domContainer = `<div class='wave_dom_container'></div>`;

// 最内环dom
const innerContainer = `<div class='wave_inner_container'></div>`;

// 加载dom
const loadingContainer = `<div class='wave_loading_container'><div class="loading_dom"></div><div class="loading_svg">${loading}</div></div>`;

export function initContainer(dom) {
    let container = `
    <div class='wave_container'>
        <div class="wave_chart_container">
            ${radarContainer}
            ${innerContainer}
            ${domContainer}
        </div>
        ${loadingContainer}
    </div>`;
    appendHTML(dom, container);
}
