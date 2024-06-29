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
import { attr } from './util';

// 创建流程线
function createTransLine(d, data) {
  let transDiv = document.createElement('div');
  let str = '';
  for (let i = 0; i < data.length; i++) {
    str += `<div class="fc-trans-point" style="offset-path:path('${d}');offset-distance:${Number(100 * i / data.length) + 1}%;"></div>`
  }
  transDiv.insertAdjacentHTML('beforeend', str);
  let cloneNode = transDiv.cloneNode(true);
  attr(cloneNode, 'id', data.id)
  let childArr = cloneNode.childNodes;
  for(let i of childArr){
    data.transPattern && (i.style.background = `url(${data.transPattern})`);
  }
  document.getElementById('fc-trans-container').appendChild(cloneNode);
  return transDiv;
}

// 计算trans线段长度
function transLine(edge, id ,transPattern){
  let XLineLength = Math.abs(edge.endPoint.x - edge.startPoint.x);
  let YLineLength = Math.abs(edge.endPoint.y - edge.startPoint.y);
  let data = {
    id,
    length: Math.ceil((XLineLength + YLineLength) / 6),
    transPattern
  }
  return data;
}

export { createTransLine, transLine }