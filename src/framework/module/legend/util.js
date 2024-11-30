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
import { CLASS_PREFIX } from './constants'
import { isNumber } from '../../../util/type'
import { setStyle } from '../../../util/dom'
function convertNumberCssVal(cssVal, unit = 'px') {
    if (isNumber(cssVal) && cssVal !== 0) {
        return `${cssVal}${unit}`
    }
    return cssVal
}

// 本方法是兼容使用者传css配置传数字的场景
// function transformCssProperty(cssObj) {
//     const cssMap = Object.entries(cssObj)
//     const newMap = cssMap.map(item => {
//         const [, value] = item
//         item[1] = convertNumberCssVal(value)
//         return item
//     })
//     return Object.fromEntries(newMap)
// }


function getClassName(name) {
    return `${CLASS_PREFIX}${name}`
}


function bindEvents(dom, events) {
    if (!events) return
    for (let e in events) {
        if (Object.hasOwnProperty.call(events, e)) {
            dom.addEventListener(e, events[e])
        }
    }
}

function bindAttributes(dom, props) {
    const { events, attributes } = props
    const { style, ...other } = attributes
    setStyle(dom, other)
    if (style) {
        Object.assign(dom.style, style)
    }
    bindEvents(dom, events)
}

//判断属性是不是css属性
function isCssProperty(property) {
    const testElement = document.createElement('div');
    return property in testElement.style; // 如果属性存在于style对象中，则认为它是CSS属性
}


function getCssProperty(obj) {
    const cssObj = {}
    for (let key in obj) {
        if (Object.hasOwnProperty.call(obj, key) && isCssProperty(key)) {
            cssObj[key] = convertNumberCssVal(obj[key])
        }
    }
    return cssObj
}

export {
    getClassName,
    convertNumberCssVal,
    bindAttributes,
    isCssProperty,
    getCssProperty
}