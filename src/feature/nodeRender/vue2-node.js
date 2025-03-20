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
import Vue from 'vue';
// 原有的nodeRender方法
import nodeRender from './index';

// 渲染vue组件
function createVue(container, component, data, nodeInstance) {
  // 挂载vue节点
  const vm = new Vue({
    data() {
      return {
        currentComponent: component,
        componentData: { ...data }
      }
    },
    render(createElement) {
      return createElement(this.currentComponent, {
        props: {
          data: this.componentData
        }
      });
    }
  });
  vm.$mount(container);
  container.appendChild(vm.$el);
  // 添加Vue节点实例
  setTimeout(() => {
    nodeInstance.setComponentApp({
      app: vm,
      unmount: () => { vm.$destroy() },
      update: (newdata) => {
        Object.assign(vm.componentData, newdata);
        vm.$forceUpdate();
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
  if (typeof component === 'object' && (component.render || (component.type && component.type.render && component.type.__scopeId) || component.__scopeId)) {
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