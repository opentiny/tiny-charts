const option = {
  theme: 'light',
  chartPosition: ['center', 'center'],
  // force:力引导布局
  // repulsion:调整节点间距
  // gravity:聚合树图密集度，可选值0-1，值越大越密集
  // edgeLength：设置节点间连线长度
  // layoutAnimation：开启布局迭代动画
  // friction：树趋近率，可选值0-1，值越小越趋近树图结构
  force: {
    repulsion: 10,
    gravity: 0.12,
    edgeLength: [16, 28],
    layoutAnimation: false,
    friction: 0.05,
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
