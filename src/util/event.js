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
const MOUSE_EVENT_NAMES = [
  'click',
  'dblclick',
  'mousedown',
  'mousemove',
  'mouseup',
  'mouseover',
  'mouseout',
  'globalout',
  'contextmenu'
]

// 绑定图表事件
export function event(chartInstance, event, ichartIns) {
  if (!event) return;
  MOUSE_EVENT_NAMES.forEach(eventName=>{
    chartInstance.off(eventName);
  })
  const queryKeys = Object.keys(event);
  queryKeys.forEach(qrKey => {
    const eKeys = Object.keys(event[qrKey]);
    eKeys.forEach(key => {
      chartInstance.on(key, qrKey, function (params) {
        event[qrKey][key](params, ichartIns);
      });
    });
  });
}
