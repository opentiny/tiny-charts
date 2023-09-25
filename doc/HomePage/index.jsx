import React, { useState, useEffect, } from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import Icon from '@nce/eview-react/Icon';
import '@nce/eview-react/styles/aui3.css';
import '@nce/eview-react/styles/aui3_dark.css';
import Menu from '../Menu/index';
import './index.less';
import './dark.less';

const HomePage = () => {
  const [selectIndex, setIndex] = useState(1);
  const [hasMask, setMask] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [isShowCard, setShowCard] = useState(false);
  const [modeName, setModeName] = useState('aui3');
  const handleMode = () => {
    const darkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    setModeName(darkMode.matches ? 'aui3_dark' : 'aui3');
  };
  // 监听电脑系统暗黑主题
  useEffect(() => {
    handleMode();
    const windowTheme = window.matchMedia('(prefers-color-scheme: dark)');
    windowTheme.addListener(e => {
      handleMode();
    });
  });
  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const handNav = url => {
    if (url === '#') {
      return;
    }
    window.location.href = url;
    setShowCard(false);
  };
  const handNavMouseOver = index => {
    if (index === 1) {
      setMask(true);
    }
    setIndex(index);
  };
  const onResize = () => {
    setShowCard(false);
    if (document.body.clientWidth < 1201) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  const navOptions = [
    { zh: '设计', en: 'Design', url: 'https://ucd.huawei.com/designSystem/ICT' },
    {
      zh: '开发',
      en: 'Developmzht',
      url: '#',
      children: [
        { zh: 'A3D 平台', url: 'https://hdesign.ucd.huawei.com/development/A3D' },
        { zh: 'HUI 组件库 (Vue2)', url: 'https://hdesign.ucd.huawei.com/development/HUI-Vue/quick-start' },
        { zh: 'HUI 组件库 (Vue3)', url: 'https://hdesign.ucd.huawei.com/development/HUI-Vue3' },
        { zh: 'HUI 组件库 (React)', url: 'https://hdesign.ucd.huawei.com/development/HUI-React' },
        { zh: 'HUI 移动端组件库(React)', url: 'https://hdesign.ucd.huawei.com/development/HUI-React-Mobile' },
        { zh: 'HUI 图表库', url: 'https://hdesign.ucd.huawei.com/hui-charts/index.html' },
      ],
    },
    { zh: '资源', en: 'Resources', url: 'https://ucd.huawei.com/designSystem/standard/1473/11244' },
    { zh: '生态', en: 'Ecology', url: 'https://ucd.huawei.com/huaweiDesignSystem/ecology' },
    { zh: '关于', en: 'About Us', url: 'https://ucd.huawei.com/introduce' },
  ];
  return (
    <div className={`${modeName} ic-homepage ev_no_wcag`}>
      {/* header */}
      {/* <div className="ic-homepage-head">
        <a href="#/Example/ReadMe" className="header-logo-link">
          <img src="./image/Doc/logo.png" alt="标志" />
          <span>HUAWEI</span>
        </a>
        {isMobile ? (
          <div
            className="header_btn"
            onMouseOut={() => setShowCard(false)}
          >
            <Icon name='ict_lists' size={[24, 24]} title='ict_lists'
              onClick={() => setShowCard(!isShowCard)} isStandard={false} />
            {isShowCard === true && (
              <div className="header_lists">
                {navOptions.map((item, index) => {
                  return (
                    <div key={index} className={index !== 0 ? 'header_lists_item border' : 'header_lists_item'}>
                      <div className="header_lists_title" onClick={() => handNav(item.url)}>
                        {item.zh}
                      </div>
                      {item.children &&
                        item.children.map((jtem, jdex) => {
                          return (
                            <div className="header_lists_text" key={jdex} onClick={() => handNav(jtem.url)}>
                              {jtem.zh}
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="header-operate">
              <div className="header-nav">
                {navOptions.map((item, index) => {
                  return (
                    <div
                      className="header-nav-item"
                      key={index}
                      onClick={() => handNav(item.url)}
                      onMouseOver={() => handNavMouseOver(index)}
                      onMouseLeave={() => { setIndex(1), setMask(false); }}
                    >
                      <span className="nav-item-zh">{item.zh}</span>
                      <span className="nav-item-en">{item.en}</span>
                      <span className={selectIndex === index ? 'nav-red-line visit' : 'nav-red-line'} />
                      {index == 1 ? (
                        <div className={hasMask ? 'nav-children showChildren' : 'nav-children'}>
                          {item.children.map((jtem, jndex) => {
                            return <div onClick={() => handNav(jtem.url)} key={jndex}>
                              {jtem.zh}
                            </div>;
                          })}

                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
            {hasMask ? <div className="hasChildren" ><div /></div> : null}
          </>
        )}
      </div> */}
      <div className="ic-homepage-route">
        <div className="ic-example">
          <HashRouter>
            <Switch>
              <Route path='/Menu' component={Menu} ></Route>
              <Redirect to='/Menu/ReadMe'></Redirect>
            </Switch>
          </HashRouter>
          <iframe
            src='./example.html#/Example/ReadMe'
            id='ic-iframe'
            name='test'
            className='ic-iframe'
            style={{width:isMobile?'100%':'calc(100% - 21.875rem)',marginLeft:isMobile?'0rem':'21.875rem'}}
          >
          </iframe>
          </div>
        </div>
    </div >

  );
};

export default HomePage;
