import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../../../src/index';

const BarChart = props => {
  const barChartRef = useRef();
  const [chartIns, setChartIns] = useState(new IntegrateChart());
  let chartOpt = {
    padding: [50, 20, 50, 20],
    type: 'stack',
    data: [
      { 'Month': '02:00', '2.4G': 33, '3G': 37, '4G': 20, '5G': 32, },
      { 'Month': '04:00', '2.4G': 27, '3G': 39, '4G': 26, '5G': 12, },
      { 'Month': '06:00', '2.4G': 31, '3G': 20, '4G': 8, '5G': 35, },
      { 'Month': '08:00', '2.4G': 30, '3G': 15, '4G': 17, '5G': 18, },
      { 'Month': '10:00', '2.4G': 37, '3G': 13, '4G': 36, '5G': 20, },
      { 'Month': '12:00', '2.4G': 36, '3G': 17, '4G': 51, '5G': 34, },
      { 'Month': '14:00', '2.4G': 42, '3G': 22, '4G': 27, '5G': 8, },
      { 'Month': '16:00', '2.4G': 22, '3G': 12, '4G': 12, '5G': 4, },
      { 'Month': '18:00', '2.4G': 17, '3G': 30, '4G': 41, '5G': 54, },
      { 'Month': '20:00', '2.4G': 40, '3G': 33, '4G': 26, '5G': 17, },
      { 'Month': '22:00', '2.4G': 42, '3G': 22, '4G': 14, '5G': 26, },
      { 'Month': '24:00', '2.4G': 32, '3G': 11, '4G': 33, '5G': 22, }
    ],
    xAxis: {
      data: 'Month',
    },
    yAxis: {
      name: '单位：MB',
    },
  };

  useEffect(() => {
    chartIns.init(barChartRef.current);
    chartIns.setSimpleOption('BarChart', chartOpt, {});
    chartIns.render();
    return () => {
      chartIns.uninstall();
    };
  }, []);

  useEffect(() => {
    chartIns.refresh(chartOpt);
  }, [props]);

  return <div className='demo-barChart'>
    <div className='chartTitle'>网络使用流量</div>
    <div className='chartContent' ref={barChartRef}></div>
  </div>;
};

export default BarChart;
