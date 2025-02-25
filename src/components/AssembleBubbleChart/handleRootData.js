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
import { random } from '../../util/math';
import { CHARTTYPE } from './BaseOption';

function setChartPosition(polarInfo, chartInstance) {
  let radius = polarInfo.radius, widthDis, heightDis;
  const width = chartInstance.getWidth();
  const height = chartInstance.getHeight();

  const getNumber = (value, { callback1, callback2, callback3 }) => {
    let correctValue;
    if (typeof value !== 'number') {
      if (value.indexOf('%') !== -1) { // 有百分比的字符串数字
        correctValue = callback1(value);
      } else { // 无百分比的字符串数字
        correctValue = callback2(value);
      }
    } else { // 数值
      correctValue = callback3(value);
    }
    return correctValue;
  };

  radius = getNumber(radius, {
    callback1: (value) => value.substring(0, value.indexOf('%')) / 100,
    callback2: (value) => parseFloat(value) / Math.min(height, width),
    callback3: (value) => value / Math.min(height, width),
  });

  widthDis = getNumber(polarInfo.center[0], {
    callback1: (value) => width * (value.substring(0, value.indexOf('%')) / 100 - radius / 2),
    callback2: (value) => parseFloat(value),
    callback3: (value) => value,
  });

  heightDis = getNumber(polarInfo.center[1], {
    callback1: (value) => height * (value.substring(0, value.indexOf('%')) / 100 - radius / 2),
    callback2: (value) => parseFloat(value),
    callback3: (value) => value,
  });

  return { radius, widthDis, heightDis };
}

export function handleRootData(d3, { baseOption, chartInstance, iChartOption, chartType }) {
  // polar的信息会在index中被删除，此处需要储存一份用于计算节点坐标等。
  const polarInfo = cloneDeep(baseOption.polar);
  const { textStyle = {}, sortType = 'decline' } = iChartOption;
  let distance = iChartOption.distance;
  if (iChartOption.distance === undefined) {
    switch (chartType) {
      case CHARTTYPE.NON_NESTED:
        distance = 50;
        break;
      default:
        distance = 5;
        break;
    }
  }
  const stratify = (sourceData) => {
    let sortResult = d3
      .stratify()
      .parentId(function (d) {
        return d.id.substring(0, d.id.lastIndexOf('.'));
      })(sourceData)
      .sum(function (d) {
        return d.value || 0;
      });
    switch (sortType) {
      case 'decline': // 降序（中心向外，球尺寸依次减小）
        sortResult = sortResult.sort((a, b) => b.value - a.value);
        break;
      case 'ascend': // 升序（中心向外，球尺寸依次增大）
        sortResult = sortResult.sort((a, b) => a.value - b.value);
        break;
      case 'unset':  // 不设置
        break;
      default:
        break;
    }
    return sortResult;
  };
  // 给baseOptionion设置renderItem,且只能设置一次，多次则会造成视图重叠
  baseOption.series[baseOption.series.length - 1].renderItem = (params, api) => {
    const displayRoot = stratify(baseOption.dataset[0].source);
    const context = params.context;
    if (!context.layout) {
      context.layout = true;
      context.nodes = {};
      d3
        .pack()
        .size([api.getWidth() - 2, api.getHeight() - 2])
        .padding(distance)(displayRoot);
      displayRoot.descendants().forEach(node => { context.nodes[node.id] = node; });
    }
    const node = context.nodes[api.value('id')];
    if (!node || node.r <= 0) {
      return;
    }
    // 设置label值是否显示，若有嵌套则不显示，否则显示
    const nodeName = (!node.children || !node.children.length) ? node.data.label : '';
    const { radius, widthDis, heightDis } = setChartPosition(polarInfo, chartInstance);
    return {
      type: 'circle',
      // 定义球的坐标及半径
      shape: {
        cx: node.x * radius + widthDis,
        cy: node.y * radius + heightDis,
        // 若移动页面使得球的半径小于0时则取反
        r: node.r * radius > 0 ? node.r * radius : -node.r * radius,
      },
      transition: ['shape'],
      z2: api.value('depth') * 2,
      // 定义球的文本信息等
      textContent: {
        type: 'text',
        style: {
          text: (node.depth !== 0 && node.data.showLabel) ? (textStyle.formatter && textStyle.formatter(node) || nodeName) : '',
          fontFamily: 'Arial',
          width: node.r,
          height: node.r,
          borderRadius: node.r,
          // 文本溢出显示
          overflow: 'visible',
          fontSize: Math.max(node.r / 3, 12),
          fill: chartType !== CHARTTYPE.NESTED ? '#ffffff' : node.data.textColor, // 设计稿白主题默认白色
          ...textStyle
        },
      },
      // 设置文本显示的位置
      textConfig: { position: 'inside' },
      style: {
        // 设置球的边框色
        stroke: node.data.borderColor,
        // 设置球的背景色
        fill: node.data.color,
      },
      // 设置球的跳动范围
      keyframeAnimation: {
        duration: 3000,
        loop: true,
        delay: random() * 2000,
        keyframes: [
          { y: -3, percent: 0.5, easing: 'cubicOut' },
          { y: 0, percent: 1, easing: 'bounceOut' },
          { x: -3, percent: 0.5, easing: 'cubicOut' },
          { x: 0, percent: 1, easing: 'bounceOut' },
        ],
      },
    };
  };
}


