import base from './base';
import axisPointer from './axisPointer';
import megre from '../../../util/megre';

function tooltip(iChartOption, chartName) {
  let theme = iChartOption.theme;
  // tipHtml 和 tipHtmlStyle 为旧属性，后续逐步废弃
  let formatter = iChartOption.tipHtml;
  let formatterStyle = iChartOption.tipHtmlStyle;
  let tooltip = base(theme);
  if (formatter) {
    tooltip.formatter = formatter;
  }
  if (formatterStyle) {
    tooltip.padding = formatterStyle.padding || tooltip.padding;
    tooltip.backgroundColor = formatterStyle.backgroundColor || tooltip.backgroundColor;
  }
  axisPointer(tooltip, theme, chartName);
  megre(tooltip, iChartOption.tooltip);
  return tooltip;
}

export default tooltip;
