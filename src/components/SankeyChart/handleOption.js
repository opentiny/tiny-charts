import tooltip from '../../option/config/tooltip';
import defendXSS from '../../util/defendXSS';
// 配置桑基图是否可以拖动
export function isMove(draggable, baseOpt) {
  // 设置默认值true
  if (draggable === undefined) {
    draggable = true;
  }
  baseOpt.series[0].draggable = draggable;
}

function handleTooltip(params) {
  if (params.data.value !== 0 && params.data.valueBfb !== '0%') {
    let htmlString = '';
    if (params.name.includes('>')) {
      params.name = params.name.replace('>', '---');
    }
    const value = params.data.value || params.value;
    htmlString +=
      `<span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">${defendXSS(params.name)}</span>` +
      '<br/>' +
      '<span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">' +
      'value' +
      `  :  ${defendXSS(value)}</span>`;
    return htmlString;
  }
}

function handleSankeyFormatter(formatter, SkTooltip) {
  if (formatter) {
    SkTooltip.formatter = formatter;
  } else {
    SkTooltip.formatter = params => {
      // 如果是虚拟节点则不展示toolTip
      let html = '';
      html = handleTooltip(params);
      return html;
    };
  }
}

// 配置桑基图的自定义悬浮提示框
export function setTooltip(iChartOption, formatter) {
  const SkTooltip = tooltip(iChartOption);
  handleSankeyFormatter(formatter, SkTooltip);
  SkTooltip.trigger = 'item';
  return SkTooltip;
}

// 配置桑基图的chartPadding
export function padSize(padding, baseOpt) {
  baseOpt.series[0].top = padding[0];
  baseOpt.series[0].right = padding[1];
  baseOpt.series[0].bottom = padding[2];
  baseOpt.series[0].left = padding[3];
}

// 计算桑基图的每列的value总和，展示每个节点的百分比
export function sumBfb(links, nodes) {
  // sourceData是depth为0即最左侧的节点数组
  let sourceData = [];
  links.forEach(item => {
    if (!sourceData.includes(item.source)) {
      sourceData.push(item.source);
    }
  });
  links.forEach(item => {
    if (sourceData.includes(item.target)) {
      sourceData = sourceData.filter(items => {
        return items !== item.target;
      });
    }
  });
  // valueSum是value总和
  let valueSum = 0;
  nodes.forEach(itemn => {
    sourceData.forEach(items => {
      if (items === itemn.name) {
        valueSum += itemn.value;
      }
    });
  });
  // valueBfb是对应数值的百分比
  nodes.forEach(itemn => {
    if (!itemn.value) {
      itemn.value = 0;
    }
    itemn.valueBfb = (itemn.value * 100) / valueSum;
    itemn.valueBfb = itemn.valueBfb.toFixed(0);
    itemn.valueBfb += '%';
  });
}

// 配置节点矩形的宽度及每列间距
export function setWidthSpace(widthSpace, baseOpt) {
  if (!widthSpace || widthSpace.length === 0) {
    widthSpace = [10, 30];
  }
  baseOpt.series[0].nodeWidth = widthSpace[0];
  baseOpt.series[0].nodeGap = widthSpace[1];
}

// 配置桑基图的方向
export function setDirection(orient, baseOpt) {
  if (orient === undefined) {
    orient = 'horizontal';
  }
  if (orient === 'vertical') {
    baseOpt.series[0].label.position = 'bottom';
    baseOpt.series[0].levels[0].label.position = 'top';
  }
  baseOpt.series[0].orient = orient;
}

// 配置桑基图的布局对齐方式
export function setAlign(nodeAlign, baseOpt) {
  if (nodeAlign === undefined) {
    nodeAlign = 'left';
  }
  baseOpt.series[0].nodeAlign = nodeAlign;
}
