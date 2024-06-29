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
// 对canvas的画笔的简单封装
export default class Paint {
    ctx = null
    constructor(ctx) {
        this.ctx = ctx
    }
    beginPath() {
        this.ctx.beginPath()
    }
    closePath() {
        this.ctx.closePath()
    }
    moveTo(x, y) {
        this.ctx.moveTo(x, y)
    }
    lineTo(x, y) {
        this.ctx.lineTo(x, y)
    }
    lineCap(type) {
        this.ctx.lineCap = type
    }
    stroke() {
        this.ctx.stroke()
    }
    lineJoin(type) {
        this.ctx.lineJoin = type
    }
    lineWidth(nub) {
        this.ctx.lineWidth = nub
    }
    fill() {
        this.ctx.fill()
    }
    save() {
        this.ctx.save()
    }
    restore() {
        this.ctx.restore()
    }
    translate(x, y) {
        this.ctx.translate(x, y)
    }
    createLinearGradient(x0, y0, x1, y1) {
        return this.ctx.createLinearGradient(x0, y0, x1, y1);
    }
    clearRect(x, y, width, height) {
        this.ctx.clearRect(x, y, width, height)
    }
    rect(x, y, width, height) {
        this.ctx.rect(x, y, width, height)
    }
    strokeStyle(color) {
        this.ctx.strokeStyle = color
    }
    arc(x, y, radius, startAngle, endAngle, anticlockwise = false) {
        this.ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    }
    fillStyle(color) {
        this.ctx.fillStyle = color
    }
}