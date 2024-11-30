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
import { percentToDecimal } from '../../../../util/math';
import { hashString }  from'../../../../util/math';

// 连接点均分模式
const SHARING_TYPE = {
    MERGE: 'merge',
    SHARING:'sharing', 
    STRICT:'strict'
};

//根据均分类型计算对应坐标
function countCoordinate(sideLength,pointData) {
    let coordinate;
    let {sharingType, length, index} = pointData;
    if(sharingType === SHARING_TYPE.SHARING) { // 均分模式
        coordinate =  sideLength / (length * 2) * ((index-1) * 2 + 1);
    }
    else if (sharingType === SHARING_TYPE.STRICT) { // 严格均分模式
        coordinate =  sideLength / (length + 1) * index;
    } 
    else { // 默认模式，不均分连接点位于中间位置
        coordinate = sideLength / 2;
    }
    // 保留一位小数点
    coordinate = Math.floor(coordinate * 10) / 10
    return coordinate;
}


// 计算连接点位置
function calculate(itemData,allConnectorData,option,nodeObj){

    let {startConnector,endConnector} = itemData;
    if(!nodeObj[itemData.start] || !nodeObj[itemData.end]) return;
    let startNode = nodeObj[itemData.start];
    let endNode = nodeObj[itemData.end];
    let startSharing = option?.connector?.startSharing;
    let endSharing = option?.connector?.endSharing;
    countPoint(startConnector,startNode,allConnectorData,startSharing);
    countPoint(endConnector,endNode,allConnectorData,endSharing);
    return itemData;
}

// 计算连接点X，Y坐标
function countPoint(connector,node,data,sharing) {
    const {width,height} = node; //
    const position = connector.position; // 连接点位置
    const sharingType = sharing; // 连接点分离类型，默认不分离
    const args = connector.args; // 连接点其他配置信息
    const length = data[connector.nodeId][position].number; // 同一方向上连接点数量
    const index = connector.index; // 同一方向上第几个连接点
    let X,Y; // 连接点的坐标
    let pointData = {length,index,sharingType};
    switch (position) {
        case 'top':
            X = countCoordinate(width,pointData);
            Y = 0;
            break;
        case 'bottom':
            X = countCoordinate(width,pointData);
            Y = height;
            break;
        case 'left':
            X = 0;
            Y = countCoordinate(height,pointData);
            break;
        case 'right':
            X = width;
            Y = countCoordinate(height,pointData);
            break;
        case 'absolute': 
            X = args.x.indexOf('%') == -1 ?  width * percentToDecimal(args.x) : args.x;
            Y = args.y.indexOf('%') == -1 ?  height * percentToDecimal(args.y) : args.y;
    }
    let deviateX = 0; // X轴偏移量
    let deviateY = 0; // Y轴偏移量
    if(connector.args) { 
        deviateX = connector.args.dx ? connector.args.dx : 0;
        deviateY = connector.args.dy ? connector.args.dy : 0;
    }
    connector.x = X + deviateX;
    connector.y = Y + deviateY;
    connector.id = connector.id || hashString();
}

//根据均分类型计算对应坐标
function update(lineData,option) {
    const type = option?.connector?.sharing;
    const direction = option.layout?.direction;
    // 按照相同的起始连接点整理连接数据
    let lineDataByStart = {};
    let newLineData = [];
    // 非默认模式下，将线段数据按相同的起始节点归类
    if(type === 'sharing' || type === 'strict'){
        lineData.forEach(item => {
            let nodeId = item.startNode.id;
            if(lineDataByStart[nodeId] && lineDataByStart[nodeId].length){
                lineDataByStart[nodeId].push(item);
            } else {
                lineDataByStart[nodeId] = [];
                lineDataByStart[nodeId].push(item);
            }
        });

        Object.keys(lineDataByStart).forEach(key => {
            let nodeData = lineDataByStart[key];
            let connectorAllCoordinate = [];
            // 按照末端节点排序
            if(direction === 'TB') {
                nodeData.sort((a, b) => a.endNode.x - b.endNode.x);
            } else {
                nodeData.sort((a, b) => a.endNode.y - b.endNode.y);
            }
            // 以节点坐标位置，更新连接点坐标，
            nodeData.forEach(item => {
                let startConnector = item.startConnector;
                // 获取一个节点的所有起点连接点坐标
                connectorAllCoordinate.push({x: startConnector.x,y: startConnector.y});
                if(connectorAllCoordinate.length === nodeData.length) {
                    // 按照连接点坐标排序
                    if(direction === 'TB') {
                        connectorAllCoordinate.sort((a, b) => a.x - b.x);
                    } else {
                        connectorAllCoordinate.sort((a, b) => a.y - b.y);
                    }
                    // 更新连接点起始坐标
                    connectorAllCoordinate.forEach((connector,index) => {
                        nodeData[index].startConnector.x = connector.x;
                        nodeData[index].startConnector.y = connector.y;
                        newLineData.push(nodeData[index]);
                    })
                    
                }
            })
            
        })
        lineData = newLineData;
    }
}

// 相同位置的连接点用同一id
function someId(edges) {
    let connectorArr = [];
    edges.forEach(item => {
        if(item.startConnector) {
            connectorArr.push(item.startConnector)
        }
        if(item.endConnector) {
            connectorArr.push(item.endConnector)
        }
    })
    connectorArr.forEach((item,index) => {
        let remainArr = connectorArr.slice(index + 1);
        remainArr.forEach(connector => {
            if(item.x == connector.x && item.y === connector.y && item.nodeId === connector.nodeId) {
                connector.id = item.id;
            }
        })
    })
}

    
export { calculate , update, someId};