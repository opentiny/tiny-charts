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
function ChartCard(aliasToken) {
    const { colorTitle, colorSeparatorLine, colorBgContainerHover, colorSubTitle, colorBgContainer, colorLabelDisabled } = aliasToken;

    return {
        // 卡片背景
        cardBg: colorBgContainer,
        // 标题的颜色
        titleColor: colorTitle,
        // 文本的颜色
        labelColor: colorSubTitle,
        // 选中背景色
        selectBgActive: colorBgContainer,
        // 未选中背景色
        selectBgAInactive: colorBgContainerHover,
        // 未选中文本色
        selectTextDisabled: colorLabelDisabled,
        // 分隔线
        selectSplitLineColor: colorSeparatorLine
    };
};

export default ChartCard;
