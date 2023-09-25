export function handleSeriesData(iChartOption, type, seriesData) {
  // 处理seriesData数据，添加id、判断用户传入数据是否齐全等
  const rootData = [
    {
      depth: 0,
      id: 'option',
      value: 1255,
      type: '',
      label: 0,
    },
  ];
  const rootArr = [];
  // 判断是否定义data数据
  if (iChartOption.data.length) {
    // 如果为非嵌套聚合气泡图，处理数据
    if (type === 'non-nested' || type === 'non-nested-aggregate') {
      // 在数据循环遍历时，为他们赋予唯一id
      let nurId = 0;
      iChartOption.data.forEach(item => {
        nurId++;
        item.depth = 1;
        item.id = `option.${nurId}`;
      });
      // 获取全部的数据
      seriesData = rootData.concat(iChartOption.data);
      // 如果为嵌套聚合气泡图，处理数据
    } else if (type === 'nested') {
      let _nurId = 0;
      let __nurId = 0;
      iChartOption.data.forEach(item => {
        _nurId++;
        item.depth = 1;
        item.id = `option.${_nurId}`;
        rootArr.push(item);
        item.children.forEach(items => {
          items.type = item.type;
          __nurId++;
          items.depth = 2;
          items.id = `${item.id}.${__nurId}`;
        });
      });
      const typeArr = [];
      // 获取全部的数据
      seriesData = rootData.concat(iChartOption.data);
      seriesData.forEach(item => {
        if (!typeArr.includes(item.type)) {
          typeArr.push(item.type);
        }
      });
      // 不存在type则提示报错
    } else {
      throw new Error('聚合气泡图必须定义type,值为nested或non-nested或non-nested-aggregate');
    }
    // 不存在data则报错
  } else {
    throw new Error('聚合气泡图必须定义data数据');
  }
  return seriesData;
}
export function changeSeriesData(seriesData) {
  // 对seriesData改变数组的结构，方便后续处理
  const depthFirst = seriesData.filter(item => {
    return item.depth === 1;
  });
  const findColor = [];
  const muchColor = [];
  const colorData = [];
  const colorLegend = [];
  const depthMore = [];
  seriesData.forEach(item => {
    if (item.children) {
      Object.keys(item.children).forEach(items => {
        depthMore.push(item.children[items]);
      });
    }
  });
  seriesData.forEach(item => {
    depthMore.forEach(itemd => {
      if (itemd.type === item.type) {
        seriesData.push(itemd);
      }
    });
  });
  return { depthFirst, depthMore, findColor, muchColor, colorData, colorLegend };
}
