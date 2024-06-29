const option = {
  animationDurationUpdate: 1600,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'none',
      symbolSize: 48,
      color: '#42A5F5',
      roam: true,
      label: {
        normal: {
          show: true
        }
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [3, 10],
      edgeLabel: {
        normal: {
          textStyle: {
            fontSize: 18
          }
        }
      },
      data: [
        {
          name: '节点11',
          x: 310,
          y: 310
        },
        {
          name: '节点22',
          x: 820,
          y: 320
        },
        {
          name: '节点33',
          x: 560,
          y: 160
        },
        {
          name: '节点44',
          x: 540,
          y: 520
        }
      ],
      links: [
        {
          source: 0,
          target: 1,
          symbolSize: [4, 20],
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            normal: {
              width: 6,
              curveness: 0.2
            }
          }
        },
        {
          source: '节点22',
          target: '节点11',
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            normal: {
              curveness: 0.3
            }
          }
        },
        {
          source: '节点11',
          target: '节点33'
        },
        {
          source: '节点22',
          target: '节点33'
        },
        {
          source: '节点22',
          target: '节点44'
        },
        {
          source: '节点11',
          target: '节点44'
        }
      ],
      lineStyle: {
        normal: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        }
      }
    }
  ]
}