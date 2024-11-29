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
import setPoints from '../cross/pathPoints';

// 圆角曲线连线
export default class Round {

  // 默认圆弧弧度为20，垂直和水平线段长度为10
  radius = 10;

  // 矩形节点延伸线默认长度
  lineDistance = 10;

  constructor(option) {
    this.radius = option.lineOption.style.radius === undefined ? this.radius : option.lineOption.style.radius;
  }

  // 左上角圆角
  setLeftTopCornerPath(position, direction) {
    let startPoint;
    let endPoint;
    const x = position[0];
    const y = position[1];

    // 从左到下
    if (direction === 'down') {
      startPoint = {
        x: x - this.radius,
        y
      };
      endPoint = {
        x: x - this.radius,
        y: y + this.radius
      }
    } else {

      // 从上到右
      startPoint = {
        x: x,
        y: y - this.radius
      };
      endPoint = {
        x: x + this.radius,
        y: y - this.radius
      }
    }
    return `Q${startPoint.x} ${startPoint.y} ${endPoint.x} ${endPoint.y} `;
  }

  // 右上角圆角
  setRightTopCornerPath(position, direction) {
    let startPoint;
    let endPoint;
    const x = position[0];
    const y = position[1];

    // 从右到下
    if (direction === 'down') {
      startPoint = {
        x: x + this.radius,
        y: y
      };
      endPoint = {
        x: x + this.radius,
        y: y + this.radius
      }
    } else {

      // 从下到左
      startPoint = {
        x: x,
        y: y - this.radius
      };
      endPoint = {
        x: x - this.radius,
        y: y - this.radius
      }
    }
    return `Q${startPoint.x} ${startPoint.y} ${endPoint.x} ${endPoint.y} `;
  }

  // 右下角圆角
  setRightBottomCornerPath(position, direction) {
    let startPoint;
    let endPoint;
    const x = position[0];
    const y = position[1];

    // 从下到左
    if (direction === 'down') {
      startPoint = {
        x: x,
        y: y + this.radius
      };
      endPoint = {
        x: x - this.radius,
        y: y + this.radius
      }
    } else {

      // 从右到上
      startPoint = {
        x: x + this.radius,
        y: y
      };
      endPoint = {
        x: x + this.radius,
        y: y - this.radius
      }
    }
    return `Q${startPoint.x} ${startPoint.y} ${endPoint.x} ${endPoint.y} `;
  }

  // 左下角圆角
  setLeftBottomCornerPath(position, direction) {
    let startPoint;
    let endPoint;
    const x = position[0];
    const y = position[1];

    // 从下到右
    if (direction === 'down') {
      startPoint = {
        x: x,
        y: y + this.radius
      };
      endPoint = {
        x: x + this.radius,
        y: y + this.radius
      }
    } else {

      // 从左到上
      startPoint = {
        x: x - this.radius,
        y: y
      };
      endPoint = {
        x: x - this.radius,
        y: y - this.radius
      }
    }
    return `Q${startPoint.x} ${startPoint.y} ${endPoint.x} ${endPoint.y} `;
  }

  // 计算正交线所有路径的节点
  creatPoints(data) {
    const { startConnector, endConnector } = data;
    data.nodes = setPoints({
      startPoint: [Number(startConnector.absolute.x.toFixed(2)), Number(startConnector.absolute.y.toFixed(2))],
      startDirection: startConnector.position || 'right',
      startDistance: this.lineDistance,
      endPoint: [Number(endConnector.absolute.x.toFixed(2)), Number(endConnector.absolute.y.toFixed(2))],
      endDirection: endConnector.position || 'left',
      endDistance: this.lineDistance
    }, { turnRatio: 0.3, radius: this.radius })
  }

  // 根据节点，生成path
  creatPath(data) {
    this.creatPoints(data);
    let startPoint;
    let endPoint;
    let LinePath = '';
    data.nodes.forEach((item, index) => {
      if (index == 0) {
        startPoint = {
          x: item.position[0],
          y: item.position[1]
        }
      } else if (index == data.nodes.length - 1) {
        endPoint = {
          x: item.position[0],
          y: item.position[1]
        }
      } else {

        // 画直线
        if (['top', 'right', 'bottom', 'left'].includes(item.direction)) {
          LinePath += `L${item.position[0]} ${item.position[1]} `
        } else {

          // 画拐点，T--top,R--right,B--bottom,L--left各个方向的缩写
          switch (item.direction) {

            // 拐点从上到右，即左上角圆弧，方向向上
            case 'TR':
              LinePath += this.setLeftTopCornerPath(item.position, 'up')
              break;

            // 拐点从左到下，即左上角圆弧，方向向下
            case 'LB':
              LinePath += this.setLeftTopCornerPath(item.position, 'down')
              break;

            // 拐点从左到上，即左下角圆弧，方向向上  
            case 'LT':
              LinePath += this.setLeftBottomCornerPath(item.position, 'up')
              break;

            // 拐点从下到右，即左下角圆弧，方向向下   
            case 'BR':
              LinePath += this.setLeftBottomCornerPath(item.position, 'down')
              break;

            // 拐点从上到左，即右上角圆弧，方向向上   
            case 'TL':
              LinePath += this.setRightTopCornerPath(item.position, 'up')
              break;

            // 拐点从右到下，即右上角圆弧，方向向下   
            case 'RB':
              LinePath += this.setRightTopCornerPath(item.position, 'down')
              break;

            // 拐点从右到上，即右下角圆弧，方向向上  
            case 'RT':
              LinePath += this.setRightBottomCornerPath(item.position, 'up')
              break;

            // 拐点从下到左，即右下角圆弧，方向向下  
            case 'BL':
              LinePath += this.setRightBottomCornerPath(item.position, 'down')
              break;

            // 直线，上上、右右、下下、左左
            default:
              break;
          }
        }
      }
    })
    return `M${startPoint.x} ${startPoint.y} ${LinePath}L${endPoint.x} ${endPoint.y}`
  }
}
