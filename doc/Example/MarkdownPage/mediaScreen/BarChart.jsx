import React, { useEffect, useRef, useState } from 'react';
import Select from '@nce/eview-react/Select';
import IntegrateChart from '../../../../src';

// 柱状图的配置
const barChartOpt = {
  padding: [50, 70, 30, 30],
  data: [
    { "Month": '一月份', "Domestic": 33, "Abroad": 37 },
    { "Month": '二月份', "Domestic": 27, "Abroad": 39 },
    { "Month": '三月份', "Domestic": 31, "Abroad": 20 },
    { "Month": '四月份', "Domestic": 30, "Abroad": 15 },
    { "Month": '五月份', "Domestic": 37, "Abroad": 13 },
    { "Month": '六月份', "Domestic": 36, "Abroad": 17 },
    { "Month": '七月份', "Domestic": 42, "Abroad": 22 },
    { "Month": '八月份', "Domestic": 22, "Abroad": 12 },
    { "Month": '九月份', "Domestic": 17, "Abroad": 30 },
    { "Month": '十月份', "Domestic": 40, "Abroad": 33 },
    { "Month": '十一月份', "Domestic": 42, "Abroad": 22 },
    { "Month": '十二月份', "Domestic": 32, "Abroad": 11 }
  ],
  xAxis: {
    key: 'Month',
    name: '月份'
  },
  yAxis: {
    name: '百分比(%)',
  },
  legend: {  
    show: true,
    position: {      
      top: 15,    
      right: 25
    }
  }
};

// 柱状图的响应式配置
const barMediaOption = [
  {
    minWidth: 1001,
    option: {
      itemStyle: {
        barWidth: 16,
      },
      label: {
        show: true,
        position: "top"
      }
    }
  },{
    maxWidth: 1000,
    minWidth: 801,
    option: {
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
  },{
    maxWidth: 800,
    minWidth: 601,
    option: {
      xAxis: {
        interval: 0,
        ellipsis: {
          overflow: 'truncate',
          labelWidth: 35
        }
      }
    }
  },{
    maxWidth: 600,
    minWidth: 401,
    option: {
      padding: [50, 30, 15, 30],
      xAxis: {
        interval: 1,
        name: ''
      },
      itemStyle: {
        barWidth: 6,
      },
      legend: {
        show: false
      }
    }
  },{
    maxWidth: 400,
    option: {
      padding: [50, 30, 15, 0],
      xAxis: {
        name: '',
        interval: 1
      },
      itemStyle: {
        barWidth: 4,
      },
      yAxis: {
        name: '',
        show: false
      },
      legend: {
        show: false
      }
    }
  }
];

export default function BarChart() {
  let chartContainer = useRef(null);
  const [selectValue, setSelectValue] = useState(0);
  const [chartWidth, setChartWidth] = useState('1400px');
  
  useEffect(() => {
    let chartIns = new IntegrateChart();
    chartIns.init(chartContainer.current);
    chartIns.mediaScreen(chartContainer.current, barMediaOption);
    chartIns.setSimpleOption('BarChart', barChartOpt, {});
    chartIns.render();
  }, []);

  const selectOptions = [
    { text: '1400px', value: 0 },
    { text: '1000px', value: 1 },
    { text: '800px', value: 2 },
    { text: '600px', value: 3 },
    { text: '400px', value: 4 },
  ];
  
  const selectChange = (value) => {
    setSelectValue(value);
    setChartWidth(selectOptions[value].text);
  };

  return (
    <div className="chartContainer" >
      <Select
        value={selectValue}
        options={selectOptions}
        onChange={selectChange}
        label={'切换图表容器尺寸'} />
      <div
        className='chart'
        ref={chartContainer}
        style={{ height: '400px', width: chartWidth }}
      />
    </div>
  );
}
