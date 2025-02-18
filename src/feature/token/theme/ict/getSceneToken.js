import { codeToRGB } from '../../../../util/color';
function getSceneToken(globalToken, light = true) {
    const {
        colorGray0,
        colorGray5,
        colorGray10,
        colorGray20,
        colorGray50,
        colorGray60,
        colorGray70,
        colorGray80,
        colorGray90,
        colorGray100,
        colorTransparent,
        colorBoard,
        space2x,
        space3x,
        space6x,
        spaceNone,
    } = globalToken;

    return {
        // 用于实现一些遮盖场景
        colorBgMask: light ? colorGray0 : colorGray90,
        // 初级底色 (卡片)
        colorBgPrimary: light ? colorGray0 : colorGray90,
        // 次级背景色 (tip)
        colorBgSecondary: light ? colorGray0 : colorGray70,
        // 占位背景色
        colorBgPlaceholder: light ? colorGray10 : codeToRGB(colorGray10, 0.1),
        // datazoom背景
        colorBgHover: light ? colorGray5 : colorGray80,
        // datazoom  handle border
        colorBgHandle: light ? colorGray0 : colorGray70,
        // 主要文本色
        colorTextPrimary: light ? colorGray90 : colorGray5,
        // 次要文本色
        colorTextSecondary: light ? colorGray60 : colorGray20,
        // 占位文本色
        colorTextPlaceholder: light ? colorGray60 : colorGray20,
        // 禁用文本色
        colorTextDisabled: light ? codeToRGB(colorGray90, 0.3) : codeToRGB(colorGray10, 0.3),
        // 图标色
        colorIconPrimary: light ? colorGray90 : colorGray10,
        // 图标禁用色
        colorIconDisabled: light ? codeToRGB(colorGray90, 0.3) : codeToRGB(colorGray10, 0.3),
        colorLine: light ? colorGray10 : codeToRGB(colorGray10, 0.1),
        colorLineSecondary: light ? codeToRGB(colorGray90, 0.1) : codeToRGB(colorGray10, 0.1),
        colorLineSeparator: light ? colorGray20 : colorGray50,
        colorFillNone: colorTransparent,
        // datzoom 未选中数据  fill
        colorFill: light ? colorGray20 : colorGray70,
        // datzoom  选中区域 fill
        colorFillSelect: codeToRGB(colorBoard.blue.colorBlue50, 0.1),
        // datzoom  选中数据 fill
        colorFillSelectSecondary: light ? codeToRGB(colorBoard.blue.colorBlue30, 0.2) : codeToRGB(colorBoard.blue.colorBlue70, 0.3),
        // hover阴影
        colorFillHover: light ? codeToRGB(colorGray90, 0.05) : codeToRGB(colorGray10, 0.08),
        // datzoom handle 填充
        colorFillHandle: light ? colorGray90 : colorGray0,
        colorBorder: light ? colorGray20 : colorGray70,
        colorBorderSelect: light ? codeToRGB(colorBoard.blue.colorBlue30, 0.2) : codeToRGB(colorBoard.blue.colorBlue70, 0.3),
        colorShadowPrimary: light ? codeToRGB(colorGray100, 0.16) : codeToRGB(colorGray100, 0.5),
        colorShadowSecondary: light ? codeToRGB(colorGray100, 0.04) : codeToRGB(colorGray100, 0.24),
        shadowOffsetYPrimary: space2x,
        shadowOffsetYSecondary: spaceNone,
        shadowBlurPrimary: space6x,
        shadowBlurSecondary: space3x,
    }
}

export default getSceneToken