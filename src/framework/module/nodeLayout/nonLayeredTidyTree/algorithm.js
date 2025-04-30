function WrappedTree(e, c, n, t = []) {
  const r = this;
  r.w = e || 0;
  r.h = c || 0;
  r.y = n || 0;
  r.x = 0;
  r.c = t || [];
  r.cs = t.length;
  r.prelim = 0;
  r.mod = 0;
  r.shift = 0;
  r.change = 0;
  r.tl = null;
  r.tr = null;
  r.el = null;
  r.er = null;
  r.msel = 0;
  r.mser = 0;
}
WrappedTree.fromNode = (e, c) => {
  if (!e) return null;
  const n = [];
  e.children.forEach((e) => {
    n.push(WrappedTree.fromNode(e, c));
  });
  if (c) return new WrappedTree(e.height, e.width, e.x, n);
  return new WrappedTree(e.width, e.height, e.y, n);
};
function moveRight(e, c, n) {
  if (n) {
    e.y += c;
  } else {
    e.x += c;
  }
  e.children.forEach((e) => {
    moveRight(e, c, n);
  });
}
function getMin(e, c) {
  let n = c ? e.y : e.x;
  e.children.forEach((e) => {
    n = Math.min(getMin(e, c), n);
  });
  return n;
}
function normalize(e, c) {
  const n = getMin(e, c);
  moveRight(e, -n, c);
}
function convertBack(e, n, t) {
  if (t) {
    n.y = e.x;
  } else {
    n.x = e.x;
  }
  e.c.forEach((e, c) => {
    convertBack(e, n.children[c], t);
  });
}
function layer(e, c, n = 0) {
  if (c) {
    e.x = n;
    n += e.width;
  } else {
    e.y = n;
    n += e.height;
  }
  e.children.forEach((e) => {
    layer(e, c, n);
  });
}
export default (e, c = {}) => {
  const n = c.isHorizontal;
  function r(c) {
    if (c.cs === 0) {
      l(c);
      return;
    }
    r(c.c[0]);
    let n = x(d(c.c[0].el), 0, null);
    for (let e = 1; e < c.cs; ++e) {
      r(c.c[e]);
      const t = d(c.c[e].er);
      i(c, e, n);
      n = x(t, e, n);
    }
    o(c);
    l(c);
  }
  function l(e) {
    if (e.cs === 0) {
      e.el = e;
      e.er = e;
      e.msel = e.mser = 0;
    } else {
      e.el = e.c[0].el;
      e.msel = e.c[0].msel;
      e.er = e.c[e.cs - 1].er;
      e.mser = e.c[e.cs - 1].mser;
    }
  }
  function i(e, c, n) {
    let t = e.c[c - 1];
    let r = t.mod;
    let l = e.c[c];
    let i = l.mod;
    while (t !== null && l !== null) {
      if (d(t) > n.low) n = n.nxt;
      const o = r + t.prelim + t.w - (i + l.prelim);
      if (o > 0) {
        i += o;
        m(e, c, n.index, o);
      }
      const s = d(t);
      const f = d(l);
      if (s <= f) {
        t = h(t);
        if (t !== null) r += t.mod;
      }
      if (s >= f) {
        l = u(l);
        if (l !== null) i += l.mod;
      }
    }
    if (!t && !!l) {
      a(e, c, l, i);
    } else if (!!t && !l) {
      p(e, c, t, r);
    }
  }
  function m(e, c, n, t) {
    e.c[c].mod += t;
    e.c[c].msel += t;
    e.c[c].mser += t;
    s(e, c, n, t);
  }
  function u(e) {
    return e.cs === 0 ? e.tl : e.c[0];
  }
  function h(e) {
    return e.cs === 0 ? e.tr : e.c[e.cs - 1];
  }
  function d(e) {
    return e.y + e.h;
  }
  function a(e, c, n, t) {
    const r = e.c[0].el;
    r.tl = n;
    const l = t - n.mod - e.c[0].msel;
    r.mod += l;
    r.prelim -= l;
    e.c[0].el = e.c[c].el;
    e.c[0].msel = e.c[c].msel;
  }
  function p(e, c, n, t) {
    const r = e.c[c].er;
    r.tr = n;
    const l = t - n.mod - e.c[c].mser;
    r.mod += l;
    r.prelim -= l;
    e.c[c].er = e.c[c - 1].er;
    e.c[c].mser = e.c[c - 1].mser;
  }
  function o(e) {
    e.prelim =
      (e.c[0].prelim +
        e.c[0].mod +
        e.c[e.cs - 1].mod +
        e.c[e.cs - 1].prelim +
        e.c[e.cs - 1].w) /
        2 -
      e.w / 2;
  }
  function t(c, n) {
    n += c.mod;
    c.x = c.prelim + n;
    f(c);
    for (let e = 0; e < c.cs; e++) {
      t(c.c[e], n);
    }
  }
  function s(e, c, n, t) {
    if (n !== c - 1) {
      const r = c - n;
      e.c[n + 1].shift += t / r;
      e.c[c].shift -= t / r;
      e.c[c].change -= t - t / r;
    }
  }
  function f(c) {
    let n = 0;
    let t = 0;
    for (let e = 0; e < c.cs; e++) {
      n += c.c[e].shift;
      t += n + c.c[e].change;
      c.c[e].mod += t;
    }
  }
  function x(e, c, n) {
    while (n !== null && e >= n.low) {
      n = n.nxt;
    }
    return { low: e, index: c, nxt: n };
  }
  layer(e, n);
  const w = WrappedTree.fromNode(e, n);
  r(w);
  t(w, 0);
  convertBack(w, e, n);
  normalize(e, n);
  return e;
};
