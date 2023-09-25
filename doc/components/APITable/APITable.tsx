import React from 'react';
import MarkdownElement from '../MarkdownElement';
import { Table } from '@nce/eview-react';
import '../ConfigDescription/Expand.less'
import '../ConfigDescription/ExpandDark.less'

// 直接使用原生echarts属性的图表,在api列表中显示做特殊处理
const extendsEchartsOptionChart = ['GraphChart', 'RegionChart']

export default function APITable(props) {
  if (!props.apiDescription) {
    return null;
  }
  const config = props.apiDescription;
  const columns = [
    {
      title: '参数',
      allowSort: false,
      width: '200',
    },
    {
      title: '说明',
      allowSort: false,
    },
    {
      title: '类型',
      allowSort: false,
      render: cell => {
        return (
          <span style={{ background: '#fbe5e1', color: '#c0341d', padding: '2px 6px', borderRadius: '4px' }}>
            {cell}
          </span>
        );
      },
      id: 'type_id',
    },
    {
      title: '默认值',
      allowSort: false,
    },
  ];
  

  const extendsChartColumn=[{
    title: '说明',
    allowSort: false,
    width: '200',
  }]

  const handleRowExpend = row => {
    let text = config.markdown[row.id];
    return (
      <MarkdownElement
        text={text}
        style={{
          fontSize: '14px',
          lineHeight: '32px',
          background: document.documentElement.className.indexOf('dark') === -1 ? '#f5f5f5' : '#1c1c1c',
          padding: '12px 44px 24px 44px',
        }}
      />
    );
  };
  return (
    <React.Fragment>
      <div className="chart-title">
        <h3>配置项说明</h3>
      </div>
      {extendsEchartsOptionChart.includes(props.chartName) && <Table
        columns={extendsChartColumn}
        dataset={[[<>
          {config.slice(0, config.indexOf('：') + 1)}
          <a style={{ color: '#007dff' }} href={config.slice(config.indexOf('：') + 1)}>
            {config.slice(config.indexOf('：') + 1)}
          </a></>]]}>
      </Table>}
      {!extendsEchartsOptionChart.includes(props.chartName) && <Table
        columns={columns}
        dataset={config.dataset}
        enableRowExpand
        enableRowExpandFreeze
        enableZebraCrossing={false}
        onRowExpend={handleRowExpend}
      ></Table>}
    </React.Fragment>
  );
}
