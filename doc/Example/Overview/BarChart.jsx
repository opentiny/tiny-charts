import React, { useEffect, useRef } from 'react';
import IntegrateChart from '../../../src/index';

const animationTime = 1500;

const BarChart = props => {
  let theme = props.theme;
  const barChartRef = useRef();
  const shouldRenderRef = useRef();
  shouldRenderRef.current = props.shouldRender;

  useEffect(() => {
    let chartIns = new IntegrateChart();
    let chartOpt = {
      theme: `hwCloud-${theme}`,
      padding: [50, 30, 50, 20],
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
    chartIns.init(barChartRef.current);
    chartIns.setSimpleOption('BarChart', chartOpt, {});
    let timeout1;
    let timeout2;
    let timeout3;
    let timeout4;
    let timeout5;
    let timeout6;
    let animation = () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
      if (!shouldRenderRef.current) {  // 定时器拿不到最新的props.shouldRender,需要用ref监视。脱离视口，停止定时器图表更新
        return;
      }
      timeout1 = setTimeout(() => {
        chartOpt.type = 'stack';
        chartIns.refresh(chartOpt);
        timeout2 = setTimeout(() => {
          delete chartOpt.type;
          chartOpt.direction = 'horizontal';
          chartOpt.data = [
            { Month: 'Jan', Domestic: 33, Abroad: 37 },
            { Month: 'Feb', Domestic: 27, Abroad: 39 },
            { Month: 'Mar', Domestic: 31, Abroad: 20 },
            { Month: 'Apr', Domestic: 30, Abroad: 15 },
            { Month: 'May', Domestic: 37, Abroad: 13 },
            { Month: 'Jun', Domestic: 36, Abroad: 17 },
          ];
          chartIns.refresh(chartOpt);
          timeout3 = setTimeout(() => {
            chartOpt.type = 'stack';
            chartOpt.direction = 'horizontal';
            chartOpt.data = [
              { Month: 'Jan', Domestic: 33, Abroad: 37 },
              { Month: 'Feb', Domestic: 27, Abroad: 39 },
              { Month: 'Mar', Domestic: 31, Abroad: 20 },
              { Month: 'Apr', Domestic: 30, Abroad: 15 },
              { Month: 'May', Domestic: 37, Abroad: 13 },
              { Month: 'Jun', Domestic: 36, Abroad: 17 },
            ];
            chartIns.refresh(chartOpt);
            timeout4 = setTimeout(() => {
              chartOpt.type = 'both-sides';
              delete chartOpt.direction;
              chartOpt.data = [
                { Month: 'Jan', Domestic: 33, Abroad: -37 },
                { Month: 'Feb', Domestic: 27, Abroad: -39 },
                { Month: 'Mar', Domestic: 31, Abroad: -20 },
                { Month: 'Apr', Domestic: 30, Abroad: -15 },
                { Month: 'May', Domestic: 37, Abroad: -13 },
                { Month: 'Jun', Domestic: 36, Abroad: -17 },
                { Month: 'Jul', Domestic: 42, Abroad: -22 },
                { Month: 'Aug', Domestic: 22, Abroad: -12 },
                { Month: 'Sep', Domestic: 17, Abroad: -30 },
                { Month: 'Oct', Domestic: 40, Abroad: -33 },
                { Month: 'Nov', Domestic: 42, Abroad: -22 },
                { Month: 'Dec', Domestic: 32, Abroad: -11 },
              ];
              chartIns.refresh(chartOpt);
              timeout5 = setTimeout(() => {
                chartOpt.type = 'water-fall';
                chartOpt.data = [
                  { Month: 'Jan', Domestic: 33, Abroad: 37 },
                  { Month: 'Feb', Domestic: 27, Abroad: 39 },
                  { Month: 'Mar', Domestic: 31, Abroad: 20 },
                  { Month: 'Apr', Domestic: 30, Abroad: 40 },
                  { Month: 'May', Domestic: 37, Abroad: 35 },
                  { Month: 'Jun', Domestic: 36, Abroad: 17 },
                  { Month: 'Jul', Domestic: 42, Abroad: 28 },
                  { Month: 'Aug', Domestic: 22, Abroad: 32 },
                ];
                chartIns.refresh(chartOpt);
                timeout6 = setTimeout(() => {
                  delete chartOpt.type;
                  delete chartOpt.direction;
                  chartOpt.data = [
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
                  ];
                  chartIns.refresh(chartOpt);
                  animation();
                }, animationTime);
              }, animationTime);
            }, animationTime);
          }, animationTime);
        }, animationTime);
      }, animationTime);
    };
    setTimeout(() => {
      if (!props.shouldRender) { // 如果dom脱离视口，停止渲染
        return;
      }
      chartIns.render();
      animation();
    }, 100);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
      chartIns.uninstall()
    };
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={barChartRef}></div>;
};

export default BarChart;
