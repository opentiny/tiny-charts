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
import loading from './loading';

// 雷达图dom
const radarContainer = '<div class=\'wave_radar_container\'></div>';

// 中心dom
const domContainer = '<div class=\'wave_dom_container\'></div>';

// 最内环dom
const innerContainer = '<div class=\'wave_inner_container\'></div>';

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
