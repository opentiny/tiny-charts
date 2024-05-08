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
export default function  RadarChart (aliasToken) {
  const {
    colorBorder,
    borderWidthLG,
    symbolSizeLG,
    symbolSize,
    lineWidth,
    lineWidthNone,
    colorBgTransparent,
    symbolBorderWidth,
    symbolBorderWidthSM,
  } = aliasToken;

  return  {
    symbolBorderWidth,
    symbolBorderWidthSM,
    symbolSizeLG,
    areaStyleColor:colorBgTransparent,
    symbolSize,
    border:borderWidthLG,
    lineWidth,
    lineWidthNone,
    borderColor:colorBorder,
  };
};

