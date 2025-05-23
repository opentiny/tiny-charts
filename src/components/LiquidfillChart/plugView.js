import * as echarts from "echarts";
import LiquidShape from "./plugShape";
function _trim(e) {
  return e.replace(/^\s+|\s+$/g, "");
}
function parsePercent(e, t) {
  switch (e) {
    case "center":
    case "middle":
      e = "50%";
      break;
    case "left":
    case "top":
      e = "0%";
      break;
    case "right":
    case "bottom":
      e = "100%";
      break;
  }
  if (typeof e === "string") {
    if (_trim(e).match(/%$/)) {
      return (parseFloat(e) / 100) * t;
    }
    return parseFloat(e);
  }
  return e == null ? NaN : +e;
}
function isPathSymbol(e) {
  return e && e.indexOf("path://") === 0;
}
echarts.extendChartView({
  type: "liquidFill",
  render: function (w, e, t) {
    var c = this;
    var u = this.group;
    u.removeAll();
    var P = w.getData();
    var g = P.getItemModel(0);
    var a = g.get("center");
    var S = g.get("radius");
    var r = t?.getWidth?.();
    var b = t?.getHeight?.();
    var i = Math.min(r, b);
    var s = 0;
    var l = 0;
    var n = w.get("outline.show");
    if (n) {
      s = w.get("outline.borderDistance");
      l = parsePercent(w.get("outline.itemStyle.borderWidth"), i);
    }
    var x = parsePercent(a[0], r);
    var I = parsePercent(a[1], b);
    var h;
    var v;
    var o;
    var M = false;
    var d = w.get("shape");
    if (d === "container") {
      M = true;
      h = [r / 2, b / 2];
      v = [h[0] - l / 2, h[1] - l / 2];
      o = [parsePercent(s, r), parsePercent(s, b)];
      S = [Math.max(v[0] - o[0], 0), Math.max(v[1] - o[1], 0)];
    } else {
      h = parsePercent(S, i) / 2;
      v = h - l / 2;
      o = parsePercent(s, i);
      S = Math.max(v - o, 0);
    }
    if (n) {
      var p = E();
      p.style.lineWidth = l;
      u.add(E());
    }
    var f = M ? 0 : x - S;
    var m = M ? 0 : I - S;
    var y = null;
    u.add(T());
    var C = this._data;
    var L = [];
    P.diff(C)
      .add(function (e) {
        var t = _(e, false);
        var a = t.shape.waterLevel;
        t.shape.waterLevel = M ? b / 2 : S;
        echarts.graphic.initProps(t, { shape: { waterLevel: a } }, w);
        t.z2 = 2;
        A(e, t, null);
        u.add(t);
        P.setItemGraphicEl(e, t);
        L.push(t);
      })
      .update(function (e, t) {
        var a = C.getItemGraphicEl(t);
        var r = _(e, false, a);
        var i = {};
        var s = [
          "amplitude",
          "cx",
          "cy",
          "phase",
          "radius",
          "radiusY",
          "waterLevel",
          "waveLength",
        ];
        for (var l = 0; l < s.length; ++l) {
          var n = s[l];
          if (r.shape.hasOwnProperty(n)) {
            i[n] = r.shape[n];
          }
        }
        var h = {};
        var v = ["fill", "opacity", "shadowBlur", "shadowColor"];
        for (var l = 0; l < v.length; ++l) {
          var n = v[l];
          if (r.style.hasOwnProperty(n)) {
            h[n] = r.style[n];
          }
        }
        if (M) {
          i.radiusY = b / 2;
        }
        echarts.graphic.updateProps(a, { shape: i, x: r.x, y: r.y }, w);
        if (
          w.isUniversalTransitionEnabled &&
          w.isUniversalTransitionEnabled()
        ) {
          echarts.graphic.updateProps(a, { style: h }, w);
        } else {
          a.useStyle(h);
        }
        var o = a.getClipPath();
        var p = r.getClipPath();
        a.setClipPath(r.getClipPath());
        a.shape.inverse = r.inverse;
        if (o && p && c._shape === d && !isPathSymbol(d)) {
          echarts.graphic.updateProps(p, { shape: o.shape }, w, {
            isFrom: true,
          });
        }
        A(e, a, a);
        u.add(a);
        P.setItemGraphicEl(e, a);
        L.push(a);
      })
      .remove(function (e) {
        var t = C.getItemGraphicEl(e);
        u.remove(t);
      })
      .execute();
    if (g.get("label.show")) {
      u.add(F(L));
    }
    this._shape = d;
    this._data = P;
    function k(e, t) {
      if (d) {
        if (isPathSymbol(d)) {
          var a = echarts.graphic.makePath(d.slice(7), {});
          var r = a.getBoundingRect();
          var i = r.width;
          var s = r.height;
          if (i > s) {
            s = ((e * 2) / i) * s;
            i = e * 2;
          } else {
            i = ((e * 2) / s) * i;
            s = e * 2;
          }
          var l = t ? 0 : x - i / 2;
          var n = t ? 0 : I - s / 2;
          a = echarts.graphic.makePath(
            d.slice(7),
            {},
            new echarts.graphic.BoundingRect(l, n, i, s)
          );
          if (t) {
            a.x = -i / 2;
            a.y = -s / 2;
          }
          return a;
        } else if (M) {
          var h = t ? -e[0] : x - e[0];
          var v = t ? -e[1] : I - e[1];
          return echarts.helper.createSymbol("rect", h, v, e[0] * 2, e[1] * 2);
        } else {
          var h = t ? -e : x - e;
          var v = t ? -e : I - e;
          if (d === "pin") {
            v += e;
          } else if (d === "arrow") {
            v -= e;
          }
          return echarts.helper.createSymbol(d, h, v, e * 2, e * 2);
        }
      }
      return new echarts.graphic.Circle({
        shape: { cx: t ? 0 : x, cy: t ? 0 : I, r: e },
      });
    }
    function E() {
      var e = k(h);
      e.style.fill = null;
      e.setStyle(w.getModel("outline.itemStyle").getItemStyle());
      return e;
    }
    function T() {
      var e = k(S);
      e.setStyle(w.getModel("backgroundStyle").getItemStyle());
      e.style.fill = null;
      e.z2 = 5;
      var t = k(S);
      t.setStyle(w.getModel("backgroundStyle").getItemStyle());
      t.style.stroke = null;
      var a = new echarts.graphic.Group();
      a.add(e);
      a.add(t);
      return a;
    }
    function _(e, t, a) {
      var r = M ? S[0] : S;
      var i = M ? b / 2 : S;
      var s = P.getItemModel(e);
      var l = s.getModel("itemStyle");
      var n = s.get("phase");
      var h = parsePercent(s.get("amplitude"), i * 2);
      var v = parsePercent(s.get("waveLength"), r * 2);
      var o = P.get("value", e);
      var p = i - o * i * 2;
      n = a ? a.shape.phase : n === "auto" ? (e * Math.PI) / 4 : n;
      var c = l.getItemStyle();
      if (!c.fill) {
        var u = w.get("color");
        var g = e % u.length;
        c.fill = u[g];
      }
      var d = r * 2;
      var f = new LiquidShape({
        shape: {
          waveLength: v,
          radius: r,
          radiusY: i,
          cx: d,
          cy: 0,
          waterLevel: p,
          amplitude: h,
          phase: n,
          inverse: t,
        },
        style: c,
        x: x,
        y: I,
      });
      f.shape._waterLevel = p;
      var m = s.getModel("emphasis.itemStyle").getItemStyle();
      m.lineWidth = 0;
      f.ensureState("emphasis").style = m;
      echarts.helper.enableHoverEmphasis(f);
      var y = k(S, true);
      y.setStyle({ fill: "white" });
      f.setClipPath(y);
      return f;
    }
    function A(a, e, t) {
      var r = P.getItemModel(a);
      var i = r.get("period");
      var s = r.get("direction");
      var l = P.get("value", a);
      var n = r.get("phase");
      n = t ? t.shape.phase : n === "auto" ? (a * Math.PI) / 4 : n;
      var h = function (e) {
        var t = P.count();
        return t === 0 ? e : e * (0.2 + ((t - a) / t) * 0.8);
      };
      var v = 0;
      if (i === "auto") {
        v = h(5e3);
      } else {
        v = typeof i === "function" ? i(l, a) : i;
      }
      var o = 0;
      if (s === "right" || s == null) {
        o = Math.PI;
      } else if (s === "left") {
        o = -Math.PI;
      } else if (s === "none") {
        o = 0;
      } else {
        console.error("Illegal direction value for liquid fill.");
      }
      if (s !== "none" && r.get("waveAnimation")) {
        e.animate("shape", true)
          .when(0, { phase: n })
          .when(v / 2, { phase: o + n })
          .when(v, { phase: o * 2 + n })
          .during(function () {
            if (y) {
              y.dirty(true);
            }
          })
          .start();
      }
    }
    function F(e) {
      var t = g.getModel("label");
      function a() {
        var e = w.getFormattedLabel(0, "normal");
        var t = P.get("value", 0) * 100;
        var a = P.getName(0) || w.name;
        if (!isNaN(t)) {
          a = t.toFixed(0) + "%";
        }
        return e == null ? a : e;
      }
      var r = {
        z2: 10,
        shape: {
          x: f,
          y: m,
          width: (M ? S[0] : S) * 2,
          height: (M ? S[1] : S) * 2,
        },
        style: { fill: "transparent" },
        textConfig: { position: t.get("position") || "inside" },
        silent: true,
      };
      var i = {
        style: {
          text: a(),
          textAlign: t.get("align"),
          textVerticalAlign: t.get("baseline"),
        },
      };
      Object.assign(i.style, echarts.helper.createTextStyle(t));
      var s = new echarts.graphic.Rect(r);
      var l = new echarts.graphic.Rect(r);
      l.disableLabelAnimation = true;
      s.disableLabelAnimation = true;
      var n = new echarts.graphic.Text(i);
      var h = new echarts.graphic.Text(i);
      s.setTextContent(n);
      l.setTextContent(h);
      var v = t.get("insideColor");
      h.style.fill = v;
      var o = new echarts.graphic.Group();
      o.add(s);
      o.add(l);
      var p = k(S, true);
      y = new echarts.graphic.CompoundPath({ shape: { paths: e }, x: x, y: I });
      y.setClipPath(p);
      l.setClipPath(y);
      return o;
    }
  },
  dispose: function () {},
});
