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
import Theme from '../../../token'
import { generatedMatchedUiRule } from './util'

function getTitleToken(echartsModule) {
    const token = Theme.getToken()
    const uiRule = {
        itemGap: token.titleItemGap,
        textStyle: {
            color: token.titleTextColor,
            fontSize: token.titleTextFontSize,
        },
        subtextStyle: {
            color: token.titleSubTextColor,
            fontSize: token.titleSubtextFontSize
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