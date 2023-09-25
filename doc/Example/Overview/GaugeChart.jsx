import React, { useEffect, useRef } from 'react';
import IntegrateChart from '../../../src/index';

const animationTime = 1500;

const GaugeChart = props => {
  let theme = props.theme;
  const gaugeChartRef = useRef();
  const shouldRenderRef = useRef();
  shouldRenderRef.current = props.shouldRender;

  useEffect(() => {
    let chartIns = new IntegrateChart();
    let chartData = [{ value: 10, name: '占空比' }];
    let chartOpt = {
      theme: theme,
      gradientColor: ['rgba(78,127,243)', 'rgba(78,127,243)'],
      data: chartData,
      min: 0,
      max: 100,
      markLine: 80,
      position: {
        radius: '65%',
      },
      text: {
        offset: [5, 0],
        formatter: function (value) {
          return '{value|' + value + '}{unit|%}';
        },
        formatterStyle: {
          value: {
            fontSize: 40,
            color: theme == 'light' ? '#000' : '#eeeeee',
          },
          unit: {
            fontSize: 12,
            color: theme == 'light' ? '#000' : '#eeeeee',
            padding: [12, 0, 0, 4],
          },
        },
      },
      pointer: true,
      splitNumber: 4,
      itemStyle: {
        lineStyle: {
          length: 2,
          color: 'transparent',
        },
      },
      axisLabelStyle: {
        color: 'gray',
      },
      pointerStyle: {
        width: 16,
        length: '12%',
        pointerDistance: '-120%',
        lineDistance: '4%',
      },
      mask: {
        show: true,
        hightLight: true,
        width: 10,
      },
    };
    let chartCount = 0;
    chartIns.init(gaugeChartRef.current);
    chartIns.setSimpleOption('GaugeChart', chartOpt, {});
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
          chartData = [{ value: 20, name: '占空比' }];
          chartIns.refreshData(chartData);
        }
        if (chartCount == 2) {
          chartData = [{ value: 30, name: '占空比' }];
          chartIns.refreshData(chartData);
        }
        if (chartCount == 3) {
          chartData = [{ value: 40, name: '占空比' }];
          chartIns.refreshData(chartData);
        }
        if (chartCount == 4) {
          chartData = [{ value: 50, name: '占空比' }];
          chartOpt.data = chartData;
          chartOpt.gradientColor = ['#EC6F1A', '#EC6F1A'];
          chartIns.refresh(chartOpt);
        }
        if (chartCount == 5) {
          chartData = [{ value: 60, name: '占空比' }];
          chartIns.refreshData(chartData);
        }
        if (chartCount == 6) {
          chartData = [{ value: 70, name: '占空比' }];
          chartIns.refreshData(chartData);
        }
        if (chartCount == 7) {
          chartData = [{ value: 80, name: '占空比' }];
          chartOpt.data = chartData;
          chartOpt.gradientColor = ['#F43146', '#F43146'];
          chartIns.refresh(chartOpt);
        }
        if (chartCount == 8) {
          chartData = [{ value: 90, name: '占空比' }];
          chartIns.refreshData(chartData);
        }
        if (chartCount == 9) {
          chartCount = 0;
          chartData = [{ value: 10, name: '占空比' }];
          chartOpt.data = chartData;
          chartOpt.gradientColor = ['#6D8FF0', '#6D8FF0'];
          chartIns.refresh(chartOpt);
        }
      }, animationTime);
    }, 100);
    return () => {
      clearInterval(interval);
      chartIns.uninstall()
    };
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={gaugeChartRef}></div>;
};

export default GaugeChart;
