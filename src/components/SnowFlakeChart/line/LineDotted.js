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
class LineDotted {
    constructor({ ctx, canvasWidth, canvasHeight }, verCenterPoint, interval, lineStrokeColor) {
        this.ctx = ctx;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.lineStrokeColor = lineStrokeColor;
    }
    draw() {
        this.ctx.fillStyle = this.lineStrokeColor;
        const size = 1
        for (let i = 0; i < this.canvasWidth; i += size * 2 * 2) {
            this.ctx.arc(i, this.canvasHeight / 2, size, 0, Math.PI * 2)
        }
        this.ctx.fill();
    }
}

export default LineDotted;