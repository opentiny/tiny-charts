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
/**
 * 公共方法
 */

// 生成树结构数据
function createNodes(links, item_, child) {
  links.forEach((items, indexs) => {
    if (items.source === item_.target) {
      const child1 = [];
      createNodes(links, items, child1);
      child.push({ id: items.target, children: child1 });
    }
  });
}

// 给nodes数据加上symbolSize和category属性
function handleNodes(children, categories) {
  children.forEach((item, index) => {
    if (item.id.indexOf('_clone') !== -1 || item.id.indexOf('_child') !== -1) {
      item.symbolSize = categories[categories.length - 1].symbolSize;
      item.category = categories.length - 1;
    } else {
      item.symbolSize = categories[1].symbolSize;
      item.category = 1;
    }
    if (item.children && item.children.length) {
      handleNodes(item.children, categories);
    }
  });
}

// 将nodes由树结构全部展开,生成新的nodes
const expandNodes = (nodes, item) => {
  if (item.children && item.children.length) {
    item.children.forEach((item_, index_) => {
      expandNodes(nodes, item_);
      nodes.push(item_);
    });
  }
};

// 给节点克隆虚拟节点(小黄块), 建立根节点---》克隆节点---》子节点的连接关系
const cloneNode = (item, index, data_) => {
  item.children.forEach((item_, index_) => {
    if (item_.children && item_.children.length) {
      data_.push({
        name: item_.name,
        target: item.name + '-' + index + '-_clone',
      });
      data_.push({
        name: item_.name + '-' + index_ + '-_clone',
        target: item_.name,
      });
      cloneNode(item_, index_, data_);
    } else {
      data_.push({
        name: item_.name,
        target: item.name + '-' + index + '-_clone',
      });
    }
  });
};

export { createNodes, handleNodes, expandNodes, cloneNode };
