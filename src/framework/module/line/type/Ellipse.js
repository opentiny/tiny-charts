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
// 椭圆连线
export default class Ellipse {

  // 椭圆曲线控制点
  EllipseDistance = 0.6;

  constructor(option) {
    this.EllipseDistance = option.lineOption.EllipseDistance || 0.6;
  }

  creatPath(data,option) {
		function getCircleLineIntersection(x1, y1, x2, y2, radius) {
			// 计算直线斜率和截距
			let k = (y2 - y1) / (x2 - x1);
			let b = y1 - k * x1;
			let A = 1 + k * k;
			let B = 2 * k * (b - y1) - 2 * x1;
			let C = x1 * x1 + (b - y1) * (b - y1) - radius * radius;
			let discriminant = B * B - 4 * A * C;
			if (discriminant < 0) {
				return null; // 没有交点或相切于一点
			} else if (discriminant === 0) {
				// 相切于一点的情况（理论上只有一个交点）
				let x = (-B + Math.sqrt(discriminant)) / (2 * A);
				let y = k * x + b;
				return [{x: x, y: y}]; // 返回一个交点坐标数组
			} else {
					// 两个交点的情况
					let sqrtTerm = Math.sqrt(discriminant);
					let x1 = (-B + sqrtTerm) / (2 * A);
					let y1 = k * x1 + b;
					let x2 = (-B - sqrtTerm) / (2 * A);
					let y2 = k * x2 + b;
					return [{x: x1, y: y1}, {x: x2, y: y2}]; // 返回两个交点坐标数组
			}
		}
    let { startConnector, endConnector } = data;
    const x1 = startConnector.absolute.x;
    const y1 = startConnector.absolute.y;
    const x2 = endConnector.absolute.x;
    const y2 = endConnector.absolute.y;
		
		let middleX = (x2 + x1) / 2;
		let middleY = (y2 + y1) / 2;
		let pointX;
		let pointY;
		let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    let distance = Math.hypot(xDiff, yDiff);
		if(option?.layout?.type == 'circle'){
			let circleX = option?.layout?.center ? option?.layout?.center[0]: 0;
			let circleY = option?.layout?.center ? option?.layout?.center[1]: 0;
			let circleR = option?.layout?.radian ? option?.layout?.radian : 400; //值越大弧线越长
			let pointArr = getCircleLineIntersection(middleX,middleY,circleX,circleY,circleR);
			if(middleX < circleX) {
				pointX = pointArr[0].x;
				pointY = pointArr[0].y;
			}
			else {
				pointX = pointArr[1].x;
				pointY = pointArr[1].y;
			}
		}
		else {
    	pointX = x2 - xDiff/2,
    	pointY = yDiff > 0 ? y2 + this.EllipseDistance*distance : y2 - this.EllipseDistance*distance
		}
		
    let M = `M${x1} ${y1}`;
    let Q = `Q${pointX} ${pointY} ${x2} ${y2}`;
    let path = `${M} ${Q}`;
		
    return path;
  }
}


