

function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]' ? true : false;
}

function isString(value) {
    return typeof value === 'string';
}

function isNumber(value) {
    return typeof value === 'number';
}

function isNaN (input) {
    return Number.isNaN(Number(input))
}

function getDegree (n,nodeIdxMap,edges) {
    const degrees = [];
    for (let i = 0; i < n; i++) {
      degrees[i] = 0;
    }
    edges.forEach((e) => {
      if (e.start) {
        degrees[nodeIdxMap[e.start]] += 1;
      }
      if (e.end) {
        degrees[nodeIdxMap[e.end]] += 1;
      }
    });
    return degrees;
};


function small(val) {
    let res;
    rows = rows || 5;
    cols = cols || 5;
    if (val == null) {
      res = Math.min(rows, cols);
    } else {
      const min = Math.min(rows, cols);
      if (min === rows) {
        rows = val;
      } else {
        cols = val;
      }
    }
    return res;
  }

function large(val) {
    let res;
    rows = rows || 5;
    cols = cols || 5;
    if (val == null) {
      res = Math.max(rows, cols);
    } else {
      const max = Math.max(rows, cols);
      if (max === rows) {
        rows = val;
      } else {
        cols = val;
      }
    }
    return res;
}

function used(row, col) {
    return cellUsed[`c-${row}-${col}`] || false;
}

function use(row, col) {
    cellUsed[`c-${row}-${col}`] = true;
}
function moveToNextCell() {
    cols = cols || 5;
    col++;
    if (col >= cols) {
      col = 0;
      row++;
    }
}

function getPos(node) {

    let x;
    let y;

    // see if we have a manual position set
    const rcPos = id2manPos[node.id];
    if (rcPos) {
      x = rcPos.col * cellWidth + cellWidth / 2 + begin[0];
      y = rcPos.row * cellHeight + cellHeight / 2 + begin[1];
    } else {
      // otherwise set automatically

      while (used(row, col)) {
        moveToNextCell();
      }

      x = col * cellWidth + cellWidth / 2 + begin[0];
      y = row * cellHeight + cellHeight / 2 + begin[1];
      use(row, col);

      moveToNextCell();
    }
    node.x = x;
    node.y = y;
}





/** returns { row, col } for element */
let position;

let nodeSize;


/** 布局中心 */
let center = [0, 0];

let splits;

let columns;

let cells;

let begin;
/** prevents node overlap, may overflow boundingBox if not enough space */
let preventOverlap;

/** extra spacing around nodes when preventOverlap: true */
let preventOverlapPadding;

/** uses all available space on false, uses minimal space on true */
let condense;

/** force num of rows in the grid */
let rows;

/** force num of columns in the grid */
let cols;

/** a sorting function to order the nodes; e.g. function(a, b){ return a.datapublic ('weight') - b.data('weight') } */
let sortBy; // default  degreeMany  degreeFew 自定义

let cellWidth;

let cellHeight;

let cellUsed;

let id2manPos;

let row;

let col;

// 执行布局
function execute(nodes,data,containerSize,options) {
    let layout = options.layout;
    begin = layout.begin || [0,0];
    /** prevents node overlap, may overflow boundingBox if not enough space */
    preventOverlap = layout.preventOverlap || false;

    /** extra spacing around nodes when preventOverlap: true */
    preventOverlapPadding = layout.preventOverlapPadding || 0;

    /** uses all available space on false, uses minimal space on true */
    condense = layout.condense || false;

    /** force num of rows in the grid */
    rows = layout.rows || undefined;

    /** force num of columns in the grid */
    cols = layout.cols || undefined;

    /** a sorting function to order the nodes; e.g. function(a, b){ return a.datapublic ('weight') - b.data('weight') } */
    sortBy = layout.sortBy || 'default'; // default  degreeMany  degreeFew 自定义

    let width = layout.width || containerSize.width;
    let height = layout.height || containerSize.height;

    cellWidth = 0;

    cellHeight = 0;

    cellUsed = {};

    id2manPos = {};

    row = 0;

    col = 0;
        
    nodeSize = 50;

    if(options.node) {
        nodeSize = [options.node.width,options.node.height]
    }

    const edges = data.edges;
    const n = nodes.length;

    if (n === 0) {
      return;
    }
    if (n === 1) {
      nodes[0].x = center[0];
      nodes[0].y = center[1];
      return;
    }

    const layoutNodes = [];
    nodes.forEach((node) => {
      layoutNodes.push(node);
    });
    const nodeIdxMap = {};
    layoutNodes.forEach((node, i) => {
      nodeIdxMap[node.id] = i;
    });

    

    if (isString(sortBy) && sortBy !== 'default') {
        if (isNaN(nodes[0][sortBy])) {
            const values = getDegree(layoutNodes.length, nodeIdxMap, edges);
            layoutNodes.forEach((node, i) => {
                node[sortBy] = values[i];
            });
        }
    }

    // sort nodes by value
    if(sortBy === 'degreeMany' || isString(sortBy) && sortBy !== 'default' && sortBy !== 'degreeFew') {
        layoutNodes.sort((n1, n2) => (n2[sortBy] - n1[sortBy]));
    }

    if(sortBy === 'degreeFew') {
        layoutNodes.sort((n1, n2) => (n1[sortBy] - n2[sortBy]));
    }

    if (!width && typeof window !== 'undefined') {
      width = window.innerWidth;
    }
    if (!height && typeof window !== 'undefined') {
      height = window.innerHeight;
    }

    const oRows = rows;
    const oCols = cols != null ? cols : columns;
    cells = n;

    // if rows or columns were set in self, use those values
    if (oRows != null && oCols != null) {
        rows = oRows;
        cols = oCols;
    } else if (oRows != null && oCols == null) {
        rows = oRows;
        cols = Math.ceil(cells / rows);
    } else if (oRows == null && oCols != null) {
        cols = oCols;
        rows = Math.ceil(cells / cols);
    } else {
        // otherwise use the automatic values and adjust accordingly	      // otherwise use the automatic values and adjust accordingly
        // width/height * splits^2 = cells where splits is number of times to split width
        splits = Math.sqrt((cells * height) / width);
        rows = Math.round(splits);
        cols = Math.round((width / height) * splits);
    }

    if (cols * rows > cells) {
        // otherwise use the automatic values and adjust accordingly
        // if rounding was up, see if we can reduce rows or columns
        const sm = small();
        const lg = large();
  
        // reducing the small side takes away the most cells, so try it first
        if ((sm - 1) * lg >= cells) {
            small(sm - 1);
        } else if ((lg - 1) * sm >= self.cells) {
            large(lg - 1);
        }
      } else {
        // if rounding was too low, add rows or columns
        while (cols * rows < cells) {
            const sm = small();
            const lg = large();

            // try to add to larger side first (adds less in multiplication)
            if ((lg + 1) * sm >= cells) {
                large(lg + 1);
            } else {
                small(sm + 1);
            }
        }
    }
  
    cellWidth = width / cols;

    cellHeight = height / rows;

    if (condense) {
        cellWidth = 0;
        cellHeight = 0;
    }
  
    if (preventOverlap) {
        layoutNodes.forEach((node) => {
            if (!node.x || !node.y) {
                // for bb
                node.x = 0;
                node.y = 0;
            }

            let nodew;
            let nodeh;
            if (isArray(node.size)) {
            nodew = node.size[0];
            nodeh = node.size[1];
            } else if (isNumber(node.size)) {
            nodew = node.size;
            nodeh = node.size;
            }
            if (nodew === undefined || nodeh === undefined) {
            if (isArray(nodeSize)) {
                nodew = nodeSize[0];
                nodeh = nodeSize[1];
            } else if (isNumber(nodeSize)) {
                nodew = nodeSize;
                nodeh = nodeSize;
            } else {
                nodew = 30;
                nodeh = 30;
            }
            }

            const p = preventOverlapPadding;

            const w = nodew + p;
            const h = nodeh + p;

            cellWidth = Math.max(cellWidth, w);
            cellHeight = Math.max(cellHeight, h);
        });
    }

    row = 0;
    col = 0;

    for (let i = 0; i < layoutNodes.length; i++) {
        const node = layoutNodes[i];
        let rcPos;
        if (position) {
          rcPos = position(node);
        }
  
        if (rcPos && (rcPos.row !== undefined || rcPos.col !== undefined)) {
          // must have at least row or col def'd
          const pos = {
            row: rcPos.row,
            col: rcPos.col,
          };
  
          if (pos.col === undefined) {
            // find unused col
            pos.col = 0;
  
            while (used(pos.row, pos.col)) {
              pos.col++;
            }
          } else if (pos.row === undefined) {
            // find unused row
            pos.row = 0;
  
            while (used(pos.row, pos.col)) {
              pos.row++;
            }
          }
  
          id2manPos[node.id] = pos;
          use(pos.row, pos.col);
        }
        getPos(node);
    }
  
}
export default execute