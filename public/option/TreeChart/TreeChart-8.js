const option = {
  theme: 'light',
  // 图表类型(线型树图)
  type: 'LineTreeChart',
  // padding控制图表距离容器的上、右、下、左padding值
  padding: [20, 150, 20, 150],
  // 树图的起点方向,仅type为LineTreeChart有效,取值'left','right','top','bottom',默认值'left'
  direction: 'left',
  // 图元的大小,默认值10
  symbolSize: 10,
  // 连线的形状,仅type为LineTreeChart有效,'curve'或'polyline',默认值'curve'
  lineType: 'polyline',
  // 初始树图的展开层级,最小值为1,默认值1
  initialTreeDepth: 2,
  // data数据采用树状结构
  // name:节点的名称
  // value:节点的数值
  // children: 子节点
  data: [
    {
      name: '节点',
      data: [
        {
          name: 'flare',
          children: [
            {
              name: 'data8',
              children: [
                {
                  name: 'converters',
                  children: [
                    { name: 'Converters', value: 791 },
                    { name: 'DelimitedTextConverter', value: 4224 },
                  ],
                },
                {
                  name: 'DataUtil',
                  value: 3328,
                },
              ],
            },
            {
              name: 'display',
              children: [
                { name: 'DirtySprite', value: 8883 },
                { name: 'LineSprite', value: 1882 },
                { name: 'RectSprite', value: 3883 },
              ],
            },
            {
              name: 'flex',
              children: [{ name: 'FlareVis', value: 4886 }],
            },
            {
              name: 'query',
              children: [
                { name: 'AggregateExpression', value: 1886 },
                { name: 'And', value: 1027 },
                { name: 'Arithmetic', value: 3891 },
                { name: 'Average', value: 892 },
                { name: 'BinaryExpression', value: 2293 },
                { name: 'Comparison', value: 5123 },
                { name: 'CompositeExpression', value: 3677 },
                { name: 'Count', value: 783 },
                { name: 'DateUtil', value: 4141 },
                { name: 'Distinct', value: 933 },
                { name: 'Expression', value: 5230 },
                { name: 'ExpressionIterator', value: 3617 },
                { name: 'Fn', value: 3240 },
                { name: 'If', value: 2722 },
                { name: 'IsA', value: 2039 },
                { name: 'Literal', value: 1214 },
                { name: 'Match', value: 3728 },
                { name: 'Maximum', value: 843 },
                {
                  name: 'methods',
                  children: [
                    { name: 'add', value: 523 },
                    { name: 'and', value: 330 },
                    { name: 'average', value: 287 },
                    { name: 'count', value: 227 },
                    { name: 'distinct', value: 292 },
                    { name: 'div', value: 595 },
                    { name: 'eq', value: 594 },
                    { name: 'fn', value: 420 },
                    { name: 'gt', value: 603 },
                    { name: 'gte', value: 625 },
                    { name: 'iff', value: 728 },
                    { name: 'isa', value: 461 },
                    { name: 'lt', value: 597 },
                    { name: 'lte', value: 619 },
                    { name: 'max', value: 283 },
                    { name: 'min', value: 223 },
                    { name: 'mod', value: 591 },
                    { name: 'mul', value: 603 },
                    { name: 'neq', value: 599 },
                    { name: 'not', value: 326 },
                    { name: 'or', value: 323 },
                    { name: 'orderby', value: 327 },
                    { name: 'range', value: 772 },
                    { name: 'select', value: 296 },
                    { name: 'stddev', value: 323 },
                    { name: 'sub', value: 600 },
                    { name: 'sum', value: 280 },
                    { name: 'update', value: 307 },
                    { name: 'variance', value: 325 },
                    { name: 'where', value: 299 },
                    { name: 'xor', value: 352 },
                    { name: 'x_x', value: 264 },
                  ],
                },
                { name: 'Minimum', value: 842 },
                { name: 'Not', value: 1554 },
                { name: 'Or', value: 972 },
                { name: 'Query', value: 13896 },
                { name: 'Range', value: 1524 },
                { name: 'StringUtil', value: 4230 },
                { name: 'Sum', value: 791 },
                { name: 'Variable', value: 1124 },
                { name: 'Variance', value: 1826 },
                { name: 'Xor', value: 1121 },
              ],
            },
            {
              name: 'scale',
              children: [
                { name: 'IScaleMap', value: 2125 },
                { name: 'LinearScale', value: 1326 },
                { name: 'LogScale', value: 3151 },
                { name: 'OrdinalScale', value: 3720 },
                { name: 'QuantileScale', value: 2435 },
                { name: 'QuantitativeScale', value: 4829 },
                { name: 'RootScale', value: 1752 },
                { name: 'Scale', value: 4268 },
                { name: 'ScaleType', value: 1821 },
                { name: 'TimeScale', value: 5823 },
              ],
            },
          ],
        },
      ],
    },
  ],
};

