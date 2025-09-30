import BaseChart from '../BaseChart/index.js';
import { createSvgElement } from './utils.js';
import { createTooltip } from './handleTooltip.js';
import { renderHeader } from './handleHeader.js';
import { createRowList } from './handleRowList.js';
import { createScrollArea } from './handleScroll.js';
<<<<<<< HEAD
import { updateSvgs, getColorsFromToken } from './utils.js';
=======
import { updateSvgs } from './utils.js';
>>>>>>> 36ad2d3953e279156d4255f82b8e916067efaacc
import { getMainChartStyles } from './style.js';
import { isArray } from '../../util/type.js';
import debounce from '../../util/debounce.js';
import { 
  resolveOption, 
<<<<<<< HEAD
  isUpdate,
=======
  isUpdate
>>>>>>> 36ad2d3953e279156d4255f82b8e916067efaacc
} from './handleOption.js';
import { HEADER, DEFAULT_OPTION, DEFAULT_SCROLL_INFO } from './constants.js';
import cloneDeep from '../../util/cloneDeep.js';
import chartToken from './chartToken.js';

export default class RankProcessChart extends BaseChart {

  constructor() {
    super();
    this.dom = null;                             // 图表容器
    this.option = {...DEFAULT_OPTION};           // 本次的配置选项
    this.lastOption = {...DEFAULT_OPTION};       // 上次的配置选项
    this.renderCallBack = null;                  // 渲染完成回调函数

  }

  // 初始化图表容器
  init(dom) {
    this.dom = dom;
    this.width = dom.clientWidth || 0;
    this.height = dom.clientHeight || 0;

    // 获取样式配置
    this.styles = getMainChartStyles(chartToken);
 
    if(this.svg) {
      this.dom.appendChild(this.svg);
      return;
    }

    // 创建根SVG元素
    this.svg = createSvgElement(
      'svg', 
      this.styles.getSvgStyles(), 
      this.dom
    );
  }

  // 合并配置选项
  setSimpleOption(name, option) {
    if (!option || typeof option !== 'object') option = DEFAULT_OPTION;
    
    // 把合并的逻辑放在handleOption中
    this.resolvedOption = resolveOption(this.option, option, this.width, this.height);
  }

  // 图表渲染
  render() {
    if (this.shouldSkipRender()) {
      this.update();
      return;
    }

    const { 
      titleName, 
      valueName, 
      percentName, 
      data,  
<<<<<<< HEAD
      tooltip,
      color,
=======
      tooltip, 
>>>>>>> 36ad2d3953e279156d4255f82b8e916067efaacc
      paddingConfig, 
      contentWidth, 
      contentHeight 
    } = this.resolvedOption;

    // 挂载tooltip
    this.tooltip = createTooltip(this.svg, this.resolvedOption.theme, tooltip);
    
    this.contentGroup = createSvgElement(
      'svg', 
      this.styles.getContentGroupStyles(paddingConfig.left, paddingConfig.top, contentWidth, contentHeight),
      this.svg
    );
    
    this.clipPath = createSvgElement('clipPath', this.styles.getClipPath(), this.svg);
    
    this.clipRect = createSvgElement(
      'rect', 
      this.styles.getClipRect(contentWidth, contentHeight),
      this.clipPath
    );
    
    this.contentGroup.setAttribute('clip-path', 'url(#contentClipPath)');
    
    // 创建虚拟列表
    this.rowList = createRowList({
      data,
<<<<<<< HEAD
      colorArray: color,
=======
>>>>>>> 36ad2d3953e279156d4255f82b8e916067efaacc
      containerWidth: contentWidth, 
      scrollCallback: () => ({    // 闭包获取scrollArea中的属性，需要时调用回调获取
        scrollY: this.scrollArea ? this.scrollArea.scrollY : DEFAULT_SCROLL_INFO.SCROLLY,   // 当前滚动位置
        viewHeight: contentHeight - HEADER.HEIGHT                 // 可视区域高度
      })
    });

    // 创建滚动区域
    this.scrollArea = createScrollArea(
      this.svg,
      this.contentGroup,
      this.rowList,
      contentWidth,
      contentHeight,
      paddingConfig
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
    this.setResize();
    this.renderCallBack ? this.renderCallBack() : '';
    
    // 更新渲染缓存
    this.updateRenderCache();
  }

  shouldSkipRender() {
    // 如果所有组件已经渲染，则可以跳过渲染，走更新流程
    if(this.contentGroup && this.rowList && this.scrollArea && this.headerGroup) {
      return true
    }

    return false;
  }

  // 更新渲染缓存
  updateRenderCache() {
    this.lastOption = cloneDeep(this.option);
  }

  resizeHandler() {
    const newWidth = this.dom.clientWidth;
    const newHeight = this.dom.clientHeight;
    if (newWidth && newHeight) {
      this.width = newWidth;
      this.height = newHeight;
        
      const { 
        paddingConfig, 
        contentWidth, 
        contentHeight,
      } = resolveOption(this.option, this.option, newWidth, newHeight);

      updateSvgs([
        { 
          el: this.contentGroup, 
          attrs: this.styles.updateContentGroup(paddingConfig.left, paddingConfig.top, contentWidth, contentHeight)
        },
        { 
          el: this.clipRect, 
          attrs: this.styles.updateClipRect(contentWidth, contentHeight)
        }
      ]);

      if(this.headerGroup) this.headerGroup.resize(contentWidth);
      if(this.rowList) this.rowList.resize(contentWidth);
      if(this.scrollArea) this.scrollArea.resize(contentWidth, contentHeight, paddingConfig);
    }
  };

  setResize() {
    this.resizeHandler();
    this.resizeObserver = new ResizeObserver(debounce(this.resizeHandler.bind(this), 100));
    this.resizeObserver.observe(this.dom);
  }

<<<<<<< HEAD
  // 更新样式和颜色
  updateStyles() {
    // 动态获取最新的 chartToken
    import('../../feature/token/index.js').then(Token => {
      const latestChartToken = Token.default.getTokenByName('RankProcessChart');

      // 更新时优先使用用户设置的颜色，如果没有则使用主题颜色
      let colorArray = null;
      if (this.option.color && this.option.color.length > 0) {
        colorArray = this.option.color;
      } else {
        colorArray = getColorsFromToken();
      }

      if(this.headerGroup) this.headerGroup.updateStyles(latestChartToken);
      if(this.rowList) this.rowList.updateStyles(latestChartToken, colorArray);
      if(this.scrollArea) this.scrollArea.updateStyles(latestChartToken);
      if(this.tooltip) this.tooltip.updateStyles(this.option.theme);
=======
  // 更新主题
  updateTheme() {
    // 动态获取最新的 chartToken
    import('../../feature/token/index.js').then(Token => {
      const latestChartToken = Token.default.getTokenByName('RankProcessChart');
      
      if(this.headerGroup) this.headerGroup.updateTheme(latestChartToken);
      if(this.rowList) this.rowList.updateTheme(latestChartToken);
      if(this.scrollArea) this.scrollArea.updateTheme(latestChartToken);
      if(this.tooltip) this.tooltip.updateTheme(this.option.theme);
>>>>>>> 36ad2d3953e279156d4255f82b8e916067efaacc
    });
  }

  // 更新布局
  updateLayout() {
    this.resizeHandler();
  }

  update() {
    // 判断哪些属性需要更新
    const updates = isUpdate(this.option, this.lastOption);

    if (updates) {
      const { 
        titleName, 
        valueName, 
        percentName,
<<<<<<< HEAD
        data,
=======
        data, 
>>>>>>> 36ad2d3953e279156d4255f82b8e916067efaacc
        paddingConfig, 
        contentWidth, 
        contentHeight,
      } = resolveOption(this.option, this.option, this.width, this.height);

<<<<<<< HEAD
      if (updates.includes('data') || 
          updates.includes('sort') ||
          updates.includes('padding')) 
=======
      if (updates.includes('data') || updates.includes('color') || 
          updates.includes('padding') || updates.includes('sort')) 
>>>>>>> 36ad2d3953e279156d4255f82b8e916067efaacc
      {
        this.rowList.updateRows({
          data,
          containerWidth: contentWidth,
          scrollCallback: () => ({
            scrollY: this.scrollArea ? this.scrollArea.scrollY : DEFAULT_SCROLL_INFO.SCROLLY,
            viewHeight: contentHeight - HEADER.HEIGHT
          })
        });
      }

      if (updates.includes('data') || updates.includes('color') || updates.includes('padding')) {
        this.scrollArea.updateScrollArea({
          width: contentWidth,
          height: contentHeight,
          paddingConfig
        });
      }

      if (updates.includes('titleName') || updates.includes('valueName') || 
          updates.includes('percentName') || updates.includes('padding')) 
      {
        this.headerGroup.updateText({
          titleName,
          valueName,
          percentName,
          headerWidth: contentWidth
        });
      }

<<<<<<< HEAD
      if (updates.includes('theme') || updates.includes('color')) {
        this.updateStyles();
=======
      if (updates.includes('theme')) {
        this.updateTheme();
>>>>>>> 36ad2d3953e279156d4255f82b8e916067efaacc
      }

      if(updates.includes('padding')) {
        this.updateLayout();
      }

      this.updateRenderCache();
    }

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
    if (!isArray(newData)) {
      newData = [newData];
    }
    this.option.data = newData;
    this.refresh(this.option);
  }

  // 卸载图表内容
  uninstall() {
    this.svg.innerHTML = '';
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    if (this.scrollArea) {
      this.scrollArea.destroy();
    }
  }

  // 销毁图表
  destroy() {
    if (this.dom) {
      this.uninstall();
      this.dom.innerHTML = ''
      if (this.tooltip) {
        this.tooltip.destroy();
      }
      this.option = {...DEFAULT_OPTION};
    }
  }
}