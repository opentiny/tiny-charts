// 插入HTML元素
const appendHTML = (dom, child) => {
    dom.insertAdjacentHTML('beforeend', child);
};

// 插入dom元素
const appendDom = (dom, child) => {
    dom.insertAdjacentElement('beforeend', child);
};

export {
    appendHTML,
    appendDom
}