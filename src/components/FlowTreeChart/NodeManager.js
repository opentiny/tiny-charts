import Layout from './Layout';

export const NODE_ID_PREFIX = 'ftc-node-';

export default class NodeManager {
    // 节点数据，树形结构
    data;
    // 节点位置算法
    layout;

    constructor(data, option, container, containerPosn) {
        this.option = option;
        this.render = option.render;
        this.createNodes(data, container);
    }

    // 将用户数据转换成树形结构，并移动节点位置
    layoutNodes(data, containerPosn) {
        this.getNodeSize(data);
        this.layout = new Layout(data, containerPosn, this.option);
        this.data = data;
        this.moveNode(this.data);
    }

    moveNode(node) {
        node.dom.style.top = node.y + 'px';
        node.dom.style.left = node.x + 'px';
        if (node.children && node.children.length > 0) {
            node.children.forEach(item => {
                this.moveNode(item)
            });
            
        }
    }

    /**
     * 计算出给个节点的宽高，用于后续排版算法
     */
    getNodeSize(node) {
        let size = node.dom.getBoundingClientRect();
        node.width = size.width;
        node.height = size.height;
        if (node.children && node.children.length > 0) {
            node.children.forEach(child => {
                this.getNodeSize(child);
            })
        }
    }

    /**
     * 创建节点
     * 这里的节点只是用来演示实例
     * 这里有个代码没有写，如果没有id,那需要写一个算法生成id
     **/
    createNode(ndata) {
        let { id, render } = ndata;
        let node = document.createElement("div");
        node.classList.add("ftc-node");
        node.id = NODE_ID_PREFIX + id;
        let renderFun = render || this.render;
        if(renderFun){
            let dom = renderFun(node, ndata);
            dom && node.appendChild(dom)
        }
        return node;
    }

    /**
     * 根据用户传入数据生成节点Dom，并插入进container中
     */
    createNodes(node, container) {
        let nodeDom = this.createNode(node);
        node.dom = nodeDom;
        container.appendChild(nodeDom);
        if (node.children && node.children.length > 0) {
            node.children.forEach(child => {
                this.createNodes(child, container);
            })
        }
    }
}
