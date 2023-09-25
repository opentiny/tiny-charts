import React, { useEffect, useRef } from 'react';
import IntegrateChart from '../../../src/index';

const CircleProcessChart = props => {
  let theme = props.theme;
  const circleProcessChartRef = useRef();

  useEffect(() => {
    let chartIns = new IntegrateChart();
    let chartData = [
      {
        name: "VPC",
        value: 10,
      },
      {
        name: "EM",
        value: 20,
      },
    ];
    let chartOpt = {
      theme: `hwCloud-${theme}`,
      data: chartData,
    };
    chartIns.init(circleProcessChartRef.current);
    chartIns.setSimpleOption('CircleProcessChart', chartOpt, {});
    setTimeout(() => {
      if (!props.shouldRender) { // 如果dom脱离视口，停止渲染
        return;
      }
      chartIns.render();
    }, 100);
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={circleProcessChartRef}></div>;
};

export default CircleProcessChart;
