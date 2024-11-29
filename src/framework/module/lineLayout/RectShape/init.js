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
const VDirection = ['TB', 'BT', 'V'];
const HDirection = ['LR', 'RL', 'H'];
const START = 'start';
const END = 'end';
const Direction = {
    'T': 'top',
    'L': 'left',
    'R': 'right',
    'B': 'bottom'
};

function countPosition(startNode,endNode,direction){
    let startNodeStartPoint,startNodeEndPoint,endNodeStartPoint,endNodeEndPoint;
    if(direction === 'H') {
        startNodeStartPoint = startNode.x;
        startNodeEndPoint = startNode.x + startNode.width;
        endNodeStartPoint = endNode.x;
        endNodeEndPoint = endNode.x + endNode.width;
    } else {
        startNodeStartPoint = startNode.y;
        startNodeEndPoint = startNode.y + startNode.height;
        endNodeStartPoint = endNode.y;
        endNodeEndPoint = endNode.y + endNode.height;
    }
    // 起始节点左右分别与终止节点左右的距离
    let distanceArr = [Math.abs(startNodeStartPoint - endNodeStartPoint),Math.abs(startNodeStartPoint - endNodeEndPoint),Math.abs(startNodeEndPoint - endNodeStartPoint),Math.abs(startNodeEndPoint - endNodeEndPoint)];
    // 获取最小距离
    let minDistance = Math.min(...distanceArr);
    let positionArrH = [{start: 'left',end: 'left'},{start: 'left',end: 'right'},{start: 'right',end: 'left'},{start: 'right',end: 'right'}];
    let positionArrV = [{start: 'top',end: 'top'},{start: 'top',end: 'bottom'},{start: 'bottom',end: 'top'},{start: 'bottom',end: 'bottom'}];
    let positionArr = direction === 'H' ? positionArrH : positionArrV;
    return positionArr[distanceArr.indexOf(minDistance)];
}

function init(data, option, nodeObj){
    let originalDirection;
    let direction = originalDirection = option?.layout?.direction || VDirection[0];
    if(direction === VDirection[2]) direction = VDirection[0];
    if(direction === HDirection[2]) direction = HDirection[0];
    let startPosition = Direction[direction[0]];
    let endPosition = Direction[direction[1]];
    
    // let initLineData = [];
    data.edges.forEach(edge => {
        if(!edge.start || !edge.end) return;
        
        edge.startConnector = edge.startConnector || {
            port: START,
            nodeId: edge.start,
            position: endPosition,
        };
        edge.endConnector = edge.endConnector || {
            port: END,
            nodeId: edge.end,
            position: startPosition,
        };
        if(originalDirection === 'H' || originalDirection === 'V'){
            let startNode = nodeObj[edge.start];
            let endNode = nodeObj[edge.end];
            let positions = countPosition(startNode,endNode,originalDirection);
            edge.startConnector.position = positions.start;
            edge.endConnector.position = positions.end;
        }
    });
}


export default init ;