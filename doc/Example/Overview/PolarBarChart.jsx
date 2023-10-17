import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../src/index';

const PolarBarChart = props => {
  let theme = props.theme;
  const chartRef = useRef();
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  let chartData = [
    {
      name: 'cluster-1',
      value: 9,
    },
    {
      name: 'cluster-2',
      value: 8,
    },
    {
      name: 'cluster-3',
      value: 7,
    },
    {
      name: 'cluster-4',
      value: 6,
    },
    {
      name: 'cluster-5',
      value: 4,
    },
  ];
  let chartOpt = {
    theme: `hwCloud-${theme}`,
    position: {
      center: ['30%', '50%'],
      radius: ['10%', '65%'],
    },
    legend: {
      show: true,
      position: {
        right: '7%',
        top: 'center',
      },
      orient: 'vertical',
      formatter: name => {
        let data = [
          { name: 'cluster-1', value: 9 },
          { name: 'cluster-2', value: 8 },
          { name: 'cluster-3', value: 7 },
          { name: 'cluster-4', value: 6 },
          { name: 'cluster-5', value: 4 },
        ];
        const item = data.filter(item => item.name === name)[0];
        return '{title|' + name + '}{value|' + item.value + '}';
      },
      textStyle: {
        rich: {
          title: {
            color: '#808080',
            fontSize: 12,
            padding: [0, 0, 0, 5],
            width: 100,
          },
          value: {
            fontSize: 12,
            width: 40,
            color: '#191919',
          },
        },
      },
    },
    data: chartData,
  };

  useEffect(() => {
    chartIns.init(chartRef.current);
    chartIns.setSimpleOption('PolarBarChart', chartOpt, {});
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

  return <div style={{ width: '100%', height: '100%' }} ref={chartRef}></div>;
};

export default PolarBarChart;
