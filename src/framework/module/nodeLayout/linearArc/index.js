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
import execute from '../grid/excute';
export default class Layout {
    // 树形结构数据
    data;

    constructor(data, containerSize, option) {
        this.data = data;
        // 容器大小
        this.containerSize = containerSize;
        // 计算节点位置
        this.doLayout(this.data.nodes,this.data,option);
        // 修改节点位置，中心对齐
        this.data.nodes.forEach((node) => {
            node.y =  node.y - node.height / 2;
        })
    }

    // 开始执行位置算法
    doLayout(nodes, data,options) {
        execute(nodes,data,this.containerSize,options);
    };

}