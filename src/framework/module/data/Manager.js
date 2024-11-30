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
class DataManager{
    constructor(){
        this.nodes = {};
        this.lines = {};
        this.connectors = {};
    }

    setNodes(nodes){
        this.nodes = nodes;
    }

    getNodes(){
        return this.nodes;
    }

    getNodeId(id){
        return this.nodes[id];
    }

    setLines(lines){
        this.lines = lines;
    }

    getLines(){
        return this.lines;
    }

    getLineById(id){
        return this.lines[id];
    }

    setConnectors(connectors){
        this.connectors = connectors;
    }

    getConnectors(){
        return this.connectors;
    }

    getConnectorId(id){
        return this.connectors[id];
    }
}

export default DataManager;