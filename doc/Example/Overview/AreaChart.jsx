import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../src/index';

const AreaChart = props => {
  let theme = props.theme;
  const areaChartRef = useRef();
  const shouldRenderRef = useRef();
  shouldRenderRef.current = props.shouldRender;
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  let chartData = [
    { Month: 'Jan', Domestic: 33 },
    { Month: 'Feb', Domestic: 27 },
    { Month: 'Mar', Domestic: 31 },
    { Month: 'Apr', Domestic: 30 },
    { Month: 'May', Domestic: 37 },
    { Month: 'Jun', Domestic: 36 },
    { Month: 'Jul', Domestic: 42 },
    { Month: 'Aug', Domestic: 22 },
    { Month: 'Sep', Domestic: 17 },
    { Month: 'Oct', Domestic: 40 },
    { Month: 'Nov', Domestic: 42 },
    { Month: 'Dec', Domestic: 32 },
  ];
  let chartOpt = {
    theme: `hwCloud-${theme}`,
    smooth: true,
    area: true,
    animationDuration: 6000,
    markLine: {
      top: 38,
      // bottom: 20,
    },
    markPoint: {
      max: true,
      min: true,
    },
    tipHtml: (params, ticket, callback) => {
      let htmlString = '';
      params.map((item, index) => {
        if (index === 0) {
          htmlString += item.name + '<br/>';
        }
        htmlString +=
          '<div>' +
          '<span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' +
          item.color +
          ';">' +
          '</span>' +
          '<span style="margin-left:5px;color:#000000">' +
          '<span style="display:inline-block;width:100px;">' +
          item.seriesName +
          ' User</span>' +
          '<span style="font-weight:bold">' +
          item.value +
          '%</span>' +
          '<span style="color:#191919"> out </span>' +
          '<span style="font-weight:bold;color:#f43146">' +
          (100 - item.value) +
          '%</span>' +
          '</span>' +
          '</div>';
      });
      return htmlString;
    },
    data: chartData,
    xAxis: {
      data: 'Month',
      fullGrid: true,
    },
    yAxis: {
      name: 'Percentage(%)',
    },
  };

  useEffect(() => {
    chartIns.init(areaChartRef.current);
    chartIns.setSimpleOption('AreaChart', chartOpt, {});
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

  return <div style={{ width: '100%', height: '100%' }} ref={areaChartRef}></div>;
};

export default AreaChart;
