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
export function handleSeriesData(iChartOption, baseOption) {
  const { data, type } = iChartOption;
  if (!data || !data.length) throw new Error('聚合气泡图必须定义data数据');
  if (!type) throw new Error('聚合气泡图必须定义type,值为nested或non-nested或non-nested-aggregate');

  const rootData = [{
    depth: 0,
    id: 'option',
    value: 1255,
    type: '',
    label: 0,
  }];
  let depthFirst = [];
  let depthMore = [];

  if (data.length) {
    if (type === 'non-nested' || type === 'non-nested-aggregate') {
      // 在数据循环遍历时，为他们赋予唯一id
      let nurId = 0;
      data.forEach(item => {
        nurId++;
        item.depth = 1;
        item.id = `option.${nurId}`;
        depthFirst.push(item);
      });
      baseOption.dataset[0].source = [...rootData, ...depthFirst, ...depthMore];
    } else if (type === 'nested') {
      let nurId = 0;
      let _nurId = 0;
      data.forEach(item => {
        nurId++;
        item.depth = 1;
        item.id = `option.${nurId}`;
        depthFirst.push(item);
        item.children.forEach(i => {
          i.type = item.type;
          _nurId++;
          i.depth = 2;
          i.id = `${item.id}.${_nurId}`;
          depthMore.push(i);
        });
      });
      baseOption.dataset[0].source = [...rootData, ...depthFirst, ...depthMore];
    }
  }
  return { depthFirst, depthMore };
}
