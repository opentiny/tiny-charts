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
// 局部渲染方法
function bufferRender(nodeInstance, params, container, canvasContainterRect) {
  if (nodeInstance.hasRender) return;
  if (isInBuffer(nodeInstance, params, canvasContainterRect)) {
    let nodeDom = nodeInstance.render();
    container.appendChild(nodeDom);
  };
};

// 判断节点是否在缓冲区内
function isInBuffer(node, params, canvasContainterRect) {
  let { offset, scale, lastScale, center, type } = params;
  // TODO 之后可以放到option里面
  const buffer = 1.3; // 缓冲区是容器大小的1.5倍 
  // 缓冲区的长宽
  const bufferWidth = canvasContainterRect.width * buffer;
  const bufferHeight = canvasContainterRect.height * buffer;

  // 缓冲区的边界
  const bufferLeft = (canvasContainterRect.width - bufferWidth) / 2;
  const bufferTop = (canvasContainterRect.height - bufferHeight) / 2;
  const bufferRight = bufferLeft + bufferWidth;
  const bufferBottom = bufferTop + bufferHeight;

  let { x, y, width, height, nodeRealY, nodeRealX } = node.data;

  if (type === 'move') lastScale = scale;

  // 计算节点相当于上一个节点的偏移量
  let nodeOffset = {
    x: offset.x + ((nodeRealX || x) - center.x) / lastScale * (scale - lastScale),
    y: offset.y + ((nodeRealY || y) - center.y) / lastScale * (scale - lastScale),
  };

  nodeRealX = (nodeRealX || x) + nodeOffset.x;
  nodeRealY = (nodeRealY || y) + nodeOffset.y;

  // 存储节点坐标 方便下次使用
  node.data.nodeRealX = nodeRealX;
  node.data.nodeRealY = nodeRealY;

  // 计算节点的四个角的坐标（基于当前偏移和缩放）
  const topLeftX = nodeRealX;
  const topLeftY = nodeRealY;
  const topRightX = nodeRealX + width * scale;
  const topRightY = nodeRealY;
  const bottomLeftX = nodeRealX;
  const bottomLeftY = nodeRealY + height * scale;
  const bottomRightX = nodeRealX + width * scale;
  const bottomRightY = nodeRealY + height * scale;

  // 检查四个角是不是都在缓冲区
  const allCornersOutside = (
    (topLeftX < bufferLeft || topLeftX > bufferRight || topLeftY < bufferTop || topLeftY > bufferBottom) &&
    (topRightX < bufferLeft || topRightX > bufferRight || topRightY < bufferTop || topRightY > bufferBottom) &&
    (bottomLeftX < bufferLeft || bottomLeftX > bufferRight || bottomLeftY < bufferTop || bottomLeftY > bufferBottom) &&
    (bottomRightX < bufferLeft || bottomRightX > bufferRight || bottomRightY < bufferTop || bottomRightY > bufferBottom)
  );
  return !allCornersOutside;
}

export default bufferRender;