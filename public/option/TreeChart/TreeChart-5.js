const option = {
  theme: 'light',
  // 图表类型(线型树图)
  type: 'LineTreeChart',
  // padding控制图表距离容器的上、右、下、左padding值
  padding: [80, 20, 150, 20],
  // 树图的起点方向,仅type为LineTreeChart有效,取值'left','right','top','bottom',默认值'left'
  direction: 'top',
  // 图元的大小,默认值10
  symbolSize: 10,
  // 连线的形状,仅type为LineTreeChart有效,'curve'或'polyline',默认值'curve'
  lineType: 'curve',
  // 初始树图的展开层级,最小值为1,默认值1
  initialTreeDepth: 2,
  data: [
    {
      name: '节点5',
      data: [
        {
          name: 'flare',
          children: [
            {
              name: 'data5',
              children: [
                {
                  name: 'converters',
                  children: [
                    { name: 'Converters', value: 725 },
                    { name: 'DelimitedTextConverter', value: 4295 },
                  ],
                },
                {
                  name: 'DataUtil',
                  value: 3325,
                },
              ],
            },
            {
              name: 'display',
              children: [
                { name: 'DirtySprite', value: 8835 },
                { name: 'LineSprite', value: 1735 },
                { name: 'RectSprite', value: 3625 },
              ],
            },
            {
              name: 'flex',
              children: [{ name: 'FlareVis', value: 4115 }],
            },
            {
              name: 'query',
              children: [
                { name: 'AggregateExpression', value: 1615 },
                { name: 'And', value: 1025 },
                { name: 'Arithmetic', value: 3895 },
                { name: 'Average', value: 895 },
                { name: 'BinaryExpression', value: 2895 },
                { name: 'Comparison', value: 5105 },
                { name: 'CompositeExpression', value: 3675 },
                { name: 'Count', value: 785 },
                { name: 'DateUtil', value: 4145 },
                { name: 'Distinct', value: 935 },
                { name: 'Expression', value: 5135 },
                { name: 'ExpressionIterator', value: 3615 },
                { name: 'Fn', value: 3245 },
                { name: 'If', value: 2735 },
                { name: 'IsA', value: 2035 },
                { name: 'Literal', value: 1215 },
                { name: 'Match', value: 3745 },
                { name: 'Maximum', value: 845 },
                {
                  name: 'methods',
                  children: [
                    { name: 'add', value: 595 },
                    { name: 'and', value: 335 },
                    { name: 'average', value: 285 },
                    { name: 'count', value: 275 },
                    { name: 'distinct', value: 295 },
                    { name: 'div', value: 595 },
                    { name: 'eq', value: 595 },
                    { name: 'fn', value: 465 },
                    { name: 'gt', value: 605 },
                    { name: 'gte', value: 625 },
                    { name: 'iff', value: 745 },
                    { name: 'isa', value: 465 },
                    { name: 'lt', value: 595 },
                    { name: 'lte', value: 615 },
                    { name: 'max', value: 285 },
                    { name: 'min', value: 285 },
                    { name: 'mod', value: 595 },
                    { name: 'mul', value: 605 },
                    { name: 'neq', value: 595 },
                    { name: 'not', value: 385 },
                    { name: 'or', value: 325 },
                    { name: 'orderby', value: 305 },
                    { name: 'range', value: 775 },
                    { name: 'select', value: 295 },
                    { name: 'stddev', value: 365 },
                    { name: 'sub', value: 605 },
                    { name: 'sum', value: 285 },
                    { name: 'update', value: 305 },
                    { name: 'variance', value: 335 },
                    { name: 'where', value: 295 },
                    { name: 'xor', value: 355 },
                    { name: 'x_x', value: 265 },
                  ],
                },
                { name: 'Minimum', value: 845 },
                { name: 'Not', value: 1555 },
                { name: 'Or', value: 975 },
                { name: 'Query', value: 13895 },
                { name: 'Range', value: 1595 },
                { name: 'StringUtil', value: 4135 },
                { name: 'Sum', value: 795 },
                { name: 'Variable', value: 1125 },
                { name: 'Variance', value: 1875 },
                { name: 'Xor', value: 1105 },
              ],
            },
            {
              name: 'scale',
              children: [
                { name: 'IScaleMap', value: 2105 },
                { name: 'LinearScale', value: 1315 },
                { name: 'LogScale', value: 3155 },
                { name: 'OrdinalScale', value: 3775 },
                { name: 'QuantileScale', value: 2435 },
                { name: 'QuantitativeScale', value: 4835 },
                { name: 'RootScale', value: 1755 },
                { name: 'Scale', value: 4265 },
                { name: 'ScaleType', value: 1825 },
                { name: 'TimeScale', value: 5835 },
              ],
            },
          ],
        },
      ],
    },
  ],
};

