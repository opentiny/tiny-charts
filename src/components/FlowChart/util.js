// 判断数组
function isArray(data) {
    return Object.prototype.toString.call(data) === '[object Array]' ? true : false;
}

//根据指定tag创建svg元素
function createSvgByTag(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

//给指定dom添加class类名，classList为数组类型
function addClass(dom, classes) {
    if (isArray(classes)) {
        classes.forEach(cls => {
            dom.classList.add(cls);
        });
    } else {
        dom.classList.add(classes);
    }
}

//给指定dom添加或更改属性
function attr(dom, key, value) {
    dom.setAttribute(key, value);
}

export {
    attr,
    isArray,
    addClass,
    createSvgByTag
}