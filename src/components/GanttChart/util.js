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
import { isArray } from '../../util/type';
import { TIMELIMIT, SECONDS } from './constant';
import defendXSS from '../../util/defendXSS';

// 计算一段字符的像素长度
function getTextWidth(text, fontSize) {
  let result = 0;
  const ele = document.createElement('span');
  // 字符串中带有换行符时，会被自动转换成<br/>标签，若需要考虑这种情况，可以替换成空格，以获取正确的宽度
  ele.innerText = text;
  // 不同的大小和不同的字体都会导致渲染出来的字符串宽度变化，可以传入尽可能完备的样式信息
  ele.style.fontSize = fontSize;
  ele.setAttribute('style', 'font-size: 12px');
  document.documentElement.append(ele);
  result = ele.offsetWidth;
  document.documentElement.removeChild(ele);
  return result;
}

// 创造元素
function createEl(elName) {
  return document.createElement(elName);
}

// 添加元素
function appendEL(parNode, chiNode) {
  parNode.appendChild(chiNode);
}

// 设置类名
function className(node, name) {
  node.className = name;
}

// 添加文本
function appendText(node, text) {
  node.innerText = text;
}

// 添加dom节点
function appendNode(node, nodeContent) {
  node.innerHTML = nodeContent;
}

// 设置样式
function setStyle(target, key, value) {
  target.style[key] = value;
}

// 设置位移值
function setTranslateX(el, translateX) {
  el.style.transform = `translateX(${translateX}px)`;
}

function getTitle(currentTime) {
  const curTime = new Date(currentTime);
  const curMon = curTime.getMonth() + 1;
  const curDate = curTime.getDate();
  const time = curTime.getTime();
  const startTime = new Date(time - SECONDS.weekSeconds);
  const stMon = startTime.getMonth() + 1;
  const stDate = startTime.getDate();
  const year = startTime.getFullYear();
  const yearLabel = `${year}`;
  const dateLabel = `${stMon}.${stDate}\u00A0-\u00A0${curMon}.${curDate}`;
  return {
    yearLabel,
    dateLabel,
  };
}

function handleTimeLineLabel(currentTime) {
  const TimeLineLabel = [];
  const curTime = new Date(currentTime).getTime();
  for (let i = 0; i <= 7; i++) {
    const time = curTime - (7 - i) * SECONDS.daySeconds;
    const frontTime = new Date(time);
    const month = frontTime.getMonth() + 1;
    const date = frontTime.getDate();
    const label = `${month}.${date}`;
    TimeLineLabel.push(label);
  }
  return TimeLineLabel;
}

function addClass(ganttDom, classes) {
  if (isArray(classes)) {
    classes.forEach(cls => {
        ganttDom.classList.add(cls);
    });
  } else {
    ganttDom.classList.add(classes);
  }
}

// 下半部分的时间轴文本
function handleSelectTimeLineLabel(currentTime, timeScope) {
  const label = [];
  let leftTimes, RightTimes;
  if (timeScope) {
    leftTimes = new Date(currentTime).getTime() - (SECONDS.weekSeconds - timeScope.leftTime);
    RightTimes = new Date(currentTime).getTime() - (SECONDS.weekSeconds - timeScope.rightTime);
  } else {
    leftTimes = new Date(currentTime).getTime() - SECONDS.daySeconds;
    RightTimes = new Date(currentTime).getTime();
  }
  const rightDate = new Date(RightTimes);
  const leftDate = new Date(leftTimes);
  const monL = leftDate.getMonth() + 1;
  const dateL = leftDate.getDate();
  const hourL = leftDate.getHours();
  const minL = leftDate.getMinutes();
  const secL = leftDate.getSeconds();
  const labelL = `${monL}.${dateL}\u00A0${hourL}:${minL < 10 ? `0${minL}` : minL}:${secL < 10 ? `0${secL}` : secL}`;
  label.push(labelL);
  const monR = rightDate.getMonth() + 1;
  const dateR = rightDate.getDate();
  const hourR = rightDate.getHours();
  const minR = rightDate.getMinutes();
  const secR = rightDate.getSeconds();
  const labelR = `${monR}.${dateR}\u00A0${hourR}:${minR < 10 ? `0${minR}` : minR}:${secR < 10 ? `0${secR}` : secR}`;
  label.push(labelR);
  return label;
}

function isSelectTime(currentTotalTime, sTime, eTime) {
  return currentTotalTime >= sTime * SECONDS.daySeconds && currentTotalTime <= eTime * SECONDS.daySeconds;
}
function handleSelectTime(duration, limit) {
  return duration > limit * SECONDS.seconds ? duration : limit * SECONDS.seconds;
}

function handleLimitValue(duration, currentTotalTime) {
  let value;
  TIMELIMIT.forEach(item => {
    if (isSelectTime(currentTotalTime, item.sTime, item.eTime)) {
      value = handleSelectTime(duration, item.limit);
    }
  });
  return value;
}

function handlePercent(postItemTime, currentTime, currentTotalTime, timeScope) {
  let selectTime;
  let percent;
  // 手柄拖拽的时候的逻辑
  if (currentTotalTime && timeScope) {
    const leftTimeScope = currentTime - (SECONDS.weekSeconds - timeScope.leftTime);
    const rightTimeScope = currentTime - (SECONDS.weekSeconds - timeScope.rightTime);
    // 当前数据在手柄选中时间内
    if (postItemTime.startTime >= leftTimeScope && postItemTime.endTime <= rightTimeScope) {
      selectTime = handleLimitValue(postItemTime.endTime - postItemTime.startTime, currentTotalTime);
      percent = selectTime / currentTotalTime;
      // 当前数据范围超过手柄的选中时间
    } else if (postItemTime.startTime < leftTimeScope && rightTimeScope < postItemTime.endTime) {
      percent = 1;
      // 当前数据的开始时间不在手柄选中范围，结束时间在手柄选中范围
    } else if (
      postItemTime.startTime < leftTimeScope &&
      postItemTime.endTime <= rightTimeScope &&
      postItemTime.endTime >= leftTimeScope
    ) {
      selectTime = handleLimitValue(postItemTime.endTime - leftTimeScope, currentTotalTime);
      percent = selectTime / currentTotalTime;
      // 当前数据的开始时间在手柄选中范围，结束时间不在手柄选中范围
    } else if (
      postItemTime.startTime >= leftTimeScope &&
      postItemTime.startTime <= rightTimeScope &&
      postItemTime.endTime > rightTimeScope
    ) {
      selectTime = handleLimitValue(rightTimeScope - postItemTime.startTime, currentTotalTime);
      percent = selectTime / currentTotalTime;
      // 当前数据在选中时间之外
    } else if (postItemTime.endTime <= leftTimeScope) {
      percent = 0;
      // 当前数据在选中时间之外
    } else if (postItemTime.startTime >= rightTimeScope) {
      percent = 0;
    }
  } else {
    // 初始加载的时候的逻辑
    percent =
      (postItemTime.endTime - postItemTime.startTime <= SECONDS.minuteSeconds
        ? SECONDS.minuteSeconds
        : postItemTime.endTime - postItemTime.startTime) / SECONDS.weekSeconds;
  }
  return percent;
}

function handleLeft(postItemTime, currentTime, currentTotalTime, timeScope) {
  let left;
  if (currentTotalTime && timeScope) {
    const leftTimeScope = currentTime - (SECONDS.weekSeconds - timeScope.leftTime);
    const rightTimeScope = currentTime - (SECONDS.weekSeconds - timeScope.rightTime);
    // 当前数据在手柄选中时间内
    if (leftTimeScope <= postItemTime.startTime && postItemTime.endTime <= rightTimeScope) {
      left = (currentTotalTime - (rightTimeScope - postItemTime.startTime)) / currentTotalTime;
      // 当前数据范围超过手柄的选中时间
    } else if (postItemTime.startTime < leftTimeScope && rightTimeScope < postItemTime.endTime) {
      left = 0;
      // 当前数据的开始时间不在手柄选中范围，结束时间在手柄选中范围
    } else if (
      postItemTime.startTime < leftTimeScope &&
      postItemTime.endTime <= rightTimeScope &&
      postItemTime.endTime >= leftTimeScope
    ) {
      left = 0;
      // 当前数据的开始时间在手柄选中范围，结束时间不在手柄选中范围
    } else if (
      postItemTime.startTime >= leftTimeScope &&
      postItemTime.startTime <= rightTimeScope &&
      postItemTime.endTime > rightTimeScope
    ) {
      left = (postItemTime.startTime - leftTimeScope) / currentTotalTime;
    } else if (postItemTime.endTime <= leftTimeScope) {
      left = 0;
    } else if (postItemTime.startTime >= rightTimeScope) {
      left = 0;
    }
  } else {
    left = (SECONDS.weekSeconds - (currentTime - postItemTime.startTime)) / SECONDS.weekSeconds;
  }
  return left;
}

// 柱子的颜色
function handleFillColor(postItem) {
  let color;
  switch (postItem.status) {
    case 'during':
      color = '#2070F3';
      break;
    case 'success':
      color = '#50C291';
      break;
    case 'stop':
      color = '#939393';
      break;
    case 'waiting':
      color = '#EEBA18';
      break;
    default:
      color = '#F46465';
      break;
  }
  return color;
}

function getChartPostLabel(differenceTime) {
  if (differenceTime >= SECONDS.daySeconds) {
    const day = Math.floor(differenceTime / SECONDS.daySeconds);
    const hour = Math.floor((differenceTime - day * SECONDS.daySeconds) / SECONDS.hourSeconds);
    return `${day}d'${hour}h`;
  } else if (differenceTime < SECONDS.daySeconds && differenceTime >= SECONDS.hourSeconds) {
    const hour = Math.floor(differenceTime / SECONDS.hourSeconds);
    const min = Math.floor((differenceTime - hour * SECONDS.hourSeconds) / SECONDS.minuteSeconds);
    return `${hour}h'${min}min`;
  } else {
    const min = Math.floor(differenceTime / SECONDS.minuteSeconds);
    const _second = Math.floor((differenceTime - min * SECONDS.minuteSeconds) / SECONDS.seconds);
    return `${min}min'${_second}s`;
  }
}

function innerTooltip(data, dataIndex, postIndex) {
  let tagHtml;
  const status = data[dataIndex].data[postIndex].status;
  if (status === 'success') {
    tagHtml = '<span class="tag success">执行成功</span>';
  } else if (status === 'during') {
    tagHtml = '<span class="tag">执行中</span>';
  } else {
    tagHtml = '<span class="tag failed">执行失败</span>';
  }
  return `
        <p class='title'>${defendXSS(data[dataIndex].name)}</p>
        ${tagHtml}
        <p class='time'>开始时间：${defendXSS(data[dataIndex].data[postIndex].startTime)}</p>
        <p class='time'>结束时间：${defendXSS(data[dataIndex].data[postIndex].endTime)}</p>
        <span class='ev_linkField'>查看报告</span>`;
}


const arrowStr=`
<svg width="5px" height="8px" viewBox="0 0 5 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>路径</title>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="全链路压测工具-工作台-甘特图时间轴修改" transform="translate(-621.000000, -707.000000)" stroke="#2070F3">
            <g id="压测报告备份" transform="translate(32.000000, 644.000000)">
                <g id="编组-13备份-8" transform="translate(32.000000, 56.000000)">
                    <g id="编组-5" transform="translate(553.000000, 0.000000)">
                        <polyline id="路径" transform="translate(6.500000, 10.000000) rotate(-180.000000) translate(-6.500000, -10.000000) " points="8 13 5 10 8 7"></polyline>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`

function  insetArrow(container){
  container.innerHTML=arrowStr
}


export {
  getTitle,
  getTextWidth,
  createEl,
  appendEL,
  className,
  appendText,
  appendNode,
  setStyle,
  setTranslateX,
  handleTimeLineLabel,
  handleSelectTimeLineLabel,
  addClass,
  handlePercent,
  handleLeft,
  handleFillColor,
  getChartPostLabel,
  innerTooltip,
  insetArrow
};
