import React, { useEffect, useRef } from 'react';
import IntegrateChart from '../../../src/index';

const JadeJueChart = props => {
  let theme = props.theme;
  const jadeJueChartRef = useRef();

  useEffect(() => {
    let chartIns = new IntegrateChart();
    let chartOpt = {
      theme: `hwCloud-${theme}`,
      data: [
        { name: '语文', value: 70 },
        { name: '数学', value: 90 },
        { name: '英语', value: 60 },
        { name: '物理', value: 92 },
        { name: '化学', value: 90 },
      ],
      max: 100,
    };
    chartIns.init(jadeJueChartRef.current);
    chartIns.setSimpleOption('JadeJueChart', chartOpt, {});
    
    setTimeout(() => {
      if (!props.shouldRender) { // 如果dom脱离视口，停止渲染
        return;
      }
      chartIns.render();
    }, 100);
  }, [props.shouldRender]);


  return <div style={{ width: '100%', height: '100%' }} ref={jadeJueChartRef}></div>;
};

export default JadeJueChart;
