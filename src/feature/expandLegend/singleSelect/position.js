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
// 确定下拉框位置
function position(singleselect) {
    const distance = this.root.getBoundingClientRect();
    let preTopPosition = singleselect.dataset.top;
    let topPosition = distance.bottom + 5;
    let leftPosition = distance.left + distance.width - singleselect.clientWidth;
    if (leftPosition <= 0) {
        leftPosition = distance.left;
    }

    if (Number(preTopPosition) < topPosition || topPosition + singleselect.clientHeight > window.innerHeight) {
        topPosition = distance.top - singleselect.clientHeight;
    }
    singleselect.style.left = leftPosition + "px";
    singleselect.style.top = topPosition + "px";
    singleselect.dataset.scrollY = window.scrollY;
    singleselect.dataset.top = topPosition;
    singleselect.dataset.scrollX = window.scrollX;
    singleselect.dataset.left = leftPosition;
    singleselect.dataset.id = this.root.id;
}

export default position;