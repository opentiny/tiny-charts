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
          name: 'a',
          children: [
            { name: 'a1', children: [] },
            {
              name: 'a2',
              children: [
                { name: 'a2-1', children: [] },
                {
                  name: 'a2-2', children: [
                    { name: 'a2-2-1', children: [] },
                    { name: 'a2-2-2', children: [] },
                    { name: 'a2-2-3', children: [] }
                  ]
                },
                { name: 'a2-3', children: [] },
                { name: 'a2-4', children: [] },
              ]
            },
            {
              name: 'a3',
              children: [
                { name: 'a3-1', children: [] },
                { name: 'a3-2', children: [] },
                { name: 'a3-3', children: [] }
              ]
            }
          ]
        },
        {
          name: 'b',
          children: [
            {
              name: 'b1', children: [
                { name: 'b1-1', children: [] },
                {
                  name: 'b1-2', children: [
                    { name: 'b1-2-1', children: [] }
                  ]
                },
                { name: 'b1-3', children: [] },
                { name: 'b1-4', children: [] },
              ]
            },
          ]
        },
        {
          name: 'c',
          children: [
            {
              name: 'c1', children: [
                {
                  name: 'c1-1', children: [
                    {
                      name: 'c1-1-1', children: [
                        { name: 'c1-1-1-1', children: [] },
                        { name: 'c1-1-1-2', children: [] }
                      ]
                    }
                  ]
                },
                {
                  name: 'c1-2', children: [
                    {
                      name: 'c1-2-1', children: [
                        { name: 'c1-2-1-1', children: [] }
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Z', children: [
        { name: 'd', children: [] }
      ]
    },
    {
      name: 'Z', children: [
        {
          name: 'e', children: [
            {
              name: 'e1', children: [
                { name: 'e1-1', children: [] },
                { name: 'e1-2', children: [] },
                {
                  name: 'e1-3', children: [
                    {
                      name: 'e1-3-1', children: [
                        { name: 'e1-3-1-1', children: [] },
                        { name: 'e1-3-1-2', children: [] },
                        { name: 'e1-3-1-3', children: [] }
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        },
        {
          name: 'f', children: [
            {
              name: 'f1', children: [
                { name: 'f1-1', children: [] },
                { name: 'f1-2', children: [] },
                { name: 'f1-3', children: [] },
                {
                  name: 'f1-4', children: [
                    { name: 'f1-4-1', children: [] },
                    { name: 'f1-4-2', children: [] },
                    { name: 'f1-4-3', children: [] }
                  ]
                }
              ]
            }
          ]
        },
      ]
    },
    {
      name: 'Z', children: [
        {
          name: 'g', children: [
            {
              name: 'g1', children: [
                { name: 'g1-1', children: [] },
                { name: 'g1-2', children: [] },
                { name: 'g1-3', children: [] }
              ]
            }
          ]
        },
        {
          name: 'h', children: [
            {
              name: 'h1', children: [
                {
                  name: 'h1-1', children: [
                    { name: 'h1-1-1', children: [] },
                    { name: 'h1-1-2', children: [] }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'i', children: [
            {
              name: 'i1', children: [
                {
                  name: 'i1-1', children: [
                    { name: 'i1-1-1', children: [] },
                    {
                      name: 'i1-1-2', children: [
                        { name: 'i1-1-2-1', children: [] },
                        { name: 'i1-1-2-2', children: [] },
                        { name: 'i1-1-2-3', children: [] }
                      ]
                    },
                    {
                      name: 'i1-1-3', children: [
                        {
                          name: 'i1-1-3-1', children: [
                            { name: 'i1-1-3-1-1', children: [] },
                            { name: 'i1-1-3-1-2', children: [] }
                          ]
                        }
                      ]
                    },
                    { name: 'i1-1-4', children: [] },
                  ]
                }
              ]
            },
            { name: 'i2', children: [] }
          ]
        }
      ]
    },
    {
      name: 'Z', children: [
        {
          name: 'j', children: [
            { name: 'j1', children: [] },
            { name: 'j2', children: [] },
            { name: 'j3', children: [] },
          ]
        }
      ]
    },
    {
      name: 'Z', children: [
        {
          name: 'k', children: [
            { name: 'k1', children: [] },
            {
              name: 'k2', children: [
                {
                  name: 'k2-1', children: [
                    {
                      name: 'k2-1-1', children: [
                        { name: 'k2-1-1-1', children: [] }
                      ]
                    }
                  ]
                },
                { name: 'k2-2', children: [] },
                { name: 'k2-3', children: [] },
                { name: 'k2-4', children: [] },
                {
                  name: 'k2-5', children: [
                    { name: 'k2-5-1', children: [] }
                  ]
                },
                {
                  name: 'k2-6', children: [
                    { name: 'k2-6-1', children: [] },
                    { name: 'k2-6-2', children: [] },
                    { name: 'k2-6-3', children: [] }
                  ]
                }
              ]
            },
          ]
        },
        {
          name: 'L', children: [
            {
              name: 'l1', children: [
                { name: 'l1-1', children: [] },
                { name: 'l1-2', children: [] },
                { name: 'l1-3', children: [] },
              ]
            },
          ]
        }
      ]
    },
    {
      name: 'Z', children: [
        {
          name: 'm', children: [
            {
              name: 'm1', children: [
                {
                  name: 'm1-1', children: [
                    { name: 'm1-1-1', children: [] },
                    {
                      name: 'm1-1-2', children: [
                        { name: 'm1-1-2-1', children: [] },
                        { name: 'm1-1-2-2', children: [] },
                        { name: 'm1-1-2-3', children: [] },
                        { name: 'm1-1-2-4', children: [] },
                      ]
                    },
                  ]
                },
              ]
            },
            { name: 'm2', children: [] },
          ]
        },
        {
          name: 'N', children: [
            {
              name: 'n1', children: [
                {
                  name: 'n1-1', children: [
                    { name: 'n1-1-1', children: [] },
                    { name: 'n1-1-2', children: [] },
                    { name: 'n1-1-3', children: [] },
                    { name: 'n1-1-4', children: [] },
                  ]
                },
                { name: 'n1-2', children: [] }
              ]
            },
            { name: 'n2', children: [] }
          ]
        },
        {
          name: 'o', children: [
            { name: 'o1', children: [] },
            { name: 'o2', children: [] },
            { name: 'o3', children: [] },
            { name: 'o4', children: [] },
            { name: 'o5', children: [] },
          ]
        }
      ]
    },
    {
      name: 'Z', children: [
        {
          name: 'p', children: [
            {
              name: 'p1', children: [
                { name: 'p1-1', children: [] },
                {
                  name: 'p1-2', children: [
                    { name: 'p1-2-1', children: [] },
                    { name: 'p1-2-2', children: [] },
                  ]
                },
                { name: 'p1-3', children: [] },
              ]
            },
            { name: 'p2', children: [] },
          ]
        }
      ]
    },
    {
      name: 'Z', children: [
        {
          name: 'q', children: [
            {
              name: 'q1', children: [
                {
                  name: 'q1-1', children: [
                    { name: 'q1-1-1', children: [] },
                    { name: 'q1-1-2', children: [] },
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'r', children: [
            { name: 'r1', children: [] },
            { name: 'r2', children: [] },
            { name: 'r3', children: [] },
          ]
        }
      ]
    }
  ],
};
