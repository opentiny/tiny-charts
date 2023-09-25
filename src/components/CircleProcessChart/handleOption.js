import defendXSS from '../../util/defendXSS';
// 获取bar的series数据
export function getSeriesData(data) {
  const seriesData = [];
  data.forEach((item, i) => {
    seriesData[i] = [];
    seriesData[i][0] = item.value;
  });
  return seriesData;
}

function tooltipFormatter(params) {
  const seriesName = params.seriesName;
  const color = params.color;
  const value = params.value;
  const htmlString = `<div>
                            <span style="display:inline-block;width:10px;height:10px;
                            margin-right:8px;border-radius:5px;border-style: solid;border-width:1px;
                            border-color:${defendXSS(color)};background-color:${defendXSS(color)};"></span>
                            <span style="margin-right:16px">${defendXSS(seriesName)}</span>
                            <span>${defendXSS(value)}%</span>
                       </div>`;
  return htmlString;
}

/**
 * 配置默认的鼠标悬浮提示框
 */
export function setTooltip(baseOpt) {
  if (!baseOpt.tooltip.formatter) {
    baseOpt.tooltip.formatter = tooltipFormatter;
  }
}
