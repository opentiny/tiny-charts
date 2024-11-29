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
const TRIGGER_CLASSNAMES = ['huicharts-node', 'huicharts-line-wrap', 'huicharts-legend-itemContainer', 'huicharts-container'];
const IGNORE_CONTAINER_CLASS =  'huicharts-legend-container';

export default class Contextmenu {
    constructor(context, menuOption) {
        this.showMenu = false;
        this.context = context;
        this.menuOption = menuOption;  // 配置对象
        this.handleShow = this.updateMenu.bind(this);
        this.handleClose = this.closeContextmenu.bind(this);
        this.bindEvent();
    }

    bindEvent () {
        this.context.root.addEventListener('contextmenu', this.handleShow)
    }

    uninstall() {
        this.showMenu = false;
        this.context.root.removeEventListener('click', this.handleClose)
        document.removeEventListener('click', this.handleClose)
        this.context.root.removeEventListener('contextmenu', this.handleShow)
    }

    updateMenu (event) {
        event.preventDefault();
        // 判断触发器的class集合
        const clsNames = new Set(TRIGGER_CLASSNAMES);
        const { menuOption } = this;
        const targetEl = event.target;
        let currentEl = event.target;
        let targetCls = '';
        while (currentEl) {
            const currClsNames = currentEl.getAttribute("class")?.split(' ') || [];
            targetCls = currClsNames.filter(name => clsNames.has(name))[0];
            if (targetCls || currentEl === document.body) {
                break;
            } 
            if (currClsNames.some(name => name === IGNORE_CONTAINER_CLASS)) {
                this.closeContextmenu(event);
                return false; // 右键在图例的空白区域
            }
            currentEl = currentEl.parentNode;
        }
        let menu = undefined;
        let targetId = undefined;
        if (targetCls === 'huicharts-node') {
            menu = menuOption.node;
            targetId = currentEl.getAttribute('id');
        } else if (targetCls === 'huicharts-line-wrap') {
            menu = menuOption.line;
            targetId = currentEl.children[0]?.getAttribute('id');
        } else if (targetCls === 'huicharts-legend-itemContainer') {
            menu = menuOption.legend;
            targetId = currentEl.getAttribute('id');
        } else if (targetCls === 'huicharts-container') {
            menu = menuOption.canvas;
            targetId = 'huicharts-container';
        }

        if (menu) {
            this.closeContextmenu(event)
            this.context.root.addEventListener('click', this.handleClose)
            document.addEventListener('click', this.handleClose)
            this.createMenuElement(event, menu, targetId);
            this.showMenu = true;
        }
    }

    // 创建menu元素
    createMenuElement (event, menuObj, targetId) {
        const ulElement = document.createElement("ul");
        ulElement.classList.add("huicharts-contextmenu");
        if (Array.isArray(menuObj.data)) {
            for (let item of menuObj.data) {
                const liElement = document.createElement("li");
                if (menuObj.itemRender) {
                    const renderElement = menuObj.itemRender(item, targetId);
                    if (renderElement instanceof Node) {
                        liElement.appendChild(renderElement);
                    } else {
                        liElement.innerHTML = renderElement;
                    }
                } else {
                    if (item.icon) {
                        liElement.innerHTML = `<img class="menu-icon" src="${item.icon}" alt="" />`;
                    }
                    liElement.innerHTML += `<span class="menu-text">${item.label}</span> `;
                }
                liElement.classList.add("huicharts-contextmenu-item");
                liElement.onclick = (event) => {
                    event.stopPropagation()
                    menuObj.onclick?.(item, targetId, event)
                    this.closeContextmenu(event)
                };
                ulElement.appendChild(liElement);
            }
        }

        this.context.root.appendChild(ulElement);
        this.adjustMenuPosition(event, ulElement);
    }

    // 调整menu展示的位置
    adjustMenuPosition (event, menuContainerEl) {
        const { root } = this.context;   //  图表根容器
        const { width: rootWidth, height: rootHeight, left: rootLeft, top: rootTop } = root.getBoundingClientRect();
        const { offsetWidth: menuWidth, offsetHeight: menuHeight } = menuContainerEl;
        const [offsetX = 4, offsetY = 4] = this.menuOption.offset || [4, 4]; // 菜单容器偏移量
        let left = event.clientX - rootLeft + offsetX;
        let top = event.clientY - rootTop + offsetY;
        if (left + menuWidth > rootWidth) { // 右侧超出，向左移位
            left = rootWidth - menuWidth - offsetX;
        }
        if (top + menuHeight > rootHeight) { // 底部超出，向上移位
            top = rootHeight - menuHeight - offsetY;
        }
        menuContainerEl.setAttribute('style', `position: absolute; top:  ${top}px; left:  ${left}px;`);
    }

    closeContextmenu (event) {
        if (!this.showMenu) {
            return
        }
        event?.stopPropagation();
        this.showMenu = false;
        const contextmenu = this.context.root.querySelectorAll('.huicharts-contextmenu');
        contextmenu.forEach((el) => {
            el.parentNode.removeChild(el);
        });
        this.context.root.removeEventListener('click', this.handleClose);
        document.removeEventListener('click', this.handleClose);
    }
}




