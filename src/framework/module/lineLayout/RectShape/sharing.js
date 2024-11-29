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
// 连接点均分模式
const SHARING_TYPE = {
    MERGE: 'merge',
    SHARING:'sharing', 
    STRICT:'strict'
};

// 统计节点每个方向的连接点数据
function statistics(connectorData,item,direction,separate) {
    const nodeName = direction === 'start' ? 'start' : 'end';
    const connectorName = direction === 'start' ? 'startConnector' : 'endConnector';
    // 连接点数据
    let nodeData = connectorData[item[nodeName]] || {};
    // 连接点位置
    let position = item[connectorName].position;
    // 分离模式下number同一方向连接点数量，index为连接点标识，逐次加1
    if(nodeData[position]) {
        nodeData[position].number = separate ? nodeData[position].number + 1: 1;
        //默认模式下，同一方向有多个连线的，第一个连接点index为1，其他置为-1做标识，代表不用生成连接点dom
        item[connectorName].index = separate ? nodeData[position].number : -1;
    } else {
        nodeData[position] = {number:1};
        item[connectorName].index = 1; 
    }
    return nodeData;
}

// 获取节点的所有连接点，如果是均分模式或者是严格均分，统计同一方向上的连接点数量，并在原始数据逐次添加连接点数量index标识
function sharing(data, option) {
    const connectorData = {}
    const startSharing = option?.connector?.startSharing; // 连接点模式
    const endSharing = option?.connector?.startSharing; // 连接点模式
    const startSeparate = startSharing === SHARING_TYPE.SHARING || startSharing === SHARING_TYPE.STRICT; // 是否为分离模式
    const endSeparate = endSharing === SHARING_TYPE.SHARING || endSharing === SHARING_TYPE.STRICT;
    data.forEach(item => {
        if(item.start && item.startConnector) {
            connectorData[item.start] = statistics(connectorData,item,'start',startSeparate);
        }
        if(item.end && item.endConnector) {
            connectorData[item.end] = statistics(connectorData,item,'end',endSeparate);
        }
    })
    return connectorData

}
export default sharing