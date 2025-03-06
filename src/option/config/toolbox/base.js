import Token from '../../../feature/token';

function base() {
  return {
    show: true,
    showTitle:true,
    feature: {
      saveAsImage: {
        show: false,
      },
      restore: {
        show: false
      },
      dataView: {
        show: false
      },
      dataZoom: {
        show: true,
      },
      magicType: {
        show: false,
      },
    },
    tooltip: {
      show: false,
      formatter: undefined,
      borderRadius: Token.config.tooltipBorderRaduis,
      textStyle: {
        color: Token.config.tooltipTextColor,
        fontSize: Token.config.tooltipTextFontSize,
      },
      borderWidth: Token.config.tooltipBorderWidth,
      padding: Token.config.tooltipPadding,
      backgroundColor: Token.config.tooltipBg,
      extraCssText: `box-shadow:0 ${Token.config.tooltipShadowOffsetY}px ${Token.config.tooltipShadowBlur}px 0 ${Token.config.tooltipShadowColor};`
    }
  };
}



export default base;
