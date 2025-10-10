import Token from "../token";
import { isArray, isNumber } from "../../util/type";

// 创建svg图例
function createSvgLegend(legend, legendData, chartInstance, iChartOption) {
  const container = chartInstance?.getDom?.();
  const containerRect = container.getBoundingClientRect();
  const legendWidth = getLegendWidth(legend, chartInstance, iChartOption) || 0;
  const svgNS = 'http://www.w3.org/2000/svg';
  let svgCharts = container.querySelector('svg');
  let hasSvgCharts = svgCharts && svgCharts?.id !== 'hui-legend-svg';
  let svgLegend;
  let top = transformPosition(legend.top, containerRect.height)
  let right = transformPosition(legend.right, containerRect.width)
  let bottom = transformPosition(legend.bottom, containerRect.height)
  let left = transformPosition(legend.left, containerRect.width)
  let legendStartX;
  let legendStartRight;
  let legendStartY;
  if (hasSvgCharts) { //是否charts为svg渲染
    svgLegend = container.querySelector('svg');
    const items = svgLegend.querySelectorAll('.legend-svg');
    items[0]?.remove();
  } else {
    svgLegend= document.getElementById('hui-legend-svg');
    if (svgLegend) {
      svgLegend = document.getElementById('hui-legend-svg')
      svgLegend.innerHTML = ''
    } else {
      svgLegend = document.createElementNS(svgNS, 'svg');
      svgLegend.setAttribute('id', 'hui-legend-svg');
    }
    svgLegend.setAttribute('width', containerRect.width);
    svgLegend.setAttribute('height', containerRect.height);
    svgLegend.setAttribute('style', `position:absolute;top:0;right:0;bottom:0;left:0;`);
    container.appendChild(svgLegend);
  }
  // 计算图例具体位置
  if (isNumber(Number(left)) && !isNaN(Number(left))){
    legendStartX = Number(left)
  }if (!isNumber(left) && isNumber(right)){
    legendStartRight = containerRect.width - Number(right)
  }
  if (isNumber(Number(top)) && !isNaN(Number(top))){
    legendStartY = Number(top)
  } else if (top === 'center' || bottom === 'center'){
    legendStartY = ((containerRect.height - 16) / 2 ) - 10
  } else if (top === undefined || top === 'auto' || (!isNumber(top) && isNumber(bottom))){
    legendStartY = containerRect.height - Number(bottom) -16
  }

  let totalWidth = legendStartX || 0 ;
  const g = document.createElementNS(svgNS, 'g');
  g.setAttribute('class', 'legend-svg')
  svgLegend.appendChild(g);
  let option = {startX:totalWidth, legend, legendData, svgLegend, svgNS, hasSvgCharts, container, iChartOption, chartInstance, legendWidth, legendStartY, g}
  const config = createLegend(option)

  // 二次渲染 根据一次渲染的宽度与高度 计算出实际的位置
  g.innerHTML = '';
  totalWidth = config.totalWidth;
  let lastItemWidth = config.itemWidth;
  if (totalWidth > legendWidth){
    totalWidth -= (lastItemWidth + 6 - 20)
  }
  // 图例渲染开始位置
  let startX;
  if (legend.left === 'center' || (legend.left===undefined && legend.right=== 'center')) {
    startX = (containerRect.width - totalWidth)/2
  } else if (legendStartRight) {
    startX = legendStartRight - totalWidth;
  } else {
    startX = legendStartX;
  }
  option = {startX, legend, legendData, svgLegend, svgNS, hasSvgCharts, container, iChartOption, chartInstance, legendWidth, legendStartY, g}
  createLegend(option, true)
  
  // 创建点击图例
  svgLegend.onclick = (event) => {
    handleSvgClick(event,{ container, legendData, chartInstance})
  }
}

function createLegend(option, secondaryRender){
  let {startX, legend, legendData, svgLegend, svgNS, hasSvgCharts, container, iChartOption, chartInstance, legendWidth, legendStartY,g} = option;
  let itemGap = legend.itemGap || legend.itemGap || 6;
  let itemWidth;
  let totalWidth = 0;
  let fontSize = legend.textStyle?.fontSize || 12;
  let fontFamily = legend.textStyle?.fontFamily || "Microsoft YaHei";
  legendData = legend.data || legendData
  let truncateIndex ;
  for (let index = 0; index < legendData.length; index++) {
    const item = legendData[index];
    const type = item.icon || iChartOption.legend?.icon || legend.icon || 'rect';
    const style = {
      x: startX,
      y:  legendStartY || 0 ,
      padding: '',
      width: legend.itemWidth || 12,
      height: legend.itemHeight || 12,
      itemGap: itemGap,
      color: item.color || Token.config.colorGroup[index] || '',
      fontSize,
      fontFamily
    }
    const name = item.name || item;
    itemWidth = createItem(g, type, style, svgNS, name, index, legend, legendWidth, secondaryRender)
    startX += itemWidth;
    // style.x = startX;
    totalWidth += (index === 0) ? itemWidth : (itemWidth + itemGap); // 加上间隙
    if ((totalWidth + 24) > legendWidth) { //24为省略号占宽 加 间隙
      let childNode = g.children;
      let length = childNode.length;
      truncateIndex = index;
      if (childNode.length > 1) {
        g.removeChild(childNode[length - 1]);
      }
      if(secondaryRender){
        createEllipsis(g, type, style, svgNS, name, index);
        createDropDown(container, legend, legendData, index, iChartOption, chartInstance);
      }
      
      break;
    }
  }
  if (totalWidth > legendWidth) {
    totalWidth = totalWidth - itemWidth + itemGap * (truncateIndex - 1);
  } else {
    totalWidth = totalWidth  + itemGap * (legendData.length - 1);
  }
  return {totalWidth, itemWidth}
}

// 转化位置信息
function transformPosition(value, referenceValue){
  let newValue;
  if (value === 'center') return value;
  if(!isNaN(Number(value))){
    newValue = value;
  } else if (value?.includes?.('%')) {
    newValue = (Number(value.slice(0, -1)) / 100) * referenceValue; 
  } else {
    newValue = undefined;
  }
  return newValue;
}

// 获取图例实际宽度
function getLegendWidth(legend, chartInstance, iChartOption) {
  let width = chartInstance?.getDom?.().offsetWidth;
  const left = legend.left;
  const right = legend.right;
  let userWidth = legend.width;
  userWidth = !isNaN(Number(userWidth)) ? userWidth : (userWidth?.includes?.('%') ? Number(userWidth.slice(0, -1)) * width / 100 : userWidth || 0);
  if (!isNaN(Number(userWidth))) return userWidth;
  let legendWidth = 0;
  const padding = iChartOption.padding || iChartOption.chartPadding;
  let LRGrid = 0;//左右间隙
  if ( isArray(padding) ){
    LRGrid = padding.length === 4 ? padding[1]+padding[3] : padding[1] *2 
  }
  width -= LRGrid // 去除左右间隙
  if (left === 'center' || right === 'center') {
    legendWidth = width
  } else if (!isNaN(Number(left))) {
    legendWidth = width - left
  } else if (left?.includes?.('%')) {
    legendWidth = width - Number(left.slice(0, -1)) * width / 100
  } else if (!isNaN(Number(right))) {
    legendWidth = width - right
  } else if (right?.includes?.('%')) {
    legendWidth = width - Number(right.slice(0, -1)) * width / 100
  }
  return legendWidth
}

// 创建单项图例
function createItem(svg, type, style, svgNS, name, index, legend, legendWidth, secondaryRender) {
  let { x, y, padding, width, height, color, itemGap, fontSize, fontFamily} = style;
  const inactiveColor = Token.config.legendInactiveColor;
  const legendTextColor = Token.config.legendTextColor;
  let icon;
  let itemWidth;
  let iconY;
  const g = document.createElementNS(svgNS, 'g');
  g.setAttribute('style', `--inactiveColor:${inactiveColor};`);
  g.setAttribute('class', `legend-svg-item`);
  g.setAttribute('index', index);
  switch (type) {
    case 'circle':
      const radius = (width > height ? height : width) / 2;
      icon = document.createElementNS(svgNS, 'circle');
      icon.setAttribute('cx', (x + itemGap * index) + radius*2);
      icon.setAttribute('cy', y + radius + 2);
      icon.setAttribute('r', radius);
      break;
    case 'rect':
      icon = document.createElementNS(svgNS, 'rect');
      iconY = y + 2;
      break;
    case 'line':
      icon = document.createElementNS(svgNS, 'rect');
      iconY = y + 4;
      break;
    case 'roundRect':
      icon = document.createElementNS(svgNS, 'rect');
      icon.setAttribute('rx', 2);
      icon.setAttribute('ry', 2);
      iconY = y + (16-height)/4;
      break;
    default:
      // path无法正常显示
      if (type.includes('path')) {
        icon = document.createElementNS(svgNS, 'path');
        const url = type.split('://')[1];
        icon.setAttribute('d', url);
      } else {
        icon = document.createElementNS(svgNS, 'circle')
        icon.setAttribute('cx', (x + itemGap * index) + radius*2);
        icon.setAttribute('cy', y + radius +1);
        icon.setAttribute('r', radius);
      }
  }
  icon.setAttribute('x', x + itemGap * index);
  icon.setAttribute('y', iconY ? iconY: y);
  icon.setAttribute('width', width);
  icon.setAttribute('height', height);
  icon.setAttribute('fill', color);
  icon.setAttribute('class', 'icon');
  icon.setAttribute('index', index);
  g.appendChild(icon)
  const legendText = document.createElementNS(svgNS, 'text');
  legendText.setAttribute('x', (x + width + itemGap * index + 6));// 文本与icon间隙6
  legendText.setAttribute('y', y);
  legendText.setAttribute('transform', `translate(0 10)`);
  legendText.setAttribute('index', index);
  legendText.setAttribute('fill', legendTextColor);
  legendText.setAttribute('class', 'text');
  legendText.setAttribute('style', `font-size:${fontSize}px; font-family:'${fontFamily}'`);
  legendText.textContent = name;

  g.appendChild(legendText);
  svg.appendChild(g);
  itemWidth = legendText.getBBox().width + width + 6;// 文本与icon间隙6
  if (secondaryRender && index === 0 && itemWidth > legendWidth){ // 第一项就超出宽度时截断显示
    const textLength = name.length;
    const newTextLength = Math.trunc(textLength * (legendWidth / itemWidth)) - 8; // 减4为空格 加 ... 的位置
    const newText = name.slice(0, newTextLength) + ' ...'
    legendText.innerHTML = newText
    return legendText.getBBox().width + width + 6;
  }
  return itemWidth;
}

// 创建省略号
function createEllipsis(svg, type, style, svgNS, name, index) {
  const { x, y, padding, width, height, color, itemGap } = style;
  const legendTextColor = Token.config.legendTextColor;
  const ellipsis = document.createElementNS(svgNS, 'text');
  ellipsis.setAttribute('type', 'ellipsis');
  ellipsis.setAttribute('class', 'legend-svg-ellipsis');
  ellipsis.setAttribute('x', x  + itemGap * index - 8); 
  ellipsis.setAttribute('y', y);
  ellipsis.setAttribute('transform', `translate(0 8)`);
  ellipsis.setAttribute('fill', legendTextColor);
  ellipsis.setAttribute('style', `font-size:18px; `);
  ellipsis.textContent = '...';
  svg.appendChild(ellipsis);
}

// 创建下拉项
function createDropDown(container, legend, legendData, initialIndex, iChartOption, chartInstance) {
  const tokenConfig = Token.config;
  const colorGroup = iChartOption.color || tokenConfig.colorGroup;
  const inactiveColor = Token.config.legendInactiveColor;
  const legendTextColor = Token.config.legendTextColor;
  const itemHoverBg = Token.config.legendDropDownItemHover
  let svgLegendDropdown = container.getElementsByClassName('hui-legend-dropdown')[0];
  if (svgLegendDropdown) {
    svgLegendDropdown.innerHTML = ''
  } else {
    svgLegendDropdown = document.createElement('div');
    svgLegendDropdown.setAttribute('class', 'hui-legend-dropdown');
  }
  svgLegendDropdown.setAttribute('style', `--textColor: ${legendTextColor};--itemHoverBg: ${itemHoverBg};`);
  svgLegendDropdown.style.background = Token.config.legendDropDownBg;

  svgLegendDropdown.style['box-shadow'] = `0 ${tokenConfig.tooltipShadowOffsetY}px ${tokenConfig.tooltipShadowBlur}px 0 ${tokenConfig.tooltipShadowColor}`
  let dom = '';
  for (let index = initialIndex; index < legendData.length; index++) {
    const item = legendData[index];
    const icon = item.icon || legend.icon;
    dom += `<div class="hui-legend-dropdown-item" index="${index}" style="--inactiveColor:${inactiveColor}; --textColor: ${legendTextColor}; --iconColor: ${colorGroup[index]};"><div class="hui-legend-dropdown-icon ${icon}" index="${index}"></div><div index="${index}" class="hui-legend-dropdown-text">${item}</div></div>`
  }
  svgLegendDropdown.innerHTML = dom;
  container.appendChild(svgLegendDropdown);
  // 创建点击切换图形
  svgLegendDropdown.onclick = (event) => {
    handleSelectLegend(event,{container, legendData, chartInstance})
  }
}

// 图例点击事件
function handleSvgClick(e, option){
  let target = e.target;
  let {container, legendData, chartInstance} = option;
  if (target.getAttribute('type') === 'ellipsis') {
    showDropDown(e, container)
  } else if (target.getAttribute('index')) {
    let index = Number(target.getAttribute('index'));
    let name = legendData[index];
    let parentNode = target.tagName === 'g' ? target : target.parentNode;
    parentNode.classList.toggle('inactive');
    chartInstance.dispatchAction({
      type: "legendToggleSelect",
      name: name,
    });
  }
}

// 下拉框展开事件
function showDropDown(e, container){
  const dropDown = container.getElementsByClassName('hui-legend-dropdown')[0];
  const containerRect = container.getBoundingClientRect()
  const width = dropDown.clientWidth
  const height = dropDown.clientHeight
  let left = e.clientX - containerRect.left;
  let top = e.clientY - containerRect.top + 8;
  if ((left + width) > containerRect.width) {
    left -= width - 5;
  }
  if ((top + height) > containerRect.height) {
    top -= height + 16;
  }
  dropDown.classList.toggle('show');
  dropDown.style.left = left + 'px';
  dropDown.style.top = top + 'px';
  let flag = false;
  const hideDropDown = (event)=>{
    if (!flag) {
      flag = true;
      return;
    }
    if (!event.target.classList.contains('legend-svg-ellipsis') && !dropDown.contains(event.target)) {
      flag = true
      dropDown.classList.remove('show');
      document.removeEventListener('click', hideDropDown);
    }
  }
  document.addEventListener('click', hideDropDown);

}

// 下拉框点击切换图
function handleSelectLegend(e, option){
  let target = e.target;
  let {container, legendData, chartInstance} = option
  if (target.getAttribute('index')) {
    let index = Number(target.getAttribute('index'));
    let name = legendData[index];
    let parentNode = target.classList.contains('hui-legend-dropdown-item') ? target : target.parentNode;
    parentNode.classList.toggle('inactive');
    chartInstance.dispatchAction({
      type: "legendToggleSelect",
      name: name,
    });
  }
}

export default createSvgLegend;