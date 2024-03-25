import { appendHTML } from '../../util/dom';

// 选中时刻悬浮dom
const selectedTooltip = '<div class=\'timeline_selectedTooltip\'></div>';

// 圆点事件悬浮dom
const alarmTooltip = '<div class=\'timeline_alarmTooltip\'></div>';

// 悬浮指针dom
const hoverPointer = '<div class=\'timeline_hoverPointer\'></div>';

// 选中时间指针dom
const selectedPointer = '<div class=\'timeline_selectedPointer\'></div>';

// 选中圆点dom
const selectedCircle = '<div class=\'timeline_selectedCircle\'></div>';

export function initContainer(dom) {
    let container = `
    <div class='timeline_container'>
        <canvas id="timeline"></canvas>
        ${hoverPointer}
        ${selectedPointer}
        ${selectedTooltip}
        ${selectedCircle}
        ${alarmTooltip}
    </div>`;
    appendHTML(dom, container);
}
