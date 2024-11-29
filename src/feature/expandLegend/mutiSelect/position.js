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
// 对于父元素y轴的偏移
const DELTA_Y = 5;

// 确定多选框的位置
function position(mutiselect) {

    // 获取根元素的位置
    const distance = this.root.getBoundingClientRect();

    // 上一次多选框的位置
    let preTopPosition = mutiselect.dataset.top;
    let topPosition = distance.bottom + DELTA_Y;
    let leftPosition = distance.left + distance.width - mutiselect.clientWidth;

    // 根元素左边放不下，则放右边
    if (leftPosition <= 0) {
        leftPosition = distance.left;
    }

    // 用于处理，当上一次多选框出现在根元素的上方，又在搜索框中搜索数据后，保持上一次多选框的位置，不要乱跳
    if (Number(preTopPosition) < topPosition || topPosition + mutiselect.clientHeight > window.innerHeight) {
        topPosition = distance.top - mutiselect.clientHeight;
    }
    mutiselect.style.left = leftPosition + "px";
    mutiselect.style.top = topPosition + "px";
    mutiselect.dataset.scrollY = window.scrollY;
    mutiselect.dataset.top = topPosition;
    mutiselect.dataset.scrollX = window.scrollX;
    mutiselect.dataset.left = leftPosition;
    mutiselect.dataset.id = this.root.id;
}

export default position;