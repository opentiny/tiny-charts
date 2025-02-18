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
import { CHARTTYPE } from './BaseOption';

// 处理第一种数据且无标定值的sum和max
const setNoChildDefaultMax = (data) => {
    let sum = 0;
    data.forEach(item => {
        sum += (item.value ?? 0);
    });
    return sum;
};

// 处理第二种数据且无标定值的sum和max
const setChildDefaultMax = (data) => {
    let sum = 0;
    data.forEach(item => {
        if (item.children && item.children.length) {
            item.children.forEach(({ value }) => {
                sum += (value ?? 0);
            });
        }
    });
    return sum;
};

// 配置玉闋图外围坐标系百分比展示文本
const setAxisLabel = (sum, iChartOption, baseOpt) => {
    if (iChartOption.max) {
        baseOpt.angleAxis.sum = iChartOption.max;
        const formatter = params => {
            if (params === iChartOption.max) {
                return '100%';
            }
            if ((params / iChartOption.max) * 100 > 100) {
                return '';
            }
            const x = Math.ceil((params / iChartOption.max) * 100);
            return `${Math.ceil(x / 10) * 10}%`;
        };
        return formatter;
    } else {
        const formatter = params => {
            if (params === sum) {
                return '100%';
            }
            if ((params / sum) * 100 > 100) {
                return '';
            }
            const x = Math.ceil((params / sum) * 100);
            return `${Math.ceil(x / 10) * 10}%`;
        };
        return formatter;
    }
};

/**
 * 此函数两部分作用：（1）根据data和max,将数据分为四种数据类型，分类处理angleAxis的sum和max值
 * （2）根据用户传入的formatter，配置极坐标系文本
 * @param {*} iChartOption
 * @param {*} baseOpt
 */
const handleLabelFormatter = (iChartOption, baseOpt, chartType) => {
    let { max, data, fill = false } = iChartOption;
    const { angleAxis } = baseOpt;
    if (chartType === CHARTTYPE.PROCESS) {
        fill = true;
    }
    // 有标定值
    if (max) {
        angleAxis.sum = max;
    }
    // 无标定值
    else {
        let sum;
        if (chartType === CHARTTYPE.PROCESS) {
            sum = 100;
        } else if (chartType === CHARTTYPE.BASE) {
            // 第一种数据类型
            sum = setNoChildDefaultMax(data);
        } else {
            // 第二种数据类型
            sum = setChildDefaultMax(data);
        }
        // 当数据全为0时，手动设置sum和max使其不为0，避免视图丢失
        if (sum === 0) {
            sum = 1;
        }
        angleAxis.sum = sum;
    }
    angleAxis.max = angleAxis.sum * 4 / 3;
    if (fill) {
        angleAxis.max = angleAxis.sum;
    }

    /**
     * 处理显示文本:根据用户传入的formatter，配置极坐标系文本
     * 传入"percent"或者未传，展示百分比
     * 传入"number",展示纯数值
     * 传入函数，用户自定义展示内容
     */
    let formatter = angleAxis.axisLabel.formatter;
    switch (formatter) {
        case 'percent':
            formatter = setAxisLabel(angleAxis.sum, iChartOption, baseOpt);
            break;
        case 'number':
            formatter = undefined;
            break;
        case undefined:
            formatter = setAxisLabel(angleAxis.sum, iChartOption, baseOpt);
            break;
    }
    if (chartType === CHARTTYPE.PROCESS) {
        angleAxis.axisLabel.show = false;
        angleAxis.axisTick.show = false;
        return;
    }
    angleAxis.axisLabel.formatter = formatter;
};

export { handleLabelFormatter };