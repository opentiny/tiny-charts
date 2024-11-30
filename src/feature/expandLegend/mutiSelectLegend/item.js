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
import { CSS_CLASS,SVG_ICON } from "./constants";
import { uuid } from "../../../util/math";
import { getTextWidth } from "../../../util/dom";
import { svgTransform } from "../../../util/convert";
// 图例的默认宽度
const DEFAULT_WIDTH = "160px"

// tips文字大小
const TEXT_SIZE = 14;

// 创建每个图例
function item(data, index) {

    // 创建整个图例的盒子
    const item = document.createElement("div");
    item.classList.add(CSS_CLASS.ITEM);
    item.id = `${CSS_CLASS.ITEM}_${uuid()}`;
    item.dataset.id = index;

    // 创建图例文字前面的图标
    const itemIcon = document.createElement("div");
    itemIcon.classList.add(CSS_CLASS.ITEM_ICON)
    itemIcon.style.backgroundColor = data.color;
    if(this?.itemStyle?.icon === "line"){
        itemIcon.classList.add(CSS_CLASS.ITEM_ICON_LINE);
    }else{
        itemIcon.classList.add(CSS_CLASS.ITEM_ICON_CIRCLE);
    }

    // 创建图例的文字
    const itemText = document.createElement("span");
    itemText.classList.add(CSS_CLASS.ITEM_TEXT);
    itemText.innerText = data.name;
    itemText.title = data.name;

    // 如果设置了图例最大宽度就设置
    if (this.itemStyle) {
        this.itemStyle.maxTextWidth && (itemText.style.maxWidth = this.itemStyle.maxTextWidth)
        if (this.itemStyle.showTips) {
            let maxTextWidth = this.itemStyle.maxTextWidth || DEFAULT_WIDTH
            maxTextWidth = maxTextWidth.split('px')[0] - 0

            // 如果图例超出了最大宽度就增加hover触发的tips
            if (getTextWidth(data.name,TEXT_SIZE) > maxTextWidth) {
                let tips = new Tips(item);
                tips.setOption({
                    data: data.name,
                    onclick: () => { },
                });
            }
        }
    }

    const copy = document.createElement('img')
    copy.classList.add('copy')
    if(this?.itemStyle?.copy){
        const svg1 = svgTransform(SVG_ICON.COPY1)
        const svg2 = svgTransform(SVG_ICON.COPY2)
        copy.src = svg1

        copy.addEventListener('mouseover', (e) => {
            e.stopPropagation()
            copy.src = svg2
        })
        copy.addEventListener('mouseleave', (e) => {
            e.stopPropagation()
            copy.src = svg1
        })
        copy.addEventListener('click', async (e) => {
            e.stopPropagation()
            let clipboard = navigator.clipboard || {
                writeText: (text) => {
                    let copyInput = document.createElement('input');
                    copyInput.value = text;
                    document.body.appendChild(copyInput);
                    copyInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(copyInput);
                }
            }
            if (clipboard) {
                await clipboard.writeText(data.name);
            }
        })
    }
    item.append(itemIcon, itemText, copy);

    // 图例是否未激活
    if (data.show === false) {
        itemIcon.classList.toggle(CSS_CLASS.ITEM_ICON_UNACTIVE);
        itemText.classList.toggle(CSS_CLASS.ITEM_TEXT_UNACTIVE);
    }
    
    // 图例添加点击事件切换样式
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        data.show = !data.show
        itemIcon.classList.toggle(CSS_CLASS.ITEM_ICON_UNACTIVE);
        itemText.classList.toggle(CSS_CLASS.ITEM_TEXT_UNACTIVE);
        this.onLegendClick && this.onLegendClick(this.data[index]);
    });
    return item;
}
export default item;