import {
  getTitle,
  createEl,
  appendEL,
  appendText,
  setStyle,
  setTranslateX,
  appendNode,
  handleTimeLineLabel,
  handleSelectTimeLineLabel,
  addClass,
} from './util';
import CoordinateSystem from './CoordinateSystem';
import * as constants from './constant';

export default class TimeLine {
  wrapper = null;
  // 左手柄的开始坐标
  startX = 0;
  // 左手柄的位移值
  distance = 0;
  // 右手柄的开始坐标
  startX2 = 0;
  // 右手柄的位移值
  distance2 = 0;
  // 初始的左手柄的位移值
  handleLDis = 0;
  // 初始的右手柄位移值
  handleRDis = 0;
  // 遮罩
  mask = null;
  // 左手柄
  handleL = null;
  // 右手柄
  handleR = null;
  // 图表宽度
  innerChartWidth = 0;
  // option
  option = {};
  // chartHeight
  innerChartHeight = 0;
  // 头部下半部分的时间轴
  selectTimeLine = null;
  // 内部canvas对象
  innerCtx = null;

  coordinateSystem;

  constructor(wrapper, option, barContainerWidth, barContainerHeight) {
    this.wrapper = wrapper;
    this.handleRDis = barContainerWidth;
    this.innerChartWidth = barContainerWidth;
    this.option = option;
    this.innerChartHeight = barContainerHeight;
  }

  createDom(className) {
    const node = createEl('div');
    addClass(node, className);
    return node;
  }

  addClassName(node, className) {
    addClass(node, className);
  }

  addDom(container, node) {
    appendEL(container, node);
  }

  clearDom(node) {
    appendNode(node, '');
  }

  addText(node, text) {
    appendText(node, text);
  }

  renderTitle(node) {
    // 标题
    const headerTitle = this.createDom('ev_GanttChart_headerTitle');
    const title = getTitle(this.option.currentTime);
    // 上标题
    const titleTop = this.createDom('ev_GanttChart_titleTop');
    this.addText(titleTop, title.yearLabel);
    this.addDom(headerTitle, titleTop);
    // 下标题
    const titleBtn = this.createDom('ev_GanttChart_titleBtn');
    this.addText(titleBtn, title.dateLabel);
    this.addDom(headerTitle, titleBtn);
    this.addDom(node, headerTitle);
  }

  // 设置遮罩宽度
  setMaskWidth() {
    const width = `${this.handleRDis - this.handleLDis - 12}px`;
    const left = `${this.handleLDis + 6}px`;
    setStyle(this.mask, 'width', width);
    setStyle(this.mask, 'left', left);
  }

  // 获取手柄选中的时间范围
  getTimeScope() {
    const leftTime = parseInt((this.handleLDis / this.innerChartWidth) * constants.SECONDS.weekSeconds);
    const rightTime = parseInt((this.handleRDis / this.innerChartWidth) * constants.SECONDS.weekSeconds);
    const timeScope = {
      leftTime,
      rightTime,
    };
    return timeScope;
  }

  // 生成头部下半部分的时间轴
  renderSelectTimeLine(timeScope) {
    if (this.selectTimeLine) {
      this.clearDom(this.selectTimeLine);
    }
    const label = handleSelectTimeLineLabel(this.option.currentTime, timeScope);
    // 左边显示的文本
    const selectLeft = this.createDom('ev_GanttChart_selectLeft');
    this.addText(selectLeft, label[0]);
    this.addDom(this.selectTimeLine, selectLeft);
    // 中间的线
    const verticalLineL = this.createDom('ev_GanttChart_verticalLineL');
    this.addDom(this.selectTimeLine, verticalLineL);

    const horizontalLine = this.createDom('ev_GanttChart_horizontalLine');
    this.addDom(this.selectTimeLine, horizontalLine);

    const verticalLineR = this.createDom('ev_GanttChart_verticalLineR');
    this.addDom(this.selectTimeLine, verticalLineR);
    // 右边显示的文本
    const selectRight = this.createDom('ev_GanttChart_selectRight');
    this.addText(selectRight, label[1]);
    this.addDom(this.selectTimeLine, selectRight);
  }

  // 手柄移动时设置头部的下半部分时间轴
  setSelectTimeLine() {
    // 当前两个手柄之间的所占时间
    const timeScope = this.getTimeScope();
    this.renderSelectTimeLine(timeScope);
  }

  // 重绘头部时间轴
  resetTimeLine(node, distance) {
    setTranslateX(node, distance);
    this.setMaskWidth();
    this.setSelectTimeLine();
  }

  mouseMoveLeft = e => {
    const pageX = e.clientX;
    let moveX = pageX - this.startX + this.distance;
    // 向右边取的极限值
    const rightLimitValue = this.handleRDis - 15;
    // 移动时距离左边的距离
    if (moveX >= rightLimitValue) {
      this.handleLDis = rightLimitValue;
      // 修正位移值
      moveX = rightLimitValue;
    } else if (moveX <= 0) {
      this.handleLDis = 0;
      // 修正位移值
      moveX = 0;
    } else {
      this.handleLDis = moveX;
    }
    if (moveX <= rightLimitValue && moveX >= 0) {
      this.resetTimeLine(this.handleL, moveX, 'left');
      // 待定
      this.resetBody();
    }
  };

  mouseUpLeft = e => {
    const pageX = e.clientX;
    this.distance += pageX - this.startX;
    // 距离左边的距离
    const rightLimitValue = this.handleRDis - 15;
    if (this.distance >= rightLimitValue) {
      this.handleLDis = rightLimitValue;
      // 修正位移值
      this.distance = rightLimitValue;
    } else if (this.distance <= 0) {
      this.handleLDis = 0;
      // 修正位移值
      this.distance = 0;
    } else {
      this.handleLDis = this.distance;
    }

    document.removeEventListener('mousemove', this.mouseMoveLeft);
    document.removeEventListener('mouseup', this.mouseUpLeft);
  };

  mouseDownLeft = e => {
    const pageX = e.clientX;
    this.startX = pageX;
    document.addEventListener('mousemove', this.mouseMoveLeft);
    document.addEventListener('mouseup', this.mouseUpLeft);
    return false;
  };

  mouseMoveRight = e => {
    const pageX = e.clientX;
    let moveX = pageX - this.startX2 + this.distance2;
    const leftLimitValue = this.handleLDis + 15;
    // 移动时算出和左边的距离
    if (moveX >= 0) {
      this.handleRDis = this.innerChartWidth;
      moveX = 0;
    } else if (moveX <= -(this.innerChartWidth - leftLimitValue)) {
      this.handleRDis = leftLimitValue;
      moveX = -(this.innerChartWidth - leftLimitValue);
    } else {
      this.handleRDis = this.innerChartWidth + moveX;
    }
    if (moveX >= -(this.innerChartWidth - leftLimitValue) && moveX <= 0) {
      this.resetTimeLine(this.handleR, moveX, 'right');
      this.resetBody();
    }
  };

  mouseUpRight = e => {
    const pageX = e.clientX;
    this.distance2 += pageX - this.startX2;
    const leftLimitValue = this.handleLDis + 15;
    // 结束时距离左边的距离
    if (this.distance2 <= -(this.innerChartWidth - leftLimitValue)) {
      this.handleRDis = leftLimitValue;
      this.distance2 = -(this.innerChartWidth - leftLimitValue);
    } else if (this.distance2 >= 0) {
      this.handleRDis = this.innerChartWidth;
      this.distance2 = 0;
    } else {
      this.handleRDis = this.innerChartWidth + this.distance2;
    }

    document.removeEventListener('mousemove', this.mouseMoveRight);
    document.removeEventListener('mouseup', this.mouseUpRight);
  };

  mouseDownRight = e => {
    const pageX = e.clientX;
    this.startX2 = pageX;
    document.addEventListener('mousemove', this.mouseMoveRight);
    document.addEventListener('mouseup', this.mouseUpRight);
    return false;
  };

  // 生成头部上半部分的时间轴
  renderHeaderTime(node) {
    const label = handleTimeLineLabel(this.option.currentTime);
    for (let i = 0; i <= 28; i++) {
      // 刻度
      const scale = this.createDom('ev_GanttChart_scale');
      this.addDom(node, scale);

      // 数字刻度
      if (i % 4 === 0) {
        const nubScale = this.createDom('ev_GanttChart_nubScale');
        this.addClassName(scale, 'nub');
        this.addText(nubScale, label[i / 4]);
        this.addDom(scale, nubScale);
      }
      // 高刻度
      if (i % 2 === 0 && (i / 2) % 2 !== 0) {
        this.addClassName(scale, 'high');
      }
      // 刻度线
      if (i < 28) {
        const scaleBlank = this.createDom('ev_GanttChart_scaleBlank');
        this.addDom(node, scaleBlank);
      }
      if (i === 28) {
        // 增加时间轴拖动手柄
        const handleWrapper = this.createDom('ev_GanttChart_handleWrapper');
        this.addDom(node, handleWrapper);
        // 左手柄
        const handleLeft = this.createDom('ev_GanttChart_handleLeft');
        this.handleL = handleLeft;

        const leftIcon = this.createDom('ev_GanttChart_leftIcon');
        //  中间的遮罩
        const maskMid = this.createDom('ev_GanttChart_mask');
        this.mask = maskMid;
        this.addDom(handleWrapper, maskMid);
        // 右手柄
        const handleRight = this.createDom('ev_GanttChart_handleRight');
        this.handleR = handleRight;
        const rightIcon = this.createDom('ev_GanttChart_rightIcon');

        this.addDom(handleLeft, leftIcon);
        this.addDom(handleWrapper, handleLeft);
        this.addDom(handleRight, rightIcon);
        this.addDom(handleWrapper, handleRight);

        this.handleL.onmousedown = this.mouseDownLeft;
        this.handleR.onmousedown = this.mouseDownRight;
      }
    }
  }

  // 两个手柄之间的差值
  getCurrentTotalTime() {
    const diffDistance = this.handleRDis - this.handleLDis;
    const distancePercent = diffDistance / this.innerChartWidth;
    const time = parseInt(distancePercent * constants.SECONDS.weekSeconds);
    return time;
  }

  resetBody() {
    // 当前两个手柄之间的所占时间
    const currentTotalTime = this.getCurrentTotalTime();
    const timeScope = this.getTimeScope();
    // 调用重新渲染的函数
    this.coordinateSystem.resetCanvas(currentTotalTime, timeScope);
  }

  initHandlePositon() {
    this.handleLDis = this.distance = parseInt((this.innerChartWidth * 6) / 7);
    setTranslateX(this.handleL, this.distance);
    this.setMaskWidth('left');
    // 待定
    this.resetBody();
  }

  init() {
    const header = this.createDom('ev_GanttChart_header');
    this.addDom(this.wrapper, header);
    // 时间轴部分
    const headerTimeLine = this.createDom('ev_GanttChart_headerTimeLine');
    this.addDom(header, headerTimeLine);
    this.renderTitle(headerTimeLine);
    // 时间轴
    const time = this.createDom('ev_GanttChart_headerTime');
    this.addDom(headerTimeLine, time);
    // 上部分的时间轴
    const timeTopContainer = this.createDom('ev_GanttChart_headerTimeTop_container');
    this.addDom(time, timeTopContainer);

    const timeTop = this.createDom('ev_GanttChart_headerTimeTop');
    this.addDom(timeTopContainer, timeTop);

    // 创建头部时间刻度
    this.renderHeaderTime(timeTop);
    // // 下半部分的时间轴
    const timeBtmContainer = this.createDom('ev_GanttChart_headerTimeBtm_container');
    this.addDom(time, timeBtmContainer);

    const timeBtm = this.createDom('ev_GanttChart_headerTimeBtm');
    this.addDom(timeBtmContainer, timeBtm);
    this.selectTimeLine = timeBtm;
    this.renderSelectTimeLine();

    this.coordinateSystem = new CoordinateSystem(
      this.wrapper,
      this.option,
      this.innerChartWidth,
      this.innerChartHeight,
    );
    this.coordinateSystem.init();
    this.initHandlePositon();
  }
}
