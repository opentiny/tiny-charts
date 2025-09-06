import BaseChart from '../BaseChart/index.js';
import { createSvgElement } from './utils.js';
import { createTooltip } from './handleTooltip.js';
import { renderHeader } from './handleHeader.js';
import { createRowList } from './handleRowList.js';
import { createScrollArea } from './handleScroll.js';
import { updateSvgs } from './utils.js';
import { getMainChartStyles } from './style.js';
import merge from '../../util/merge.js';
import debounce from '../../util/debounce.js';
import { 
  resolveOption, 
  isUpdate
} from './handleOption.js';
import { HEADER_HEIGHT } from './constants.js';
import chartToken from './chartToken.js';
import init from '../../option/init/index.js';
import Token from '../../feature/token/index.js';

// 默认配置选项
const defaultOption = {
  mode: 'svg',                       // 图表渲染模式: svg, canvas
  data: [],                          // 图表总数据
  theme: 'hdesign-light',            // 主题样式
  titleName: '名称',                 // 首部标题文本
  valueName: '金额',                 // 首部数值文本
  percentName: '贡献度',             // 首部百分比文本
  padding: [16, 16, 0, 16],          // 图表内边距，顺序为[top, right, bottom, left]
  color: null,                       // 图表未指定颜色时的默认颜色，指定时需为数组
  tooltip: {                         // 提示框配置
    show: true,                      // 是否显示提示框
    formatter: null                  // 自定义格式化函数
  }
};

export default class RankProcessChart extends BaseChart {
  constructor() {
    super();
    this.dom = null;                        // 图表容器DOM元素
    this.option = defaultOption;            // 配置选项，初始为默认配置
    this.lastOption = defaultOption;        // 上次的配置选项
    this.renderCallBack = null;             // 渲染完成回调函数
    
    // 获取样式配置
    this.styles = getMainChartStyles(chartToken);
  }

  // 初始化图表容器
  init(dom) {
    this.dom = dom;
    this.width = dom.clientWidth;
    this.height = dom.clientHeight;

    if(this.svg) {
      this.dom.appendChild(this.svg);
      return;
    }

    // 创建根SVG元素
    this.svg = createSvgElement('svg', this.styles.getSvgStyles());
    this.dom.appendChild(this.svg);
  }

  // 合并配置选项
  setSimpleOption(name, option) {
    if (!option || typeof option !== 'object') option = {};

    // 合并配置并初始化
    this.option = merge(this.option, option);
    this.option = init(this.option);
    Token.setDefaultTheme(this.option.theme);
  }

  // 图表渲染
  render() {
    if (this.shouldSkipRender()) {
      this.update();
      return;
    }

    const { titleName, valueName, percentName, tooltip } = this.option;
    
    const { 
      processedData: newData, 
      paddingConfig, 
      contentWidth, 
      contentHeight,
    } = resolveOption(this.option, this.width, this.height);

    // 挂载tooltip
    this.tooltip = createTooltip(this.svg, this.option.theme, tooltip);
    
    this.contentGroup = createSvgElement(
      'svg', 
      this.styles.getContentGroupStyles(paddingConfig.left, paddingConfig.top, contentWidth, contentHeight)
    );
    
    this.clipPath = createSvgElement('clipPath', this.styles.getClipPath());
    
    this.clipRect = createSvgElement(
      'rect', 
      this.styles.getClipRect(contentWidth, contentHeight)
    );
    
    this.clipPath.appendChild(this.clipRect);
    this.svg.appendChild(this.clipPath);
    this.contentGroup.setAttribute('clip-path', 'url(#contentClipPath)');
    
    // 创建虚拟列表
    this.rowList = createRowList({
      data: newData,
      containerWidth: contentWidth, 
      scrollCallback: () => ({    // 闭包获取scrollArea中的属性，需要时调用回调获取
        scrollY: this.scrollArea ? this.scrollArea.scrollY : 0,   // 当前滚动位置
        viewHeight: contentHeight - HEADER_HEIGHT                 // 可视区域高度
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
    this.lastOption = {...this.option};
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
        } = resolveOption(this.option, newWidth, newHeight);
        
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

        this.headerGroup.resize(contentWidth);
        this.rowList.resize(contentWidth);
        this.scrollArea.resize(contentWidth, contentHeight, paddingConfig);
      }
    };

  setResize() {
    this.resizeHandler();
    this.resizeObserver = new ResizeObserver(debounce(this.resizeHandler.bind(this), 100));
    this.resizeObserver.observe(this.dom);
  }

  // 更新主题
  updateTheme() {
    // 动态获取最新的 chartToken
    import('../../feature/token/index.js').then(Token => {
      const latestChartToken = Token.default.getTokenByName('RankProcessChart');
      
      this.headerGroup.updateTheme(latestChartToken);
      this.rowList.updateTheme(latestChartToken);
      this.scrollArea.updateTheme(latestChartToken);
      this.tooltip.updateTheme(this.option.theme);
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
      const { titleName, valueName, percentName } = this.option;
      
      const { 
        processedData: newData, 
        paddingConfig, 
        contentWidth, 
        contentHeight,
      } = resolveOption(this.option, this.width, this.height);

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

      if (updates.includes('data') || updates.includes('color') || updates.includes('padding')) {
        this.rowList.updateRows({
          data: newData,
          containerWidth: contentWidth,
          scrollCallback: () => ({
            scrollY: this.scrollArea ? this.scrollArea.scrollY : 0,
            viewHeight: contentHeight - HEADER_HEIGHT
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

      if (updates.includes('titleName') || updates.includes('valueName') || updates.includes('percentName') || updates.includes('padding')) {
        this.headerGroup.updateText({
          titleName,
          valueName,
          percentName,
          headerWidth: contentWidth
        });
      }

      if (updates.includes('theme')) {
        this.updateTheme();
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
    this.option.data = newData;
    this.refresh(this.option);
  }

  // 卸载图表内容
  uninstall() {
    this.svg.innerHTML = '';
    if (this.resizeObserver) {
      this.resizeObserver = null;
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
      this.option = defaultOption;
    }
  }
}