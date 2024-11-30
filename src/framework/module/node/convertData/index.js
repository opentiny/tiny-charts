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
import treeToLink from './treeToLink';
import returnSelf from './returnSelf';
import transform from './transform';

// 将不同算法的输入数据格式转换成nodes + edges格式
export default {
    'grid': returnSelf,
    'circle': returnSelf,
    'linearArc': returnSelf,
    'customize': returnSelf,
    'mindmap': treeToLink,
    'defaults': transform
}