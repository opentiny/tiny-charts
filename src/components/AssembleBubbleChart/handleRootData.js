import { getRandom } from '../../util/util';

function overallLayout(params, api, distance, displayRoot, d3) {
  const context = params.context;
  // d3函数：设置球的大小padding值等
  d3
    .pack()
    .size([api.getWidth() - 2, api.getHeight() - 2])
    .padding(distance)(displayRoot);
  context.nodes = {};
  displayRoot.descendants().forEach(function (node) {
    context.nodes[node.id] = node;
  });
}

function setChartPosition(params) {
  const { iChartOption, height, width } = params;
  let { radius, widthDis, heightDis } = params;
  // 获取缩放值以及left、top的位移值
  if (!iChartOption.chartPosition) {
    iChartOption.chartPosition = { center: ['50%', '50%'], radius: '80%' };
  } else {
    if (!iChartOption.chartPosition.center) {
      iChartOption.chartPosition.center = ['50%', '50%'];
    } else {
      if (!iChartOption.chartPosition.radius) {
        iChartOption.chartPosition.radius = '80%';
      }
    }
  }
  radius = iChartOption.chartPosition.radius || '80%';
  if (typeof radius !== 'number') {
    if (radius.indexOf('%') !== -1) {
      radius = (radius.substring(0, radius.indexOf('%')) - 0) / 100;
    } else {
      radius = parseFloat(radius) / Math.min(height, width);
    }
  } else {
    radius = radius / Math.min(height, width);
  }
  let leftValue = iChartOption.chartPosition.center[0] || '50%';
  if (typeof leftValue !== 'number') {
    if (leftValue.indexOf('%') !== -1) {
      leftValue = (leftValue.substring(0, leftValue.indexOf('%')) - 0) / 100;
      widthDis = width * (leftValue - radius / 2);
    } else {
      widthDis = parseFloat(leftValue);
    }
  } else {
    widthDis = leftValue;
  }
  let topValue = iChartOption.chartPosition.center[1] || '50%';
  if (typeof topValue !== 'number') {
    if (topValue.indexOf('%') !== -1) {
      topValue = (topValue.substring(0, topValue.indexOf('%')) - 0) / 100;
      heightDis = height * (topValue - radius / 2);
    } else {
      heightDis = parseFloat(topValue);
    }
  } else {
    heightDis = topValue;
  }
  return { radius, widthDis, heightDis };
}

function returnValue(params) {
  const { node, radius, widthDis, heightDis, nodeName, type, z2 } = params;
  const value = {
    type: 'circle',
    // 定义球的坐标及半径
    shape: {
      cx: node.x * radius + widthDis,
      cy: node.y * radius + heightDis,
      // 若移动页面使得球的半径小于0时则取反
      r: node.r * radius > 0 ? node.r * radius : -node.r * radius,
    },
    transition: ['shape'],
    z2,
    // 定义球的文本信息等
    textContent: {
      type: 'text',
      style: {
        text: nodeName,
        fontFamily: 'Arial',
        width: node.r,
        height: node.r,
        borderRadius: node.r,
        // 文本溢出显示
        overflow: 'visible',
        fontSize: node.r / 3 > 12 ? node.r / 3 : '12px',
        fill: node.data.textColor,
      },
      // 在非文本溢出显示前提下，鼠标划入时展示省略号的内容
      emphasis: {
        style: {
          overflow: null,
          fontSize: Math.max(node.r / 3, 12),
        },
      },
    },
    // 设置文本显示的位置
    textConfig: { position: 'inside' },
    style: {
      // 设置球的边框色
      stroke: node.depth >= 1 && type === 'nested' ? node.data.colorSec : null,
      // 设置球的背景色
      fill: node.depth === 1 ? node.data.color : node.data.colorBg,
    },
    // 设置球的跳动范围
    keyframeAnimation: {
      duration: 3000,
      loop: true,
      delay: getRandom() * 2000,
      keyframes: [
        { y: -3, percent: 0.5, easing: 'cubicOut' },
        { y: 0, percent: 1, easing: 'bounceOut' },
        { x: -3, percent: 0.5, easing: 'cubicOut' },
        { x: 0, percent: 1, easing: 'bounceOut' },
      ],
    },
  };
  return value;
}

export function handleRootData(params) {
  const { d3, seriesData, baseOpt, distance, length, type, chartInstance, iChartOption } = params;

  function stratify() {
    // d3函数：定义球的大小排列与id名处理等
    return d3
      .stratify()
      .parentId(function (d) {
        return d.id.substring(0, d.id.lastIndexOf('.'));
      })(seriesData)
      .sum(function (d) {
        return d.value || 0;
      })
      .sort(function (a, b) {
        return b.value - a.value;
      });
  }
  // 配置renderItem函数，返回值是球的相关配置
  const displayRoot = stratify();
  function renderItem(params, api) {
    const context = params.context;
    if (!context.layout) {
      context.layout = true;
      overallLayout(params, api, distance, displayRoot, d3);
    }
    const nodePath = api.value('id');
    const node = context.nodes[nodePath];
    if (!node) {
      return;
    }
    const isLeaf = !node.children || !node.children.length;
    // 设置label值是否显示，若有嵌套则不显示，否则显示
    const nodeName = isLeaf ? node.data.labelS : '';
    const z2 = api.value('depth') * 2;
    // 获取实例的宽高
    const width = chartInstance.getWidth();
    const height = chartInstance.getHeight();
    let widthDis = '';
    let heightDis = '';
    let radius = '';
    radius = setChartPosition({ iChartOption, height, width, widthDis, heightDis, radius }).radius;
    widthDis = setChartPosition({ iChartOption, height, width, widthDis, heightDis, radius }).widthDis;
    heightDis = setChartPosition({ iChartOption, height, width, widthDis, heightDis, radius }).heightDis;
    return returnValue({ node, radius, widthDis, heightDis, nodeName, type, z2 });
  }
  // 给BaseOption设置renderItem,且只能设置一次，多次则会造成视图重叠
  baseOpt.series[length].renderItem = renderItem;
}


