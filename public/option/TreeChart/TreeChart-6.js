const option = {
  theme: 'light',
  // 图表类型(线型树图)
  type: 'LineTreeChart',
  // padding控制图表距离容器的上、右、下、左padding值
  padding: [150, 20, 80, 20],
  // 树图的起点方向,仅type为LineTreeChart有效,取值'left','right','top','bottom',默认值'left'
  direction: 'bottom',
  // 图元的大小,默认值10
  symbolSize: 10,
  // 连线的形状,仅type为LineTreeChart有效,'curve'或'polyline',默认值'curve'
  lineType: 'curve',
  // 初始树图的展开层级,最小值为1,默认值1
  initialTreeDepth: 2,
 data: [
    {
      name: '节点6',
      data: [
        {
          name: 'flare',
          children: [
            {
              name: 'data6',
              children: [
                {
                  name: 'converters',
                  children: [
                    { name: 'Converters', value: 726 },
                    { name: 'DelimitedTextConverter', value: 4296 },
                  ],
                },
                {
                  name: 'DataUtil',
                  value: 3326,
                },
              ],
            },
            {
              name: 'display',
              children: [
                { name: 'DirtySprite', value: 8836 },
                { name: 'LineSprite', value: 1736 },
                { name: 'RectSprite', value: 3666 },
              ],
            },
            {
              name: 'flex',
              children: [{ name: 'FlareVis', value: 4616 }],
            },
            {
              name: 'query',
              children: [
                { name: 'AggregateExpression', value: 1666 },
                { name: 'And', value: 1026 },
                { name: 'Arithmetic', value: 3896 },
                { name: 'Average', value: 896 },
                { name: 'BinaryExpression', value: 2896 },
                { name: 'Comparison', value: 5106 },
                { name: 'CompositeExpression', value: 3676 },
                { name: 'Count', value: 786 },
                { name: 'DateUtil', value: 4146 },
                { name: 'Distinct', value: 936 },
                { name: 'Expression', value: 5136 },
                { name: 'ExpressionIterator', value: 3616 },
                { name: 'Fn', value: 3246 },
                { name: 'If', value: 2736 },
                { name: 'IsA', value: 2036 },
                { name: 'Literal', value: 1216 },
                { name: 'Match', value: 3746 },
                { name: 'Maximum', value: 846 },
                {
                  name: 'methods',
                  children: [
                    { name: 'add', value: 596 },
                    { name: 'and', value: 336 },
                    { name: 'average', value: 286 },
                    { name: 'count', value: 276 },
                    { name: 'distinct', value: 296 },
                    { name: 'div', value: 596 },
                    { name: 'eq', value: 596 },
                    { name: 'fn', value: 466 },
                    { name: 'gt', value: 606 },
                    { name: 'gte', value: 626 },
                    { name: 'iff', value: 746 },
                    { name: 'isa', value: 466 },
                    { name: 'lt', value: 596 },
                    { name: 'lte', value: 616 },
                    { name: 'max', value: 286 },
                    { name: 'min', value: 286 },
                    { name: 'mod', value: 596 },
                    { name: 'mul', value: 606 },
                    { name: 'neq', value: 596 },
                    { name: 'not', value: 386 },
                    { name: 'or', value: 326 },
                    { name: 'orderby', value: 306 },
                    { name: 'range', value: 776 },
                    { name: 'select', value: 296 },
                    { name: 'stddev', value: 366 },
                    { name: 'sub', value: 606 },
                    { name: 'sum', value: 286 },
                    { name: 'update', value: 306 },
                    { name: 'variance', value: 336 },
                    { name: 'where', value: 296 },
                    { name: 'xor', value: 356 },
                    { name: 'x_x', value: 266 },
                  ],
                },
                { name: 'Minimum', value: 846 },
                { name: 'Not', value: 1556 },
                { name: 'Or', value: 976 },
                { name: 'Query', value: 13896 },
                { name: 'Range', value: 1596 },
                { name: 'StringUtil', value: 4136 },
                { name: 'Sum', value: 796 },
                { name: 'Variable', value: 1126 },
                { name: 'Variance', value: 1876 },
                { name: 'Xor', value: 1106 },
              ],
            },
            {
              name: 'scale',
              children: [
                { name: 'IScaleMap', value: 2106 },
                { name: 'LinearScale', value: 1316 },
                { name: 'LogScale', value: 3156 },
                { name: 'OrdinalScale', value: 3776 },
                { name: 'QuantileScale', value: 2436 },
                { name: 'QuantitativeScale', value: 4839 },
                { name: 'RootScale', value: 1766 },
                { name: 'Scale', value: 4268 },
                { name: 'ScaleType', value: 1821 },
                { name: 'TimeScale', value: 5843 },
              ],
            },
          ],
        },
      ],
    },
  ],
};

