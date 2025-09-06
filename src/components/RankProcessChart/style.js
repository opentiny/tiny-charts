// 获取首部样式
export function getHeaderStyles(chartToken) {
  return {
   
    getHeaderBg: (headerWidth, headerHeight) => ({
      width: headerWidth,
      height: headerHeight,
      fill: chartToken.header.bgColor,
    }),

    getHeaderContainer: (headerHeight) => ({
      transform: `translate(0, ${headerHeight * 0.65})`
    }),

    getHeaderText: (columnX) => 
      columnX.map(x => ({
        x,
        fill: chartToken.textDeepColor,
        'font-size': chartToken.fontSize,
        'font-weight': '600',
        'text-anchor': 'start',
      })),

    updateHeaderBg: (newWidth) => ({
      width: newWidth,
    }),

    updateHeaderText: (columnX) => 
      columnX.map(x => ({ x })),

    getThemeUpdates: () => ({
      headerBg: { fill: chartToken.header.bgColor },
      headerText: {
        fill: chartToken.textDeepColor,
        'font-size': chartToken.fontSize
      }
    })
  };
}

// 获取行样式
export function getRowStyles(chartToken) {
  return {
    // 动态配置函数
    getRowContainer: (index, rowHeight) => ({
      style: `
        transform: translate(0, ${index * rowHeight}px);
        transition: transform 0.5s ease;
        transform-box: fill-box;
      `
    }),

    getRowBg: (rowWidth, rowHeight) => ({
      x: '0',
      y: '0',
      width: rowWidth,
      height: rowHeight,
      rx: chartToken.borderRadius,
      ry: chartToken.borderRadius,
      fill: chartToken.row.bgColor,
    }),

    getRankBg: (X, textBaselineY, rankBgSize, rankColor) => ({
      x: X,
      y: textBaselineY - chartToken.fontSize,
      width: rankBgSize,
      height: rankBgSize,
      rx: chartToken.borderRadius,
      ry: chartToken.borderRadius,
      fill: rankColor,
    }),

    getRankText: (X, textBaselineY, rankBgSize) => ({
      x: X + rankBgSize / 2,
      y: textBaselineY,
      fill: '#fff',
      'font-size': chartToken.fontSize,
      'font-weight': '500',
      'text-anchor': 'middle',
    }),

    getNameText: (padding, rankBgSize, textBaselineY) => ({
      x: padding * 1.2 + rankBgSize,
      y: textBaselineY,
      fill: chartToken.textPaleColor,
      'font-size': chartToken.fontSize,
      'font-weight': '400',
      'text-anchor': 'start',
    }),

    getValueText: (X, textBaselineY) => ({
      x: X,
      y: textBaselineY,
      fill: chartToken.textDeepColor,
      'font-size': chartToken.fontSize,
      'font-weight': '600',
      'text-anchor': 'start',
    }),

    getPercentText: (X, textBaselineY) => ({
      x: X,
      y: textBaselineY,
      fill: chartToken.textDeepColor,
      'font-size': chartToken.fontSize,
      'font-weight': '600',
      'text-anchor': 'start',
    }),

    getProgressBarBg: (padding, rowHeight, progressBarWidth, progressBarHeight) => ({
      x: padding,
      y: rowHeight * 0.55,
      width: progressBarWidth,
      height: progressBarHeight,
      rx: chartToken.row.progressBarRadius,
      ry: chartToken.row.progressBarRadius,
      fill: chartToken.row.itemBgEmpty,
      style: 'transition: all 0.6s ease',
    }),

    getProgressBar: (padding, rowHeight, progressBarHeight, dataColor) => ({
      x: padding,
      y: rowHeight * 0.55,
      width: '0',
      height: progressBarHeight,
      fill: dataColor,
      rx: chartToken.row.progressBarRadius,
      ry: chartToken.row.progressBarRadius,
      style: 'transition: all 0.6s ease',
    }),

    getAnimation: (progressBarWidth, percent) => ({
      from: '0',
      to: progressBarWidth * ((percent || 0) / 100),
      attributeName: 'width',
      fill: 'freeze',
      calcMode: 'spline',
      keyTimes: '0;1',
      keySplines: '0.42 0 0.58 1',
      dur: '1.2s',
    }),

    updateRowBg: (newWidth) => ({
      width: newWidth,
    }),

    updateRank: (X, textBaselineY) => ({
      x: X,
      y: textBaselineY - chartToken.fontSize,
    }),

    updateRankText: (X, textBaselineY, rankBgSize) => ({
      x: X + rankBgSize / 2,
      y: textBaselineY,
    }),

    updateText: (columnX) => [
      { x: columnX[1] },
      { x: columnX[2] }
    ],

    updateProgressBar: (progressBarWidth, percent) => ({
      width: progressBarWidth * ((percent || 0) / 100),
    }),

    updateProgressBarBg: (progressBarWidth) => ({
      width: progressBarWidth,
    }),

    getThemeUpdates: () => ({
      rowBackground: { fill: chartToken.row.bgColor },
      rankText: { 'font-size': chartToken.fontSize },
      nameText: {
        fill: chartToken.textPaleColor,
        'font-size': chartToken.fontSize
      },
      valueText: {
        fill: chartToken.textDeepColor,
        'font-size': chartToken.fontSize
      },
      percentText: {
        fill: chartToken.textDeepColor,
        'font-size': chartToken.fontSize
      },
      progressBar: {
        height: chartToken.row.progressBarHeight,
        rx: chartToken.row.progressBarRadius,
        ry: chartToken.row.progressBarRadius
      },
      progressBarBackground: {
        height: chartToken.row.progressBarHeight,
        rx: chartToken.row.progressBarRadius,
        ry: chartToken.row.progressBarRadius
      }
    })
  };
}

// 获取排名颜色
export function getRankColor(rank) {
  const rankColors = {
    1: '#E7434A',  // 第1名红色
    2: '#F4840C',  // 第2名橙色
    3: '#FCC800',  // 第3名金色
  };
  return rankColors[rank] || '#C9C9C9'; // 浅灰色
}

// 更改Tooltip主题样式
function getTooltipThemeConfig(theme) {
  const isDark = theme && theme.includes('dark');
  
  const lightTheme = {
    background: '#ffffffff',
    textColor: '#191919',
    borderColor: 'transparent',
    shadowColor: 'rgba(0, 0, 0, 0.2)'
  };
  
  const darkTheme = {
    background: '#393939',
    textColor: '#FFFFFF',
    borderColor: 'transparent',
    shadowColor: 'rgba(125, 125, 125, 0.3)'
  };
  
  return isDark ? darkTheme : lightTheme;
}

// 获取Tooltip样式
function getBaseStyles(theme, isVisible = false) {
  
  const themeConfig = getTooltipThemeConfig(theme);
  
  return `
    position: fixed;
    z-index: 9999;
    padding: 16px;
    background-color: ${themeConfig.background};
    color: ${themeConfig.textColor};
    border: 1px solid ${themeConfig.borderColor};
    border-radius: 4px;
    box-shadow: 0 2px 8px 0 ${themeConfig.shadowColor};
    font-size: 14px;
    font-weight: normal;
    pointer-events: none;
    line-height: 1.6;
    text-align: left;
    opacity: ${isVisible ? '1' : '0'};
    visibility: ${isVisible ? 'visible' : 'hidden'};
    transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
  `;
}

// 获取Tooltip相关配置
export function getTooltipStyles() {
  return {
    getBaseStyles: (theme) => getBaseStyles(theme, false),

    getPosition: (left, top) => ({
      left: `${left}px`,
      top: `${top}px`
    }),

    getVisibility: (isVisible) => ({
      opacity: isVisible ? '1' : '0',
      visibility: isVisible ? 'visible' : 'hidden'
    }),

    getThemeUpdate: (theme) => getBaseStyles(theme, false)
  };
}

// 获取滚动条样式
export function getScrollStyles(chartToken) {
  return {
    showTransition: 'opacity 0.1s ease-in',
    hideTransition: 'opacity 1s ease-out',

    getViewArea: () => ({
      transform: `translate(0, 0)`,
      style: 'transition: all 0.6s ease',
    }),

    getScrollArea: () => ({
      transform: 'translate(0, 0)',
      style: 'transition: all 0.6s ease',
    }),

    getScrollTrack: (scrollBarX, paddingTop, headerHeight, viewHeight, scrollThumbWidth) => ({
      x: scrollBarX,
      y: paddingTop + headerHeight,
      width: scrollThumbWidth,
      height: viewHeight,
      rx: scrollThumbWidth / 2,
      ry: scrollThumbWidth / 2,
      fill: chartToken.scroll.trackColor,
      opacity: '0',
    }),

    getScrollThumb: (scrollBarX, paddingTop, headerHeight, scrollThumbWidth) => ({
      x: scrollBarX,
      y: paddingTop + headerHeight,
      width: scrollThumbWidth,
      rx: scrollThumbWidth / 2,
      ry: scrollThumbWidth / 2,
      fill: chartToken.scroll.thumbColor,
      cursor: 'pointer',
      opacity: '0',
    }),

    updateScrollTrack: (scrollBarX, paddingTop, headerHeight, viewHeight) => ({
      x: scrollBarX,
      y: paddingTop + headerHeight,
      height: viewHeight,
    }),

    updateScrollThumb: (scrollBarX, paddingTop, headerHeight, height) => ({
      x: scrollBarX,
      y: paddingTop + headerHeight,
      height: height,
    }),

    getThemeUpdates: () => ({
      track: { fill: chartToken.scroll.trackColor },
      thumb: { fill: chartToken.scroll.thumbColor }
    })
  };
}

// 获取RankProgressChart样式
export function getMainChartStyles(chartToken) {
  return {
    // 
    getSvgStyles: () => ({
      width: '100%',
      height: '100%',
      style: `
        border: ${chartToken.borderWidth}px solid ${chartToken.borderColor}; 
        border-radius: ${chartToken.borderRadius}px;
        transition: all 0.6s ease-in-out; 
      `,
      preserveAspectRatio: "xMidYMin meet"
    }),

    getContentGroupStyles: (transformX, transformY, contentWidth, contentHeight) => ({
      transform: `translate(${transformX}, ${transformY})`,
      width: contentWidth,
      height: contentHeight,
      style: 'transition: all 0.6s ease;',
    }),

    getClipPath: () => ({
      id: 'contentClipPath',
    }),

    getClipRect: (contentWidth, contentHeight) => ({
      x: '0',
      y: '0',
      width: contentWidth,
      height: contentHeight,
      style: 'transition: all 0.6s ease;',
    }),

    updateContentGroup: (transformX, transformY, contentWidth, contentHeight) => ({
      transform: `translate(${transformX}, ${transformY})`,
      width: contentWidth,
      height: contentHeight
    }),

    updateClipRect: (contentWidth, contentHeight) => ({
      width: contentWidth,
      height: contentHeight
    })
  };
}


