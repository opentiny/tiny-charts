import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import MainPage from './Content/MainPage';
import MarkdownPageList from './MarkdownPage/markdownPageList';
import './index.less';
import './dark.less';

function Example() {
  const [theme, setTheme] = useState(matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const handleMode = () => {
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(darkMode.matches ? 'dark' : 'light');
  };

  // 监听电脑系统暗黑主题
  useEffect(() => {
    handleMode();
    const windowTheme = window.matchMedia('(prefers-color-scheme: dark)');
    windowTheme.addListener(e => {
      handleMode();
    });
  });

  // 网站部署添加
  useEffect(() => {
    if (window.parent?.window.parent?.iframeLoadCallback) {
      window.parent.window.parent.iframeLoadCallback(document);
    }
  }, []);

  document.body.className = `ic-${theme} aui3 ev_no_wcag`;
  document.documentElement.className = `ic-${theme}`;
  return (
    <IntlProvider locale={'zh'}>
      <div className="ic-example">
        <HashRouter>
          <Switch>
            {MarkdownPageList.map((item, index) => {
              return <Route key={index} path={`/Example/${item.name}`} component={item.component} />;
            })}
            <Route path={'/Example/*'} component={MainPage} />
            <Redirect to="/Example/ReadMe" />
          </Switch>
        </HashRouter>
      </div>
    </IntlProvider>
  );
}

export default Example;
