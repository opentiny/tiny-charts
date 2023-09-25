// 创建元素
const createDom = (name) => {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
};

// 元素绑定样式
const setStyle = (dom, option) => {
    for (let i in option) {
        dom.setAttribute(i, option[i]);
    }
};

// 插入HTML元素
const appendHTML = (dom, child) => {
    dom.insertAdjacentHTML('beforeend', child);
};

// 插入dom元素
const appendDom = (dom, child) => {
    dom.insertAdjacentElement('beforeend', child);
};

// 设置样式
const markStyle = (target, key, value) => {
    target.style[key] = value;
}

const percentToDecimal = (percent) => {
    return parseFloat(percent) / 100;
}


export { createDom, appendHTML, appendDom, setStyle, markStyle, percentToDecimal };