import { appendHTML } from '../../util/dom';

//叠加图表dom
const chart = `<div id='chart_container'></div>`;

// 选中时刻悬浮dom
const selectedTooltip = `<div id='selectedTooltip'></div>`;

// 圆点事件悬浮dom
const alarmTooltip = `<div id='alarmTooltip'></div>`;

// 悬浮指针dom
const hoverPointer = `<div id='hoverPointer'></div>`;

// 选中时间指针dom
const selectedPointer = `<div id='selectedPointer'></div>`;

// 选中圆点dom
const selectedCircle = `<div id='selectedCircle'></div>`;

export function initContainer(dom) {
    let container = `
    <div class='container'>
        ${chart}
        <canvas id="timeline"></canvas>
        ${hoverPointer}
        ${selectedPointer}
        ${selectedTooltip}
        ${selectedCircle}
        ${alarmTooltip}
    </div>`;
    appendHTML(dom, container);
}
