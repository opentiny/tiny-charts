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
import Line from './index';
// 自定义渲染线
function Customize(params) {
  const { data, option, ArrowManager, svgContainer } = params
  data.edges.forEach(edge => {
    const lineInstance = new Line(edge, ArrowManager, option);
    let path = lineInstance.render();
    // 绑定连线由短变长的动效
    lineInstance.animation({
      type: 'grow',
      duration: option.duration || 500,
      path
    });
    svgContainer.appendChild(path);
  })
};

export default Customize;