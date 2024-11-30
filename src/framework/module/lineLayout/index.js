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
import RectShape from './RectShape';
import CircleShape from './CircleShape';

const NodeShape = {
    rect: RectShape,
    circle: CircleShape
}

class LineLayout{

    constructor(data, option){
        let nodeShape = option.layout?.nodeShape || 'rect';
        // 根据节点形状，计算连线的开始和结束坐标
        new NodeShape[nodeShape](data, option);

    }
}

export default LineLayout;
