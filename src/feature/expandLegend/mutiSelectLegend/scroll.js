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
import item from "./item";
import { CSS_CLASS } from "./constants";

// 创建图例框
function scroll() {
    const scrollDom = document.createElement("div");
    scrollDom.classList.add(CSS_CLASS.SCROLL);
    this.item = [];
    
    // 根据数据循环创造图例
    this.data.forEach((element, index) => {
        if (element.selected) {
            let itemDom = item.call(this, element, index);
            this.item.push(itemDom);
            scrollDom.append(itemDom);
        }
    });
    this.scroll = scrollDom;
    return scrollDom;
}

export default scroll;
