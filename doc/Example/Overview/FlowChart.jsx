import React, { useEffect, useRef } from 'react';
import FlowChart from '../../../src/components/FlowChart';

const FlowChartDemo = props => {
  let theme = props.theme;
  const flowChartRef = useRef();

  useEffect(() => {
    if (!props.shouldRender) { // 如果dom脱离视口，停止渲染
      return;
    }
    let instance = new FlowChart(flowChartRef.current, {
      vGap: 45,
      hGap: 45,
      lineStyle: {
        type: 'Bezier',
      },
      render: (container, data) => {
        let id = data.id;
        let nodeClass = 'fc-node-example-red';
        if (id.indexOf('1') !== -1) {
          nodeClass = 'fc-node-example-blue';
        }
        if (id.indexOf('2') !== -1) {
          nodeClass = 'fc-node-example-orange';
        }
        if (id.indexOf('3') !== -1) {
          nodeClass = 'fc-node-example-green';
        }
        let node = `<div class="fc-node-example ${nodeClass}">${id}<div>`;
        container.insertAdjacentHTML('beforeend', node);
      },
      data: {
        nodes: [
          {
            id: '1',
          },
          {
            id: '2',
          },
          {
            id: '3',
          },
          {
            id: '4',
          },
          {
            id: '5',
          },
          {
            id: '6',
          },
          {
            id: '7',
          },
          {
            id: '8',
          },
          {
            id: '9',
          },
          {
            id: '10',
          },
          {
            id: '14',
          },
        ],
        edges: [
          {
            source: '1',
            target: '2',
            lineStyle: {
              dash: true,
            },
          },
          {
            source: '9',
            target: '3',
          },
          {
            source: '10',
            target: '3',
          },
          {
            source: '4',
            target: '5',
          },
          {
            source: '4',
            target: '6',
          },
          {
            source: '3',
            target: '4',
            lineStyle: {
              dash: true,
            },
          },
          {
            source: '14',
            target: '4',
          },
          {
            source: '4',
            target: '7',
          },
          {
            source: '5',
            target: '8',
          },
          {
            source: '6',
            target: '8',
          },
          {
            source: '7',
            target: '8',
          },
          {
            source: '2',
            target: '4',
          },
        ],
      },
    });
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={flowChartRef}></div>;
};

export default FlowChartDemo;
