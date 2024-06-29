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
import cloneDeep from '../../util/cloneDeep';

// 多层级的对象合并 函数
function assignObj(target = {}, sources = {}) {
  const itemObj = target || {};
  if (typeof target !== 'object' || typeof sources !== 'object' || !sources) {
    return sources;
  }
  for (const key in sources) {
    if (Object.prototype.hasOwnProperty.call((target || {}), key)) {
      itemObj[key] = assignObj(target[key], sources[key]);
    }
    else {
      itemObj[key] = sources[key];
    }
  }
  return itemObj;
}

// 图表可选择能力
class WcagObserver {
  constructor(mode, theme, echartsIns, eChartOption) {
    this.echartsIns = echartsIns;
    this.eChartOption = eChartOption;

    this.focusedOption = {}; // 聚焦框体配置项
    this.theme = theme;
    this.mode = mode; // 选择模式'single' | 'series' | 'auto'
    this.curMode = undefined; // 当前模式
    this.clickFlag = false; // 模拟阻止点击冒泡
    this.nextParam = { // 键盘tab需要的参数
      componentType: 'series',
      seriesIndex: 0,
      dataIndex: 0,
      seriesType: ''
    };

    this.focused = false; // 图表是否被tab聚焦

    this.onDocClick = this.docClick.bind(this)
    this.onKeyUp = this.keyUp.bind(this)
    this.onSeriesClick = this.seriesClick.bind(this)

    this.addSelectMode(mode);
  }

  // 单数据选中
  setSingleSelectedStyle(param) {
    const subTypeList = ['line', 'scatter', 'radar'];
    let rect = {};
    this.curMode = 'single';
    if (param?.dataIndex === undefined && this.mode === 'auto') {
      this.setSeriesSelectedStyle(param);
      return;
    }
    const node = this.echartsIns.getModel().getSeriesByIndex(param.seriesIndex).getData()._graphicEls[param.dataIndex];
    if (subTypeList.includes(param.seriesType)) {
      rect = {
        x: node.x - node._sizeX - 4,
        y: node.y - node._sizeY - 4,
        width: node._sizeX * 2 + 8,
        height: node._sizeY * 2 + 8,
      };
    }
    else {
      rect = node._rectStroke || node._rect || node.path?.getBoundingRect();
    }
    this.setCommonOptionByRectList([rect], param);
  }

  // 系列选中
  setSeriesSelectedStyle(param) {
    const subTypeList = ['line', 'scatter', 'radar'];
    let rectList = [];
    this.curMode = 'series';
    const seriesModel = this.echartsIns.getModel().getSeriesByIndex(param.seriesIndex);

    if (subTypeList.includes(seriesModel.subType)) {
      const graphicList = seriesModel.getData()._graphicEls;
      rectList = graphicList.filter(t => !!t).map(node => {
        return {
          x: node.x - node._sizeX - 4,
          y: node.y - node._sizeY - 4,
          width: node._sizeX * 2 + 8,
          height: node._sizeY * 2 + 8,
        };
      });
    }
    else {
      rectList = seriesModel.getData()._graphicEls
        .map(t => t._rectStroke || t._rect || t.path?.getBoundingRect())
        .filter(t => !!t);
    }
    this.setCommonOptionByRectList(rectList, param);
  }

  setCommonOptionByRectList(rectList, eventParam) {
    this.focusedOption = {
      series: []
    };
    const pointList = [];
    const lineList = [];
    rectList.forEach(rect => {
      const list = [
        {
          x: rect.x,
          y: rect.y
        },
        {
          x: rect.x + rect.width,
          y: rect.y
        },
        {
          x: rect.x,
          y: rect.y + rect.height
        },
        {
          x: rect.x + rect.width,
          y: rect.y + rect.height
        },
      ];
      const lines = [
        [
          { x: rect.x, y: rect.y },
          { x: rect.x + rect.width, y: rect.y }
        ],
        [
          { x: rect.x + rect.width, y: rect.y },
          { x: rect.x + rect.width, y: rect.y + rect.height }
        ],
        [
          { x: rect.x + rect.width, y: rect.y + rect.height },
          { x: rect.x, y: rect.y + rect.height }
        ],
        [
          { x: rect.x, y: rect.y + rect.height },
          { x: rect.x, y: rect.y }
        ]
      ];
      pointList.push(...list);
      lineList.push(...lines);
    });
    
    const markColor = this.theme.match(/dark/gi) ? '#fff' : '#252b3a';
    this.focusedOption.series[eventParam.seriesIndex] = {
      data: [],
      markPoint: {
        symbol: 'circle',
        silent: true,
        symbolSize: 6,
        blur: {
          itemStyle: {
            opacity: 1
          }
        },
        itemStyle: {
          borderWidth: 1,
          borderColor: markColor,
          color: '#fff'
        },
        data: pointList,
        animation: false
      },
      markLine: {
        silent: true,
        symbol: 'none',
        lineStyle: {
          color: markColor
        },
        blur: {
          lineStyle: {
            opacity: 1
          }
        },
        emphasis: {
          disabled: true
        },
        data: lineList,
        animation: false
      }
    };
  }

  // 给图表加上可选择能力'single' | 'series' | 'auto'
  addSelectMode(focusedMode) {
    let isClick = false;
    const chartDom = this.echartsIns.getDom();
    chartDom.setAttribute('tabindex', 0);
    chartDom.addEventListener('focus', () => {
      if(isClick) return;
      this.focused = true;
      chartDom.classList.add('chart-focus');
      this.seriesClick(this.nextParam);
    });
    chartDom.addEventListener('blur', () => {
      this.focused = false;
      chartDom.classList.remove('chart-focus');
      this.docClick();
    });

    chartDom.addEventListener('mousedown', () => {
      isClick = true;
      setTimeout(() => {
        isClick = false;
      }, 200);
    });

    this.mode = focusedMode;
    this.echartsIns.on('click', 'series', this.onSeriesClick);
    document.addEventListener('click', this.onDocClick);
    document.addEventListener('keyup', this.onKeyUp);
  }

  unobserve() {
    document.removeEventListener('click', this.onDocClick);
    document.removeEventListener('keyup', this.onKeyUp);
    this.echartsIns.off('click', this.onSeriesClick);
  }

  docClick() {
    if (!this.clickFlag) {
      this.focusedOption = {};
      this.curMode = '';
      this.updateOption();
    }
  };

  keyUp(event) { // 键盘tab事件
    if (!this.focused) return;

    const { seriesIndex, dataIndex } = this.nextParam;
    const isNext = event.key === 'ArrowRight' || event.key === ' ';
    const isPrev = event.key === 'ArrowLeft';
    if (event.key === 'Tab') {
      event.stopPropagation();
      return;
    }

    if (isNext || isPrev) {
      event.stopPropagation();
      const curMode = this.curMode;
      if (curMode === 'single') {
        const maxDataIndex = this.eChartOption.series[seriesIndex].data.length - 1;
        if (isNext) {
          if (dataIndex >= maxDataIndex) {
            this.nextParam.dataIndex = 0;
          }
          else {
            this.nextParam.dataIndex += 1;
          }
        }
        else if (isPrev) {
          if (dataIndex === 0) {
            this.nextParam.dataIndex = maxDataIndex;
          }
          else {
            this.nextParam.dataIndex -= 1;
          }
        }
      }
      else if (curMode === 'series') {
        const maxSeriesIndex = this.eChartOption.series.length - 1;
        if (isNext) {
          if (seriesIndex >= maxSeriesIndex) {
            this.nextParam.seriesIndex = 0;
          }
          else {
            this.nextParam.seriesIndex += 1;
          }
        }
        else if (isPrev) {
          if (seriesIndex === 0) {
            this.nextParam.seriesIndex = maxSeriesIndex;
          }
          else {
            this.nextParam.seriesIndex -= 1;
          }
        }
      }
      this.seriesClick(this.nextParam);
    }
  };

  seriesClick(param) {
    if (param.componentType !== 'series') {
      return;
    }
    param.event?.stop(); // 阻止冒泡触发docclick
    this.clickFlag = true;
    setTimeout(() => { // 阻止冒泡触发docclick
      this.clickFlag = false;
    }, 200);
    let type = this.mode;
    if (type === 'auto') {
      type = this.curMode === '' ? 'series' : 'single';
    }

    if (type === 'single') {
      this.setSingleSelectedStyle(param);
    }
    else if (type === 'series') {
      this.setSeriesSelectedStyle(param);
    }

    this.nextParam = {
      componentType: 'series',
      seriesIndex: param.seriesIndex,
      dataIndex: param.dataIndex,
      seriesType: param.seriesType
    };
    this.updateOption();
  };

  updateOption() {
    const option = cloneDeep(this.eChartOption);
    assignObj(option, this.focusedOption);
    this.echartsIns.setOption(option, { notMerge: true });
    setTimeout(() => {
      this.echartsIns.resize();
    });
  }
}

export default WcagObserver;
