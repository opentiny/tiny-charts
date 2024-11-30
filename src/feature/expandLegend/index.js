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
import MutiSelectLegend from "./mutiSelectLegend";
import MutiSelectList from "./mutiSelectList";
import SingleSelect from "./singleSelect";
import { uuid } from "../../util/math";
import { svgTransform } from "../../util/convert";
import { CSS_CLASS, SVG_ICON } from "./constants";
import SingleSelectLegend from "./singleSelectLegend";
// echarts图例切换事件名
const LEGEND_TOGGLE_SELECT = "legendToggleSelect";

function expandLegend(chartsIns) {
    const { dom: dom, eChartOption: option } = chartsIns;
    let preContainer = dom.querySelector(`.${CSS_CLASS.CONTAINER}`);
    preContainer && dom.removeChild(preContainer);
    if (option?.legend?.upgrade?.type === undefined) return;
    // 将图表原有的图例隐藏
    option.legend = {
        ...option.legend,
        show: false,
    };
    // 开始渲染
    const { type } = option.legend.upgrade;
    switch (type) {
        case "mutiselect":
            createMutiSelect(chartsIns);
            break;
        case "list":
            createList(chartsIns);
            break;
        case "singleselect":
            createSingleSelectLegend(chartsIns);
            break;
    }
    chartsIns.setOption(option);
}

function createMutiSelect(chartsIns) {
    const { dom: dom, eChartOption: option } = chartsIns;
    const { width } = option.legend.upgrade;
    const container = document.createElement("div");
    container.classList.add(CSS_CLASS.CONTAINER);
    const legendBar = document.createElement("div");
    legendBar.classList.add(CSS_CLASS.MUTISELECT_CONTAINER);
    if (width && typeof width === "string") {
        legendBar.style.width = width;
    }
    container.append(legendBar);
    dom.insertAdjacentHTML("afterbegin", container.outerHTML);
    let mutiSelect = new MutiSelectLegend(dom.querySelector(`.${CSS_CLASS.MUTISELECT_CONTAINER}`));
    let data = option?.legend?.data;
    if (data === undefined) data = option?.series[0]?.data;
    mutiSelect.setOption({
        data: [...data],
        color: [...option.color],
        itemStyle: option.legend.upgrade.itemStyle,
        onclick: (clickItem) => {
            if (option.legend?.selected === undefined) option.legend.selected = {};
            option.legend.selected[clickItem.name] = clickItem.selected;
            chartsIns.setOption(option);
        },
        onLegendClick: (clickItem) => {
            chartsIns.getEchartsInstance().dispatchAction({
                type: LEGEND_TOGGLE_SELECT,
                name: clickItem.name,
            });
        },
    });
}

function createList(chartsIns) {
    const { dom: dom, eChartOption: option } = chartsIns;
    const container = document.createElement("div");
    container.classList.add(CSS_CLASS.LIST_CONTAINER);
    if (option?.legend?.upgrade?.position === "underCanvas") {
        dom.insertAdjacentHTML("beforeend", container.outerHTML);
        dom.parentNode.querySelector(`.${CSS_CLASS.LIST_CONTAINER}`).style.width = "100%"
        dom.parentNode.querySelector(`.${CSS_CLASS.LIST_CONTAINER}`).style.position = "static"
    } else {
        dom.insertAdjacentHTML("afterbegin", container.outerHTML);
        // 图表默认距离右边35%，图例列表宽30%
        if (!option.grid) {
            option.grid = [
                {
                    bottom: 0,
                    left: 0,
                    right: "35%",
                    top: 0,
                },
            ];
        }
        if (option?.legend?.upgrade?.width) {
            dom.parentNode.querySelector(`.${CSS_CLASS.LIST_CONTAINER}`).style.width = option.legend.upgrade.width;
            option.grid[0].right = Number(option.legend.upgrade.width.split("%")[0]) + 5 + "%";
        }
    }

    const list = new MutiSelectList(dom.parentNode.querySelector(`.${CSS_CLASS.LIST_CONTAINER}`));
    let data = option?.legend?.data;
    if (data === undefined) {
        data = option?.series[0]?.data;
    }
    list.setOption({
        data: [...data],
        itemStyle: option.legend.upgrade.itemStyle,
        color: [...option.color],
        height: dom.style.height,
        statistics: option.legend.upgrade.statistics,
        onclick: (clickItem) => {
            chartsIns.getEchartsInstance().dispatchAction({
                type: LEGEND_TOGGLE_SELECT,
                name: clickItem.name,
            });
        },
    });
}

function createSingleSelect(chartsIns) {
    const { dom: dom, eChartOption: option } = chartsIns;
    const container = document.createElement("div");
    container.classList.add(CSS_CLASS.CONTAINER);
    dom.insertAdjacentHTML("afterbegin", container.outerHTML);
    dom.querySelector(`.${CSS_CLASS.CONTAINER}`).innerHTML = "";
    const more = document.createElement("div");
    const moreIcon = document.createElement("img");
    more.id = `more-${uuid()}`;
    moreIcon.src = svgTransform(SVG_ICON.MORE);
    more.classList.add(CSS_CLASS.MORE);
    more.appendChild(moreIcon);
    dom.querySelector(`.${CSS_CLASS.CONTAINER}`).append(more);
    let select = new SingleSelect(more);
    let data = option?.legend?.data;
    if (data === undefined) data = option?.series[0]?.data;
    select.setOption({
        color: [...option.color],
        data: [...data],
        itemStyle: option.legend.upgrade.itemStyle,
        onclick: (clickItem) => {
            chartsIns.getEchartsInstance().dispatchAction({
                type: LEGEND_TOGGLE_SELECT,
                name: clickItem.name,
            });
        },
    });
}

function createSingleSelectLegend(chartsIns){
    const { dom: dom, eChartOption: option } = chartsIns;
    const { width } = option.legend.upgrade;
    const container = document.createElement("div");
    container.classList.add(CSS_CLASS.CONTAINER);
    const legendBar = document.createElement("div");
    legendBar.classList.add(CSS_CLASS.SINGLESELECT_CONTAINER);
    if (width && typeof width === "string") {
        legendBar.style.width = width;
    }
    container.append(legendBar);
    dom.insertAdjacentHTML("afterbegin", container.outerHTML);
    let singleSelect = new SingleSelectLegend(dom.querySelector(`.${CSS_CLASS.SINGLESELECT_CONTAINER}`));
    let data = option?.legend?.data;
    if (data === undefined) data = option?.series[0]?.data;
    singleSelect.setOption({
        data: [...data],
        color: [...option.color],
        itemStyle: option.legend.upgrade.itemStyle,
        onclick: (clickItem) => {
            chartsIns.getEchartsInstance().dispatchAction({
                type: LEGEND_TOGGLE_SELECT,
                name: clickItem.name,
            });
        },
        onLegendClick: (clickItem) => {
            chartsIns.getEchartsInstance().dispatchAction({
                type: LEGEND_TOGGLE_SELECT,
                name: clickItem.name,
            });
        },
    });
}
export default expandLegend;
