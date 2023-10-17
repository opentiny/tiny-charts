import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../src/index';

const animationTime = 1500;

const PieChart = props => {
  let theme = props.theme;
  const pieChartRef = useRef();
  const shouldRenderRef = useRef();
  shouldRenderRef.current = props.shouldRender;
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  let chartData = [
    { value: 100, name: 'VPC' },
    { value: 90, name: 'IM' },
  ];
  let chartOpt = {
    theme: theme,
    position: {
      center: ['40%', '50%'],
      radius: ['50%', '58%'],
    },
    title: {
      top: '43%',
      left: '39%',
      textAlign: 'center',
      text: '平台监测',
      textStyle: {
        color: theme == 'light' ? '#000' : '#fff',
        fontSize: 20,
      },
      subtext: '数量监测',
      subtextStyle: {
        fontSize: 12,
      },
    },
    legend: {
      show: true,
      position: {
        right: '4%',
        top: 'center',
      },
      orient: 'vertical',
    },
    label: {
      show: true,
      type: 'percent',
      line: true,
      distance: 5,
    },
    data: chartData,
  };

  useEffect(() => {
    chartIns.init(pieChartRef.current);
    chartIns.setSimpleOption('PieChart', chartOpt, {});
    return () => {
      chartIns.uninstall();
    };
  }, []);

  useEffect(() => {
    let chartCount = 0;
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
        if (chartCount === 1) {
          chartData.push({ value: 49, name: 'EIP' });
          chartIns.refreshData(chartData);
        }
        if (chartCount === 2) {
          chartData.push({ value: 14, name: 'SG' });
          chartIns.refreshData(chartData);
        }
        if (chartCount === 3) {
          chartData.push({ value: 120, name: 'OTHER' });
          chartIns.refreshData(chartData);
        }
        if (chartCount === 4) {
          chartData = [
            { value: 122, name: 'VPC' },
            { value: 95, name: 'IM' },
            { value: 55, name: 'EIP' },
            { value: 200, name: 'SG' },
            { value: 120, name: 'OTHER' },
          ];
          chartIns.refreshData(chartData);
        }
        if (chartCount === 5) {
          chartData = [
            { value: 100, name: 'VPC' },
            { value: 90, name: 'IM' },
          ];
          chartIns.refreshData(chartData);
          chartCount = 0;
        }
      }, animationTime);
    }, 200);
    return () => {
      clearInterval(interval);
    };
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={pieChartRef}></div>;
};

export default PieChart;
