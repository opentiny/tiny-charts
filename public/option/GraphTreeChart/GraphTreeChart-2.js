const option = {
  theme: 'light',
  chartPosition: ['center', 'center'],
  // categories:设置节点样式，顺序不可颠倒,且length至少为3。如果某个部分不需要调整，在对应位置写{}
  // 索引为0---根节点样式
  // 索引为1---全部子节点样式
  // 索引为length-1---虚拟节点样式（默认为方形小黄块），正常虚拟节点和箭头之间是有一点间隙的，箭头和虚拟节点都是path路径实现的，且虚拟节点的symbolSize为20。如果需要调整虚拟节点的symbolSize和symbol，箭头可能也要进行修正
  categories: [
    {
      symbolSize: 12,
      symbole: 'circle',
      itemStyle: {
        color: '#dfba3f'
      }
    },
    {
      symbolSize: 12,
      symbole: 'circle',
      itemStyle: {
        color: '#939393'
      }
    },
    {
    },
  ],
  // 设置节点连线符号
  // 索引为0---子节点指向父节点
  // 索引为1---父节点指向子节点
  edgeSymbol: ['none', 'none'],
  // 设置节点连线样式
  lineStyle: {
    type: 'dashed',
    width: 1,
    color: '#939393',
    opacity: 1
  },
  data: [
    {
      name: 'Z',
      children: [
        {
          name: 'A',
          children: [
            { name: 'A1', children: [] },
            {
              name: 'A2',
              children: [
                { name: 'A2-1', children: [] },
                {
                  name: 'A2-2', children: [
                    { name: 'A2-2-1', children: [] },
                    { name: 'A2-2-2', children: [] },
                    { name: 'A2-2-3', children: [] }
                  ]
                },
                { name: 'A2-3', children: [] },
                { name: 'A2-4', children: [] },
              ]
            },
            {
              name: 'A3',
              children: [
                { name: 'A3-1', children: [] },
                { name: 'A3-2', children: [] },
                { name: 'A3-3', children: [] }
              ]
            }
          ]
        },
        {
          name: 'B',
          children: [
            {
              name: 'B1', children: [
                { name: 'B1-1', children: [] },
                {
                  name: 'B1-2', children: [
                    { name: 'B1-2-1', children: [] }
                  ]
                },
                { name: 'B1-3', children: [] },
                { name: 'B1-4', children: [] },
              ]
            },
          ]
        },
        {
          name: 'C',
          children: [
            {
              name: 'C1', children: [
                {
                  name: 'C1-1', children: [
                    {
                      name: 'C1-1-1', children: [
                        { name: 'C1-1-1-1', children: [] },
                        { name: 'C1-1-1-2', children: [] }
                      ]
                    }
                  ]
                },
                {
                  name: 'C1-2', children: [
                    {
                      name: 'C1-2-1', children: [
                        { name: 'C1-2-1-1', children: [] }
                      ]
                    }
                  ]
                }
              ]
            },
          ]
        },
      ]
    },
    {
      name: 'Z', children: [
        { name: 'D', children: [] }
      ]
    },
    {
      name: 'Z', children: [
        {
          name: 'E', children: [
            {
              name: 'E1', children: [
                { name: 'E1-1', children: [] },
                { name: 'E1-2', children: [] },
                {
                  name: 'E1-3', children: [
                    {
                      name: 'E1-3-1', children: [
                        { name: 'E1-3-1-1', children: [] },
                        { name: 'E1-3-1-2', children: [] },
                        { name: 'E1-3-1-3', children: [] }
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        },
        {
          name: 'F', children: [
            {
              name: 'F1', children: [
                { name: 'F1-1', children: [] },
                { name: 'F1-2', children: [] },
                { name: 'F1-3', children: [] },
                {
                  name: 'F1-4', children: [
                    { name: 'F1-4-1', children: [] },
                    { name: 'F1-4-2', children: [] },
                    { name: 'F1-4-3', children: [] }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Z', children: [
        {
          name: 'G', children: [
            {
              name: 'G1', children: [
                { name: 'G1-1', children: [] },
                { name: 'G1-2', children: [] },
                { name: 'G1-3', children: [] }
              ]
            }
          ]
        },
        {
          name: 'H', children: [
            {
              name: 'H1', children: [
                {
                  name: 'H1-1', children: [
                    { name: 'H1-1-1', children: [] },
                    { name: 'H1-1-2', children: [] }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'I', children: [
            {
              name: 'I1', children: [
                {
                  name: 'I1-1', children: [
                    { name: 'I1-1-1', children: [] },
                    {
                      name: 'I1-1-2', children: [
                        { name: 'I1-1-2-1', children: [] },
                        { name: 'I1-1-2-2', children: [] },
                        { name: 'I1-1-2-3', children: [] }
                      ]
                    },
                    {
                      name: 'I1-1-3', children: [
                        {
                          name: 'I1-1-3-1', children: [
                            { name: 'I1-1-3-1-1', children: [] },
                            { name: 'I1-1-3-1-2', children: [] }
                          ]
                        }
                      ]
                    },
                    { name: 'I1-1-4', children: [] },
                  ]
                }
              ]
            },
            { name: 'I2', children: [] }
          ]
        }
      ]
    },
    {
      name: 'Z', children: [
        {
          name: 'J', children: [
            { name: 'J1', children: [] },
            { name: 'J2', children: [] },
            { name: 'J3', children: [] },
          ]
        }
      ]
    },
    {
      name: 'Z', children: [
        {
          name: 'K', children: [
            { name: 'K1', children: [] },
            {
              name: 'K2', children: [
                {
                  name: 'K2-1', children: [
                    {
                      name: 'K2-1-1', children: [
                        { name: 'K2-1-1-1', children: [] }
                      ]
                    }
                  ]
                },
                { name: 'K2-2', children: [] },
                { name: 'K2-3', children: [] },
                { name: 'K2-4', children: [] },
                {
                  name: 'K2-5', children: [
                    { name: 'K2-5-1', children: [] }
                  ]
                },
                {
                  name: 'K2-6', children: [
                    { name: 'K2-6-1', children: [] },
                    { name: 'K2-6-2', children: [] },
                    { name: 'K2-6-3', children: [] }
                  ]
                }
              ]
            },
          ]
        },
        {
          name: 'L', children: [
            {
              name: 'L1', children: [
                { name: 'L1-1', children: [] },
                { name: 'L1-2', children: [] },
                { name: 'L1-3', children: [] },
              ]
            },
          ]
        }
      ]
    },
    {
      name: 'Z', children: [
        {
          name: 'M', children: [
            {
              name: 'M1', children: [
                {
                  name: 'M1-1', children: [
                    { name: 'M1-1-1', children: [] },
                    {
                      name: 'M1-1-2', children: [
                        { name: 'M1-1-2-1', children: [] },
                        { name: 'M1-1-2-2', children: [] },
                        { name: 'M1-1-2-3', children: [] },
                        { name: 'M1-1-2-4', children: [] },
                      ]
                    },
                  ]
                },
              ]
            },
            { name: 'M2', children: [] },
          ]
        },
        {
          name: 'N', children: [
            {
              name: 'N1', children: [
                {
                  name: 'N1-1', children: [
                    { name: 'N1-1-1', children: [] },
                    { name: 'N1-1-2', children: [] },
                    { name: 'N1-1-3', children: [] },
                    { name: 'N1-1-4', children: [] },
                  ]
                },
                { name: 'N1-2', children: [] }
              ]
            },
            { name: 'N2', children: [] }
          ]
        },
        {
          name: 'O', children: [
            { name: 'O1', children: [] },
            { name: 'O2', children: [] },
            { name: 'O3', children: [] },
            { name: 'O4', children: [] },
            { name: 'O5', children: [] },
          ]
        }
      ]
    },
    {
      name: 'Z', children: [
        {
          name: 'P', children: [
            {
              name: 'P1', children: [
                { name: 'P1-1', children: [] },
                {
                  name: 'P1-2', children: [
                    { name: 'P1-2-1', children: [] },
                    { name: 'P1-2-2', children: [] },
                  ]
                },
                { name: 'P1-3', children: [] },
              ]
            },
            { name: 'P2', children: [] },
          ]
        }
      ]
    },
    {
      name: 'Z', children: [
        {
          name: 'Q', children: [
            {
              name: 'Q1', children: [
                {
                  name: 'Q1-1', children: [
                    { name: 'Q1-1-1', children: [] },
                    { name: 'Q1-1-2', children: [] },
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'R', children: [
            { name: 'R1', children: [] },
            { name: 'R2', children: [] },
            { name: 'R3', children: [] },
          ]
        }
      ]
    }
  ],
};
