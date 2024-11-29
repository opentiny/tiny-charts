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
// Vue 框架依赖配置
import { createApp, h ,ref } from 'vue';
// 原有的nodeRender方法
import nodeRender from './index';

// 创建 Vue 应用
function createVueApp(options) {
  if (!createApp) {
    throw new Error('Vue is not installed. Please install Vue to use createApp.');
  }
  return createApp(options);
}

// 创建 Vue 组件或元素
function createElement(tag, props, children) {
  if (!h) {
    throw new Error('Vue is not installed. Please install Vue to use the createElement function.');
  }
  return h(tag, props, children);
}

// 渲染vue组件
function createVue(container, component, data, nodeInstance) {
  // 挂载vue节点
  const app = createVueApp({
    data() {
      return {
        data: ref(data)
      }
    },
    render() {
      return createElement(component, {
        data: this.data
      });
    }
  });
  const vm = app.mount(container);
  // 添加Vue节点实例
  setTimeout(() => {
    nodeInstance.setComponentApp({
        app: app,
        unmount: app.unmount,
        updata: (newdata) => {
          vm.data = Object.assign({}, vm.data, newdata);
        }
    })
  }, 10);
}


// 判断是否为vue组件
function isVueComponent(component) {
  // 检查是否是 Vue 组件
  if (typeof component === 'function' && component.prototype && component.prototype.$options) {
    return true;
  }
  if (typeof component === 'object' && (component.render || (component.type?.render && component.type?.__scopeId))) {
    return true;
  }
  return false;
}

// 判断是否为dom节点
function isDOM(obj) {
  return obj instanceof HTMLElement;
}

// Vue 组件渲染
function renderVueComponent(container, component, data, nodeInstance) {
  // debugger
  // 函数式组件处理
  if (typeof component === 'function') {
    const dom = component(container, data);
    if (!dom) return;
    // 有返回值 返回dom
    if (isDOM(dom)) {
      dom && container.appendChild(dom);
    }
    // 有返回值 返回vue组件
    else if (isVueComponent(dom)) {
      createVue(container, dom, data, nodeInstance);
    } else {
      throw new Error('Please provide correct function.');
    }
  }
  // Vue组件处理
  else if (isVueComponent(component)) {
    createVue(container, component, data, nodeInstance);
  }
  // 非Vue组件异常处理
  else {
    throw new Error('Provided component is not a valid Vue component.');
  }
}

// 用新的vue节点渲染方法替代原有方法
nodeRender.render = renderVueComponent;
export default nodeRender;