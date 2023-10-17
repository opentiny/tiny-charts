import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../src/index';

const LineChart = props => {
  let theme = props.theme;
  let chartCount = 0;
  const lineChartRef = useRef();
  const shouldRenderRef = useRef();
  shouldRenderRef.current = props.shouldRender;
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  let chartOpt = {
    theme: `hwCloud-${theme}`,
    padding: [50, 30, 50, 20],
    animationDuration: 6000,
    legend: {
      show: true,
      icon: 'line',
    },
    data: [
      { Month: 'Jan', Domestic: 33, Abroad: 37 },
      { Month: 'Feb', Domestic: 27, Abroad: 39 },
      { Month: 'Mar', Domestic: 31, Abroad: 20 },
      { Month: 'Apr', Domestic: 30, Abroad: 15 },
      { Month: 'May', Domestic: 37, Abroad: 13 },
      { Month: 'Jun', Domestic: 36, Abroad: 17 },
      { Month: 'Jul', Domestic: 42, Abroad: 22 },
      { Month: 'Aug', Domestic: 22, Abroad: 12 },
      { Month: 'Sep', Domestic: 17, Abroad: 30 },
      { Month: 'Oct', Domestic: 40, Abroad: 33 },
      { Month: 'Nov', Domestic: 42, Abroad: 22 },
      { Month: 'Dec', Domestic: 32, Abroad: 11 },
    ],
    xAxis: {
      data: 'Month',
    },
    yAxis: {
      name: 'Percentage(%)',
    },
  };

  useEffect(() => {
    chartIns.init(lineChartRef.current);
    chartIns.setSimpleOption('LineChart', chartOpt, {});
    return () => {
      chartIns.uninstall();
    };
  }, []);

  useEffect(() => {
    let interval;
    setTimeout(() => {
      if (!props.shouldRender) { // 如果dom脱离视口，停止渲染
        return;
      }
      chartIns.render();
      interval = setInterval(() => {
        if (!shouldRenderRef.current) {  // 定时器拿不到最新的props.shouldRender,需要用ref监视。脱离视口，停止定时器图表更新
          clearInterval(interval);
          return;
        }
        chartCount++;
        if (chartCount == 1) {
          chartOpt.step = true;
          chartIns.refresh(chartOpt);
        }
        if (chartCount == 2) {
          chartOpt.step = false;
          chartIns.refresh(chartOpt);
          chartCount = 0;
        }
      }, 7000);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={lineChartRef}></div>;
};

export default LineChart;
