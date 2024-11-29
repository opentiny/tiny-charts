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
import Animate from "./Animate";
export default class AnimationGroup {
    tasks = [];
    end = false;
    onFinishCallback;
    animate;

    constructor(options) {
        this.onFinishCallback = options?.onFinish || this.onFinishCallback;
        this.onAfterUpdate = options?.onAfterUpdate || this.onAfterUpdate;
    }
    // 增加任务
    add(element, options) {
        this.end = false;
        options.onUpdate = options.onUpdate || this.onUpdate;
        let animate = new Animate(options, element);
        this.tasks[animate.getId()] = animate
    }

    // 开始任务
    start() {
        for (const key in this.tasks) {
            if (Object.hasOwnProperty.call(this.tasks, key)) {
                const element = this.tasks[key];
                element?.start();
            }
        }
        this.step();
    }

    // 结束任务
    stop() {
        for (const key in this.tasks) {
            if (Object.hasOwnProperty.call(this.tasks, key)) {
                const element = this.tasks[key];
                element?.stop();
            }
        }
    }

    // 循环
    step(time) {
        !this.end && requestAnimationFrame((timestamp) => {
            this.step(timestamp);
        });
        this.end = !this.update(time);
    }

    // 删除所有任务
    removeAll() {
        this.tasks = {}
    }

    // 删除任务
    remove(tasks) {
        for (let index = 0; index < tasks.length; index++) {
            const task = tasks[index];
            task.group = undefined
            delete this.tasks[task.getId()]
        }
    }

    // 如果组中的所有任务都未暂停或播放，则返回true
    allStopped() {
        return this.getAll().every(task => !task.isPlaying())
    }

    // 更新任务
    update(time, preserve, element) {
        if (time === void 0) {
            time = performance.now();
        }
        if (preserve === void 0) {
            preserve = true;
        }
        let taskIds = Object.keys(this.tasks)

        if (taskIds.length === 0) return true;
        let statusPool = [];
        // 动画是批量更新的
        if (taskIds.length > 0) {
            // 循环所有动画，更新对应位置
            for (let i = 0; i < taskIds.length; i++) {
                const task = this.tasks[taskIds[i]]
                const autoStart = !preserve
                let status = task && task.update(time, autoStart) === false; // 是否已完成
                statusPool.push(status);
                if (status && !preserve) { // 已完成则删除当前任务
                    this.remove(task)
                }
            }
        }
        this.onAfterUpdate();
        let isEnd = !statusPool.includes(false);
        isEnd && this.onFinishCallback && this.onFinishCallback();
        // 返回该动画组任务完成状态
        return !isEnd;
    }
    
    // 更新后回调
    onAfterUpdate = ()=>{}

    // 默认更新节点方法
    onUpdate(params, elapsed, element) {
        if (element) {
            const s = element.style;
            s.position = 'absolute';
            let matchUnit = {
                'font-size': 'px',
                'line-height': 'px',
                'rotate': 'deg',
                'width': 'px',
                'height': 'px',
                'left': 'px',
                'top': 'px',
                'bottom': 'px',
                'right': 'px',
            };
            for (const key in params) {
                if (Object.hasOwnProperty.call(params, key)) {
                    s[key] = matchUnit[key] ? params[key] + matchUnit[key] : params[key];
                }
            }
        }
    }
}