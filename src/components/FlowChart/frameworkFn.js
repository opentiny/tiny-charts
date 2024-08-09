// Vue 框架依赖配置
import { createApp, h } from 'vue';

// React 框架依赖配置
import ReactDOMServer from 'react-dom/server';

// Angular 框架依赖配置
import { ViewContainerRef } from '@angular/core';

export function createVueApp(options) {
  if (!createApp) {
    throw new Error('Vue is not installed. Please install Vue to use createApp.');
  }
  return createApp(options);
}

export function createElement(tag, props, children) {
  if (!h) {
    throw new Error('Vue is not installed. Please install Vue to use the createElement function.');
  }
  return h(tag, props, children);
}

export function renderToString(Component) {
  const { renderToString } = ReactDOMServer;

  if (!renderToString) {
    throw new Error('react-dom is not installed. Please install react-dom to use the renderToString function.');
  }
  return renderToString(Component);
}

export function AngularViewContainerRef() {
  if (!ViewContainerRef) {
    throw new Error('@angular/core is not installed. Please install @angular/core to use the renderToString function.');
  }
  return ViewContainerRef;
}