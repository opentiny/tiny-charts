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
// 默认节点渲染方法
function render(container, component, data, nodeInstance) {
  let dom = component(container, data);
  dom && container.appendChild(dom);
    setTimeout(() => {
        nodeInstance.setComponentApp({
              app: null,
              unmount: () => {},
              updata: (newData) => {
                container.innerHTML = '';
                let dom = component(container, newData);
                dom && container.appendChild(dom);
            }
        });
    }, 10)
}

  
let nodeRender = { render };
export default nodeRender;