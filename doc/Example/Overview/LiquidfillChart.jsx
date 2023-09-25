import React, { useEffect, useRef } from 'react';
import IntegrateChart from '../../../src/index';
import 'echarts-liquidfill';

const LiquidfillChart = props => {
  let theme = props.theme;
  const liquidfillChartRef = useRef();

  useEffect(() => {
    let chartIns = new IntegrateChart();
    let chartOpt = {
      theme: `hwCloud-${theme}`,
      data: [0.6]
    };
    chartIns.init(liquidfillChartRef.current);
    chartIns.setSimpleOption('LiquidfillChart', chartOpt, {});
    setTimeout(() => {
      if (!props.shouldRender) { // 如果dom脱离视口，停止渲染
        return;
      }
      chartIns.render();
    }, 100);
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={liquidfillChartRef}></div>;
};

export default LiquidfillChart;
