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
import datazoom from '../config/datazoom';
import xkey from '../config/xAxis/xkey';
import xdata from '../config/xAxis/xdata';
import mobile from '../../util/mobile';
import { isArray, isObject } from '../../util/type';
// 组装直角坐标系自适应
function AdaptiveRectSys(baseOpt, iChartOpt, echartsIns, self) {
  if (baseOpt.xAxis?.[0]?.type !== 'category') return;
  if (!iChartOpt.adaptive && iChartOpt.a2ui || iChartOpt.a2ui ) return;
  const rect = echartsIns?.getModel?.()?.getComponent?.('grid')?.coordinateSystem?.getRect() || echartsIns?.getDom?.().getBoundingClientRect() || {}; 
  const y0left = rect.x || rect.left || 0;
  let iXkey = xkey(iChartOpt);
  let iXdata = xdata(iChartOpt.data, iXkey);
  const isMobile = iChartOpt.isMobile ||mobile();
  // 创建一个canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const textStyle = baseOpt.xAxis[0].nameTextStyle;
  // 未设置formatter
  let fontSize = `${textStyle?.fontSize || 12}px`
  let fontWeight = textStyle?.fontWeight || 'normal';
  let fontFamily = textStyle?.fontFamily || 'Arial';
  // 设置字体
  ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
  let maxItemWidth = (rect.width - (iXdata.length - 1) * 8) / iXdata.length;
  for (let index = 0; index < iXdata.length; index++) {
    const item = iXdata[index];
    const next = iXdata[index+1] ;
    const width = ctx.measureText(item).width;
    const nextWidth = next && ctx.measureText(next).width ;
    if (next) {
      if ((width + nextWidth)/2 > maxItemWidth) {
        if((!iChartOpt.dataZoom?.show || !iChartOpt.dataZoom?.[0]?.show)) {
          iChartOpt.dataZoom.show = true;
          iChartOpt.dataZoom.height = 8;
          iChartOpt.dataZoom.handleSize = '68%';
          iChartOpt.dataZoom.mini = true;
          iChartOpt.dataZoom.left = iChartOpt.dataZoom.left || y0left || iChartOpt.padding[3];
          iChartOpt.dataZoom.bottom = 0;
          iChartOpt.dataZoom.start = 0;
          iChartOpt.dataZoom.end = iChartOpt.dataZoom.end || 80;
          iChartOpt.dataZoom.type = isMobile ? "inside" : 'slider';
        }
        iChartOpt.oldPadding = iChartOpt.padding;
        const bottom = iChartOpt.padding?.[2] < 24 ? 24 : (iChartOpt.padding?.[2] || 24);
        if ( isArray(baseOpt.grid) ) {
          baseOpt.grid[0].bottom = bottom;
        } 
        if (isObject(baseOpt.grid)) {
          baseOpt.grid.bottom = bottom;
        }
        break;
      } else {
        iChartOpt.padding = iChartOpt.oldPadding || iChartOpt.padding;
        const bottom = iChartOpt.padding?.[2] !== undefined ? iChartOpt.padding?.[2] :  baseOpt.grid?.[0]?.bottom || baseOpt.grid?.bottom;
        iChartOpt.dataZoom.show = false;
        if ( isArray(baseOpt.grid) ) {
          baseOpt.grid[0].bottom = bottom;
        } 
        if (isObject(baseOpt.grid)) {
          baseOpt.grid.bottom = bottom;
        }
      }
    }
  }
  // 图表datazoom
  baseOpt.dataZoom = datazoom(iChartOpt);
}

export default AdaptiveRectSys;

