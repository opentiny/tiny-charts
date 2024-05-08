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
function subtextStyle(titleOption, pieSub) {
  if (pieSub?.textSize) {
    titleOption.subtextStyle.fontSize = pieSub.textSize;
    titleOption.subtextStyle.color = pieSub.color || titleOption.subtextStyle.color;
    titleOption.subtextStyle.fontWeight = pieSub.fontWeight || 'normal';
    titleOption.subtextStyle.lineHeight = pieSub.textSize * 1.2;
  }
}

export default subtextStyle;
