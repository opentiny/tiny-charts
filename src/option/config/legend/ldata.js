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
/**
 * 从数据中拿出legend-data
 */
function ldata(data, xAxisKey) {
    let legendData = [];
    if (data.length > 0) {
        data.forEach(temp => {
            for (const key in temp) {
                if (key !== xAxisKey) {
                    legendData.push(key);
                }
            }
        });
    }
    // 去重
    legendData = legendData.filter((item, index) => legendData.indexOf(item) === index);
    return legendData;
}

export default ldata;
