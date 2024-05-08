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
/**
 * 从数据中拿出y轴的坐标数据
 */
function ydata(data, legendData) {
    const seriesData = {};
    legendData.forEach(legend => {
        seriesData[legend] = [];
    });
    data.forEach(item => {
        legendData.forEach(legend => {
            seriesData[legend].push(item[legend]);
        });
    });
    return seriesData;
}

export default ydata;
