import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../src/index';
import 'echarts-liquidfill';

const LiquidfillChart = props => {
  let theme = props.theme;
  const liquidfillChartRef = useRef();
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  let chartOpt = {
    theme: `hwCloud-${theme}`,
    data: [0.6]
  };

  useEffect(() => {
    chartIns.init(liquidfillChartRef.current);
    chartIns.setSimpleOption('LiquidfillChart', chartOpt, {});
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

  return <div style={{ width: '100%', height: '100%' }} ref={liquidfillChartRef}></div>;
};

export default LiquidfillChart;
