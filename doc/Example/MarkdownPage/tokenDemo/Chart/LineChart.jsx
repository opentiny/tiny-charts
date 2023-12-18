import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../../../src/index';

const LineChart = props => {
  const lineChartRef = useRef();
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  let chartOpt = {
    padding: [50, 20, 50, 20],
    legend: {
      show: true,
      icon: 'line',
    },
    data: [
      { Month: '02:00', '9C:74:6F:70:BD:1E': 33, '6C:14:6E:90:92:D9': 37 },
      { Month: '04:00', '9C:74:6F:70:BD:1E': 27, '6C:14:6E:90:92:D9': 39 },
      { Month: '06:00', '9C:74:6F:70:BD:1E': 31, '6C:14:6E:90:92:D9': 20 },
      { Month: '08:00', '9C:74:6F:70:BD:1E': 30, '6C:14:6E:90:92:D9': 15 },
      { Month: '10:00', '9C:74:6F:70:BD:1E': 37, '6C:14:6E:90:92:D9': 13 },
      { Month: '12:00', '9C:74:6F:70:BD:1E': 36, '6C:14:6E:90:92:D9': 17 },
      { Month: '14:00', '9C:74:6F:70:BD:1E': 42, '6C:14:6E:90:92:D9': 22 },
      { Month: '16:00', '9C:74:6F:70:BD:1E': 22, '6C:14:6E:90:92:D9': 12 },
      { Month: '18:00', '9C:74:6F:70:BD:1E': 17, '6C:14:6E:90:92:D9': 30 },
      { Month: '20:00', '9C:74:6F:70:BD:1E': 40, '6C:14:6E:90:92:D9': 33 },
      { Month: '22:00', '9C:74:6F:70:BD:1E': 42, '6C:14:6E:90:92:D9': 22 },
      { Month: '24:00', '9C:74:6F:70:BD:1E': 32, '6C:14:6E:90:92:D9': 11 },
    ],
    // markLine: {
    //   top: 40,
    //   topLabel: '用户签约带宽',
    //   topPosition: 'insideStartTop',
    // },
    xAxis: {
      data: 'Month',
    },
    yAxis: {
      name: 'Percent(%)',
    },
    step: true
  };

  useEffect(() => {
    chartIns.init(lineChartRef.current);
    chartIns.setSimpleOption('LineChart', chartOpt, {});
    chartIns.render();
    return () => {
      chartIns.uninstall();
    };
  }, []);

  useEffect(() => {
    chartIns.refresh(chartOpt);
  }, [props]);

  return <div className='demo-lineChart'>
    <div className='chartTitle'>网关空闲占空比</div>
    <div className='chartContent' ref={lineChartRef}></div>
  </div>;
};

export default LineChart;
