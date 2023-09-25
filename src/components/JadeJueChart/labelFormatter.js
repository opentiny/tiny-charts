/**
 * 此函数两部分作用：（1）根据data和max,将数据分为四种数据类型，分类处理angleAxis的sum和max值
 * （2）根据用户传入的formatter，配置极坐标系文本
 * @param {*} iChartOption 
 * @param {*} baseOpt 
 */
const handleLabelFormatter = (iChartOption, baseOpt) => {
    const { max, data, fill = false } = iChartOption;
    const { angleAxis } = baseOpt;
    // 有标定值
    if (max) {
        // 第一种数据类型
        angleAxis.sum = max;
        angleAxis.max = max * 4 / 3;
        // 第二种数据类型
        setChildMax(data, max);
        if (fill) {
            angleAxis.max = max;
        }
    }
    // 无标定值
    else {
        // 第一种数据类型
        setNoChildDefaultMax(data, angleAxis, fill);
        // 第二种数据类型
        setChildDefaultMax(data, angleAxis, fill);
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
    angleAxis.axisLabel.formatter = formatter;
}

// 处理第二种数据且有标定值的sum和max
const setChildMax = (data, max) => {
    data.forEach(dataItem => {
        if (dataItem.children) {
            dataItem.children.forEach(child => {
                child.max = max;
            });
        } else {
            dataItem.max = max;
        }
    });
}

// 处理第一种数据且无标定值的sum和max
const setNoChildDefaultMax = (data, angleAxis, fill) => {
    data.forEach(dataItem => {
        // data中的value是数值类型，处理数据
        if (!dataItem.children) {
            let sum = 0;
            data.forEach(item => {
                sum += item.value;
            });
            // 当数据全为0时，手动设置sum和max使其不为0，避免视图丢失
            if (sum === 0) {
                sum = 1;
            }
            angleAxis.sum = sum;
            angleAxis.max = (sum * 4) / 3;
            if (fill) {
                angleAxis.max = sum;
            }
        }
    });
}

// 处理第二种数据且无标定值的sum和max
const setChildDefaultMax = (data, angleAxis, fill) => {
    data.forEach(dataItem => {
        if (dataItem.children) {
            let sum = 0;
            data.forEach(item => {
                item.children.forEach(item_ => {
                    sum += item_.value;
                });
            });
            // 当数据全为0时，手动设置sum和max使其不为0，避免视图丢失
            if (sum === 0) {
                sum = 1;
            }
            angleAxis.sum = sum;
            angleAxis.max = (sum * 4) / 3;
            if (fill) {
                angleAxis.max = sum;
            }
        }
    });
}

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
}

export { handleLabelFormatter }