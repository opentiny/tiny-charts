import { lightColorGroup, darkColorGroup } from './color';
import  cloneDeep from './cloneDeep';

/**
 * 设置默认主题
 * @param {外部传入的配置} iChartOption
 */
function setDefaultTheme(iChartOption) {
  iChartOption.theme = iChartOption.theme || 'light';
}

/**
 * 设置默认颜色集合
 * @param {外部传入的配置} iChartOption
 */
function setDefaultColor(iChartOption) {
  if (!iChartOption.color) {
    const theme = iChartOption.theme;
    switch (theme) {
      case 'light':
        iChartOption.color = cloneDeep(lightColorGroup);
        break;
      default:
        iChartOption.color = cloneDeep(darkColorGroup);
        break;
    }
  }
}

/**
 * 线性图/条形图专用，设置默认x轴Key值,默认取第一个数据的第一个Key
 * @param {外部传入的配置} iChartOption
 */
function setDefaultXAxis(iChartOption) {
  const data = iChartOption.data;
  if (data && data.length > 0) {
    const keys = Object.keys(data[0]);
    for (let i = 0; i < keys.length; i++) {
      if (typeof iChartOption.xAxis == 'object') {
        iChartOption.xAxis.data = keys[i];
      } else {
        iChartOption.xAxis = keys[i];
      }
      break;
    }
  }
}

/**
 * 线性图/条形图专用---设置图表的四周padding值
 * @param {外部传入的配置} iChartOption
 */
function setChartPadding(iChartOption) {
  const defaultPadding = [50, 20, 50, 20];
  if (!iChartOption.chartPadding) {
    iChartOption.chartPadding = defaultPadding;
  } else if (iChartOption.chartPadding.length === 1) {
    iChartOption.chartPadding = [iChartOption.chartPadding[0], 20, iChartOption.chartPadding[0], 20];
  } else if (iChartOption.chartPadding.length === 2) {
    iChartOption.chartPadding = [
      iChartOption.chartPadding[0],
      iChartOption.chartPadding[1],
      iChartOption.chartPadding[0],
      iChartOption.chartPadding[1],
    ];
  } else if (iChartOption.chartPadding.length === 3) {
    iChartOption.chartPadding = [
      iChartOption.chartPadding[0],
      iChartOption.chartPadding[1],
      iChartOption.chartPadding[2],
      iChartOption.chartPadding[1],
    ];
  }
}

/**
 * 设置图表的Legend属性
 * @param {外部传入的配置} iChartOption
 */
function setDefaultLegend(iChartOption) {
  if (!iChartOption.legend) {
    iChartOption.legend = {
      show: true,
      position: {
        left: 'center',
        bottom: 14,
      },
      orient: 'horizontal',
    };
  }
  if (iChartOption.legend.show === undefined) {
    iChartOption.legend.show = false;
  }
  if (!iChartOption.legend.orient) {
    iChartOption.legend.orient = 'horizontal';
  }
  if (!iChartOption.legend.position) {
    iChartOption.legend.position = {
      left: 'center',
      bottom: 15,
    };
  }
}

/**
 * 设置图表区域缩放功能
 * @param {外部传入的配置} iChartOption
 */
function setDefaultDataZoom(iChartOption) {
  if (!iChartOption.dataZoom) {
    iChartOption.dataZoom = {
      show: false,
      position: {
        left: 40,
        bottom: 18,
      },
    };
  }
  if (iChartOption.dataZoom.show === undefined) {
    iChartOption.dataZoom.show = false;
  }
  if (!iChartOption.dataZoom.position) {
    iChartOption.dataZoom.position = {
      left: 'center',
      bottom: 20,
    };
  }
}

function setIChartOption(iChartOption) {
  setDefaultTheme(iChartOption);
  setDefaultColor(iChartOption);
  setDefaultXAxis(iChartOption);
  setChartPadding(iChartOption);
  setDefaultLegend(iChartOption);
  setDefaultDataZoom(iChartOption);
  return iChartOption;
}

export default setIChartOption;
