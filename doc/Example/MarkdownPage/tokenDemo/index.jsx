import React, { useState, useEffect } from 'react';
import MarkdownPage from '../MarkdownPage';
import AreaChart from './Chart/AreaChart';
import BarChart from './Chart/BarChart';
import LineChart from './Chart/LineChart';
import PieChart from './Chart/PieChart';
import RadarChart from './Chart/RadarChart';
import './index.less';
import ControlTable from './ControlTable';
import { IntlProvider } from 'react-intl';
import locales from '@nce/eview-react/locales';
import Loading from '@nce/eview-react/Loading';
import ConfigProvider from '@nce/eview-react/ConfigProvider';
import '@nce/eview-react/styles/aui3.css';
import '@nce/eview-react/styles/aui3_dark.css';
import Header from './Header';

export default function TokenDemo() {
  const [theme, setTheme] = useState('light'); // 主题
  const [colorGroup1, setColorGroup1] = useState('#6D8FF0'); // 系统色1
  const [colorGroup2, setColorGroup2] = useState('#00A874'); // 系统色2
  const [colorGroup3, setColorGroup3] = useState('#BD72F0'); // 系统色3
  const [colorGroup4, setColorGroup4] = useState('#54BCCE'); // 系统色4
  const [colorGroup5, setColorGroup5] = useState('#FDC000'); // 系统色5
  const [error, setError] = useState('#F43146'); // 错误色
  const [mainText, setMainText] = useState('#191919'); // 主要文本色
  const [subText, setSubText] = useState('#4E4E4E'); // 次要文本色
  const [colorBg, setColorBg] = useState('#FFFFFF'); // tipBox背景色
  const [axis, setAxis] = useState('#EEEEEE'); // 坐标轴线色
  const [splitLine, setSplitLine] = useState('#E8E8E8'); // 分隔线颜色
  const [pointer, setPointer] = useState('#BBBBBB'); // 指示器悬浮线
  const [pointerBg, setPointerBg] = useState('rgba(25,25,25,0.08)'); // 指示器阴影色

  const [isOpen, setIsOpen] = useState(true); // loading

  const [font, setFont] = useState(14); // 字体大小
  const [borderRadius, setBorderRadius] = useState(4); // 圆角大小
  const [symbolSize, setSymbolSize] = useState(10); // 图元大小
  const [lineWidth, setLineWidth] = useState(2); // 线条宽度
  const [barWidth, setBarWidth] = useState(8); // 柱体宽度
  const [axisLine, setAxisLine] = useState(1); // 轴线宽度
  const [axisType, setAxisType] = useState('solid'); // 轴线类别

  const chartProps = {
    theme, error, mainText, subText, colorBg, axis, splitLine, pointer, pointerBg,
    font, borderRadius, symbolSize, lineWidth, barWidth, axisLine, axisType,
    colorGroup1, colorGroup2, colorGroup3, colorGroup4, colorGroup5
  };

  const controlProps = {
    setIsOpen,
    setTheme, setError, setMainText, setSubText, setColorBg, setAxis, setSplitLine, setPointer, setPointerBg,
    setFont, setBorderRadius, setSymbolSize, setLineWidth, setBarWidth, setAxisLine, setAxisType,
    setColorGroup1, setColorGroup2, setColorGroup3, setColorGroup4, setColorGroup5
  };

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  }, []);

  return (
    <IntlProvider locale={'zh'} messages={locales.zh}>
      <MarkdownPage path='quick_start/tokenDemo.md'></MarkdownPage>
      <div className='tokenDemo '>
        <div className='example'>
          <Header></Header>
          <div className='chartContainer'>
            <PieChart {...chartProps}></PieChart>
            <LineChart {...chartProps}></LineChart>
            <RadarChart {...chartProps}></RadarChart>
            <AreaChart {...chartProps}></AreaChart>
            <BarChart {...chartProps}></BarChart>
          </div>
          <Loading isOpen={isOpen} type="local"></Loading>
        </div>
        <ConfigProvider Animation={true}>
          <ControlTable {...controlProps}></ControlTable>
        </ConfigProvider>
      </div>
    </IntlProvider>
  );
}
