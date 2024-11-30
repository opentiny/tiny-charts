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
import Tips from "../tips"
import { CSS_CLASS,SVG_ICON } from "./constants";
import { uuid } from "../../../util/math";
import { getTextWidth } from "../../../util/dom";
import { svgTransform } from "../../../util/convert";

// tips文字大小
const TEXT_SIZE = 14;
function statisticsList() {
    let maxWidth = this.root.getBoundingClientRect().width
    const table = document.createElement('table')
    table.classList.add(CSS_CLASS.TABLE)
    const colgroup = document.createElement('colgroup')
    this.statistics.head.forEach((item, index) => {
        const col = document.createElement('col')
        if (index === 0) {
            col.style.width = maxWidth*toPoint(this.statistics?.firstColumnWidth)+'px'
        }
        colgroup.append(col)
    })

    const thead = document.createElement('thead')
    thead.classList.add(CSS_CLASS.HEAD)
    let headTr = `<tr>`
    for (let item of this.statistics.head) {
        headTr += tdString(item)
    }
    headTr += `</tr>`
    thead.innerHTML = headTr
    let textMaxWidth = maxWidth*toPoint(this.statistics?.firstColumnWidth)-12-10-16
    const tbody = document.createElement('tbody')
    this.data.forEach((data, index) => {
        const tr = document.createElement('tr')
        const itemTd = document.createElement('td')
        itemTd.classList.add(CSS_CLASS.TABLE_ITEM)
        itemTd.append(item.call(this, data, index, this.onclick,textMaxWidth))
        tr.append(itemTd)
        let statisticsData = this.statistics.data[index]

        for (let tdData of statisticsData) {
            const td = document.createElement('td')
            td.classList.add(CSS_CLASS.OTHER_TABLE_ITEM)
            td.innerHTML = `${tdData}`
            tr.append(td)
        }
        tbody.append(tr)

    });
    table.append(colgroup, thead, tbody)
    return table
}


function tdString(data) {
    return `<td style="padding:6px ;">${data}</td>`
}

function item(data, index, onclick,textMaxWidth) {
    let itemDom = document.createElement("div");
    itemDom.id = `${CSS_CLASS.ITEM}_${uuid()}`;
    itemDom.classList.add(CSS_CLASS.ITEM);
    itemDom.title = data.name
    let icon = document.createElement("div");

    // icon是展示为线还是小圆点
    if (this?.itemStyle?.icon === "line") {
        icon.classList.add(CSS_CLASS.ICON_LINE);
    } else {
        icon.classList.add(CSS_CLASS.ICON_CIRCLE);
    }
    icon.style.background = data.color;
    let text = document.createElement("span");
    text.innerText = data.name;
    text.classList.add(CSS_CLASS.ITEM_TEXT);

    // 是否要展示tips
    if (this?.itemStyle?.showTips) {
        if (getTextWidth(data.name, 12) > textMaxWidth) {
            let tips = new Tips(itemDom);
            tips.setOption({
                data: data.name,
                onclick: () => { },
            });
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
    itemDom.append(icon, text, copy);

    // 每个图例的点击事件
    itemDom.addEventListener("click", (e) => {
        e.stopPropagation();
        icon.classList.toggle(CSS_CLASS.ICON_UNACTIVE);
        text.classList.toggle(CSS_CLASS.ITEM_UNACTIVE);
        onclick && onclick(this.data[index]);
    });
    return itemDom
}

function toPoint(percent){
    let str=percent.replace("%","");
        str= str/100;
    return str;
}
export default statisticsList