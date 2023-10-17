import React, { useEffect, useRef, useState } from 'react';
import WaveChart from '../../../src/components/WaveChart';
import IntegrateChart from '../../../src/index';

const WaveChartDemo = props => {
  let theme = props.theme;
  const waveChartRef = useRef();
  const [chartIns, setChartIns] = useState(new IntegrateChart());

  let chartOpt = {
    type: 'warning',
    data: ['ELP', 'EIP', 'EDP', 'ASD', 'FDP'],
    position: {
      center: ['50%', '55%'],
      radius: '70%'
    },
    centerDom: () => {
      const dom = `
              <div style="font-size:12px;">
                <span style="font-size:32px">62</span>分
              </div>
              <div style="color:#4e4e4e; font-size:12px;">
                健康评分
              </div>`;
      return dom;
    }
  };

  useEffect(() => {
    chartIns.init(waveChartRef.current);
    chartIns.setSimpleOption(WaveChart, chartOpt, {});
    return () => {
      chartIns.uninstall();
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!props.shouldRender) { // 如果dom脱离视口，停止渲染
        chartIns.uninstall();
        return;
      }
      chartIns.render();
    }, 100);
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={waveChartRef}></div>;
};

export default WaveChartDemo;
