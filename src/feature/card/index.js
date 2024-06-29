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
import merge from '../../util/merge';
import chartToken from './chartToken';

const cardOption = { 
    title:{
        name: 'Chart name',
        size: 'small',
        tip: {
            show: false,
            content: '标题提示内容'
        },
    }
}

// 卡片容器
class CardManager {
    constructor(container, option) {
        option = merge(cardOption, option);
        // 卡片容器
        this.container = container;
        // 卡片配置项
        this.option = option;
        if(this.container) {
            this.createDom();
        }
        
    }
    changeTheme(){
        let cardContainer = this.container.querySelector('.card-container');
        cardContainer.style.setProperty('--titleColor', chartToken.titleColor);
        cardContainer.style.setProperty('--labelColor', chartToken.labelColor);
        cardContainer.style.setProperty('--selectBgActive', chartToken.selectBgActive);
        cardContainer.style.setProperty('--selectBgAInactive', chartToken.selectBgAInactive);
        cardContainer.style.setProperty('--selectBgAInactive', chartToken.selectBgAInactive);
        cardContainer.style.setProperty('--selectTextDisabled', chartToken.selectTextDisabled);
        cardContainer.style.setProperty('--borderColor', chartToken.borderColor);
        cardContainer.style.setProperty('--selectSplitLineColor', chartToken.selectSplitLineColor);
    }
    // 创建容器
    createDom() {

        let cardContainerDom = this.container.querySelector('.card-container');
        if(cardContainerDom) {
            cardContainerDom.outerHTML = '';
        }

        let titleOption = this.option.title;
        let cardContainer = document.createElement('div');
        cardContainer.setAttribute('class','card-container');
        let cardTop = document.createElement('div');
        cardTop.className = `card-top ${this.option.divider ? 'divider': ''}`
        let cardTitle = document.createElement('div');
        cardTitle.className = `card-title ${titleOption.size === 'large' ? 'large': ''}`;
        cardTitle.innerHTML = ` <span>${titleOption.name}</span>`;
        cardTop.appendChild(cardTitle);
        cardContainer.appendChild(cardTop);

        this.container.insertAdjacentHTML('afterbegin',cardContainer.outerHTML);
        let titleDom = this.container.querySelector('.card-title');
        if(titleOption.tip && titleOption.tip.show) {
            let tipStr = `<img class="icon-tip" src="data:image/image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAMNJREFUKJF1ktF1QyEMQy/p26t+kyEm6ShP2SSZpP3BOT5uoi8wkiwMgwZJAcy9DWDtuipvfBAk2UUwgZX7UdwmcEpyT/GOc2tuLsSo8fb6zFQjDxvp2ss78C3pbGcrO9ZIAdwlncU0CmUB8wCmpDokAy6CqB0TN8DN8d8wWt1AHF1Q4ELshuvIzEl8F/kjJF097n6OXpOkX4AvgIh4AldEDNsGsP2w/ahGwA+wbLtOUzvyKu7Z8fUV884vYTNIsrsg8QeoR4CfMYMDOgAAAABJRU5ErkJggg==" title="${titleOption.tip.content}">`
            titleDom.insertAdjacentHTML('beforeend',tipStr);
        }
        if(this.option.renderTitle) {
            this.option.renderTitle(titleDom);
        }
        let operation = this.option.operation;
        if(operation && operation.data) {
            this.createOperation(operation);
        }
        let valueArea = this.option.valueArea;
        if(valueArea) {
            this.createValueArea(valueArea);
        }
    }


    // 创建功能区
    createOperation(operation) {
        
        let data = operation.data;
        let active = operation.active || 0;
        let onChange = operation.onChange;
        let activeClass;
        let operationItem = '';
        for(var i = 0;i < data.length; i++) {
            let type = data[i].type;
            let itemData = data[i].data;
            if(type === 'button') {
                let buttonItem = ''
                itemData.forEach((element,index) => {
                    if(active === index) {
                        buttonItem += `<div class='item active'>${element.text}</div>`

                    } else {
                        buttonItem += `<div class='item'>${element.text}</div>`
                    }
                });
                operationItem += `<div class="card ${type}">${buttonItem}</div>`
            } else if(type === 'icon-button'){
                let iconButtonItem = ''
                itemData.forEach((element,index) => {
                    activeClass = active === index ? 'active' : ''
                    iconButtonItem += `<div class='item ${activeClass}'><img src="${element.path}" /></div>`
                });
                operationItem += `<div class="card ${type}">${iconButtonItem}</div>`
            }
            else if(type === 'icon'){
                let iconItem = ''
                itemData.forEach((element,index) => {
                    iconItem += `<div class='item'><img src="${element.path}" /></div>`
                });
                operationItem += `<div class="card ${type}">${iconItem}</div>`
            }    
        }
        
        let OperationStr = `<div class="operation">${operationItem}</div>`;
        this.container.querySelector('.card-top').insertAdjacentHTML('beforeend',OperationStr);
        let OperationDom = this.container.querySelector('.operation');
        for(var i = 0;i < OperationDom.children.length; i++) {
            this.OperationBind(OperationDom.children[i],data[i],onChange);
        }
      
        if(this.option.renderOperation) {
            this.option.renderOperation(OperationDom);
        }

    }

    // 功能区事件绑定
    OperationBind(OperationDom,data,onChange) { 
        let children = OperationDom.children;
        for (var i = 0; i < children.length; i++) {
            children[i].index = i;
            children[i].addEventListener('click', function(e) {
                if(data.type !== 'icon') {
                    for (var j = 0; j < children.length; j++) {
                        children[j].classList.remove('active');
                    };
                    e.currentTarget.classList.add('active');
                }
                onChange(data.data,this.index)
            });
        }
    }

    // 创建关键数值区域
    createValueArea(valueArea){
        const data = valueArea.data;
        let valueAreaDiv = document.createElement('div');
        valueAreaDiv.setAttribute('class','valueArea');
        if(data && data.length > 0) {
            for(var i = 0;i < data.length; i++) {
                let itemDiv = document.createElement('div');
                itemDiv.setAttribute('class','item');
                let mainDiv = document.createElement('div');
                mainDiv.innerHTML = `<span class="value">${ data[i].value }</span><span class="unit">${ data[i].unit }</span>`;
                itemDiv.appendChild(mainDiv);
                let subDiv = document.createElement('div');
                subDiv.setAttribute('class','sub');
                subDiv.innerHTML = `${ data[i].desc }`;
                itemDiv.appendChild(subDiv);
                valueAreaDiv.appendChild(itemDiv);
            }
            const containerDom = this.container.querySelector('.card-container');
            containerDom.insertAdjacentHTML('beforeend',valueAreaDiv.outerHTML);      
            containerDom.classList.add('adaptation-bottom');
            let valueAreaDom = this.container.querySelector('.valueArea');
            if(this.option.renderValueArea) {
                return this.option.renderValueArea(valueAreaDom);
            }
        }
    }

    // 获取容器节点
    getContainer(){
        return this.container;
    }

    // 获取关键值
    getValue() {
        let valueArr = [];
        let valueAreaDom = this.container.querySelector('.valueArea');
        let childrenItem = valueAreaDom.children;
        for (var i = 0; i < childrenItem.length; i++) {
            valueArr.push(childrenItem[i].querySelector('.value').innerHTML);
        }
        return valueArr;
    }

    // 更新关键值
    setValue(value,index) {
        let valueAreaDom = this.container.querySelector('.valueArea');
        let childrenItem = valueAreaDom.children;
        if (Array.isArray(value)) {
            for (var i = 0; i < childrenItem.length; i++) {
                childrenItem[i].querySelector('.value').innerHTML = value[i];
            }
        
        } else {
            let valueDom = childrenItem[index + 1].querySelector('.value');
            valueDom.innerHTML = value;
        }
        
    }

    // 销毁实例,
    unInstall() {
        this.container.innerHTML = null;
    }
}


export default CardManager;
