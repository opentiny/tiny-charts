import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../../../src/index';

const RadarChart = props => {
  const radarChartRef = useRef();
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  let chartData = {
    '2.4G网络质量': {
      '空闲占空比（差）': 78,
      '干扰（大）': 90,
      '连接数（好）': 43,    
      '覆盖（未评价）': 53,      
      'AP（好）': 80,  
    },
    '5G网络质量': {
      '连接数（好）': 75,
      '干扰（大）': 55,
      'AP（好）': 93,
      '覆盖（未评价）': 90,
      '空闲占空比（差）': 86
    }
  };
  let chartOpt = {
    legend: {
      show: true,
      position: {
        left: 'center',
        bottom: 20,
      },
      orient: 'horizontal',
    },
    data: chartData,
    markLine: 80
  };

  useEffect(() => {
    chartIns.init(radarChartRef.current);
    chartIns.setSimpleOption('RadarChart', chartOpt, {});
    chartIns.render();
    return () => {
      chartIns.uninstall();
    };
  }, []);

  useEffect(() => {
    chartIns.refresh(chartOpt);
  }, [props]);

  return <div className='demo-radarChart'>
    <div className='chartTitle'>网络质量</div>
    <div className='chartContent' ref={radarChartRef}></div>
  </div>;
};

export default RadarChart;
