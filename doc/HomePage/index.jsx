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
  return (
    <div className={`${modeName} ic-homepage ev_no_wcag`}>
      { }
      { }
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
            style={{ width: isMobile ? '100%' : 'calc(100% - 21.875rem)', marginLeft: isMobile ? '0rem' : '21.875rem' }}
          >
          </iframe>
        </div>
      </div>
    </div >

  );
};

export default HomePage;
