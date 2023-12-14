import { isArray, isObject } from '../../util/type';
import cloneDeep from '../../util/cloneDeep';
import defendXSS from '../../util/defendXSS';
import merge from '../../util/merge';
import chartToken from './chartToken';
import tips from '../../util/tips';

function handleCusMax(iChartOpt) {
  let max = 0;
  const { radarMax, radar } = iChartOpt;
  if (isArray(radarMax)) {
    radarMax.forEach(item => {
      if (item.max > max) max = item.max;
    });
  }
  if (radar?.indicator) {
    radar.indicator.forEach(el => {
      if (el.max > max) max = el.max;
    });
  }
  return max;
}

function findDataMax(keys, data) {
  let max;
  for (let j = 0; j < keys.length; j++) {
    const key = keys[j];
    if (max === undefined) {
      max = data[key];
    }
    max = Math.max(max, data[key]);
  }
  return max;
}

/**
 * 雷达图数据的最大值
 */
function getRadarMax(data, iChartOpt, isCustomMaxVal) {
  let max;
  // 处理自定义max情况下的雷达图的默认最大值为未自定义的系列数据的最大值
  let cusDataName;
  const { radarMax, radar } = iChartOpt;
  if (isCustomMaxVal) {
    if (isArray(radarMax)) {
      cusDataName = radarMax.map(item => item.name);
    }
    if (radar?.indicator) {
      cusDataName = radar.indicator.map(i => i.name);
    }
  }
  const names = Object.keys(data);
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const keys = Object.keys(data[name]);
    if (isCustomMaxVal) {
      // 过滤出自定义的系列
      const dataKeys = keys.filter(name => {
        if (!cusDataName.includes(name)) return name;
      });
      max = findDataMax(dataKeys, data[name]);
      // 所有系列都自定义的情况，最大值取自定义里面的最大值
      if (max === undefined) {
        max = handleCusMax(iChartOpt);
      }
    } else {
      max = findDataMax(keys, data[name]);
    }
  }
  return max;
}

/**
 * 从数据中拿出雷达的所有维度
 */
function getRadarKeys(data) {
  const radarKeys = [];
  const seriesNames = Object.keys(data);
  for (let i = 0; i < seriesNames.length; i++) {
    const seriesName = seriesNames[i];
    const seriesData = data[seriesName];
    const dataNames = Object.keys(seriesData);
    for (let j = 0; j < dataNames.length; j++) {
      const dataName = dataNames[j];
      if (radarKeys.indexOf(dataName) === -1) {
        radarKeys.push(dataName);
      }
    }
  }
  return radarKeys;
}

function getAxisLine() {
  return {
    lineStyle: {
      color: chartToken.radiusAxisLineColor,
      width: chartToken.radarAxisLineWidth,
      type: chartToken.radarAxisLineType,
    },
  };
}

function getAxisLabel(iChartOpt) {
  const { radarMark } = iChartOpt;
  return {
    show: !!radarMark,
    margin: -20,
  };
}

function getSplitLine() {
  return {
    lineStyle: {
      color: chartToken.radarSplitLineColor,
      width: chartToken.radarSplitLineWidth,
      type: chartToken.radarSplitLineType,
    },
  };
}

function getRich() {
  return {
    a: {
      // 指示器name的样式
      color: chartToken.radarAxisLabelColor,
      align: 'center',
      fontSize: chartToken.fontSize,
      lineHeight: chartToken.lineHeightSM,
    },
    b: {
      // 数据value样式
      color: chartToken.radarAxisLabelColor,
      fontSize: chartToken.fontSize,
      align: 'center',
      lineHeight: chartToken.lineHeight,
      padding: [0, 0, 4, 0],
    },
    c: {
      // 高亮数据value样式
      color: chartToken.errorColor,
      fontSize: chartToken.fontSize,
      align: 'center',
      lineHeight: chartToken.lineHeight,
      padding: [0, 0, 4, 0],
    },
  };
}

function getUnit(unit) {
  if (unit || unit === '') return unit;
  return '%';
}

function getAxisNameFormatter(iChartOpt) {
  const { data, markLineValue, unit } = iChartOpt;
  const dataLength = Object.keys(data).length;
  const actualUnit = getUnit(unit);
  return indicatorName => {
    // 只有一组数据时，显示“名称 + 数值”
    if (dataLength === 1) {
      const d = data[Object.keys(data)[0]];
      const v = d[indicatorName];
      if (markLineValue && v >= markLineValue) {
        return `{c|${v}}{c|${actualUnit}}\n{a|${indicatorName}}`;
      } else {
        return `{b|${v}}{b|${actualUnit}}\n{a|${indicatorName}}`;
      }
    } else if (dataLength > 1) {
      return `{a|${indicatorName}}`;
    }
  };
}

function getRadarOption(iChartOpt) {
  return {
    // 雷达坐标系位置
    center: ['50%', '50%'],
    // 雷达坐标系半径
    radius: '50%',
    // 指示器名称与轴的距离
    axisNameGap: 15,
    // 指示器轴的分割段数
    splitNumber: 4,
    shape: 'circle',
    // 坐标轴的标签是否响应和触发鼠标事件
    triggerEvent: false,
    // 坐标轴射线
    axisLine: getAxisLine(),
    // 坐标轴射线的刻度,只显示一条射线的刻度,其他射线的刻度需要在指示器数据indicator中每项单独配置axisLabel: { show: false }
    axisLabel: getAxisLabel(iChartOpt),
    // 坐标轴圆环分隔区域填充
    splitArea: { show: false },
    // 坐标轴圆环分隔线
    splitLine: getSplitLine(),
    // 坐标轴数据
    indicator: undefined,
    // 指示器名称样式设置
    axisName: {
      rich: getRich(),
      formatter: getAxisNameFormatter(iChartOpt),
    },
  };
}

function setCenterAndRadius(radar, iChartOpt) {
  const chartPosition = iChartOpt.chartPosition || iChartOpt.position || {};
  if (chartPosition.center) radar.center = chartPosition.center;
  if (chartPosition.radius) radar.radius = chartPosition.radius;
}

function setIndicator(radar, radarKeys, isCustomMaxVal, iChartOpt) {
  const { radarMax, data, radarMark } = iChartOpt;
  const isRadarMaxArr = isArray(radarMax);
  radar.indicator = radarKeys.map((name, index) => {
    if (!isRadarMaxArr) {
      // 非数组的形式默认所有维度共享一个最大值，只显示一个维度的刻度
      return index === 0 ? { name, max: radarMax } : { name, max: radarMax, axisLabel: { show: false } };
    } else {
      const inerMax = getRadarMax(data, iChartOpt, isCustomMaxVal);
      const isName = radarMax.find(item => item.name === name);
      const cusIndicator = isName ? isName : {};
      return { name, max: inerMax, axisLabel: { show: !!radarMark }, ...cusIndicator };
    }
  });
}

function mergeRadar(radar, iChartOpt) {
  if (iChartOpt.radar) {
    merge(radar, iChartOpt.radar);
  }
  // 开发针对单个轴做特殊配置
  if (iChartOpt.radar?.indicator) {
    const mixinIndicator = radar.indicator.map(i => {
      const coveredIndicator = iChartOpt.radar.indicator.find(indicate => indicate.name === i.name);
      return coveredIndicator ? coveredIndicator : i;
    });
    radar.indicator = mixinIndicator;
  }
}

function setRadar(baseOpt, iChartOpt, radarKeys, isCustomMaxVal) {
  const radar = getRadarOption(iChartOpt);
  setCenterAndRadius(radar, iChartOpt);
  setIndicator(radar, radarKeys, isCustomMaxVal, iChartOpt);
  mergeRadar(radar, iChartOpt);
  baseOpt.radar.push(radar);
}

function handletipHtml(tooltip, tipHtml, radarKeys) {
  tooltip.formatter = (params, ticket, callback) => {
    return tipHtml(params, radarKeys, ticket, callback);
  };
}

function handleFormatter(tooltip, iChartOpt, radarKeys) {
  const { markLine } = iChartOpt;
  // 阈值告警色
  const alarmColor = chartToken.errorColor;
  const isThreshold = !!(isObject(markLine) && markLine?.threshold);
  tooltip.formatter = params => {
    const data = params.data;
    const dataName = data.name;
    let htmlString = `<div style="margin-bottom:4px;">${defendXSS(dataName)}</div>`;
    data.value.forEach((item, index) => {
      let color;
      if (markLine) {
        const markVal = isThreshold ? markLine.threshold[radarKeys[index]] : markLine;
        color = item >= markVal ? alarmColor : params.color;
      } else {
        color = params.color;
      }
      htmlString += `<div style="margin-bottom:4px;">
      <span style="display:inline-block;width:8px;
      height:8px;margin-right:8px;border-radius:5px;
      background-color:${defendXSS(color)};"></span>
      <span style="display:inline-block;margin-right:8px;
      min-width:60px;font-size:12px">${defendXSS(radarKeys[index])}</span>
      <span style="font-size:14px">${defendXSS(item || '-')}</span>
      </div>`;
    });
    return htmlString;
  };
}

/**
 * 配置鼠标悬浮提示框
 */
function setTooltip(baseOpt, iChartOpt, radarKeys) {
  const { tipHtml, tooltip } = iChartOpt;
  tipHtml ? handletipHtml(baseOpt.tooltip, tipHtml, radarKeys) : handleFormatter(baseOpt.tooltip, iChartOpt, radarKeys);
  // 针对tooltip中传formatter做特殊处理
  if (tooltip?.formatter) {
    baseOpt.tooltip.formatter = (params, ticket, callback) => {
      return tooltip.formatter(params, radarKeys, ticket, callback);
    };
  }
}

function getMarkRadarOption() {
  return {
    center: undefined,
    // 阈值线的radius应该是一个百分比，或者是实际的像素值
    radius: undefined,
    splitNumber: 1,
    shape: 'circle',
    axisName: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    splitArea: {
      show: false,
    },
    splitLine: {
      lineStyle: {
        width: chartToken.radarSplitLineWidth,
        color: undefined,
        type: 'dashed',
      },
    },
    indicator: undefined,
  };
}

function setMarkCenterAndRadius(radar, baseOpt) {
  radar.center = baseOpt.radar[0].center;
  radar.radius = baseOpt.radar[0].radius;
}

function setCustomMarkLine(markRadar, baseOpt, iChartOpt, radarKeys) {
  const {
    markLine: { threshold },
  } = iChartOpt;
  markRadar.indicator = cloneDeep(baseOpt.radar[0].indicator);
  const thresholdData = radarKeys.map(item => {
    const data = threshold[item] || 0;
    return data;
  });
  const thresholdSeries = {
    type: 'radar',
    symbol: 'none',
    // 拐点大小
    symbolSize: chartToken.symbolSize,
    silent: true,
    // 使用的雷达坐标系的索引
    radarIndex: 1,
    areaStyle: {
      color: chartToken.areaStyleColor,
    },
    lineStyle: {
      color: chartToken.errorColor,
      type: 'dashed',
    },
    data: [],
  };
  thresholdSeries.data = [{ name: '', value: thresholdData }];
  baseOpt.series.push(thresholdSeries);
}

function setCommonMarkLine(markRadar, baseOpt, iChartOpt, radarKeys) {
  // 雷达图半径
  const radius = baseOpt.radar[0].radius;
  // 雷达图有中心文本的情况下radius需要写成数组
  const radiusIsArray = isArray(radius);
  // 雷达图最大值
  const { radarMax, markLine } = iChartOpt;
  if (isObject(radarMax)) {
    tips.error(
      'If markLine is of the number type, radarMax must be of the number type. If radarMax is of the object type, set markLine.threshold',
    );
    return;
  }
  const markLineValue = parseFloat(markLine);
  let marklineRadius;
  if (radiusIsArray) {
    const disRadius = parseFloat(radius[1]) - parseFloat(radius[0]);
    marklineRadius =
      disRadius * (markLineValue / radarMax) +
      parseFloat(radius[0]) +
      (radius[0].toString().indexOf('%') !== -1 ? '%' : '');
  } else {
    marklineRadius =
      (markLineValue / radarMax) * parseFloat(radius) + (radius.toString().indexOf('%') !== -1 ? '%' : '');
  }
  // 阈值线
  markRadar.radius = marklineRadius;
  markRadar.splitLine.lineStyle.color = chartToken.errorColor;
  markRadar.indicator = new Array(radarKeys.length).fill({ name: '' });
}

function setMarkLine(baseOpt, iChartOpt, radarKeys) {
  const { markLine } = iChartOpt;
  if (markLine) {
    const markRadar = getMarkRadarOption();
    setMarkCenterAndRadius(markRadar, baseOpt);
    const isThreshold = !!(isObject(markLine) && markLine?.threshold);
    isThreshold
      ? setCustomMarkLine(markRadar, baseOpt, iChartOpt, radarKeys)
      : setCommonMarkLine(markRadar, baseOpt, iChartOpt, radarKeys);
    baseOpt.radar.push(markRadar);
  }
}

export { setRadar, getRadarKeys, getRadarMax, setTooltip, setMarkLine };
