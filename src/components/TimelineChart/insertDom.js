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
import { appendHTML } from '../../util/dom';

// 选中时刻圆点dom
const selectedCircle = '<div class=\'timeline_selectedCircle\'></div>';

// 选中时间指针dom
const selectedPointer = '<div class=\'timeline_selectedPointer\'></div>';

// 选中时刻文本dom
const selectedTooltip = '<div class=\'timeline_selectedTooltip\'></div>';

// 悬浮指针dom
const hoverPointer = '<div class=\'timeline_hoverPointer\'></div>';

// 悬浮指针文本dom
const hoverTooltip = '<div class=\'timeline_hoverTooltip\'></div>';

// 圆点事件悬浮dom
const alarmTooltip = '<div class=\'timeline_alarmTooltip\'></div>';

export function initContainer(dom) {
    let container = `
    <div class='timeline_container'>
        <canvas id="timeline"></canvas>
        ${selectedCircle}
        ${selectedPointer}
        ${selectedTooltip}
        ${hoverPointer}
        ${hoverTooltip}
        ${alarmTooltip}
       
    </div>`;
    appendHTML(dom, container);
}
