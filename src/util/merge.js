/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { isObject, isArray } from '../util/type';

// 将 task 中所有属性合并到 target
function merge(target, task) {
    if (!target) {
        target = task;
        return target;
    }
    if (isObject(task)) {
        for (const key in task) {
            if (target[key] === undefined || target[key] === null) {
                target[key] = task[key];
            } else if (isObject(task[key]) && !isArray(task[key])) {
                merge(target[key], task[key]);
            } else {
                target[key] = task[key];
            }
        }
    }
    return target;
}

// 覆盖Series
function mergeSeries(iChartOption, baseOption) {
    const userSeries = iChartOption.series;
    const baseSeries = baseOption.series;
    userSeries && userSeries.forEach(uitem => {
        let isNewSeries = true;
        baseSeries.forEach(bitem => {
            if (bitem.name === uitem.name) {
                isNewSeries = false;
                merge(bitem, uitem);
            }
        });
        if (isNewSeries) {
            baseSeries.push(uitem);
        }
    });
}

// 覆盖VisualMap，采用直接替换的形式
function mergeVisualMap(iChartOption, baseOption) {
    let userVisualMap = iChartOption.visualMap;
    if (userVisualMap) {
        baseOption.visualMap = userVisualMap;
    }
}

// extend属性，采用直接替换的形式
function mergeExtend(iChartOption, baseOption) {
    if (!iChartOption) return;
    let extend = iChartOption.extend;
    if (!extend) return;
    for (const key in extend) {
        if (Object.hasOwnProperty.call(extend, key)) {
            baseOption[key] = extend[key];
        }
    }
}

export {
    mergeSeries,
    mergeExtend,
    mergeVisualMap
}

export default merge;
