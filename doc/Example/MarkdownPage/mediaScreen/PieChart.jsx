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
    minWidth: 1001,
    option: {
      label: {
        line: true
      },
      title: {
        textStyle: {
          fontSize: 45,
        },
      },
      position: {
        radius: ['55%', '65%'],
      },
    }
  },
  {
    maxWidth: 1000,
    minWidth: 801,
    option: {
      label: {
        distance: 8
      },
      title: {
        left: '29.5%',
        textStyle: {
          fontSize: 30,
        },
      },
    }
  },
  {
    maxWidth: 800,
    minWidth: 601,
    option: {
      position: {
        radius: ['35%', '42%'],
      },
      title: {
        subtext: '',
        left: '29.4%',
      },
      label: {
        show: false
      }
    }
  },
  {
    maxWidth: 600,
    minWidth: 401,
    option: {
      legend: {
        top: 320,
        itemGap: 40,
        show: true,
        formatter: '',
        left: 'center',
        orient: 'horizontal'
      },
      position: {
        center: ['50%', '50%'],
        radius: ['30%', '37%']
      },
      title: {
        left: '49.1%',
        subtext: '',
        textStyle: {
          fontSize: 20,
        },
      },
      label: {
        show: false
      }
    }
  },
  {
    maxWidth: 400,
    option: {
      position: {
        center: ['50%', '50%'],
        radius: ['25%', '32%']
      },
      title: {
        show: false
      },
      label: {
        show: false
      },
      legend: {
        show: false
      }
    }
  }
];

export default function PieChart() {
  let chartContainer = useRef(null);
  const [selectValue, setSelectValue] = useState(0);
  const [chartWidth, setChartWidth] = useState('1400px');

  useEffect(() => {
    let chartIns = new IntegrateChart();
    chartIns.init(chartContainer.current);
    chartIns.mediaScreen(chartContainer.current, pieMediaOption);
    chartIns.setSimpleOption('PieChart', pieChartOpt, {});
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
