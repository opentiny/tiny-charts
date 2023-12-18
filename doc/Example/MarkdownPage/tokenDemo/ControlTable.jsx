import React, { useState, useEffect } from 'react';
import Panel, { PanelItem } from '@nce/eview-react/Panel';
import Select from '@nce/eview-react/Select';
import Button from '@nce/eview-react/Button';
import ColorSelect from './ColorSelect';
import { themeOption, borderRadiusOpt, colorOption, fontSizeOpt, symbolSizeOpt, lineWidthOpt, barWidthOpt, axisLineOpt, axisTypeOpt } from './data';

export default function ControlTable(props) {
  const [refresh, setRefresh] = useState(false); // 初始化去恢复colorSelect的当前主题默认值
  const [selectedIndex, setSelectedIndex] = useState([0]);
  const [themeValue, setThemeValue] = useState('light'); // 主题
  const [fontValue, setFontValue] = useState(14); // 字体大小
  const [radiusValue, setRadiusValue] = useState(4); // 圆角大小
  const [sizeValue, setSizeValue] = useState(10); // 图元大小
  const [lineWidthValue, setLineWidthValue] = useState(2); // 线条宽度
  const [barWidthValue, setBarWidthValue] = useState(8); // 柱体宽度
  const [axisLineValue, setAxisLineValue] = useState(1); // 轴线宽度
  const [axisTypeValue, setAxisTypeValue] = useState(0); // 轴线类别

  const { setIsOpen,
    setTheme, setError, setMainText, setSubText, setColorBg, setAxis, setSplitLine, setPointer, setPointerBg,
    setFont, setBorderRadius, setSymbolSize, setLineWidth, setBarWidth, setAxisLine, setAxisType,
    setColorGroup1, setColorGroup2, setColorGroup3, setColorGroup4, setColorGroup5 } = props;
  const colorChangeProps = [setColorGroup1, setColorGroup2, setColorGroup3, setColorGroup4, setColorGroup5,
    setError, setMainText, setSubText, setColorBg, setAxis, setSplitLine, setPointer, setPointerBg];

  const themeChange = (value, isOpen = true) => {
    setThemeValue(value);
    setTheme(value);
    const chartContainer = document.querySelector('.tokenDemo .example');
    if (value.indexOf('dark') !== -1) {
      chartContainer.classList.add('aui3_dark');
    } else {
      chartContainer.classList.remove('aui3_dark');
    }
    if (isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    }

    // 全部初始化
    colorOption(value).forEach((item, index) => {
      colorChangeProps[index](item.color);
    });
    fontSizeChange(14);
    borderRadiusChange(4);
    symbolSizeChange(10);
    lineWidthChange(2);
    barWidthChange(8);
    axisLineChange(1);
    if (value.indexOf('cloud') !== -1) {
      axisTypeChange(1, '', 'dashed');
    } else {
      axisTypeChange(0, '', 'solid');
    }
    setSelectedIndex([0]);
  };

  const fontSizeChange = (value) => {
    setFontValue(value);
    setFont(value);
  };

  const borderRadiusChange = (value) => {
    setRadiusValue(value);
    setBorderRadius(value);
  };

  const symbolSizeChange = (value) => {
    setSizeValue(value);
    setSymbolSize(value);
  };

  const lineWidthChange = (value) => {
    setLineWidthValue(value);
    setLineWidth(value);
  };

  const barWidthChange = (value) => {
    setBarWidthValue(value);
    setBarWidth(value);
  };

  const axisLineChange = (value) => {
    setAxisLineValue(value);
    setAxisLine(value);
  };

  const axisTypeChange = (value, _, text) => {
    setAxisTypeValue(value);
    setAxisType(text);
  };

  const selectArr = [
    { label: '字体大小', options: fontSizeOpt, value: fontValue, onChange: fontSizeChange },
    { label: '圆角大小', options: borderRadiusOpt, value: radiusValue, onChange: borderRadiusChange },
    { label: '图元大小', options: symbolSizeOpt, value: sizeValue, onChange: symbolSizeChange },
    { label: '线条宽度', options: lineWidthOpt, value: lineWidthValue, onChange: lineWidthChange },
    { label: '柱体宽度', options: barWidthOpt, value: barWidthValue, onChange: barWidthChange },
    { label: '轴线宽度', options: axisLineOpt, value: axisLineValue, onChange: axisLineChange },
    { label: '轴线类别', options: axisTypeOpt, value: axisTypeValue, onChange: axisTypeChange },
  ];

  const expandPanel = (value) => {
    setSelectedIndex([value]);
  };

  // 初始化
  const reCover = () => {
    themeChange(themeValue, false);
    setRefresh(true);
  };

  // 监听系统主题
  const handleMode = () => {
    const darkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    themeChange(darkMode.matches ? 'dark' : 'light');
    setRefresh(true);
  };
  useEffect(() => {
    // 监听电脑主题
    handleMode();
    const windowTheme = window.matchMedia('(prefers-color-scheme: dark)');
    windowTheme.addListener(e => {
      handleMode();
    });
  }, []);

  return (
    <div className='control-table'>
      <div className='control-theme'>
        <Select options={themeOption}
          label="主题"
          value={themeValue}
          onChange={themeChange}
        ></Select>
      </div>
      <Panel enableMultiExpand={false} selectedIndex={selectedIndex} onExpand={expandPanel} >
        <PanelItem closable={false} title='版式'>
          {selectArr.map((item, index) => {
            return <Select
              label={item.label}
              value={item.value}
              options={item.options}
              onChange={item.onChange}
              key={index}
            >
            </Select>;
          })}
        </PanelItem>
        <PanelItem closable={false} title='色彩'>
          {colorOption(themeValue).map((item, index) => {
            return <ColorSelect
              text={item.text}
              color={item.color}
              key={index}
              controlProps={colorChangeProps[index]}
              refresh={refresh}
              setRefresh={setRefresh}
            ></ColorSelect>;
          })}
        </PanelItem>
      </Panel>
      {/* <div className='control-recover'>
        <Button text='初始化' onClick={reCover}></Button>
      </div> */}
    </div>
  );
}
