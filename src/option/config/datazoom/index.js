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
import base from './base';
import merge from '../../../util/merge';
import { toArray } from '../../../util/type';

function datazoom(iChartOption) {
  const self = iChartOption.dataZoom || {}
  const dataZoom = toArray(self).map((item, index) => {
    if (index === 0) {
      const { show, position, start, end, startValue, endValue, style, height, top, left, right, bottom } = item;
      const baseZoom = base()
      if (show) {
        end && (baseZoom.end = end);
        start && (baseZoom.start = start);
        if (startValue !== undefined) {
          delete baseZoom.start;
          baseZoom.startValue = startValue;
        }
        if (endValue !== undefined) {
          delete baseZoom.end;
          baseZoom.endValue = endValue;
        }
        height && (baseZoom.height = height);
        baseZoom.show = true;
        baseZoom.top = position?.top || top || 'auto';
        baseZoom.left = position?.left || left || 'auto';
        baseZoom.right = position?.right || right || 'auto';
        baseZoom.bottom = position?.bottom || bottom || 'auto';
        // 用户自定义样式
        if (style) {
          const { backgroundColor, unSelectDataColor, selectDataColor, middleFillerColor, handleStyle } = style
          if (backgroundColor) baseZoom.backgroundColor = backgroundColor
          if (unSelectDataColor) baseZoom.dataBackground.areaStyle.color = unSelectDataColor
          if (selectDataColor) baseZoom.selectedDataBackground.areaStyle.color = selectDataColor
          if (middleFillerColor) baseZoom.fillerColor = middleFillerColor
          if (handleStyle) Object.assign(baseZoom.handleStyle, handleStyle);
        }
        merge(baseZoom, item);
        // 删除dataZoom封装的position属性
        if (position) {
          delete baseZoom.position
        }
      }
      return baseZoom
    }
    return item
  })
  return dataZoom;
}

export default datazoom;
