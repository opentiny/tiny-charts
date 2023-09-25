import React, { useEffect, useRef } from 'react';
import IntegrateChart from '../../../src/index';
import 'echarts-wordcloud';

const WordCloudChart = props => {
  let theme = props.theme;
  const wordCloudChartRef = useRef();

  useEffect(() => {
    let chartIns = new IntegrateChart();
    let chartOpt = {
      theme: `hwCloud-${theme}`,
      data: [
        {
          name: 'visualMap',
          value: 122199,
        },
        {
          name: 'continuous',
          value: 10288,
        },
        {
          name: 'contoller',
          value: 620,
        },
        {
          name: 'series',
          value: 274470,
        },
        {
          name: 'gauge',
          value: 72311,
        },
        {
          name: 'detail',
          value: 7206,
        },
        {
          name: 'piecewise',
          value: 4885,
        },
        {
          name: 'textStyle',
          value: 32294,
        },
        {
          name: 'markPoint',
          value: 38574,
        },
        {
          name: 'pie',
          value: 88929,
        },
        {
          name: 'roseType',
          value: 969,
        },
        {
          name: 'label',
          value: 37517,
        },
        {
          name: 'emphasis',
          value: 12053,
        },
        {
          name: 'yAxis',
          value: 127299,
        },
        {
          name: 'name',
          value: 15418,
        },
        {
          name: 'type',
          value: 22905,
        },
        {
          name: 'gridIndex',
          value: 5146,
        }
      ]
    };
    chartIns.init(wordCloudChartRef.current);
    chartIns.setSimpleOption('WordCloudChart', chartOpt, {});
    setTimeout(() => {
      if (!props.shouldRender) { // 如果dom脱离视口，停止渲染
        return;
      }
      chartIns.render();
    }, 100);
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={wordCloudChartRef}></div>;
};

export default WordCloudChart;
