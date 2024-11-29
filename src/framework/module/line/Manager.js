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
import Line from "./index";
import Customize from "./customize";
import LineLayout from '../lineLayout';
import merge from '../../../util/merge';
import bufferRender from './bufferRender';
import ArrowManager from '../arrow/Manager';
import ConnectorManager from '../connector/Manager';
import { Animation } from '../../module/animation';

const DEFAULT_LINE = {
  type: 'Round',
  style: {
    width: 1,
    radius: 0,
    mode: 'solid',
    color: '#c2c2c2',
    hover: {
      color: '#2070F3'
    },
    active: {},
    disable: {}
  },
  endMarker: {
    size: 8,
    type: 'block',
    color: '#c2c2c2'
  }
};

export default class LineManager {
  // 线管理器工厂
  instance = {};
  canvasContainter;
  
  // 再次全部渲染线的延迟时间（等待节点渲染动效完成）
  RE_CREATE_TIME = 500;

  constructor(option, container, chartInstance) {
    this.option = option;
    this.container = container;
    this.chartInstance = chartInstance;
    this.gContainer = this.getGContainer();
    this.canvasContainter = this.container.parentNode;
    this.animationContainter = this.getAnimationContainer();
  }

  init(option) {
    const lineOpt = merge(DEFAULT_LINE, option.line);
    this.lineOption = lineOpt;
    this.onClick = lineOpt.onClick;
    this.onHover = lineOpt.onHover;
    this.ArrowManager = new ArrowManager(lineOpt, this.container)
  }

  // 根据edges生成连接点
  layout(nodeManager) {
    this.nodeManager = nodeManager;
    this.relationData = nodeManager.getData();
    new LineLayout(this.relationData, this.option);
    this.connectorManager = new ConnectorManager(this.chartInstance, this.relationData.edges, this.option);
    this.init(this.option);
    this.createLineData(this.option.data, this.option);
  }

  // 刷新连线
  relayout(option) {
    // 此时的节点数据中，x,y.width,height为最新值，其他数据是老的，数量也是最新的（经过了增删改查）
    let currentNodePosition = this.nodeManager.getCurrentPosition();
    this.currentRelationData = {
      nodes: [],
      edges: this.nodeManager.getData().edges
    }
    let newNodeIds = [];
    for (let i in currentNodePosition) {
      this.currentRelationData.nodes.push(currentNodePosition[i]);
      newNodeIds.push(i)
    }
    // this.nodeManager.getData(); 要加id
    this.relationData.edges.forEach(line => {
      this.currentRelationData.edges.forEach((edge, i) => {
        if (edge.start == line.start && edge.end == line.end) {
          this.currentRelationData.edges[i] = line
        }
      })
    })
    new LineLayout(this.currentRelationData, option);
    // this.init(option);
    this.connectorManager.refresh(this, this.currentRelationData.edges, option)
    this.createLineData(this.currentRelationData, option);
  }

  // 绘制自定义连线
  renderCustom(option, svgContainer) {
    // nodeManager 好像没用了
    new LineLayout(option.data, option);
    this.customizeData = option.data;
    // customizeData 就是自定义的连线的数据,nodes和edges
    this.createLineData(this.customizeData, option);
    // render
    const lineOpt = merge(DEFAULT_LINE, option.line);
    option.duration = this.RE_CREATE_TIME;
    const customizeArrow = new ArrowManager(lineOpt, this.container)
    Customize({
      data: this.customizeData,
      option,
      ArrowManager: customizeArrow,
      svgContainer
    });
  }

  // 将点的原始数据，转换成线的数据格式
  createLineData(data, option) {
    let nodeData = {};
    data.nodes.forEach(node => {
      nodeData[node.id] = node
    })
    data.edges.forEach((edge, i) => {
      const { startConnector, endConnector, end, start } = edge;
      if (!nodeData[start] || !nodeData[end]) {
        delete data.edges[i]
      }
      const id = `${startConnector.id}-to-${endConnector.id}`;
      edge.id = id;
      edge.startConnector.absolute = {
        x: startConnector.x + nodeData[start]?.x,
        y: startConnector.y + nodeData[start]?.y,
      };
      edge.endConnector.absolute = {
        x: endConnector.x + nodeData[end]?.x,
        y: endConnector.y + nodeData[end]?.y,
      };
      const lineStyle = merge(DEFAULT_LINE, option.line);
      edge.lineOption = lineStyle;
    })
  }

  render() {
    let containerRect = this.container.getBoundingClientRect();
    this.canvasContainterRect = this.canvasContainter.getBoundingClientRect();
    this.containerCenter = {
      x: containerRect.width / 2,
      y: containerRect.height / 2
    };
    if (this.option.layout?.bufferRender) {
      // 执行局部渲染方法
      this.relationData.edges.forEach((edge) => {
        this.bufferRenderLine(edge, this.option);
      })
    } else {
      // 执行全局渲染方法
      this.relationData.edges.forEach((edge) => {
        this.renderLine(edge, this.option);
      })
    }
  }

  // 局部渲染连线方法
  bufferRenderLine(edge, option) {
    // edge里会配置单根线MergeOption，需要合并一下 todo
    this.instance[edge.id] = new Line(edge, this.ArrowManager, option);
    // 使用初始偏移 (0, 0) 进行首次渲染
    const path = bufferRender(this.instance[edge.id], {
      scale: 1,
      lastScale: 1,
      offset: { x: 0, y: 0 },
      center: this.containerCenter
    }, this.gContainer, this.canvasContainterRect);// TODO 初始渲染可能缩放值不是1
    if (this.instance[edge.id].hasRender) {
      this.bindEvent(this.instance[edge.id], path);
    }
  }

  // 全局渲染连线方法
  renderLine(line, option) {
    this.instance[line.id] = new Line(line, this.ArrowManager, option);
    let path = this.instance[line.id].render();
    this.bindEvent(this.instance[line.id], path);
    this.gContainer.appendChild(path);
  }

  bindEvent(lineInstance, path) {
    if (this.onClick || this.lineOption.active) {
      lineInstance.bindEvent(path, 'click', this.onClick);
    }
    if (this.onHover || this.lineOption.hover) {
      lineInstance.bindEvent(path, 'hover', this.onHover);
    }
    // 绑定连线由短变长的动效
    lineInstance.animation({
      type: 'grow',
      duration: this.RE_CREATE_TIME,
      path
    });
  }

  // 外部触发局部渲染回调
  onBufferRender(params) {
    if (!this.option.layout?.bufferRender) return;
    for (let id in this.instance) {
      bufferRender(this.instance[id], params, this.gContainer, this.canvasContainterRect);
    };
  };

  // 重新刷新连线，伴随动画
  refresh(option) {
    let self = this;
    let animation = new Animation(null, {
      start: { x: 0, y: 0 },
      end: { x: 100, y: 100 },
      duration: 600,
      onUpdate: function () {
        self.relayout(option);
        self.reUpdate(option);
      }
    })
    animation.start();
  }

  // 对比前后差异，重新刷新连线, this.currentRelationData 是新数据， this.instance是老线数据
  reUpdate(option) {
    let newIds = [];
    let oldIds = [];
    this.currentRelationData.edges.forEach(edge => {
      newIds.push(edge.id);
      if (this.isExist(edge.id)) {
        this.update(edge);
      } else {
        this.renderLine(edge, option);
      }
    });
    oldIds = Object.keys(this.instance);
    oldIds.forEach(id => {
      if (newIds.indexOf(id) == -1) {
        this.unmount(id);
      }
    })
  }

  // 全部删除旧连线，创建新的连线
  reCreate(nodeManager, option) {
    for (let i in this.instance) {
      this.unmount(i);
    }
    this.instance = {};
    setTimeout(() => {
      this.relationData = nodeManager.getData();
      new LineLayout(this.relationData, option);
      this.createLineData(this.relationData, option);
      this.connectorManager.reCreate(this, this.relationData.edges, option);
      this.render();
    }, this.RE_CREATE_TIME);
  }

  // 是否在原线管理器中
  isExist(id) {
    return this.instance[id];
  }

  getLine(id) {
    return this.instance[id];
  }

  getData = function () {
    return this.instance;
  }

  update = function (line) {
    this.instance[line.id]?.update(line);
  }

  hide = function (line) {
    this.instance[line.id]?.hide(line);
  }

  getGContainer() {
    return this.container.getElementsByClassName("huicharts-lines-g")[0];
  }

  getAnimationContainer() {
    return this.container.parentNode.getElementsByClassName("huicharts-animation-container")[0];
  }

  unmount(id) {
    this.instance[id].unmount(id);
    delete this.instance[id]
  }
}
