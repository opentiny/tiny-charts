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
// Angular 框架依赖配置
import { ViewContainerRef, Injector } from '@angular/core';
// 原有的nodeRender方法
import nodeRender from './index';

// 判断是否为Angular组件
function isAngularComponent(component) {
  // 检查 ɵcmp 属性
  if (component?.['ɵcmp']) {
    return true;
  }
  // 检查 ngComponentDef 属性
  if (component?.['ngComponentDef']) {
    return true;
  }
  // 检查 ɵfac 和 ɵdir 属性
  if (component?.['ɵfac'] && component?.['ɵdir']) {
    return true;
  }
  return false;
}

// 判断是否为dom节点
function isDOM(obj) {
  return obj instanceof HTMLElement;
}

// Angular 框架下的渲染及卸载
function createAngular(container, componentReturn, data, chartNodeManager) {
  if (!ViewContainerRef) {
    throw new Error('Angular is not installed. Please install angular.');
  }
  // 通过 injector 获取 ViewContainerRef 实例
  const { component, Injector } = componentReturn;
  const viewContainerRef = Injector.get(ViewContainerRef);
  // 创建组件实例
  const app = viewContainerRef.createComponent(component);
  // 传递数据
  if (data) {
    app.instance.data = data;
  }

  // 返回组件的 DOM 元素
  const nativeElement = app.location.nativeElement;
  container.appendChild(nativeElement);

  // 卸载组件准备
  setTimeout(() => {
    // 将 Angular 实例 unmount updata添加到 appIns 对象中
    nodeInstance.setComponentApp({
      app: app,
      unmount: () => {app.destroy();},
      updata: (newData) => {
        app.instance.data = Object.assign({}, app.instance.data, newData);
      }
    });
  }, 10)
}

// Angular 组件渲染
function renderAngularComponent(container, componentFun, data, chartNodeManager) {
  // 函数式组件处理
  if (typeof componentFun === 'function') {
    const dom = componentFun(container, data);
    if (!dom) return;
    // 有返回值 返回dom
    if (isDOM(dom)) {
      dom && container.appendChild(dom);
    }
    // 有返回值 返回Angular组件
    else if (typeof dom === 'object' && dom !== null) {
      if (dom.component && dom.injector && isAngularComponent(dom.component)) {
        createAngular(container, dom, data, chartNodeManager);
      } else {
        throw new Error('Provided object does not contain a valid Angular component and injector.');
      }
    } else {
      throw new Error('Please provide correct function.');
    }
  }
  // 非Angular组件异常处理
  else {
    throw new Error('Provided component is not a valid angular component.');
  }
}

// 用新的Angular节点渲染方法替代原有方法
nodeRender.render = renderAngularComponent;
export default nodeRender;