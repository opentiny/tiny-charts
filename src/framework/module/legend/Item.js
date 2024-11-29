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
import merge from '../../../util/merge'
import { bindAttributes, getCssProperty, getClassName, convertNumberCssVal } from './util'
import getSymbol from './getSymbol'
import { isArray } from '../../../util/type'
import { getColor } from '../../../util/color'
import { appendDom, appendHTML } from '../../../util/dom'
import cloneDeep from '../../../util/cloneDeep'

class Item {
    static symbolSize = {
        circle: [8, 8],
        rect: [24,12],
        arrowline:[20,20],
        arrowDottedline:[20,20],
        dottedline:[20,20],
    }

    static layout = {
        horizontal: 'row',
        vertical: 'column'
    }

    static defaultOptions = {
        //支持其他css属性
        gap: 16,
        inactiveColor: '#DFDFDF',
        orientation: 'horizontal',
        marker: {
            type: 'circle',
            color: [
                "#6D8FF0",
                "#00A874",
                "#BD72F0",
                "#54BCCE",
                "#FDC000",
                "#9185F0",
                "#00A2B5"
            ],
        },
        label: {
            fontSize: 14,
            color: '#191919'
        }
    }
    option = {}
    // 是否是激活态
    active = true
    data = null
    container = null
    itemContainer = null
    markerContainer = null

    constructor(option, data, container) {
        const defaultOption = cloneDeep(Item.defaultOptions)
        merge(defaultOption, option)
        this.option = Object.assign({}, defaultOption)
        this.data = data
        this.container = container
    }

    init() {
        this.mixStyleInData()
        this.initWrapper()
        if (this.option.render) {
            const params = this.getItemParams()
            const htmlStr = this.option.render(params, this.itemContainer)
            htmlStr && appendHTML(this.itemContainer, htmlStr)
            return
        }
        this.initMarker()
        this.intieLabel()
    }


    intieLabel() {
        const labelContainer = document.createElement('div')
        const className = getClassName('labelContainer')
        const style = this.getCssStyle(this.option.label)
        const props = {
            attributes: {
                class: className,
                style
            }
        }
        bindAttributes(labelContainer, props)
        appendHTML(labelContainer, this.data.name)
        appendDom(this.itemContainer, labelContainer)
    }

    getItemIndex() {
        const [, index] = this.option.uuid.split('=')
        return index
    }


    getSymbolColor() {
        const { color } = this.option.marker
        if (isArray(color)) {
            const index = this.getItemIndex()
            return getColor(color, index)
        }
        return color
    }


    initMarker() {
        this.markerContainer = document.createElement('div')
        const className = getClassName('markerContainer')
        const { type, ...other } = this.option.marker
        const color = this.getSymbolColor()
        const symbol = getSymbol(type)
        const [width, height] = this.getSymbolSize(type)
        const style = {
            ...this.getCssStyle(other),
            width,
            height,
            color
        }
        const props = {
            attributes: {
                class: className,
                style
            }
        }
        bindAttributes(this.markerContainer, props)
        appendDom(this.itemContainer, this.markerContainer)
        appendHTML(this.markerContainer, symbol)
    }

    //获取默认的sumbol的大小
    getSymbolSize(type) {
        const [width, height] = Item.symbolSize[type] ?? ['unset', 'unset']
        return [convertNumberCssVal(width), convertNumberCssVal(height)]
    }

    getCssStyle(option) {
        return getCssProperty(option)
    }

    mixStyleInData() {
        if (this.data?.itemStyle) {
            merge(this.option, this.data.itemStyle)
        }
    }

    click = (e) => {
        const { disabled } = this.data
        if (disabled) return
        this.active=!this.active
        if(!this.option.render){
            this.toggleState()
        }
        const params = this.getItemParams()
        this.option?.onClick?.(params, e)
    }

    toggleState(){
        if(this.active){
            this.itemContainer.classList.remove('inactive')
        }else{
            this.itemContainer.classList.add('inactive')
        }
    }

    initWrapper() {
        const { orientation } = this.option
        this.itemContainer = document.createElement('div')
        const layout = Item.layout[orientation]
        const style = {
            ...this.getCssStyle(this.option),
            flexDirection: layout,
        }
        const className = getClassName('itemContainer')
        const props = {
            attributes: {
                class: className,
                style
            },
            events: {
                click: this.click
            }
        }
        bindAttributes(this.itemContainer, props)
        appendDom(this.container, this.itemContainer)
        this.itemContainer.style.setProperty('--huicharts-legend-inactiveColor', this.option.inactiveColor)
    }


    getItemParams() {
        const params = {
            ...this.data,
            uuid: this.option.uuid,
            dataIndex: this.getItemIndex(),
            active: this.active
        }
        return params
    }

    render() {



    }

}

export default Item