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
// base lifecycle
export default class Base {
    // chart render container
    dom;
    // chart render option
    option;

    constructor() {
        // You must override the 'init' method， this method's target is to set chart container.  
        if (this.init === undefined) {
            throw new Error('This chart has not override "init" callback!');
        }
        // You must override the 'setOption' method， this method's target is to set chart option.  
        if (this.setOption === undefined) {
            throw new Error('This chart has not override "setOption" callback!');
        }
        // You must override the 'render' method， this method's target is to render chart dom.  
        if (this.render === undefined) {
            throw new Error('This chart has not override "render" callback!');
        }
        // You must override the 'onRenderReady' method， this method's run after the render callback.  
        if (this.onRendered === undefined) {
            throw new Error('This chart has not override "onRendered" callback!');
        }
        // You must override the 'refresh' method， this method's target is to refresh the chart dom .
        if (this.refresh === undefined) {
            throw new Error('This chart has not override "refresh" callback!');
        }
        // You must override the 'refreshData' method， this method's target is to refresh the chart dom with new data.
        if (this.refreshData === undefined) {
            throw new Error('This chart has not override "refreshData" callback!');
        }
        // You must override the 'resize' method， this method's target is to adaptive chart container width.
        if (this.resize === undefined) {
            throw new Error('This chart has not override "resize" callback!');
        }
        // You must override the 'uninstall' method， this method's target is to empty the chart container, and uninstall all listening events.
        if (this.uninstall === undefined) {
            throw new Error('This chart has not override "uninstall" callback!');
        }
    }
}
