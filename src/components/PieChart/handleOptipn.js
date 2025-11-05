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
import getTooltipContentHtmlStr, { validateName } from '../../option/config/tooltip/formatter'
import { isArray, isObject, isString } from '../../util/type';
import { getColor } from '../../util/color';
import mobile from '../../util/mobile';

function defaultFormatter(params, color, iChartOpt, hideEmpty, tooltip) {
  const config = {
    title: '',
    children: [],
    hideEmpty
  }
  let seriesNames = [];
  let value = params.value;
  let name = params.name;
  let type = params.seriesType;
  seriesNames.push(name);
  if (isObject(value)){
    iChartOpt.data.forEach(data=>{
      if (data.product === value?.product) {
        value = data[name];
      }
    })
  }
  
  const iconColor = validateName(value) ?  (isString(params.color) ? params.color : getColor(color, params.seriesIndex)) : getColor(color, params.seriesIndex)
  const dataItem = {
    name,
    value,
    iconColor,
    type
  }
  config.children.push(dataItem);
  const isMobile = mobile()
  config.isMobile = iChartOpt.isMobile || isMobile;
  return getTooltipContentHtmlStr(config, tooltip)
}

// 阈值场景将data中的数据转为obj，需要转换回来
function coverObjDataToInit(params) {
  if (params && params.length !== 0) {
    return params.map(item => {
      const data = isObject(item.data) ? item.data.value : item.data
      return { ...item, data }
    })
  }
  return params
}

export function setTooltip(baseOpt, iChartOpt) {
  const { tipHtml, tooltip, color } = iChartOpt
  const formatter = tipHtml || tooltip?.formatter
  baseOpt.tooltip.formatter = (params, ticket, callback) => {
    const initParams = isArray(params) ? coverObjDataToInit(params) : params;
    return formatter && typeof formatter === 'function' ? formatter(initParams, ticket, callback) : defaultFormatter(initParams, color, iChartOpt, baseOpt.tooltip?.hideEmpty, baseOpt.tooltip)
  }
}
