// 文本配置
export const TEXT = {
  FLEX_SPACE: [5, 1, 1],
  PADDING: 24,
  MAX_NAME_LENGTH: 8
}

// 首部高度
export const HEADER = {
  HEIGHT: 40,
}

// 行配置
export const ROW = {
  HEIGHT: 60,
  TEXTBASELINEY: 24,    // 文本Y轴基线
  RANKBGSIZE: 15        // 排名背景尺寸
};

// 滚动条配置
export const SCROLL = {
  THUMBWIDTH: 4,
};

// 滚动信息默认值
export const DEFAULT_SCROLL_INFO = {
  SCROLLY: 0,
  VIEWHEIGHT: 600
}

// tooltip配置
export const TOOLTIP = {
  OFFSET: 10
}

// 字段检查配置
export const FIELD_CHECKS = [
  'theme', 'titleName', 'valueName', 'percentName', 
  'padding', 'data', 'color', 'sort'
]

// 默认配置选项
export const DEFAULT_OPTION = {
  data: [],                          // 图表总数据
  theme: 'hdesign-light',            // 主题样式
  titleName: '标题',                 // 首部标题文本
  valueName: '数值',                 // 首部数值文本
  percentName: '百分比',             // 首部百分比文本
  padding: [16, 16, 0, 16],          // 图表内边距，顺序为[top, right, bottom, left]
  color: [],                       // 图表未指定颜色时的默认颜色，指定时一般为数组
  sort: {
    field: 'value',                  // 排序字段：value, percent
    order: 'desc'                    // 排序顺序：asc, desc, none
  },
  tooltip: {                         // 提示框配置
    show: true,                      // 是否显示提示框
    formatter: null                  // 自定义格式化函数
  }
};

export const DEFAULT_DATA_ITEM = {
  name: '未命名',
  value: 0,
  percent: 0,
  color: null,
  content: ''
};