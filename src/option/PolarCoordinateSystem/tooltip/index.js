import base from './base';
import merge from '../../../util/merge';

function tooltip(iChartOption, chartName) {
  let theme = iChartOption.theme;
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
  merge(tooltip, iChartOption.tooltip);
  return tooltip;
}

export default tooltip;