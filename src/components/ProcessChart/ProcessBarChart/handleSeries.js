import { getColor } from '../../../util/color';
import { getTextWidth} from '../../../util/util';
import { baseOption, doubleBaseOption } from './BaseOption';
import cloneDeep from '../../../util/cloneDeep';
import { handleTheme } from './handleOption';
import Theme from '../../../feature/theme';
function setStateBarColor(data, stateColorGroup, successColor, stateList) {
  const min = stateList[0];
  const max = stateList[stateList.length - 1];
  // 最大值和最小值相等代表就一个值
  if (min.value === max.value) {
    const resState = min.state;
    return data < min.value ? successColor : stateColorGroup[resState];
  } else {
    if (data < min.value) {
      return successColor;
    }
    if (data > max.value) {
      const resState = max.state;
      return stateColorGroup[resState];
    }
    const len = stateList.length;
    let color;
    for (let i = 0; i < len; i++) {
      if (stateList[i].value >= data) {
        const index = i > 0 ? i - 1 : 0;
        const resState = stateList[index].state;
        color = stateColorGroup[resState];
        break;
      }
    }
    return color;
  }
}

function handleBarColor(params, iChartOpt, data, doubleSide, isTip = false) {
  const { theme, state, color } = iChartOpt;
  // 是否传了阈值设置
  if (state) {
    const stateColorGroup =  Theme.color.state ;
    const successColor = stateColorGroup.success;
    // 值与状态对应数组
    const stateList = [];
    for (const k in state) {
      const stateItem = {
        state: k,
        value: state[k],
      };
      stateList.push(stateItem);
    }
    stateList.sort((a, b) => a.value - b.value);
    return setStateBarColor(
      isTip ? data[params.dataIndex].value : params.data.value,
      stateColorGroup,
      successColor,
      stateList,
    );
  } else {
    return getColor(color, doubleSide ? Math.floor(params.seriesIndex / 2) : params.dataIndex);
  }
}

function getMaxValLength(dataSet, data, iChartOpt, index) {
  let maxLength = 0;
  const innerUnit = iChartOpt.unit || iChartOpt.unit === '' ? iChartOpt.unit : '%';
  if (iChartOpt.minWidth) {
    data[index].children.forEach(dataItem => {
      const val = `${dataItem.value}${innerUnit}`;
      const len = getTextWidth(val, '14px');
      if (len >= maxLength) maxLength = len;
    });
  } else {
    dataSet[index].barData.forEach(item => {
      const val = `${item.value}${innerUnit}`;
      const len = getTextWidth(val, 14);
      if (len >= maxLength) maxLength = len;
    });
  }
  return maxLength;
}

function handleLabelFormatter(params, iChartOpt, dataSet, data, position, index = 0) {
  const name = params.name;
  const innerVal = iChartOpt.minWidth
    ? data[index].children[params.dataIndex].value
    : dataSet[index].barData[params.dataIndex].value;
  if (innerVal === null) return '';
  const innerUnit = iChartOpt.unit || iChartOpt.unit === '' ? iChartOpt.unit : '%';
  const val = `${innerVal}${innerUnit}`;
  return `{name${position}|${name}}\n{value${position}|${val}}`;
}

function handleLabel(baseOpt, iChartOpt, dataSet, data, doubleSide) {
  if (!doubleSide) {
    // 左侧label
    baseOpt.series[0].label.formatter = function (params) {
      return params.name;
    };
    // 右侧label
    baseOpt.series[1].label.formatter = function (params) {
      const innerVal = iChartOpt.minWidth ? data[params.dataIndex].value : dataSet[0].barData[params.dataIndex].value;
      if (innerVal === null) return '';
      const innerUnit = iChartOpt.unit || iChartOpt.unit === '' ? iChartOpt.unit : '%';
      return `${innerVal}${innerUnit}`;
    };
    // 标题文本显示省略
    if (iChartOpt.title) {
      Object.assign(baseOpt.series[0].label, iChartOpt.title);
    }
    // 右侧数据文本显示省略
    if (iChartOpt.text) {
      Object.assign(baseOpt.series[1].label, iChartOpt.text);
      const {formatter}=iChartOpt.text
      if (formatter){
        baseOpt.series[1].label.formatter=function (params){
          const {dataIndex}=params
          const inerParams={...params, value:data[dataIndex].value, data: data[dataIndex].value}
          return  formatter(inerParams)
        }
      }
    }
  } else {
    const colorBase =  Theme.color.base          
    // 左侧label
    baseOpt.series[1].label.formatter = function (params) {
      return handleLabelFormatter(params, iChartOpt, dataSet, data, 'Left');
    };
    const valWidth_l = getMaxValLength(dataSet, data, iChartOpt, 0);
    const valWidth_r = getMaxValLength(dataSet, data, iChartOpt, 1);
    baseOpt.series[1].label.rich.nameLeft.color = colorBase.subfont;
    baseOpt.series[1].label.rich.valueLeft.color = colorBase.font;
    baseOpt.series[1].label.offset = [-valWidth_l - 10, 9];
    baseOpt.series[3].label.rich.nameRight.color = colorBase.subfont;
    baseOpt.series[3].label.rich.valueRight.color = colorBase.font;
    baseOpt.series[3].label.offset = [valWidth_r + 10, 9];
    baseOpt.series[3].label.formatter = function (params) {
      return handleLabelFormatter(params, iChartOpt, dataSet, data, 'Right', 1);
    };
  }
}

function handleSeries(baseOpt, iChartOpt, color, dataSet, data, doubleSide) {
  baseOpt.series = doubleSide ? cloneDeep(doubleBaseOption.series) : cloneDeep(baseOption.series);
  if (doubleSide) {
    baseOpt.series[0].data = dataSet[0].barData;
    baseOpt.series[0].name = dataSet[0].name;
    baseOpt.series[0].itemStyle.color = getColor(color, 0);
    baseOpt.series[1].data = new Array(dataSet[0].barData.length).fill(dataSet[0].maxValue);
    baseOpt.series[2].data = dataSet[1].barData;
    baseOpt.series[2].name = dataSet[1].name;
    baseOpt.series[2].itemStyle.color = getColor(color, 1);
    baseOpt.series[3].data = new Array(dataSet[1].barData.length).fill(dataSet[1].maxValue);
  } else {
    baseOpt.series[0].data = dataSet[0].barData;
    baseOpt.series[1].data = new Array(dataSet[0].barData.length).fill(dataSet[0].maxValue);
    baseOpt.series[0].itemStyle.color = function (params) {
      return handleBarColor(params, iChartOpt, data, doubleSide);
    };
  }

  handleTheme(baseOpt)
  
  handleLabel(baseOpt, iChartOpt, dataSet, data, doubleSide);

  if (iChartOpt.barWidth) {
    baseOpt.series.forEach(item => {
      item.barWidth = iChartOpt.barWidth;
    });
  }
}

export { handleSeries, handleBarColor };
