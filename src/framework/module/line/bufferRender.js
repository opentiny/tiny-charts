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
function bufferRender(lineInstance, params, gContainer, canvasContainterRect) {
  let lineDom;
  if (lineInstance.hasRender) return;
  if (isInBuffer(lineInstance, params, canvasContainterRect)) {
    lineDom = lineInstance.render();
    gContainer.appendChild(lineDom);
  };
  return lineDom;
};

// 判断节点是否在缓冲区内
function isInBuffer(line, params, canvasContainterRect) {
  let { offset, scale, lastScale, center, type } = params;
  // TODO 之后可以放到option里面
  const buffer = 1; // 缓冲区是容器大小的1.5倍 
  // 缓冲区的长宽
  const bufferWidth = canvasContainterRect.width * buffer;
  const bufferHeight = canvasContainterRect.height * buffer;

  // 缓冲区的边界
  const bufferLeft = (canvasContainterRect.width - bufferWidth) / 2;
  const bufferTop = (canvasContainterRect.height - bufferHeight) / 2;
  const bufferRight = bufferLeft + bufferWidth;
  const bufferBottom = bufferTop + bufferHeight;

  let { startConnector, endConnector, lineRealX, lineRealY } = line.data;
  // 连线起始点坐标算出长宽
  const startPoint = startConnector.absolute;
  const endPoint = endConnector.absolute;
  const width = endPoint.x - startPoint.x;
  const height = endPoint.y - startPoint.y;

  if (type === 'move') lastScale = scale;

  // 计算连线初始点相当于上一次点的偏移量
  let lineOffset = {
    x: offset.x + ((lineRealX || startPoint.x) - center.x) / lastScale * (scale - lastScale),
    y: offset.y + ((lineRealY || startPoint.y) - center.y) / lastScale * (scale - lastScale),
  };

  lineRealX = (lineRealX || startPoint.x) + lineOffset.x;
  lineRealY = (lineRealY || startPoint.y) + lineOffset.y;

  //  存储连线起始坐标 方便下次使用
  line.data.lineRealX = lineRealX;
  line.data.lineRealY = lineRealY;

  // 连线的起始点坐标
  const startPointX = lineRealX;
  const startPointY = lineRealY;
  const endPointX = lineRealX + width * scale;
  const endPointY = lineRealY + height * scale;

  // 检查起始点是不是都在缓冲区
  const allCornersOutside = (
    (startPointX < bufferLeft || startPointX > bufferRight || startPointY < bufferTop || startPointY > bufferBottom) &&
    (endPointX < bufferLeft || endPointX > bufferRight || endPointY < bufferTop || endPointY > bufferBottom)
  );
  return !allCornersOutside;
}

export default bufferRender;