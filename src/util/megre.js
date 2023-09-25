import { isObject, isArray } from '../util/type';
/**
 * 将 task 中所有属性合并到 target
 */
function megre(target, task) {
    if (isObject(task)) {
        for (const key in task) {
            if (target[key] === undefined || target[key] === null) {
                target[key] = task[key];
            } else if (isObject(task[key]) && !isArray(task[key])) {
                megre(target[key], task[key]);
            } else {
                target[key] = task[key];
            }
        }
    }
    return target;
}

export default megre;
