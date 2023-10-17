import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../src/index';

const GraphTreeChart = props => {
  let theme = props.theme;
  const graphTreeChartRef = useRef();
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  let chartOpt = {
    theme: `hwCloud-${theme}`,
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
    edgeSymbol: ['none', 'none'],
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
                ]
              },
            ]
          },
          {
            name: 'B',
            children: [
              {
                name: 'B1', children: [
                  { name: 'B1-1', children: [] },
                  { name: 'B1-2', children: [] },
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
                  { name: 'C1-1', children: [] },
                  { name: 'C1-2', children: [] },
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
                name: 'E1', children: []
              }
            ]
          },
          {
            name: 'F', children: [
              {
                name: 'F1', children: [
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
                ]
              }
            ]
          },
          {
            name: 'I', children: [
              {
                name: 'I1', children: [
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
                  { name: 'K2-2', children: [] },
                  { name: 'K2-3', children: [] },
                  { name: 'K2-4', children: [] },
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
            ]
          },
          {
            name: 'N', children: [
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
              { name: 'P2', children: [] },
            ]
          }
        ]
      },
      {
        name: 'Z', children: [
          {
            name: 'Q', children: [
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

  useEffect(() => {
    chartIns.init(graphTreeChartRef.current);
    chartIns.setSimpleOption('GraphTreeChart', chartOpt, {});
    return () => {
      chartIns.uninstall();
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!props.shouldRender) { // 如果dom脱离视口，停止渲染
        return;
      }
      chartIns.render();
    }, 100);
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={graphTreeChartRef}></div>;
};

export default GraphTreeChart;
