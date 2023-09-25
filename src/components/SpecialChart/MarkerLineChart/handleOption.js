import cloneDeep from '../../../util/cloneDeep';
import { lightTooltip, darkTooltip } from '../util/tooltipOption';
import { darkColor, lightColor } from '../util/color';
import { lightXaxis, darkXaxis } from '../util/xAxisOption';
import { lightYaxis, darkYaxis, yAxisNameDefault } from '../util/yAxisOption';
import { darkAxisLabel, lightAxisLabel } from '../util/color';
import defendXSS from '../../../util/defendXSS';
// 配置标记点的颜色及文本信息
export function setMark(mark, baseOpt, theme) {
  mark = mark ? mark : {};
  // 配置标记点的大小及文本样式
  baseOpt.series[0].symbolSize = mark.symbolSize;

  if (!mark.textStyle) {
    if (theme === 'dark') {
      mark.textStyle = {
        color: lightColor,
        fontSize: 12,
        lineHeight: 16,
      };
    } else {
      mark.textStyle = {
        color: darkColor,
        fontSize: 12,
        lineHeight: 16,
      };
    }
  } else {
    if (!mark.textStyle.color) {
      if (theme === 'dark') {
        mark.textStyle.color = lightColor;
      } else {
        mark.textStyle.color = darkColor;
      }
    }
  }
  // 配置文本样式
  baseOpt.series[0].label.textStyle = mark.textStyle;
  // 配置标记区域背景样式
  baseOpt.series[0].label.formatter = mark.formatter;
  if (!mark.formatter) {
    baseOpt.series[0].label.formatter = () => {
      return '';
    };
  }
  // 配置标记点样式
  baseOpt.series[0].itemStyle = mark.itemStyle;
  if (!mark.itemStyle) {
    baseOpt.series[0].itemStyle = {
      color: () => {
        return 'transparent';
      },
    };
  }
}

// 配置悬浮提示框
export function setToolTip(theme, show, formatter) {
  if (show === false) {
    return;
  }
  let SpMarkerTooltip = {};
  switch (theme) {
    case 'dark':
      SpMarkerTooltip = cloneDeep(darkTooltip);
      break;
    default:
      SpMarkerTooltip = cloneDeep(lightTooltip);
      break;
  }
  if (formatter) {
    SpMarkerTooltip.formatter = formatter;
  } else {
    SpMarkerTooltip.formatter = params => {
      let htmlString = '';
      params.forEach(item => {
        htmlString +=
          `<span style="display:inline-block;margin-right:10px;border-radius:50%;height:10px;">${defendXSS(item.name)}</span>` +
          '<span style="display:inline-block;margin-left:10px;border-radius:50%;height:10px;">' +
          `${defendXSS(item.data)}</span>`;
      });
      return htmlString;
    };
  }
  SpMarkerTooltip.trigger = 'axis';
  return SpMarkerTooltip;
}

// 配置阈值线
export function setMarkLine(markLine, baseOpt) {
  // 配置阈值线的位置
  baseOpt.series[0].markLine.data[0].yAxis = markLine.top || '';
  // 配置阈值线是否不响应鼠标事件
  baseOpt.series[0].markLine.silent = markLine.silent || false;
  // 配置阈值线的文本
  baseOpt.series[0].markLine.label.formatter = markLine.topLable || '';
  // 配置阈值线颜色
  if (markLine.topColor) {
    baseOpt.series[0].markLine.lineStyle.color = markLine.topColor;
  } else {
    baseOpt.series[0].markLine.lineStyle.color = 'red';
  }
  // 配置文本颜色
  if (markLine.labelColor) {
    baseOpt.series[0].markLine.label.color = markLine.labelColor;
  } else {
    baseOpt.series[0].markLine.label.color = 'red';
  }
  // 配置文本位置
  baseOpt.series[0].markLine.label.position = markLine.labelPosition || 'insideEndTop';
  // 配置文本字体大小
  baseOpt.series[0].markLine.label.fontSize = markLine.fontSize || 12;
  // 配置文本距离labelPosition的距离
  baseOpt.series[0].markLine.label.distance = markLine.distance || [0, 0];
}

// 配置xAxis默认样式
export function setXAxis(theme, xAxis, baseOpt, time) {
  switch (theme) {
    case 'dark':
      xAxis = cloneDeep(darkXaxis);
      break;
    case 'light':
      xAxis = cloneDeep(lightXaxis);
      break;
  }
  baseOpt.xAxis = xAxis;
  baseOpt.xAxis.data = time;
}

// 配置yAxis默认样式
export function setYAxis(theme, yAxis, baseOpt) {
  yAxis = yAxis ? yAxis : {};
  const interval = yAxis.interval;
  const max = yAxis.max;
  switch (theme) {
    case 'dark':
      yAxis = cloneDeep(darkYaxis);
      break;
    case 'light':
      yAxis = cloneDeep(lightYaxis);
      break;
  }
  baseOpt.yAxis = yAxis;
  baseOpt.yAxis.interval = interval;
  baseOpt.yAxis.max = max;
  baseOpt.yAxis.nameTextStyle = {
    color: theme === 'dark' ? darkAxisLabel : lightAxisLabel,
  };
}

// 提取出x轴的数据
export function setXData(params) {
  const { data, xAxis, time, value, baseOpt, xAxisName } = params;
  const legendData = [];
  if (data.length > 0) {
    const temp = data[0];
    for (const key in temp) {
      if (key !== xAxisName) {
        legendData.push(key);
      }
    }
  }
  data.forEach(item => {
    time.push(item[xAxis]);
    value.push(item[legendData[0]]);
  });
  baseOpt.series[0].data = value;
  return time;
}

// 图表y轴的名称采用title标题的形式来实现
export function setYAxisName(theme, name, chartPadding) {
  if (name) {
    const MarkYAxisName = cloneDeep(yAxisNameDefault);
    MarkYAxisName.text = name;
    MarkYAxisName.textStyle.color = theme === 'dark' ? darkAxisLabel : lightAxisLabel;
    MarkYAxisName.padding[0] = chartPadding[0] - 30;
    MarkYAxisName.padding[3] = chartPadding[3];
    return MarkYAxisName;
  }
  return {};
}
