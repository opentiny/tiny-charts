格式：

```javascript
// 参数：container 为节点容器
// 参数：data 为所有节点数据的数组，包括节点的长宽，定位信息
renderBorder: (container, data)=>{
  // 想要多少个节点区域，就插入多少个node节点，每个节点的top/left/width/height需要业务自行计算
    let node1 = `<div class="rect-item-1"></div>`;
    container.insertAdjacentHTML('beforeend', node1);
    let reactNode1 = container.querySelector('.rect-item-1');
    let startPoint1, endPoint1;
    data.forEach(v => {
      if (v.id === '2') {
        startPoint1 = v
      }
      if (v.id === '1') {
        endPoint1 = v
      }
    })
    const node1Top = `${startPoint1.y - 20}px`;
    const node1left = `${startPoint1.x - 20}px`;
    const node1Width = `${startPoint1.width + 40}px`;
    const node1Height = `${endPoint1.y - startPoint1.y + startPoint1.height + 40}px`;
    reactNode1.setAttribute('style', `position:absolute;top:${node1Top};left:${node1left};width:${node1Width};height:${node1Height};border:1px solid #888888;border-radius:4px`)
}
```

