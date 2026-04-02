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
import { isArray } from '../../util/type';
// 组装直角坐标系自适应
function AdaptiveRectSys(baseOpt, iChartOpt, echartsIns, self) {
  if (baseOpt.xAxis[0].type !== 'category') return;
  if (!iChartOpt.adaptive) return;
  const rect = echartsIns.getModel?.()?.getComponent?.('grid')?.coordinateSystem?.getRect() || echartsIns?.getDom?.().getBoundingClientRect() || {}; 
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
  // 计算超出最合适的datazoom end
  let overLoneWidth = 0;
  let overLoneIndex = 0;
  for (let index = 0; index < iXdata.length; index++) {
    const item = iXdata[index];
    const width = ctx.measureText(item).width;
    if(maxItemWidth < width){
      overLoneWidth += width + 8;
      overLoneIndex ++;
    }
  }
  // 为了文字完全显示，计算出超长文字 + 最小间隙对 / 默认单项的宽度
  const regularWidth = (maxItemWidth + 8) * overLoneIndex;
  const widthParcent = parseFloat((regularWidth / overLoneWidth) * 100);

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
          iChartOpt.dataZoom.bottom = 0;
          iChartOpt.dataZoom.start = 0;
          iChartOpt.dataZoom.end = iChartOpt.dataZoom.end || widthParcent < 30 ? 30 : widthParcent;
          iChartOpt.dataZoom.type = isMobile ? "inside" : 'slider';
          // 设定底部datazoom 预留高度 18 --- 取自设计稿
          if(iChartOpt.padding && iChartOpt.padding[2] < 18){
            setAdaptiveGrid(baseOpt, 18)
          }
        }
        break;
      } else {
        iChartOpt.dataZoom.show = false;
        setAdaptiveGrid(baseOpt, iChartOpt.padding?.[2] || 0 )
      }
    }
  }
  // 图表datazoom
  baseOpt.dataZoom = datazoom(iChartOpt);
}

function setAdaptiveGrid(baseOpt, value){
  if (isArray(baseOpt.grid)) {
    baseOpt.grid[0].bottom = value;
  } else {
    baseOpt.grid.bottom = value;
  }
}

export default AdaptiveRectSys;

