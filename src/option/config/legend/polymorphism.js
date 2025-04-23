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

function setPolymorphism(legend) {
  const rich = legend?.textStyle?.rich || {};
  for (const key in rich) {
    const element = rich[key];
    switch (key) {
      case 'title':
        element.color = element.color ||Token.config.legendTextNameColor;
        break;
      case 'value1':
        element.color = element.color || Token.config.legendTextValueColor;
        break;
      case 'split':
        element.color = element.color || Token.config.legendTextSplitColor;
        break;
      case 'value2':
        element.color = element.color || Token.config.legendTextValueColor;
        break;
      default:
        break;
    }
  }
}

export default setPolymorphism;
