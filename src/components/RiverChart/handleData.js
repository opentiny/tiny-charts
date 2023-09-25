// 记录当前的最大层级
let maxDepths = 0;
// 查找根节点
function getRootNode(data, link) {
  let rootNode = [];
  data.forEach(item => {
    const result = link.find(obj => obj.target === item.name);
    if (!result) {
      const innerRoot = { ...item, depth: 0 };
      rootNode.push(innerRoot);
    }
  });
  return rootNode;
}

// 获取叶子节点
function getItem(arr, name, result) {
  arr.forEach(item => {
    if (item.name === name) {
      result.push(item);
    }
    if (item?.children) {
      getItem(item.children, name, result);
    }
  });
}

//获取父节点
function getSameParent(source, target, arr) {
  source.forEach(item => {
    getItem(target, item.source, arr);
  });
}

function getPreNodeChildren(arr, name) {
  let node;
  arr.forEach(item => {
    if (item?.children) {
      item.children.forEach(el => {
        if (el.name === name) {
          node = el;
        }
      });
    }
  });
  return node;
}

//组合数据生成children
function handleNodeChildren(nodeArr, data, links, config) {
  nodeArr.forEach(el => {
    //查找连接关系
    const childrenArr = [];
    links.forEach(item => {
      //有关节点
      if (item.source === el.name) {
        //找到子节点
        const result = data.find(data_item => data_item.name === item.target);
        //找不到中断
        if (!result) return;
        const parentLinks = links.filter(link => link.target === result.name);
        const parents = [];
        getSameParent(parentLinks, nodeArr, parents);
        const childResult = getPreNodeChildren(nodeArr, result.name);
        let child;
        if (childResult) {
          child = childResult;
        } else {
          child = {
            ...result,
            parent: parents,
            depth: el.depth + 1,
          };
        }
        if (maxDepths < el.depth + 1) maxDepths = el.depth + 1;
        const nodeRow = result.row;
        childrenArr[nodeRow] = child;
      }
    });
    // 有children则继续递归
    if (childrenArr.length !== 0) {
      el.children = childrenArr;
      handleNodeChildren(childrenArr, data, links, config);
    }
  });
}

// 获取单个叶子节点
function getTreeItem(data, nodes, depth) {
  data.forEach(item => {
    if (item.depth == depth) {
      const result = nodes.find(obj => obj.name === item.name);
      if (!result) nodes.push(item);
    } else {
      if (item.children) {
        getTreeItem(item.children, nodes, depth);
      }
    }
  });
}

//  获取同一层级所有的叶子节点
function getDepthNode(data, nodeDepthNodes, config, depth = 0) {
  const node = [];
  getTreeItem(data, node, depth);
  nodeDepthNodes.push(node);
  if (depth < maxDepths) {
    getDepthNode(data, nodeDepthNodes, config, depth + 1);
  }
}

//根据每一层的叶子宽度算出每一层的水平x轴位置坐标
function getLeafWidth(depthWidth, index, width) {
  const depthWidthNub = depthWidth.map(item => {
    return parseInt(item) / 100;
  });
  const depeth_x = depthWidthNub.slice(0, index);
  const coordinate_x = depeth_x.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  // return Math.round(coordinate_x * width);
  return coordinate_x * width;
}
// 获取节点的y坐标
function getNodeCoordinateY(arr, index, scaleBar, space) {
  const nodes = arr.slice(0, index);
  const totalVal = nodes.reduce((pre, cur) => {
    return pre + cur.value;
  }, 0);
  const y = space * index + totalVal * scaleBar;
  return y;
}
// 获取节点的宽度
function getNodeWidth(config, index, x, margin) {
  const { depthWidth, width, space } = config;
  const depthWidthNub = depthWidth.map(item => {
    return parseInt(item) / 100;
  });
  const depeths = depthWidthNub.slice(0, index + 1);
  const depthTolPer = depeths.reduce((pre, cur) => {
    return pre + cur;
  }, 0);

  const nodeWidth = depthTolPer * width - space - margin.right - x;
  return nodeWidth;
}

// 处理节点的颜色
function handleNodeColor(node, config) {
  const { statusColor, background } = config;
  let color;
  if (!node.nodes) {
    color = background;
  } else {
    const { nodes } = node;
    const length = nodes.length;
    if (length === 0) {
      color = background;
    } else if (length === 1) {
      const nodesColor = statusColor[nodes[0].status];
      const colors = [];
      const colorStart = {
        percent: '0%',
        color: nodesColor,
      };
      const colorEnd = {
        percent: '100%',
        color: nodesColor,
      };
      colors.push(colorStart);
      colors.push(colorEnd);
      color = colors;
    } else if (length === 2) {
      const nodesColor1 = statusColor[nodes[0].status];
      const nodesColor2 = statusColor[nodes[length - 1].status];
      const colors = [];
      const colorStart = {
        percent: '0%',
        color: nodesColor1,
      };
      const colorEnd = {
        percent: '100%',
        color: nodesColor2,
      };
      colors.push(colorStart);
      colors.push(colorEnd);
      color = colors;
    } else {
      const nodesColor1 = statusColor[nodes[0].status];
      const nodesColor2 = statusColor[nodes[length - 1].status];
      const colors = [];
      const colorStart = {
        percent: '0%',
        color: nodesColor1,
      };
      colors.push(colorStart);
      const step = Math.round(100 / (length - 1));
      for (let i = 0; i < length - 2; i++) {
        const offset = step * (i + 1);
        const itemNodeColor = statusColor[nodes[i + 1].status];
        const colorItem = {
          percent: `${offset}%`,
          color: itemNodeColor,
        };
        colors.push(colorItem);
      }
      const colorEnd = {
        percent: '100%',
        color: nodesColor2,
      };
      colors.push(colorEnd);
      color = colors;
    }
  }
  return color;
}
//正常连接带颜色
function handleGradientLinkColor(node, parNode, config) {
  const { statusColor, background } = config;
  const colorList = [];
  let startColor, endColor;
  if (node?.nodes && node?.nodes.length !== 0) {
    const itemNode = node.nodes[0];
    endColor = statusColor[itemNode.status];
  } else {
    endColor = background;
  }

  if (parNode?.nodes && parNode?.nodes.length !== 0) {
    const len = parNode.nodes.length;
    const itemNode = parNode.nodes[len - 1];
    startColor = statusColor[itemNode.status];
  } else {
    startColor = background;
  }

  const start = {
    percent: '0%',
    color: startColor,
  };
  const end = {
    percent: '100%',
    color: endColor,
  };
  colorList.push(start);
  colorList.push(end);
  return colorList;
}
// 曲线连接带颜色
function handleCommonLinkColor(node, config, isLeft = true) {
  const { statusColor, background } = config;
  let color;
  if (node?.nodes && node?.nodes.length !== 0) {
    const len = node?.nodes.length;
    const itemNode = isLeft ? node?.nodes[0] : node?.nodes[len - 1];
    color = statusColor[itemNode.status];
  } else {
    color = background;
  }
  return color;
}

//用来确定节点位置
function getNodePosition(depthLeafNodes, config) {
  const { depthWidth, marginWidth, width, scaleBar, offsetY } = config;
  // 所有的叶子节点
  depthLeafNodes.forEach((leaves, leavesIndex) => {
    //得到节点之间的间距
    const nodeSpace = config.nodeSpace;
    const leafCoordinates_x = getLeafWidth(depthWidth, leavesIndex, width);
    const depthMargin = marginWidth[leavesIndex];
    // 每一层的单独叶子节点
    const x = leafCoordinates_x + depthMargin.left;
    //叶子的宽度
    const nodeWidth = getNodeWidth(config, leavesIndex, x, depthMargin);
    leaves.forEach((leaf, leafIndex) => {
      const color = handleNodeColor(leaf, config);
      const y = getNodeCoordinateY(leaves, leafIndex, scaleBar, nodeSpace) + offsetY;
      const position = {
        x,
        y,
        width: nodeWidth,
        height: leaf.value * scaleBar,
      };
      leaf.position = position;
      leaf.color = color;
    });
  });
}
// 找到link的流出value
function getLinkValue(arr, preId, childId) {
  let value;
  arr.forEach(item => {
    if (item.source === preId && item.target === childId) {
      value = item.value;
    }
  });
  return value;
}

function handleLastNodeLink_l(node, nodeLinks, margin, hasNodes, config, index, linkAreas) {
  const { scaleBar, marginWidth } = config;
  const {
    position: { x, y, height },
    name,
  } = node;
  const parentNode = node.parent[0];
  const parX = parentNode.position.x;
  const parY = parentNode.position.y;
  const parName = parentNode.name;
  const parWidth = parentNode.position.width;
  const linkVal = getLinkValue(nodeLinks, parentNode.name, node.name);
  const linkHeight = linkVal * scaleBar;
  const marginRight = marginWidth[index - 1].right;
  //代表上一层就是根节点，特殊处理
  const isSecondDepthsLastNode = !parentNode?.parent;
  const linkColor = isSecondDepthsLastNode
    ? handleGradientLinkColor(node, parentNode, config)
    : handleCommonLinkColor(node, config);
  let preChilHeight = 0;
  //没连接过生成新的childLinkList
  if (!parentNode?.childLinkList && isSecondDepthsLastNode) {
    const childLinkList = [];
    parentNode.childLinkList = childLinkList;
  } else {
    // 连接过计算之前链接的值
    preChilHeight = parentNode.childLinkList.reduce((cur, pre) => cur + pre.height, 0);
  }
  if (isSecondDepthsLastNode) {
    const childLink = {
      name,
      height,
    };
    parentNode.childLinkList.push(childLink);
  }
  // 入度
  const leftStart = {
    x: isSecondDepthsLastNode ? parX + parWidth + marginRight : x - margin.left,
    y: isSecondDepthsLastNode ? parY + preChilHeight : y,
    value: isSecondDepthsLastNode ? linkHeight : height,
  };
  const leftEnd = {
    x: x,
    y: y,
    value: isSecondDepthsLastNode ? linkHeight : height,
  };
  const leftArea = {
    name: isSecondDepthsLastNode ? `${parName}_${name}` : name,
    start: leftStart,
    end: leftEnd,
    isLeft: true,
    color: linkColor,
    hasNodes,
  };
  linkAreas.push(leftArea);
}
//根节点和最后一层节点右侧的连接带
function handleNodeLink_r(node, margin, hasNodes, space, linkAreas, config, isLast = false) {
  const {
    position: { x, y, width, height },
    name,
  } = node;
  const linkColor = handleCommonLinkColor(node, config, false);
  const rightStart = {
    x: x + width,
    y: y,
    value: height,
  };
  const rightEnd = {
    x: x + width + margin.right - (isLast ? 0 : space),
    y: y,
    value: height,
  };
  //  出度
  const rightArea = {
    name,
    start: rightStart,
    end: rightEnd,
    isLeft: false,
    color: linkColor,
    hasNodes,
  };
  linkAreas.push(rightArea);
}

//处理最后的节点的连接带
function handleLastNodeLink(node, margin, hasNodes, index, nodeLinks, config, linkAreas) {
  const { space } = config;
  handleNodeLink_r(node, margin, hasNodes, space, linkAreas, config, true);
  handleLastNodeLink_l(node, nodeLinks, margin, hasNodes, config, index, linkAreas);
}
//处理根节点的连接带
function handleRootNodeLink(node, margin, hasNodes, space, linkAreas, config) {
  const linkColor = handleCommonLinkColor(node, config);
  const {
    position: { x, y, height },
    name,
  } = node;
  // 入度
  const leftStart = {
    x: 0,
    y: y,
    value: height,
  };
  const leftEnd = {
    x: x,
    y: y,
    value: height,
  };
  const leftArea = {
    name,
    start: leftStart,
    end: leftEnd,
    isLeft: true,
    color: linkColor,
    hasNodes,
  };
  linkAreas.push(leftArea);
  handleNodeLink_r(node, margin, hasNodes, space, linkAreas, config);
}

function handleMidNodeLink_l(node, hasNodes, margin, index, config, linkAreas) {
  const {
    position: { x, y, height },
    name,
  } = node;
  const { marginWidth } = config;
  // 针对第二层的中间连接节点做特殊处理
  const parentNode = node?.parent[0];
  const isSecondDepthsMidNode = !parentNode?.parent;
  const linkColor = isSecondDepthsMidNode
    ? handleGradientLinkColor(node, parentNode, config)
    : handleCommonLinkColor(node, config);
  //第二层中间态节点永远是一对多汇入
  const parX = parentNode.position.x;
  const parY = parentNode.position.y;
  const parName = parentNode.name;
  const parWidth = parentNode.position.width;
  const isFistLink = !parentNode?.childLinkList;
  const marginRight = marginWidth[index - 1].right;
  let preChildHeight = 0;
  if (isFistLink && isSecondDepthsMidNode) {
    const childLinkList = [];
    parentNode.childLinkList = childLinkList;
  } else {
    preChildHeight = parentNode.childLinkList.reduce((pre, cur) => pre + cur.height, 0);
  }
  // 入度
  const leftStart = {
    x: isSecondDepthsMidNode ? parX + parWidth + marginRight : x - margin.left,
    y: isSecondDepthsMidNode ? parY + preChildHeight : y,
    value: height,
  };
  const leftEnd = {
    x: x,
    y: y,
    value: height,
  };
  const leftArea = {
    name: isSecondDepthsMidNode ? `${parName}_${name}` : name,
    start: leftStart,
    end: leftEnd,
    isLeft: true,
    color: linkColor,
    hasNodes,
  };
  linkAreas.push(leftArea);
  if (isSecondDepthsMidNode) {
    const childLink = {
      name,
      height,
    };
    parentNode.childLinkList.push(childLink);
  }
}
function handleMidNodeLink_r(node, nodeLinks, config, index, hasNodes, linkAreas) {
  const {
    position: { x, y, width },
    name,
  } = node;
  const { scaleBar, marginWidth, space } = config;
  const children = node.children;
  children.forEach(child => {
    const linkColor = handleGradientLinkColor(child, node, config);
    const linkVal = getLinkValue(nodeLinks, node.name, child.name);
    const linkHeight = linkVal * scaleBar;
    const childX = child.position.x;
    const childY = child.position.y;
    const childName = child.name;
    const childMarign = marginWidth[index + 1].left;
    const isFirstLinkChild = !node?.childLinkList;
    const isFistLinkPar = !child?.parentLinkList;
    let preChildHeight = 0;
    let preParentHeight = 0;
    //判断当前节点的子节点没有连接过父节点
    if (isFistLinkPar) {
      const parentLinkList = [];
      child.parentLinkList = parentLinkList;
    } else {
      preParentHeight = child.parentLinkList.reduce((pre, cur) => pre + cur.height, 0);
    }
    //判断节点有没有连接过子节点
    if (isFirstLinkChild) {
      const childLinkList = [];
      node.childLinkList = childLinkList;
    } else {
      preChildHeight = node.childLinkList.reduce((pre, cur) => pre + cur.height, 0);
    }
    const rightStart = {
      x: x + width,
      y: y + +preChildHeight,
      value: linkHeight,
    };
    const rightEnd = {
      x: childX - childMarign - space,
      y: childY + preParentHeight,
      value: linkHeight,
    };
    //  出度
    const rightArea = {
      name: `${name}_${childName}`,
      start: rightStart,
      end: rightEnd,
      isLeft: false,
      color: linkColor,
      hasNodes,
    };
    linkAreas.push(rightArea);
    const childLink = {
      name: child.name,
      height: linkHeight,
    };
    node.childLinkList.push(childLink);
    const parentLink = {
      name,
      height: linkHeight,
    };
    child.parentLinkList.push(parentLink);
  });
}

function handleMidNodeLink(node, hasNodes, margin, index, nodeLinks, config, linkAreas) {
  handleMidNodeLink_l(node, hasNodes, margin, index, config, linkAreas);
  handleMidNodeLink_r(node, nodeLinks, config, index, hasNodes, linkAreas);
}

// 处理节点的连接带和竖线的位置
function handleLinkAreaPosition(nodesPosition, config, nodeLinks) {
  // 连接带数组
  const linkAreas = [];
  const { marginWidth, space } = config;
  nodesPosition.forEach((item, index) => {
    const margin = marginWidth[index];
    item.forEach(node => {
      const hasNodes = node && node?.nodes ? true : false;
      // 代表是根节点
      if (!node?.parent && node?.children) {
        handleRootNodeLink(node, margin, hasNodes, space, linkAreas, config);
      }
      //最后一层的节点
      if (node?.parent && !node?.children) {
        handleLastNodeLink(node, margin, hasNodes, index, nodeLinks, config, linkAreas);
      }
      //中间连接层的节点
      if (node?.parent && node?.children) {
        handleMidNodeLink(node, hasNodes, margin, index, nodeLinks, config, linkAreas);
      }
    });
  });
  return linkAreas;
}

// 获取各个节点的位置
function handleNodePosition(data, config) {
  //用来存放同一层级所有节点
  const depthLeafNodes = [];
  getDepthNode(data, depthLeafNodes, config);
  getNodePosition(depthLeafNodes, config);
  return depthLeafNodes;
}

function handleData(data, link, config) {
  const innerData = getRootNode(data, link);
  //每一次进来重置最大层级
  maxDepths = 0;
  handleNodeChildren(innerData, data, link, config);
  return innerData;
}

export { handleData, handleNodePosition, handleLinkAreaPosition };
