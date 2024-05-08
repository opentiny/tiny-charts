/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { appendHTML } from '../../util/dom';
import { insertIcon } from './insertIcon';

export function initContainer(dom,option) {
    let container = `
    <div class="mc-container ${option.layout} ${option.alignment}" id="mc-container">
        <div class="mc-content">
            <div class="mc-current">
                <div class="mc-current-text"></div>
            </div>
            <div class="mc-scales"></div>
        </div>
        <div class="mc-btn mc-btn-prev">
            <img src='${insertIcon('prev')}'>
        </div>
        <div class="mc-btn mc-btn-next">
            <img src='${insertIcon('next')}'>
        </div>
    </div>`;
    appendHTML(dom, container);
}
