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
import { CSS_CLASS } from "./constants";
import search from "./search";
import { item as createItem } from "./item";
import position from "./position";
const DEFAULT_OPTION = {
    data: [11, 22, 33, 44, 55],
    onclick: () => {},
};
const REMOVE_DELAY = 300;

class SingleSelect {
    static huicharts_SingleSelect = false;

    constructor(element) {
        this.root = element;

        // 主题颜色
        this.color = [];

        // 点击图例的回调
        this.onclick = () => {};

        // 图例的一些样式
        this.itemStyle;
        if (!SingleSelect.huicharts_SingleSelect) {
            SingleSelect.huicharts_SingleSelect = true;
            document.addEventListener("click", hide);
            document.addEventListener("wheel", hide);
            window.addEventListener("resize", hide);
        }
    }

    setOption(option) {
        option = option || DEFAULT_OPTION;
        let { data, onclick } = option;
        this.onclick = onclick;
        this.color = option?.color;
        this.itemStyle = option?.itemStyle;
        this.data = data

        // 给根元素绑定点击事件
        this.bindClick();
    }

    // 给根元素绑定点击事件
    bindClick() {
        this.root.addEventListener("click", (e) => {
            e.stopPropagation();

            // 是否有打开的单选框
            let preSingleSelect = document.querySelector(`.${CSS_CLASS.SINGLESELECT}.${CSS_CLASS.SINGLESELECT_ACTIVE}`);
            let preSingleSelectId = null;

            // 有打开的就说明此次是关闭或者打开别的单选框
            if (preSingleSelect !== null) {
                preSingleSelectId = preSingleSelect.dataset.id;

                // 先关闭单选框
                preSingleSelect.classList.remove(CSS_CLASS.SINGLESELECT_ACTIVE);
                preSingleSelect.classList.add(CSS_CLASS.SINGLESELECT_HIDDEN);
                setTimeout(() => {
                    document.body.removeChild(preSingleSelect);
                }, REMOVE_DELAY);
            }

            // 如果是打开别的单选框就创建新的
            if (preSingleSelectId !== this.root.id) {
                const singleselectDom = this.singleselect();
                document.body.appendChild(singleselectDom);
                position.call(this, singleselectDom);
            }
        });
    }

    // 创建下拉框dom
    singleselect() {
        const singleselectDom = document.createElement("div");
        singleselectDom.classList.add(CSS_CLASS.SINGLESELECT, CSS_CLASS.SINGLESELECT_ACTIVE);
        const containerDom = this.container();
        const searchDom = search.call(this, containerDom);
        singleselectDom.append(searchDom, containerDom);

        // 给每个选项绑定点击事件
        singleselectDom.addEventListener("click", (e) => {
            let target = e.target;
            while (target.className.includes(CSS_CLASS.SINGLESELECT) && target.className !== CSS_CLASS.ITEM) {
                target = target.parentNode;
            }
            if (target.className === CSS_CLASS.ITEM) {
                let targetData = this.data[target.dataset.id];
                target.firstChild.classList.toggle("active");
                target.lastChild.classList.toggle("active");
                targetData.selected = !targetData.selected;
                this.onclick && this.onclick(targetData);
            }
            e.stopPropagation();
        });
        singleselectDom.addEventListener("wheel", (e) => {
            e.stopPropagation();
            if (containerDom.offsetHeight === containerDom.scrollHeight) {
                e.preventDefault();
            } else if (e.target === singleselectDom) {
                e.preventDefault();
            }
        });
        return singleselectDom;
    }

    // 刷新数据
    refreshData(data) {
        this.initData(data);
    }

    // 组装数据
    initData(data) {
        this.data = [];
        if (Array.isArray(data)) {
            for (let item of data) {
                this.data.push({
                    name: item["name"] === undefined ? item : item["name"],
                    value: item["value"] === undefined ? item : item["value"],
                    selected: item["selected"] === undefined ? true : item["selected"],
                });
            }
        }
    }

    // 创建条目容器
    container() {
        const containerDom = document.createElement("div");
        containerDom.classList.add(CSS_CLASS.CONTAINER);
        let colorLength = this.color.length;
        this.data.forEach((item, index) => {
            if(item.display==="none")
                return
            let color = this.color[index % colorLength];
            containerDom.appendChild(createItem(item, index, color, this.itemStyle));
        });
        return containerDom;
    }

    getData() {
        return this.data;
    }
}

// 隐藏所有的SingleSelect
function hide(e) {
    let item = document.querySelector(`.${CSS_CLASS.SINGLESELECT}.${CSS_CLASS.SINGLESELECT_ACTIVE}`);
    if (item) {
        item.classList.remove(CSS_CLASS.SINGLESELECT_ACTIVE);
        item.classList.add(CSS_CLASS.SINGLESELECT_HIDDEN);
        setTimeout(() => {
            document.body.removeChild(item);
        }, REMOVE_DELAY);
    }
}

export default SingleSelect;
