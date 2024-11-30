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
import { hashString }  from'../../../../util/math';

// 计算连接点位置
function calculate(itemData,nodeObj,centerCircle){
    let {startConnector,endConnector} = itemData;
    if(!nodeObj[itemData.start] || !nodeObj[itemData.end]) return;
    let startNode = nodeObj[itemData.start];
    let endNode = nodeObj[itemData.end];
    // 连接点是否位于圆心
    if(centerCircle) {
        countPointCenter(startNode,startConnector,endNode,'start');
        countPointCenter(startNode,endConnector,endNode,'end');
    } else {
        countPoint(startNode,startConnector,endNode,'start');
        countPoint(startNode,endConnector,endNode,'end');
    }
    return itemData;
}

// 连接点位于圆心，计算连接点X，Y坐标
function countPointCenter(startNode,connector,endNode,port) {
    if(!startNode || !endNode) return;
    const startR = startNode.width / 2; // 起始节点半径
    const endR = endNode.width / 2; // 结束节点半径
    if(port === 'start') {
        // 保留一位小数
        connector.x = startR;
        connector.y = startR;
        connector.id = connector.id || hashString();
    } else {
        connector.x = endR;
        connector.y = endR;
        connector.id = connector.id || hashString();
    }
}

// 连接点位于圆弧，计算连接点X，Y坐标
function countPoint(startNode,connector,endNode,port) {
    if(!startNode || !endNode) return;
    const startR = startNode.width / 2; // 起始节点半径
    const endR = endNode.width / 2; // 结束节点半径
    let startX = startNode.x + startR;
    let startY = startNode.y + startR;
    let endX = endNode.x + endR;
    let endY = endNode.y + endR;
    const angle = Math.atan2(endY -  startY,endX - startX);
    if(port === 'start') {
        // 保留一位小数
        connector.x = startR + Math.floor(startR * Math.cos(angle) * 10) / 10 ;
        connector.y = startR + Math.floor(startR * Math.sin(angle) * 10) / 10 ;
        connector.id = connector.id || hashString();
    } else {
        connector.x = endR - Math.floor(endR * Math.cos(angle) * 10) / 10 ;
        connector.y = endR - Math.floor(endR * Math.sin(angle) * 10) / 10 ;
        connector.id = connector.id || hashString();
    }
}

    
export { calculate };