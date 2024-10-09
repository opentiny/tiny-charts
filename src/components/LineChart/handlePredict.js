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
import Theme from '../../feature/token';
import cloneDeep from '../../util/cloneDeep';
import defendXSS from '../../util/defendXSS';
import chartToken from './chartToken';

function setDashedLineVisualMap(seriesIndex, lineColor, predictIndex) {
  const vm = {
    type: 'piecewise',
    seriesIndex,
    dimension: 0,
    show: false,
    pieces: [
      {
        gte: 0,
        lte: predictIndex,
        color: Theme.config.visualMapPiecesColor,
      },
      {
        gt: predictIndex,
        color: lineColor,
      },
    ],
  };
  return vm;
}

// htmlString中判断item.color.colorStops是判读是否为折柱混合的图表，如果是需要从item.color.colorStops对象中获取颜色
function setToolTip(fontColor, selfFormatter) {
  if (selfFormatter) {
    return selfFormatter;
  }
  const tipHtml = params => {
    let htmlString = '';
    const legendLength = params.length / 2;
    params.forEach((item, index) => {
      // 只显示实线数据的tooltip
      if (index < legendLength) {
        if (index === 0) {
          htmlString += `${defendXSS(item.name)}<br/>`;
        }
        const { colorStops: color_ } = item.color;
        htmlString += `
                    <div>
                        <span style="display:inline-block;width:10px;
                        height:10px;border-radius:5px;background-color:${defendXSS(
          color_ ? color_[0].color : item.color,
        )};">
                        </span>
                        <span style="margin-left:5px;color:${defendXSS(fontColor)}">
                            <span style="display:inline-block;width:80px;">${defendXSS(item.seriesName)}</span> 
                            <span style="font-weight:bold">${defendXSS(item.value)}</span>
                        </span>
                    </div>
                `;
      }
    });
    return htmlString;
  };
  return tipHtml;
}

/**
 * 针对预测值图表需求，图表需要进行特殊处理
 */
export function handlePredict(option, predict, tipHtml, lineStyle) {
  if (!predict) return
  // VisualMap只能处理线的颜色，不能处理面积的颜色
  let dashColor = Theme.config.visualMapDashColor;
  if (lineStyle && lineStyle.dashColor) {
    dashColor = lineStyle.dashColor;
  }
  // 取出数据
  const data = option.series;
  const dataLength = data.length;
  const xAxisDataLength = option.xAxis[0].data.length;
  const predictIndex = option.xAxis[0].data.indexOf(predict);
  // 制作虚线的series(只有匹配成功即predictIndex>-1时，才设置阈值线的样式)
  if (predictIndex > -1) {
    for (let index = 0; index < dataLength; index++) {
      const temp = cloneDeep(data[index]);
      temp.lineStyle = {
        // 为了视觉上看不见盖住粗细+1
        width: chartToken.lineWidth + 1,
        type: [5, 8],
      };
      temp.itemStyle = {
        opacity: 0,
      };
      temp.silent = true;
      temp.showSymbol = false;
      temp.showAllSymbol = false;
      // 插入虚线的series
      option.series.push(temp);
      // 虚线颜色
      option.visualMap.push(setDashedLineVisualMap(dataLength + index, dashColor, predictIndex, xAxisDataLength));
    }
  }
  // 修改tooltip,不显示虚线的tooltip
  option.tooltip.formatter = setToolTip(Theme.config.tooltipTextColor, tipHtml);
}
