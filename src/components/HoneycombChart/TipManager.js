/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
export default class TipManager {
    constructor(theme, tipHtml) {
        this.theme = theme;
        this.isShow = false;
        this.tipHtml = tipHtml;
        this.tooltipDom = null;
        this.setTipTimeOut = null;
    }

    init(tipContainer) {
        this.tooltipDom = document.createElement('div');
        this.tooltipDom.classList.add('hc-tooltip');
        if (this.theme === 'dark') {
            this.tooltipDom.classList.add('dark');
        }
        this.tooltipDom.addEventListener('mouseenter', (e) => {
            if (this.setTipTimeOut) { clearTimeout(this.setTipTimeOut); }
        });
        this.tooltipDom.addEventListener('mouseleave', (e) => {
            this.close(e);
        });
        tipContainer.appendChild(this.tooltipDom);
    }

    show(event, node, tipContainer, chartContainer) {
        // 唯一到别的上面去要马上刷新
        if (this.setTipTimeOut) { clearTimeout(this.setTipTimeOut); }
        this.isShow = true;
        this.tooltipDom.innerHTML = '';
        this.tipHtml(this.tooltipDom, node);
        this.tooltipDom.style.display = 'block';
        this.setPosition(event, tipContainer, chartContainer);
    }

    close(event) {
        this.setTipTimeOut = setTimeout(() => {
            this.isShow = false;
            this.tooltipDom.style.display = 'none';
        }, 200);
    }

    setPosition(event, tipContainer, chartContainer) {
        let tipRect = this.tooltipDom.getBoundingClientRect();
        let targetRect = event.target.getBoundingClientRect();
        let tipContainerRect = tipContainer.getBoundingClientRect();
        let chartContainerRect = chartContainer.getBoundingClientRect();
        let tipTop = targetRect.top - tipContainerRect.top - tipRect.height;
        let tipLeft = targetRect.left - tipContainerRect.left + targetRect.width;
        // 如果弹窗右侧超出容器，则向左进行位置修正
        let reviseH = (tipContainerRect.left - chartContainerRect.left) + tipLeft + tipRect.width - chartContainerRect.width;
        // 此处-5是为了能够给阴影留下一些显示位置
        if (reviseH > 0) {
            tipLeft = tipLeft - reviseH - 5;
        }
        // 如果弹窗顶部超出容器，则向下进行位置修正
        let reviseV = tipTop + (tipContainerRect.top - chartContainerRect.top);
        // 此处+5是为了能够给阴影留下一些显示位置
        if (reviseV < 0) {
            tipTop = tipTop - reviseV + 5;
        }
        this.tooltipDom.style.top = tipTop + 'px';
        this.tooltipDom.style.left = tipLeft + 'px';
    }
}