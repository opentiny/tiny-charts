import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../src/index';

const ProcessChart = props => {
  let theme = props.theme;
  const processBarChartRef = useRef();
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  let chartData = [
    { name: 'UniEPMgr', value: 80 },
    { name: 'SMLoglic', value: 65 },
    { name: 'SSO', value: 45 },
    { name: 'APIMgr', value: 20 },
    { name: 'Logtransfer', value: 12 }
  ];
  let chartOpt = {
    //图表名称
    name: 'ProcessBarChart',
    //主题,默认值'light'
    theme: theme,
    //padding控制图表距离容器的上、右、下、左padding值
    padding: [32, 32, 0, 32],
    //颜色组，循环使用
    color: ['#fa2a2d', '#ff7500', '#ffbf00', '#41ba41', '#00aaee'],
    //数据
    data: chartData
  };

  useEffect(() => {
    chartIns.init(processBarChartRef.current);
    chartIns.setSimpleOption('ProcessChart', chartOpt, {});
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

  return <div style={{ width: '100%', height: '100%' }} ref={processBarChartRef}></div>;
};

export default ProcessChart;
