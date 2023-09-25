import React, { useEffect, useState } from 'react';
import ExampleData from '../ExampleData';
import APITable from '../../components/APITable';
import APIData from '../../APIData';
import List from '../../components/List/List';
import '@nce/eview-react/styles/aui3.css';

export default function NavList(props) {
  // 获取初始化图表名称
  const chart_name = window.location.hash.split('/')[2].slice(0, window.location.hash.split('/')[2].indexOf('?'));
  const [propertyName, setPropertyName] = useState(chart_name);
  const [ChartData, setChartData] = useState(() => {
    const ChartName = chart_name;
    
    return [ExampleData[ChartName]];
  });
  const [theme, setTheme] = useState(matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const [jsiframe, setJsiframe] = useState('origin');
  useEffect(() => {
    const hash = window.location.hash.split('/');
    // 图表名称
    const name = hash[2].slice(0, hash[2].indexOf('?'));
    // 图表主题
    const themeStr = hash[2].slice(hash[2].indexOf('?'), hash[2].indexOf('&'));
    setTheme(themeStr.slice(themeStr.indexOf('=') + 1));
    // 技术栈
    const jsiframeStr = hash[2].slice(hash[2].indexOf('&'));
    setJsiframe(jsiframeStr.slice(jsiframeStr.indexOf('=') + 1));
    if (name !== 'ReadMe' && name !== 'ChangeLog' && name !== 'FAndQ' && name !== 'undefined') {
      setChartData([ExampleData[name]]);
      setPropertyName(name);
      // 复位滚动条
      document.documentElement.scrollTop = 0;
    }
  }, [window.location.hash]);

  document.body.className = `ic-${theme} aui3 ev_no_wcag`;
  document.documentElement.className = `ic-${theme}`;
  return (
    <div className='ic-example-explore'>
      <div className="ic-example-list-container">
        {ChartData.map((data, index) => {
          return <List key={index} title={data.title} paths={data.paths} theme={theme} jsiframe={jsiframe} />;
        })}
      </div>
      <div className="ic-example-chartProperty">
        {/* <ConfigDescription configDescription_zh={ExampleProperty[propertyName]} /> */}
        <APITable apiDescription={APIData[propertyName]} chartName={propertyName}/>
      </div>
    </div>
  );
}
