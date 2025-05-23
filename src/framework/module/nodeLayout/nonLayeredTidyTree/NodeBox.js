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
const DEFAULT_BOX_FONTSIZE = 18;
const DEFAULT_BOX_HEIGHT = 36;
const DEFAULT_BOX_GAP = 18;
const DEFAULT_BOX_OPTIONS = {
  getId(t) {
    return t.id || t.name;
  },
  getPreH(t) {
    return t.preH || 0;
  },
  getPreV(t) {
    return t.preV || 0;
  },
  getHGap(t) {
    return t.hgap || DEFAULT_BOX_GAP;
  },
  getVGap(t) {
    return t.vgap || DEFAULT_BOX_GAP;
  },
  getChildren(t) {
    return t.children;
  },
  getHeight(t) {
    return t.height || DEFAULT_BOX_HEIGHT;
  },
  getWidth(t) {
    const h = t.label || " ";
    return t.width || h.split("").length * DEFAULT_BOX_FONTSIZE;
  },
};
export default class NodeBox {
  constructor(t, h) {
    this.options = Object.assign(DEFAULT_BOX_OPTIONS, h);
    this.vgap = this.hgap = 0;
    const e = this.options.getHGap(t);
    const i = this.options.getVGap(t);
    this.preH = this.options.getPreH(t);
    this.preV = this.options.getPreV(t);
    this.width = this.options.getWidth(t);
    this.height = this.options.getHeight(t);
    this.width += this.preH;
    this.height += this.preV;
    this.id = this.options.getId(t);
    this.x = 0;
    this.y = 0;
    this.depth = t.depth;
    if (!this.children) {
      this.children = [];
    }
    this.addGap(e, i);
  }
  isRoot() {
    return this.depth === 0;
  }
  isLeaf() {
    return this.children.length === 0;
  }
  addGap(t, h) {
    this.hgap += t;
    this.vgap += h;
    this.width += 2 * t;
    this.height += 2 * h;
  }
  eachNode(t) {
    let h = [this];
    let e;
    while ((e = h.shift())) {
      t(e);
      h = e.children.concat(h);
    }
  }
  DFTraverse(t) {
    this.eachNode(t);
  }
  BFTraverse(t) {
    let h = [this];
    let e;
    while ((e = h.shift())) {
      t(e);
      h = h.concat(e.children);
    }
  }
  getBoundingBox() {
    const h = {
      left: Number.MAX_VALUE,
      top: Number.MAX_VALUE,
      width: 0,
      height: 0,
    };
    this.eachNode((t) => {
      h.left = Math.min(h.left, t.x);
      h.top = Math.min(h.top, t.y);
      h.width = Math.max(h.width, t.x + t.width);
      h.height = Math.max(h.height, t.y + t.height);
    });
    return h;
  }
  translate(h = 0, e = 0) {
    this.eachNode((t) => {
      t.x += h;
      t.y += e;
      t.x += t.preH;
      t.y += t.preV;
    });
  }
  right2left() {
    const h = this.getBoundingBox();
    this.eachNode((t) => {
      t.x = t.x - (t.x - h.left) * 2 - t.width;
    });
    this.translate(h.width, 0);
  }
  bottom2top() {
    const h = this.getBoundingBox();
    this.eachNode((t) => {
      t.y = t.y - (t.y - h.top) * 2 - t.height;
    });
    this.translate(0, h.height);
  }
}
