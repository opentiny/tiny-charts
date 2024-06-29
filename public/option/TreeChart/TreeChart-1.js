const option = {
  theme: 'light',
  // 图表类型(线型树图)
  type: 'LineTreeChart',
  // padding控制图表距离容器的上、右、下、左padding值
  padding: [20, 150, 20, 150],
	// 图元的大小,默认值10 
  symbolSize: 10,
  // 连线的形状,仅type为LineTreeChart有效,'curve'或'polyline',默认值'curve'
  lineType: 'curve',
  // 初始树图的展开层级,最小值为1,默认值1
  initialTreeDepth: 2,
  // 树图的起点方向,仅type为LineTreeChart有效,取值'left','right','top','bottom',默认值'left'
  direction: 'left',
  data: [
    {
      name:'节点',
      data:[{
        name: 'flares',
        children: [
          {
            name: 'datas',
            children: [
              {
                name: 'converters',
                children: [
                  { name: 'Converters', value: 721 },
                  { name: 'DelimitedTextConverter', value: 4291 },
                ],
              },
              {
                name: 'DataUtil',
                value: 3321,
              },
            ],
          },
          {
            name: 'display',
            children: [
              { name: 'DirtySprite', value: 8831 },
              { name: 'LineSprite', value: 1731 },
              { name: 'RectSprite', value: 3621 },
            ],
          },
          {
            name: 'flex',
            children: [{ name: 'FlareVis', value: 4111 }],
          },
          {
            name: 'query',
            children: [
              { name: 'AggregateExpression', value: 1611 },
              { name: 'And', value: 1021 },
              { name: 'Arithmetic', value: 3891 },
              { name: 'Average', value: 891 },
              { name: 'BinaryExpression', value: 2891 },
              { name: 'Comparison', value: 5101 },
              { name: 'CompositeExpression', value: 3671 },
              { name: 'Count', value: 781 },
              { name: 'DateUtil', value: 4141 },
              { name: 'Distinct', value: 931 },
              { name: 'Expression', value: 5131 },
              { name: 'ExpressionIterator', value: 3611 },
              { name: 'Fn', value: 3241 },
              { name: 'If', value: 2731 },
              { name: 'IsA', value: 2031 },
              { name: 'Literal', value: 1211 },
              { name: 'Match', value: 3741 },
              { name: 'Maximum', value: 841 },
              {
                name: 'methods',
                children: [
                  { name: 'add', value: 591 },
                  { name: 'and', value: 331 },
                  { name: 'average', value: 281 },
                  { name: 'count', value: 271 },
                  { name: 'distinct', value: 291 },
                  { name: 'div', value: 591 },
                  { name: 'eq', value: 591 },
                  { name: 'fn', value: 461 },
                  { name: 'gt', value: 601 },
                  { name: 'gte', value: 621 },
                  { name: 'iff', value: 741 },
                  { name: 'isa', value: 461 },
                  { name: 'lt', value: 591 },
                  { name: 'lte', value: 611 },
                  { name: 'max', value: 281 },
                  { name: 'min', value: 281 },
                  { name: 'mod', value: 591 },
                  { name: 'mul', value: 601 },
                  { name: 'neq', value: 591 },
                  { name: 'not', value: 381 },
                  { name: 'or', value: 321 },
                  { name: 'orderby', value: 301 },
                  { name: 'range', value: 771 },
                  { name: 'select', value: 291 },
                  { name: 'stddev', value: 361 },
                  { name: 'sub', value: 601 },
                  { name: 'sum', value: 281 },
                  { name: 'update', value: 301 },
                  { name: 'variance', value: 331 },
                  { name: 'where', value: 291 },
                  { name: 'xor', value: 351 },
                  { name: 'x_x', value: 261 },
                ],
              },
              { name: 'Minimum', value: 841 },
              { name: 'Not', value: 1551 },
              { name: 'Or', value: 971 },
              { name: 'Query', value: 13891 },
              { name: 'Range', value: 1591 },
              { name: 'StringUtil', value: 4131 },
              { name: 'Sum', value: 791 },
              { name: 'Variable', value: 1121 },
              { name: 'Variance', value: 1871 },
              { name: 'Xor', value: 1101 },
            ],
          },
          {
            name: 'scale',
            children: [
              { name: 'IScaleMap', value: 2101 },
              { name: 'LinearScale', value: 1311 },
              { name: 'LogScale', value: 3151 },
              { name: 'OrdinalScale', value: 3771 },
              { name: 'QuantileScale', value: 2431 },
              { name: 'QuantitativeScale', value: 4831 },
              { name: 'RootScale', value: 1751 },
              { name: 'Scale', value: 4261 },
              { name: 'ScaleType', value: 1821 },
              { name: 'TimeScale', value: 5831 },
            ],
          },
        ],
      }],
    },
  ],
};

