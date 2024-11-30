

function calculateNode(data){
	data.x = data.x ?  data.x : 0;
	data.y = data.y ?  data.y : 0;
	if(data.childre && data.children.length) {
		data.children.forEach(item => {
			calculateNode(item)
		})
	}
}

// 执行布局
function execute(nodes,data,containerSize,options) {
    // 非树形结构方式数据
    if(nodes) {
        nodes.forEach((node) => {
            node.x = node.x ?  node.x : 0;
            node.y = node.y ?  node.y : 0;
        });
    // 树形结构方式数据
    } else {
        calculateNode(data);
    }
  
}
export default execute