import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../src/index';
import * as d3 from 'd3';

const AssembleBubbleChart = props => {
  let theme = props.theme;
  const assembleBubbleChartRef = useRef();
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  let chartOpt = {
    theme: `hwCloud-${theme}`,
    type: 'non-nested',
    data: [
      { type: 'VPC', value: 1076, label: '1076', showLabel: true },
      { type: 'VPC', value: 362, label: '362', showLabel: true },
      { type: 'EIP', value: 530, label: '530', showLabel: true },
      { type: 'EIP', value: 183, label: '183', showLabel: true },
      { type: 'SG', value: 530, label: '530', showLabel: true },
      { type: 'WJT', value: 100, label: '100' },
      { type: 'WJT', value: 100, label: '100' },
      { type: 'WJT', value: 60, label: '100' },
      { type: 'WJT', value: 100, label: '100' },
    ],
    legend: {
      show: true,
      itemWidth: 6,
      itemHeight: 6
    }
  };

  useEffect(() => {
    chartIns.init(assembleBubbleChartRef.current);
    chartIns.setSimpleOption('AssembleBubbleChart', chartOpt, { d3 });
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

  return <div style={{ width: '100%', height: '100%' }} ref={assembleBubbleChartRef}></div>;
};

export default AssembleBubbleChart;
