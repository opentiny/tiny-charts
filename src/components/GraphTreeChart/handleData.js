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
import { createNodes, handleNodes, expandNodes, cloneNode } from './utils';

/**
 * 根据用户的数据生成树型结构数据
 * @param {*} data
 * @param {*} baseOption
 * @returns rootData---树型结构的数据
 */
const handleData = (data, baseOption) => {
  let nodes = [];
  let links = [];
  let parentNodeName = '';
  // 判断用户是否传了categories属性并且设置了对应的symbol和category，如果有，就在接下来的数据处理中，加入到rootData中
  const categories = baseOption.series[0].categories;

  // 找到根节点
  parentNodeName = data[0].name;

  const data_ = [{ name: parentNodeName, target: null }];
  // 给节点克隆虚拟节点(小黄块), 建立根节点---》克隆节点---》子节点的连接关系
  data.forEach((item, index) => {
    data_.push({
      name: item.name + '-' + index + '-_clone',
      target: item.name,
    });
    if (item.children && item.children.length) {
      cloneNode(item, index, data_);
    }
  });

  // 组装links数据
  data_.forEach((item, index) => {
    const source = item.name;
    const target = item.target;
    links.push({ source: target, target: source });
  });

  // 生成nodes结构时判断，去重
  const sourceName = [];
  // 生成nodes数据结构
  links.forEach((item, index) => {
    if (item.target && item.source) {
      const childArr = [];
      links.forEach((item_, index_) => {
        if (item_.source === item.source) {
          const child = [];
          createNodes(links, item_, child);
          childArr.push({ id: item_.target, children: child });
        }
      });
      if (!sourceName.includes(item.source)) {
        sourceName.push(item.source);
        if (item.source === parentNodeName) {
          nodes.push({ id: item.source, children: childArr });
        }
      }
    }
  });

  // 给节点绑定symbolSize和category
  nodes.forEach((item, index) => {
    // 根节点---层级定死为0
    // 子节点---层级定死为1
    // _clone---层级定死为categories.length - 1
    // _child---层级定死为categories.length - 1
    item.symbolSize = categories[0].symbolSize;
    item.category = 0;
    if (item.children && item.children.length) {
      handleNodes(item.children, categories);
    }
  });

  // 根节点数据，后续需要放到树图中生成坐标
  let rootData = {};
  rootData = { ...nodes[0] };
  baseOption.series[0].links = links;
  return { rootData };
};

/**
 * 将获取到的坐标和id匹配起来传给nodes，更新nodes
 * @param {*} rootData 树型结构的数据
 * @param {*} baseOption
 * @param {*} positionArr 返回的节点坐标
 * @param {*} idArr 返回的节点id，与坐标的index一一对应
 */
const updateData = (rootData, baseOption, positionArr, idArr) => {
  const nodes = [{ ...rootData }];
  if (rootData.children && rootData.children.length) {
    rootData.children.forEach((item, index) => {
      expandNodes(nodes, item);
      nodes.push(item);
    });
  }

  nodes.forEach((item, index) => {
    idArr.forEach((item_, index_) => {
      if (item.id === item_) {
        item.x = positionArr[index_].x;
        item.y = positionArr[index_].y;
      }
    });
  });
  baseOption.series[0].data = nodes;
};

export { handleData, updateData };
