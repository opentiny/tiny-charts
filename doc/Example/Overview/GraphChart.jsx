import React, { useEffect, useRef } from 'react';
import IntegrateChart from '../../../src/index';

const GraphChart = props => {
  let theme = props.theme;
  const graphChartRef = useRef();

  useEffect(() => {
    let chartIns = new IntegrateChart();
    let chartOpt = {
      theme: `hwCloud-${theme}`,
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'none',
          symbolSize: 30,
          color: '#42A5F5',
          roam: false,
          label: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 10
              }
            }
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            normal: {
              textStyle: {
                fontSize: 10
              }
            }
          },
          data: [
            {
              name: '节点1',
              x: 300,
              y: 300
            },
            {
              name: '节点2',
              x: 800,
              y: 300
            },
            {
              name: '节点3',
              x: 550,
              y: 100
            },
            {
              name: '节点4',
              x: 550,
              y: 500
            }
          ],
          links: [
            {
              source: 0,
              target: 1,
              symbolSize: [5, 20],
              label: {
                normal: {
                  show: true
                }
              },
              lineStyle: {
                normal: {
                  width: 5,
                  curveness: 0.2
                }
              }
            },
            {
              source: '节点2',
              target: '节点1',
              label: {
                normal: {
                  show: true
                }
              },
              lineStyle: {
                normal: {
                  curveness: 0.2
                }
              }
            },
            {
              source: '节点1',
              target: '节点3'
            },
            {
              source: '节点2',
              target: '节点3'
            },
            {
              source: '节点2',
              target: '节点4'
            },
            {
              source: '节点1',
              target: '节点4'
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
    };
    chartIns.init(graphChartRef.current);
    chartIns.setSimpleOption('GraphChart', chartOpt, {});
    setTimeout(() => {
      if (!props.shouldRender) { // 如果dom脱离视口，停止渲染
        return;
      }
      chartIns.render();
    }, 100);
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={graphChartRef}></div>;
};

export default GraphChart;
