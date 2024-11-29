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
import Connector from './index';

class ConnectorManager{
	constructor(chartInstance, lineData, option){
        // 所有数据
        this.data = {};
        // 所有实例
		this.instances = {};
        // 连接点所有数据
        lineData.forEach(line => {
            let {startConnector,endConnector} = line;
            this.data[startConnector.id] = startConnector;
            this.data[endConnector.id] = endConnector;
        });
        this.createInstance(option,chartInstance,this.data);
	}

    //创建连接点实例对象
    createInstance(option, chartInstance,data) {
        let showConnector = option?.connector?.show || false;
        Object.keys(data).forEach(key => {
            let item = this.data[key];
            if(showConnector) {
                this.instances[item.id] = new Connector(item, option, chartInstance,data);
            }
        })
    }


    // exist(connector){
    //     return connector.index > 0;
    // }

	getData(){
		return this.data;
	}

	getInstances(){
		return this.instances;
	}

    reCreate(chartInstance, lineData, option) {
        Object.keys(this.instances).forEach(key => {
            let item = this.instances[key];           
            item.uninstall(key);
        })
        //连接点所有数据
        lineData.forEach(line => {
            let {startConnector,endConnector} = line;
            this.data[startConnector.id] = startConnector;
            this.data[endConnector.id] = endConnector;
        });
        this.createInstance(option,chartInstance,this.data);
    }

    refresh(chartInstance, lineData, option){
        let showConnector = option?.connector?.show || false;
        if(showConnector) {
            // 旧连接点数据
            let oldData = this.data;
            // 新连接点数据
            let newData = [];
            lineData.forEach(line => {
                let {startConnector,endConnector} = line;
                newData[startConnector.id] = startConnector;
                newData[endConnector.id] = endConnector;
            });
            // 更新连接点
            Object.keys(newData).forEach(key => {
                // 新增的连接点处理
                if(!oldData[key]) {
                    this.createInstance(option,chartInstance,newData[key]);
                }
                // 对连接点进行更新处理
                this.instances[key] && this.instances[key].update(key,newData[key],option);
                
            })
            // 删除的连接点处理
            Object.keys(this.data).forEach(key => {
                if(!newData[key]) {
                    this.instances[key] && this.instances[key].uninstall(key,this.instances);            
                }
            })
        }
    }

    

    
}

export default ConnectorManager;
