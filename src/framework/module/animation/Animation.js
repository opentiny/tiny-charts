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
import Animate from "./Animate";
export default class Animation {
    end = false; //是否结束
    animate; //动画模块

    constructor(element, options) {
        this.end = false;
        options.onUpdate = options.onUpdate || this.onUpdate;
        this.animate = new Animate(options, element)
    }

    // 开始任务
    start() {
        this.animate?.start();
        this.step();
    }

    // 结束任务
    stop() {
        this.animate?.stop();
    }

    // 循环
    step(time) {
        !this.end && requestAnimationFrame((timestamp) => {
            this.step(timestamp);
        });
        !this.end && this.update(time, false)
    }

    // 调用动画模块更新
    update(time, preserve) {
        if (time === void 0) {
            time = performance.now();
        }
        if (preserve === void 0) {
            preserve = true;
        }
        this.end = !this.animate?.update(time);
    }

    // 默认更新节点方法
    onUpdate(params, value, element) {
        if (element) {
            const s = element.style;
            s.position = 'absolute';
            let matchUnit = {
                'font-size': 'px',
                'line-height': 'px',
                'rotate': 'deg',
                'width': 'px',
                'height': 'px',
                'left': 'px',
                'top': 'px',
                'bottom': 'px',
                'right': 'px',
            };
            for (const key in params) {
                if (Object.hasOwnProperty.call(params, key)) {
                    s[key] = matchUnit[key] ? params[key] + matchUnit[key] : params[key];
                }
            }
        }
    }
}