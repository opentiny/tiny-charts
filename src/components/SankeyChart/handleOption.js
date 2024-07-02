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
import { getTextWidth } from '../../util/dom';
import merge from '../../util/merge';
import { getColor } from '../../util/color';

const initNodes = (nodes, links) => {
  let recordNode = {};
  let leafNode = [];
  nodes.forEach(node => {
    leafNode.push(node.name);
  });
  links.forEach(link => {
    let index = leafNode.findIndex(node => {
      return node === link.source;
    });
    if (index !== -1) { // 获取叶子节点
      leafNode.splice(index, 1);
    }
  });
  links.forEach(link => {
    // 非叶子节点
    recordNode[link.source] = (recordNode[link.source] || 0) + link.value;
    // 叶子节点
    leafNode.forEach((leaf) => {
      if (link.target === leaf) {
        recordNode[leaf] = (recordNode[leaf] || 0) + link.value;
      }
    });
  });
  nodes.forEach(node => {
    node.value = Math.max(node.value || 0, recordNode[node.name]);
  });
};

const isNameRepeat = (arr) => {
  let nameArr = [];
  arr.forEach((item, index) => {
    if (!nameArr.includes(item.name)) {
      nameArr.push(item.name);
    } else {
      throw Error('图表的nodes数据中定义了重复的name');
    }
  });
};

// 为每个节点矩形块配置颜色组，循环使用
const handleItemStyle = (iChartOption, baseOpt) => {
  const { color, itemStyle } = iChartOption;
  const data = baseOpt.series[0].data;
  // 配置节点及边框颜色。nodes.itemStyle>itemStyle>color
  data.forEach((item, index) => {
    item.itemStyle = {
      color: Array.isArray(color) ? getColor(color, index) : color,
      ...itemStyle,
      ...item.itemStyle
    };
  });
};

const judgeMaxText = (textArr, textArrange, nameFontSize, valueFontSize, data) => {
  let maxWidth = 0;
  textArr.forEach((item) => {
    data.forEach((val) => {
      if (item.name === val.name) {
        const { name, value } = item;
        const { label } = val;
        let textWidth;
        if (textArrange === 'horizontal') {
          textWidth = getTextWidth(name, Math.max(nameFontSize, label?.rich?.name?.fontSize || 0))
            + getTextWidth(value, Math.max(valueFontSize, label?.rich?.value?.fontSize || 0));
        } else {
          textWidth = Math.max(getTextWidth(name, Math.max(nameFontSize, label?.rich?.name?.fontSize || 0)),
            getTextWidth(value, Math.max(valueFontSize, label?.rich?.value?.fontSize || 0)));
        }
        if (textWidth > maxWidth) {
          maxWidth = textWidth;
        }
      }
    });
  });
  return maxWidth;
};

// 配置桑基图的chartPadding
export function padSize(padding, { baseOpt, userPadding }, centerName, leftNodeArr, rightNodeArr) {
  if (userPadding) {
    baseOpt.series[0].top = padding[0];
    baseOpt.series[0].right = padding[1];
    baseOpt.series[0].bottom = padding[2];
    baseOpt.series[0].left = padding[3];
  } else {
    const { label: { distance, textArrange = 'horizontal', rich: { name: { fontSize: nameFontSize }, value: { fontSize: valueFontSize } } }, orient = 'horizontal', levels, data } = baseOpt.series[0];
    // 确定左右两侧padding
    if (orient === 'horizontal') {
      if (levels[0].label.position === 'left') {
        baseOpt.series[0].left = judgeMaxText(leftNodeArr, textArrange, nameFontSize, valueFontSize, data) + distance * 3;
      }
      if (levels[levels.length - 1].label.position === 'right'
        || (levels.length < 2 && baseOpt.series[0].label.position === 'right')) {
        baseOpt.series[0].right = judgeMaxText(rightNodeArr, textArrange, nameFontSize, valueFontSize, data) + distance * 3;
      }
      // 根据中间的文本，确定topPadding
      if (centerName) {
        let centerNameFontSize = 0;
        let centerValueFontSize = 0;
        baseOpt.series[0].data.forEach((dataItem) => {
          if (dataItem.name === centerName) {
            centerNameFontSize = dataItem?.label?.rich?.name?.fontSize || 0;
            centerValueFontSize = dataItem?.label?.rich?.value?.fontSize || 0;
          }
        });
        if (textArrange === 'horizontal') {
          baseOpt.series[0].top = Math.max(nameFontSize, valueFontSize, centerNameFontSize, centerValueFontSize) + distance * 3;
        } else {
          baseOpt.series[0].top = Math.max(nameFontSize, centerNameFontSize) + Math.max(valueFontSize, centerValueFontSize) + distance * 3;
        }
      }
    }
  }
}

// 配置桑基图的label
export function setLabel(iChartOption, baseOpt) {
  const { label } = iChartOption;
  merge(baseOpt.series[0].label, label);
}

export function handleLineStyle(iChartOption) {
  const { lineStyle, data: { links }, emptyStatus = 'node' } = iChartOption;
  links.forEach((item) => {
    item.lineStyle = {
      ...lineStyle,
      ...item.lineStyle
    };
    if (!item.value && emptyStatus === 'node') { // 如果是空值且只展示节点，则隐藏连线
      item.lineStyle = {
        ...item.lineStyle,
        color: 'transparent'
      };
    }
  });
}

const setEmptyLimit = (nodes) => {
  let minVal = 2; // 空值的上限大小，如果出现比上限小的值，那就取比上限小的值
  nodes.forEach((item) => {
    if (item.value && item.value < minVal) {
      minVal = item.value;
    }
  });
  nodes.forEach(node => { // 补全空值
    if (!node.value) {
      node.value = minVal;
      node.empty = true;
    }
  });
};

const dataSort = (iChartOption) => {
  const { sortType = 'unset', data: { nodes } } = iChartOption;
  // 设置排序方式，默认不排序,就是按照数据出现的先后排序
  if (sortType !== 'unset') {
    nodes.sort((a, b) => {
      let val1 = a.empty ? 0 : a.value;
      let val2 = b.empty ? 0 : b.value;
      return sortType === 'ascend' ? (val1 - val2) : (val2 - val1);
    });
  }
};

const nodeLabelLayout = (label, baseOpt) => {
  const { textArrange = 'horizontal', formatter } = label;
  if (!formatter) {
    if (textArrange === 'horizontal') {
      baseOpt.series[0].label.formatter = (params) => { // name和value 横向排布
        return `{name|${params.name}} {value|${params.data.empty ? 0 : params.data.value}}`;
      };
    } else {
      baseOpt.series[0].label.formatter = (params) => { // name和value 纵向排布
        return `{name|${params.name}}\n{value|${params.data.empty ? 0 : params.data.value}}`;
      };
    }
  }
};

const compareNodeText = (iChartOption, baseOpt, that, instance) => {
  let overHide = false;
  if (iChartOption.label?.overHide) {
    overHide = true;
  }
  const { label: { textArrange = 'horizontal', rich: { name: { fontSize: nameFontSize }, value: { fontSize: valueFontSize } } },
  } = baseOpt.series[0];
  baseOpt && instance.setOption(baseOpt, true);
  let modal = instance.getModel().getSeriesByIndex(0).getData();
  let layoutArr = modal._itemLayouts;
  let labelHeight = 0;
  layoutArr.forEach((item, index) => {
    if (textArrange === 'horizontal') {
      labelHeight = Math.max(nameFontSize, valueFontSize,
        baseOpt.series[0].data[index].label?.rich?.name?.fontSize || 0,
        baseOpt.series[0].data[index].label?.rich?.value?.fontSize || 0);
    } else {
      labelHeight = Math.max(nameFontSize, baseOpt.series[0].data[index].label?.rich?.name?.fontSize || 0) + Math.max(valueFontSize, baseOpt.series[0].data[index].label?.rich?.value?.fontSize || 0);
    }
    if (labelHeight > item.dy && overHide) {
      baseOpt.series[0].data[index].label = {
        show: false
      };
    }
  });
  let centerName = ''; // 记录下中间的最高点的name值，计算topPadding
  let leftNodeArr = []; // 最左侧节点集合
  let rightNodeArr = []; // 最右侧节点集合
  let nodeInfo; //节点信息
  let minY = 999;
  let maxDepth = layoutArr[layoutArr.length - 1].depth;
  layoutArr.forEach((item, index) => {
    nodeInfo = {
      name: baseOpt.series[0].data[index].name,
      value: baseOpt.series[0].data[index].value,
      text: baseOpt.series[0].data[index].name + ' ' + baseOpt.series[0].data[index].value
    };
    if (item.depth === 0) {
      leftNodeArr.push(nodeInfo);
    } else if (item.depth === maxDepth) {
      rightNodeArr.push(nodeInfo);
    } else if (item.depth < maxDepth && item.depth > 0) {
      baseOpt.series[0].data[index].label = {
        position: 'top', // 中间的节点文本展示在节点上方
        ...baseOpt.series[0].data[index].label
      };
      if (item.y < minY) {
        minY = item.y;
        centerName = baseOpt.series[0].data[index].name;
      }
    }
  });
  that.upDateOption(centerName, leftNodeArr, rightNodeArr);
  baseOpt && instance.setOption({}, true);
};

export { handleItemStyle, setEmptyLimit, dataSort, nodeLabelLayout, compareNodeText, isNameRepeat, initNodes };