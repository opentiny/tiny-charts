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
import dot from './type/dot';
import expand from './type/expand';

const DOT = 'dot';// 圆点样式
const EXPAND= 'expand';// 展开样式

const CONNECTOR = {
    [DOT]: dot,
    [EXPAND]: expand,
};

class Connector{
	constructor(data, option, chartInstance){
		// 连接点数据
    	this.data = data;
        // 绘画连接点
		this.render(option, chartInstance);
        this.chartInstance = chartInstance;
	}

    // 绘画节点
    render(option,chartInstance) {
        const data = this.data;
        const nodeDom = document.getElementById(data.nodeId);
        const render = option.connector?.render;
        let connectorType = Object.assign({type: 'dot'},option.connector);
        let connectorStyle = connectorType.style;
        let connectorDom;
        let dom = document.createElement('div');
        dom.id = data.id;
        dom.setAttribute('class', 'connector-con');
        dom.setAttribute('style', `left: ${data.x}px; top: ${data.y}px;`)
        if(render && render(data)) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(render(data), "text/html");
            connectorDom = doc.body.firstChild;
        } else {
            let connectorIns = new CONNECTOR[connectorType.type](); 
            if(option.layout) {
                connectorDom = connectorIns.render(data, chartInstance);
            }
        }
        connectorStyle && connectorDom && Object.keys(connectorStyle).forEach(item => {
            connectorDom.style[item] = connectorStyle[item]
        })
        if(connectorDom) {
            dom.appendChild(connectorDom);
        }
        nodeDom && nodeDom.appendChild(dom);
        // 绑定事件
        this.clickEvent(dom,data,option);
    }
	
    // 绑定click事件
    clickEvent(dom,data,option) {
        let onClick = option.connector?.onClick;
        dom.addEventListener("click", function() {
            onClick && onClick(data);
        })
    }

    // 卸载节点
    uninstall(id,instances){
        let element = document.getElementById(id);
        element && element.remove();
        instances[id] && delete instances[id];
        this.Alldata[id] && delete this.Alldata[id];
    }

    // 更新节点信息
    update(id,data,option){
        let dom = document.getElementById(id);
        if(dom) {
            dom.setAttribute('style', `left: ${data.x}px; top: ${data.y}px;`);
            let connectorStyle = option?.connector?.style;
            connectorStyle && Object.keys(connectorStyle).forEach(item => {
                dom.style[item] = connectorStyle[item]
            })
        }
    }

    
}


export default Connector;

  