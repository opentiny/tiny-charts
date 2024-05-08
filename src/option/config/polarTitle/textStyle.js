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
function textStyle(titleOption, pieMain) {
  if (pieMain?.textSize) {
    titleOption.textStyle.fontSize = pieMain.textSize;
    titleOption.textStyle.color = pieMain.color || titleOption.textStyle.color;
    titleOption.textStyle.fontWeight = pieMain.fontWeight || 'normal';
    titleOption.textStyle.lineHeight = Number(pieMain.textSize);
  }
  Object.assign(titleOption.textStyle, pieMain);
}

export default textStyle;
