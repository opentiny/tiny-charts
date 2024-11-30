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
import { CSS_CLASS, SVG_ICON } from "./constants";
import { svgTransform } from "../../../util/convert";

// 计算每组内容所占内容是否超出父元素,并分组
function group() {
    let windowScrollX = window.scrollX;
    let barLeft = this.scroll.getBoundingClientRect().left;
    this.group = [];
    let tempGroup = [];
    let scrollClientWidth = this.scroll.clientWidth
    // 分组，每组不会超过父元素宽度
    this.item.forEach((item) => {
        let pre = Math.floor((getOffsetLeft(item) - barLeft + windowScrollX) / scrollClientWidth);
        let cur = Math.floor((getOffsetLeft(item) - barLeft + windowScrollX + item.clientWidth) / scrollClientWidth);
        if (pre + 1 === cur) {
            this.group.push([...tempGroup]);
            tempGroup = [];
            tempGroup.push(item);
        } else {
            tempGroup.push(item);
        }
    });
    this.group.push([...tempGroup]);
    let amendGroup = [];

    // 实际替换后再判断一下是否展示全
    for (let group of this.group) {
        group.unshift(...amendGroup);
        this.scroll.replaceChildren(...group);
        amendGroup = [];
        for (let i = group.length - 1; i > 0; i--) {
            let item = group[i];
            if (getOffsetLeft(item) - barLeft + window.scrollX + item.clientWidth > scrollClientWidth) {
                amendGroup.unshift(item);
                group.pop();
            } else {
                break;
            }
        }
    }

    // 如果每组有超出的元素，则将元素往后面的组里加，并保证后面的组也能展示全
    if (amendGroup.length > 0) {
        do {
            this.group.push([...amendGroup]);
            amendGroup = [];
            let group = this.group[this.group.length - 1];
            this.scroll.replaceChildren(...group);
            for (let i = group.length - 1; i > 0; i--) {
                let item = group[i];
                if (getOffsetLeft(item) - barLeft + window.scrollX + item.clientWidth > scrollClientWidth) {
                    amendGroup.unshift(item);
                    group.pop();
                } else {
                    break;
                }
            }
        } while (amendGroup.length !== 0);
    }
    this.group = this.group.filter((item) => item.length > 0);
    this.scroll.replaceChildren(...this.item);

    // 为第一组最前方加上空白盒子占位
    if (this.group[0] !== undefined) {
        let firstLastElement = this.group[0][this.group[0].length - 1];
        const placeholder = document.createElement("div");
        placeholder.style.minWidth =
            this.scroll.clientWidth - (getOffsetLeft(firstLastElement) - barLeft + window.scrollX + firstLastElement.clientWidth) + "px";
        placeholder.classList.add(CSS_CLASS.PLACEHOLDER);
        if (!this.item.includes((item) => item.class === CSS_CLASS.PLACEHOLDER)) {
            this.item.unshift(placeholder);
        } else {
            this.item[0] = placeholder;
        }
        this.group[0].unshift(placeholder);
    }
    this.scroll.replaceChildren(...this.item);

    // 判断分页按钮是否需要替换
    if (this.current + 1 === this.group.length) {
        this.pagingRightIcon.src = svgTransform(SVG_ICON.LEFT_ARROW);
        this.pagingRightIcon.classList.add(CSS_CLASS.PAGING_ICON_ROTATE);
    }
    this.pagingText.innerText = `${this.current + 1}/${this.group.length > 0 ? this.group.length : 1}`;
}

/**
 * 用于获取节点距离body的左边距
 * @param {节点} element
 * @returns
 */
function getOffsetLeft(element) {

    // 获取元素的边界矩形
    const rect = element.getBoundingClientRect();

    // 计算元素相对于文档左边的偏移量
    return rect.left + window.scrollX;
}

export default group;