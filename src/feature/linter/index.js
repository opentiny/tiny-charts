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
import getUiRule from '../linter/lints/charts/index';
import Dialog from './dialog/index';
import getCommonRule from '../linter/lints/modules/index';
import { isArray } from '../../util/type';
import { transColor } from '../../util/color';

function chartLinter(name, eChartOption, dom, action, displayMode) {
    const standardOption = getUiRule(name, eChartOption);
    let differences = getObjectDifferences(standardOption, eChartOption, action === 'fix');
    if (!differences.length) {
        differences = ['无不符合规范项！'];
    }
    // 有对话框元素先移除
    const existingDialog = dom.querySelector('.linter-dialog');
    if (existingDialog) {
        dom.removeChild(existingDialog);
    }

    // 根据action和displayMode决定如何展示结果
    if (action === 'check' && !displayMode || displayMode === 'dialog') {
        new Dialog(dom, differences);
    } else if (displayMode === 'console') {
        console.warn(differences);
    }
}

function getObjectDifferences(seriesOpt, echartsOpt, isfix) {
    const differences = [];
    // 遍历检查项echartsOption的属性
    Object.keys(echartsOpt).sort().forEach(key => {
        // 对color属性特殊处理
        if (key === 'color') {
            let standardColor = getCommonRule(echartsOpt[key], 'color');
            if (!isArray(echartsOpt.color)) {
                differences.push(`主题颜色与规范不匹配`);
                if (isfix) {
                    echartsOpt.color = standardColor;
                }
                return false
            } else {
                // 如果数组不对则报不匹配
                if (JSON.stringify(standardColor) !== JSON.stringify(echartsOpt.color)) {
                    differences.push(`主题颜色与规范不匹配`);
                    if (isfix) {
                        echartsOpt.color = standardColor;
                    }
                    return false
                }
            }
        }
        else {
            // 对key为非color进行比对
            if (!isArray(echartsOpt[key])) {
                key === 'series' ? compare(seriesOpt.series, echartsOpt[key], key) : compare(getCommonRule(echartsOpt[key], key), echartsOpt[key], key);
            } else {
                let isOne = echartsOpt[key].length === 1;
                echartsOpt[key].forEach((item, num) => {
                    let order = isOne ? '' : num
                    key === 'series' ? compare(seriesOpt.series, item, key + order) : compare(getCommonRule(item, key), item, key + order);
                })
            }
        }

    })


    function compare(obj1, obj2, path = '') {
        if (obj1) {
            Object.keys(obj1).forEach(key => {
                const p = path ? `${path}.${key}` : key;
                // 如果规范里面没值跳过
                if (obj1[key] === undefined || obj1[key] === null) {
                    return false
                }
                // 对ecahrtOpt没有对应值的，提示无此属性
                else if (obj2[key] === undefined || obj2[key] === null) {
                    differences.push(`${p} 在eChartOption无此属性`);
                    if (isfix) {
                        obj2[key] = obj1[key]
                    }
                    return false
                }
                else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                    // padding进行特殊比对
                    if (key === 'padding' && isArray(obj1[key]) && isArray(obj2[key])) {
                        if (!(JSON.stringify(obj1[key]) === JSON.stringify(obj2[key]))) {
                            differences.push(`${p}` + '值跟规范不同');
                            if (isfix) {
                                obj2[key] = obj1[key]
                            }
                        }
                    } else {
                        compare(obj1[key], obj2[key], p);
                    }
                }
                else if (key === 'color' && typeof obj1[key] === 'string' && typeof obj2[key] === 'string') {
                    // 将color都转为6位16进制大写，在进行比较
                    if (transColor(obj1[key]).toUpperCase() !== transColor(obj2[key]).toUpperCase()) {
                        differences.push(`${p}` + '值跟规范不同');
                        if (isfix) {
                            obj2[key] = obj1[key]
                        }
                    }
                }
                // 值不相等的提示跟规范不同
                else if (obj1[key] !== obj2[key]) {
                    differences.push(`${p}` + '值跟规范不同');
                    if (isfix) {
                        obj2[key] = obj1[key]
                    }
                }
            });
        }
    }
    return differences;
}



export default chartLinter;