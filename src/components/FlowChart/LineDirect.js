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

// 直连线
export default class LineDirect {

    constructor(option, contains) {
        this.gcontainer = contains.gcontainer;
        this.tagContainer = contains.tagContainer;
    }

    setData(edge, data, direction) {
        let end = edge.target;
        let start = edge.source;
        let nodesObj = data.nodesObj;
        // 起始点
        edge.startPoint = {
            x: nodesObj[start].x + nodesObj[start].width / 2-data.minX,
            y: nodesObj[start].y + nodesObj[start].height / 2-data.minY,
        };
        // 结束点
        edge.endPoint = {
            x: nodesObj[end].x + nodesObj[end].width / 2-data.minX,
            y: nodesObj[end].y + nodesObj[end].height / 2-data.minY,
        };
    }

    setPath (edge){
        let m = `M${edge.startPoint.x} ${edge.startPoint.y}`;
        let l = `L${edge.endPoint.x} ${edge.endPoint.y}`;
        return `${m} ${l}`;
    }
}
