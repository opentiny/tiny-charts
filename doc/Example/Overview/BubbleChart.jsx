import React, { useEffect, useRef } from 'react';
import IntegrateChart from '../../../src/index';

const BubbleChart = props => {
  let theme = props.theme;
  const chartRef = useRef();

  useEffect(() => {
    let chartIns = new IntegrateChart();
    let chartData = {
        'Normal': [
            [28604, 40, 17096869, 'Australia', 'Normal'],
            [31476, 22.4, 78958237, 'Germany', 'Normal'],
            [28666, 58.1, 2548300, 'Iceland', 'Normal'],
            [29550, 39.1, 122249285, 'Japan', 'Normal'],
            [2076,  47.9, 20194354, 'North Korea', 'Normal'],
            [12087, 52, 42972254, 'South Korea', 'Normal'],
            [24021, 55.4, 3397534, 'New Zealand', 'Normal'],
            [43296, 36.8, 4240375, 'Norway', 'Normal'],
            [10088, 30.8, 38195258, 'Poland', 'Normal'],
            [19349, 59.6, 147568552, 'Russia', 'Normal'],
            [10670, 37.3, 53994605, 'Turkey', 'Normal'],
            [26424, 45.7, 57110117, 'United Kingdom', 'Normal'],
            [37062, 45.4, 252847810, 'United States', 'Normal'],
            [23038, 53.13, 143456918, 'Russia', 'Normal'],
            [19360, 26.5, 578665830, 'Turkey', 'Normal'],
        ],
        'The threshold is exceeded': [
            [53354, 79.1, 321773631, 'United States', 'The threshold is exceeded'],
            [50000, 57.7, 870601776, 'India', 'The threshold is exceeded'],
            [60001, 68, 1154605773,  'China', 'The threshold is exceeded'],
            [31163, 77.4, 27662440, 'Canada', 'The threshold is exceeded'],
            [13670, 81, 1000582082, 'Cuba', 'The threshold is exceeded'],
            [28599, 75, 49867050, 'Finland', 'The threshold is exceeded'],
            [29476, 77.1, 56943299, 'France', 'The threshold is exceeded'],
            [38225, 81.4, 64715810, 'United Kingdom', 'The threshold is exceeded'],
        ]
    };
    let chartOpt = {
        theme: theme,
        padding: [50, 40, 50, 20],
        markLine:{ // 在气泡图下，在使用阈值线的同时，需要手动配置数据分组，数据颜色
            x: 50000,
            y: 70,
        },
        color:['#1f55b5','#f43146'],
        data: chartData,
        yAxisName: 'Member'
    };
    chartIns.init(chartRef.current);
    chartIns.setSimpleOption('BubbleChart', chartOpt, {});
    setTimeout(() => {
      if (!props.shouldRender) { // 如果dom脱离视口，停止渲染
        return;
      }
      chartIns.render();
    }, 100);
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={chartRef}></div>;
};

export default BubbleChart;
