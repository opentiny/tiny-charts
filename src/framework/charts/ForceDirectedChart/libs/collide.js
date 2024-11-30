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
import quadtree from "./quadtree.js";
import constant from "./constant.js";
import jiggle from "./jiggle.js";

// vx/vy是当前节点的运动速度
function x(d) {
  return d.x + d.vx; // 运动一步 x + vx
}

function y(d) {
  return d.y + d.vy;
}

// 防止重叠
export default function(radius) {
  let nodes,
      radii,
      random,
      strength = 1, // 力度
      iterations = 1;

  if (typeof radius !== "function") { // radius不是方法时，转数字常量或默认为1
    radius = constant(radius == null ? 1 : +radius);
  }

  function force() {
  
    let i, 
        tree,
        node,
        xi,
        yi,
        ri, // 半径
        ri2; // 半径平方

    const n = nodes.length;
    for (let k = 0; k < iterations; ++k) {
      // 以x,y访问器构建一个四叉树，即节点运动到下一步位置为坐标
      // visitAfter是后序遍历树的节点，执行prepare为每个节点求半径r,参数为各个节点，
      tree = quadtree(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index];
        ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        // 前序遍历所有节点，apply返回true则不访问其子节点
        tree.visit(apply);
      }
    }

    // 为每个节点求半径r,参数为各个节点，返回true节点不可见
    function prepare(quad) {
      // 是否存在叶子节点 
      if (quad.data) return quad.r = radii[quad.data.index];
      quad.r = 0;
      for (let i = 0; i < 4; ++i) {
        // 取最大r值
        if (quad[i] && quad[i].r > quad.r) {
          quad.r = quad[i].r;
        }
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      let data = quad.data;
      let rj = quad.r;
      let r = ri + rj; // 两个点与其作用域构成两个圆
      if (data) { // 叶子节点
        if (data.index > node.index) {
          // 设第一重循环nodes[i]为节点A（xi,yi） 第二重循环为节点B(data.x,data.y)下一步运动(+=vx,+=vy)
          let x = xi - (data.x + data.vx), // B到A的水平距离
              y = yi - (data.y + data.vy),
              l = x * x + y * y;
          if (l < r * r) { // 发生了碰撞
            if (x === 0) x = jiggle(random), l += x * x; // 避免x=0
            if (y === 0) y = jiggle(random), l += y * y; // 避免y=0
            // 斥力 = 重叠长度/实际距离 * 碰撞力度
            l = (r - (l = Math.sqrt(l))) / l * strength;
            // 计算AB节点新的运动速度和方向，AB点往相反方向运动
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }
        return;
      }
      // 非叶子节点
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }


  // 初始化
  function initialize() {
    if (!nodes) return;
    const n = nodes.length;
    radii = new Array(n);
    for (let i = 0; i < n; ++i) {
      let node = nodes[i];
      radii[node.index] = +radius(node, i, nodes); // 收集所有节点的半径
    }
  }

  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  // 设置或读取半径
  force.radius = function(_) {
    if(arguments.length) { // set
      radius = typeof _ === "function" ? _ : constant(+_);
      initialize();
      return force;
    }
    return radius; // get
  };

  // 设置或读取迭代次数
  force.iterations = function(_) {
    if (arguments.length) { // set
      iterations = +_;
      return force;
    }
    return iterations; // get
  };

  force.strength = function(_) {
    if (arguments.length) { // set
      strength = +_;
      return force;
    }
    return strength; // get
  };

  return force;
}
