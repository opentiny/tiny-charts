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
import Token from '../../../token'
import { generatedMatchedUiRule } from './util'

function getTitleToken(echartsModule) {
    const token = Token.getToken()
    const uiRule = {
        itemGap: token.centerTitleItemGap,
        textStyle: {
            color: token.centerTitleTextColor,
            fontSize: token.centerTitleTextFontSize,
        },
        subtextStyle: {
            color: token.centerTitleSubTextColor,
            fontSize: token.centerTitleSubtextFontSize
        }
    }
    const commonProperty = ['itemGap']
    const propertyPermissions = [
        {
            name: 'text',
            extraCondition: val => { return val || val === 0 },
            correlationProperty: ['textStyle']
        },
        {
            name: 'subtext',
            extraCondition: val => { return val || val === 0 },
            correlationProperty: ['subtextStyle']
        }
    ]
    return generatedMatchedUiRule(echartsModule, uiRule, propertyPermissions, commonProperty)
}

export default getTitleToken