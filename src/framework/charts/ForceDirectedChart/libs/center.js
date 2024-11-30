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
// 设置点阵中心 
export default function(x, y) {
  var nodes, strength = 1;

  if (x == null) x = 0;
  if (y == null) y = 0;

  // （单例对象模式）
  function force() {
    let n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (let i = 0; i < n; ++i) {
      node = nodes[i];
      sx += node.x; // 节点x之和
      sy += node.y; // 节点y之和
    }
    // sx/n是点阵的中心x坐标， sy/n是点阵的中心y坐标，
    sx = (sx / n - x) * strength;
    sy = (sy / n - y) * strength;
    for (let i = 0; i < n; ++i) {
      node = nodes[i]; 
      node.x -= sx; // node.x = node.x + (x - sy/n)*strength
      node.y -= sy;
    }
  }

  // 初始化，为nodes赋值
  force.initialize = function(_) {
    nodes = _;
  };

  force.x = function(_) {
    if (arguments.length) {
      x = +_;
      return force;
    }
    return x;
  };

  force.y = function(_) {
    if (arguments.length) {
      y = +_;
      return force;
    }
    return y;
  };

  force.strength = function(_) {
    if (arguments.length) {
      strength = +_;
      return force;
    }
    return strength;
  };

  return force;
}
