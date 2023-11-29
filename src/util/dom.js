// 插入HTML元素
const appendHTML = (dom, child) => {
    dom.insertAdjacentHTML('beforeend', child);
};

// 插入dom元素
const appendDom = (dom, child) => {
    dom.insertAdjacentElement('beforeend', child);
};

// 判断父元素是否为指定的 class
const isParent = (targetElement, parentClass)=>{
    if(targetElement === document.body){
        return false;
    } else if (targetElement.parentNode.classList.contains(parentClass)) {
        return targetElement.parentNode;
    } else {
        return isParent(targetElement.parentNode, parentClass)
    }
}
 

export {
    appendHTML,
    appendDom,
    isParent
}