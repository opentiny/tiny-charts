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
// GraphTreeChart聚合树图, 需要走一遍echarts Tree图获取节点对应坐标;
function mixTree(chart, instance, option) {
  const TreeOption = {
    series: [
      {
        type: 'tree',
        data: [chart.rootData],
        layout: 'radial',
        expandAndCollapse: true,
        initialTreeDepth: -1,
      },
    ],
  };
  // 走一遍echarts Tree图生成节点坐标
  option && instance.setOption(TreeOption, true);
  let modal = instance.getModel().getSeriesByIndex(0).getData();
  // 所有节点的坐标集合
  let positionArr = modal._itemLayouts;
  // 所有节点的id名集合
  let idArr = modal._idList;
  chart.updateNodesData(positionArr, idArr);
  option && instance.setOption({}, true);
}

export { mixTree };