import cloneDeep from '../../../util/cloneDeep';
import { handleBarColor } from './handleSeries';
import { doubleBaseOption } from './BaseOption';
import { isString } from '../../../util/type';
import megre from '../../../util/megre';
import defendXSS from '../../../util/defendXSS';
import Theme from '../../../feature/theme'
// 处理有极限值的时候的数据项
function handleLimitVal(iChartOpt, item) {
  const dataItem = { ...item };
  const minWidth = parseInt(iChartOpt.minWidth) / 100;
  // 极限值
  const limitValue = (iChartOpt.calibrationValue ? iChartOpt.calibrationValue : 100) * minWidth;
  if (iChartOpt.minWidth && item.value < limitValue) {
    dataItem.value = item.value === 0 ? 0 : limitValue;
    dataItem._value = item.value;
  }
  return dataItem;
}

function handleDoubleData(dataSet, data, maxValue, iChartOpt) {
  data.forEach(item => {
    const seriesName = [];
    const seriesData = [];
    const itemData = {
      name: item.name,
      barName: seriesName,
      barData: seriesData,
      maxValue,
    };
    if (item.children && item.children.length !== 0) {
      item.children.forEach(el => {
        seriesName.push(el.name);
        const innerDataItem = handleLimitVal(iChartOpt, el);
        seriesData.push(innerDataItem);
      });
    }
    dataSet.push(itemData);
  });
}

function handleData(iChartOpt, doubleSide) {
  const { data } = iChartOpt;
  if (data) {
    // 数据集合
    const dataSet = [];
    // 数据的最大值
    const maxValue = iChartOpt.calibrationValue || 100;
    if (doubleSide) {
      handleDoubleData(dataSet, data, maxValue, iChartOpt);
      return dataSet;
    }
    // 系列名称
    const seriesName = [];
    const seriesData = [];
    const itemData = {
      name: 'data',
      barName: seriesName,
      barData: seriesData,
      maxValue,
    };
    dataSet.push(itemData);
    data.forEach(item => {
      const innerDataItem = handleLimitVal(iChartOpt, item);
      seriesData.push(innerDataItem);
      seriesName.push(item.name);
    });
    return dataSet;
  }
}

function handleGridWidth(baseOpt, padding, chartInstance) {
  const right = padding[1];
  const left = padding[3];
  const containerWidth = chartInstance.getWidth();
  const isStr_r = isString(right);
  const isStr_l = isString(left);
  const isPt_r = isStr_r && right.includes('%');
  const isPt_l = isStr_l && left.includes('%');
  baseOpt.grid[0].left = left;
  baseOpt.grid[1].right = right;
  // 左右都是百分比
  if (isPt_r && isPt_l) {
    const width = (100 - parseInt(left) - parseInt(right)) / 2;
    baseOpt.grid[0].width = `${width}%`;
    baseOpt.grid[1].width = `${width}%`;
    return;
  }
  const leftPadding = isPt_l ? (containerWidth * parseInt(left)) / 100 : parseInt(left);
  const rightPadding = isPt_r ? (containerWidth * parseInt(right)) / 100 : parseInt(right);
  const horizontalPadding = leftPadding + rightPadding;
  const gridWidth = (containerWidth - horizontalPadding) / 2;
  baseOpt.grid[0].width = gridWidth;
  baseOpt.grid[1].width = gridWidth;
}

function handleDoubleGrid(baseOpt, iChartOpt, chartInstance) {
  const { padding } = iChartOpt;
  baseOpt.grid[0].top = padding[0];
  baseOpt.grid[1].top = padding[0];
  baseOpt.grid[0].bottom = padding[2];
  baseOpt.grid[1].bottom = padding[2];
  handleGridWidth(baseOpt, padding, chartInstance);
}

function handleGrid(baseOpt, iChartOpt, chartInstance, doubleSide) {
  if (doubleSide) {
    baseOpt.grid = cloneDeep(doubleBaseOption.grid);
    handleDoubleGrid(baseOpt, iChartOpt, chartInstance);
    return;
  }
  baseOpt.grid[0].containLabel = false;
}

function handleYaxis(baseOpt, iChartOpt, dataSet, doubleSide) {
  if (doubleSide) {
    baseOpt.yAxis = cloneDeep(doubleBaseOption.yAxis);
    const colorBase = Theme.color.base    
    baseOpt.yAxis[0].show = true;
    baseOpt.yAxis[0].axisLine.lineStyle.color = colorBase.axis;
    baseOpt.yAxis[0].data = dataSet[0].barName;
    baseOpt.yAxis[1].data = dataSet[1].barName;
    return;
  }
  baseOpt.yAxis[0].inverse = true;
  baseOpt.yAxis[0].show = false;
  baseOpt.yAxis[0].data = dataSet[0].barName;
  baseOpt.yAxis[0].type = 'category';
}

function handleXaxis(baseOpt, doubleSide) {
  if (doubleSide) {
    baseOpt.xAxis = cloneDeep(doubleBaseOption.xAxis);
    return;
  }
  baseOpt.xAxis[0].show = false;
  baseOpt.xAxis[0].type = 'value';
  baseOpt.xAxis[0].max = 'dataMax';
}

function handleDataZoom(baseOpt) {
  baseOpt.dataZoom = undefined;
}

function handleLegend(baseOpt, iChartOpt, dataSet, doubleSide) {
  if (doubleSide) {
    if (iChartOpt.legend) {
      megre(baseOpt.legend, iChartOpt.legend);
    }
    baseOpt.legend.data = dataSet.map(item => {
      return {
        name: item.name,
      };
    });
    return;
  }
  baseOpt.legend.show = false;
}

function handleTheme(baseOpt) {
  const colorGroup = Theme.color.base;
  baseOpt.series.forEach((ser, serIndex) => {
    // 左侧label颜色
    if (serIndex === 0) ser.label.color = colorGroup.axislabel;
    if (serIndex % 2 !== 0) {
      ser.itemStyle.color = colorGroup.subg;
      // 右侧label颜色
      ser.label.color = colorGroup.axislabel;
    }
  });
}

function handleTipValue(iChartOpt, params, data, doubleSide) {
  const { seriesName } = params;
  let value;
  if (doubleSide) {
    if (iChartOpt.minWidth) {
      value = data[Math.floor(params.seriesIndex / 2)].children[params.dataIndex].value;
    } else {
      value =
        seriesName === 'background' || seriesName === 'backgroundLeft' || seriesName === 'backgroundRight'
          ? data[Math.floor(params.seriesIndex / 2)].children[params.dataIndex].value
          : params.value;
    }
    return value;
  }
  if (iChartOpt.minWidth) {
    value = data[params.dataIndex].value;
  } else {
    value = seriesName === 'background' ? data[params.dataIndex].value : params.value;
  }
  return value;
}

function handleFormatter(baseOpt, iChartOpt, data, doubleSide) {
  const { unit, tipHtml } = iChartOpt;
  if (tipHtml) {
    baseOpt.tooltip.formatter = tipHtml;
    return;
  }
  const innerUnit = unit || unit === '' ? unit : '%';
  const isItemTooltip = baseOpt.tooltip.trigger === 'item';
  const ichartTooltipFormatter = iChartOpt?.tooltip?.formatter;
  baseOpt.tooltip.formatter = echartsParams => {
    const params = isItemTooltip ? echartsParams : echartsParams[0];
    const name = params.name;
    const seriesName = params.seriesName;
    const value = handleTipValue(iChartOpt, params, data, doubleSide);
    const color =
      seriesName === 'background' || seriesName === 'backgroundLeft' || seriesName === 'backgroundRight'
        ? handleBarColor(params, iChartOpt, data, doubleSide, true)
        : params.color;
    if (ichartTooltipFormatter) {
      const customParams = { ...params, value, color, data: value, unit: innerUnit };
      return ichartTooltipFormatter(customParams);
    }
    if (name === 'null') return;
    const htmlString = `
                      <div>
                          <span style="display:inline-block;width:10px;height:10px;
                          border-radius:5px;background-color:${defendXSS(color)};">
                          </span>
                          <span style="margin-left:5px;">
                              <span style="display:inline-block;margin-right:8px;min-width:80px;">${defendXSS(name)}</span> 
                              <span style="font-weight:bold">${defendXSS(value)}${
      value === null ? '' : defendXSS(innerUnit)
    }</span>
                          </span>
                      </div>
                  `;
    return htmlString;
  };
}

function handleTooltip(baseOpt, iChartOpt, data, doubleSide) {
  baseOpt.tooltip.axisPointer.type = 'none';
  baseOpt.tooltip.trigger = 'item';
  if (iChartOpt?.tooltip) {
    megre(baseOpt.tooltip, iChartOpt.tooltip);
  }
  handleFormatter(baseOpt, iChartOpt, data, doubleSide);
  if (iChartOpt?.tooltip && iChartOpt?.tooltip?.show === false) {
    baseOpt.series.forEach(item => {
      item.cursor = 'auto';
    });
  }
}

export { handleGrid, handleYaxis, handleXaxis, handleLegend, handleDataZoom, handleData, handleTheme, handleTooltip };
