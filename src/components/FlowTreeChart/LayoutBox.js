const DEFAULT_BOX_FONTSIZE = 18;
const DEFAULT_BOX_HEIGHT = 36;
const DEFAULT_BOX_GAP = 18;
const DEFAULT_BOX_OPTIONS = {
  getId(d) {
    return d.id || d.name;
  },
  getPreH(d) {
    return d.preH || 0;
  },
  getPreV(d) {
    return d.preV || 0;
  },
  getHGap(d) {
    return d.hgap || DEFAULT_BOX_GAP;
  },
  getVGap(d) {
    return d.vgap || DEFAULT_BOX_GAP;
  },
  getChildren(d) {
    return d.children;
  },
  getHeight(d) {
    return d.height || DEFAULT_BOX_HEIGHT;
  },
  getWidth(d) {
    const label = d.label || ' ';
    return d.width || label.split('').length * DEFAULT_BOX_FONTSIZE;
  },
};

/**
 * 将每个node进行盒模型计算
 *
 * Gaps: filling space between nodes
 * (x, y) ----------------------
 * |            vgap            |
 * |    --------------------    h
 * | h |                    |   e
 * | g |                    |   i
 * | a |                    |   g
 * | p |                    |   h
 * |   ---------------------    t
 * |                            |
 *  -----------width------------
 *
 */
export default class LayoutBox {
  constructor(data, options) {
    this.options = Object.assign(DEFAULT_BOX_OPTIONS, options);

    (this.vgap = 0), (this.hgap = 0);

    const hgap = this.options.getHGap(data);
    const vgap = this.options.getVGap(data);
    this.preH = this.options.getPreH(data);
    this.preV = this.options.getPreV(data);
    this.width = this.options.getWidth(data);
    this.height = this.options.getHeight(data);
    this.width += this.preH;
    this.height += this.preV;
    this.id = this.options.getId(data);
    this.x = 0;
    this.y = 0;
    this.depth = data.depth;
    if (!this.children) {
      this.children = [];
    }
    this.addGap(hgap, vgap);
  }

  isRoot() {
    return this.depth === 0;
  }

  isLeaf() {
    return this.children.length === 0;
  }

  addGap(hgap, vgap) {
    this.hgap += hgap;
    this.vgap += vgap;
    this.width += 2 * hgap;
    this.height += 2 * vgap;
  }

  // Depth First traverse
  eachNode(callback) {
    let nodes = [this];
    let current;
    while ((current = nodes.shift())) {
      callback(current);
      nodes = current.children.concat(nodes);
    }
  }

  // Depth First traverse
  DFTraverse(callback) {
    this.eachNode(callback);
  }

  // Breadth First traverse
  BFTraverse(callback) {
    let nodes = [this];
    let current;
    while ((current = nodes.shift())) {
      callback(current);
      nodes = nodes.concat(current.children);
    }
  }

  getBoundingBox() {
    // BBox for just one tree node
    const bb = {
      left: Number.MAX_VALUE,
      top: Number.MAX_VALUE,
      width: 0,
      height: 0,
    };
    this.eachNode(node => {
      bb.left = Math.min(bb.left, node.x);
      bb.top = Math.min(bb.top, node.y);
      bb.width = Math.max(bb.width, node.x + node.width);
      bb.height = Math.max(bb.height, node.y + node.height);
    });
    return bb;
  }

  // translate
  translate(tx = 0, ty = 0) {
    this.eachNode(node => {
      node.x += tx;
      node.y += ty;
      node.x += node.preH;
      node.y += node.preV;
    });
  }

  right2left() {
    const bb = this.getBoundingBox();
    this.eachNode(node => {
      node.x = node.x - (node.x - bb.left) * 2 - node.width;
    });
    this.translate(bb.width, 0);
  }

  bottom2top() {
    const bb = this.getBoundingBox();
    this.eachNode(node => {
      node.y = node.y - (node.y - bb.top) * 2 - node.height;
    });
    this.translate(0, bb.height);
  }
}
