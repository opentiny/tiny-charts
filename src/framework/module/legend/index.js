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
import { getClassName, bindAttributes, getCssProperty, convertNumberCssVal } from './util'
import LegendItem from './Item.js'
import { isArray } from '../../../util/type'
import { hashString } from '../../../util/math'
import {appendDom} from  '../../../util/dom'
class LegendManger {
    static layout = {
        horizontal: 'row',
        vertical: 'column'
    }
    static defaultOptions = {
        left: 16,
        bottom: 16,
        orientation: 'vertical',
        padding: 20,
        gap: 16,
        backgroundColor: '#FFFFFF',
        border: '1px solid #EEEEEE',
        boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
        borderRadius: '4px'
    }
    //  图表容器
    container = null
    //  图例容器
    legendContainer = null
    // 是否已经绘制过
    draw = false
    //配置项
    option = {}
    // 选中的items
    selectItems = []
    // items = []
    //当前渲染使用的option
    // pendingProps = null
    //之前渲染使用的option
    // memoizedProps = null;

    constructor(option, dom) {
        this.option = Object.assign({}, LegendManger.defaultOptions, option)
        this.pendingProps = this.option
        this.container = dom
        this.init()
    }

    getCssStyle() {
        const { gap } = this.option
        if (isArray(gap)) {
            const [rowGap, columnGap] = gap
            this.option.gap = `${convertNumberCssVal(rowGap)} ${convertNumberCssVal(columnGap)}`
        }
        const css = getCssProperty(this.option)
        return css
    }

    initWrapper() {
        const { orientation } = this.option
        this.legendContainer = document.createElement('div')
        const layout = LegendManger.layout[orientation]
        const style = {
            ...this.getCssStyle(),
            flexDirection: layout
        }
        const className = getClassName('container')
        const props = {
            attributes: {
                class: className,
                style
            }
        }
        bindAttributes(this.legendContainer, props)
        appendDom( this.container,this.legendContainer)
    }

    initItems() {
        const { data, onClick, render, itemStyle, ...other } = this.option
        if (data && !!data.length) {
            //只将相关option传入
            const option = {
                onClick,
                render,
                ...itemStyle,
            }
            data.forEach((item, index) => {
                const uuid = `huicharts-legendItem-${hashString()}=${index}`
                option.uuid = uuid
                const legendItem = new LegendItem(option, item, this.legendContainer)
                legendItem.init()
                // this.items.push(legendItem)
            })
        }
    }

    init() {
        this.initWrapper()
        this.initItems()
    }

    render() {
        if (!this.draw) {
            return
        }
        // if (!!this.items.length) {
           
        // }
    }
}

export default LegendManger