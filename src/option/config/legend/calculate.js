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
import cloneDeep from "../../../util/cloneDeep";

// 格式化富文本 并转为dom节点
function formatRichText(text, styles, textStyle){
  return text.replace(/\{(\w+)\|([^}]+)\}/g, (match, styleName, content) =>{
    const style = styles[styleName] || {};
    let paddingArray;
    let styleString = `font-size:${textStyle?.fontSize || 12}px;`
    styleString += Object.entries(style)
      .map(([key, val]) => {
          if (key === 'padding'){
              paddingArray = val;
          }
          if (key === 'fontSize'){
              key = 'font-size';
          }
          if (key === 'width'){
              key = '';
          }
          return `${key}:${typeof val === 'number' ? val +'px' : val};`
      }).join('  ');
    if (paddingArray){
      styleString += 'padding:';
      paddingArray.forEach(item => {
          styleString += item+'px ';
      })
      styleString += ';';
    }
    styleString += 'display: inline-block; vertical-align: middle;'
    return `<div class="${styleName}" style="${styleString}">${content}</div>`    
  })
}

// 计算图例宽度
function calculateOccupancy(iChartOption, legend, legendData){
  let container;
  try {
    const textStyle = legend?.textStyle || {};
    const richStyles = textStyle.rich || {};
    const itemGap = legend?.itemGap || 20;

    // 创建离屏容器
    container = document.createElement('div');
    container.style = 'position: absolute; opacity: 0; left: -999px; top: -999px;'
    document.body.appendChild(container);

    // 存储每个图例的宽度
    const itemWidths = [];
    const itemNameWidths = [];
    const richMaxWidth = {};
    let titleName;
    // 为每个图例项创建测量元素
    legendData.forEach((name) => {
      const itemContainer = document.createElement('div');
      const itemStyle = {
        display: 'flex',
        alignItems: 'center',
        marginRight: `${itemGap}px`
      }
      Object.assign(itemContainer.style, itemStyle);

      // icon
      const icon = document.createElement('div');
      const iconStyle = {
        width: legend.itemWidth ? legend.itemWidth+'px' : '8px',
        height: legend.itemWidth ? legend.itemWidth+'px' : '8px',
        'margin-right': '6px',
        display: 'inline-block'
      }
      Object.assign(icon.style, iconStyle);
      itemContainer.appendChild(icon);

      // 文本
      const textEl = document.createElement('div');
      textEl.style.display = 'inline-block';
      // 应用formatter和rich样式
      try{
        if (legend.formatter) {
          const formatterText = legend.formatter(name);
          textEl.innerHTML = formatRichText(formatterText, richStyles, textStyle);
        } else {
          textEl.textContent = name;
        }
      } catch{
        textEl.textContent = name;
      }
      itemContainer.appendChild(textEl);
      container.appendChild(itemContainer);

      // 总宽: 每一项宽度相加
      let width = icon.offsetWidth || 0;
      textEl.childNodes.forEach((item, index) => {
        const itemWidth = item.offsetWidth;
        const className = item.className;
        // 单项宽度为用户设置的宽度或实际宽度
        const iWidth = richStyles[className]?.width;
        width += ( Number(iWidth) ? Number(iWidth) : itemWidth);
        // 第一项为title -- 图例名称
        if (index === 0){
          titleName = className;
          itemNameWidths.push(itemWidth);
        }
        // 收集每一项的所有宽度，用于取最长占宽
        if (richMaxWidth[className]){
          richMaxWidth[className].widths.push(itemWidth);
        }else{
          richMaxWidth[className] = {};
          richMaxWidth[className].widths = [itemWidth]
        }
      })
      itemWidths.push(width);
    })
    // 每一项最大值
    for (const key in richMaxWidth) {
      const element = richMaxWidth[key];
      element.maxWidth = Math.max(...element.widths);
    }
    // 计算结果
    const maxWidth = container.offsetWidth;
    //清理容器
    document.body.removeChild(container);
    return {
      maxWidth,
      richMaxWidth,
      titleName
    }

  } catch (e) {
    console.error('计算图例宽度失败：', e);
    return 0;
  } finally {
    if (container && container.parentNode) {
      document.body.removeChild(container);
    }
  }
}

// 文本截断处理
function truncateText(text, maxWidth, fontSize, ellipsis, fontFamily = 'Arial'){
  // 创建一个canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  // 设置字体
  ctx.font = `${fontSize} ${fontFamily} `;
  // 测量省略号宽度
  const ellipsisWidth = ctx.measureText(ellipsis).width;
  // 如果原始文本的宽度不超过maxWidth，直接返回
  const totalWidth = ctx.measureText(text).width;
  if (totalWidth <= maxWidth || !Number(maxWidth)){
    return text;
  }

  // 使用二分法查找到最长的子字符串
  let low = 0;
  let high = text.length;
  let best = 0; // 截断字符位置

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midText = text.substring(0, mid);
    const midWidth = ctx.measureText(midText).width;
    
    if (midWidth + ellipsisWidth <= maxWidth) {
      best = mid;
      low = mid + 1;
    } else {
      high = mid -1;
    }
  }

  // 截断字符串 + 省略号
  return text.substring(0, best) + ellipsis;
}

// 图例截断处理
function updateLegendOccupancy(iChartOption, legend, legendData, chartInstance){
  const formatter = legend.formatter;
  legend.textStyle = legend.textStyle || { rich: {} };
  legend.textStyle.rich = legend.textStyle.rich || {};
  const textStyle = legend.textStyle;
  const config = calculateOccupancy(iChartOption, legend, legendData)
  if (!config) return;
  const legendMaxWidth = Math.floor(((chartInstance?.getWidth?.() || chartInstance?._dom?.clientWidth || 0)) * 0.4);
  const {richMaxWidth, maxWidth, titleName} = config;
  // 用户rich
  const rich = cloneDeep(textStyle.rich);
  let titleExceed = false;
  let titleWidth = 0;
  const iTitleMaxWidth = Number(rich?.[titleName]?.width);
  const titleMaxWidth = richMaxWidth?.[titleName]?.maxWidth || 0;
  if (legendMaxWidth < maxWidth) {
    titleExceed = true;
    titleWidth = titleMaxWidth - (maxWidth - legendMaxWidth) - 16; // title与右边的间隙
    titleWidth = iTitleMaxWidth ? iTitleMaxWidth : titleWidth;
    legend.tooltip = { show: true};
  } else {
    titleWidth = iTitleMaxWidth ? iTitleMaxWidth : (titleMaxWidth - 16); // title与右边的间隙
  }

  for (const key in richMaxWidth) {
    const element = richMaxWidth[key];
    let maxWidth = element.maxWidth || Math.max(...element.widths);
    if ((key === titleName) && titleWidth){
      maxWidth = titleWidth
    }  
    const iWidth = textStyle.rich[key]?.width;
    // 更新内部用于截断文本用的rich
    rich[key] = {...(textStyle.rich?.[key] || {}), iWidth, width: iWidth === undefined ? maxWidth : iWidth }
    // 更新option中rich
    textStyle.rich[key] = {...(textStyle.rich?.[key] || {}), width: iWidth === undefined ? maxWidth : iWidth }
  }

  legend.left = '60%'; // 开启自适应 固定位置
  legend.right = 'auto';
  legend.formatter = (name) => {
    if (formatter) {
      let text = formatter(name);
      let newText = text.replace(/\{(\w+)\|([^}]+)\}/g, (match, styleName, content) =>{
        let newContent = content;
        const richItem = rich[styleName] || {};
        const iWidth = richItem?.width;
        const isIWidth = richItem?.iWidth;
        const fontSize = (richItem.fontSize || textStyle?.fontSize || 12) + 'px';
        if (!isIWidth && titleExceed && styleName === 'title'){
          newContent = truncateText(content, iWidth, fontSize, '...');
        }
        if(isIWidth){
          newContent = truncateText(content, iWidth, fontSize, '...');
        }
        return `{${styleName}|${newContent}}`
      })
      return newText
    } else {
      return name
    }
  }
}

export { updateLegendOccupancy }
