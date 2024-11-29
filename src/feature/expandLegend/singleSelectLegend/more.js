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
import SingleSelect from "../singleSelect";
// import item from "./item";
// import group from "./group";
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
    let dropdown = new SingleSelect(more);
    dropdown.setOption({
        data: this.data,
        color: this.color,
        itemStyle:this.itemStyle,
        // 点击触发的事件
        onclick: (data) => {
            this.onclick(data);
        },
    });
    return more;
}

export default more;