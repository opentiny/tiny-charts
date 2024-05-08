/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
export const CUSTOM_DARK_THEME = {
  id: 'dark-theme', // 主题的唯一id，每个主题必须唯一
  name: 'darkTheme', // 主题的英文名称
  cnName: '深色主题', // 主题的中文名称
  data: {
    /* 基础色 */
    'ti-base-color-white': '#141414', // 纯白

    /* 1.1品牌色*/
    /* 品牌主色*/
    'ti-base-color-brand-6': '#5e7ce0', // 主色蓝
    /* 主色衍生色*/
    'ti-base-color-brand-8': '#344899', // 品牌色-8
    'ti-base-color-brand-7': '#526ecc', // 品牌色-7
    'ti-base-color-brand-5': '#7693f5', // 品牌色-5
    'ti-base-color-brand-4': '#96adfa', // 品牌色-4
    'ti-base-color-brand-3': '#beccfa', // 品牌色-3
    'ti-base-color-brand-2': '#2d2d2d', // 品牌色-2
    'ti-base-color-brand-1': '#1c1c1c', // 品牌色-1

    /* 1.2 中立色*/
    /* 公用灰色系，用于文本、图标、线条、背景色*/
    'ti-base-color-common-9': '#181818', // 中立色-9
    'ti-base-color-common-8': '#282b33', // 中立色-8
    'ti-base-color-common-7': '#fff', // 中立色-7
    'ti-base-color-common-6': '#adb0b8', // 中立色-6
    'ti-base-color-common-5': '#575d6c', // 中立色-5
    'ti-base-color-common-4': '#5c6173', // 中立色-4
    'ti-base-color-common-3': '#8a8e99', // 中立色-3
    'ti-base-color-common-2': '#adb0b8', // 中立色-2
    'ti-base-color-common-1': '#4a4a4a', // 中立色-1

    /* 1.3 背景色*/
    'ti-base-color-bg-9': '#b12220', // 背景-9
    'ti-base-color-bg-8': '#c7000b', // 背景-8
    'ti-base-color-bg-7': '#d64a52', // 背景-7
    'ti-base-color-bg-6': '#eef0f5', // 背景-6
    'ti-base-color-bg-5': '#f5f5f6', // 背景-5
    'ti-base-color-bg-4': '#fafafa', // 背景-4
    'ti-base-color-bg-3': '#ffffff', // 背景-3
    'ti-base-color-bg-2': '#191919', // 背景-2
    'ti-base-color-bg-1': '#1c1c1c', // 背景-1

    /* 1.4 功能色*/
    'ti-base-color-error-4': '#de504e', // 错误-4
    'ti-base-color-error-3': '#f66f6a', // 错误-3
    'ti-base-color-error-2': '#ffbcba', // 错误-2
    'ti-base-color-error-1': '#ffeeed', // 错误-1

    'ti-base-color-success-4': '#3ac295', // 成功-4
    'ti-base-color-success-3': '#50d4ab', // 成功-3
    'ti-base-color-success-2': '#acf2dc', // 成功-2
    'ti-base-color-success-1': '#edfff9', // 成功-1

    'ti-base-color-warn-5': '#e37d29', // warning-5
    'ti-base-color-warn-4': '#fa9841', // warning-4
    'ti-base-color-warn-3': '#fac20a', // warning-3
    'ti-base-color-warn-2': '#ffd0a6', // warning-2
    'ti-base-color-warn-1': '#fff3e8', // warning-1

    'ti-base-color-prompt-1': '#ebf6ff', // 提示-1

    'ti-base-color-prompt-icon-from': '#7769e8', // 渐变图标-提示-起始色*/
    'ti-base-color-prompt-icon-to': '#58bbff', // 渐变图标-提示-终止色*/
    /* 状态图标色*/
    'ti-base-color-icon-info': '#6cbfff', // 状态图标-常规

    /* 1.5 图表色*/
    'ti-base-color-data-3': '#a6dd82', // 图表数据色-3
    'ti-base-color-data-4': '#f3689a', // 图表数据色-4
    'ti-base-color-data-5': '#a97af8', // 图表数据色-5

    /* 2.公共色：此处颜色为组件场景色，根据使用场景分为以下几大类，具体组件引用以下颜色，如在使用过程中有问题，请自行按类别添加*/

    /**
     * 2.1 基础色
     **/
    'ti-common-color-light': '#fff',
    'ti-common-color-dark': '#fff',
    'ti-common-color-info-bg': 'rgba(51, 51, 51, 0.06)', // 信息-背景色
    'ti-common-color-info-border': '#d3d4d6', // 信息-边框色

    /**
     * 2.3 交互类型颜色
     * 用于涉及 primary / success / warning / danger / info 类型区分，拥有状态或交互的组件（没有边框）
     * 例如：Button组件、Badge 标记、Link 文字链接，需要标识一些交互的状态颜色：hover、active、disabled
     **/

    'ti-common-color-primary-disabled': '#a0cfff', // NewCssVar
    'ti-common-color-primary-plain-disabled-bg-color': 'rgba(191, 191, 191, 0.1)', // NewCssVar
    'ti-common-color-success-disabled': '#a6c3b9', // NewCssVar
    'ti-common-color-success-plain-disabled-bg-color': 'rgba(166, 195, 185, 0.1)', // NewCssVar
    'ti-common-color-warning-disabled': '#d3c6a2', // NewCssVar
    'ti-common-color-warning-plain-disabled-bg-color': 'rgba(211, 198, 162, 0.1)', // NewCssVar
    'ti-common-color-danger-disabled': '#d8bab5', // NewCssVar
    'ti-common-color-danger-plain-disabled-bg-color': 'rgba(216, 186, 181, 0.1)', // NewCssVar
    'ti-common-color-info-disabled': '#bfbfbf', // NewCssVar
    'ti-common-color-info-plain-disabled-bg-color': 'rgba(191, 191, 191, 0.1)', // NewCssVar

    /**
     * 2.10 阴影
     **/
    'ti-common-shadow-none': 'none', // NewCssVar 无阴影
    'ti-common-shadow-1-up': '0 -1px 4px 0 rgba(0, 0, 0, 0.1)', // 阴影-1 上
    'ti-common-shadow-1-down': '0 1px 4px 0 rgba(0, 0, 0, 0.1)', // 阴影-1 下
    'ti-common-shadow-1-left': '-1px 0px 4px 0 rgba(0, 0, 0, 0.1)', // 阴影-1 左
    'ti-common-shadow-1-right': '1px 0px 4px 0 rgba(0, 0, 0, 0.1)', // 阴影-1 右
    'ti-common-shadow-2-up': '0 -2px 8px 0 rgba(0, 0, 0, 0.2)', // 阴影-2 上
    'ti-common-shadow-2-down': '0 2px 8px 0 rgba(0, 0, 0, 0.2)', // 阴影-2 下
    'ti-common-shadow-2-left': '-2px 0 8px 0 rgba(238, 10, 10, 0.2)', // 阴影-2 左
    'ti-common-shadow-2-right': '2px 0 8px 0 rgba(252, 5, 5, 0.2)', // 阴影-2 右
    'ti-common-shadow-3-up': '0 -4px 16px 0 rgba(0, 0, 0, 0.2)', // 阴影-3 上
    'ti-common-shadow-3-down': '0 4px 16px 0 rgba(0, 0, 0, 0.2)', // 阴影-3 下
    'ti-common-shadow-3-left': '-4px 0 16px 0 rgba(0, 0, 0, 0.2)', // 阴影-3 左
    'ti-common-shadow-3-right': '4px 0 16px 0 rgba(0, 0, 0, 0.2)', // 阴影-3 右
    'ti-common-shadow-4-up': '0 -8px 40px 0 rgba(0, 0, 0, 0.2)', // 阴影-4 上
    'ti-common-shadow-4-down': '0 8px 40px 0 rgba(0, 0, 0, 0.2)', // 阴影-4 下
    'ti-common-shadow-4-left': '-8px 0 40px 0 rgba(0, 0, 0, 0.2)', // 阴影-4 左
    'ti-common-shadow-4-right': '8px 0 40px 0 rgba(0, 0, 0, 0.2)', // 阴影-4 右

    /* 提示类阴影*/
    'ti-common-shadow-error': '0 1px 3px 0 rgba(199, 54, 54, 0.25)', 
    'ti-common-shadow-warn': '0 1px 3px 0 rgba(204, 100, 20, 0.25)', 
    'ti-common-shadow-prompt': '0 1px 3px 0 rgba(70, 94, 184, 0.25)', 
    'ti-common-shadow-success': '0 1px 3px 0 rgba(39, 176, 128, 0.25)', 

    /*  滚动条 */
    'ti-common-scrollbar-width': '4px',
    'ti-common-scrollbar-height': '4px',
    'ti-common-scrollbar-thumb-bg-color': '#4a4a4a',
    'ti-common-scrollbar-thumb-border-radius': '6px',
    'ti-common-scrollbar-thumb-hover-bg-color': '#999999',
    'ti-common-scrollbar-thumb-active-bg-color': '#999999',
  }, //  主题数据
};
