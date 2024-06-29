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
const axisNamePropertyPermissions = [
    {
        name: 'name',
        // 额外判定条件
        extraCondition: val => { return val || val === 0 },
        // 需要添加的属性名称
        correlationProperty: ['nameGap', 'nameTextStyle']
    },
]

const axisCommonPropertyPermissions = [
    {
        name: 'splitLine',
        extraCondition: judgeAxisComonProperty,
        correlationProperty: ['splitLine']
    },
    {
        name: 'axisLine',
        extraCondition: judgeAxisComonProperty,
        correlationProperty: ['axisLine']
    },
    {
        name: 'axisTick',
        extraCondition: judgeAxisComonProperty,
        correlationProperty: ['axisTick']
    },
    {
        name: 'axisLabel',
        extraCondition: judgeAxisComonProperty,
        correlationProperty: ['axisLabel']
    },
]

const rectSysAxisPropertyPermissions = [
    ...axisNamePropertyPermissions,
    ...axisCommonPropertyPermissions
]

// 用于判定x，y轴共有的属性(axisTick,splitLine,axisTick,axisLabel)是否添加到ui规范中
function judgeAxisComonProperty(val) {
    return (val && val.show !== false) || !val
}

/**
 * 给符合条件ui规范对象增加属性名称(ui规范)
 * @param {object} moudle  echartsOption的模块对象
 * @param {object} propertyConfig propertyPermissions中的单个属性判定对象
 * @param {object} matchedUiRule  根据鉴权匹配的ui规范
 * @param {object} uiRule  ui规范
 */
function assignmentPropertyToMatchedUiRule(moudle, propertyConfig, matchedUiRule, uiRule) {
    const propertyVal = moudle[propertyConfig.name]
    if (propertyConfig.extraCondition(propertyVal)) {
        propertyConfig.correlationProperty.forEach(item => {
            matchedUiRule[item] = uiRule[item]
        })
    }
}

/**
 * @param  echartsModule  echartsOption的模块,数组或者对象
 * @param {object} uiRule 当前模块对象的标准ui规范对象
 * @param {Array} propertyPermissions 权限数组
 * @returns 符合鉴权的ui规范对象
 */
function generatedMatchedUiRule(echartsModule, uiRule, propertyPermissions,commonProperty=[]) {
    const matchedUiRule = {}
    propertyPermissions.forEach(propertyConfig => {
        assignmentPropertyToMatchedUiRule(echartsModule, propertyConfig, matchedUiRule, uiRule)
    })
    if(commonProperty.length>0){
        commonProperty.forEach(property => {
            matchedUiRule[property] = uiRule[property]
        })
    }
    return matchedUiRule
}

export {
    axisCommonPropertyPermissions,
    rectSysAxisPropertyPermissions,
    judgeAxisComonProperty,
    generatedMatchedUiRule,
}


