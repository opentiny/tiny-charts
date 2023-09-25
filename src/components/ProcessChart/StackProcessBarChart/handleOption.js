import { getColor } from '../../../util/color';
import defendXSS from '../../../util/defendXSS';
import tooltip from '../../../option/config/tooltip';
import Theme from '../../../feature/theme';
export function handleYaxis(baseOption, data) {
  const barName = [];
  if (data&&data.length>0){
    data.forEach(element => {
      barName.push(element.name);
    });
    baseOption.yAxis.data = barName;
  }
}

export function handleXaxis(baseOption){
  // 配置本条属性是为了防止图表的数据太小撑不满容器的现象
  baseOption.xAxis.max='dataMax'
}

export function handleTheme(baseOption, theme) {
  const len = baseOption.series.length;
  const colorBase =Theme.color.base 
  // 背景柱条颜色
  baseOption.series[len - 1].itemStyle.color = colorBase.subg;
  // 右侧label颜色
  baseOption.series[len - 1].label.color = colorBase.axislabel;
  // 左侧label颜色
  baseOption.series[0].label.color = colorBase.axislabel;
  // 数据的文本显示
  baseOption.series.forEach((serie, index) => {
    if (index > 0 && index < len - 1) serie.label.color = colorBase.font;
  });
}

export function handleTooltip(baseOption, iChartOption) {
  const basicTip = tooltip(iChartOption);
  baseOption.tooltip = basicTip;
  const { tipHtml, minWidth, data } = iChartOption;
  const len = baseOption.series.length;
  baseOption.tooltip.axisPointer = { type: 'none' };
  if (tipHtml) {
    baseOption.tooltip.formatter = tipHtml;
    return;
  }

  if (minWidth) {
    if (data && data.length !== 0) {
      baseOption.tooltip.formatter = params => {
        const dataIndex = params[0].dataIndex;
        let htmlString = `<div style="margin-bottom:4px;">${defendXSS(params[0].name)}</div>`;
        params.forEach((param, index) => {
          if (index > 0 && index < len - 1) {
            const value = data[dataIndex].children[index - 1].value;

            htmlString += `<div>
                    <span style="display:inline-block;width:10px;height:10px;
                    border-radius:5px;background-color:${defendXSS(param.color)};">
                    </span>
                    <span style="margin-left:5px;">
                        <span style="display:inline-block;margin-right:8px;min-width:80px;">${defendXSS(
                          param.seriesName,
                        )}</span>
                        <span style="font-weight:bold">${defendXSS(value)}${
              iChartOption.unit ? defendXSS(iChartOption.unit) : ''
            }</span>
                    </span>
                </div>
            `;
          }
        });
        return htmlString;
      };
      return;
    }
  }

  baseOption.tooltip.formatter = params => {
    let htmlString = `<div style="margin-bottom:4px;">${defendXSS(params[0].name)}</div>`;
    params.forEach((param, index) => {
      if (index > 0 && index < len - 1) {
        htmlString += `<div>
        <span style="display:inline-block;width:10px;height:10px;
        border-radius:5px;background-color:${defendXSS(param.color)};">
        </span>
        <span style="margin-left:5px;">
            <span style="display:inline-block;margin-right:8px;min-width:80px;">${defendXSS(param.seriesName)}</span>
            <span style="font-weight:bold">${defendXSS(param.value)}${
          iChartOption.unit ? defendXSS(iChartOption.unit) : ''
        }</span>
        </span>
    </div>
`;
      }
    });
    return htmlString;
  };
}

export function handleColor(baseOption, color) {
  const len = baseOption.series.length;
  baseOption.series.forEach((serie, index) => {
    if (index > 0 && index < len - 1) {
      serie.itemStyle.color = function (params) {
        return getColor(color, params.seriesIndex - 1);
      };
    }
  });
}
