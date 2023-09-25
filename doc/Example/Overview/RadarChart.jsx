import React, { useEffect, useRef } from 'react';
import IntegrateChart from '../../../src/index';

const animationTime = 1500;

const RadarChart = props => {
  let theme = props.theme;
  const radarChartRef = useRef();
  const shouldRenderRef = useRef();
  shouldRenderRef.current = props.shouldRender;

  useEffect(() => {
    let chartIns = new IntegrateChart();
    let chartCount = 0;
    let chartData = {
      Domestic: {
        Equipment: 43,
        VM: 90,
        CSP: 80,
        RD: 53,
        Markets: 78,
      },
      Abroad: {
        Equipment: 75,
        VM: 55,
        CSP: 93,
        RD: 90,
        Markets: 86,
      },
    };
    let chartOpt = {
      theme: theme,
      legend: {
        show: true,
        position: {
          left: 'center',
          bottom: 20,
        },
        orient: 'horizontal',
      },
      markLine: 81,
      data: chartData,
    };
    chartIns.init(radarChartRef.current);
    chartIns.setSimpleOption('RadarChart', chartOpt, {});
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
          chartData = {
            Domestic: {
              Equipment: 50,
              VM: 90,
              CSP: 30,
              RD: 53,
              Markets: 78,
            },
            Abroad: {
              Equipment: 60,
              VM: 55,
              CSP: 93,
              RD: 20,
              Markets: 86,
            },
          };
          chartIns.refreshData(chartData);
        }
        if (chartCount == 2) {
          chartData = {
            Domestic: {
              Equipment: 100,
              VM: 80,
              CSP: 30,
              RD: 53,
              Markets: 78,
            },
            Abroad: {
              Equipment: 60,
              VM: 55,
              CSP: 70,
              RD: 20,
              Markets: 86,
            },
          };
          chartIns.refreshData(chartData);
        }
        if (chartCount == 3) {
          chartData = {
            Domestic: {
              Equipment: 50,
              VM: 90,
              CSP: 60,
              RD: 53,
              Markets: 78,
            },
            Abroad: {
              Equipment: 60,
              VM: 55,
              CSP: 88,
              RD: 20,
              Markets: 86,
            },
          };
          chartIns.refreshData(chartData);
        }
        if (chartCount == 4) {
          chartData = {
            Domestic: {
              Equipment: 66,
              VM: 72,
              CSP: 30,
              RD: 35,
              Markets: 78,
            },
            Abroad: {
              Equipment: 60,
              VM: 55,
              CSP: 93,
              RD: 20,
              Markets: 34,
            },
          };
          chartIns.refreshData(chartData);
        }
        if (chartCount == 5) {
          chartCount = 0;
          chartData = {
            Domestic: {
              Equipment: 56,
              VM: 90,
              CSP: 42,
              RD: 66,
              Markets: 78,
            },
            Abroad: {
              Equipment: 44,
              VM: 55,
              CSP: 75,
              RD: 43,
              Markets: 86,
            },
          };
          chartIns.refreshData(chartData);
        }
      }, animationTime);
    }, 100);
    return () => {
      clearInterval(interval);
      chartIns.uninstall()
    };
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={radarChartRef}></div>;
};

export default RadarChart;
