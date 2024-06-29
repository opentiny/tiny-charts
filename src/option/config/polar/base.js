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
import { getBasicAnimationConfig } from "../animation";

function base(position) {
    const basePolar = {
        center: ['50%', '50%'],
        radius: ['8%', '70%'],
        tooltip: {
            axisPointer: {
                ...getBasicAnimationConfig()
            }
        }
    };
    if (position && position.center) basePolar.center = position.center
    if (position && position.radius) basePolar.radius = position.radius
    return basePolar;
}

export default base;

