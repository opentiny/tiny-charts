import React, { useState, useEffect, createRef, useRef } from 'react';
// 按需引用的图表
import HoneycombChart from '../../src/components/HoneycombChart';
import GanttChart from '../../src/components/GanttChart';
import RiverChart from '../../src/components/RiverChart';
import TerraceChart from '../../src/components/TerraceChart';
import SnowFlakeChart from '../../src/components/SnowFlakeChart';
import IntegrateChart from '../../src/index';
import handleScroll from './handleScroll';
import SplitPane from 'react-split-pane';
import * as echarts from 'echarts';
import ecStat from 'echarts-stat';
import 'echarts-extension-amap';
import Editor from './Editor';
import 'echarts-liquidfill';
import 'echarts-wordcloud';
import axios from 'axios';
import * as d3 from 'd3';
import './index.less';


// 词云图需要的遮罩图片
const base64 =
  'data:image/png;base64,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';
window.maskImage = new Image();
window.maskImage.src = base64;

function PlayGround(props) {
  const searchStr = window.location.search;
  // 文档路径名称
  const chartDocPath = searchStr.slice(searchStr.search(/=/i) + 1, searchStr.search(/&/i));
  // 图表主题
  const theme = searchStr.slice(searchStr.search(/theme/i) + 6, searchStr.search(/jsiframe/i) - 1);
  // 技术栈
  const jsiframe = searchStr.slice(searchStr.search(/jsiframe/i) + 9);
  // 图表名称
  const chartName = chartDocPath.split('-')[0];
  const chartRef = useRef();
  const editorRef = useRef();
  const runRef = useRef();
  const [integrateChart, setIntegrateChart] = useState(new IntegrateChart());
  const [iChartOption, setIChartOption] = useState('');
  const [editorWidth, setEditorWidth] = useState('100%');
  const [editorHeight, setEditorHeight] = useState('100%');
  const [backGroundColor, setBackGroundColor] = useState(theme === 'dark' ? '#191919' : '#ffffff');
  const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const [left, setLeft] = useState(0);
  const downloadRef = useRef(null);
  const [containerLeft, setContainerLeft] = useState(0);
  const [containerText, setContainerText] = useState('小容器');
  const [imgLeft, setImgLeft] = useState(0);
  const [isReset, setIsReset] = useState(() => {
    const noResetCharts = ['FlowChart', 'OrganizationChart'];
    if (noResetCharts.indexOf(chartName) !== -1) {
      return false;
    }
    return true;
  });
  let instance;

  const [isMobile, setIsMobile] = useState(() => {
    const mobileCharts = ['OrganizationChart'];
    if (mobileCharts.indexOf(chartName) !== -1) {
      return { width: 'auto', margin: 'auto' };
    }
    return {};
  });

  const transformCode = codeString => {
    const codeObj = { code: 0 };
    const resolve = (option) => {
      renderChart(option);
    };
    Function('codeObj', 'axios', 'echarts', 'resolve', `"use strict";${codeString};return (codeObj.code = option || {})`)(codeObj, axios, echarts, resolve);
    return codeObj.code;
  };

  // 点击运行
  const runCode = e => {
    const option = transformCode(editorRef.current.getCode());
    if (instance) {
      chartRef.current.innerHTML = '';
    }
    renderChart(option);
  };

  const downLoadCode = async (name, content) => {
    if (typeof name == 'undefined') {
      throw new Error('The first parameter name is a must');
    }
    if (typeof content == 'undefined') {
      throw new Error('The second parameter content is a must');
    }
    if (jsiframe && jsiframe !== 'origin') {
      const optionPath = `jsiframe/${jsiframe}.txt`;
      await axios.get(optionPath).then(response => {
        if (jsiframe !== 'react') {
          // 将content合入到vue对应的txt中
          const chartIndex = response.data.match('chartOption:').index + 'chartOption:'.length;
          const beforeCode = response.data.slice(0, chartIndex);
          const afterCode = response.data.slice(chartIndex);
          content = `${beforeCode}\n${content}${afterCode}`;
          // 动态修改txt中的图表名称
          content = content.replace('name="GaugeChart"', `name="${chartName}"`);
        } else {
          // 将content合入到react对应的txt中
          const chartIndex = response.data.match('chartOption =').index + 'chartOption ='.length;
          const beforeCode = response.data.slice(0, chartIndex);
          const afterCode = response.data.slice(chartIndex);
          content = `${beforeCode}\n${content}${afterCode}`;
          // 动态修改txt中的图表名称
          content = content.replace('chartName = \'JadeJueChart\'', `chartName = '${chartName}'`);
        }
      });
    }
    if (!(content instanceof Blob)) {
      content = new Blob([content], { type: 'text / javascript' });
    }
    const link = URL.createObjectURL(content);
    download(link, name);
  };

  const download = (link, name) => {
    if (!name) {
      // 如果没有提供名字，从给的Link中截取最后一个
      name = link.slice(link.lastIndexOf('/') + 1);
    }
    const eleLink = document.createElement('a');
    eleLink.download = name;
    eleLink.style.display = 'none';
    eleLink.href = link;
    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
  };

  // 切换大小容器
  const changeContainer = async (e, containerText) => {
    switch (containerText) {
      case '小容器':
        setContainerText('大容器');
        chartRef.current.style.width = '450px';
        chartRef.current.style.height = '250px';
        break;
      case '大容器':
        setContainerText('小容器');
        chartRef.current.style.width = '100%';
        chartRef.current.style.height = '100%';
        break;
    }
    await integrateChart.setResize();
    setLeft(chartRef.current.getBoundingClientRect().left);
    setTimeout(() => {
      setContainerLeft(runRef.current.getBoundingClientRect().right + 12);
      setImgLeft(downloadRef.current.getBoundingClientRect().right + 12);
    });
  };

  // 截图
  const screenshot = () => {
    const canvas = document.querySelector('#ic-chart-container>div>canvas');
    const dataUrl = canvas.toDataURL();
    download(dataUrl, chartName);
  };

  const changeBackgroundColor = theme => {
    if (theme && theme.indexOf('dark') !== -1) {
      setBackGroundColor('#191919');
    } else {
      setBackGroundColor('#ffffff');
    }
  };

  const renderChart = option => {
    changeBackgroundColor(option.theme);
    if (chartName == 'HoneycombChart') {
      chartRef.current.innerHTML = '';
      integrateChart.init(chartRef.current);
      integrateChart.setSimpleOption(HoneycombChart, option, {});
      integrateChart.render();
    } else if (chartName == 'TerraceChart') {
      chartRef.current.innerHTML = '';
      integrateChart.init(chartRef.current);
      integrateChart.setSimpleOption(TerraceChart, option, {});
      integrateChart.render();
    } else if (chartName == 'RiverChart') {
      instance = new RiverChart();
      instance.init(chartRef.current);
      instance.setOption(option);
    } else if (chartName == 'GanttChart') {
      instance = new GanttChart();
      instance.init(chartRef.current);
      instance.setOption(option);
    } else if (chartName == 'SnowFlakeChart') {
      const div = document.createElement('div');
      chartRef.current.appendChild(div);
      div.className = 'sc-exampleContainer';
      instance = new SnowFlakeChart(div, option);
    } else {
      integrateChart.init(chartRef.current);
      integrateChart.setSimpleOption(chartName, option, { ecStat, d3 });
      // 延迟图表渲染，使页面打开时图表有动画
      setTimeout(() => {
        integrateChart.render();
      }, 20);
    }
  };

  useEffect(() => {
    const optionPath = `option/${chartName}/${chartDocPath}.js`;
    axios.get(optionPath).then(response => {

      const option = transformCode(response.data);

      setIChartOption(response.data);
      // 当iframe传入了主题，替换option中的主题
      if (theme) {
        if (option.theme && option.theme.indexOf('cloud-') !== -1) {
          option.theme = `cloud-${theme}`;
        } else {
          option.theme = theme;
        }
      }
      renderChart(option);
    });
    // .catch(response => {
    //   console.error('图表配置代码有错，请核查！');
    // });
    setLeft(chartRef.current.getBoundingClientRect().left);
    setTimeout(() => {
      setContainerLeft(runRef.current.getBoundingClientRect().right + 12);
      setImgLeft(downloadRef.current.getBoundingClientRect().right + 12);
    });

    handleScroll();
  }, []);

  return (
    <div className={`ic-playgound ic-${theme}`}>
      <div
        className="ic-playgound-run"
        onClick={e => {
          runCode(e);
        }}
        style={{ left }}
        ref={runRef}
      >
        运行
      </div>
      {isReset && (
        <div
          className="ic-playgound-changeContainer"
          onClick={e => {
            changeContainer(e, containerText);
          }}
          style={{ left: containerLeft }}
        >
          {containerText}
        </div>
      )}
      <SplitPane split="vertical" onChange={setEditorWidth} className="ic-split-pane" size={windowWidth * 0.36}>
        <Editor
          ref={editorRef}
          immediate={true}
          expanded={false}
          darkTheme={true}
          code={iChartOption}
          width={editorWidth}
          height={editorHeight}
          theme={theme}
          jsiframe={jsiframe}
          chartName={chartName}
        />
        <div className="ic-split-pane-right" style={isMobile}>
          <div
            ref={chartRef}
            id="ic-chart-container"
            className="ic-chart-container"
            style={{ backgroundColor: backGroundColor }}
          />
        </div>
      </SplitPane>
      <div
        className="ic-playgound-downLoad"
        onClick={e => {
          downLoadCode(`${chartName}Option.json`, JSON.stringify(transformCode(editorRef.current.getCode())));
        }}
        style={{ left }}
        ref={downloadRef}
      >
        下载示例
      </div>
      <div
        className="ic-playgound-screenshot"
        onClick={e => {
          screenshot();
        }}
        style={{ left: imgLeft }}
      >
        截图
      </div>
    </div>
  );
}

export default PlayGround;
