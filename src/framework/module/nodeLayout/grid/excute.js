function isArray(e) {
  return Object.prototype.toString.call(e) === "[object Array]" ? true : false;
}
function isString(e) {
  return typeof e === "string";
}
function isNumber(e) {
  return typeof e === "number";
}
function isNaN(e) {
  return Number.isNaN(Number(e));
}
function getDegree(l, o, e) {
  const t = [];
  for (let e = 0; e < l; e++) {
    t[e] = 0;
  }
  e.forEach((e) => {
    if (e.start) {
      t[o[e.start]] += 1;
    }
    if (e.end) {
      t[o[e.end]] += 1;
    }
  });
  return t;
}
function small(e) {
  let l;
  rows = rows || 5;
  cols = cols || 5;
  if (e == null) {
    l = Math.min(rows, cols);
  } else {
    const o = Math.min(rows, cols);
    if (o === rows) {
      rows = e;
    } else {
      cols = e;
    }
  }
  return l;
}
function large(e) {
  let l;
  rows = rows || 5;
  cols = cols || 5;
  if (e == null) {
    l = Math.max(rows, cols);
  } else {
    const o = Math.max(rows, cols);
    if (o === rows) {
      rows = e;
    } else {
      cols = e;
    }
  }
  return l;
}
function used(e, l) {
  return cellUsed[`c-${e}-${l}`] || false;
}
function use(e, l) {
  cellUsed[`c-${e}-${l}`] = true;
}
function moveToNextCell() {
  cols = cols || 5;
  col++;
  if (col >= cols) {
    col = 0;
    row++;
  }
}
function getPos(e) {
  let l;
  let o;
  const t = id2manPos[e.id];
  if (t) {
    l = t.col * cellWidth + cellWidth / 2 + begin[0];
    o = t.row * cellHeight + cellHeight / 2 + begin[1];
  } else {
    while (used(row, col)) {
      moveToNextCell();
    }
    l = col * cellWidth + cellWidth / 2 + begin[0];
    o = row * cellHeight + cellHeight / 2 + begin[1];
    use(row, col);
    moveToNextCell();
  }
  e.x = l;
  e.y = o;
}
let position;
let nodeSize;
let center = [0, 0];
let splits;
let columns;
let cells;
let begin;
let preventOverlap;
let preventOverlapPadding;
let condense;
let rows;
let cols;
let sortBy;
let cellWidth;
let cellHeight;
let cellUsed;
let id2manPos;
let row;
let col;
function execute(e, l, o, t) {
  let s = t.layout;
  begin = s.begin || [0, 0];
  preventOverlap = s.preventOverlap || false;
  preventOverlapPadding = s.preventOverlapPadding || 0;
  condense = s.condense || false;
  rows = s.rows || undefined;
  cols = s.cols || undefined;
  sortBy = s.sortBy || "default";
  let i = s.width || o.width;
  let n = s.height || o.height;
  cellWidth = 0;
  cellHeight = 0;
  cellUsed = {};
  id2manPos = {};
  row = 0;
  col = 0;
  nodeSize = 50;
  if (t.node) {
    nodeSize = [t.node.width, t.node.height];
  }
  const r = l.edges;
  const c = e.length;
  if (c === 0) {
    return;
  }
  if (c === 1) {
    e[0].x = center[0];
    e[0].y = center[1];
    return;
  }
  const d = [];
  e.forEach((e) => {
    d.push(e);
  });
  const f = {};
  d.forEach((e, l) => {
    f[e.id] = l;
  });
  if (isString(sortBy) && sortBy !== "default") {
    if (isNaN(e[0][sortBy])) {
      const w = getDegree(d.length, f, r);
      d.forEach((e, l) => {
        e[sortBy] = w[l];
      });
    }
  }
  if (
    sortBy === "degreeMany" ||
    (isString(sortBy) && sortBy !== "default" && sortBy !== "degreeFew")
  ) {
    d.sort((e, l) => l[sortBy] - e[sortBy]);
  }
  if (sortBy === "degreeFew") {
    d.sort((e, l) => e[sortBy] - l[sortBy]);
  }
  if (!i && typeof window !== "undefined") {
    i = window.innerWidth;
  }
  if (!n && typeof window !== "undefined") {
    n = window.innerHeight;
  }
  const u = rows;
  const a = cols != null ? cols : columns;
  cells = c;
  if (u != null && a != null) {
    rows = u;
    cols = a;
  } else if (u != null && a == null) {
    rows = u;
    cols = Math.ceil(cells / rows);
  } else if (u == null && a != null) {
    cols = a;
    rows = Math.ceil(cells / cols);
  } else {
    splits = Math.sqrt((cells * n) / i);
    rows = Math.round(splits);
    cols = Math.round((i / n) * splits);
  }
  if (cols * rows > cells) {
    const h = small();
    const g = large();
    if ((h - 1) * g >= cells) {
      small(h - 1);
    } else if ((g - 1) * h >= self.cells) {
      large(g - 1);
    }
  } else {
    while (cols * rows < cells) {
      const h = small();
      const g = large();
      if ((g + 1) * h >= cells) {
        large(g + 1);
      } else {
        small(h + 1);
      }
    }
  }
  cellWidth = i / cols;
  cellHeight = n / rows;
  if (condense) {
    cellWidth = 0;
    cellHeight = 0;
  }
  if (preventOverlap) {
    d.forEach((e) => {
      if (!e.x || !e.y) {
        e.x = 0;
        e.y = 0;
      }
      let l;
      let o;
      if (isArray(e.size)) {
        l = e.size[0];
        o = e.size[1];
      } else if (isNumber(e.size)) {
        l = e.size;
        o = e.size;
      }
      if (l === undefined || o === undefined) {
        if (isArray(nodeSize)) {
          l = nodeSize[0];
          o = nodeSize[1];
        } else if (isNumber(nodeSize)) {
          l = nodeSize;
          o = nodeSize;
        } else {
          l = 30;
          o = 30;
        }
      }
      const t = preventOverlapPadding;
      const s = l + t;
      const i = o + t;
      cellWidth = Math.max(cellWidth, s);
      cellHeight = Math.max(cellHeight, i);
    });
  }
  row = 0;
  col = 0;
  for (let l = 0; l < d.length; l++) {
    const p = d[l];
    let e;
    if (position) {
      e = position(p);
    }
    if (e && (e.row !== undefined || e.col !== undefined)) {
      const y = { row: e.row, col: e.col };
      if (y.col === undefined) {
        y.col = 0;
        while (used(y.row, y.col)) {
          y.col++;
        }
      } else if (y.row === undefined) {
        y.row = 0;
        while (used(y.row, y.col)) {
          y.row++;
        }
      }
      id2manPos[p.id] = y;
      use(y.row, y.col);
    }
    getPos(p);
  }
}
export default execute;
