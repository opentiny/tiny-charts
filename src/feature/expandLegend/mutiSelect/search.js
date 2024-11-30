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
import position from "./position";
import { svgTransform } from "../../../util/convert";
import debounce from "../../../util/debounce";
import { item as createItem } from "./item";

// 创建搜索框
function search(container) {
    const searchDom = document.createElement("div");
    searchDom.classList.add(CSS_CLASS.SEARCH);
    searchDom.addEventListener("wheel", (e) => {
        e.stopPropagation();
        e.preventDefault();
    });
    const searchIcon = document.createElement("img");
    searchIcon.src = svgTransform(SVG_ICON.SEARCH);
    searchIcon.classList.add(CSS_CLASS.SEARCH_ICON);
    const searchInput = document.createElement("input");
    searchInput.name = "searchDom";
    searchInput.placeholder = "请输入关键词";
    searchInput.addEventListener("wheel", function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    // 搜索时防抖
    searchInput.addEventListener(
        "input",
        debounce(() => {
            container.classList.remove(CSS_CLASS.CONTAINER_EMPTY);
            container.innerHTML = "";
            let isEmpty = true;
            let colorLength = this.color.length;
            this.data.forEach((item, index) => {
                if (item.name.toString().includes(searchInput.value)) {
                    let color = this.color[index % colorLength];
                    if(item.display&&item.display!=='none'){
                        container.appendChild(createItem(item, index, color,this.itemStyle));
                    }else if(item.display===undefined){
                        container.appendChild(createItem(item, index, color,this.itemStyle));
                    }
                    isEmpty = false;
                }
            });

            // 搜索结果为空时显示空内容
            if (isEmpty) {
                container.classList.add(CSS_CLASS.CONTAINER_EMPTY);
                const emptyIcon = document.createElement("img");
                emptyIcon.src = svgTransform(SVG_ICON.EMPTY);
                emptyIcon.style.opacity = "0.2";
                const emptyText = document.createElement("div");
                emptyText.innerText = "无数据";
                emptyText.classList.add(CSS_CLASS.CONTAINER_EMPTY_TEXT);
                container.append(emptyIcon, emptyText);
            }
            let mutiselectDom = container.querySelector(`.${CSS_CLASS.MUTISELECT}`);
            
            // 搜索后重新计算下位置
            if (mutiselectDom) position.call(this, mutiselectDom);
        })
    );
    searchInput.classList.add(CSS_CLASS.SEARCH_INPUT);
    searchDom.append(searchIcon, searchInput);
    return searchDom;
}

export default search;
