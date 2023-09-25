import cloneDeep from '../../../util/cloneDeep';
import max from '../../../util/sort/max';
import { isObject } from '../../../util/type';
const seriesUnit = {
  name: '',
  type: 'bar',
  zlevel: 2,
  barWidth: 20,
  stack: 'total',
  itemStyle: {
    color: '',
  },
  emphasis: {
    disabled: true,
  },
  label: {
    show: true,
    color: '',
  },
  data: [],
};

const lastSeriesUnit = {
  // 右侧显示的数值
  name: 'background',
  type: 'bar',
  barWidth: 20,
  barGap: '-100%',
  silent: true,
  itemStyle: {
    color: '',
    borderRadius: [0, 4, 4, 0],
  },
  emphasis: {
    disabled: true,
  },
  label: {
    show: true,
    color: '',
    offset: [0, -24],
    position: 'insideTopRight',
    fontSize: 14,
    formatter: () => {
      return '';
    },
    overflow: 'truncate',
  },
  data: [],
};

function getSumValueMax(iChartOption, data) {
  let sumValueMax;
  const sumValue = [];
  data.forEach(el => {
    let _sumValue = 0;
    el.children.forEach(child => {
      if (child.value) {
        _sumValue += child.value;
      }
    });
    sumValue.push(_sumValue);
  });
  sumValueMax = max(sumValue);
  if (iChartOption.calibrationValue) {
    if (iChartOption.calibrationValue > sumValueMax) sumValueMax = iChartOption.calibrationValue;
  }

  return {
    sumValueMax,
    sumValue,
  };
}

function handlelastSeriesData(sumValueObj, dataLength) {
  return new Array(dataLength).fill(sumValueObj.sumValueMax);
}

function handleLeftLabel(baseOption) {
  baseOption.series[0].label.formatter = function (params) {
    return params.name;
  };
}

function handleRightLabel(baseOption, iChartOption, sumValueObj) {
  const { sumValueMax, sumValue } = sumValueObj;
  baseOption.series[baseOption.series.length - 1].label.formatter = function (params) {
    if (iChartOption.text && iChartOption.text.labelText) return iChartOption.text.labelText[params.dataIndex];
    if (iChartOption.minWidth) return `${sumValue[params.dataIndex]}`;
    if (iChartOption.unit) return `${sumValue[params.dataIndex]}${iChartOption.unit}`;
    return `${sumValue[params.dataIndex]}`;
  };
}

function handleLabel(baseOption, iChartOption, dataSet) {
  const seriesLen = baseOption.series.length;
  baseOption.series.forEach((serie, index) => {
    if (index > 0 && index < seriesLen - 1)
      serie.label.formatter = function (params) {
        if (iChartOption.minWidth)
          return isObject(dataSet[params.seriesIndex - 1][params.dataIndex])
            ? dataSet[params.seriesIndex - 1][params.dataIndex].value
            : dataSet[params.seriesIndex - 1][params.dataIndex]?dataSet[params.seriesIndex - 1][params.dataIndex]:'';
        if (params.value === 0) return '';
        return params.value;
      };
  });
}

function handleLimitData(iChartOption, data, limitValue) {
  let sumValueMax;
  const sumValue = [];
  data.forEach(el => {
    let _sumValue = 0;
    el.children.forEach(child => {
      child.value < limitValue ? (_sumValue += child.value === 0 ? 0 : limitValue) : (_sumValue += child.value);
    });
    sumValue.push(_sumValue);
  });

  sumValueMax = max(sumValue);
  if (iChartOption.calibrationValue) {
    sumValueMax < iChartOption.calibrationValue
      ? (sumValueMax = iChartOption.calibrationValue)
      : (sumValueMax = parseInt(sumValueMax / 0.8));
  }

  return {
    sumValueMax,
    sumValue,
  };
}

function setBarBordRadius(dataSet, barName) {
  // 每行的总数据
  const total = [];
  barName.forEach((i, rowIndex) => {
    const rowData = [];
    dataSet.forEach((item, columnIndex) => {
      if (item[rowIndex]) {
        const dataInfo = {
          columnIndex,
          rowIndex,
          value: item[rowIndex],
        };
        rowData.push(dataInfo);
      }
    });
    total.push(rowData);
  });
  total.forEach((to, index) => {
    const tolen = to.length;
    if (tolen !== 0) {
      // 每行只有一个有效数据
      if (tolen === 1) {
        dataSet[to[0].columnIndex][to[0].rowIndex] = {
          value: dataSet[to[0].columnIndex][to[0].rowIndex],
          itemStyle: {
            borderRadius: [4, 4, 4, 4],
          },
        };
      } else {
        dataSet[to[0].columnIndex][to[0].rowIndex] = {
          value: dataSet[to[0].columnIndex][to[0].rowIndex],
          itemStyle: {
            borderRadius: [4, 0, 0, 4],
          },
        };
        dataSet[to[to.length - 1].columnIndex][to[to.length - 1].rowIndex] = {
          value: dataSet[to[to.length - 1].columnIndex][to[to.length - 1].rowIndex],
          itemStyle: {
            borderRadius: [0, 4, 4, 0],
          },
        };
      }
    }
  });
}

function handleSpecialSeriesData(baseOption, iChartOption, data, dataSet) {
  // 最大的标定值
  const sumValueObj = getSumValueMax(iChartOption, data);
  const seriesNameData = new Array(data.length).fill(0);
  const lastSeriesUnitData = handlelastSeriesData(sumValueObj, data.length);
  const seriesLen = baseOption.series.length;
  baseOption.series[0].data = seriesNameData;
  baseOption.series[seriesLen - 1].data = lastSeriesUnitData;
  baseOption.series.forEach((ser, serIndex) => {
    if (serIndex > 0 && serIndex < seriesLen - 1) ser.data = dataSet[serIndex - 1];
  });
  // 处理左侧的文本显示
  handleLeftLabel(baseOption);
  if (iChartOption.minWidth) {
    const minWidth = parseInt(iChartOption.minWidth) / 100;
    const limitValue = parseInt(sumValueObj.sumValueMax * minWidth);
    const limitData = [];
    dataSet.forEach(dataItem => {
      const limitDataItem = [];
      dataItem.forEach(val => {
        if (!val) {
          limitDataItem.push(val);
        } else {
          if (isObject(val)) {
            val.value < limitValue
              ? limitDataItem.push({ ...val, value: val.value === 0 ? 0 : limitValue })
              : limitDataItem.push(val);
          } else {
            val < limitValue ? limitDataItem.push(val === 0 ? 0 : limitValue) : limitDataItem.push(val);
          }
        }
      });
      limitData.push(limitDataItem);
    });
    const len = baseOption.series.length - 1;
    baseOption.series.forEach((series, seriesIndex) => {
      if (seriesIndex > 0 && seriesIndex < len) series.data = limitData[seriesIndex - 1];
    });
    const limitDataObj = handleLimitData(iChartOption, data, limitValue);
    const limitLastSeriesUnitData = handlelastSeriesData(limitDataObj, data.length);

    // // 对最后的背景进行重新赋值
    baseOption.series[len].data = limitLastSeriesUnitData;
  }
  // 处理右侧的文本显示
  handleRightLabel(baseOption, iChartOption, sumValueObj);
  // 处理数据的文本显示,当值为0的时候的label不显示
  handleLabel(baseOption, iChartOption, dataSet);
}

function handleBarWidth(baseOption, iChartOption) {
  if (iChartOption.barWidth) {
    baseOption.series.forEach(serie => {
      serie.barWidth = iChartOption.barWidth;
    });
  }
}

export function handleLabelStyle(baseOption, iChartOption) {
  const len = baseOption.series.length;
  // 标题文本样式
  if (iChartOption.title) {
    Object.assign(baseOption.series[0].label, iChartOption.title);
  }
  // 中间的图元的文本样式
  if (iChartOption.label) {
    baseOption.series.forEach((serie, serieIndex) => {
      if (serieIndex > 0 && serieIndex < len - 1) Object.assign(serie.label, iChartOption.label);
    });
  }
  // 右侧数据文本样式
  if (iChartOption.text) {
    Object.assign(baseOption.series[len - 1].label, iChartOption.text);
  }
}

export function handleSeries(baseOption, iChartOption, data) {
  const typeName = [];
  const barName = [];
  const dataSet = [];
  if (data && data.length !== 0) {
    data.forEach(element => {
      barName.push(element.name);
    });
    data[0].children.forEach(el => {
      typeName.push(el.type);
    });
    // 系列数据总和的最大值
    const typeNameLen = typeName.length;
    // 对每个系列进行分别设置
    typeName.forEach((type, index) => {
      // 每个单独的系列数据
      const seriesUnitData = [];
      data.forEach(child => {
        const value = child.children.find(el => el.type === type).value;
        seriesUnitData.push(value);
      });
      dataSet.push(seriesUnitData);
      const _seriesUnit = cloneDeep(seriesUnit);
      _seriesUnit.name = type;
      baseOption.series.push(_seriesUnit);
      // 针对最后的背景和右侧的文本进行特殊处理
      if (index === typeNameLen - 1) {
        baseOption.series.push(lastSeriesUnit);
      }
    });
    // 处理堆叠情况下图表的两端圆角情况
    setBarBordRadius(dataSet, barName);
    // 处理宽度
    handleBarWidth(baseOption, iChartOption);
    handleSpecialSeriesData(baseOption, iChartOption, data, dataSet);
  }
}
