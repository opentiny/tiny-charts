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

function setPolymorphism(legend, iChartOption) {
  const theme = iChartOption.theme;
  const baseRich = {
    title: {
      fontSize: Token.config.legendTextNameFontSize,
      padding: [0, 0, 0, 5],
      align:'left',
      color: Token.config.legendTextNameColor 
    },
    value1: {
      fontSize: Token.config.legendTextValueFontSize,
      align:'right',
      fontWeight: 'bold',
      color: Token.config.legendTextValueColor
    },
    value2: {
      fontSize: Token.config.legendTextValueFontSize,
      width: 'auto',
      align: 'right',
      fontWeight: 'bold',
      color: Token.config.legendTextValueColor
    },
    split:{
      fontSize: Token.config.legendTextValueFontSize,
      width: 10,
      padding: [0, 7, 0, 0],
      align:'right',
      color: Token.config.legendTextSplitColor  
    },
    value: {
      fontSize: Token.config.legendTextValueFontSize,
      align:'right',
      fontWeight: 'bold',
      color: Token.config.legendTextValueColor
    }
  }
  // 非自适应情况，默认宽度配置
  if (!iChartOption.adaptive || (!theme.includes('cloud') && iChartOption.adaptive)) {
    baseRich.title.width = 80;
    baseRich.value1.width = 20;
    baseRich.value.width = 20;
  }
  if (iChartOption.adaptive && theme.includes('cloud')) {
    baseRich.title.padding = [0, 16, 0, 5];
  }
  let rich = legend?.textStyle?.rich || {};
  legend.textStyle.rich = merge(baseRich, rich);
}

export default setPolymorphism;
