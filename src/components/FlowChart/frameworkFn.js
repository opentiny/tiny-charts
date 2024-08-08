
import { createApp, h } from 'vue';
import ReactDOMServer from 'react-dom/server';

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