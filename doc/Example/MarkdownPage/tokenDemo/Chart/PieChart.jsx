import React, { useEffect, useRef, useState } from 'react';
import IntegrateChart from '../../../../../src/index';
import { codeToRGB } from '../../../../../src/components/SpecialChart/util/color';

const PieChart = props => {
  const pieChartRef = useRef();
  const [chartIns, setChartIns] = useState(new IntegrateChart());
  let theme = useRef(props.theme);
  let chartData = [
    { value: 100, name: '2.4G' },
    { value: 14, name: '3G' },
    { value: 90, name: '4G' },
    { value: 49, name: '5G' },
  ];
  let chartOpt = {
    type: 'circle',
    silent: false,
    position: {
      center: ['40%', '50%'],
      radius: ['44%', 44 + props.barWidth + '%']
    },
    title: {
      text: `{a|253}\n{b|总数量}\n{b|(连接数)}`,
      left: '39%',
      textAlign: 'center',
      textStyle: {
        rich: {
          a: {
            color: props.mainText,
            fontSize: props.font / 14 * 30,
          },
          b: {
            fontSize: props.font / 14 * 12,
            color: props.subText,
            padding: [10, 0, 0, 0]
          },
        }
      },
    },
    legend: {
      show: true,
      offset: 30,
      position: {
        right: '15',
        top: 'center',
      },
      orient: 'vertical'
    },
    label: {
      show: true,
      type: 'name',
      line: false,
      distance: 10
    },
    data: chartData,
  };

  useEffect(() => {
    chartIns.init(pieChartRef.current);
    chartIns.setSimpleOption('PieChart', chartOpt, {});
    chartIns.render();
    return () => {
      chartIns.uninstall();
    };
  }, []);

  useEffect(() => {
    // 切换主题全部初始化
    if (props.theme !== theme.current) {
      theme.current = props.theme;
      IntegrateChart.resetThemeCongfig();
      IntegrateChart.theme(props.theme);
      chartIns.refresh(chartOpt);
      return;
    }
    IntegrateChart.registerConfig(props.theme, {
      // 系统色
      colorGroup: [props.colorGroup1, props.colorGroup2, props.colorGroup3, props.colorGroup4, props.colorGroup5],
      colorState: {
        errorColor: props.error // 错误色
      },
      colorText: props.mainText, // 主要文本色
      colorSubtext: props.subText, // 次要文本色
      tooltipBg: props.colorBg, // tipBox背景色
      colorAxisLine: props.axis, // 坐标轴线色
      colorAxisTickLine: props.axis,
      colorAxisSplitLine: props.splitLine, // 分隔线颜色
      colorAxisPointerLine: props.pointer, // 坐标轴指示器悬浮线
      colorAxisPointerShadow: props.pointerBg.indexOf('rgb') !== -1 ? props.pointerBg : codeToRGB(props.pointerBg, .1), // 指示器阴影色(添加透明度)
      // colorAxisPointerShadow: props.pointerBg
      // 字体大小
      fontSize: props.font, // 14 
      fontSizeSM: props.font / 14 * 12, // 12
      fontSizeLG: props.font / 14 * 16, // 16
      fontSizeXL: props.font / 14 * 20, // 20
      // 圆角大小
      borderRadiusSM: props.borderRadius, // 4
      tooltipBorderRaduis: props.borderRadius, // 4
      barBorderRadiusZero: props.borderRadius, // 圆盘图圆角
      // 图元大小
      symbolSize: props.symbolSize, // 10
      symbolSizeSM: props.symbolSize / 10 * 8, // 8
      symbolSizeLG: props.symbolSize / 10 * 12, // 12
      symbolSizeXS: props.symbolSize / 10 * 6, // 6
      // 线条宽度
      lineStyleWidth: props.lineWidth / 2 * 2, // 2
      // 柱体宽度
      barWidth: props.barWidth, // 8
      // 轴线宽度
      axisLineWidth: props.axisLine * 2, // 2 
      axisTickLineWidth: props.axisLine * 2, // 2
      axisSplitLineWidth: props.axisLine, // 1
      axisPointerLineWidth: props.axisLine, // 1
      // 轴线类别    
      axisLineType: props.axisType,
      axisTickLineType: props.axisType,
      axisSplitLineType: props.axisType,
      // axisPointerLineType: props.axisType
    });
    IntegrateChart.theme(props.theme);
    chartIns.refresh(chartOpt);
  }, [props]);

  return <div className='demo-pieChart' >
    <div className='chartTitle'>网络连接数</div>
    <div className='chartContent' ref={pieChartRef}></div>
  </div>;
};

export default PieChart;
