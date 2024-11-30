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
import Easing from "./Easing";
import Interpolation from "./Interpolation";
import Sequence from '../../../util/Sequence';
export default class Animate {
    element; //节点
    isPaused = false; //是否已暂停          
    rawData = {}; //初始数据
    startValues = {}; //起始值
    endValues = {}; //结束值
    startValuesBackup = {}; //起始值的备份
    duration; //执行时间
    isDynamic = false; //是否动态修改
    repeat = 0; //重复次数
    repeatBackup = 0; //重复次数备份
    yoyo = false; //开始值和结束值之间来回跳动 ，需repeat一起使用才有效。
    isPlaying = false; //是否在进行中
    reversed = false; //设置了反转
    delayTime = 0; //延迟时长
    startTime = 0; //开始时间 
    repeatDelayTime = 0; //执行时长 + 延时时长
    easingFunction = Easing.Linear.In; //缓动效果
    interpolationFunction = Interpolation.Linear; //数组的情况下的缓动函数
    chainedTweens = []; //链式动画合集：可设置一个动画执行结束后，继续执行另一个动画
    onStartCallback; //开始回调
    onFinishCallback; //完成回调
    onStartCallbackFired = false; //开始回调是否触发
    onEveryStartCallback; //每次开始回调
    onEveryStartCallbackFired = false; //每次开始回调是否触发
    onStopCallback; //结束回调 调用stop时
    onRepeatCallback; //重复时回调
    isChainStopped = false; //链式调用是否停止
    goToEnd = false; //结束状态
    onUpdateCallback = null; //更新时回调
    onAfterUpdateCallback = null; //更新后
    id = Sequence.nextId() //id

    /**
     * 初始化参数
     * @param options  配置项
     */
    constructor(options, element) {
        this.element = element;
        this.rawData = JSON.parse(JSON.stringify(options.start));
        this.startValues = JSON.parse(JSON.stringify(options.start));
        this.endValues = options.end;
        this.delayTime = options.delay || this.delayTime;
        this.repeatDelayTime = options.repeatDelayTime || this.repeatDelayTime;
        this.duration = options.duration < 0 ? 0 : options.duration
        this.repeat = options.repeat || 0;
        this.repeatBackup = options.repeat || 0;
        this.easingFunction = options.easing || this.easingFunction;
        this.onUpdateCallback = options.onUpdate || this.onUpdateCallback;
        this.onAfterUpdateCallback = options.onAfterUpdate || this.onAfterUpdateCallback;
        this.onRepeatCallback = options.onRepeat || this.onRepeatCallback;
        this.onStartCallback = options.onStart || this.onStartCallback;
        this.onStopCallback = options.onStop || this.onStopCallback;
        this.onFinishCallback = options.onFinish || this.onFinishCallback;
        this.isDynamic = options.dynamic
        this.yoyo = options.yoyo;
    }

    /**
     * 开始执行
     * @param time  时间
     */
    start(time) {
        if (time === void 0) {
            time = performance.now();
        }
        if (this.isPlaying) {
            return this
        }
        this.isPlaying = true;
        // 暂停状态false
        this.isPaused = false;
        // startCallback未触发
        this.onStartCallbackFired = false;
        this.onEveryStartCallbackFired = false;
        // 链式调用未停止
        this.isChainStopped = false;
        //重置repeat，可能在循环中被修改
        this.repeat = this.repeatBackup;
        //是否被反转 一般用于在设置了this.yoyo的情况
        if (this.reversed) {
            // 设置了反转 方向从后向前翻转。
            this.reversed = false
            for (const property in this.startValuesBackup) {
                // 交换end和startRepeat的值。
                this.swapEndStartRepeatValues(property)
                this.startValues[property] = this.startValuesBackup[property]
            }
        }

        this.startTime = time;
        this.startTime += this.delayTime;

        //  动态的修改终点的位置 如果未启用dynamic，则克隆结束值，而不是使用传入的结束值。
        if (!this.isDynamic) {
            const tmp = {}
            for (const prop in this.endValues) tmp[prop] = this.endValues[prop]
            this.endValues = tmp
        }
        // 设置属性: 初始值，起始值，结束值，
        this.setupProperties(
            this.rawData, //初始值
            this.startValues, //起始值
            this.endValues, // 结束值
            this.startValuesBackup, //起始值的拷贝，用来实现this.repeat和this.yoyo
        )

    }

    getId() {
        return this.id
    }

    /**
     * 设置属性: 初始值，起始值，结束值，
     * @param this.rawData  初始值
     * @param this.startValues, 起始值
     * @param this.endValues  起始值
     * @param this.startValuesBackup  起始值的拷贝，用来实现this.repeat和this.yoyo
     * 
     */
    setupProperties(rawData, startValues, endValues, startValuesBackup) {
        // 循环结束值的属性，例如起始值{x: 1, y: 1}, 结束值{y: 50}
        for (const property in endValues) {
            const startValue = rawData[property]
            const startValueIsArray = Array.isArray(startValue)
            const propType = startValueIsArray ? 'array' : typeof startValue
            let isInterpolationList = !startValueIsArray && Array.isArray(endValues[property]) // 判断是否为数组

            // 如果end的属性在start中不存在，则跳出
            if (propType === 'undefined' || propType === 'function') {
                continue
            }

            // 数组的处理
            if (isInterpolationList) {
                const endValue = endValues[property]

                if (endValue.length === 0) {
                    continue
                }

                const temp = [startValue]
                for (let i = 0, l = end.length; i < l; i += 1) {
                    // 处理相对值 某些加值 或者减值的情况 例如{top: '+20', left : '-20'}
                    const value = this.handleRelativeValue(startValue, end[i])
                    if (isNaN(value)) {
                        isInterpolationList = false
                        break
                    }
                    temp.push(value)
                }

                if (isInterpolationList) {
                    endValues[property] = temp
                }
            }
            // 属性为对象时候的处理 例如styles {x: 700, y: 200, styles: {opacity: 0}}
            // 深层对象，递归
            if ((propType === 'object' || startValueIsArray) && startValue && !isInterpolationList) {
                startValues[property] = startValueIsArray ? [] : {}
                // const nestedObject = startValue;

                for (const prop in startValue) {
                    startValues[property][prop] = startValue[prop]
                }

                startValuesBackup[property] = startValueIsArray ? [] : {}

                let endValue = endValues[property]

                // 动态的修改终点的位置 如果未启用dynamic，则克隆结束值，而不是使用传入的结束值。
                if (!this.isDynamic) {
                    const tmp = {}
                    for (const prop in endValue) tmp[prop] = endValue[prop]
                    this.endValues[property] = endValue = tmp
                }
                //递归
                this.setupProperties(
                    startValue,
                    startValues[property],
                    endValue,
                    startValuesBackup[property],
                )
            } else {
                // 简单数值，直接赋值
                if (typeof startValues[property] === 'undefined') {
                    startValues[property] = startValue
                }

                if (!startValueIsArray) {
                    // 确保为数字
                    startValues[property] *= 1.0
                }
                // 初始化初始值拷贝(用于repeat和yoyo 的时候 )
                if (isInterpolationList) {
                    startValuesBackup[property] = endValues[property].slice().reverse()
                } else {
                    startValuesBackup[property] = startValues[property] || 0
                }
            }
        }
    }
    /**
     * @returns true 还在动画， 否则false.
     *
     * @param autoStart - true 会调用start(),
     */
    update(time, autoStart) {
        // 已暂停
        if (this.isPaused) return true

        let property;
        // 未到达终点 并且 未在运行
        if (!this.goToEnd && !this.isPlaying) {
            // 如果自动开始，则开始
            if (autoStart) this.start(time, true)
            else return false
        }
        // 标记未结束
        this.goToEnd = false;

        // time 小于 开始时间，返回true
        if (time < this.startTime) {
            return true
        }
        // 开始事件 未触发，则触发。
        if (this.onStartCallbackFired === false) {
            if (this.onStartCallback) {
                this.onStartCallback(this.rawData)
            }

            this.onStartCallbackFired = true
        }
        // 开始时的回调函数  未触发，则触发。
        if (this.onEveryStartCallbackFired === false) {
            if (this.onEveryStartCallback) {
                this.onEveryStartCallback(this.rawData)
            }

            this.onEveryStartCallbackFired = true
        }

        const elapsedTime = time - this.startTime //已用时间 当前时间减去开始时间
        const durationAndDelay = this.duration + (this.repeatDelayTime || this.delayTime) //设置的执行时长 + 延时时长（重复执行延时 || 默认延时）
        const totalTime = this.duration + this.repeat * durationAndDelay //总时长： 设置的执行时长 + 重复次数 * （动画时长+延时时长）

        let elapsed = this.calculateElapsedPortion(totalTime, elapsedTime, durationAndDelay); // 当前循环的进度
        let value = this.easingFunction(elapsed); // 调用缓动函数 根据进度计算出相对应百分比
        this.updateProperties(this.rawData, this.startValues, this.endValues, value); // 根据计算出来的value，将属性转换成对应值
        if (this.onUpdateCallback) {
            this.onUpdateCallback(this.rawData, elapsed, this.element);
        }
        if (this.onAfterUpdateCallback) {
            this.onAfterUpdateCallback(this.rawData, elapsed, this.element);
        }
        // 设定执行时间为0  ||  已用时间 大于 设定时间
        if (this.duration === 0 || elapsedTime >= this.duration) {
            // 重复次数大于1，减少次数
            if (this.repeat > 0) {
                // 计算执行几次了 (已用时间-设定时间)/动画时长 +1
                let completeCount = Math.min(Math.trunc((elapsedTime - this.duration) / durationAndDelay) + 1, this.repeat);
                if (isFinite(this.repeat)) {
                    this.repeat -= completeCount;
                }
                // 重新设置开始值，重新开始
                // startValuesBackup备份的起始值
                for (property in this.startValuesBackup) {
                    if (!this.yoyo && typeof this.endValues[property] === 'string') {
                        this.startValuesBackup[property] = this.startValuesBackup[property] + parseFloat(this.endValues[property])
                    }
                    if (this.yoyo) {
                        // 交换end和startRepeat的值。
                        this.swapEndStartRepeatValues(property)
                    }
                    // repeat，将备份startRepeat赋值回start
                    this.startValues[property] = this.startValuesBackup[property]
                }
                // yoyo，反转
                if (this.yoyo) {
                    this.reversed = !this.reversed
                }
                // 开始时间 durationAndDelay * 执行几次
                this.startTime += durationAndDelay * completeCount
                // 触发onRepeat事件
                if (this.onRepeatCallback) {
                    this.onRepeatCallback(object)
                }
                this.onEveryStartCallbackFired = false
                return true
            } else {
                this.isPlaying = false;
                this.goToEnd = true;
                this.onFinishCallback && this.onFinishCallback();
                return false;
            }
        }
        return true;
    };

    /**
     * 计算出elapsedTime（已用时间）在当前循环的进度 0~1之间
     * @param totalTime - 总时长
     */
    calculateElapsedPortion(totalTime, elapsedTime, durationAndDelay) {
        if (this.duration === 0) return 1 //设置的执行时间为0，就返回1， 立即执行到指定位置
        if (elapsedTime > totalTime) { //已用时间大于总时长，超出了设定范围，就返回1， 立即执行到指定位置
            return 1
        }

        const timesRepeated = Math.trunc(elapsedTime / durationAndDelay) //执行了几次
        const timeIntoCurrentRepeat = elapsedTime - timesRepeated * durationAndDelay //当前在循环中的位置
        const portion = Math.min(timeIntoCurrentRepeat / this.duration, 1) //得出百分比 包含delay，最大为1
        if (portion === 0 && elapsedTime === this.duration) { // 如果已用时间等于设置时间。则返回1
            return 1
        }
        return portion
    }

    /**
     * 根据计算出来的value，将属性转换成对应值 
     * @param rawObject - 初始化值 rawData
     * @param this.startValues - 起始值
     * @param this.endValues - 结束值
     * @param value - 当前进度百分比
     */
    updateProperties(rawObject, startValues, endValues, value) {
        for (let key in endValues) {
            // 不更新 源对象中不存在的属性
            if (startValues[key] === undefined) {
                continue;
            }
            let start = startValues[key] || 0;
            let end = endValues[key];
            let startIsArray = Array.isArray(rawObject[key]);
            let endIsArray = Array.isArray(end);
            let isInterpolationList = !startIsArray && endIsArray;
            if (isInterpolationList) {
                //处理end为数组的情况下的缓动函数
                rawObject[key] = this.interpolationFunction(end, value);
            } else if (typeof end === 'object' && end) {
                //对象则递归处理
                this.updateProperties(rawObject[key], start, end, value);
            } else {
                // 处理某些加值 或者减值的情况 例如{top: '+20', left : '-20'}
                end = this.handleRelativeValue(start, end);
                if (typeof end === 'number') {
                    rawObject[key] = start + ((end - start) * value);
                }
            }
        }
    };

    /**
     * 处理某些加值 或者减值的情况 例如{top: '+20', left : '-20'}
     * @param start - 起始值
     * @param end - 结束值
     * 
     * @returns 计算后数据
     */
    handleRelativeValue(start, end) {
        if (typeof end !== 'string') {
            return end;
        }
        if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            return start + parseFloat(end);
        }
        return parseFloat(end);
    };

    /**
     * 交换end和startRepeat的值。 一般用于在设置了this.yoyo的情况
     */
    swapEndStartRepeatValues(property) {
        const tmp = this.startValuesBackup[property]
        const endValue = this.endValues[property]

        if (typeof endValue === 'string') {
            this.startValuesBackup[property] = this.startValuesBackup[property] + parseFloat(endValue)
        } else {
            this.startValuesBackup[property] = this.endValues[property]
        }

        this.endValues[property] = tmp
    }

    /**
     * 结束所有链式动画
     */
    stopChainedTweens() {
        for (let i = 0, len = this.chainedTweens.length; i < len; i++) {
            this.chainedTweens[i].stop()
        }
        return this
    }
    /**
     * 结束
     */
    stop() {
        if (!this.isChainStopped) {
            this.isChainStopped = true
            this.stopChainedTweens()
        }

        if (!this.isPlaying) {
            return this
        }

        this.isPlaying = false

        this.isPaused = false

        if (this.onStopCallback) {
            this.onStopCallback(this._object)
        }

        return this
    }

}