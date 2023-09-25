import React, { useEffect, useState, useRef } from 'react';
import ChartList from './ChartList';

const Overview = () => {
  const [theme, setTheme] = useState(() => {
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    const theme = darkMode.matches ? 'dark' : 'light';
    return theme;
  });
  const chartContainer = useRef(null);
  const [shouldRender, setShouldRender] = useState([]);

  useEffect(() => {
    let observer = [];
    let shouldRenderTemp = [...shouldRender]; // 更新shouldRender
    let targetList = (chartContainer.current && [...chartContainer.current.children]) || [];
    targetList.length &&
      targetList.forEach((target, index) => {
        if (target) {
          observer[index] = new IntersectionObserver(
            entries => {
              entries.forEach((entry, index) => {
                if (entry.isIntersecting) {  // 节点刚进入视口触发
                  let shouldRenderIndex = parseInt(entry.target.getAttribute('data-index'));
                  shouldRenderTemp.push(shouldRenderIndex);
                } else { // 节点完全脱离视口触发
                  let removeRenderIndex = parseInt(entry.target.getAttribute('data-index'));
                  if (shouldRenderTemp.indexOf(removeRenderIndex) !== -1) {
                    shouldRenderTemp.splice(shouldRenderTemp.indexOf(removeRenderIndex), 1);
                  }
                }
              });
              setShouldRender([...new Set(shouldRenderTemp)]);
            }
          );
          observer[index].observe(target);
        }
      });
    return () => {
      observer.forEach((observe) => {
        observe.disconnect();
      });
    };
  }, []);


  // 点击切换外层手风琴页面路由
  const jumpChartPage = (e, index) => {
    const hash = top.location.hash;
    const updateHash = hash.slice(0, hash.lastIndexOf('/') + 1) + ChartList(theme, shouldRender)[index].name;
    top.location.hash = updateHash;
  };

  return (
    <div className="ic-example-explore">
      <div className="ic-example-list-container">
        <div className="ic-example-list">
          <div className="ic-example-list-title">图表总览 OverView</div>
          <div className="ic-example-list-search">
            <i className="ic-example-list-icon" />
            <input type="text" className="ic-example-list-input" placeholder="搜索图表" />
          </div>
          <div className="ic-example-card">
            <div className="ic-example-card" ref={chartContainer}>
              {ChartList(theme, shouldRender).map((item, index) => {
                return (
                  <div
                    className="ic-example-list-box ic-overview-item"
                    style={{ marginRight: index % 3 === 2 ? 0 : '' }}
                    onClick={e => {
                      jumpChartPage(e, index);
                    }}
                    data-index={index}
                    key={index}
                  >
                    {item.components(index)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
