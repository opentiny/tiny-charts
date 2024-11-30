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
import MutiSelect from "../mutiSelect";
import item from "./item";
import group from "./group";
import { CSS_CLASS, SVG_ICON } from "./constants";
import { uuid } from "../../../util/math";
import { svgTransform } from "../../../util/convert";

// 创建更多按钮
function more() {
    const more = document.createElement("div");
    const moreIcon = document.createElement("img");
    more.id = `more-${uuid()}`;
    moreIcon.src = svgTransform(SVG_ICON.EVEN_MORE);
    more.classList.add(CSS_CLASS.MORE);
    more.appendChild(moreIcon);
    let dropdown = new MutiSelect(more);
    dropdown.setOption({
        data: this.data,
        itemStyle:this.itemStyle,
        // 点击触发的事件
        onclick: (index) => {

            this.paging.style.opacity = 1;
            this.paging.style.zIndex = 1;
            this.data.forEach((item) => (item.show = true));

            // 如果多选框中某个选项被激活
            if (this.data[index].selected) {

                // 创建对应的图例
                let itemDom = item.call(this, this.data[index], index);
                this.item.push(itemDom);

                // 将图例进行排序
                this.item.sort((item1, item2) => {
                    return item1.dataset.id - item2.dataset.id;
                });
            } else {

                // 如果条目被取消
                this.item = [...this.item.filter((item) => item.dataset.id != index)];
            }

            // 先去掉之前加的空白占位
            this.item = [...this.item.filter((item) => !item.classList.contains(CSS_CLASS.PLACEHOLDER))];

            // 重置其他图例的状态
            this.item.forEach((item, cur) => {
                if (cur !== index) {
                    removeUnactiveState(item);
                }
            });

            // 替换目前选择的图例dom
            this.scroll.replaceChildren(...this.item);

            // 对它们分组
            group.call(this);
            this.current = 0;

            // 分页按钮状态判断
            this.pagingText.innerText = `${this.current + 1}/${this.group.length > 0 ? this.group.length : 1}`;
            this.pagingLeftIcon.src = svgTransform(SVG_ICON.LEFT_ARROW);
            this.pagingLeftIcon.classList.remove(CSS_CLASS.PAGING_ICON_ROTATE);
            if (this.current + 1 === this.group.length || this.group.length === 0) {
                this.pagingRightIcon.src = svgTransform(SVG_ICON.LEFT_ARROW);
                this.pagingRightIcon.classList.add(CSS_CLASS.PAGING_ICON_ROTATE);
            } else {
                this.pagingRightIcon.src = svgTransform(SVG_ICON.RIGHT_ARROW);
                this.pagingRightIcon.classList.remove(CSS_CLASS.PAGING_ICON_ROTATE);
            }
            this.onclick(this.data[index], this.data);
        },
    });
    return more;
}

// 重置其他图例的状态
function removeUnactiveState(item) {
    let icon = item.querySelector(`.${CSS_CLASS.ITEM_ICON}`);
    let text = item.querySelector(`.${CSS_CLASS.ITEM_TEXT}`);
    if (icon) {
        icon.classList.remove(CSS_CLASS.ITEM_ICON_UNACTIVE);
    }
    if (text) {
        text.classList.remove(CSS_CLASS.ITEM_TEXT_UNACTIVE);
    }
}

export default more;