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
import {calculate} from './calculate';

class CircleShape{
    constructor(data, option){
        // 节点对象
        let nodeObj = {};
        data.nodes.forEach(item => {
            nodeObj[item.id] = item;
        })
        // 初始连线数据
        init(data, option);
        let centerCircle = option.connector?.centerCircle || false;
        // 开始计算位置，返回连线的数据，放到 this.lineData
        data.edges.forEach(item => {
            return calculate(item, nodeObj,centerCircle);
        });     
    }
}

export default CircleShape;