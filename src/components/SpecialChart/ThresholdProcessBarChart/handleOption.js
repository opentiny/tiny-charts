import cloneDeep from '../../../util/cloneDeep';
import { darkSecondaryColor, darkAxisLabel, lightAxisLabel, lightAxis } from '../util/color';
import { darkTooltip, lightTooltip } from '../util/tooltipOption';
import { lightXaxis, darkXaxis } from '../util/xAxisOption';
import { lightYaxis, darkYaxis } from '../util/yAxisOption';
import defendXSS from '../../../util/defendXSS';
export function handleAxis(baseOption, theme, dataSet, iChartOption) {
  const { barName } = dataSet;
  switch (theme) {
    case 'dark':
      baseOption.yAxis = cloneDeep(darkXaxis);
      baseOption.xAxis = cloneDeep(darkYaxis);
      baseOption.xAxis.splitLine.lineStyle.color = iChartOption?.splitLineColor || '#262A32';
      break;
    default:
      baseOption.yAxis = cloneDeep(lightXaxis);
      baseOption.xAxis = cloneDeep(lightYaxis);
      baseOption.xAxis.splitLine.lineStyle.color = iChartOption?.splitLineColor || lightAxis;
      break;
  }
  baseOption.yAxis.data = barName;
  baseOption.xAxis.axisLabel.show = false;
  baseOption.yAxis.axisTick.show = false;
  baseOption.xAxis.splitLine.lineStyle.type = 'dashed';
  baseOption.yAxis.axisLine.lineStyle.color = '#32363D';
  baseOption.yAxis.axisLabel.margin = 20;
  baseOption.yAxis.axisLabel.fontSize = 14;
  baseOption.yAxis.axisLabel.overflow = 'truncate';
  if (iChartOption.title) {
    Object.assign(baseOption.yAxis.axisLabel, iChartOption.title);
  }
}

export function handleData(iChartOption) {
  const { data } = iChartOption;
  // 左侧标题数据
  const barName = [];
  // 柱子数据
  const barData = [];
  // 数据的最大值
  const maxValue = iChartOption.calibrationValue || 100;

  if (iChartOption.minWidth) {
    // 极限值比例
    const minWidth = parseInt(iChartOption.minWidth) / 100;
    // 极限值
    const limitValue = (iChartOption.calibrationValue ? iChartOption.calibrationValue : 100) * minWidth;

    data.forEach(item => {
      item.value < limitValue ? barData.push(item.value === 0 ? 0 : limitValue) : barData.push(item.value);
      barName.push(item.name);
    });

    return {
      barData,
      barName,
      maxValue,
    };
  }
  // 普通状态
  data.forEach(item => {
    barData.push(item.value);
    barName.push(item.name);
  });

  return {
    barData,
    barName,
    maxValue,
  };
}

export function handleTheme(baseOption, theme, iChartOption) {
  switch (theme) {
    case 'dark':
      // 背景柱条颜色
      baseOption.series[1].itemStyle.color = iChartOption?.backgroundBarColor || darkSecondaryColor;
      // 右侧label颜色
      baseOption.series[1].label.color = darkAxisLabel;
      // tip 提示框
      baseOption.tooltip = cloneDeep(darkTooltip);
      break;
    default:
      baseOption.series[1].itemStyle.color = iChartOption?.backgroundBarColor || '#eeeeee';
      baseOption.series[1].label.color = lightAxisLabel;
      baseOption.tooltip = cloneDeep(lightTooltip);
      break;
  }
}

export function handleTooltip(baseOption, iChartOption, data) {
  baseOption.tooltip.axisPointer = { type: 'none' };
  const { unit, tipHtml } = iChartOption;
  if (tipHtml) {
    baseOption.tooltip.formatter = tipHtml;
    return;
  }

  baseOption.tooltip.formatter = params => {
    const name = params[0].name;
    const value = iChartOption.minWidth ? data[params[0].dataIndex].value : params[0].value;
    const color = `linear-gradient(
      90deg,${params[0].color.colorStops[0].color} 0%, ${params[0].color.colorStops[1].color} 100%)`;
    const htmlString = `
                        <div>
                            <span style="display:inline-block;width:10px;height:10px;
                            border-radius:5px;background-image:${defendXSS(color)};">
                            </span>
                            <span style="margin-left:5px;">
                                <span style="display:inline-block;margin-right:8px;min-width:80px;">${defendXSS(name)}</span> 
                                <span style="font-weight:bold">${defendXSS(value)}${unit ? defendXSS(unit): ''}</span>
                            </span>
                        </div>
                    `;
    return htmlString;
  };
}
