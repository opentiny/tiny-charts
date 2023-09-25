import { second, createEl, className, appendEL, appendText, appendNode, setStyle } from './util';
import { getTextWidth } from '../../util/util';
import defendXSS from '../../util/defendXSS';
//  minute背景
function renderMinute(node, theme) {
  for (let i = 0; i < 12; i++) {
    const lineItem = createEl('div');
    className(lineItem, 'ev_GanttChart_lineItem');
    const lineItemBorder = createEl('div');
    className(lineItemBorder, 'ev_GanttChart_lineItemBorder');
    if (theme === 'dark') {
      setStyle(lineItemBorder, 'background', '#2e2e2e');
    }
    appendEL(node, lineItem);
    appendEL(node, lineItemBorder);
  }
}

// hour背景
function renderHour(node, theme) {
  for (let i = 0; i < 12; i++) {
    const lineItem = createEl('div');
    className(lineItem, 'ev_GanttChart_lineItem');
    const lineItemBorder = createEl('div');
    className(lineItemBorder, 'ev_GanttChart_lineItemBorder');
    if (theme === 'dark') {
      setStyle(lineItemBorder, 'background', '#2e2e2e');
    }
    appendEL(node, lineItem);
    appendEL(node, lineItemBorder);
  }
}

// day背景
function renderDay(node, theme) {
  for (let i = 0; i < 7; i++) {
    const lineItem = createEl('div');
    className(lineItem, 'ev_GanttChart_lineItem');
    const lineItemBorder = createEl('div');
    className(lineItemBorder, 'ev_GanttChart_lineItemBorder');
    if (theme === 'dark') {
      setStyle(lineItemBorder, 'background', '#2e2e2e');
    }
    appendEL(node, lineItem);
    appendEL(node, lineItemBorder);
  }
}
// 生成背景
function renderBack(node, type, option) {
  switch (type) {
    case 'minute':
      renderMinute(node, option.theme);
      break;
    case 'hour':
      renderHour(node, option.theme);
      break;
    default:
      renderDay(node, option.theme);
      break;
  }
}

// 计算分钟图表子项文本
function handleMinuteLabel(differenceTime) {
  const min = Math.floor(differenceTime / second.minuteSeconds);
  const _second = Math.floor((differenceTime - min * second.minuteSeconds) / second.seconds);
  return `${min}min${_second}s`;
}

// 计算小时图表子项文本
function handleHourLabel(differenceTime) {
  const hour = Math.floor(differenceTime / second.hourSeconds);
  const min = Math.floor((differenceTime - hour * second.hourSeconds) / second.minuteSeconds);
  return `${hour}h${min}min`;
}

// 计算天图表子项文本
function handleDayLabel(differenceTime) {
  const day = Math.floor(differenceTime / second.daySeconds);
  const hour = Math.floor((differenceTime - day * second.daySeconds) / second.hourSeconds);
  return `${day}d${hour}h`;
}

function innerTooltip(data, dataIndex, postIndex) {
  let tagHtml;
  const status = data[dataIndex].data[postIndex].status;
  if (status === 'success') {
    tagHtml = "<span class='tag success'>执行成功</span>";
  } else if (status === 'during') {
    tagHtml = "<span class='tag'>执行中</span>";
  } else {
    tagHtml = "<span class='tag failed'>执行失败</span>";
  }
  return `
        <p class='title'>${defendXSS(data[dataIndex].name)}</p>
        ${defendXSS(tagHtml)}
        <p class='time'>开始时间：${defendXSS(data[dataIndex].data[postIndex].startTime)}</p>
        <p class='time'>结束时间：${defendXSS(data[dataIndex].data[postIndex].endTime)}</p>
        <span class='ev_linkField'>查看报告</span>`;
}

function renderTimeLine(body, option) {
  const axisWrapper = createEl('div');
  className(axisWrapper, 'ev_GanttChart_axisWrapper');
  appendEL(body, axisWrapper);
  const axis = createEl('ul');
  className(axis, 'ev_GanttChart_axis');
  appendEL(axisWrapper, axis);
  // 生成坐标轴子项
  if (option && option.data) {
    option.data.forEach(dataItem => {
      const axisItem = createEl('li');
      className(axisItem, 'ev_GanttChart_axisItem');
      if (option.theme === 'dark') {
        setStyle(axisItem, 'color', '#bbb');
      }
      appendText(axisItem, dataItem.name);
      appendEL(axis, axisItem);
    });
  }
}

function handleChartPost(chartPostWidth, chartPost, postItem) {
  if (chartPostWidth > 8 + 4 + 8) {
    const postPoint = createEl('div');
    className(postPoint, 'ev_GanttChart_postPoint');
    // 设置牵引点的颜色
    switch (postItem.status) {
      case 'during':
        setStyle(postPoint, 'background', '#DBDFF2');
        break;
      case 'success':
        setStyle(postPoint, 'background', '#AFEDCE');
        break;
      default:
        setStyle(postPoint, 'background', '#F3DADA');
        break;
    }
    appendEL(chartPost, postPoint);
  }
}

function handleChartPostLabel(differenceTime, option, chartPostWidth, chartPost) {
  let label = handleMinuteLabel(differenceTime);
  switch (option.type) {
    case 'minute':
      label = handleMinuteLabel(differenceTime);
      break;
    case 'hour':
      label = handleHourLabel(differenceTime);
      break;
    default:
      label = handleDayLabel(differenceTime);
      break;
  }
  const labelWidth = getTextWidth(label) + 8;
  if (chartPostWidth - (8 + 4 + 8) >= labelWidth) {
    const postLabel = createEl('div');
    className(postLabel, 'ev_GanttChart_postLabel');
    appendText(postLabel, label);
    appendEL(chartPost, postLabel);
  }
}

function handleTooltip(chartHeight, option, dataIndex, postIndex, chartPost) {
  const toolTip = createEl('div');
  className(toolTip, 'ev_GanttChart_toolTip');
  setStyle(toolTip, 'height', `${chartHeight + 36}px`);
  // 所有项的高度
  const totalItemH = option.data.length * 28;
  // 间距的高度
  const spaceH = (chartHeight - totalItemH) / (option.data.length - 1);
  const top = `-${dataIndex * (spaceH + 28) + 8 + 28}px`;
  setStyle(toolTip, 'top', top);
  // 提示框内容区
  const toolTipContent = createEl('div');
  appendNode(
    toolTipContent,
    option.tipHtml
      ? option.tipHtml(option.data, dataIndex, postIndex)
      : innerTooltip(option.data, dataIndex, postIndex),
  );
  className(toolTipContent, 'ev_GanttChart_toolTipContent');
  if (option.theme === 'dark') {
    setStyle(toolTipContent, 'background', '#393939');
    setStyle(toolTipContent, 'boxShadow', '0px 0px 5px rgba(210,210,210,0.2)');
    setStyle(toolTipContent, 'color', '#fff');
  }
  appendEL(toolTip, toolTipContent);
  appendEL(chartPost, toolTip);
}

function handleLeft(option, currentTime, startTime) {
  let left;
  switch (option.type) {
    case 'minute':
      left = (second.hourSeconds - (currentTime - startTime)) / second.hourSeconds;
      break;
    case 'hour':
      left = (second.daySeconds - (currentTime - startTime)) / second.daySeconds;
      break;
    default:
      left = (second.weekSeconds - (currentTime - startTime)) / second.weekSeconds;
      break;
  }
  return left;
}

function handlePercent(option, differenceTime) {
  let percent;
  switch (option.type) {
    case 'minute':
      percent = (differenceTime <= second.seconds ? second.seconds : differenceTime) / second.hourSeconds;
      break;
    case 'hour':
      percent = (differenceTime <= second.seconds * 30 ? second.seconds * 30 : differenceTime) / second.daySeconds;
      break;
    default:
      percent = (differenceTime <= second.minuteSeconds ? second.minuteSeconds : differenceTime) / second.weekSeconds;
      break;
  }
  return percent;
}

function handleItem({ dataItem, chartWidth, chartHeight, option, dataIndex, chartPostWrapper }) {
  dataItem.data.forEach((postItem, postIndex) => {
    const chartPost = createEl('div');
    className(chartPost, 'ev_GanttChart_chartPost');
    // 开始时间
    const startTime = new Date(postItem.startTime).getTime();
    // 结束时间
    const endTime = new Date(postItem.endTime).getTime();
    const differenceTime = endTime - startTime;
    // 确定占比
    const percent = handlePercent(option, differenceTime);
    // 像素宽度
    const chartPostWidth = chartWidth * percent;
    // 百分比宽度
    const width = `${percent * 100}%`;
    setStyle(chartPost, 'width', width);
    // 向右位移的距离
    const currentTime = new Date(option.currentTime).getTime();
    const left = handleLeft(option, currentTime, startTime);
    setStyle(chartPost, 'left', `${left * 100}%`);
    // 设置子项的颜色
    switch (postItem.status) {
      case 'during':
        setStyle(chartPost, 'background', '#2070F3');
        break;
      case 'success':
        setStyle(chartPost, 'background', '#50C291');
        break;
      default:
        setStyle(chartPost, 'background', '#F46465');
        break;
    }
    // 柱子里面的牵引点
    handleChartPost(chartPostWidth, chartPost, postItem);
    // 柱子里面的文本
    handleChartPostLabel(differenceTime, option, chartPostWidth, chartPost);
    // 提示框
    handleTooltip(chartHeight, option, dataIndex, postIndex, chartPost);
    appendEL(chartPostWrapper, chartPost);
  });
}

function handleChartBack(option, chartWrapper) {
  const chartBack = createEl('div');
  className(chartBack, 'ev_GanttChart_chartBack');
  // 生成不同的背景竖线
  renderBack(chartBack, option.type, option);
  appendEL(chartWrapper, chartBack);
}

function handleChartItem(option, chartWidth, chartHeight, chartItemWrapper) {
  option.data.forEach((dataItem, dataIndex) => {
    // 图表的数据子项
    const chartItem = createEl('div');
    className(chartItem, 'ev_GanttChart_chartItem');
    // 牵引线设置
    const tractionLineWrapper = createEl('div');
    className(tractionLineWrapper, 'ev_GanttChart_tractionLineWrapper');
    // 牵引点
    const towingPoint = createEl('div');
    className(towingPoint, 'ev_GanttChart_towingPoint');
    if (option.theme === 'dark') {
      setStyle(towingPoint, 'background', '#2e2e2e');
    }
    // 牵引线
    const tractionLine = createEl('div');
    className(tractionLine, 'ev_GanttChart_tractionLine');
    if (option.theme === 'dark') {
      setStyle(tractionLine, 'background', '#2e2e2e');
    }
    appendEL(tractionLineWrapper, towingPoint);
    appendEL(tractionLineWrapper, tractionLine);
    // 图表的柱子
    const chartPostWrapper = createEl('div');
    className(chartPostWrapper, 'ev_GanttChart_chartPostWrapper');
    appendEL(chartItem, chartPostWrapper);
    appendEL(chartItem, tractionLineWrapper);
    // 生成每行的子项
    handleItem({ dataItem, chartWidth, chartHeight, option, dataIndex, chartPostWrapper });
    appendEL(chartItemWrapper, chartItem);
  });
}

// 生成图表的主体
export function renderBody(wrapper, option, chartWidth, chartHeight) {
  const body = createEl('div');
  className(body, 'ev_GanttChart_body');
  appendEL(wrapper, body);
  // 生成坐标轴
  renderTimeLine(body, option);
  //  右边的图表
  const chartWrapper = createEl('div');
  className(chartWrapper, 'ev_GanttChart_chartWrapper');
  appendEL(body, chartWrapper);
  // 图表的子项数据
  const chartItemWrapper = createEl('div');
  className(chartItemWrapper, 'ev_GanttChart_chartItemWrapper');
  appendEL(chartWrapper, chartItemWrapper);
  if (option && option.data) {
    handleChartItem(option, chartWidth, chartHeight, chartItemWrapper);
  }
  // 图表底层的竖线
  handleChartBack(option, chartWrapper);
}
