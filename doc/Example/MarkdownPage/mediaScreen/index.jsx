import React from 'react';
import MarkdownPage from '../MarkdownPage';
import BarChart from './BarChart';
import BarChartCode from './BarChart?raw';
import PieChart from './PieChart';
import PieChartCode from './PieChart?raw';
import './index.less';
import CodeExample from './CodeExample';
import Test from './Test'

export default function mediaScreen() {
  return (
    <div>
      <MarkdownPage path='quick_start/mediaScreen.md'></MarkdownPage>
      <CodeExample code={BarChartCode} title='响应式案例一：柱状图' className='firstCodeExample'>
        <BarChart></BarChart>
      </CodeExample>
      <CodeExample code={PieChartCode} title='响应式案例二：圆盘图'>
        <PieChart></PieChart>
        {/* <Test></Test> */}
      </CodeExample>
    </div>
  );
}