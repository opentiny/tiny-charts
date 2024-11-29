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
const START = 'start';
const END = 'end';


function init(data, option){
    data.edges.forEach(edge => {
        if(!edge.start || !edge.end) return;
        edge.startConnector = edge.startConnector || {
            port: START,
            nodeId: edge.start,
            index:1
        };
        edge.endConnector = edge.endConnector || {
            port: END,
            nodeId: edge.end,
            index:1
        };
        
    });

}

export default init ;