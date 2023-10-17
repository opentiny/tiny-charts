import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../src/index';

const HillChart = props => {
  let theme = props.theme;
  const [chartIns, setChartIns] = useState(new IntegrateChart());
  const chartRef = useRef();

  useEffect(() => {
    let chartData = [
      { name: 'BRAS 01', value: 80 },
      { name: 'BRAS 02', value: 60 },
      { name: 'BRAS 03', value: 40 },
      { name: 'BRAS 04', value: 31 },
      { name: 'BRAS 05', value: 25 },
    ];
    let chartOpt = {
      theme: theme,
      chartPadding: [50, 20, 50, 20],
      data: chartData,
      coincide: '0%',
      axis: {
        show: true,
      },
      xAxis: 'name',
      markLine: {
        top: 50,
      },
    };
    chartIns.init(chartRef.current);
    chartIns.setSimpleOption('HillChart', chartOpt, {});
    return () => {
      chartIns.uninstall();
    };
  }, []);

  useEffect(() => {
    if (props.shouldRender) {
      setTimeout(() => {
        chartIns && chartIns.render();
      }, 100);
    }
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={chartRef}></div>;
};

export default HillChart;
