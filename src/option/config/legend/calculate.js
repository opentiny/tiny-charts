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
import { isArray, isNumber } from "../../../util/type";

// 格式化富文本 获取宽度
function formatRichText(text, styles, textStyle, richMaxWidth){
  let totalWidth = 0;
  let titleName;
  let titlePaddingWidth;
  // 创建一个canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  let itemHeight = 0;
  text.replace(/\{(\w+)\|([^}]+)\}/g, (match, styleName, content) =>{
    const style = styles[styleName] || {};
    let fontSize = `${textStyle?.fontSize || 12}px;`
    let fontWeight = textStyle?.fontWeight || 'normal';
    let fontFamily = textStyle?.fontFamily || 'Arial';
    // 第一项为title
    if (!titleName) {
      titleName = styleName;
    }
    for (const key in style) {
      const val = style[key];
      if (key === 'padding' && titleName && !titlePaddingWidth){
        titlePaddingWidth = isArray(val) ? (Number(val[1]) + Number(val[3] || 0)) : Number(val)*2;
      }
      if (key === 'fontSize'){
        fontSize = val + 'px'
      }
      if (key === 'fontWeight'){
        fontWeight = fontWeight
      }
      if (key === 'fontFamily'){
        fontFamily = fontFamily
      }
    }
    // 设置字体
    ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
    const metrics = ctx.measureText(content);
    // 获取宽度
    let textWidth = metrics.width;
    let textHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    if (styleName === 'split'){ // 分割线占宽17---取自设计稿
      textWidth = style?.width ? style.width* 2 : 17;
    }
    if (richMaxWidth[styleName]){
      richMaxWidth[styleName].widths.push(textWidth);
    }else{
      richMaxWidth[styleName] = {};
      richMaxWidth[styleName].widths = [textWidth]
    }
    if (style.width && style.width > textWidth){
      totalWidth += style.width;
    }else{
      totalWidth += textWidth;
    }
    if (textHeight > itemHeight){
      itemHeight = textHeight;
    }
  })
  canvas.remove();
  return {totalWidth, richMaxWidth, titleName, titlePaddingWidth, itemHeight}
}

// 计算图例宽度
function calculateOccupancy(iChartOption, legend, legendData){
  try {
    const textStyle = legend?.textStyle || {};
    const richStyles = textStyle.rich || {};
    // 存储每个图例的宽度
    const itemNameWidths = [];
    const richMaxWidth = {};
    const maxWidths = [];
    const itemHeights = [];
    let titleName;
    let titlePaddingWidth;
    const iconWidth = (Number(legend.itemWidth) || 8) + 6; // icon与文本的间隙
    const iconHeight = Number(legend.itemHeight) || 8;
    // 创建一个canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    // 为每个图例项创建测量元素
    legendData.forEach((name) => {
      // 应用formatter和rich样式
      try{
        if (legend.formatter) {
          const formatterText = legend.formatter(name);
          const formatterConfig = formatRichText(formatterText, richStyles, textStyle, richMaxWidth, itemNameWidths);
          titleName = formatterConfig.titleName
          maxWidths.push(formatterConfig.totalWidth)
          titlePaddingWidth = formatterConfig.titlePaddingWidth
          itemHeights.push(formatterConfig.itemHeight)
        }else{
          // 未设置formatter
          let fontSize = `${textStyle?.fontSize || 12}px;`
          let fontWeight = textStyle?.fontWeight || 'normal';
          let fontFamily = textStyle?.fontFamily || 'Arial';
          // 设置字体
          ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
          const metrics = ctx.measureText(name);
          // 获取宽度
          let textWidth = metrics.width;
          let textHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
          if (richMaxWidth.title){
            richMaxWidth.title.widths.push(textWidth);
          }else{
            richMaxWidth.title = {};
            richMaxWidth.title.widths = [textWidth]
          }
          maxWidths.push(textWidth)
          itemHeights.push(textHeight)
        }
      } catch (e){
        console.warn(e)
      }
    })
    // 移除canvas
    canvas.remove();
    // 每一项最大值
    for (const key in richMaxWidth) {
      const element = richMaxWidth[key];
      element.maxWidth = Math.max(...element.widths);
      if (key === 'split'){
        element.maxWidth = 17; //分割线占宽取自设计稿
      }
    }
    // 计算结果
    const maxWidth = Math.max(...maxWidths) + iconWidth;
    const verticalHeight = itemHeights.reduce((sum, w) => {w = w > iconHeight ? w : iconHeight; return sum + w + 8}, 0); //图例间隙为8
    return {
      maxWidth,
      richMaxWidth,
      titleName,
      titlePaddingWidth,
      verticalHeight
    }
  } catch (e) {
    console.error('计算图例宽度失败：', e);
  }
}

// 文本截断处理
function truncateText(text, maxWidth, fontSize, ellipsis, fontFamily = 'Arial', fontWeight = 'normal'){
  // 创建一个canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  // 设置字体
  ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
  // 测量省略号宽度
  const ellipsisWidth = ctx.measureText(ellipsis).width;
  // 如果原始文本的宽度不超过maxWidth，直接返回
  const totalWidth = ctx.measureText(text).width;
  if (totalWidth <= maxWidth || !Number(maxWidth)){
    return text;
  }
  let high = text.length;
  let best = 0; //截断位置

  for (let index = 0; index < high; index++) {
    const midText = text.substring(0, index);
    const midWidth = ctx.measureText(midText).width;
    if (midWidth + ellipsisWidth >= maxWidth) {
      best = index;
      break;
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
  const textStyle = legend?.textStyle;
  const config = calculateOccupancy(iChartOption, legend, legendData)
  if (!config) return;
  const legendMaxWidth = Math.floor(((chartInstance?.getWidth?.() || chartInstance?.getDom?.()?.clientWidth || chartInstance?._dom?.clientWidth || 0)) * 0.4);
  let {richMaxWidth, maxWidth, titleName, titlePaddingWidth} = config;
  // 用户rich
  const rich = cloneDeep(textStyle.rich);
  let titleExceed = false; // title超出标识
  let titleWidth = 0; // title宽度
  const richTitle = rich?.[titleName];
  const useTitleMaxWidth = richTitle?.width; // 用户配置宽度
  const titlePaddingRight = isArray(richTitle?.padding) ? (Number(richTitle?.padding[1])|| 0) : Number(richTitle?.padding);
  let titleMaxWidth = richMaxWidth?.[titleName]?.maxWidth || 0;
  // 计算title宽度
  if ((legendMaxWidth < maxWidth) || (legendMaxWidth < (maxWidth + (titlePaddingWidth || 0)))) { // 内容大于图例最大宽 或 内容加title的padding大于图例最大宽
    titleExceed = true;
    titleWidth = titleMaxWidth - (maxWidth - legendMaxWidth) - (titlePaddingWidth || 0); // title与右边的间隙
    titleWidth = isNumber(useTitleMaxWidth) ? useTitleMaxWidth : titleWidth;
    legend.tooltip = { show: true};
  } else {
    titleWidth = isNumber(useTitleMaxWidth) ? useTitleMaxWidth : (titleMaxWidth); // title与右边的间隙
  }
  // 更新rich 增加width
  for (const key in richMaxWidth) {
    const element = richMaxWidth[key];
    // 每一项的最大宽度
    let maxWidth = element.maxWidth || Math.max(...element.widths);
    // title宽度为上面纠正后的宽度
    if ((key === titleName) && titleWidth){
      maxWidth = titleWidth
    }  
    // 用户传入宽度
    const useWidth = textStyle.rich[key]?.width;
    // 更新内部用于截断文本用的rich，useWidth用于判断是否为用户传入宽度
    rich[key] = {...(textStyle.rich?.[key] || {}), useWidth, width: useWidth === undefined ? maxWidth : useWidth }
    // 更新option中rich
    textStyle.rich[key] = {...(textStyle.rich?.[key] || {}), width: useWidth === undefined ? maxWidth : useWidth }
  }

  legend.left = '60%'; // 开启自适应 固定位置
  legend.right = 'auto';
  legend.formatter = (name) => {
    if (formatter) {
      let text = formatter(name);
      let newText = text.replace(/\{(\w+)\|([^}]+)\}/g, (match, styleName, content) =>{
        let newContent = content;
        const richItem = rich[styleName] || {};
        const widthNum = isNumber(richItem?.width) ? richItem?.width : undefined;
        const hasUseWidth = richItem?.useWidth;
        const fontSize = (richItem.fontSize || textStyle?.fontSize || 12) + 'px';
        const fontWeight = richItem?.fontWeight || textStyle?.fontWeight || 'normal';
        const fontFamily = richItem?.fontFamily || textStyle?.fontFamily || 'Arial';
        // title的截断处理
        if (!hasUseWidth && titleExceed && styleName === 'title' && isNumber(widthNum)){
          newContent = truncateText(content, widthNum - 10, fontSize, '...', fontFamily, fontWeight); // 10为...的占位
        }
        // 用户设置了宽度的截断处理
        if(hasUseWidth && styleName !== 'split' && isNumber(widthNum)){
          newContent = truncateText(content, widthNum - 10, fontSize, '...', fontFamily, fontWeight); // 10为...的占位
        }
        return `{${styleName}|${newContent}}`
      })
      return newText
    } else {
      // 未设置formatter文本也超出也会截断
      const fontSize = (textStyle?.fontSize || 12) + 'px';
      const fontWeight = textStyle?.fontWeight || 'normal';
      const fontFamily = textStyle?.fontFamily || 'Arial';
      const maxWidth = legendMaxWidth - (titlePaddingWidth || 21);
      const newContent = truncateText(name, maxWidth, fontSize, '...', fontFamily, fontWeight);
      return newContent
    }
  }
}

// 设置移动端图例
function setMobileLegend(iChartOption, legend, legendData, chartInstance){
  const config = calculateOccupancy(iChartOption, legend, legendData)
  const textStyle = legend?.textStyle;
  if (!config) return;
  const chartWidth = chartInstance?.getWidth?.() || chartInstance?.getDom?.()?.clientWidth || chartInstance?._dom?.clientWidth || 0;
  const chartHeight = chartInstance?.getHeight?.() || chartInstance?.getDom?.()?.clientHeight || chartInstance?._dom?.clientHeight || 0;
  const legendMaxWidth = Math.floor(chartWidth * 0.5);
  const iconWidth = (Number(legend.itemWidth) || 8) + 6; // icon与文本的间隙
  let {richMaxWidth, maxWidth, titleName, titlePaddingWidth, verticalHeight} = config;
  // 更新rich 增加width
  for (const key in richMaxWidth) {
    const element = richMaxWidth[key];
    // 每一项的最大宽度
    let richWidth = element.maxWidth || Math.max(...element.widths);
    // 用户传入宽度
    const useWidth = textStyle.rich[key]?.width;
    if (key === titleName && ((legendMaxWidth < maxWidth) || (legendMaxWidth < (maxWidth + (titlePaddingWidth || 0))))) {
      richWidth = chartWidth - (maxWidth - richWidth) -  titlePaddingWidth
    } 
    // 更新option中rich
    textStyle.rich[key] = {...(textStyle.rich?.[key] || {}), width: useWidth === undefined ? richWidth : useWidth }
  }
  if ((legendMaxWidth < maxWidth) || (legendMaxWidth < (maxWidth + (titlePaddingWidth || 0)))) { // 内容大于图例最大宽 或 内容加title的padding大于图例最大宽
    legend.left = 'center'; // 开启自适应 固定位置
    legend.right = 'auto';
    legend.top = 'auto';
    legend.bottom = 0;
    legend.orient = 'horizontal';
    const graphHeight = chartHeight - verticalHeight - 16; //图形区高度 = 总高 - 图例高度 - 间距16
    if (!iChartOption.position) iChartOption.position = {};
    iChartOption.graphHeight = graphHeight;
  } else {
    legend.left = '50%'; // 开启自适应 固定位置
    legend.right = 'auto';
    iChartOption.graphHeight = undefined;
  }
}

export { updateLegendOccupancy, setMobileLegend }
