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
import { CSS_CLASS, SVG_ICON, CLOUD_SVG_ICON } from "./constants";
import { svgTransform } from "../../../util/convert";
import Token from "../../token";

// 创建分页
function createPaging() {

    // 默认初始位置
    this.current = 0;
    const isCloud = this.theme?.includes('cloud');
    let iconColor = Token.config.legendPageIconColor;
    let iconInactiveColor = Token.config.legendPageIconInactiveColor;
    // 创建paing
    const paging = document.createElement("div");
    paging.classList.add(CSS_CLASS.PAGING);

    // paing中间的文字
    const pagingText = document.createElement("span");
    pagingText.classList.add(CSS_CLASS.PAGING_TEXT);
    pagingText.innerText = `1/2`;

    // paging左右按钮的盒子
    const pagingLeft = document.createElement("div");
    const pagingRight = document.createElement("div");
    pagingLeft.classList.add(CSS_CLASS.PAGING_LEFT);
    pagingRight.classList.add(CSS_CLASS.PAGING_RIGHT);

    // paing的左右按钮
    const pagingLeftIcon = document.createElement("img");
    const pagingRightIcon = document.createElement("img");
    pagingLeftIcon.src = svgTransform(SVG_ICON.LEFT_ARROW);
    pagingRightIcon.src = svgTransform(SVG_ICON.RIGHT_ARROW);
    pagingLeftIcon.classList.add(CSS_CLASS.PAGING_ICON);
    pagingRightIcon.classList.add(CSS_CLASS.PAGING_ICON);
    pagingLeft.append(pagingLeftIcon);
    pagingRight.append(pagingRightIcon);
    if (isCloud) {
        pagingLeft.innerHTML = "";
        pagingLeft.innerHTML = CLOUD_SVG_ICON.LEFT_ARROW;
        pagingLeft.setAttribute('style', `--pagingIconColor: ${iconInactiveColor};`);
        pagingRight.innerHTML = "";
        pagingRight.innerHTML = CLOUD_SVG_ICON.RIGHT_ARROW;
        pagingRight.setAttribute('style', `--pagingIconColor: ${iconColor};`);
    }

    // paing左按钮点击事件
    pagingLeft.addEventListener("click", (e) => {
        let iconColor = Token.config.legendPageIconColor;
        let iconInactiveColor = Token.config.legendPageIconInactiveColor;
        e.stopPropagation();
        if (this.current >= 1) {
            this.current--;
            const isCloud = this.theme?.includes('cloud');
            // 展示当前分组页的图例
            this.group[this.current][this.group[this.current].length - 1].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "end",
            });
            pagingText.innerText = `${this.current + 1}/${this.group.length}`;

            // 左按钮是否置灰
            if (this.current === 0) {
                if (isCloud) {
                    pagingLeft.setAttribute('style', `--pagingIconColor: ${iconInactiveColor};`);
                } else {
                    pagingLeftIcon.src = svgTransform(SVG_ICON.LEFT_ARROW);
                    pagingLeftIcon.classList.remove(CSS_CLASS.PAGING_ICON_ROTATE);
                }
            }
            
            if (isCloud) {
                pagingRight.setAttribute('style', `--pagingIconColor: ${iconColor};`);
            } else {
                pagingRightIcon.src = svgTransform(SVG_ICON.RIGHT_ARROW);
                pagingRightIcon.classList.remove(CSS_CLASS.PAGING_ICON_ROTATE);
            }
        }
    });

    // paing右按钮点击事件
    pagingRight.addEventListener("click", (e) => {
        let iconColor = Token.config.legendPageIconColor;
        let iconInactiveColor = Token.config.legendPageIconInactiveColor;
        e.stopPropagation();
        if (this.current < this.group.length - 1) {
            this.current++;
            const isCloud = this.theme?.includes('cloud');
            // 展示当前分组页的图例
            this.group[this.current][this.group[this.current].length - 1].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "end",
            });
            pagingText.innerText = `${this.current + 1}/${this.group.length}`;

            // 右按钮是否置灰
            if (this.current + 1 === this.group.length) {
                if (isCloud) {
                    pagingRight.setAttribute('style', `--pagingIconColor: ${iconInactiveColor};`);
                }else{
                    pagingRightIcon.src = svgTransform(SVG_ICON.LEFT_ARROW);
                    pagingRightIcon.classList.add(CSS_CLASS.PAGING_ICON_ROTATE);
                }
            }
            
            if (isCloud) {
                pagingLeft.setAttribute('style', `--pagingIconColor: ${iconColor};`);
            } else {
                pagingLeftIcon.src = svgTransform(SVG_ICON.RIGHT_ARROW);
            }
            pagingLeftIcon.classList.add(CSS_CLASS.PAGING_ICON_ROTATE);
        }
    });

    // 插入paign的dom
    paging.append(pagingLeft, pagingText, pagingRight);
    this.paging = paging;
    this.pagingText = pagingText;
    this.pagingLeftIcon = pagingLeftIcon;
    this.pagingRightIcon = pagingRightIcon;
    this.pagingLeft = pagingLeft;
    this.pagingRight = pagingRight;
    return paging;
}

export default createPaging;