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
import Tips from "../tips";
import { CSS_CLASS,SVG_ICON } from "./constants";
import { uuid } from "../../../util/math";
import throttle from "../../../util/throttle";
import { getTextWidth } from "../../../util/dom";
import statisticsList from "./statisticList";
import { svgTransform } from "../../../util/convert";

// 节流间隔
const THROTTLE_INTERVAL = 500;

// tips文字大小
const TEXT_SIZE = 14;

const DEFAULT_OPTION = {
    data: [],
    onclick: () => {},
    style: {
        sign: "circle",
    },
};
class MutiSelectList {
    constructor(root) {

        // 根元素
        this.root = root;

        // 数据
        this.data = null;
    }

    setOption(option) {
        option = option || DEFAULT_OPTION;

        // 主题颜色
        this.color = option.color;

        // 整个图例占父元素的高度
        this.height = option.height;

        // 图例的点击事件
        this.onclick = option.onclick

        // 图例的一些样式
        this.itemStyle = option.itemStyle;

        this.statistics = option.statistics
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
                    color: this.color.length === 0 ? "#000" : this.color[i % this.color.length],
                });
            }
        }
    }

    // 创建列表
    create(onclick) {
        let list = document.createElement("div");
        list.classList.add(CSS_CLASS.LIST);
        list.style.height = this.height;
        if(this.statistics){
            list.style.display = "flex"
            list.style.alignItems="center"
            list.append(statisticsList.call(this))
        }
        else{
            let maxWidth = this.root.getBoundingClientRect().width
            this.data.forEach((data, index) => {
                let item = document.createElement("div");
                item.id = `${CSS_CLASS.ITEM}_${uuid()}`;
                item.classList.add(CSS_CLASS.ITEM);
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
                // 是否要展示tips
                if (this?.itemStyle?.showTips) {
                    if (getTextWidth(data.name, TEXT_SIZE) > maxWidth) {
                        let tips = new Tips(item);
                        tips.setOption({
                            data: data.name,
                            onclick: () => {},
                        });
                    }
                }
                item.append(icon, text, copy);
    
                // 每个图例的点击事件
                item.addEventListener("click", (e) => {
                    e.stopPropagation();
                    icon.classList.toggle(CSS_CLASS.ICON_UNACTIVE);
                    text.classList.toggle(CSS_CLASS.ITEM_UNACTIVE);
                    onclick && onclick(this.data[index]);
                });
                list.append(item);
            });
        }
       
        // 列表滚动时立刻销毁所有tips
        list.addEventListener("scroll", (e) => {
            e.stopPropagation();
            Tips.destoryImmediately();
        });
        this.root.append(list);
    }

    // 响应式监听
    setResizeObserver() {
        this.resizeObserver = new ResizeObserver(() => {
            throttle(THROTTLE_INTERVAL, () => {
                this.root.innerHTML = "";
                this.create(this.onclick);
            })();
        });
        this.resizeObserver.observe(this.root);
    }
}

export default MutiSelectList;
