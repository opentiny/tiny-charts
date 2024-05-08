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
function axisMargin(xAxisUnit, xAxisItem, iChartOption) {  
    if (xAxisItem && xAxisItem.axisMargin) {
        let axisMargin = xAxisItem.axisMargin;
        let min = axisMargin.left;
        let max = axisMargin.right;
        if (min) {
            xAxisUnit.min = function (value) {
                return value.min - min;
            }
        }
        if (max) {
            xAxisUnit.max = function (value) {
                return value.max + max;
            }
        }
    }
}

export default axisMargin;

