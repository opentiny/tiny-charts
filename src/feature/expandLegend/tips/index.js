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
import { svgTransform } from "../../../util/convert";
import { CSS_CLASS, SVG_ICON } from "./constants";

const DEFAULTOPTION = {
    data: `默认文本`,
    onclick: () => {},
};

// 隐藏tips的延时
const HIDE_DURATION = 200;

// 销毁tips的延时
const DESTROY_DELAY = 300;

class Tips {
    static huicharts_tips = false;

    constructor(element) {
        this.data = null;
        this.option = null;
        this.root = element;
        this.timer = null;
        this.tips = null;
        if (!Tips.huicharts_tips) {
            Tips.huicharts_tips = true;
            document.addEventListener("wheel", Tips.destoryImmediately);
        }
    }

    setOption(option) {
        this.option = option || DEFAULTOPTION;
        this.create();
    }

    create() {
        this.data = this.option.data;
        this.root.addEventListener("mouseenter", (e) => {
            this.clearTimer();
            document.querySelectorAll(`.${CSS_CLASS.TIPS}.${CSS_CLASS.TIPS_ACTIVE}`).forEach((item) => {
                if (item !== this.tips) {
                    document.body.contains(item) && document.body.removeChild(item);
                    item = null;
                }
            });
            let tipsExist = !document.body.contains(this.tips);
            if (tipsExist) {
                this.tips = this.createTips();
                this.tips.addEventListener("mouseenter", (e) => {
                    this.clearTimer();
                });
                this.tips.addEventListener("mouseleave", (e) => {
                    this.clearAndSetTimer();
                });
                this.setPosition(this.tips);
            }
        });
        this.root.addEventListener("mouseleave", (e) => {
            this.clearAndSetTimer();
        });
    }

    createTips() {
        let tips = document.createElement("div");
        tips.innerHTML = this.data;
        tips.classList.add(CSS_CLASS.TIPS, CSS_CLASS.TIPS_ACTIVE);
        const arrow = document.createElement("img");
        arrow.src = svgTransform(SVG_ICON.INDICATOR_TRIANGLE);
        arrow.classList.add(CSS_CLASS.TIPS_ARROW);
        tips.append(arrow);
        tips.dataset.id = this.root.id;
        document.body.appendChild(tips);
        return tips;
    }

    setPosition(element) {

        // 父元素的位置
        const distance = this.root.getBoundingClientRect();
        const arrow = element.firstElementChild;

        // tips下方小三角的宽度
        const ARROW_WIDTH = 18;

        // tips下方小三角距离tips合适的高度
        const ARROW_MARGIN_TOP = 3;

        // tips下方小三角距离tips合适的高度
        const ARROW_REVERSE = -7;
        let deltaX = 0;
        let deltaY = 30;
        let arrowLeftPosition;
        let arrowTopPosition;
        let arrowTransform = "";
        deltaX = (element.clientWidth - distance.width) / 2;
        arrowTopPosition = element.clientHeight - ARROW_MARGIN_TOP;
        arrowLeftPosition = (element.clientWidth - ARROW_WIDTH) / 2;
        let topPosition = distance.top - distance.height - deltaY;
        let leftPosition = distance.left + distance.width - element.clientWidth + deltaX;

        if (leftPosition <= 0) {
            leftPosition = distance.left;
        }
        if (topPosition + element.clientHeight > window.innerHeight) {
            topPosition = distance.top - element.clientHeight;
        }

        // 如果tips在文字上方展示不了，就在文字下面展示
        if (topPosition < 0) {
            topPosition = distance.bottom;
            arrowTopPosition = ARROW_REVERSE;
            arrowTransform = "rotate(180deg)";
            arrowLeftPosition = (element.clientWidth - ARROW_WIDTH) / 2;
        }
        element.style.left = leftPosition + "px";
        element.style.top = topPosition + "px";
        arrow.style.left = arrowLeftPosition + "px";
        arrow.style.top = arrowTopPosition + "px";
        arrow.style.transform = arrowTransform;
    }

    clearTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    clearAndSetTimer() {
        this.clearTimer();
        this.timer = setTimeout(() => {
            if (this.tips) {
                this.tips.classList.remove(CSS_CLASS.TIPS_ACTIVE);
                this.tips.classList.add(CSS_CLASS.TIPS_HIDDEN);
                this.timer = null;
                setTimeout(() => {
                    if (this.tips && document.body.contains(this.tips)) {
                        document.body.removeChild(this.tips);
                        this.tips = null;
                    }
                }, DESTROY_DELAY);
            }
        }, HIDE_DURATION);
    }

    getData() {
        return this.data;
    }

    // 用于隐藏所有的tips
    static destoryImmediately() {
        document.querySelectorAll(`.${CSS_CLASS.TIPS}.${CSS_CLASS.TIPS_ACTIVE}`).forEach((item) => {
            document.body.contains(item) && document.body.removeChild(item);
            item = null;
        });
    }
}
export default Tips;
