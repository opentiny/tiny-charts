import cloneDeep from '../../util/cloneDeep';
import { getColor } from '../../util/color';
import defendXSS from '../../util/defendXSS';
// 配置玉玦图默认线宽为8
export function setbarWidth(iChartOption, baseOpt) {
  const { barWidth = 8 } = iChartOption;
  baseOpt.series.forEach(series => {
    series.barWidth = barWidth;
  });
}

// 配置玉玦图的起点角度及文本位置(兼容老属性startAngle及labelAlign)
export function setStartAngle(iChartOption, baseOpt) {
  if (!iChartOption?.angleAxis?.startAngle) {
    if (!iChartOption.startAngle) {
      iChartOption.startAngle = 90;
    }
    baseOpt.angleAxis.startAngle = iChartOption.startAngle;
  }
  if (!iChartOption?.radiusAxis?.axisLabel?.align) {
    if (!iChartOption.labelAlign) {
      iChartOption.labelAlign = 'right';
    }
    baseOpt.radiusAxis.axisLabel.align = iChartOption.labelAlign;
  }
}

/**
 * 为第一种数据类型单独配置legend.data和对应颜色
 * @param {*} iChartOption
 * @param {*} baseOpt
 */
export function handleLegendData(iChartOption, baseOpt) {
  const { data, color } = iChartOption;
  data.forEach(dataItem => {
    if (!dataItem.children || dataItem.children.length === 0) {
      baseOpt.legend.data = [];
    }
  });

  // 图例使用反转数据，由外向内展示图例
  const reverseData = [...data]
    .map((item, index) => {
      item.beforeReverseIndex = index;
      return item;
    })
    .reverse();
  if (Array.isArray(baseOpt.legend.data)) {
    reverseData.forEach(dataItem => {
      baseOpt.legend.data.push({
        name: dataItem.name,
        itemStyle: {
          color: getColor(color, dataItem.beforeReverseIndex),
        },
      });
    });
  }
}

/**
 * 允许自定义柱体最小占比（场景不支持使用原生的barMinAngle），设置了之后，需要变更传入的data
 * @param {*} iChartOption
 * @param {*} baseOpt
 */
export function handleMinRatio(iChartOption, baseOpt) {
  const { barMinRatio, data, tipHtml } = iChartOption;
  if (barMinRatio) {
    const minValue = (barMinRatio * baseOpt.angleAxis.sum) / 100;
    baseOpt.series.forEach((series, index) => {
      series.data.forEach((dataItem, index_) => {
        if (series.name === dataItem.name) {
          dataItem.beforeChangeValue = dataItem.value;
          if (dataItem.value <= minValue) {
            dataItem.value = minValue;
            data[index].value = minValue;
          }
        }
      });
    });
    // 配置了barMinRatio会修改data中的value值，需要重新设置tooltip进行覆盖
    baseOpt.tooltip = setTooltip(tipHtml, baseOpt);
  }
}

// 配置悬浮提示框样式
export function setTooltip(formatter, baseOpt) {
  const JadeJueTooltip = cloneDeep(baseOpt.tooltip);
  if (formatter) {
    JadeJueTooltip.formatter = formatter;
  } else {
    handleJadeJueFormatter(JadeJueTooltip);
  }
  JadeJueTooltip.trigger = 'item';
  return JadeJueTooltip;
}

function handleJadeJueFormatter(JadeJueTooltip) {
  JadeJueTooltip.formatter = params => {
    let htmlString = '';
    const value = params.data.beforeChangeValue;
    const name = params.data.name || params.name;
    htmlString +=
      `<span style="display:inline-block;margin-right:5px;margin-left:8px;border-radius:50%;height:10px;">${defendXSS(name)}</span>` +
      '<br/>' +
      `<span style="display:inline-block;margin-right:5px;margin-left:8px;border-radius:50%;height:10px;width:10px;background:${defendXSS(params.color)}"></span>` +
      '<span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">' +
      `${defendXSS(name)}</span>` +
      `<span style="display:inline-block;margin-right:8px;margin-left:25px;font-weight:bold">${defendXSS(value)}</span>`;
    return htmlString;
  };
}
