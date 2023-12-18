import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../../../src';

const AreaChart = props => {
  const areaChartRef = useRef();
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  let chartData = [
    { 'Month': '02:00', '2.4G': 12, '3G': 18, '4G	': 28, '5G	': 40, '9G': 52 },
    { 'Month': '04:00', '2.4G': 13, '3G': 25, '4G	': 36, '5G	': 46, '9G': 62 },
    { 'Month': '06:00', '2.4G': 10, '3G': 20, '4G	': 32, '5G	': 44, '9G': 54 },
    { 'Month': '08:00', '2.4G': 13, '3G': 27, '4G	': 37, '5G	': 48, '9G': 60 },
    { 'Month': '10:00', '2.4G': 9, '3G': 18, '4G	': 30, '5G	': 40, '9G': 48 },
    { 'Month': '12:00', '2.4G': 20, '3G': 36, '4G	': 41, '5G	': 54, '9G': 68 },
    { 'Month': '14:00', '2.4G': 12, '3G': 24, '4G	': 37, '5G	': 48, '9G': 70 },
    { 'Month': '16:00', '2.4G': 22, '3G': 32, '4G	': 42, '5G	': 54, '9G': 71 },
    { 'Month': '18:00', '2.4G': 24, '3G': 36, '4G	': 44, '5G	': 52, '9G': 72 },
    { 'Month': '20:00', '2.4G': 25, '3G': 38, '4G	': 46, '5G	': 57, '9G': 75 },
    { 'Month': '22:00', '2.4G': 30, '3G': 42, '4G	': 50, '5G	': 59, '9G': 78 },
    { 'Month': '24:00', '2.4G': 32, '3G': 42, '4G	': 53, '5G	': 60, '9G': 80 }
  ];
  let chartOpt = {
    smooth: true,
    area: true,
    padding: [50, 20],
    data: chartData,
    xAxis: {
      data: 'Month',
      fullGrid: true,
    },
    yAxis: {
      name: '单位：Mbit/s',
    },
    markLine: {
      top: 65,
      bottom: -100
    }
  };

  useEffect(() => {
    chartIns.init(areaChartRef.current);
    chartIns.setSimpleOption('AreaChart', chartOpt, {});
    chartIns.render();
    return () => {
      chartIns.uninstall();
    };
  }, []);

  useEffect(() => {
    // IntegrateChart.registerTheme('dark', {
    //   colorState: {
    //     errorColor: props.error
    //   }
    // });
    // IntegrateChart.theme('dark')
    chartIns.refresh(chartOpt);
  }, [props]);

  return <div className='demo-areaChart'>
    <div className='chartTitle'>网络平均速率</div>
    <div className='chartContent' ref={areaChartRef}></div>
  </div>;
};

export default AreaChart;
