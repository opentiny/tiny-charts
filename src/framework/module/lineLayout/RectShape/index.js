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
import init from './init';
import sharing from './sharing';
import {calculate, update, someId} from './calculate';

// 矩形节点的连线位置
class RectShape{
    constructor(data, option){
        // 节点对象
        let nodeObj = {};
        data.nodes.forEach(item => {
            nodeObj[item.id] = item;
        })
        // 初始连线数据
        init(data, option, nodeObj);
        // 获取所有连接点的数量位置信息
        let connectorData = sharing(data.edges, option);
        // 开始计算连线位置信息
        data.edges.forEach(item => {
            return calculate(item, connectorData, option, nodeObj);
        });
        // 如果连接点的位置，则修改为同一id
        someId(data.edges);
        // 根据节点位置更新连接点坐标
        update(data.edges, option);
    }
}

export default RectShape;




