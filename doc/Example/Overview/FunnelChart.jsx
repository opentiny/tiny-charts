import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../src/index';

const FunnelChart = props => {
  let theme = props.theme;
  const funnelChartRef = useRef();
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  let chartOpt = {
    theme: `hwCloud-${theme}`,
    gap: 10,
    data: [
      { value: 100, name: 'Show' },
      { value: 80, name: 'Click' },
      { value: 60, name: 'Visit' },
      { value: 40, name: 'Inquiry' },
      { value: 20, name: 'Order' }
    ]
  };

  useEffect(() => {
    chartIns.init(funnelChartRef.current);
    chartIns.setSimpleOption('FunnelChart', chartOpt, {});
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

  return <div style={{ width: '100%', height: '100%' }} ref={funnelChartRef}></div>;
};

export default FunnelChart;
