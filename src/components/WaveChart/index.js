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
import BaseChart from '../BaseChart';
import { initContainer } from './insert';
import RadarChart from '../RadarChart';
import CoreChart from '../../core';
import defendXSS from '../../util/defendXSS';
import { percentToDecimal } from '../../util/math';
import { getTextWidth } from '../../util/dom';
import { isArray } from '../../util/type';
import { insertStateDom, removeStateDom } from '../../util/init/insert';
import chartToken from './chartToken';
import { CHART_TYPE } from '../../util/constants';
import Token from '../../feature/token';
import { codeToRGB } from '../../util/color';
import merge from '../../util/merge';

const LARGE_SYMBOL_SIZE = 12;
const SMALL_SYMBOL_SIZE = 8;
const LARGE_BORDER_WIDTH = 2;
const SMALL_BORDER_WIDTH = 1.5;
const LARGE_LINE_WIDTH = 3;
const SMALL_LINE_WIDTH = 2;
const HEALTH_RGBA = '130,204,51,';
const WARNING_RGBA = '255,183,0,';
const RISK_RGBA = '242,48,48,';

export default class WaveChart extends BaseChart {

  static name = CHART_TYPE.WAVE

  constructor() {
    super();
    // 图表渲染容器
    this.dom = null;
    // 图表配置项
    this.option = null;
    // 图表所需数据
    this.data = null;
    // 自定义dom容器
    this.domContainer = null;
    // 自定义innerdom容器
    this.innerContainer = null;
    // radar容器
    this.rContainer = null;
    // loading状态容器
    this.loadingContainer = null;
    // 位置
    this.center = null;
    // 大小
    this.radius = null;
    // 阈值线的数量
    this.splitNumber = null;
    // 坐标系配置
    this.radar = null;
    // 刻度值的最大值
    this.radarMax = null;
    // loading文本容器
    this.loadingDom = null;
    // 图表容器的宽高变化监听器
    this.resizeObserver = null;
    // 是否显示波纹
    this.showWave = null;
    // 是否开启自适应
    this.adaptive = false;
  }

  // 初始化图表渲染容器
  init(dom) {
    this.dom = dom;
  }

  // 图表渲染回调
  render() {
    this.data = this.option.data;
    // 渲染dom
    this.initDom();
    // 位置定位
    this.setPosition();
    // 初始化Radar
    this.data && this.setRadar();
    this.setResizeObserver();
    this.renderCallBack && this.renderCallBack(this);
  }

  // 初始化图表渲染配置
  setSimpleOption(chartName, option) {
    this.option = option;
  }

  // 渲染dom
  initDom() {
    initContainer(this.dom);
    this.domContainer = this.dom.getElementsByClassName('wave_dom_container')[0];
    this.innerContainer = this.dom.getElementsByClassName('wave_inner_container')[0];
    this.rContainer = this.dom.getElementsByClassName('wave_radar_container')[0];
    this.loadingContainer = this.dom.getElementsByClassName('wave_loading_container')[0];
    this.loadingDom = this.dom.getElementsByClassName('loading_dom')[0];
  }

  // 设置dom位置
  setPosition() {
    const basePosition = {
      center: ['50%', '50%'],
      radius: ['35%', '70%'],
    };
    const position = this.option.position;
    this.radius = (position && position.radius) || basePosition.radius;
    this.center = (position && position.center) || basePosition.center;

    // 1.自适应处理中心点位置，开启adaptive就会强行覆盖用户的radius
    if (this.option.adaptive && this.option.theme.includes('cloud')) {
      this.radarWidth = Math.max(200, this.rContainer.clientWidth * 0.8);
      this.radius = `${(Math.max(200, this.rContainer.clientWidth * 0.8) / this.rContainer.clientWidth * 100).toString()}%`
    }

    // 处理只有外半径的情况 仅波纹图 前提是百分比 内环一定是外环的一半才行
    if (!isArray(this.radius)) {
      const innerRadius = `${((percentToDecimal(this.radius) / 2) * 100).toString()}%`;
      this.radius = [innerRadius, this.radius];
    }
    const newPosition = this.center.map(item => {
      if (item.indexOf('px') === -1 && item.indexOf('%') === -1) {
        item = `${item}px`;
      }
      return item;
    });
    this.setPointAndLineStyle();
    const left = newPosition[0];
    const top = newPosition[1];
    const tokenConfig = Token.config;
    // 根据主题动态设置主副文本颜色token 前提得用规范的class
    this.domContainer.style = `--wave-text-color:${tokenConfig.titleTextColor};--wave-subtext-color:${tokenConfig.titleSubTextColor};`
    this.domContainer.style.left = left;
    this.domContainer.style.top = top;
    this.loadingContainer.style.left = left;
    this.loadingContainer.style.top = top;
    this.innerContainer.style.left = left;
    this.innerContainer.style.top = top;
  }

  // 设置雷达图点和线的样式随着尺寸自适应
  setPointAndLineStyle() {
    this.clientWidth = this.rContainer.clientWidth;
    this.clientHeight = this.rContainer.clientHeight;
    this.innerRadiusDecimal = percentToDecimal(this.radius[0]);
    this.outerRadiusDecimal = percentToDecimal(this.radius[1]);
    const trueWidth = Math.min(this.clientWidth, this.clientHeight) * this.outerRadiusDecimal;
    if (trueWidth > 280) {
      this.symbolSize = LARGE_SYMBOL_SIZE;
      this.borderitemStyleWidth = LARGE_BORDER_WIDTH;
      this.lineStyleWidth = LARGE_LINE_WIDTH;
    } else {
      this.symbolSize = SMALL_SYMBOL_SIZE;
      this.borderitemStyleWidth = SMALL_BORDER_WIDTH;
      this.lineStyleWidth = SMALL_LINE_WIDTH;
    }
  }

  // 初始化radar
  setRadar() {
    const { type = 'health', theme = 'light' } = this.option;
    const { axisLineColor, axisLabelColor, splitLineColor, axisNameColor } = chartToken;
    this.splitNumber = 3;
    this.radar = this.option.radar;
    this.radarMax = this.option.radarMax;
    this.radarMark = this.option.radarMark;
    // 创建图表实例
    const chartIns = new CoreChart();
    chartIns.init(this.rContainer);
    this.setAreaColor(type, this.splitNumber);
    const chartOption = {
      isWaveRadar: null,
      radarMark: false,
      radarMax: 100,
      position: {},
      legend: {
        show: false,
      },
      data: {
        label: {},
      },
      radar: {
        axisName: {
          formatter: indicatorName => {
            return `{a|${indicatorName}}`;
          },
          rich: {
            a: {
              color: axisNameColor,
              align: 'center',
              fontSize: 12,
              lineHeight: 12,
            },
          },
        },
        axisLabel: {
          color: axisLabelColor,
          showMinLabel: false,
          formatter: function (value) {
            return Math.round(value);
          }
        },
        axisLine: {
          lineStyle: {
            color: codeToRGB(axisLineColor, 0.1),
          },
        },
        splitLine: {
          show: false,
          lineStyle: {
            type: 'solid',
            color: splitLineColor,
          },
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: this.colorArr,
          },
        },
      },
      series: [
        {
          name: 'data',
          symbol: '',
          symbolSize: this.symbolSize,
          itemStyle: {
            borderWidth: this.borderitemStyleWidth,
          },
          lineStyle: {
            width: this.lineStyleWidth,
          },
        },
      ],
    };
    // 设置雷达图覆盖颜色
    if (type === 'health') {
      chartOption.color = Token.config.colorState.colorSuccess;
      chartOption.radar.axisLine.lineStyle.color = codeToRGB(Token.config.colorState.colorSuccess, 0.1);
    } else if (type === 'warning') {
      chartOption.color = Token.config.colorAlarms.colorAlarmSecondary;
      chartOption.radar.axisLine.lineStyle.color = codeToRGB(Token.config.colorAlarms.colorAlarmSecondary, 0.1);
    } else if (type === 'risk') {
      chartOption.color = Token.config.colorState.colorError;
      chartOption.radar.axisLine.lineStyle.color = codeToRGB(Token.config.colorState.colorError, 0.1);
    }
    // 雷达图数据为空时，显示分割线
    if (isArray(this.data)) {
      this.data.forEach(item => {
        chartOption.data.label[item] = 0;
      });
    } else {
      chartOption.data = this.data;
    }
    chartOption.isWaveRadar = theme.toLowerCase().indexOf('cloud-light') !== -1;
    theme && (chartOption.theme = this.option.theme);
    // 2.自适应尺寸到达200裁剪坐标和名称
    if (this.option.adaptive && this.option.theme.includes('cloud')) {
      if (this.radarWidth === 200) {
        this.radarMark = false;
        chartOption.radar.axisName.show = false
      }
    }
    this.radarMark && (chartOption.radarMark = this.radarMark);
    this.radarMax && (chartOption.radarMax = this.radarMax);
    chartOption.position.center = this.center;
    chartOption.position.radius = this.radius;
    chartOption.radar.splitNumber = this.splitNumber;

    // 是否显示背景
    this.showWave = this.option.showWave !== undefined ? this.option.showWave : true;
    if (!this.showWave) {
      chartOption.radar.splitArea.show = false;
      this.innerContainer.style.backgroundColor = '#fff';
      chartOption.radar.splitLine.show = true;
      chartOption.series[0].symbol = 'none';
      chartOption.series[0].lineStyle.width = 0;
      chartOption.series[0]['areaStyle'] = {
        opacity: 0,
      };
      chartOption.series[0]['emphasis'] = {
        areaStyle: {
          opacity: 0,
        },
      };
      this.innerContainer.style.display = 'none';
      chartOption['tooltip'] = { show: false };
    }
    merge(chartOption.radar, this.radar);
    chartIns.setSimpleOption(RadarChart, chartOption);
    // 开始渲染
    chartIns.render();
  }

  // 根据分割段和健康类型设置分割段颜色
  setAreaColor(type, splitNumber) {
    if (type === 'health') {
      this.rgba = HEALTH_RGBA;
    } else if (type === 'warning') {
      this.rgba = WARNING_RGBA;
    } else if (type === 'risk') {
      this.rgba = RISK_RGBA;
    }
    const arr = [];
    const base = type === 'risk' ? 0.08 : 0.1;
    for (let i = 1; i <= splitNumber + 1; i++) {
      const opacity = base * i;
      const rgba = `rgba(${this.rgba}${opacity})`;
      arr.push(rgba);
    }
    this.backgroundColor = arr.reverse().shift();
    this.colorArr = arr;
  }

  resizeDom() {
    this.setPointAndLineStyle();
    const loadingSvg = this.dom.getElementsByClassName('wave_loading_svg')[0];
    const scaleWidth = `${Math.min(this.clientWidth, this.clientHeight) * this.innerRadiusDecimal -
      Math.min(this.clientWidth, this.clientHeight) *
      (this.outerRadiusDecimal - this.innerRadiusDecimal) *
      (1 / this.splitNumber)
      }px`;
    const innerWidth = `${Math.min(this.clientWidth, this.clientHeight) * this.innerRadiusDecimal + 1}px`;
    this.domContainer.style.width = scaleWidth;
    this.domContainer.style.height = scaleWidth;
    this.innerContainer.style.width = innerWidth;
    this.innerContainer.style.height = innerWidth;
    this.innerContainer.style.backgroundColor = this.backgroundColor;
    this.loadingDom.style.width = scaleWidth;
    this.loadingDom.style.height = scaleWidth;
    loadingSvg.style.width = scaleWidth;
    loadingSvg.style.height = scaleWidth;
    this.setCenterDom(this.domContainer);
  }

  // 插入中心内容
  setCenterDom(domContainer) {
    if (!this.option.centerDom || !domContainer) return;
    this.insertCenterDom(this.option.centerDom, domContainer);
  }

  // 自定义centerDom插入容器dom
  insertCenterDom(centerDom, dom) {
    let htmlContent = typeof centerDom === 'function' ? centerDom(dom) : centerDom;
    if (!htmlContent || !dom) return;
    // 3.自适应设置中心文本字体大小
    if (this.option.adaptive && this.option.theme.includes('cloud')) {
      htmlContent = this.setTitleFontSize(htmlContent, dom);
    }
    // 插入内容（清空旧内容）
    if (typeof htmlContent === 'string') {
      dom.innerHTML = htmlContent;
    } else if (htmlContent instanceof Node) {
      dom.innerHTML = '';
      dom.appendChild(htmlContent);
    }
  }

  // 获取中心文本设置字体大小
  setTitleFontSize(htmlString, dom) {
    const waveSize = this.radarWidth;
    const domSize = this.domContainer.clientWidth;
    // 创建临时容器解析 HTML 字符串
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = htmlString;

    // 查找关键元素
    const valueEl = tempContainer.querySelector('.wave_value');
    const unitEl = tempContainer.querySelector('.wave_unit');
    const subTextEl = tempContainer.querySelector('.wave_subText');

    // 如果都不存在，直接返回原 HTML（避免报错）
    if (!valueEl && !unitEl && !subTextEl) {
      console.warn('DOM structure not as expected, skipping font size update');
      return htmlString;
    }
    // 获取主文本（用于计算字体大小）
    const valueText = valueEl && valueEl.textContent.trim(); // 如"96"
    const unitText = unitEl && unitEl.textContent.trim(); // 如"分"
    const fontSize = this.calculateFontSize(waveSize, domSize, valueText, unitText);

    // 更新各个部分的字体大小
    if (valueEl) {
      valueEl.style.fontSize = `${fontSize.mainFontSize}px`;
    }
    if (unitEl) {
      unitEl.style.fontSize = `${fontSize.subFontSize}px`;
    }
    if (subTextEl) {
      subTextEl.style.fontSize = `${fontSize.subFontSize}px`;
    }
    // 返回更新后的 HTML 字符串
    return tempContainer.innerHTML;
  }

  // 根据自适应规则计算中心文本字体
  calculateFontSize(waveSize, domSize, valueText, unitText) {
    // 1. 计算主文本最大可用宽度（dom直径的 80%）
    const maxMainTextWidth = domSize * 0.8;

    // 2. 根据尺寸确定主文本候选字号区间（从大到小）
    const getMainFontSizeRange = (size) => {
      if (size > 112) {
        return [48, 36, 32];
      } else {
        return [32, 24]; // 默认值，暂时用不上
      }
    };

    // 3. 确定副文本候选字号
    const getSubFontSize = (size) => {
      if (size >= 280) return 14;
      return 12;
    };

    // 4. 获取字号区间
    const mainSizes = getMainFontSizeRange(domSize);
    const subFontSize = getSubFontSize(waveSize);

    // 5. 尝试主文本每个字号，找到第一个不超宽的
    let mainFontSize = mainSizes[0]; // 默认最大字号
    let flag = false;
    for (const size of mainSizes) {
      const mainWidth = getTextWidth(valueText, size);
      const unitWidth = unitText ? getTextWidth(unitText, subFontSize) : 0;
      const totalWidth = mainWidth + unitWidth;
      if (totalWidth <= maxMainTextWidth) {
        flag = true
        mainFontSize = size;
        break;// 找到第一个合适的就停
      }
    }
    // 如果都不合适，用最小字号兜底
    if (!flag) mainFontSize = mainSizes[mainSizes.length - 1];
    return { mainFontSize, subFontSize };
  }

  // 图表渲染完成时回调
  onRenderReady(callback) {
    this.renderCallBack = callback;
  }

  // 监听容器变化
  setResizeObserver() {
    this.resizeObserver = new ResizeObserver(entries => {
      this.setPosition();
      this.resizeDom();
      this.setRadar();
    });
    this.resizeObserver.observe(this.dom);
  }

  // 图表刷新，刷新配置项
  refresh(option) {
    if (this.innerContainer) {
      this.innerContainer.style.display = 'block';
    }
    this.domContainer.innerHTML = '';
    this.innerContainer.innerHTML = '';
    this.option = option;
    this.data = option.data;
    this.centerDom = option.centerDom;
    this.setPosition();
    this.data && this.setRadar();
    this.resizeDom();
  }

  // 刷新图表自适应宽度
  setResize() {
    this.resizeDom();
  }

  // 图表刷新，仅刷新数据
  refreshData(data) {
    this.option.data = data;
    this.refresh(this.option);
  }

  // 加载状态
  showLoading(option) {
    if (this.loadingContainer) {
      this.domContainer.innerHTML = '';
      this.loadingDom.innerHTML = '';
      option = { theme: 'light', ...option };
      const text = option.text || '加载中...';
      const textSize = option.textSize || 24;
      const textShow = option.textShow === false ? false : true;
      const textColor = option.textColor || (option.theme.indexOf('dark') !== -1 ? '#FFFFFF' : '#808080');
      const centerDom = () => {
        const dom = `
                <div style="color: ${defendXSS(textColor)};font-size: ${defendXSS(textSize)}px;line-height: ${defendXSS(
          textSize,
        )}px;display: ${defendXSS(textShow ? 'block' : 'none')};letter-spacing: 0.5px;">
                    ${defendXSS(text)}
                </div>`;
        return dom;
      };
      this.insertCenterDom(centerDom, this.loadingDom);
      this.loadingContainer.style.display = 'block';
    } else {
      // 显示通用性loading
      insertStateDom(this.dom, 'loading', option);
    }
  }

  hideLoading() {
    this.closeLoading();
  }

  // 关闭加载
  closeLoading() {
    // 通用性loading也要关闭
    removeStateDom(this.dom, 'loading');
    if (this.loadingContainer) {
      this.loadingContainer.style.display = 'none';
    }
  }

  // 销毁图表
  uninstall() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    this.dom.innerHTML = '';
  }
}