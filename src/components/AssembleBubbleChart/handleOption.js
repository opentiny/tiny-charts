/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import defendXSS from '../../util/defendXSS';
import { CHARTTYPE } from './BaseOption';
import cloneDeep from '../../util/cloneDeep';

// 配置默认鼠标悬浮提示框
export function defaultTooltipFormatter(baseOpt) {
  if (!baseOpt.tooltip.formatter) {
    baseOpt.tooltip.formatter = params => {
      let htmlString = '';
      const bgColor = params.data.borderColor || params.data.color;
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
}

const judgeType = (that) => {
  const { iChartOption: { type, data } } = that;
  if (!data || !data.length) throw new Error('聚合气泡图必须定义data数据');
  const noChild = data.every(item => !item.children || !item.children.length);
  for (let i in CHARTTYPE) {
    if (type === CHARTTYPE[i]) {
      that.chartType = CHARTTYPE[i];
    }
  }
  if (!that.chartType) {
    that.chartType = CHARTTYPE[noChild ? 'NON_NESTED' : 'NESTED'];
  }
};

const bindLegendEvent = (baseOpt, chartInstance) => {
  let originSource = cloneDeep(baseOpt.dataset[0].source);
  chartInstance.on('legendselectchanged', function (params) {
    let newSource = [originSource[0]];
    for (let type in params.selected) {
      if (params.selected[type]) {
        newSource = newSource.concat(originSource.filter(v => v.type === type));
      }
    }
    baseOpt.dataset[0].source = newSource;
    setTimeout(() => {
      chartInstance.setOption(baseOpt);
    }, 20);
  });
};

export { judgeType, bindLegendEvent };
