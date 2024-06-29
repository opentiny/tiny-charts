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
import defendXSS from '../../util/defendXSS';
const svgContainer =
    `<svg class="fc-line-container fc-absolute" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%">
        <defs id='fc-defs-container'>
            <marker id="markerArrow" markerWidth="6" markerHeight="9" refX="5.8" refY="3.3" markerUnits="strokeWidth" class="fc-arrow" orient='auto'>
                <path
                    d="M3,0.5 L6.3,4.9 C6.63137085,5.3418278 6.5418278,5.96862915 6.1,6.3 C5.92690383,6.42982213 5.71637021,6.5 5.5,6.5 L0.5,6.5 C-0.0522847498,6.5 -0.5,6.05228475 -0.5,5.5 C-0.5,5.28362979 -0.429822128,5.07309617 -0.3,4.9 L3,0.5 Z"
                    transform="translate(3.000000, 3.500000) rotate(-270.000000) translate(-3.000000, -3.500000) scale(0.9)">
                </path>
            </marker>
        </defs>
        <g class="fc-line-g"></g>
    </svg>`;

const htmlContainer = '<div class="fc-node-container fc-absolute" id="fc-node-container"></div>';
const transContainer = '<div id="fc-trans-container"></div>';

const tagContainer = '<div class="fc-tag-container fc-absolute" id="fc-tag-container"></div>';

export function initContainer(dom) {
    let container =
        `<div id="fc-container" class="fc-container">
            ${svgContainer}
            ${tagContainer}
            ${htmlContainer}
            ${transContainer}
        </div>`
    dom.insertAdjacentHTML('beforeend', container);
}
