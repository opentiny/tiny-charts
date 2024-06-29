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
import { codeToRGB } from '../../../../util/color'

function getDataZoomToken() {
    const token = Theme.getToken()
    const color = Theme.themeName.includes('dark') ? '#1B3F86' : '#8CA3FA';
    return {
        borderColor: token.dataZoomBackgroundColor,
        backgroundColor: token.dataZoomBackgroundColor,
        fillerColor: codeToRGB(token.colorState.colorInfo, 0.1),
        handleStyle: {
            color: token.dataZoomHandleColor,
            shadowColor: token.dataZoomHandleShadowColor,
            borderColor: token.dataZoomHandleBorderColor,
        },
        dataBackground: {
            lineStyle: {
                color: token.dataBackgroundLineColor,
            },
            areaStyle: {
                color: token.dataBackgroundAreaColor,
            },
        },
        selectedDataBackground: {
            lineStyle: {
                color,
            },
            areaStyle: {
                color,
            },
        },
        emphasis: {
            handleStyle: {
                color: token.dataZoomEmphasisHandleColor,
                borderColor: token.dataZoomEmphasisHandleBorderColor,
            },
        },
    }
}

export default getDataZoomToken