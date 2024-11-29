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
    data: [1, 2, 3, 4, 5],
    onclick: () => {},
};
const REMOVE_DELAY = 300;

class MutiSelect {
    static huicharts_mutiselect = false;

    constructor(element) {
        this.color = [];
        this.root = element;
        if (!MutiSelect.huicharts_mutiselect) {
            MutiSelect.huicharts_mutiselect = true;
            document.addEventListener("click", hide);
            document.addEventListener("wheel", hide);
            window.addEventListener("resize", hide);
        }
    }

    setOption(option) {
        option = option || DEFAULT_OPTION;
        let { data, onclick } = option;
        if(option.color)
        this.color = option.color;
        this.itemStyle = option?.itemStyle;
        // 包装一下data
        this.data=option.data
        // 给根元素绑定点击事件
        this.bindClick(onclick);
    }

    // 给根元素绑定点击事件
    bindClick(onclick) {
        this.root.addEventListener("click", (e) => {
            e.stopPropagation();
            let preMutiselect = document.querySelector(`.${CSS_CLASS.MUTISELECT}.${CSS_CLASS.MUTISELECT_ACTIVE}`);
            let preMutiselectId = null;
            if (preMutiselect !== null) {
                preMutiselectId = preMutiselect.dataset.id;
                preMutiselect.classList.remove(CSS_CLASS.MUTISELECT_ACTIVE);
                preMutiselect.classList.add(CSS_CLASS.MUTISELECT_HIDDEN);
                setTimeout(() => {
                    document.body.removeChild(preMutiselect);
                }, REMOVE_DELAY);
            }
            if (preMutiselectId !== this.root.id) {
                const mutiselect = this.mutiselect(onclick);
                document.body.appendChild(mutiselect);
                position.call(this, mutiselect);
            }
        });
    }

    // 创建下拉框dom
    mutiselect(onclick) {
        const mutiselectDom = document.createElement("div");
        mutiselectDom.classList.add(CSS_CLASS.MUTISELECT, CSS_CLASS.MUTISELECT_ACTIVE);
        const containerDom = this.container();
        const searchDom = search.call(this, containerDom);
        mutiselectDom.append(searchDom, containerDom);

        // 给每个选项绑定点击事件，并执行传入的回调事件
        mutiselectDom.addEventListener("click", (e) => {
            let target = e.target;
            while (target.className.includes(CSS_CLASS.MUTISELECT) && target.className !== CSS_CLASS.ITEM) {
                target = target.parentNode;
            }
            if (target.className === CSS_CLASS.ITEM) {
                target.firstChild.classList.toggle("active");
                target.firstChild.firstChild?.classList.toggle("active");
                this.data[target.dataset.id].selected = !this.data[target.dataset.id].selected;
                onclick && onclick(target.dataset.id);
            }
            e.stopPropagation();
        });

        // 鼠标在多选框中滚动时避免关闭下拉框
        mutiselectDom.addEventListener("wheel", (e) => {
            e.stopPropagation();
            if (containerDom.offsetHeight === containerDom.scrollHeight) {
                e.preventDefault();
            } else if (e.target === mutiselectDom) {
                e.preventDefault();
            }
        });
        return mutiselectDom;
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
                    selected: item["selected"] === undefined ? false : item["selected"],
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
            let color = this.color[index % colorLength];
            if(item.display&&item.display!=='none'){
                containerDom.appendChild(createItem.call(this,item, index, color,this.itemStyle));
            }else if(item.display===undefined){
                containerDom.appendChild(createItem.call(this,item, index, color,this.itemStyle));
            }
        });
        return containerDom;
    }

    getData() {
        return this.data;
    }
}

// 隐藏所有的mutiselect
function hide() {
    let item = document.querySelector(`.${CSS_CLASS.MUTISELECT}.${CSS_CLASS.MUTISELECT_ACTIVE}`);
    if (item) {
        item.classList.remove(CSS_CLASS.MUTISELECT_ACTIVE);
        item.classList.add(CSS_CLASS.MUTISELECT_HIDDEN);
        setTimeout(() => {
            document.body.removeChild(item);
        }, REMOVE_DELAY);
    }
}

export default MutiSelect;
