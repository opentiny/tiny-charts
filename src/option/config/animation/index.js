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
import Theme from "../../../feature/token"

// 图例翻页是否使用动画和动画时长，具有共性，提取
function getUnitAnimationConfig() {
    return {
        // 是否开启动画 
        animation: Theme.config.animation,
        // 数据更新动画的时长
        animationDurationUpdate: Theme.config.animationDurationUpdate,
    }
}

// 状态切换的动画配置
function getStateAnimation() {
    return {
        stateAnimation: {
            // 状态切换的动画时长
            duration: Theme.config.stateAnimationDuration,
            // 状态切换的动画缓动
            easing: Theme.config.stateAnimationEasing
        },
    }
}

// 基础的动画配置
function getBasicAnimationConfig() {
    return {
        ...getUnitAnimationConfig(),
        // 是否开启动画的阈值
        animationThreshold: Theme.config.animationThreshold,
        // 初始动画的时长
        animationDuration: Theme.config.animationDuration,
        // 初始动画的缓动效果
        animationEasing: Theme.config.animationEasing,
        // 初始动画的延迟
        animationDelay: Theme.config.animationDelay,
        // 数据更新动画的缓动效果
        animationEasingUpdate: Theme.config.animationEasingUpdate,
        // 数据更新动画的延迟
        animationDelayUpdate: Theme.config.animationDelayUpdate,
    }
}


function animation() {
    return {
        ...getBasicAnimationConfig(),
        ...getStateAnimation()
    }
}

export default animation
export { getBasicAnimationConfig, getUnitAnimationConfig }