import { appendHTML } from './util';
import loading from './loading';


const svgContainer = `<svg class="wave_svg_container"   xmlns="http://www.w3.org/2000/svg" version="1.1">
        <g class="wave_g_container"></g>
    </svg>`;

const domContainer = `<div class='wave_dom_container'></div>`;

const radarContainer = `<div class='wave_radar_container'></div>`;
const loadingContainer = `<div class='wave_loading_container'><div class="loading_dom"></div><div class="loading_svg">${loading}</div></div>`;

export function initContainer(dom) {
    let container = `<div class='wave_container'>
        <div class="wave_chart_container">${svgContainer}
            ${radarContainer}
            ${domContainer}
        </div>
        ${loadingContainer}
        </div>`;
    appendHTML(dom, container);
}
