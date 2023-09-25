import { setStyle, renderSvgDom } from './util.js';

function setChartSize(svgContainer, nodeContainer, option) {
  const { width, height } = option;
  if (width) {
    setStyle(svgContainer, 'width', width + 'px');
    setStyle(nodeContainer, 'width', width + 'px');
  }
  if (height) {
    setStyle(svgContainer, 'height', height + 'px');
    setStyle(nodeContainer, 'height', height + 'px');
  }
}

function handlePathD(point) {
  const { x1, y1, x2, y2, x3, y3, x4, y4 } = point;
  //两个节点之间的距离用来算贝塞尔曲线的控制点
  const distance = (x3 - x1) / 2;

  let path;

  //前后节点在同一水平线，高度也相等
  if (y1 === y3 && y2 === y4) {
    path = `M${x1} ${y1} L${x3} ${y3} L${x4} ${y4} L${x2} ${y2} L${x1} ${y1}Z`;
  }

  //前后节点顶部同一水平线
  if (y1 === y3 && y2 !== y4) {
    path = `M${x1} ${y1} L${x3} ${y3} L${x4} ${y4} C${x4 - distance} ${y4} ${
      x2 + distance
    } ${y2} ${x2} ${y2} L${x1} ${y1}Z`;
  }

  //前后节点底部同一水平线
  if (y1 !== y3 && y2 === y4) {
    path = `M${x1} ${y1} C${x1 + distance} ${y1} ${
      x3 - distance
    } ${y3} ${x3} ${y3} L${x4} ${y4} L${x2} ${y2} L${x1} ${y1}Z`;
  }

  //前后节点交错重合
  if (y1 !== y3 && y2 !== y4) {
    path = `M${x1} ${y1} C${x1 + distance} ${y1} ${x3 - distance} ${y3} ${x3} ${y3} L${x4} ${y4} C${
      x4 - distance
    } ${y4} ${x2 + distance} ${y2} ${x2} ${y2} L${x1} ${y1}Z`;
  }

  return path;
}

function handleSmoothPathD(point, height) {
  const { x1, y1, x3, y3 } = point;
  //两个节点之间的距离用来算贝塞尔曲线的控制点
  const distance = (x3 - x1) / 2;
  let path;
  if (y1 === y3) {
    path = `M${x1} ${y1 - height / 2} L${x3} ${y3 - height / 2} L${x3} ${y3 + height / 2} L${x1} ${y1 + height / 2}Z`;
  } else {
    path = `M${x1} ${y1} C${x1 + distance} ${y1} ${x3 - distance} ${y3} ${x3} ${y3}`;
  }
  return path;
}

//生成连接带
function renderCurveLink(pathGroup, node, linkGradientDefs, smoothingCurves) {
  const { start, end, name, isLeft, color, hasNodes } = node;
  const startLen = start.value;
  const endLen = end.value;
  //绘画的坐标点
  let point;
  if (smoothingCurves) {
    point = {
      // 连线的起点
      x1: start.x,
      y1: start.y + startLen / 2,
      // 连线的终点
      x3: end.x,
      y3: end.y + endLen / 2,
    };
  } else {
    point = {
      // 前置节点起点坐标
      x1: start.x,
      y1: start.y,
      // 前置节点终点坐标
      x2: start.x,
      y2: start.y + startLen,
      // 后置节点终点坐标
      x3: end.x,
      y3: end.y,
      // 后置节点终点坐标
      x4: end.x,
      y4: end.y + endLen,
    };
  }
  //获取路径
  const path = smoothingCurves ? handleSmoothPathD(point, startLen) : handlePathD(point);
  const isNotgarident = typeof color === 'string';
  let fillColor;
  if (isNotgarident) {
    fillColor = color;
  } else {
    //渐变的属性
    const lineGradientAttributes = {
      id: `linearGradient_${name}_node`,
      x1: '0%',
      y1: '0%',
      x2: '100%',
      y2: '0%',
    };
    const lineGradientDom = renderSvgDom('linearGradient', lineGradientAttributes);
    //生成stop
    color.forEach((el, index) => {
      const stopAttributes = {
        offset: el.percent,
        'stop-color': el.color,
        'stop-opacity': 0.2,
      };
      const stopDom = renderSvgDom('stop', stopAttributes);
      lineGradientDom.appendChild(stopDom);
    });
    linkGradientDefs.appendChild(lineGradientDom);
    fillColor = `url(#linearGradient_${name}_node)`;
  }
  //不是渐变色
  let pathAttributes;
  if (smoothingCurves) {
    if (point.y1 === point.y3) {
      pathAttributes = {
        id: `link_${name}_${isLeft ? 'left' : 'right'}`,
        fill: fillColor,
        d: path,
        opacity: isNotgarident ? 0.2 : 1,
      };
    } else {
      pathAttributes = {
        id: `link_${name}_${isLeft ? 'left' : 'right'}`,
        fill: 'none',
        d: path,
        opacity: isNotgarident ? 0.2 : 1,
        stroke: fillColor,
        'stroke-width': startLen,
      };
    }
  } else {
    pathAttributes = {
      id: `link_${name}_${isLeft ? 'left' : 'right'}`,
      fill: fillColor,
      d: path,
      opacity: isNotgarident ? 0.2 : 1,
    };
  }
  const pathDom = renderSvgDom('path', pathAttributes);
  pathGroup.appendChild(pathDom);
}

// 绘制节点
function renderNode(node, nodeGroup, nodeGradientDefs, config, scaleBar) {
  const {
    position: { x, y, width },
    value,
    color,
    name,
  } = node;
  const { background } = config;
  let fillColor;
  const isNotgarident = typeof color === 'string';
  if (isNotgarident) {
    fillColor = background;
  } else {
    //渐变的属性
    const lineGradientAttributes = {
      id: `linearGradient_${name}_node`,
      x1: '0%',
      y1: '0%',
      x2: '100%',
      y2: '0%',
    };
    const lineGradientDom = renderSvgDom('linearGradient', lineGradientAttributes);
    //生成stop
    color.forEach((el, index) => {
      const stopAttributes = {
        offset: el.percent,
        'stop-color': el.color,
        'stop-opacity': 0.2,
      };
      const stopDom = renderSvgDom('stop', stopAttributes);
      lineGradientDom.appendChild(stopDom);
    });
    nodeGradientDefs.appendChild(lineGradientDom);
    fillColor = `url(#linearGradient_${name}_node)`;
  }
  const nodeAttributes = {
    x: x,
    y: y,
    width: width,
    height: value * scaleBar,
    fill: fillColor,
    opacity: isNotgarident ? 0.2 : 1,
  };
  const nodeRect = renderSvgDom('rect', nodeAttributes);
  nodeGroup.appendChild(nodeRect);
}

export function renderChart(svg, nodesPosition, config, marginAreas) {
  const { scaleBar, smoothingCurves } = config;
  // 节点组
  const nodeGroup = renderSvgDom('g', { id: 'rc_nodeGroup' });
  // 用来包裹path的组
  const pathGroup = renderSvgDom('g', { id: 'rc_pathGroup' });
  //用来包裹node渐变色的组
  const nodeGradientGroup = renderSvgDom('g', { id: 'rc_nodeGradientGroup' });
  //用来包裹link渐变色的组
  const linkGradientGroup = renderSvgDom('g', { id: 'rc_linkGradientGroup' });
  //放置node渐变色def
  const nodeGradientDefs = renderSvgDom('defs');
  //放置link渐变色def
  const linkGradientDefs = renderSvgDom('defs');
  nodeGradientGroup.appendChild(nodeGradientDefs);
  linkGradientGroup.appendChild(linkGradientDefs);
  svg.appendChild(nodeGroup);
  svg.appendChild(pathGroup);
  svg.appendChild(nodeGradientGroup);
  svg.appendChild(linkGradientGroup);
  nodesPosition.forEach(item => {
    item.forEach(node => {
      renderNode(node, nodeGroup, nodeGradientDefs, config, scaleBar);
    });
  });

  marginAreas.forEach(item => {
    renderCurveLink(pathGroup, item, linkGradientDefs, smoothingCurves);
  });
}

export { setChartSize };

export default renderChart;
