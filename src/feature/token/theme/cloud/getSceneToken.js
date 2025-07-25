import { codeToRGB } from '../../../../util/color';
// cloud黑白主题为两套不同的色板,灰阶命名黑白主题相反
function getSceneToken(globalToken, light = true) {
    const {
        colorGray0,
        colorGray10,
        colorGray15,
        colorGray20,
        colorGray30,
        colorGray40,
        colorGray50,
        colorGray60,
        colorGray70,
        colorGray90,
        colorGray100,
        colorTransparent,
        colorBoard,
        spaceBase,
        space05x,
        space4x
    } = globalToken;

    return {
        // 用于实现一些遮盖场景
        colorBgMask: light ? colorGray0 : colorGray10,
        // 初级底色 (卡片)
        colorBgPrimary: light ? colorGray0 : colorGray10,
        // 次级背景色 tip背景
        colorBgSecondary: light ? colorGray0 : colorGray20,
        // 占位背景色
        colorBgPlaceholder: light ? colorGray30 : codeToRGB(colorGray100, 0.2),
        // datazoom背景
        colorBgHover: light ? colorGray10 : codeToRGB(colorGray100, 0.1),
        // datazoom  handle border todo 
        colorBgHandle: light ? colorBoard.blue.colorBlue60 : colorBoard.blue.colorBlue70,
        // 仪表盘中心文本卡片
        colorBgActive: light ? colorGray10 : codeToRGB(colorGray100, 0.1),
        // 主要文本色
        colorTextPrimary: colorGray90,
        // 次要文本色
        colorTextSecondary: colorGray70,
        // 占位文本色
        colorTextPlaceholder: light ? colorGray60 : colorGray50,
        // 禁用文本色
        colorTextDisabled: colorGray50,
        // 图标色
        colorIconPrimary: light ? colorGray60 : colorGray70,
        // 图标禁用色
        colorIconDisabled: colorGray50,
        colorLine: colorGray30,
        colorLineSecondary: light ? colorGray20 : colorGray20,
        // 指示线
        colorLinePointer: colorGray90,
        // 分割线
        colorLineSeparator: light ? colorGray20 : codeToRGB(colorGray100, 0.1),
        colorFillNone: colorTransparent,
        // datzoom 未选中数据  fill
        colorFill: light ? colorGray30 : codeToRGB(colorGray100, 0.2),
        // datzoom  选中区域 fill todo
        colorFillSelect: light ? codeToRGB(colorBoard.blue.colorBlue60, 0.2) : codeToRGB(colorBoard.blue.colorBlue70, 0.2),
        // datzoom  选中数据 fill todo
        colorFillSelectSecondary: light ? colorBoard.blue.colorBlue30 : colorBoard.blue.colorBlue100,
        // hover阴影
        colorFillHover: light ? colorGray10 : codeToRGB(colorGray100, 0.1),
        // datzoom handle 填充
        colorFillHandle: light ? colorGray0 : colorGray100,
        colorBorder: light ? colorGray50 : colorGray50,
        colorBorderSelect: light ? colorBoard.blue.colorBlue60 : colorBoard.blue.colorBlue70,
        colorShadowPrimary: light ? codeToRGB(colorGray100, 0.16) : codeToRGB(colorGray0, 0.48),
        colorShadowSecondary: light ? codeToRGB(colorGray100, 0.08) : codeToRGB(colorGray0, 0.48),
        shadowOffsetYPrimary: spaceBase,
        shadowOffsetYSecondary: space05x,
        shadowBlurPrimary: space4x,
        shadowBlurSecondary: spaceBase,
    }
}

export { getSceneToken as getCloudSceneToken }