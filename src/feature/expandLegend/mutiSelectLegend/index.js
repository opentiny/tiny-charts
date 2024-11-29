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
import paging from "./paging";
import group from "./group";
import more from "./more";
import scroll from "./scroll";
import throttle from "../../../util/throttle";
const DEFAULT_OPTION = {
    data: [],
    onclick: () => {},
};
const THROTTLE_INTERVAL = 500;
class MutiSelectLegend {
    constructor(element) {

        // 根节点
        this.root = element;

        // 所有的图例
        this.item = [];

        // 当前主题下的配色
        this.color = [];

        // 所有图例的分组情况
        this.group = [];

        // 当前所在页码，从0开始
        this.current = 0;

        // 当前的数据
        this.data = [];

        // 图例的点击事件
        this.onclick = () => {};
    }

    setOption(option) {
        option = option || DEFAULT_OPTION;
        this.onclick = option.onclick;
        this.itemStyle = option.itemStyle;
        this.color = option.color;
        this.onLegendClick = option.onLegendClick;
        this.initData(option.data);
        this.setResizeObserver();
    }

    // 组装数据
    initData(data) {
        this.data = [];
        if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                this.data.push({
                    name: data[i]["name"] === undefined ? data[i] : data[i]["name"],
                    value: data[i]["value"] === undefined ? data[i] : data[i]["value"],
                    selected: data[i]["selected"] === undefined ? true : data[i]["selected"],
                    show: data[i]["show"] === undefined ? true : data[i]["show"],
                    color: this.color.length === 0 ? "#000" : this.color[i % this.color.length],
                });
            }
        }
    }

    // 创建整个图例滚动框
    create() {
        const scrollDom = scroll.call(this);
        const pagingDom = paging.call(this);
        const moreDom = more.call(this);
        this.root.append(scrollDom, pagingDom, moreDom);
        group.call(this);
    }

    getData() {
        return this.data;
    }

    // 响应式监听
    setResizeObserver() {
        this.resizeObserver = new ResizeObserver(() => {
            throttle(THROTTLE_INTERVAL, () => {
                this.root.innerHTML = "";
                this.create();
            })();
        });
        this.resizeObserver.observe(this.root);
    }
}
export default MutiSelectLegend;
