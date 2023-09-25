import { lightLegend, darkLegend } from '../util/legendOption';
import cloneDeep from '../../../util/cloneDeep';
import { lightTooltip, darkTooltip } from '../util/tooltipOption';
import defendXSS from '../../../util/defendXSS';
// 配置图表图例位置信息
export function setLegend(theme, selfLegend) {
  const { show, position, orient, formatter, width, itemGap, textStyle, itemWidth, itemHeight } = selfLegend;
  let SpBubbleLegend = {};
  switch (theme) {
    case 'dark':
      SpBubbleLegend = cloneDeep(darkLegend);
      break;
    default:
      SpBubbleLegend = cloneDeep(lightLegend);
      break;
  }
  if (!show) {
    SpBubbleLegend.show = false;
  }
  if (orient) {
    SpBubbleLegend.orient = orient;
  }
  if (formatter) {
    SpBubbleLegend.formatter = formatter;
  }
  SpBubbleLegend.top = position.top || 'auto';
  SpBubbleLegend.left = position.left || 'auto';
  SpBubbleLegend.right = position.right || 'auto';
  SpBubbleLegend.bottom = position.bottom || 'auto';
  // SpBubbleLegend 不需要 data 属性， 因为默认全部显示
  delete SpBubbleLegend.data;
  SpBubbleLegend.itemGap = itemGap !== undefined ? itemGap : 28;
  SpBubbleLegend.width = width;
  SpBubbleLegend.textStyle = Object.assign(SpBubbleLegend.textStyle, textStyle);
  SpBubbleLegend.itemWidth = itemWidth || 14;
  SpBubbleLegend.itemHeight = itemHeight || 14;
  Object.assign(SpBubbleLegend, selfLegend);
  return SpBubbleLegend;
}
// 配置鼠标悬浮提示框
export function setTooltip(theme, formatter) {
  let SpBubbleTooltip = {};
  switch (theme) {
    case 'dark':
      SpBubbleTooltip = cloneDeep(darkTooltip);
      break;
    default:
      SpBubbleTooltip = cloneDeep(lightTooltip);
      break;
  }
  if (formatter) {
    SpBubbleTooltip.formatter = formatter;
  } else {
    SpBubbleTooltip.formatter = params => {
      let htmlString = '';
      const bgColor = params.data.colorSec || params.data.color;
      htmlString +=
        `<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color
        :${defendXSS(bgColor)};">` +
        '</span>' +
        `<span style="display:inline-block;margin-left:5px">${defendXSS(params.data.type)}</span>` +
        '<br/>' +
        `<span style="display:inline-block;">${defendXSS(params.data.label)}</span>` +
        `<span style="display:inline-block;margin-left:10px;">${defendXSS(params.data.value)}</span>` +
        '<br/>';
      return htmlString;
    };
  }
  SpBubbleTooltip.trigger = 'item';
  return SpBubbleTooltip;
}
