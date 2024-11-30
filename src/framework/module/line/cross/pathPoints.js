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
import { add, offset, vectorFromPoints, isParallel, dot, getUnitVector, anotherOne, isOrthogonalLine } from "./vectorUtil";

/*
* 矩形节点延伸线方向，top:x坐标不变，y坐标减少延伸线的一个距离，定义为[0,-1]
* 描述方向 使用svg 平面轴 上：[0,-1] 右：[1,0] 下 [0,1] 左 [-1,0]
*/
const DIRECTION_TYPE = {
  top: [0, -1],
  right: [1, 0],
  bottom: [0, 1],
  left: [-1, 0],
}

// 点的矢量方向，转成top等语义化方向
const DIRECTION_NAME = {
  '0,-1': 'top',
  '1,0': 'right',
  '0,1': 'bottom',
  '-1,0': 'left',
  '0,0': 'right'
}

// 画圆弧拐点时的矢量
const OFFSET_RADIUS = {
  top: [0, 1],
  right: [-1, 0],
  bottom: [0, -1],
  left: [1, 0],
}

// 默认连线数据
const DEFAULT_OPTION = {
  startPoint: [0, 0],
  startDirection: 'right',
  startDistance: 10,
  endPoint: [100, 100],
  endDirection: 'left',
  endDistance: 10,
}
//中线智能 路由-遗留

// path 指除了延申线之外的连接线
function setPoints(data, option = { turnRatio: 0.5, radius: 0 }) {
  let lineData = Object.assign({}, DEFAULT_OPTION, data);
  let { startPoint, startDistance, endPoint, endDistance } = lineData;
  let startDirection = DIRECTION_TYPE[lineData.startDirection];
  let endDirection = DIRECTION_TYPE[lineData.endDirection];
  let points = [];
  
  // 起点和终点的x或者y轴相同时，只需要画一条线
  if (isOrthogonalLine(startPoint, endPoint)) {
    points.push({
      position: startPoint,
      direction: 'start'
    }, {
      position: endPoint,
      direction: 'end'
    })
  } else {
    
    // 1. 获得入方向和出方向 ——参数中已获得; 当endDirection 未定义时
    if (!endDirection) {
      let startToEnd = vectorFromPoints(startPoint, endPoint)
      if (Math.abs(startToEnd[0]) > Math.abs(startToEnd[1])) {
        endDirection = [startToEnd[0] / Math.abs(startToEnd[0]), 0]
      } else {
        endDirection = [0, startToEnd[1] / Math.abs(startToEnd[1])]
      }
    }
    
    // 起点和终点偏移量（延伸的x和y轴距离）
    let startOffset = offset(startDirection, startDistance);
    let endOffset = offset(endDirection, endDistance);
    
    // 2. 正交线起点和终点
    let pathStartPoint = add(startPoint, startOffset);
    let pathEndPoint = add(endPoint, endOffset);

    // 入口方向需要取反（入口方向例如是right:[1,0],计算偏移量时，应该是从右到左进入，所以应该是[-1,0]）
    endDirection = offset(endDirection, -1);

    // path的水平向量
    let pathHorizenVec = [pathEndPoint[0] - pathStartPoint[0], 0];
    
    // path的竖直向量
    let pathVerticalVec = [0, pathEndPoint[1] - pathStartPoint[1]];

    // 3.计算path 的起始方向：起点延伸方向，若与垂直向量或者水平向量当中的一项，同方向，则以起点延伸线方向画线，否则取垂直方向为起始方向。
    let comp = [pathHorizenVec, pathVerticalVec]
    let pathStart;

    // 正交线起点的平行向量
    let startParallelVec = comp.find(vec => isParallel(vec, startDirection));

    // 如果点积为正，则两向量同向；如果为负，则反向；如果为零，则两向量正交
    if (dot(startParallelVec, startDirection) > 0) {
      
      // 延伸线同方向继续延伸
      pathStart = startParallelVec
    } else {
      
      // 延伸线垂直方向开始画线
      pathStart = anotherOne(comp, startParallelVec);
    }

    // 4.计算path 的末方向： 两方向与末方向平行的一项，如果是同向则取之，反之则取垂直方向的一项
    let pathEnd;
    let endParallelVec = comp.find(vec => isParallel(vec, endDirection));
    if (dot(endParallelVec, endDirection) > 0) {
      pathEnd = endParallelVec
    } else {
      pathEnd = anotherOne(comp, endParallelVec);

    }
    
    // 5.如果path的起末为同方向，则分为2个拐角，否则为1个拐角，即出和入平行分为2个拐角，垂直需要1个拐角
    let splitNum = dot(pathStart, pathEnd) > 0 ? 2 : 1;

    // 中间连线的向量
    let pathMiddle = anotherOne(comp, pathEnd);

    // 6.计算path中的转折点 返回数据中加入了单位向量
    points.push({
      position: startPoint,
      direction: 'start'
    }, {
      position: pathStartPoint,
      direction: directionText(startDirection)
    });
    if (splitNum == 1) {
      let point1 = add(pathStartPoint, pathStart)
      let dir1 = getUnictVecByStraight(pathStart)
      let point2 = add(point1, pathEnd)
      let dir2 = getUnictVecByStraight(pathEnd)
      points.push({
        position: point1,
        direction: directionText(dir1)
      }, {
        position: point2,
        direction: directionText(dir2)
      })
    } else {
      let point1 = add(pathStartPoint, offset(pathStart, option.turnRatio));
      let dir1 = getUnictVecByStraight(pathStart);
      let point2 = add(point1, pathMiddle);
      let dir2 = getUnictVecByStraight(pathMiddle);
      let point3 = add(point2, offset(pathEnd, 1 - option.turnRatio));
      let dir3 = getUnictVecByStraight(pathEnd)
      if (option.radius) {
        let directionVector1 = OFFSET_RADIUS[directionText(dir1)];
        let directionVector2 = OFFSET_RADIUS[directionText(dir2)];
        point1 = add(point1, offset(directionVector1, option.radius))
        point2 = add(point2, offset(directionVector2, option.radius))
        points.push({
          position: point1,
          direction: directionText(dir1)
        }, {
          
          // 增加的圆弧点
          position: point1,
          direction: getCorner(dir1, dir2)
        }, {
          position: point2,
          direction: directionText(dir2),
        }, {
          
          // 增加的圆弧点
          position: point2,
          direction: getCorner(dir2, dir3),
        }, {
          position: point3,
          direction: directionText(dir3)
        })
      } else {
        points.push({
          position: point1,
          direction: directionText(dir1)
        }, {
          position: point2,
          direction: directionText(dir2),
        }, {
          position: point3,
          direction: directionText(dir3)
        })
      }
    }
    points.push({
      position: endPoint,
      direction: 'end'
    });
  }
  
  // 返回path所需要的所有点的坐标信息
  return points.filter(v => v.direction !== false);
}

// 获取竖直和水平向量的单位向量
function getUnictVecByStraight(vector) {
  if (vector[0] == 0 && vector[1] == 0)
    return [0, 0]
  else if (vector[0] == 0)
    return [0, vector[1] / Math.abs(vector[1])]
  else if (vector[1] == 0)
    return [vector[0] / Math.abs(vector[0]), 0]
  else
    return getUnitVector(vector)
}

// 将向量坐标转成语义化的方向信息
function directionText(vector) {
  let text = vector.join(',').replace('-0', '0');
  return DIRECTION_NAME[text]
}

// 拐点方向
function getCorner(startDir, endDir) {
  const startStr = directionText(startDir).charAt(0).toUpperCase();
  const endStr = directionText(endDir).charAt(0).toUpperCase();
  return startStr + endStr
}

export default setPoints;