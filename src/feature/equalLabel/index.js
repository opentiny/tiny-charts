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
import { isNumber } from '../../util/type';

// 累加数据的每一项
function accumulateArray(arr) {
    return arr.reduce((acc, current, index) => {
        if (index === 0) {
            acc.push(current);
        } else {
            acc.push(acc[index - 1] + current);
        }
      return acc;
    }, []);
}

// 计算平均值
function divideIntoIntegers(number, parts) {
    if (parts <= 1 || number <= 0) {
      throw new Error('Invalid input');
    }
    let quotient = Math.floor(number / parts);
    let remainder = number % parts;
    let result = [];
    for (let i = 0; i < parts - 1; i++) {
      result.push(quotient);
      if (remainder > 0) {
        result[i]++;
        remainder--;
      }
    }
    result.push(quotient);
    return accumulateArray(result);
}

function equalLabel(iChartOption, xAxisItem, xAxisUnit) {
    let sharing = xAxisItem.sharing;
    if(isNumber(sharing)) {
        let dataLength = iChartOption.data.length;
        let sharingArr = divideIntoIntegers(dataLength -1,sharing);
        xAxisUnit.axisLabel.interval = (index) => {
            if(sharingArr.includes(index) || index === 0 ) {
                return true;
            } else {
                return false;
            }
        }
    }
    if(sharing === 'auto') {
        xAxisUnit.axisLabel.showMaxLabel = true;
    }
}

export default equalLabel;