import { codeToRGB } from '../../../../util/color';

function getSceneToken(globalToken, light = true) {
    const {
        colorGray0,
        colorGray5,
        colorGray10,
        colorGray20,
        colorGray40,
        colorGray50,
        colorGray60,
        colorGray80,
        colorGray90,
        colorTransparent,
        space2x,
        space3x,
        space6x,
        spaceNone,
    } = globalToken;

    // datazoomd的手柄特殊定制，token暂未考虑
    return {
        // 用于实现一些遮盖场景
        colorBgMask: light ? colorGray0 : colorGray90,
        //  初级底色 (卡片)
        colorBgPrimary: light ? colorGray0 : colorGray90,
        // 次级背景色 (tip)
        colorBgSecondary: light ? colorGray0 : colorGray80,
        // 占位背景色
        colorBgPlaceholder: light ? codeToRGB('#111A2C', 0.05) : '#303030',
        //datazoom背景
        colorBgHover: light ? codeToRGB('#111A2C', 0.05) : '#303030',
        // datazoom  handle border
        colorBgHandle: light ? colorGray0 : colorGray60,
        // 仪表盘中心文本卡片
        colorBgActive: light ? colorGray5 : colorGray10,
        // 主要文本色
        colorTextPrimary: light ? colorGray90 : colorGray0,
        // 次要文本色
        colorTextSecondary: light ? colorGray50 : colorGray20,
        // 占位文本色
        colorTextPlaceholder: colorGray40,
        // 禁用文本色
        colorTextDisabled: light ? colorGray20 : colorGray50,
        // 图标色
        colorIconPrimary: light ? colorGray90 : colorGray0,
        // 图标激活色
        colorIconActive: colorGray90,
        // 图标失效色
        colorIconDisabled: light ? colorGray20 : colorGray50,
        colorLine: light ? codeToRGB('#111A2C', 0.1) : codeToRGB(colorGray0, 0.15),
        colorLineSecondary: light ? codeToRGB('#111A2C', 0.1) : codeToRGB(colorGray0, 0.15),
        // 指示线
        colorLinePointer: light ? colorGray90 : colorGray0,
        // 分割线
        colorLineSeparator: light ? colorGray90 : colorGray0,
        colorFillNone: colorTransparent,
        // datzoom 未选中数据  fill
        colorFill: light ? colorGray20 : colorGray50,
        // datzoom  选中区域 fill
        colorFillSelect: colorTransparent,
        // datzoom  选中数据 fill
        colorFillSelectSecondary: colorGray40,
        // hover阴影
        colorFillHover: light ? codeToRGB('#111A2C', 0.05) : codeToRGB(colorGray0, 0.2),
        // datzoom handle 填充
        colorFillHandle: light ? colorGray90 : colorGray10,
        colorBorder: light ? colorGray20 : colorGray50,
        colorBorderSelect: colorGray40,
        colorShadowPrimary: codeToRGB('#111A2C', 0.1),
        colorShadowSecondary: codeToRGB('#111A2C', 0.1),
        shadowOffsetYPrimary: space2x,
        shadowOffsetYSecondary: spaceNone,
        shadowBlurPrimary: space6x,
        shadowBlurSecondary: space3x,
    }
}

export { getSceneToken as getDpuiSceneToken }