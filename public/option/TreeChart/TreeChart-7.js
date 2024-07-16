const option = {
  theme: 'light',
  // 图表类型(线型树图)
  type: 'LineTreeChart',
  // padding控制图表距离容器的上、右、下、左padding值
  padding: [20, 150, 20, 150],
  tooltip: {
    formatter: (params, ticket, callback) => {
      const data = params.data;
      const name = data.name;
      const value = data.value;
      let htmlString = '<div style="margin-bottom:4px;">提示框</div>';
      htmlString += `${'<div style="margin-bottom:4px;">' +
        '<span>'}${name}</span>` +
        '</div>';
      if (value) {
        htmlString += `${'<div style="margin-bottom:4px;">' +
          '<span style="display:inline-block;margin-right:8px;min-width:60px;">Value</span>' +
          '<span>'}${value}</span>` +
          '</div>';
      }
      return htmlString
    }
  },
  // 树图的起点方向,仅type为LineTreeChart有效,取值'left','right','top','bottom',默认值'left'
  direction: 'left',
  // 图元的大小,默认值10
  symbolSize: 10,
  // 连线的形状,仅type为LineTreeChart有效,'curve'或'polyline',默认值'curve'
  lineType: 'curve',
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
          name: 'flare7',
          children: [
            {
              name: 'data7',
              children: [
                {
                  name: 'Converter',
                  children: [
                    { name: 'Converters', value: 722 },
                    { name: 'DelimitedTextConverter', value: 4295 },
                  ],
                },
                {
                  name: 'DataUtil',
                  value: 3327,
                },
              ],
            },
            {
              name: 'display',
              children: [
                { name: 'DirtySprite', value: 8837 },
                { name: 'LineSprite', value: 1772 },
                { name: 'RectSprite', value: 3677 },
              ],
            },
            {
              name: 'flex',
              children: [{ name: 'FlareVis', value: 4776 }],
            },
            {
              name: 'query',
              children: [
                { name: 'AggregateExpression', value: 1611 },
                { name: 'And', value: 1027 },
                { name: 'Arithmetic', value: 3892 },
                { name: 'Average', value: 891 },
                { name: 'BinaryExpression', value: 2893 },
                { name: 'Comparison', value: 5104 },
                { name: 'CompositeExpression', value: 3677 },
                { name: 'Count', value: 782 },
                { name: 'DateUtil', value: 4141 },
                { name: 'Distinct', value: 935 },
                { name: 'Expression', value: 5130 },
                { name: 'ExpressionIterator', value: 3618 },
                { name: 'Fn', value: 3241 },
                { name: 'If', value: 2732 },
                { name: 'IsA', value: 2039 },
                { name: 'Literal', value: 1215 },
                { name: 'Match', value: 3748 },
                { name: 'Maximum', value: 844 },
                {
                  name: 'methods',
                  children: [
                    { name: 'add', value: 594 },
                    { name: 'and', value: 330 },
                    { name: 'average', value: 287 },
                    { name: 'count', value: 272 },
                    { name: 'distinct', value: 292 },
                    { name: 'div', value: 595 },
                    { name: 'eq', value: 595 },
                    { name: 'fn', value: 461 },
                    { name: 'gt', value: 603 },
                    { name: 'gte', value: 625 },
                    { name: 'iff', value: 748 },
                    { name: 'isa', value: 462 },
                    { name: 'lt', value: 597 },
                    { name: 'lte', value: 629 },
                    { name: 'max', value: 283 },
                    { name: 'min', value: 284 },
                    { name: 'mod', value: 591 },
                    { name: 'mul', value: 613 },
                    { name: 'neq', value: 599 },
                    { name: 'not', value: 366 },
                    { name: 'or', value: 323 },
                    { name: 'orderby', value: 307 },
                    { name: 'range', value: 772 },
                    { name: 'select', value: 286 },
                    { name: 'stddev', value: 363 },
                    { name: 'sub', value: 601 },
                    { name: 'sum', value: 280 },
                    { name: 'update', value: 308 },
                    { name: 'variance', value: 335 },
                    { name: 'where', value: 289 },
                    { name: 'xor', value: 354 },
                    { name: 'x_x', value: 265 },
                  ],
                },
                { name: 'Minimum', value: 844 },
                { name: 'Not', value: 1554 },
                { name: 'Or', value: 971 },
                { name: 'Query', value: 13896 },
                { name: 'Range', value: 1595 },
                { name: 'StringUtil', value: 4131 },
                { name: 'Sum', value: 791 },
                { name: 'Variable', value: 1125 },
                { name: 'Variance', value: 1876 },
                { name: 'Xor', value: 1102 },
              ],
            },
            {
              name: 'scale',
              children: [
                { name: 'IScaleMap', value: 2106 },
                { name: 'LinearScale', value: 1316 },
                { name: 'LogScale', value: 3152 },
                { name: 'OrdinalScale', value: 3770 },
                { name: 'QuantileScale', value: 2433 },
                { name: 'QuantitativeScale', value: 4839 },
                { name: 'RootScale', value: 1757 },
                { name: 'Scale', value: 4268 },
                { name: 'ScaleType', value: 1822 },
                { name: 'TimeScale', value: 5835 },
              ],
            },
          ],
        },
      ],
    },
  ],
};






