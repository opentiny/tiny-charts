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
import { Animation } from '../animation'
import nodeRender from '../../../feature/nodeRender';

const NODE_WIDTH = 100;
const NODE_HEIGHT = 50;
export default class Node {
    // 节点数据
    data;
    // 用户传入的渲染方法、框架组件、DOM元素
    component;
    // 节点容器
    container;
    // 节点外壳
    nodeContainer;
    // 节点最终位置
    position;
    // 节点实时位置，用于做动效位移使用
    currentPosition;
    // 框架节点组件实例
    app;
    // 节点是否已渲染
    hasRender;

    constructor(data, option, container) {
        this.data = data;
        this.currentPosition = data;
        this.component = this.setComponent(data, option);
        this.container = container;
        this.setComponentSize(data, option);
        this.setComponentPosition(data);
        this.hasRender = false;
    }

    render() {
        if (!this.data) return;
        let { id } = this.data;
        let nodeContainer = document.createElement("div");
        nodeContainer.id = id;
        nodeContainer.style.width = this.componentSize.width + 'px';
        nodeContainer.style.height = this.componentSize.height + 'px';
        nodeContainer.style.top = this.position.y + 'px';
        nodeContainer.style.left = this.position.x + 'px';
        nodeContainer.style.position = 'absolute';
        nodeContainer.setAttribute('class', 'huicharts-node');
        nodeRender.render(nodeContainer, this.component, this.data, this);
        // TODO 此处要改，不建议存储dom
        this.nodeContainer = nodeContainer;
        this.setCurrentPosition({
          left: this.position.x,
          top: this.position.y,
          width: this.componentSize.width,
          height: this.componentSize.height,
        });
        this.bindEvents();
        // 设置节点为已渲染
        this.hasRender = true;
        return nodeContainer;
    }

    // 兼容旧版本的render方法
    setComponent(data, option) {
        let dataComponent = data.component || data.render;
        let optionComponent = option.component || option.render;
        return dataComponent || optionComponent;
    }

    // 设定节点尺寸
    setComponentSize(data, option) {
        this.componentSize = {
            width: data?.width || option?.node?.width || NODE_WIDTH,
            height: data?.height || option?.node?.height || NODE_HEIGHT
        };
        return this.componentSize;
    }

    // 设定节点最终位置
    setComponentPosition(data) {
        this.position = {
            x: data.x,
            y: data.y
        }
        return this.position;
    }

    // 设定当前节点位置，实时更新，用于做动效位移使用
    setCurrentPosition(rect) {
        this.currentPosition.x = rect.left;
        this.currentPosition.y = rect.top;
        this.currentPosition.width = rect.width;
        this.currentPosition.height = rect.height;
    }

    getCurrentPosition() {
        return this.currentPosition;
    }

    // 设定各个框架节点实例
    setComponentApp(app) {
        this.app = app;
    }

    // 更新节点
    updata(data) {
        this.app?.updata(data);
    }

    // 卸载节点
    unmount() {
        this.app?.unmount();
        this.container.removeChild(this.nodeContainer);
    }
 
    // 节点绑定事件
    bindEvents(){
        for (const eventName in this.data.event) {
            this.addEventListener(eventName, this.data.event[eventName]);
        }
    }

    addEventListener(eventName, callback){
        if(!this.nodeContainer) return;
        this.nodeContainer.addEventListener(eventName,  (event) => {
            callback(event, this.data);
        });
    }

    removeEventListener(eventName, callback){
        if(!this.nodeContainer) return;
        this.nodeContainer.removeEventListener(eventName,  (event) => {
            callback(event, this.data);
        });
    }

    // 位置变换，数据刷新，节点刷新
    refresh(newData) {
        let animation = new Animation(this.nodeContainer, {
            start: {
                top: this.position.y,
                left: this.position.x,
                width: this.componentSize.width,
                height: this.componentSize.height,
            },
            end: {
                top: newData.y,
                left: newData.x,
                width: newData.width,
                height: newData.height,
            },
            duration: 500,
            onAfterUpdate: (params, elapsed, element) => {
                this.setCurrentPosition(params);
            },
            onFinish: () => {
                this.setComponentPosition(newData);
                this.setComponentSize(newData, {});
                this.setData(newData);
                this.updata(newData)
            }
        })
        animation.start();
    }

    setData(data) {
        this.data = data;
    }

    getDom(){
        return this.nodeContainer;
    }

    getData() {
        return this.data;
    }
}
