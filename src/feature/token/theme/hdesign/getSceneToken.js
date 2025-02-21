import { codeToRGB } from '../../../../util/color';

function getSceneToken(globalToken, light = true) {
    const {
        colorGray0,
        colorGray5,
        colorGray10,
        colorGray20,
        colorGray30,
        colorGray40,
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
        //  初级底色 (卡片)
        colorBgPrimary: light ? colorGray0 : codeToRGB(colorGray5, 0.1),
        // 次级背景色 (tip)
        colorBgSecondary: light ? colorGray0 : colorGray70,
        // 占位背景色
        colorBgPlaceholder: light ? colorGray5 : codeToRGB(colorGray5, 0.05),
        //datazoom背景
        colorBgHover: light ? colorGray5 : colorGray80,
        // datazoom  handle border
        colorBgHandle: light ? colorGray0 : colorGray60,
        // 主要文本色
        colorTextPrimary: light ? colorGray90 : colorGray0,
        // 次要文本色
        colorTextSecondary: light ? colorGray50 : colorGray20,
        // 占位文本色
        colorTextPlaceholder: light ? colorGray30 : colorGray40,
        // 禁用文本色
        colorTextDisabled: light ? colorGray20 : colorGray40,
        // 图标色
        colorIconPrimary: light ? colorGray90 : colorGray10,
        // 图标失效色
        colorIconDisabled: light ? colorGray20 : colorGray40,
        colorLine: light ? colorGray10 : colorGray70,
        colorLineSecondary: light ? colorGray5 : colorGray80,
        //分隔线
        colorLineSeparator: light ? colorGray10 : colorGray70,
        colorFillNone: colorTransparent,
        // datzoom 未选中数据  fill
        colorFill: light ? colorGray10 : colorGray70,
        // datzoom  选中区域 fill
        colorFillSelect: codeToRGB(colorBoard.blue.colorBlue50, 0.1),
        // datzoom  选中数据 fill
        colorFillSelectSecondary: light ? codeToRGB(colorBoard.blue.colorBlue30, 0.2) : codeToRGB(colorBoard.blue.colorBlue70, 0.3),
        // hover阴影(黑色主题字典中的值是codeToRGB(colorGray5, 0.2)太亮了,待后续沟通)
        colorFillHover: light ? codeToRGB(colorGray90, 0.05) : codeToRGB(colorGray5, 0.1),
        // datzoom handle 填充
        colorFillHandle: light ? colorGray90 : colorGray10,
        colorBorder: light ? colorGray10 : colorGray70,
        colorBorderSelect: light ? codeToRGB(colorBoard.blue.colorBlue30, 0.2) : codeToRGB(colorBoard.blue.colorBlue70, 0.3),
        colorShadowPrimary: light ? codeToRGB(colorGray100, 0.08) : codeToRGB(colorGray100, 0.5),
        colorShadowSecondary: light ? codeToRGB(colorGray100, 0.08) : codeToRGB(colorGray100, 0.5),
        shadowOffsetYPrimary: space2x,
        shadowOffsetYSecondary: spaceNone,
        shadowBlurPrimary: space6x,
        shadowBlurSecondary: space3x,
    }
}

export default getSceneToken