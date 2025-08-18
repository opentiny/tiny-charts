import BaseChart from '../BaseChart';
import { createSvgElement } from './utils.js';
import { createTooltip } from './handleTooltip.js';
import { renderHeader } from './handleHeader.js';
import { createRowList } from './handleRowList.js';
import { createScrollArea } from './handleScroll.js';
import { merge, debounce } from './utils.js';
import { handlePadding, calcContentSize } from './handleOption.js';
import { HEADER_HEIGHT } from './constants.js';
import chartToken from './chartToken.js';
import init from '../../option/init';

// 默认配置选项
const defaultOption = {
  mode: 'svg',                       // 图表类型: svg, canvas
  data: [],                          // 图表总数据
  theme: 'hdesign-light',            // 主题样式
  titleName: '名称',                 //首部标题文本
  valueName: '金额',                 //首部数值文本
  percentName: '百分比文本',          //首部百分比文本
  padding: [16, 16, 0, 16],          // 图表内边距，顺序为[top, right, bottom, left]
  color: null,                       // 图表未指定颜色时的默认颜色，指定时需为数组
  tooltip: {                         // 提示框配置
    show: true,                      // 是否显示提示框
    formatter: null                  // 自定义格式化函数
  }
};

export default class HorizontalProcessChart extends BaseChart {
  constructor() {
    super();
    this.dom = null;               // 图表容器DOM元素
    this.option = defaultOption;   // 配置选项，初始为默认配置
    this.renderCallBack = null;    // 渲染完成回调函数
  }

  // 初始化图表容器
  init(dom) {
    this.dom = dom;
    this.width = dom.clientWidth;
    this.height = dom.clientHeight;

    // 创建根SVG元素
    this.svg = createSvgElement('svg', {
      width: `100%`,
      height: `100%`,
      style: `
              transition: all 0.3s ease-in-out; 
              border: ${chartToken.borderWidth}px solid ${chartToken.borderColor}; 
              border-radius: ${chartToken.borderRadius}px
             `,
      preserveAspectRatio: "xMidYMin meet"
    });
    this.dom.innerHTML = '';
    this.dom.appendChild(this.svg);
  }

  // 合并配置选项
  setSimpleOption(name, option) {
    if (!option || typeof option !== 'object') option = {};
    
    // 合并配置并初始化
    this.option = merge(this.option, option);
    this.option = init(this.option);
  }

  // 图表渲染
  render() {
    if (!this.svg) return;

    const { data, titleName, valueName, percentName, padding, color, tooltip } = this.option;
    
    // 为数据项添加颜色（如果没有指定的话）
    const newData = data.map((item, index) => ({
      ...item,
      color: item.color || color[index % color.length]
    }));

    // 处理配置选项
    const paddingConfig = handlePadding(padding, this.width, this.height);
    const { contentWidth, contentHeight } = calcContentSize(this.width, this.height, paddingConfig);

    // 挂载tooltip
    this.tooltip = createTooltip(this.svg, this.option.theme, tooltip);

    this.svg.innerHTML = '';

    // 用于padding偏移和限制row滚动
    this.contentGroup = createSvgElement('svg', {
      transform: `translate(${paddingConfig.left}, ${paddingConfig.top})`
    });

    // 创建虚拟列表
    this.rowList = createRowList({
      data: newData,  // 使用处理后的数据
      containerWidth: contentWidth, 
      scrollCallback: () => ({    // 闭包获取scrollArea中的属性，需要时调用回调获取
        scrollY: this.scrollArea ? this.scrollArea.scrollY : 0,   // 当前滚动位置
        viewHeight: contentHeight - HEADER_HEIGHT                 // 可视区域高度
      })
    });

    // 创建滚动区域
    this.scrollArea = createScrollArea(
      this.contentGroup,
      this.rowList,
      contentWidth,
      contentHeight,
    );

    // 渲染首部
    this.headerGroup = renderHeader(
      this.contentGroup,
      contentWidth,
      titleName,
      valueName,
      percentName,
    );

    this.svg.appendChild(this.contentGroup);

    // 监听页面变化
    this.setResize()
    this.renderCallBack ? this.renderCallBack() : '';
  }

  setResize() {
    const resizeHandler = () => {
      const newWidth = this.dom.clientWidth;
      const newHeight = this.dom.clientHeight;
      if (newWidth && newHeight) {
        this.width = newWidth;
        this.height = newHeight;
        
        // 重新计算位置
        const paddingConfig = handlePadding(this.option.padding, newWidth, newHeight);
        const { contentWidth, contentHeight } = calcContentSize(newWidth, newHeight, paddingConfig);
        
        // 更新布局
        this.contentGroup.setAttribute('transform', `translate(${paddingConfig.left}, ${paddingConfig.top})`);

        this.headerGroup.resize(contentWidth);
        this.rowList.resize(contentWidth);
        this.scrollArea.resize(contentWidth, contentHeight);
      }
    };

    this.resizeObserver = new ResizeObserver(debounce(resizeHandler, 100));
    this.resizeObserver.observe(this.dom);

    resizeHandler();
  }

  // 设置渲染完成回调
  onRenderReady(callback) {
    if(callback && typeof callback === 'function') {
      this.renderCallBack = callback;
    }
  }

  // 刷新图表配置
  refresh(newoption) {
    this.setSimpleOption(newoption);
    this.render();
  }
  // 仅刷新数据
  refreshData(newData) {
    this.option.data = newData;
    this.refresh(this.option);
  }

  // 卸载图表内容
  uninstall() {
    if (!this.svg) return this;
    this.svg.innerHTML = '';
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }

  }

  // 销毁图表
  destroy() {
    if (this.svg && this.dom) {
      this.uninstall();
      this.dom.innerHTML = ''
      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
      this.option = defaultOption;
    }
  }
}