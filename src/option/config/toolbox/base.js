import Theme from '../../../feature/token';

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
      borderRadius: Theme.config.tooltipBorderRaduis,
      textStyle: {
        color: Theme.config.tooltipTextColor,
        fontSize: Theme.config.tooltipTextFontSize,
      },
      borderWidth: Theme.config.tooltipBorderWidth,
      padding: Theme.config.tooltipPadding,
      backgroundColor: Theme.config.tooltipBg,
      extraCssText: `box-shadow:0 ${Theme.config.tooltipShadowOffsetY}px ${Theme.config.tooltipShadowBlur}px 0 ${Theme.config.tooltipShadowColor};`
    }
  };
}



export default base;
