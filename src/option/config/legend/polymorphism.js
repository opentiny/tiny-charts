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
import Token from '../../../feature/token';
import merge from '../../../util/merge';

function setPolymorphism(legend) {
  const baseRich = {
    title: {
        fontSize: Token.config.legendTextNameFontSize,
        padding: [0, 0, 0, 5],
        width: 80,
        align:'left',
        color: Token.config.legendTextNameColor 
    },
    value1: {
        fontSize: Token.config.textFontSize,
        width: 20,
        align:'right',
        fontWeight: 'bold',
        color: Token.config.legendTextValueColor
    },
    value2: {
        fontSize: Token.config.textFontSize,
        width: 20,
        align:'right',
        fontWeight: 'bold',
        color: Token.config.legendTextValueColor
    },
    split:{
        padding:[0, 8, 0, 8],
        align:'right',
        color: Token.config.legendTextSplitColor  
    },
    value: {
      fontSize: Token.config.textFontSize,
      width: 20,
      align:'right',
      fontWeight: 'bold',
      color: Token.config.legendTextValueColor
    }
  }
  
  let rich = legend?.textStyle?.rich || {};
  legend.textStyle.rich = merge(baseRich, rich);
}

export default setPolymorphism;
