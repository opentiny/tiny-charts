/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import cloneDeep from '../../../util/cloneDeep';

const basePolar = {
    center: ['50%', '50%'],
    radius: ['8%', '70%'],
};

function base(position, chartName) {
    const PolarOption = cloneDeep(basePolar);
    PolarOption.center = (position && position.center) || basePolar.center;
    PolarOption.radius = (position && position.radius) || basePolar.radius;
    return PolarOption;
}

export default base;
