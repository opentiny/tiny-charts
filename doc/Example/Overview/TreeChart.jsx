import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../src/index';

const TreeChart = props => {
  let theme = props.theme;
  const treeChartRef = useRef();
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  let chartOpt = {
    theme: `hwCloud-${theme}`,
    type: 'LineTreeChart',
    padding: [20, 180, 20, 80],
    direction: 'left',
    symbolSize: 10,
    lineType: 'curve',
    initialTreeDepth: 2,
    data: [{
      name: 'flare',
      children: [
        {
          name: 'data',
          children: [
            {
              name: 'converters',
              children: [
                { name: 'Converters', value: 721 },
                { name: 'DelimitedTextConverter', value: 4294 }
              ]
            },
            {
              name: 'DataUtil',
              value: 3322
            }
          ]
        },
        {
          name: 'display',
          children: [
            { name: 'DirtySprite', value: 8833 },
          ]
        },
        {
          name: 'query',
          children: [
            { name: 'AggregateExpression', value: 1616 },
            { name: 'And', value: 1027 },
            { name: 'Minimum', value: 843 },
          ]
        },
        {
          name: 'scale',
          children: [
            { name: 'IScaleMap', value: 2105 },
            { name: 'LinearScale', value: 1316 },
          ]
        }
      ]
    }],
  };

  useEffect(() => {
    chartIns.init(treeChartRef.current);
    chartIns.setSimpleOption('TreeChart', chartOpt, {});
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

  return <div style={{ width: '100%', height: '100%' }} ref={treeChartRef}></div>;
};

export default TreeChart;
