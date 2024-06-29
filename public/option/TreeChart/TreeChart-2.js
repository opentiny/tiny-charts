const option = {
  theme: 'light',
  // 图表类型(线型树图)
  type: 'LineTreeChart',
  // padding控制图表距离容器的上、右、下、左padding值
  padding: [20, 300, 20, 250],
  // 树图的起点方向,仅type为LineTreeChart有效,取值'left','right','top','bottom',默认值'left'
  direction: 'left',
  // 图元的大小,默认值10
  symbolSize: 10,
  // 连线的形状,仅type为LineTreeChart有效,'curve'或'polyline',默认值'curve'
  lineType: 'curve',
  // 初始树图的展开层级,最小值为1,默认值1
  initialTreeDepth: 2,
  data: [
    {
      name:'节点',
      data:[{
        name: 'flare',
        children: [
          {
            name: 'data2',
            children: [
              {
                name: 'converters',
                children: [
                  { name: 'Converters', value: 722 },
                  { name: 'DelimitedTextConverter', value: 4292 },
                ],
              },
              {
                name: 'DataUtil',
                value: 3322,
              },
            ],
          },
          {
            name: 'display',
            children: [
              { name: 'DirtySprite', value: 8832 },
              { name: 'LineSprite', value: 1732 },
              { name: 'RectSprite', value: 3622 },
            ],
          },
          {
            name: 'flex',
            children: [{ name: 'FlareVis', value: 4112 }],
          },
          {
            name: 'query',
            children: [
              { name: 'AggregateExpression', value: 1612 },
              { name: 'And', value: 1022 },
              { name: 'Arithmetic', value: 3892 },
              { name: 'Average', value: 892 },
              { name: 'BinaryExpression', value: 2892 },
              { name: 'Comparison', value: 5102 },
              { name: 'CompositeExpression', value: 3672 },
              { name: 'Count', value: 782 },
              { name: 'DateUtil', value: 4142 },
              { name: 'Distinct', value: 932 },
              { name: 'Expression', value: 5132 },
              { name: 'ExpressionIterator', value: 3612 },
              { name: 'Fn', value: 3242 },
              { name: 'If', value: 2732 },
              { name: 'IsA', value: 2032 },
              { name: 'Literal', value: 1212 },
              { name: 'Match', value: 3742 },
              { name: 'Maximum', value: 842 },
              {
                name: 'methods',
                children: [
                  { name: 'add', value: 592 },
                  { name: 'and', value: 332 },
                  { name: 'average', value: 282 },
                  { name: 'count', value: 272 },
                  { name: 'distinct', value: 292 },
                  { name: 'div', value: 592 },
                  { name: 'eq', value: 592 },
                  { name: 'fn', value: 462 },
                  { name: 'gt', value: 602 },
                  { name: 'gte', value: 622 },
                  { name: 'iff', value: 742 },
                  { name: 'isa', value: 462 },
                  { name: 'lt', value: 592 },
                  { name: 'lte', value: 612 },
                  { name: 'max', value: 282 },
                  { name: 'min', value: 282 },
                  { name: 'mod', value: 592 },
                  { name: 'mul', value: 602 },
                  { name: 'neq', value: 592 },
                  { name: 'not', value: 382 },
                  { name: 'or', value: 322 },
                  { name: 'orderby', value: 302 },
                  { name: 'range', value: 772 },
                  { name: 'select', value: 292 },
                  { name: 'stddev', value: 362 },
                  { name: 'sub', value: 602 },
                  { name: 'sum', value: 282 },
                  { name: 'update', value: 302 },
                  { name: 'variance', value: 332 },
                  { name: 'where', value: 292 },
                  { name: 'xor', value: 352 },
                  { name: 'x_x', value: 262 },
                ],
              },
              { name: 'Minimum', value: 842 },
              { name: 'Not', value: 1552 },
              { name: 'Or', value: 972 },
              { name: 'Query', value: 13892 },
              { name: 'Range', value: 1592 },
              { name: 'StringUtil', value: 4132 },
              { name: 'Sum', value: 792 },
              { name: 'Variable', value: 1122 },
              { name: 'Variance', value: 1872 },
              { name: 'Xor', value: 1102 },
            ],
          },
          {
            name: 'scale',
            children: [
              { name: 'IScaleMap', value: 2102 },
              { name: 'LinearScale', value: 1312 },
              { name: 'LogScale', value: 3152 },
              { name: 'OrdinalScale', value: 3772 },
              { name: 'QuantileScale', value: 2432 },
              { name: 'QuantitativeScale', value: 4832 },
              { name: 'RootScale', value: 1752 },
              { name: 'Scale', value: 4262 },
              { name: 'ScaleType', value: 1822 },
              { name: 'TimeScale', value: 5832 },
            ],
          },
        ],
      }],
    },
  ],
};

