import React, { useEffect, useRef, useState } from 'react';
import MarkdownPage from './MarkdownPage';
import Select from '@nce/eview-react/Select';
import IntegrateChart from '../../../src';

export default function mediaScreen(props) {
  let chartContainer = useRef(null);
  useEffect(() => {
    let chartIns = new IntegrateChart();
    let chartData = [
      { "Month": 'Jan一月份', "Domestic": 33, "Abroad": 37 },
      { "Month": 'Feb二月份', "Domestic": 27, "Abroad": 39 },
      { "Month": 'Mar三月份', "Domestic": 31, "Abroad": 20 },
      { "Month": 'Apr四月份', "Domestic": 30, "Abroad": 15 },
      { "Month": 'May五月份', "Domestic": 37, "Abroad": 13 },
      { "Month": 'Jun六月份', "Domestic": 36, "Abroad": 17 },
      { "Month": 'Jul七月份', "Domestic": 42, "Abroad": 22 },
      { "Month": 'Aug八月份', "Domestic": 22, "Abroad": 12 },
      { "Month": 'Sep九月份', "Domestic": 17, "Abroad": 30 },
      { "Month": 'Oct十月份', "Domestic": 40, "Abroad": 33 },
      { "Month": 'Nov十一月份', "Domestic": 42, "Abroad": 22 },
      { "Month": 'Dec十二月份', "Domestic": 32, "Abroad": 11 }
    ];
    let mediaScreenOption = [
      {
        maxWidth: 1400,
        minWidth: 1001,
        option: {
          legend: {
            show: true,
            icon: 'rect',
            itemWidth: 16,
            itemHeight: 16
          },
          itemStyle: {
            barWidth: 16,
          },
          label: {
            show: true,
            position: "top"
          }
        }
      },
      {
        maxWidth: 1000,
        minWidth: 801,
        option: {
          legend: {
            show: true,
            icon: 'circle',
            itemWidth: 12,
            itemHeight: 12
          },
          itemStyle: {
            barWidth: 12,
          },
          xAxis: {
            labelRotate: 45
          },
          label: {
            show: true,
            position: "top"
          }
        }
      },
      {
        maxWidth: 800,
        minWidth: 601,
        option: {
          xAxis: {
            interval: 0,
            ellipsis: {
              overflow: 'truncate',
              labelWidth: 40
            }
          }
        }
      },
      {
        maxWidth: 600,
        minWidth: 401,
        option: {
          xAxis: {
            interval: 1,
            name: ''
          },
          itemStyle: {
            barWidth: 6,
          },
          yAxis: {
            name: ''
          },
          legend: {
            show: false
          }
        }
      },
      {
        maxWidth: 400,
        minWidth: 0,
        option: {
          xAxis: {
            interval: 2,
            ellipsis: {
              overflow: 'truncate',
              labelWidth: 30
            },
            name: ''
          },
          itemStyle: {
            barWidth: 4,
          },
          yAxis: {
            name: ''
          },
          legend: {
            show: false
          }
        }
      }
    ];
    let chartOpt = {
      data: chartData,
      padding: [50, 100, 50, 0],
      xAxis: {
        data: 'Month',
        fullGrid: false,
        name: '月份'
      },
      yAxis: {
        name: 'Percentage(%)',
      },
    };
    chartIns.init(chartContainer.current);
    chartIns.mediaScreen(chartContainer.current, mediaScreenOption);
    chartIns.setSimpleOption('BarChart', chartOpt, {});
    chartIns.render();
  }, []);
  const selectOptions = [
    { text: '1400px', value: 0 },
    { text: '1000px', value: 1 },
    { text: '800px', value: 2 },
    { text: '600px', value: 3 },
    { text: '400px', value: 4 },
  ];
  const [selectValue, setSelectValue] = useState(0);
  const [chartWidth, setChartWidth] = useState('1400px');
  const selectChange = (value) => {
    setSelectValue(value);
    setChartWidth(selectOptions[value].text);
  };
  return (
    <div>
      <MarkdownPage path='quick_start/mediaScreen.md'></MarkdownPage>
      <div className="ic-example-explore" style={{ paddingTop: '0' }}>
        <Select
          options={selectOptions}
          value={selectValue}
          onChange={selectChange}
          label={'下拉切换图表尺寸'} />
        <div
          className='chartContainer'
          ref={chartContainer}
          style={{ width: chartWidth, height: '400px' }} />
      </div>
    </div>
  );
}

// 1、介紹当前如何使用
// 2、介绍有默认值，但是目前只提供直角的默认 默认如下：。。。
// 3、可以自己编写的一套响应式规则，
// 4、下面给出三个示例 直角柱状图示例，纯 jsx。 右上角有下拉按钮可以切换容器大小，自适应属性变化了。
// 5、圆盘图示例，jsx 同上。
// 6、高阶图表示例 待定。