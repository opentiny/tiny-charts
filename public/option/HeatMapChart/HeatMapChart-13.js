const option = {
  theme: 'light',
  // 图表类型(蜂窝热力图)
  type: 'HexagonHeatMapChart',
  // padding控制图表距离容器的上、右、下、左padding值
  padding: [50, 30, 20, 20],
  // 蜂窝的颜色变化数组,根据颜色数组的颜色个数n,将data数据按照最小值到最大值均分为n个区间,图表各项的颜色取各数据所在区间的颜色
  color: ['#FFFFFF', '#448DFF', '#4350EA', '#33307C', '#242648', '#973152', '#F8364D'],
  // 蜂窝的排列数量,默认值40,
  quantity: 40,
  /*
   * tipHtml 回调函数控制自定义悬浮框：
   * ( params: Array,
   *   ticket: string,
   *   callback: (ticket: string, html: string)
   * ) => string | HTMLElement | HTMLElement[]
   *
   * 通过回调函数的参数，自行制作一个 HTML 片段
   * 详细参数解释见： https://echarts.apache.org/zh/option.html#tooltip.formatter
   */
  tipHtml: (params, ticket, callback) => {
    const color = params.color;
    const data = params.data;
    const [x, y, z, r, dataItem, ...others] = data;
    let htmlString = '<div style="margin-bottom:4px;">自定义蜂窝热力图提示框</div>';
    htmlString +=
      `${
        '<div style="margin-bottom:4px;">' +
        '<span style="display:inline-block;width:10px;height:10px;margin-right:8px;border-radius:5px;border-style:solid;border-width:1px;border-color:'
      }${color};background-color:${color};"></span>` +
      `<span style="margin-right:40px;">${dataItem.name}:</span>` +
      `<span>${z}</span>` +
      '</div>';
    return htmlString;
  },
  data: [
    {
      name: 'a1',
      value: 1,
    },
    {
      name: 'a2',
      value: 1,
    },
    {
      name: 'a3',
      value: 2,
    },
    {
      name: 'a4',
      value: 1,
    },
    {
      name: 'a5',
      value: 2,
    },
    {
      name: 'a6',
      value: 2,
    },
    {
      name: 'a7',
      value: 3,
    },
    {
      name: 'a8',
      value: 2,
    },
    {
      name: 'a9',
      value: 3,
    },
    {
      name: 'a10',
      value: 3,
    },
    {
      name: 'b1',
      value: 3,
    },
    {
      name: 'b2',
      value: 2,
    },
    {
      name: 'b3',
      value: 3,
    },
    {
      name: 'b4',
      value: 3,
    },
    {
      name: 'b5',
      value: 4,
    },
    {
      name: 'b6',
      value: 4,
    },
    {
      name: 'b7',
      value: 2,
    },
    {
      name: 'b8',
      value: 4,
    },
    {
      name: 'b9',
      value: 4,
    },
    {
      name: 'b10',
      value: 2,
    },
    {
      name: 'c1',
      value: 4,
    },
    {
      name: 'c2',
      value: 4,
    },
    {
      name: 'c3',
      value: 3,
    },
    {
      name: 'c4',
      value: 4,
    },
    {
      name: 'c5',
      value: 4,
    },
    {
      name: 'c6',
      value: 5,
    },
    {
      name: 'c7',
      value: 4,
    },
    {
      name: 'c8',
      value: 4,
    },
    {
      name: 'c9',
      value: 4,
    },
    {
      name: 'c10',
      value: 3,
    },
    {
      name: 'd1',
      value: 4,
    },
    {
      name: 'd2',
      value: 4,
    },
    {
      name: 'd3',
      value: 4,
    },
    {
      name: 'd4',
      value: 4,
    },
    {
      name: 'd5',
      value: 4,
    },
    {
      name: 'd6',
      value: 4,
    },
    {
      name: 'd7',
      value: 4,
    },
    {
      name: 'd8',
      value: 4,
    },
    {
      name: 'd9',
      value: 4,
    },
    {
      name: 'd10',
      value: 1,
    },
    {
      name: 'e1',
      value: 2,
    },
    {
      name: 'e2',
      value: 1,
    },
    {
      name: 'e3',
      value: 2,
    },
    {
      name: 'e4',
      value: 3,
    },
    {
      name: 'e5',
      value: 2,
    },
    {
      name: 'e6',
      value: 3,
    },
    {
      name: 'e7',
      value: 2,
    },
    {
      name: 'e8',
      value: 3,
    },
    {
      name: 'e9',
      value: 4,
    },
    {
      name: 'e10',
      value: 3,
    },
    {
      name: 'f1',
      value: 3,
    },
    {
      name: 'f2',
      value: 4,
    },
    {
      name: 'f3',
      value: 3,
    },
    {
      name: 'f4',
      value: 4,
    },
    {
      name: 'f5',
      value: 4,
    },
    {
      name: 'f6',
      value: 3,
    },
    {
      name: 'f7',
      value: 4,
    },
    {
      name: 'f8',
      value: 4,
    },
    {
      name: 'f9',
      value: 3,
    },
    {
      name: 'f10',
      value: 4,
    },
    {
      name: 'g1',
      value: 4,
    },
    {
      name: 'g2',
      value: 3,
    },
    {
      name: 'g3',
      value: 4,
    },
    {
      name: 'g4',
      value: 4,
    },
    {
      name: 'g5',
      value: 5,
    },
    {
      name: 'g6',
      value: 4,
    },
    {
      name: 'g7',
      value: 3,
    },
    {
      name: 'g8',
      value: 4,
    },
    {
      name: 'g9',
      value: 3,
    },
    {
      name: 'g10',
      value: 4,
    },
    {
      name: 'h1',
      value: 3,
    },
    {
      name: 'h2',
      value: 4,
    },
    {
      name: 'h3',
      value: 5,
    },
    {
      name: 'h4',
      value: 4,
    },
    {
      name: 'h5',
      value: 4,
    },
    {
      name: 'h6',
      value: 5,
    },
    {
      name: 'h7',
      value: 4,
    },
    {
      name: 'h8',
      value: 4,
    },
    {
      name: 'h9',
      value: 4,
    },
    {
      name: 'h10',
      value: 2,
    },
    {
      name: 'i1',
      value: 2,
    },
    {
      name: 'i2',
      value: 1,
    },
    {
      name: 'i3',
      value: 1,
    },
    {
      name: 'i4',
      value: 3,
    },
    {
      name: 'i5',
      value: 2,
    },
    {
      name: 'i6',
      value: 4,
    },
    {
      name: 'i7',
      value: 2,
    },
    {
      name: 'i8',
      value: 3,
    },
    {
      name: 'i9',
      value: 3,
    },
    {
      name: 'i10',
      value: 3,
    },
    {
      name: 'j1',
      value: 4,
    },
    {
      name: 'j2',
      value: 3,
    },
    {
      name: 'j3',
      value: 4,
    },
    {
      name: 'j4',
      value: 4,
    },
    {
      name: 'j5',
      value: 4,
    },
    {
      name: 'j6',
      value: 2,
    },
    {
      name: 'j7',
      value: 4,
    },
    {
      name: 'j8',
      value: 4,
    },
    {
      name: 'j9',
      value: 2,
    },
    {
      name: 'j10',
      value: 4,
    },
    {
      name: 'k1',
      value: 4,
    },
    {
      name: 'k2',
      value: 4,
    },
    {
      name: 'k3',
      value: 4,
    },
    {
      name: 'k4',
      value: 4,
    },
    {
      name: 'k5',
      value: 5,
    },
    {
      name: 'k6',
      value: 2,
    },
    {
      name: 'k7',
      value: 4,
    },
    {
      name: 'k8',
      value: 4,
    },
    {
      name: 'k9',
      value: 3,
    },
    {
      name: 'k10',
      value: 4,
    },
    {
      name: 'l1',
      value: 2,
    },
    {
      name: 'l2',
      value: 4,
    },
    {
      name: 'l3',
      value: 5,
    },
    {
      name: 'l4',
      value: 4,
    },
    {
      name: 'l5',
      value: 4,
    },
    {
      name: 'l6',
      value: 5,
    },
    {
      name: 'l7',
      value: 4,
    },
    {
      name: 'l8',
      value: 4,
    },
    {
      name: 'l9',
      value: 2,
    },
    {
      name: 'l10',
      value: 1,
    },
    {
      name: 'm1',
      value: 2,
    },
    {
      name: 'm2',
      value: 1,
    },
    {
      name: 'm3',
      value: 3,
    },
    {
      name: 'm4',
      value: 2,
    },
    {
      name: 'm5',
      value: 2,
    },
    {
      name: 'm6',
      value: 3,
    },
    {
      name: 'm7',
      value: 2,
    },
    {
      name: 'm8',
      value: 4,
    },
    {
      name: 'm9',
      value: 4,
    },
    {
      name: 'm10',
      value: 4,
    },
    {
      name: 'n1',
      value: 4,
    },
    {
      name: 'n2',
      value: 4,
    },
    {
      name: 'n3',
      value: 4,
    },
    {
      name: 'n4',
      value: 4,
    },
    {
      name: 'n5',
      value: 4,
    },
    {
      name: 'n6',
      value: 4,
    },
    {
      name: 'n7',
      value: 4,
    },
    {
      name: 'n8',
      value: 4,
    },
    {
      name: 'n9',
      value: 4,
    },
    {
      name: 'n10',
      value: 4,
    },
    {
      name: 'o1',
      value: 4,
    },
    {
      name: 'o2',
      value: 4,
    },
    {
      name: 'o3',
      value: 4,
    },
    {
      name: 'o4',
      value: 4,
    },
    {
      name: 'o5',
      value: 5,
    },
    {
      name: 'o6',
      value: 4,
    },
    {
      name: 'o7',
      value: 4,
    },
    {
      name: 'o8',
      value: 4,
    },
    {
      name: 'o9',
      value: 4,
    },
    {
      name: 'o10',
      value: 4,
    },
    {
      name: 'p1',
      value: 4,
    },
    {
      name: 'p2',
      value: 4,
    },
    {
      name: 'p3',
      value: 5,
    },
    {
      name: 'p4',
      value: 4,
    },
    {
      name: 'p5',
      value: 4,
    },
    {
      name: 'p6',
      value: 4,
    },
    {
      name: 'p7',
      value: 4,
    },
    {
      name: 'p8',
      value: 3,
    },
    {
      name: 'p9',
      value: 4,
    },
    {
      name: 'p10',
      value: 2,
    },
    {
      name: 'q1',
      value: 3,
    },
    {
      name: 'q2',
      value: 3,
    },
    {
      name: 'q3',
      value: 3,
    },
    {
      name: 'q4',
      value: 3,
    },
    {
      name: 'q5',
      value: 3,
    },
    {
      name: 'q6',
      value: 3,
    },
    {
      name: 'q7',
      value: 3,
    },
    {
      name: 'q8',
      value: 4,
    },
    {
      name: 'q9',
      value: 4,
    },
    {
      name: 'q10',
      value: 3,
    },
    {
      name: 'r1',
      value: 4,
    },
    {
      name: 'r2',
      value: 4,
    },
    {
      name: 'r3',
      value: 4,
    },
    {
      name: 'r4',
      value: 3,
    },
    {
      name: 'r5',
      value: 4,
    },
    {
      name: 'r6',
      value: 4,
    },
    {
      name: 'r7',
      value: 4,
    },
    {
      name: 'r8',
      value: 4,
    },
    {
      name: 'r9',
      value: 3,
    },
    {
      name: 'r10',
      value: 3,
    },
    {
      name: 's1',
      value: 4,
    },
    {
      name: 's2',
      value: 4,
    },
    {
      name: 's3',
      value: 4,
    },
    {
      name: 's4',
      value: 4,
    },
    {
      name: 's5',
      value: 5,
    },
    {
      name: 's6',
      value: 4,
    },
    {
      name: 's7',
      value: 4,
    },
    {
      name: 's8',
      value: 4,
    },
    {
      name: 's9',
      value: 4,
    },
    {
      name: 's10',
      value: 4,
    },
    {
      name: 't1',
      value: 4,
    },
    {
      name: 't2',
      value: 4,
    },
    {
      name: 't3',
      value: 5,
    },
    {
      name: 't4',
      value: 4,
    },
    {
      name: 't5',
      value: 4,
    },
    {
      name: 't6',
      value: 4,
    },
    {
      name: 't7',
      value: 4,
    },
    {
      name: 't8',
      value: 4,
    },
    {
      name: 't9',
      value: 2,
    },
    {
      name: 't10',
      value: 2,
    },
    {
      name: 'u1',
      value: 3,
    },
    {
      name: 'u2',
      value: 3,
    },
    {
      name: 'u3',
      value: 3,
    },
    {
      name: 'u4',
      value: 3,
    },
    {
      name: 'u5',
      value: 3,
    },
    {
      name: 'u6',
      value: 3,
    },
    {
      name: 'u7',
      value: 4,
    },
    {
      name: 'u8',
      value: 3,
    },
    {
      name: 'u9',
      value: 3,
    },
    {
      name: 'u10',
      value: 3,
    },
    {
      name: 'v1',
      value: 4,
    },
    {
      name: 'v2',
      value: 4,
    },
    {
      name: 'v3',
      value: 4,
    },
    {
      name: 'v4',
      value: 4,
    },
    {
      name: 'v5',
      value: 3,
    },
    {
      name: 'v6',
      value: 3,
    },
    {
      name: 'v7',
      value: 4,
    },
    {
      name: 'v8',
      value: 4,
    },
    {
      name: 'v9',
      value: 4,
    },
    {
      name: 'v10',
      value: 4,
    },
    {
      name: 'w1',
      value: 4,
    },
    {
      name: 'w2',
      value: 4,
    },
    {
      name: 'w3',
      value: 4,
    },
    {
      name: 'w4',
      value: 5,
    },
    {
      name: 'w5',
      value: 4,
    },
    {
      name: 'w6',
      value: 4,
    },
    {
      name: 'w7',
      value: 4,
    },
    {
      name: 'w8',
      value: 4,
    },
    {
      name: 'w9',
      value: 4,
    },
    {
      name: 'w10',
      value: 4,
    },
    {
      name: 'x1',
      value: 4,
    },
    {
      name: 'x2',
      value: 5,
    },
    {
      name: 'x3',
      value: 4,
    },
    {
      name: 'x4',
      value: 4,
    },
    {
      name: 'x5',
      value: 4,
    },
    {
      name: 'x6',
      value: 4,
    },
    {
      name: 'x7',
      value: 3,
    },
    {
      name: 'x8',
      value: 4,
    },
    {
      name: 'x9',
      value: 2,
    },
    {
      name: 'x10',
      value: 3,
    },
    {
      name: 'y1',
      value: 3,
    },
    {
      name: 'y2',
      value: 3,
    },
    {
      name: 'y3',
      value: 3,
    },
    {
      name: 'y4',
      value: 3,
    },
    {
      name: 'y5',
      value: 3,
    },
    {
      name: 'y6',
      value: 4,
    },
    {
      name: 'y7',
      value: 4,
    },
    {
      name: 'y8',
      value: 3,
    },
    {
      name: 'y9',
      value: 3,
    },
    {
      name: 'y10',
      value: 4,
    },
    {
      name: 'z1',
      value: 4,
    },
    {
      name: 'z2',
      value: 4,
    },
    {
      name: 'z3',
      value: 4,
    },
    {
      name: 'z4',
      value: 4,
    },
    {
      name: 'z5',
      value: 4,
    },
    {
      name: 'z6',
      value: 4,
    },
    {
      name: 'z7',
      value: 4,
    },
    {
      name: 'z8',
      value: 4,
    },
    {
      name: 'z9',
      value: 5,
    },
    {
      name: 'z10',
      value: 4,
    },
    {
      name: '$a1',
      value: 4,
    },
    {
      name: '$a2',
      value: 5,
    },
    {
      name: '$a3',
      value: 4,
    },
    {
      name: '$a4',
      value: 4,
    },
    {
      name: '$a5',
      value: 4,
    },
    {
      name: '$a6',
      value: 4,
    },
    {
      name: '$a7',
      value: 4,
    },
    {
      name: '$a8',
      value: 4,
    },
    {
      name: '$a9',
      value: 4,
    },
    {
      name: '$a10',
      value: 5,
    },
    {
      name: '$b1',
      value: 4,
    },
    {
      name: '$b2',
      value: 4,
    },
    {
      name: '$b3',
      value: 4,
    },
    {
      name: '$b4',
      value: 4,
    },
    {
      name: '$b5',
      value: 4,
    },
    {
      name: '$b6',
      value: 3,
    },
    {
      name: '$b7',
      value: 4,
    },
    {
      name: '$b8',
      value: 2,
    },
    {
      name: '$b9',
      value: 2,
    },
    {
      name: '$b10',
      value: 3,
    },
    {
      name: '$c1',
      value: 3,
    },
    {
      name: '$c2',
      value: 3,
    },
    {
      name: '$c3',
      value: 3,
    },
    {
      name: '$c4',
      value: 3,
    },
    {
      name: '$c5',
      value: 4,
    },
    {
      name: '$c6',
      value: 3,
    },
    {
      name: '$c7',
      value: 3,
    },
    {
      name: '$c8',
      value: 4,
    },
    {
      name: '$c9',
      value: 4,
    },
    {
      name: '$c10',
      value: 4,
    },
    {
      name: '$d1',
      value: 4,
    },
    {
      name: '$d2',
      value: 4,
    },
    {
      name: '$d3',
      value: 4,
    },
    {
      name: '$d4',
      value: 4,
    },
    {
      name: '$d5',
      value: 4,
    },
    {
      name: '$d6',
      value: 4,
    },
    {
      name: '$d7',
      value: 4,
    },
    {
      name: '$d8',
      value: 5,
    },
    {
      name: '$d9',
      value: 5,
    },
    {
      name: '$d10',
      value: 4,
    },
    {
      name: '$e1',
      value: 4,
    },
    {
      name: '$e2',
      value: 5,
    },
    {
      name: '$e3',
      value: 4,
    },
    {
      name: '$e4',
      value: 4,
    },
    {
      name: '$e5',
      value: 4,
    },
    {
      name: '$e6',
      value: 4,
    },
    {
      name: '$e7',
      value: 4,
    },
    {
      name: '$e8',
      value: 4,
    },
    {
      name: '$e9',
      value: 4,
    },
    {
      name: '$e10',
      value: 5,
    },
    {
      name: '$f1',
      value: 4,
    },
    {
      name: '$f2',
      value: 4,
    },
    {
      name: '$f3',
      value: 5,
    },
    {
      name: '$f4',
      value: 4,
    },
    {
      name: '$f5',
      value: 4,
    },
    {
      name: '$f6',
      value: 3,
    },
    {
      name: '$f7',
      value: 4,
    },
    {
      name: '$f8',
      value: 2,
    },
    {
      name: '$f9',
      value: 3,
    },
    {
      name: '$f10',
      value: 2,
    },
    {
      name: '$g1',
      value: 2,
    },
    {
      name: '$g2',
      value: 2,
    },
    {
      name: '$g3',
      value: 2,
    },
    {
      name: '$g4',
      value: 3,
    },
    {
      name: '$g5',
      value: 4,
    },
    {
      name: '$g6',
      value: 4,
    },
    {
      name: '$g7',
      value: 4,
    },
    {
      name: '$g8',
      value: 4,
    },
    {
      name: '$g9',
      value: 4,
    },
    {
      name: '$g10',
      value: 5,
    },
    {
      name: '$h1',
      value: 5,
    },
    {
      name: '$h2',
      value: 4,
    },
    {
      name: '$h3',
      value: 4,
    },
    {
      name: '$h4',
      value: 5,
    },
    {
      name: '$h5',
      value: 4,
    },
    {
      name: '$h6',
      value: 4,
    },
    {
      name: '$h7',
      value: 4,
    },
    {
      name: '$h8',
      value: 4,
    },
    {
      name: '$h9',
      value: 4,
    },
    {
      name: '$h10',
      value: 4,
    },
    {
      name: '$i1',
      value: 4,
    },
    {
      name: '$i2',
      value: 4,
    },
    {
      name: '$i3',
      value: 5,
    },
    {
      name: '$i4',
      value: 4,
    },
    {
      name: '$i5',
      value: 4,
    },
    {
      name: '$i6',
      value: 4,
    },
    {
      name: '$i7',
      value: 3,
    },
    {
      name: '$i8',
      value: 4,
    },
    {
      name: '$i9',
      value: 4,
    },
    {
      name: '$i10',
      value: 4,
    },
    {
      name: '$j1',
      value: 4,
    },
    {
      name: '$j2',
      value: 4,
    },
    {
      name: '$j3',
      value: 4,
    },
    {
      name: '$j4',
      value: 4,
    },
    {
      name: '$j5',
      value: 4,
    },
    {
      name: '$j6',
      value: 4,
    },
    {
      name: '$j7',
      value: 2,
    },
    {
      name: '$j8',
      value: 2,
    },
    {
      name: '$j9',
      value: 3,
    },
    {
      name: '$j10',
      value: 3,
    },
    {
      name: '$k1',
      value: 5,
    },
    {
      name: '$k2',
      value: 3,
    },
    {
      name: '$k3',
      value: 2,
    },
    {
      name: '$k4',
      value: 4,
    },
    {
      name: '$k5',
      value: 4,
    },
    {
      name: '$k6',
      value: 4,
    },
    {
      name: '$k7',
      value: 4,
    },
    {
      name: '$k8',
      value: 4,
    },
    {
      name: '$k9',
      value: 4,
    },
    {
      name: '$k10',
      value: 4,
    },
    {
      name: '$l1',
      value: 5,
    },
    {
      name: '$l2',
      value: 4,
    },
    {
      name: '$l3',
      value: 3,
    },
    {
      name: '$l4',
      value: 4,
    },
    {
      name: '$l5',
      value: 4,
    },
    {
      name: '$l6',
      value: 4,
    },
    {
      name: '$l7',
      value: 4,
    },
    {
      name: '$l8',
      value: 4,
    },
    {
      name: '$l9',
      value: 4,
    },
    {
      name: '$l10',
      value: 4,
    },
    {
      name: '$m1',
      value: 5,
    },
    {
      name: '$m2',
      value: 4,
    },
    {
      name: '$m3',
      value: 4,
    },
    {
      name: '$m4',
      value: 4,
    },
    {
      name: '$m5',
      value: 3,
    },
    {
      name: '$m6',
      value: 3,
    },
    {
      name: '$m7',
      value: 4,
    },
    {
      name: '$m8',
      value: 4,
    },
    {
      name: '$m9',
      value: 5,
    },
    {
      name: '$m10',
      value: 4,
    },
    {
      name: '$n1',
      value: 4,
    },
    {
      name: '$n2',
      value: 4,
    },
    {
      name: '$n3',
      value: 4,
    },
    {
      name: '$n4',
      value: 4,
    },
    {
      name: '$n5',
      value: 3,
    },
    {
      name: '$n6',
      value: 4,
    },
    {
      name: '$n7',
      value: 2,
    },
    {
      name: '$n8',
      value: 3,
    },
    {
      name: '$n9',
      value: 2,
    },
    {
      name: '$n10',
      value: 2,
    },
    {
      name: '$o1',
      value: 3,
    },
    {
      name: '$o2',
      value: 3,
    },
    {
      name: '$o3',
      value: 5,
    },
    {
      name: '$o4',
      value: 2,
    },
    {
      name: '$o5',
      value: 3,
    },
    {
      name: '$o6',
      value: 3,
    },
    {
      name: '$o7',
      value: 5,
    },
    {
      name: '$o8',
      value: 3,
    },
    {
      name: '$o9',
      value: 3,
    },
    {
      name: '$o10',
      value: 3,
    },
    {
      name: '$p1',
      value: 4,
    },
    {
      name: '$p2',
      value: 4,
    },
    {
      name: '$p3',
      value: 3,
    },
    {
      name: '$p4',
      value: 4,
    },
    {
      name: '$p5',
      value: 4,
    },
    {
      name: '$p6',
      value: 3,
    },
    {
      name: '$p7',
      value: 4,
    },
    {
      name: '$p8',
      value: 4,
    },
    {
      name: '$p9',
      value: 5,
    },
    {
      name: '$p10',
      value: 4,
    },
    {
      name: '$q1',
      value: 4,
    },
    {
      name: '$q2',
      value: 5,
    },
    {
      name: '$q3',
      value: 4,
    },
    {
      name: '$q4',
      value: 5,
    },
    {
      name: '$q5',
      value: 5,
    },
    {
      name: '$q6',
      value: 5,
    },
    {
      name: '$q7',
      value: 4,
    },
    {
      name: '$q8',
      value: 4,
    },
    {
      name: '$q9',
      value: 4,
    },
    {
      name: '$q10',
      value: 4,
    },
    {
      name: '$r1',
      value: 4,
    },
    {
      name: '$r2',
      value: 4,
    },
    {
      name: '$r3',
      value: 4,
    },
    {
      name: '$r4',
      value: 4,
    },
    {
      name: '$r5',
      value: 4,
    },
    {
      name: '$r6',
      value: 2,
    },
    {
      name: '$r7',
      value: 2,
    },
    {
      name: '$r8',
      value: 3,
    },
    {
      name: '$r9',
      value: 3,
    },
    {
      name: '$r10',
      value: 2,
    },
    {
      name: '$s1',
      value: 3,
    },
    {
      name: '$s2',
      value: 4,
    },
    {
      name: '$s3',
      value: 3,
    },
    {
      name: '$s4',
      value: 3,
    },
    {
      name: '$s5',
      value: 2,
    },
    {
      name: '$s6',
      value: 4,
    },
    {
      name: '$s7',
      value: 4,
    },
    {
      name: '$s8',
      value: 3,
    },
    {
      name: '$s9',
      value: 3,
    },
    {
      name: '$s10',
      value: 4,
    },
    {
      name: '$t1',
      value: 4,
    },
    {
      name: '$t2',
      value: 2,
    },
    {
      name: '$t3',
      value: 4,
    },
    {
      name: '$t4',
      value: 4,
    },
    {
      name: '$t5',
      value: 2,
    },
    {
      name: '$t6',
      value: 4,
    },
    {
      name: '$t7',
      value: 4,
    },
    {
      name: '$t8',
      value: 3,
    },
    {
      name: '$t9',
      value: 5,
    },
    {
      name: '$t10',
      value: 5,
    },
    {
      name: '$u1',
      value: 5,
    },
    {
      name: '$u2',
      value: 4,
    },
    {
      name: '$u3',
      value: 5,
    },
    {
      name: '$u4',
      value: 4,
    },
    {
      name: '$u5',
      value: 2,
    },
    {
      name: '$u6',
      value: 4,
    },
    {
      name: '$u7',
      value: 4,
    },
    {
      name: '$u8',
      value: 4,
    },
    {
      name: '$u9',
      value: 2,
    },
    {
      name: '$u10',
      value: 4,
    },
    {
      name: '$v1',
      value: 4,
    },
    {
      name: '$v2',
      value: 4,
    },
    {
      name: '$v3',
      value: 4,
    },
    {
      name: '$v4',
      value: 4,
    },
    {
      name: '$v5',
      value: 4,
    },
    {
      name: '$v6',
      value: 2,
    },
    {
      name: '$v7',
      value: 3,
    },
    {
      name: '$v8',
      value: 2,
    },
    {
      name: '$v9',
      value: 2,
    },
    {
      name: '$v10',
      value: 2,
    },
    {
      name: '$w1',
      value: 2,
    },
    {
      name: '$w2',
      value: 3,
    },
    {
      name: '$w3',
      value: 2,
    },
    {
      name: '$w4',
      value: 3,
    },
    {
      name: '$w5',
      value: 5,
    },
    {
      name: '$w6',
      value: 5,
    },
    {
      name: '$w7',
      value: 5,
    },
    {
      name: '$w8',
      value: 5,
    },
    {
      name: '$w9',
      value: 5,
    },
    {
      name: '$w10',
      value: 5,
    },
    {
      name: '$x1',
      value: 5,
    },
    {
      name: '$x2',
      value: 5,
    },
    {
      name: '$x3',
      value: 5,
    },
    {
      name: '$x4',
      value: 4,
    },
    {
      name: '$x5',
      value: 4,
    },
    {
      name: '$x6',
      value: 5,
    },
    {
      name: '$x7',
      value: 5,
    },
    {
      name: '$x8',
      value: 5,
    },
    {
      name: '$x9',
      value: 5,
    },
    {
      name: '$x10',
      value: 5,
    },
    {
      name: '$y1',
      value: 5,
    },
    {
      name: '$y2',
      value: 5,
    },
    {
      name: '$y3',
      value: 5,
    },
    {
      name: '$y4',
      value: 5,
    },
    {
      name: '$y5',
      value: 5,
    },
    {
      name: '$y6',
      value: 5,
    },
    {
      name: '$y7',
      value: 5,
    },
    {
      name: '$y8',
      value: 5,
    },
    {
      name: '$y9',
      value: 5,
    },
    {
      name: '$y10',
      value: 5,
    },
    {
      name: '$z1',
      value: 5,
    },
    {
      name: '$z2',
      value: 1,
    },
    {
      name: '$z3',
      value: 5,
    },
    {
      name: '$z4',
      value: 7,
    },
    {
      name: '$z5',
      value: 2,
    },
    {
      name: '$z6',
      value: 2,
    },
    {
      name: '$z7',
      value: 3,
    },
    {
      name: '$z8',
      value: 3,
    },
    {
      name: '$z9',
      value: 5,
    },
    {
      name: '$z10',
      value: 3,
    },
    {
      name: '$1a1',
      value: 3,
    },
    {
      name: '$1a2',
      value: 5,
    },
    {
      name: '$1a3',
      value: 3,
    },
    {
      name: '$1a4',
      value: 5,
    },
    {
      name: '$1a5',
      value: 5,
    },
    {
      name: '$1a6',
      value: 5,
    },
    {
      name: '$1a7',
      value: 5,
    },
    {
      name: '$1a8',
      value: 4,
    },
    {
      name: '$1a9',
      value: 5,
    },
    {
      name: '$1a10',
      value: 5,
    },
    {
      name: '$1b1',
      value: 5,
    },
    {
      name: '$1b2',
      value: 5,
    },
    {
      name: '$1b3',
      value: 5,
    },
    {
      name: '$1b4',
      value: 5,
    },
    {
      name: '$1b5',
      value: 5,
    },
    {
      name: '$1b6',
      value: 5,
    },
    {
      name: '$1b7',
      value: 5,
    },
    {
      name: '$1b8',
      value: 4,
    },
    {
      name: '$1b9',
      value: 5,
    },
    {
      name: '$1b10',
      value: 5,
    },
    {
      name: '$1c1',
      value: 5,
    },
    {
      name: '$1c2',
      value: 4,
    },
    {
      name: '$1c3',
      value: 5,
    },
    {
      name: '$1c4',
      value: 5,
    },
    {
      name: '$1c5',
      value: 5,
    },
    {
      name: '$1c6',
      value: 5,
    },
    {
      name: '$1c7',
      value: 5,
    },
    {
      name: '$1c8',
      value: 7,
    },
    {
      name: '$1c9',
      value: 7,
    },
    {
      name: '$1c10',
      value: 6,
    },
    {
      name: '$1d1',
      value: 6,
    },
    {
      name: '$1d2',
      value: 7,
    },
    {
      name: '$1d3',
      value: 7,
    },
    {
      name: '$1d4',
      value: 7,
    },
    {
      name: '$1d5',
      value: 4,
    },
    {
      name: '$1d6',
      value: 3,
    },
    {
      name: '$1d7',
      value: 2,
    },
    {
      name: '$1d8',
      value: 3,
    },
    {
      name: '$1d9',
      value: 3,
    },
    {
      name: '$1d10',
      value: 3,
    },
    {
      name: '$1e1',
      value: 3,
    },
    {
      name: '$1e2',
      value: 2,
    },
    {
      name: '$1e3',
      value: 5,
    },
    {
      name: '$1e4',
      value: 5,
    },
    {
      name: '$1e5',
      value: 5,
    },
    {
      name: '$1e6',
      value: 5,
    },
    {
      name: '$1e7',
      value: 5,
    },
    {
      name: '$1e8',
      value: 2,
    },
    {
      name: '$1e9',
      value: 5,
    },
    {
      name: '$1e10',
      value: 5,
    },
    {
      name: '$1f1',
      value: 4,
    },
    {
      name: '$1f2',
      value: 5,
    },
    {
      name: '$1f3',
      value: 5,
    },
    {
      name: '$1f4',
      value: 5,
    },
    {
      name: '$1f5',
      value: 5,
    },
    {
      name: '$1f6',
      value: 5,
    },
    {
      name: '$1f7',
      value: 5,
    },
    {
      name: '$1f8',
      value: 5,
    },
    {
      name: '$1f9',
      value: 5,
    },
    {
      name: '$1f10',
      value: 5,
    },
    {
      name: '$1g1',
      value: 5,
    },
    {
      name: '$1g2',
      value: 5,
    },
    {
      name: '$1g3',
      value: 5,
    },
    {
      name: '$1g4',
      value: 5,
    },
    {
      name: '$1g5',
      value: 5,
    },
    {
      name: '$1g6',
      value: 5,
    },
    {
      name: '$1g7',
      value: 5,
    },
    {
      name: '$1g8',
      value: 1,
    },
    {
      name: '$1g9',
      value: 7,
    },
    {
      name: '$1g10',
      value: 7,
    },
    {
      name: '$1h1',
      value: 7,
    },
    {
      name: '$1h2',
      value: 7,
    },
    {
      name: '$1h3',
      value: 7,
    },
    {
      name: '$1h4',
      value: 3,
    },
    {
      name: '$1h5',
      value: 2,
    },
    {
      name: '$1h6',
      value: 2,
    },
    {
      name: '$1h7',
      value: 3,
    },
    {
      name: '$1h8',
      value: 5,
    },
    {
      name: '$1h9',
      value: 5,
    },
    {
      name: '$1h10',
      value: 3,
    },
    {
      name: '$1i1',
      value: 3,
    },
    {
      name: '$1i2',
      value: 3,
    },
    {
      name: '$1i3',
      value: 3,
    },
    {
      name: '$1i4',
      value: 5,
    },
    {
      name: '$1i5',
      value: 5,
    },
    {
      name: '$1i6',
      value: 5,
    },
    {
      name: '$1i7',
      value: 4,
    },
    {
      name: '$1i8',
      value: 5,
    },
    {
      name: '$1i9',
      value: 5,
    },
    {
      name: '$1i10',
      value: 5,
    },
    {
      name: '$1j1',
      value: 5,
    },
    {
      name: '$1j2',
      value: 4,
    },
    {
      name: '$1j3',
      value: 5,
    },
    {
      name: '$1j4',
      value: 5,
    },
    {
      name: '$1j5',
      value: 5,
    },
    {
      name: '$1j6',
      value: 5,
    },
    {
      name: '$1j7',
      value: 5,
    },
    {
      name: '$1j8',
      value: 5,
    },
    {
      name: '$1j9',
      value: 5,
    },
    {
      name: '$1j10',
      value: 5,
    },
    {
      name: '$1k1',
      value: 5,
    },
    {
      name: '$1k2',
      value: 5,
    },
    {
      name: '$1k3',
      value: 4,
    },
    {
      name: '$1k4',
      value: 5,
    },
    {
      name: '$1k5',
      value: 5,
    },
    {
      name: '$1k6',
      value: 5,
    },
    {
      name: '$1k7',
      value: 6,
    },
    {
      name: '$1k8',
      value: 6,
    },
    {
      name: '$1k9',
      value: 6,
    },
    {
      name: '$1k10',
      value: 7,
    },
    {
      name: '$1l1',
      value: 7,
    },
    {
      name: '$1l2',
      value: 6,
    },
    {
      name: '$1l3',
      value: 7,
    },
    {
      name: '$1l4',
      value: 4,
    },
    {
      name: '$1l5',
      value: 3,
    },
    {
      name: '$1l6',
      value: 3,
    },
    {
      name: '$1l7',
      value: 3,
    },
    {
      name: '$1l8',
      value: 3,
    },
    {
      name: '$1l9',
      value: 3,
    },
    {
      name: '$1l10',
      value: 3,
    },
    {
      name: '$1m1',
      value: 3,
    },
    {
      name: '$1m2',
      value: 3,
    },
    {
      name: '$1m3',
      value: 3,
    },
    {
      name: '$1m4',
      value: 3,
    },
    {
      name: '$1m5',
      value: 5,
    },
    {
      name: '$1m6',
      value: 5,
    },
    {
      name: '$1m7',
      value: 5,
    },
    {
      name: '$1m8',
      value: 5,
    },
    {
      name: '$1m9',
      value: 2,
    },
    {
      name: '$1m10',
      value: 5,
    },
    {
      name: '$1n1',
      value: 4,
    },
    {
      name: '$1n2',
      value: 2,
    },
    {
      name: '$1n3',
      value: 5,
    },
    {
      name: '$1n4',
      value: 5,
    },
    {
      name: '$1n5',
      value: 5,
    },
    {
      name: '$1n6',
      value: 5,
    },
    {
      name: '$1n7',
      value: 5,
    },
    {
      name: '$1n8',
      value: 5,
    },
    {
      name: '$1n9',
      value: 5,
    },
    {
      name: '$1n10',
      value: 5,
    },
    {
      name: '$1o1',
      value: 5,
    },
    {
      name: '$1o2',
      value: 5,
    },
    {
      name: '$1o3',
      value: 5,
    },
    {
      name: '$1o4',
      value: 5,
    },
    {
      name: '$1o5',
      value: 5,
    },
    {
      name: '$1o6',
      value: 6,
    },
    {
      name: '$1o7',
      value: 6,
    },
    {
      name: '$1o8',
      value: 6,
    },
    {
      name: '$1o9',
      value: 6,
    },
    {
      name: '$1o10',
      value: 6,
    },
    {
      name: '$1p1',
      value: 6,
    },
    {
      name: '$1p2',
      value: 6,
    },
    {
      name: '$1p3',
      value: 3,
    },
    {
      name: '$1p4',
      value: 3,
    },
    {
      name: '$1p5',
      value: 4,
    },
    {
      name: '$1p6',
      value: 3,
    },
    {
      name: '$1p7',
      value: 3,
    },
    {
      name: '$1p8',
      value: 3,
    },
    {
      name: '$1p9',
      value: 3,
    },
    {
      name: '$1p10',
      value: 3,
    },
    {
      name: '$1q1',
      value: 3,
    },
    {
      name: '$1q2',
      value: 3,
    },
    {
      name: '$1q3',
      value: 3,
    },
    {
      name: '$1q4',
      value: 3,
    },
    {
      name: '$1q5',
      value: 2,
    },
    {
      name: '$1q6',
      value: 4,
    },
    {
      name: '$1q7',
      value: 5,
    },
    {
      name: '$1q8',
      value: 5,
    },
    {
      name: '$1q9',
      value: 5,
    },
    {
      name: '$1q10',
      value: 3,
    },
    {
      name: '$1r1',
      value: 5,
    },
    {
      name: '$1r2',
      value: 3,
    },
    {
      name: '$1r3',
      value: 5,
    },
    {
      name: '$1r4',
      value: 5,
    },
    {
      name: '$1r5',
      value: 5,
    },
    {
      name: '$1r6',
      value: 5,
    },
    {
      name: '$1r7',
      value: 5,
    },
    {
      name: '$1r8',
      value: 5,
    },
    {
      name: '$1r9',
      value: 5,
    },
    {
      name: '$1r10',
      value: 5,
    },
    {
      name: '$1s1',
      value: 5,
    },
    {
      name: '$1s2',
      value: 5,
    },
    {
      name: '$1s3',
      value: 6,
    },
    {
      name: '$1s4',
      value: 6,
    },
    {
      name: '$1s5',
      value: 6,
    },
    {
      name: '$1s6',
      value: 6,
    },
    {
      name: '$1s7',
      value: 6,
    },
    {
      name: '$1s8',
      value: 6,
    },
    {
      name: '$1s9',
      value: 7,
    },
    {
      name: '$1s10',
      value: 7,
    },
    {
      name: '$1t1',
      value: 1,
    },
    {
      name: '$1t2',
      value: 6,
    },
    {
      name: '$1t3',
      value: 2,
    },
    {
      name: '$1t4',
      value: 3,
    },
    {
      name: '$1t5',
      value: 3,
    },
    {
      name: '$1t6',
      value: 3,
    },
    {
      name: '$1t7',
      value: 3,
    },
    {
      name: '$1t8',
      value: 3,
    },
    {
      name: '$1t9',
      value: 3,
    },
    {
      name: '$1t10',
      value: 3,
    },
    {
      name: '$1u1',
      value: 3,
    },
    {
      name: '$1u2',
      value: 3,
    },
    {
      name: '$1u3',
      value: 3,
    },
    {
      name: '$1u4',
      value: 5,
    },
    {
      name: '$1u5',
      value: 3,
    },
    {
      name: '$1u6',
      value: 5,
    },
    {
      name: '$1u7',
      value: 4,
    },
    {
      name: '$1u8',
      value: 5,
    },
    {
      name: '$1u9',
      value: 5,
    },
    {
      name: '$1u10',
      value: 5,
    },
    {
      name: '$1v1',
      value: 5,
    },
    {
      name: '$1v2',
      value: 5,
    },
    {
      name: '$1v3',
      value: 3,
    },
    {
      name: '$1v4',
      value: 5,
    },
    {
      name: '$1v5',
      value: 5,
    },
    {
      name: '$1v6',
      value: 5,
    },
    {
      name: '$1v7',
      value: 4,
    },
    {
      name: '$1v8',
      value: 5,
    },
    {
      name: '$1v9',
      value: 5,
    },
    {
      name: '$1v10',
      value: 7,
    },
    {
      name: '$1w1',
      value: 6,
    },
    {
      name: '$1w2',
      value: 6,
    },
    {
      name: '$1w3',
      value: 6,
    },
    {
      name: '$1w4',
      value: 6,
    },
    {
      name: '$1w5',
      value: 6,
    },
    {
      name: '$1w6',
      value: 7,
    },
    {
      name: '$1w7',
      value: 7,
    },
    {
      name: '$1w8',
      value: 6,
    },
    {
      name: '$1w9',
      value: 7,
    },
    {
      name: '$1w10',
      value: 7,
    },
    {
      name: '$1x1',
      value: 7,
    },
    {
      name: '$1x2',
      value: 3,
    },
    {
      name: '$1x3',
      value: 3,
    },
    {
      name: '$1x4',
      value: 3,
    },
    {
      name: '$1x5',
      value: 2,
    },
    {
      name: '$1x6',
      value: 3,
    },
    {
      name: '$1x7',
      value: 3,
    },
    {
      name: '$1x8',
      value: 3,
    },
    {
      name: '$1x9',
      value: 3,
    },
    {
      name: '$1x10',
      value: 3,
    },
    {
      name: '$1y1',
      value: 3,
    },
    {
      name: '$1y2',
      value: 3,
    },
    {
      name: '$1y3',
      value: 3,
    },
    {
      name: '$1y4',
      value: 3,
    },
    {
      name: '$1y5',
      value: 3,
    },
    {
      name: '$1y6',
      value: 5,
    },
    {
      name: '$1y7',
      value: 3,
    },
    {
      name: '$1y8',
      value: 5,
    },
    {
      name: '$1y9',
      value: 5,
    },
    {
      name: '$1y10',
      value: 5,
    },
    {
      name: '$1z1',
      value: 5,
    },
    {
      name: '$1z2',
      value: 5,
    },
    {
      name: '$1z3',
      value: 5,
    },
    {
      name: '$1z4',
      value: 5,
    },
    {
      name: '$1z5',
      value: 5,
    },
    {
      name: '$1z6',
      value: 5,
    },
    {
      name: '$1z7',
      value: 5,
    },
    {
      name: '$1z8',
      value: 6,
    },
    {
      name: '$1z9',
      value: 6,
    },
    {
      name: '$1z10',
      value: 6,
    },
    {
      name: '$2a1',
      value: 6,
    },
    {
      name: '$2a2',
      value: 7,
    },
    {
      name: '$2a3',
      value: 7,
    },
    {
      name: '$2a4',
      value: 6,
    },
    {
      name: '$2a5',
      value: 7,
    },
    {
      name: '$2a6',
      value: 1,
    },
    {
      name: '$2a7',
      value: 6,
    },
    {
      name: '$2a8',
      value: 6,
    },
    {
      name: '$2a9',
      value: 7,
    },
    {
      name: '$2a10',
      value: 7,
    },
    {
      name: '$2b1',
      value: 7,
    },
    {
      name: '$2b2',
      value: 3,
    },
    {
      name: '$2b3',
      value: 3,
    },
    {
      name: '$2b4',
      value: 3,
    },
    {
      name: '$2b5',
      value: 3,
    },
    {
      name: '$2b6',
      value: 3,
    },
    {
      name: '$2b7',
      value: 3,
    },
    {
      name: '$2b8',
      value: 3,
    },
    {
      name: '$2b9',
      value: 3,
    },
    {
      name: '$2b10',
      value: 3,
    },
    {
      name: '$2c1',
      value: 5,
    },
    {
      name: '$2c2',
      value: 5,
    },
    {
      name: '$2c3',
      value: 5,
    },
    {
      name: '$2c4',
      value: 5,
    },
    {
      name: '$2c5',
      value: 3,
    },
    {
      name: '$2c6',
      value: 5,
    },
    {
      name: '$2c7',
      value: 4,
    },
    {
      name: '$2c8',
      value: 5,
    },
    {
      name: '$2c9',
      value: 3,
    },
    {
      name: '$2c10',
      value: 5,
    },
    {
      name: '$2d1',
      value: 4,
    },
    {
      name: '$2d2',
      value: 5,
    },
    {
      name: '$2d3',
      value: 5,
    },
    {
      name: '$2d4',
      value: 5,
    },
    {
      name: '$2d5',
      value: 4,
    },
    {
      name: '$2d6',
      value: 5,
    },
    {
      name: '$2d7',
      value: 6,
    },
    {
      name: '$2d8',
      value: 6,
    },
    {
      name: '$2d9',
      value: 6,
    },
    {
      name: '$2d10',
      value: 6,
    },
    {
      name: '$2e1',
      value: 6,
    },
    {
      name: '$2e2',
      value: 6,
    },
    {
      name: '$2e3',
      value: 6,
    },
    {
      name: '$2e4',
      value: 6,
    },
    {
      name: '$2e5',
      value: 7,
    },
    {
      name: '$2e6',
      value: 7,
    },
    {
      name: '$2e7',
      value: 6,
    },
    {
      name: '$2e8',
      value: 7,
    },
    {
      name: '$2e9',
      value: 7,
    },
    {
      name: '$2e10',
      value: 7,
    },
    {
      name: '$2f1',
      value: 3,
    },
    {
      name: '$2f2',
      value: 3,
    },
    {
      name: '$2f3',
      value: 3,
    },
    {
      name: '$2f4',
      value: 1,
    },
    {
      name: '$2f5',
      value: 1,
    },
    {
      name: '$2f6',
      value: 2,
    },
    {
      name: '$2f7',
      value: 3,
    },
    {
      name: '$2f8',
      value: 3,
    },
    {
      name: '$2f9',
      value: 3,
    },
    {
      name: '$2f10',
      value: 5,
    },
    {
      name: '$2g1',
      value: 5,
    },
    {
      name: '$2g2',
      value: 5,
    },
    {
      name: '$2g3',
      value: 5,
    },
    {
      name: '$2g4',
      value: 5,
    },
    {
      name: '$2g5',
      value: 5,
    },
    {
      name: '$2g6',
      value: 3,
    },
    {
      name: '$2g7',
      value: 5,
    },
    {
      name: '$2g8',
      value: 5,
    },
    {
      name: '$2g9',
      value: 5,
    },
    {
      name: '$2g10',
      value: 5,
    },
    {
      name: '$2h1',
      value: 5,
    },
    {
      name: '$2h2',
      value: 5,
    },
    {
      name: '$2h3',
      value: 6,
    },
    {
      name: '$2h4',
      value: 7,
    },
    {
      name: '$2h5',
      value: 7,
    },
    {
      name: '$2h6',
      value: 6,
    },
    {
      name: '$2h7',
      value: 6,
    },
    {
      name: '$2h8',
      value: 6,
    },
    {
      name: '$2h9',
      value: 6,
    },
    {
      name: '$2h10',
      value: 6,
    },
    {
      name: '$2i1',
      value: 7,
    },
    {
      name: '$2i2',
      value: 7,
    },
    {
      name: '$2i3',
      value: 7,
    },
    {
      name: '$2i4',
      value: 6,
    },
    {
      name: '$2i5',
      value: 7,
    },
    {
      name: '$2i6',
      value: 6,
    },
    {
      name: '$2i7',
      value: 7,
    },
    {
      name: '$2i8',
      value: 7,
    },
    {
      name: '$2i9',
      value: 7,
    },
    {
      name: '$2i10',
      value: 7,
    },
    {
      name: '$2j1',
      value: 3,
    },
    {
      name: '$2j2',
      value: 3,
    },
    {
      name: '$2j3',
      value: 3,
    },
    {
      name: '$2j4',
      value: 3,
    },
    {
      name: '$2j5',
      value: 1,
    },
    {
      name: '$2j6',
      value: 3,
    },
    {
      name: '$2j7',
      value: 3,
    },
    {
      name: '$2j8',
      value: 3,
    },
    {
      name: '$2j9',
      value: 2,
    },
    {
      name: '$2j10',
      value: 5,
    },
    {
      name: '$2k1',
      value: 5,
    },
    {
      name: '$2k2',
      value: 5,
    },
    {
      name: '$2k3',
      value: 5,
    },
    {
      name: '$2k4',
      value: 5,
    },
    {
      name: '$2k5',
      value: 5,
    },
    {
      name: '$2k6',
      value: 5,
    },
    {
      name: '$2k7',
      value: 5,
    },
    {
      name: '$2k8',
      value: 5,
    },
    {
      name: '$2k9',
      value: 5,
    },
    {
      name: '$2k10',
      value: 5,
    },
    {
      name: '$2l1',
      value: 6,
    },
    {
      name: '$2l2',
      value: 7,
    },
    {
      name: '$2l3',
      value: 6,
    },
    {
      name: '$2l4',
      value: 6,
    },
    {
      name: '$2l5',
      value: 6,
    },
    {
      name: '$2l6',
      value: 6,
    },
    {
      name: '$2l7',
      value: 7,
    },
    {
      name: '$2l8',
      value: 6,
    },
    {
      name: '$2l9',
      value: 6,
    },
    {
      name: '$2l10',
      value: 1,
    },
    {
      name: '$2m1',
      value: 6,
    },
    {
      name: '$2m2',
      value: 6,
    },
    {
      name: '$2m3',
      value: 6,
    },
    {
      name: '$2m4',
      value: 7,
    },
    {
      name: '$2m5',
      value: 7,
    },
    {
      name: '$2m6',
      value: 7,
    },
    {
      name: '$2m7',
      value: 7,
    },
    {
      name: '$2m8',
      value: 7,
    },
    {
      name: '$2m9',
      value: 7,
    },
    {
      name: '$2m10',
      value: 3,
    },
    {
      name: '$2n1',
      value: 3,
    },
    {
      name: '$2n2',
      value: 2,
    },
    {
      name: '$2n3',
      value: 3,
    },
    {
      name: '$2n4',
      value: 3,
    },
    {
      name: '$2n5',
      value: 3,
    },
    {
      name: '$2n6',
      value: 3,
    },
    {
      name: '$2n7',
      value: 3,
    },
    {
      name: '$2n8',
      value: 3,
    },
    {
      name: '$2n9',
      value: 5,
    },
    {
      name: '$2n10',
      value: 5,
    },
    {
      name: '$2o1',
      value: 5,
    },
    {
      name: '$2o2',
      value: 5,
    },
    {
      name: '$2o3',
      value: 5,
    },
    {
      name: '$2o4',
      value: 3,
    },
    {
      name: '$2o5',
      value: 5,
    },
    {
      name: '$2o6',
      value: 5,
    },
    {
      name: '$2o7',
      value: 5,
    },
    {
      name: '$2o8',
      value: 5,
    },
    {
      name: '$2o9',
      value: 5,
    },
    {
      name: '$2o10',
      value: 6,
    },
    {
      name: '$2p1',
      value: 6,
    },
    {
      name: '$2p2',
      value: 7,
    },
    {
      name: '$2p3',
      value: 7,
    },
    {
      name: '$2p4',
      value: 7,
    },
    {
      name: '$2p5',
      value: 6,
    },
    {
      name: '$2p6',
      value: 6,
    },
    {
      name: '$2p7',
      value: 6,
    },
    {
      name: '$2p8',
      value: 6,
    },
    {
      name: '$2p9',
      value: 6,
    },
    {
      name: '$2p10',
      value: 7,
    },
    {
      name: '$2q1',
      value: 7,
    },
    {
      name: '$2q2',
      value: 7,
    },
    {
      name: '$2q3',
      value: 7,
    },
    {
      name: '$2q4',
      value: 7,
    },
    {
      name: '$2q5',
      value: 6,
    },
    {
      name: '$2q6',
      value: 7,
    },
    {
      name: '$2q7',
      value: 7,
    },
    {
      name: '$2q8',
      value: 7,
    },
    {
      name: '$2q9',
      value: 7,
    },
    {
      name: '$2q10',
      value: 2,
    },
    {
      name: '$2r1',
      value: 2,
    },
    {
      name: '$2r2',
      value: 2,
    },
    {
      name: '$2r3',
      value: 2,
    },
    {
      name: '$2r4',
      value: 3,
    },
    {
      name: '$2r5',
      value: 3,
    },
    {
      name: '$2r6',
      value: 2,
    },
    {
      name: '$2r7',
      value: 3,
    },
    {
      name: '$2r8',
      value: 3,
    },
    {
      name: '$2r9',
      value: 4,
    },
    {
      name: '$2r10',
      value: 4,
    },
    {
      name: '$2s1',
      value: 3,
    },
    {
      name: '$2s2',
      value: 5,
    },
    {
      name: '$2s3',
      value: 4,
    },
    {
      name: '$2s4',
      value: 5,
    },
    {
      name: '$2s5',
      value: 5,
    },
    {
      name: '$2s6',
      value: 5,
    },
    {
      name: '$2s7',
      value: 5,
    },
    {
      name: '$2s8',
      value: 5,
    },
    {
      name: '$2s9',
      value: 5,
    },
    {
      name: '$2s10',
      value: 5,
    },
    {
      name: '$2t1',
      value: 6,
    },
    {
      name: '$2t2',
      value: 6,
    },
    {
      name: '$2t3',
      value: 6,
    },
    {
      name: '$2t4',
      value: 7,
    },
    {
      name: '$2t5',
      value: 6,
    },
    {
      name: '$2t6',
      value: 6,
    },
    {
      name: '$2t7',
      value: 6,
    },
    {
      name: '$2t8',
      value: 6,
    },
    {
      name: '$2t9',
      value: 6,
    },
    {
      name: '$2t10',
      value: 6,
    },
    {
      name: '$2u1',
      value: 6,
    },
    {
      name: '$2u2',
      value: 6,
    },
    {
      name: '$2u3',
      value: 7,
    },
    {
      name: '$2u4',
      value: 6,
    },
    {
      name: '$2u5',
      value: 6,
    },
    {
      name: '$2u6',
      value: 6,
    },
    {
      name: '$2u7',
      value: 7,
    },
    {
      name: '$2u8',
      value: 7,
    },
    {
      name: '$2u9',
      value: 3,
    },
    {
      name: '$2u10',
      value: 3,
    },
    {
      name: '$2v1',
      value: 3,
    },
    {
      name: '$2v2',
      value: 3,
    },
    {
      name: '$2v3',
      value: 3,
    },
    {
      name: '$2v4',
      value: 3,
    },
    {
      name: '$2v5',
      value: 3,
    },
    {
      name: '$2v6',
      value: 3,
    },
    {
      name: '$2v7',
      value: 3,
    },
    {
      name: '$2v8',
      value: 5,
    },
    {
      name: '$2v9',
      value: 2,
    },
    {
      name: '$2v10',
      value: 5,
    },
    {
      name: '$2w1',
      value: 5,
    },
    {
      name: '$2w2',
      value: 5,
    },
    {
      name: '$2w3',
      value: 5,
    },
    {
      name: '$2w4',
      value: 5,
    },
    {
      name: '$2w5',
      value: 5,
    },
    {
      name: '$2w6',
      value: 5,
    },
    {
      name: '$2w7',
      value: 5,
    },
    {
      name: '$2w8',
      value: 5,
    },
    {
      name: '$2w9',
      value: 5,
    },
    {
      name: '$2w10',
      value: 5,
    },
    {
      name: '$2x1',
      value: 7,
    },
    {
      name: '$2x2',
      value: 7,
    },
    {
      name: '$2x3',
      value: 7,
    },
    {
      name: '$2x4',
      value: 6,
    },
    {
      name: '$2x5',
      value: 6,
    },
    {
      name: '$2x6',
      value: 6,
    },
    {
      name: '$2x7',
      value: 6,
    },
    {
      name: '$2x8',
      value: 6,
    },
    {
      name: '$2x9',
      value: 6,
    },
    {
      name: '$2x10',
      value: 7,
    },
    {
      name: '$2y1',
      value: 7,
    },
    {
      name: '$2y2',
      value: 1,
    },
    {
      name: '$2y3',
      value: 6,
    },
    {
      name: '$2y4',
      value: 7,
    },
    {
      name: '$2y5',
      value: 7,
    },
    {
      name: '$2y6',
      value: 7,
    },
    {
      name: '$2y7',
      value: 7,
    },
    {
      name: '$2y8',
      value: 7,
    },
    {
      name: '$2y9',
      value: 2,
    },
    {
      name: '$2y10',
      value: 3,
    },
    {
      name: '$2z1',
      value: 3,
    },
    {
      name: '$2z2',
      value: 3,
    },
    {
      name: '$2z3',
      value: 3,
    },
    {
      name: '$2z4',
      value: 3,
    },
    {
      name: '$2z5',
      value: 5,
    },
    {
      name: '$2z6',
      value: 3,
    },
    {
      name: '$2z7',
      value: 3,
    },
    {
      name: '$2z8',
      value: 5,
    },
    {
      name: '$2z9',
      value: 5,
    },
    {
      name: '$2z10',
      value: 3,
    },
    {
      name: '$3a1',
      value: 5,
    },
    {
      name: '$3a2',
      value: 5,
    },
    {
      name: '$3a3',
      value: 5,
    },
    {
      name: '$3a4',
      value: 5,
    },
    {
      name: '$3a5',
      value: 4,
    },
    {
      name: '$3a6',
      value: 5,
    },
    {
      name: '$3a7',
      value: 4,
    },
    {
      name: '$3a8',
      value: 5,
    },
    {
      name: '$3a9',
      value: 6,
    },
    {
      name: '$3a10',
      value: 7,
    },
    {
      name: '$3b1',
      value: 6,
    },
    {
      name: '$3b2',
      value: 6,
    },
    {
      name: '$3b3',
      value: 6,
    },
    {
      name: '$3b4',
      value: 6,
    },
    {
      name: '$3b5',
      value: 6,
    },
    {
      name: '$3b6',
      value: 6,
    },
    {
      name: '$3b7',
      value: 1,
    },
    {
      name: '$3b8',
      value: 6,
    },
    {
      name: '$3b9',
      value: 6,
    },
    {
      name: '$3b10',
      value: 6,
    },
    {
      name: '$3c1',
      value: 7,
    },
    {
      name: '$3c2',
      value: 7,
    },
    {
      name: '$3c3',
      value: 7,
    },
    {
      name: '$3c4',
      value: 6,
    },
    {
      name: '$3c5',
      value: 7,
    },
    {
      name: '$3c6',
      value: 7,
    },
    {
      name: '$3c7',
      value: 7,
    },
    {
      name: '$3c8',
      value: 3,
    },
    {
      name: '$3c9',
      value: 3,
    },
    {
      name: '$3c10',
      value: 3,
    },
    {
      name: '$3d1',
      value: 3,
    },
    {
      name: '$3d2',
      value: 5,
    },
    {
      name: '$3d3',
      value: 3,
    },
    {
      name: '$3d4',
      value: 3,
    },
    {
      name: '$3d5',
      value: 5,
    },
    {
      name: '$3d6',
      value: 3,
    },
    {
      name: '$3d7',
      value: 5,
    },
    {
      name: '$3d8',
      value: 5,
    },
    {
      name: '$3d9',
      value: 5,
    },
    {
      name: '$3d10',
      value: 5,
    },
    {
      name: '$3e1',
      value: 5,
    },
    {
      name: '$3e2',
      value: 3,
    },
    {
      name: '$3e3',
      value: 5,
    },
    {
      name: '$3e4',
      value: 5,
    },
    {
      name: '$3e5',
      value: 5,
    },
    {
      name: '$3e6',
      value: 5,
    },
    {
      name: '$3e7',
      value: 5,
    },
    {
      name: '$3e8',
      value: 5,
    },
    {
      name: '$3e9',
      value: 5,
    },
    {
      name: '$3e10',
      value: 5,
    },
    {
      name: '$3f1',
      value: 7,
    },
    {
      name: '$3f2',
      value: 7,
    },
    {
      name: '$3f3',
      value: 6,
    },
    {
      name: '$3f4',
      value: 7,
    },
    {
      name: '$3f5',
      value: 6,
    },
    {
      name: '$3f6',
      value: 6,
    },
    {
      name: '$3f7',
      value: 6,
    },
    {
      name: '$3f8',
      value: 6,
    },
    {
      name: '$3f9',
      value: 7,
    },
    {
      name: '$3f10',
      value: 7,
    },
    {
      name: '$3g1',
      value: 7,
    },
    {
      name: '$3g2',
      value: 6,
    },
    {
      name: '$3g3',
      value: 7,
    },
    {
      name: '$3g4',
      value: 6,
    },
    {
      name: '$3g5',
      value: 7,
    },
    {
      name: '$3g6',
      value: 1,
    },
    {
      name: '$3g7',
      value: 7,
    },
    {
      name: '$3g8',
      value: 3,
    },
    {
      name: '$3g9',
      value: 3,
    },
    {
      name: '$3g10',
      value: 1,
    },
    {
      name: '$3h1',
      value: 2,
    },
    {
      name: '$3h2',
      value: 3,
    },
    {
      name: '$3h3',
      value: 4,
    },
    {
      name: '$3h4',
      value: 3,
    },
    {
      name: '$3h5',
      value: 5,
    },
    {
      name: '$3h6',
      value: 5,
    },
    {
      name: '$3h7',
      value: 5,
    },
    {
      name: '$3h8',
      value: 4,
    },
    {
      name: '$3h9',
      value: 3,
    },
    {
      name: '$3h10',
      value: 5,
    },
    {
      name: '$3i1',
      value: 5,
    },
    {
      name: '$3i2',
      value: 5,
    },
    {
      name: '$3i3',
      value: 5,
    },
    {
      name: '$3i4',
      value: 4,
    },
    {
      name: '$3i5',
      value: 5,
    },
    {
      name: '$3i6',
      value: 5,
    },
    {
      name: '$3i7',
      value: 4,
    },
    {
      name: '$3i8',
      value: 5,
    },
    {
      name: '$3i9',
      value: 5,
    },
    {
      name: '$3i10',
      value: 5,
    },
    {
      name: '$3j1',
      value: 6,
    },
    {
      name: '$3j2',
      value: 6,
    },
    {
      name: '$3j3',
      value: 6,
    },
    {
      name: '$3j4',
      value: 6,
    },
    {
      name: '$3j5',
      value: 7,
    },
    {
      name: '$3j6',
      value: 6,
    },
    {
      name: '$3j7',
      value: 6,
    },
    {
      name: '$3j8',
      value: 6,
    },
    {
      name: '$3j9',
      value: 1,
    },
    {
      name: '$3j10',
      value: 7,
    },
    {
      name: '$3k1',
      value: 7,
    },
    {
      name: '$3k2',
      value: 6,
    },
    {
      name: '$3k3',
      value: 6,
    },
    {
      name: '$3k4',
      value: 7,
    },
    {
      name: '$3k5',
      value: 7,
    },
    {
      name: '$3k6',
      value: 7,
    },
    {
      name: '$3k7',
      value: 3,
    },
    {
      name: '$3k8',
      value: 2,
    },
    {
      name: '$3k9',
      value: 2,
    },
    {
      name: '$3k10',
      value: 3,
    },
    {
      name: '$3l1',
      value: 3,
    },
    {
      name: '$3l2',
      value: 3,
    },
    {
      name: '$3l3',
      value: 5,
    },
    {
      name: '$3l4',
      value: 3,
    },
    {
      name: '$3l5',
      value: 3,
    },
    {
      name: '$3l6',
      value: 3,
    },
    {
      name: '$3l7',
      value: 5,
    },
    {
      name: '$3l8',
      value: 5,
    },
    {
      name: '$3l9',
      value: 5,
    },
    {
      name: '$3l10',
      value: 5,
    },
    {
      name: '$3m1',
      value: 3,
    },
    {
      name: '$3m2',
      value: 5,
    },
    {
      name: '$3m3',
      value: 5,
    },
    {
      name: '$3m4',
      value: 5,
    },
    {
      name: '$3m5',
      value: 5,
    },
    {
      name: '$3m6',
      value: 6,
    },
    {
      name: '$3m7',
      value: 6,
    },
    {
      name: '$3m8',
      value: 6,
    },
    {
      name: '$3m9',
      value: 6,
    },
    {
      name: '$3m10',
      value: 6,
    },
    {
      name: '$3n1',
      value: 6,
    },
    {
      name: '$3n2',
      value: 6,
    },
    {
      name: '$3n3',
      value: 7,
    },
    {
      name: '$3n4',
      value: 6,
    },
    {
      name: '$3n5',
      value: 6,
    },
    {
      name: '$3n6',
      value: 6,
    },
    {
      name: '$3n7',
      value: 6,
    },
    {
      name: '$3n8',
      value: 6,
    },
    {
      name: '$3n9',
      value: 6,
    },
    {
      name: '$3n10',
      value: 7,
    },
    {
      name: '$3o1',
      value: 1,
    },
    {
      name: '$3o2',
      value: 7,
    },
    {
      name: '$3o3',
      value: 6,
    },
    {
      name: '$3o4',
      value: 7,
    },
    {
      name: '$3o5',
      value: 7,
    },
    {
      name: '$3o6',
      value: 7,
    },
  ],
  event: {
    series: {
      click: params => {
        console.log(params);
      },
    },
  },
};
