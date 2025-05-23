import * as echarts from "echarts";
export default echarts.graphic.extendShape({
  type: "ec-liquid-fill",
  shape: {
    waveLength: 0,
    radius: 0,
    radiusY: 0,
    cx: 0,
    cy: 0,
    waterLevel: 0,
    amplitude: 0,
    phase: 0,
    inverse: false,
  },
  buildPath: function (e, a) {
    if (a.radiusY == null) {
      a.radiusY = a.radius;
    }
    var t = Math.max(Math.ceil(((2 * a.radius) / a.waveLength) * 4) * 2, 8);
    while (a.phase < -Math.PI * 2) {
      a.phase += Math.PI * 2;
    }
    while (a.phase > 0) {
      a.phase -= Math.PI * 2;
    }
    var r = (a.phase / Math.PI / 2) * a.waveLength;
    var i = a.cx - a.radius + r - a.radius * 2;
    e.moveTo(i, a.waterLevel);
    var h = 0;
    for (var s = 0; s < t; ++s) {
      var l = s % 4;
      var n = getWaterPositions(
        (s * a.waveLength) / 4,
        l,
        a.waveLength,
        a.amplitude
      );
      e.bezierCurveTo(
        n[0][0] + i,
        -n[0][1] + a.waterLevel,
        n[1][0] + i,
        -n[1][1] + a.waterLevel,
        n[2][0] + i,
        -n[2][1] + a.waterLevel
      );
      if (s === t - 1) {
        h = n[2][0];
      }
    }
    if (a.inverse) {
      e.lineTo(h + i, a.cy - a.radiusY);
      e.lineTo(i, a.cy - a.radiusY);
      e.lineTo(i, a.waterLevel);
    } else {
      e.lineTo(h + i, a.cy + a.radiusY);
      e.lineTo(i, a.cy + a.radiusY);
      e.lineTo(i, a.waterLevel);
    }
    e.closePath();
  },
});
function getWaterPositions(e, a, t, r) {
  if (a === 0) {
    return [
      [e + ((1 / 2) * t) / Math.PI / 2, r / 2],
      [e + ((1 / 2) * t) / Math.PI, r],
      [e + t / 4, r],
    ];
  } else if (a === 1) {
    return [
      [e + (((1 / 2) * t) / Math.PI / 2) * (Math.PI - 2), r],
      [e + (((1 / 2) * t) / Math.PI / 2) * (Math.PI - 1), r / 2],
      [e + t / 4, 0],
    ];
  } else if (a === 2) {
    return [
      [e + ((1 / 2) * t) / Math.PI / 2, -r / 2],
      [e + ((1 / 2) * t) / Math.PI, -r],
      [e + t / 4, -r],
    ];
  } else {
    return [
      [e + (((1 / 2) * t) / Math.PI / 2) * (Math.PI - 2), -r],
      [e + (((1 / 2) * t) / Math.PI / 2) * (Math.PI - 1), -r / 2],
      [e + t / 4, 0],
    ];
  }
}
