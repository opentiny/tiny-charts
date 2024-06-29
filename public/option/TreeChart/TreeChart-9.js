const option = {
  theme: 'light',
  // 图表类型(环型树图)
  type: 'RingTreeChart',
  // padding控制图表距离容器的上、右、下、左padding值
  padding: [100, 150, 100, 150],
  // 图元的大小,默认值10
  symbolSize: 10,
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
              name: 'data9',
              children: [
                {
                  name: 'converters',
                  children: [
                    { name: 'Converters', value: 731 },
                    { name: 'DelimitedTextConverter', value: 4254 },
                  ],
                },
                {
                  name: 'DataUtil',
                  value: 3329,
                },
              ],
            },
            {
              name: 'display',
              children: [
                { name: 'DirtySprite', value: 8993 },
                { name: 'LineSprite', value: 1992 },
                { name: 'RectSprite', value: 3693 },
              ],
            },
            {
              name: 'flex',
              children: [{ name: 'FlareVis', value: 4196 }],
            },
            {
              name: 'query',
              children: [
                { name: 'AggregateExpression', value: 1916 },
                { name: 'And', value: 1037 },
                { name: 'Arithmetic', value: 3891 },
                { name: 'Average', value: 891 },
                { name: 'BinaryExpression', value: 2853 },
                { name: 'Comparison', value: 5103 },
                { name: 'CompositeExpression', value: 3677 },
                { name: 'Count', value: 782 },
                { name: 'DateUtil', value: 4141 },
                { name: 'Distinct', value: 933 },
                { name: 'Expression', value: 5132 },
                { name: 'ExpressionIterator', value: 3617 },
                { name: 'Fn', value: 3240 },
                { name: 'If', value: 2733 },
                { name: 'IsA', value: 2039 },
                { name: 'Literal', value: 1215 },
                { name: 'Match', value: 3748 },
                { name: 'Maximum', value: 843 },
                {
                  name: 'methods',
                  children: [
                    { name: 'add', value: 593 },
                    { name: 'and', value: 331 },
                    { name: 'average', value: 287 },
                    { name: 'count', value: 277 },
                    { name: 'distinct', value: 293 },
                    { name: 'div', value: 595 },
                    { name: 'eq', value: 594 },
                    { name: 'fn', value: 461 },
                    { name: 'gt', value: 603 },
                    { name: 'gte', value: 625 },
                    { name: 'iff', value: 758 },
                    { name: 'isa', value: 461 },
                    { name: 'lt', value: 597 },
                    { name: 'lte', value: 629 },
                    { name: 'max', value: 283 },
                    { name: 'min', value: 283 },
                    { name: 'mod', value: 592 },
                    { name: 'mul', value: 603 },
                    { name: 'neq', value: 599 },
                    { name: 'not', value: 385 },
                    { name: 'or', value: 323 },
                    { name: 'orderby', value: 307 },
                    { name: 'range', value: 773 },
                    { name: 'select', value: 296 },
                    { name: 'stddev', value: 363 },
                    { name: 'sub', value: 601 },
                    { name: 'sum', value: 280 },
                    { name: 'update', value: 307 },
                    { name: 'variance', value: 335 },
                    { name: 'where', value: 219 },
                    { name: 'xor', value: 354 },
                    { name: 'x_x', value: 265 },
                  ],
                },
                { name: 'Minimum', value: 843 },
                { name: 'Not', value: 1564 },
                { name: 'Or', value: 970 },
                { name: 'Query', value: 13896 },
                { name: 'Range', value: 1594 },
                { name: 'StringUtil', value: 4130 },
                { name: 'Sum', value: 792 },
                { name: 'Variable', value: 1124 },
                { name: 'Variance', value: 1876 },
                { name: 'Xor', value: 1111 },
              ],
            },
            {
              name: 'scale',
              children: [
                { name: 'IScaleMap', value: 2115 },
                { name: 'LinearScale', value: 1316 },
                { name: 'LogScale', value: 3141 },
                { name: 'OrdinalScale', value: 3770 },
                { name: 'QuantileScale', value: 2425 },
                { name: 'QuantitativeScale', value: 4839 },
                { name: 'RootScale', value: 1766 },
                { name: 'Scale', value: 4268 },
                { name: 'ScaleType', value: 1831 },
                { name: 'TimeScale', value: 5831 },
              ],
            },
          ],
        },
      ],
    },
  ],
};

