/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import nodeRender from './index';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// React 框架下的渲染及卸载 container需为空容器
function createReact(container, component, data, nodeInstance) {
  let setState;
  let app = React.createElement(() => {
    const [newData, setNewData] = useState(data);
    setState = setNewData;
    return React.cloneElement(component, { data: newData });
  })
  const root = createRoot(container); 
  root.render(app);
  // 卸载组件准备
  setTimeout(() => {
    // 将 react 实例 unmount updata添加到 appIns 对象中
    nodeInstance.setComponentApp({
      app: app,
      unmount: () => {root.unmount()},
      updata: (newData) => {
        setState((prevState) => (
          Object.assign({}, prevState, newData)
        ))
      }
    });
  }, 10)
}

// 判断是否为dom节点
function isDOM(obj) {
  return obj instanceof HTMLElement;
}

// 判断是否为react组件
function isReactElement(obj) {
  if (!React) {
    throw new Error('React is not installed. Please install react.');
  }
  return React.isValidElement(obj);
}

// React 组件渲染
function renderReactComponent(container, component, data, nodeInstance) {
  // 函数式组件处理
  if (typeof component === 'function') {
    const dom = component(container, data);
    if (!dom) return;
    // 有返回值 返回dom
    if (isDOM(dom)) {
      dom && container.appendChild(dom);
    }
    // 有返回值 返回react组件
    else if (isReactElement(dom)) {
      createReact(container, dom, data, nodeInstance);
    } else {
      throw new Error('Please provide correct function.');
    }
  }
  // React组件处理
  else if (isReactElement(component)) {
    createReact(container, component, data, nodeInstance);
  }
  // 非React组件异常处理
  else {
    throw new Error('Provided component is not a valid react component.');
  }
}

// 用新的React节点渲染方法替代原有方法
nodeRender.render = renderReactComponent;
export default nodeRender;