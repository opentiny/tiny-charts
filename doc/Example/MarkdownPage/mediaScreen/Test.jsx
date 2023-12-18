import React, { useEffect, useRef, useState } from 'react';
import Select from '@nce/eview-react/Select';
import IntegrateChart from '../../../../src';

// 圆盘图的配置
let pieChartOpt = {
  title: {
    text: '259',
    subtext: '用户数',
    left: '29.7%',
    textAlign: 'center',
  },
  position: {
    center: ['30%', '50%'],
    radius: ['40%', '46%'],
  },
  legend: {
    show: true,
    position: {
      right: '20%',
      top: 'center'
    },
    orient: 'vertical',
    formatter: (name) => {
      let data = [
        { value: 100, name: 'VPC' },
        { value: 90, name: 'IM' },
        { value: 49, name: 'EIP' },
        { value: 14, name: 'SG' },
      ];
      let total = data.reduce((a, b) => {
        return a + b.value;
      }, 0);
      let item = data.filter((item) => item.name === name)[0];
      return "{title|" + name + "}{value|" + item.value + "}{split||}{value|" + total + "}";
    },
    textStyle: {
      rich: {
        title: {
          color: "#808080",
          fontSize: 14,
          padding: [0, 0, 0, 5],
          width: 80,
        },
        value: {
          fontSize: 12,
          width: 20,
          color: "#191919",
          fontWeight: 'bold',
        },
        split: {
          padding: [0, 8, 0, 8]
        }
      },
    }
  },
  label: {
    show: true,
    type: 'percent',
    line: false
  },
  data: [
    { value: 100, name: 'VPC' },
    { value: 90, name: 'IM' },
    { value: 49, name: 'EIP' },
    { value: 14, name: 'SG' },
  ]
};

// 圆盘图的响应式配置
let pieMediaOption = [
  {
    maxWidth: 1000,
    option: {
      label: {
        distance: 50,
        color: 'blue'
      },
      title: {
        show: false
      },
    }
  },
];

export default function PieChart() {
  let chartContainer = useRef(null);
  const [selectValue, setSelectValue] = useState(0);
  const [chartWidth, setChartWidth] = useState('1400px');

  useEffect(() => {
    let chartIns = new IntegrateChart();
    chartIns.init(chartContainer.current);
    // chartIns.mediaScreen(document.documentElement, pieMediaOption);
    // chartIns.setSimpleOption('PieChart', pieChartOpt, {});
    setTimeout(() => {
      // chartIns.refresh({...pieChartOpt})
      // chartIns.setSimpleOption('PieChart', {...pieChartOpt,data:[ { value: 100, name: 'VPC' },
      // { value: 90, name: 'IM' },]}, {});
      // chartIns.render()
      // chartIns.mediaScreenObserver.curRange=[]
      // chartIns.mediaScreenObserver.observe()
      // chartIns.refreshData([{ value: 100, name: 'VPC' },
      // { value: 90, name: 'IM' },])
      chartIns.mediaScreen(document.documentElement, pieMediaOption);
      chartIns.setSimpleOption('PieChart', pieChartOpt, {});
      chartIns.render()
    }, 1000);
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
    <div className="chartContainer">
      <Select
        options={selectOptions}
        value={selectValue}
        onChange={selectChange}
        label={'切换图表尺寸'} />
      <div
        className='chart'
        ref={chartContainer}
        style={{ height: '400px', width: chartWidth }}
      />
    </div>
  );
}
