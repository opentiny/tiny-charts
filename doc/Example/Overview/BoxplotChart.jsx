import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../src/index';

const BoxplotChart = props => {
  let theme = props.theme;
  const boxplotChartRef = useRef();
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  const data0 = makeData();
  const data1 = makeData();
  const data2 = makeData();
  let chartOpt = {
    theme: `hwCloud-${theme}`,
    padding: [50, 30, 55, 20],
    xAxis: {
      axisLabel: {
        formatter: 'expr {value}'
      }
    },
    yAxis: {
      min: -400,
      max: 600,
    },
    legend: {
      show: true,
      position: {
        top: 15,
        left: 'center'
      },
    },
    dataZoom: {
      show: true,
      start: 0,
      end: 20,
      position: {
        left: 40,
        bottom: 18
      },
    },
    dataset: [
      {
        source: data0
      },
      {
        source: data1
      },
      {
        source: data2
      },
      {
        fromDatasetIndex: 0,
        transform: { type: 'boxplot' }
      },
      {
        fromDatasetIndex: 1,
        transform: { type: 'boxplot' }
      },
      {
        fromDatasetIndex: 2,
        transform: { type: 'boxplot' }
      }
    ],
    series: [
      {
        name: 'category0',
        type: 'boxplot',
        datasetIndex: 3
      },
      {
        name: 'category1',
        type: 'boxplot',
        datasetIndex: 4
      },
      {
        name: 'category2',
        type: 'boxplot',
        datasetIndex: 5
      }
    ],
  };

  useEffect(() => {
    chartIns.init(boxplotChartRef.current);
    chartIns.setSimpleOption('BoxplotChart', chartOpt, {});
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

  return <div style={{ width: '100%', height: '100%' }} ref={boxplotChartRef}></div>;
};

export default BoxplotChart;

function makeData() {
  let data = [];
  for (let i = 0; i < 18; i++) {
    let cate = [];
    for (let j = 0; j < 100; j++) {
      cate.push(Math.random() * 200);
    }
    data.push(cate);
  }
  return data;
}