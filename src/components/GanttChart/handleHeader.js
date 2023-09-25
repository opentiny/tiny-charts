import { second, createEl, className, appendEL, appendText, setStyle } from './util';
// 分钟当前时间
function handleMinCurrentTipLabel(currentTime) {
  const curTime = new Date(currentTime);
  const min = curTime.getMinutes();
  const hour = curTime.getHours();
  return `${hour}:${min < 10 ? `0${min}` : min}`;
}
// 分钟的时间轴显示文本
function handleMinTimeLabel(currentTime) {
  const curTime = new Date(currentTime);
  const time = curTime.getTime();
  const minArr = [];
  for (let i = 12; i >= 0; i--) {
    const _time = time - i * second.minuteSeconds * 5;
    const _curTime = new Date(_time);
    const _min = _curTime.getMinutes();
    let label;
    if (_min === 0) {
      label = '00';
    } else if (_min > 0 && _min < 10) {
      label = `0${_min}`;
    } else {
      label = _min.toString();
    }
    minArr.push(label);
  }
  return minArr;
}
// 小时当前时间
function handleHorCurrentTipLabel(currentTime) {
  const curTime = new Date(currentTime);
  const min = curTime.getMinutes();
  const hour = curTime.getHours();
  const date = curTime.getDate();
  const month = curTime.getMonth() + 1;
  return `${month}.${date}\u00A0${hour === 0 ? '00' : hour}:${min < 10 ? `0${min}` : min}`;
}
// 小时的时间轴显示文本
function handleHourTimeLabel(currentTime) {
  const curTime = new Date(currentTime);
  const time = curTime.getTime();
  const hourArr = [];
  for (let i = 12; i >= 0; i--) {
    const _time = time - i * second.hourSeconds * 2;
    const _curTime = new Date(_time);
    const _hour = _curTime.getHours();
    hourArr.push(_hour.toString());
  }
  return hourArr;
}
// 天当前时间
function handleDayCurrentTipLabel(currentTime) {
  const curTime = new Date(currentTime);
  const date = curTime.getDate();
  const month = curTime.getMonth() + 1;
  const curDay = curTime.getDay();
  let dayLabel;
  switch (curDay) {
    case 0:
      dayLabel = 'Sun';
      break;
    case 1:
      dayLabel = 'Mon';
      break;
    case 2:
      dayLabel = 'Tues';
      break;
    case 3:
      dayLabel = 'Wed';
      break;
    case 4:
      dayLabel = 'Thur';
      break;
    case 5:
      dayLabel = 'Fri';
      break;
    default:
      dayLabel = 'Sat';
      break;
  }
  return `${month}.${date}(${dayLabel})`;
}

// 处理头部的分钟时间节点提示框
function handleMinuteTimeTip(timeTip, option) {
  // 当前时间节点的信息
  const currentTime = new Date(option.currentTime);
  // 当前的秒
  const curSec = currentTime.getSeconds();
  // 当前分钟
  const curMin = currentTime.getMinutes();
  // 总计距离0点的毫秒数
  const tolmilliseconds = curSec * second.seconds + curMin * second.minuteSeconds;
  const left = `${((60 - curMin) / 60) * 100}%`;
  const _hour = new Date(currentTime.getTime() - tolmilliseconds).getHours();
  const label = `${_hour}:00`;
  appendText(timeTip, label);
  setStyle(timeTip, 'left', left);
}

// 处理头部的小时时间节点提示框
function handleHourTimeTip(timeTip, option) {
  // 当前时间节点的信息
  const currentTime = new Date(option.currentTime);
  // 当前小时
  const curHour = currentTime.getHours();
  // 当前月份
  const curMon = currentTime.getMonth() + 1;
  // 当前日期
  const curDate = currentTime.getDate();
  const left = `${((24 - curHour) / 24) * 100}%`;
  const label = `${curMon}.${curDate}\u00A000:00`;
  appendText(timeTip, label);
  setStyle(timeTip, 'left', left);
}

// 处理头部的周一时间节点提示框
function handleDayTimeTip(timeTip, option) {
  // 当前时间节点的信息
  const currentTime = new Date(option.currentTime);
  // 当前的秒
  const curSec = currentTime.getSeconds();
  // 当前分钟
  const curMin = currentTime.getMinutes();
  // 当前小时
  const curHour = currentTime.getHours();
  // 当前周几
  const curDay = currentTime.getDay();
  // 扣除的天数
  const dayCount = curDay === 0 ? 6 : curDay - 1;
  // 总计距离0点的毫秒数
  const tolmilliseconds =
    curHour * second.hourSeconds +
    curMin * second.minuteSeconds +
    (curSec * second.seconds + dayCount * second.daySeconds);
  const time = currentTime.getTime();
  const monTime = time - tolmilliseconds;
  const mon = new Date(monTime);
  const left = `${((7 - dayCount) / 7) * 100}%`;
  const label = `${mon.getMonth() + 1}.${mon.getDate()}(Mon)`;
  appendText(timeTip, label);
  setStyle(timeTip, 'left', left);
}

// 生成minute时间轴
function renderMinuteTime(node, label, option) {
  for (let i = 0; i <= 60; i++) {
    // 时间提示框
    if (i === 0) {
      const timeTip = createEl('div');
      className(timeTip, 'ev_GanttChart_timeTip');
      handleMinuteTimeTip(timeTip, option);
      appendEL(node, timeTip);
    }
    // 刻度
    const scale = createEl('div');
    className(scale, 'ev_GanttChart_scale');
    if (option.theme === 'dark') {
      setStyle(scale, 'background', '#bbb');
    }
    appendEL(node, scale);
    // 数字刻度
    if (i % 5 === 0) {
      const nubScale = createEl('div');
      className(nubScale, 'ev_GanttChart_nubScale');
      className(scale, 'ev_GanttChart_scale nub');
      appendText(nubScale, label[i / 5]);
      if (option.theme === 'dark') {
        setStyle(nubScale, 'color', '#bbb');
        setStyle(scale, 'background', 'transparent');
      }
      appendEL(scale, nubScale);
    }
    // 刻度间距
    if (i < 60) {
      const scaleBlank = createEl('div');
      className(scaleBlank, 'ev_GanttChart_scaleBlank');
      appendEL(node, scaleBlank);
    }
    if (i === 60) {
      const curTip = createEl('div');
      className(curTip, 'ev_GanttChart_currentTip');
      const currentTip = handleMinCurrentTipLabel(option.currentTime);
      appendText(curTip, currentTip);
      appendEL(node, curTip);
    }
  }
}

// 生成hour时间轴
function renderHourTime(node, label, option) {
  for (let i = 0; i <= 24; i++) {
    // 时间提示框
    if (i === 0) {
      const timeTip = createEl('div');
      className(timeTip, 'ev_GanttChart_timeTip');
      handleHourTimeTip(timeTip, option);
      appendEL(node, timeTip);
    }
    // 刻度
    const scale = createEl('div');
    className(scale, 'ev_GanttChart_scale');
    if (option.theme === 'dark') {
      setStyle(scale, 'background', '#bbb');
    }
    appendEL(node, scale);
    // 数字刻度
    if (i % 2 === 0) {
      const nubScale = createEl('div');
      className(nubScale, 'ev_GanttChart_nubScale');
      className(scale, 'ev_GanttChart_scale nub');
      appendText(nubScale, label[i / 2]);
      if (option.theme === 'dark') {
        setStyle(nubScale, 'color', '#bbb');
        setStyle(scale, 'background', 'transparent');
      }
      appendEL(scale, nubScale);
    }
    // 刻度间距
    if (i < 24) {
      const scaleBlank = createEl('div');
      className(scaleBlank, 'ev_GanttChart_scaleBlank');
      appendEL(node, scaleBlank);
    }
    if (i === 24) {
      const curTip = createEl('div');
      className(curTip, 'ev_GanttChart_currentTip');
      const currentTip = handleHorCurrentTipLabel(option.currentTime);
      appendText(curTip, currentTip);
      appendEL(node, curTip);
    }
  }
}
// day
function renderDayTime(node, option) {
  for (let i = 0; i <= 84; i++) {
    // 时间提示框
    if (i === 0) {
      const timeTip = createEl('div');
      className(timeTip, 'ev_GanttChart_timeTip');
      handleDayTimeTip(timeTip, option);
      appendEL(node, timeTip);
    }
    // 刻度
    const scale = createEl('div');
    className(scale, 'ev_GanttChart_scale');
    if (option.theme === 'dark') {
      setStyle(scale, 'background', '#bbb');
    }
    appendEL(node, scale);
    // 数字刻度
    if (i % 12 === 0) {
      const nubScale = createEl('div');
      className(nubScale, 'ev_GanttChart_nubScale');
      className(scale, 'ev_GanttChart_scale nub');
      appendText(nubScale, i / 12);
      if (option.theme === 'dark') {
        setStyle(nubScale, 'color', '#bbb');
        setStyle(scale, 'background', 'transparent');
      }
      appendEL(scale, nubScale);
    }
    // 高刻度
    if (i % 6 === 0 && (i / 6) % 2 !== 0) {
      className(scale, 'ev_GanttChart_scale high');
    }
    // 刻度线
    if (i < 84) {
      const scaleBlank = createEl('div');
      className(scaleBlank, 'ev_GanttChart_scaleBlank');
      appendEL(node, scaleBlank);
    }
    if (i === 84) {
      const curTip = createEl('div');
      className(curTip, 'ev_GanttChart_currentTip');
      const currentTip = handleDayCurrentTipLabel(option.currentTime);
      appendText(curTip, currentTip);
      appendEL(node, curTip);
    }
  }
}
// 生成头部的时间轴
function renderHeaderTime(node, type, option) {
  let label;
  switch (type) {
    case 'minute':
      label = handleMinTimeLabel(option.currentTime);
      renderMinuteTime(node, label, option);
      break;
    case 'hour':
      label = handleHourTimeLabel(option.currentTime);
      renderHourTime(node, label, option);
      break;
    default:
      renderDayTime(node, option);
      break;
  }
}

// 生成图表的头部
export function renderHeader(wrapper, option) {
  const header = createEl('div');
  className(header, 'ev_GanttChart_header');
  appendEL(wrapper, header);
  // 时间轴部分
  const headerTimeLine = createEl('div');
  className(headerTimeLine, 'ev_GanttChart_headerTimeLine');
  if (option.theme === 'dark') {
    setStyle(headerTimeLine, 'background', '#191919');
  }
  appendEL(header, headerTimeLine);
  // 标题
  const headerTitle = createEl('div');
  if (option && option.type) {
    let title;
    switch (option.type) {
      case 'minute':
        title = '分钟/minute';
        break;
      case 'day':
        title = '日/d';
        break;
      default:
        title = '小时/h';
        break;
    }
    appendText(headerTitle, title);
    if (option.theme === 'dark') {
      setStyle(headerTitle, 'color', '#bbb');
    }
  }
  className(headerTitle, 'ev_GanttChart_headerTitle');
  appendEL(headerTimeLine, headerTitle);
  // 时间轴
  const time = createEl('div');
  className(time, 'ev_GanttChart_headerTime');
  appendEL(headerTimeLine, time);
  // 创建头部时间刻度
  renderHeaderTime(time, option.type, option);
}
