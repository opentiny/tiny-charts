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
function treeToLink(data){
    let linkData = {
      nodes:[],
      edges: []
    };
    convertData(data,linkData);
    return linkData
}

function convertData(data, linkData){
    if(data.id){
        const { children, ...obj } = data;
        linkData.nodes.push({...obj})
        data.children?.forEach(item => {
            convertData(item, linkData);
            item.id && linkData.edges.push({
                end: item.id,
                start: data.id,
            })
        });
    }
}

// 树形结构 -> nodes, edges结构
export default treeToLink;