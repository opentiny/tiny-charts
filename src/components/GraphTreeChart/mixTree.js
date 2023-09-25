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