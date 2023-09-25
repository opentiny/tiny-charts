import Layout from './Layout';

export const NODE_ID_PREFIX = 'fc-node-';

export default class NodeManager {
    // 节点数据，包括节点数据和连线数据
    data;

    constructor(data, option, container) {
        this.option = option;
        this.render = option.render;
        this.createNodes(data, container);
    }

    // 将用户数据根据dagre算法计算出位置，并移动节点位置
    layoutNodes(data, containerPosn) {
        this.data = data;
        this.getNodeSize(this.data.nodes);
        new Layout(this.data, this.option, containerPosn);
        this.moveNode(this.data.nodes);
    }

    moveNode(nodes) {
        nodes.forEach(node => {
            if (node.dom) {
                node.dom.style.top = node.y + 'px';
                node.dom.style.left = node.x + 'px';
            }
        });
    }

    /**
     * 计算出给个节点的宽高，用于后续排版算法
     */
    getNodeSize(nodes) {
        nodes.forEach(node => {
            let size = node.dom && node.dom.getBoundingClientRect();
            let innerSize = node.dom && node.dom.firstChild &&  node.dom.firstChild.getBoundingClientRect();
            // 外层容器的宽高目前是定死为50
            node.width = size && size.width; 
            node.height = size && size.height;
            // 内层容器的宽高则根据实际情况计算
            node.innerWidth = innerSize && innerSize.width;
            node.innerHeight = innerSize && innerSize.height;
        });
    }

    /**
     * 创建节点
     **/
    createNode(ndata) {
        let { id, render } = ndata;
        let nodeDom = document.createElement("div");
        nodeDom.classList.add("fc-node");
        nodeDom.id = NODE_ID_PREFIX + id;
        let renderFun = render || this.render;
        if (renderFun) {
            let dom = renderFun(nodeDom, ndata);
            dom && nodeDom.appendChild(dom)
        }
        return nodeDom;
    }

    /**
     * 根据用户传入数据生成节点Dom，并插入进container中
     */
    createNodes(data, container) {
        data.nodes.forEach(node => {
            let nodeDom = this.createNode(node);
            node.dom = nodeDom;
            container.appendChild(nodeDom);
        });
    }

    // 更新节点位置信息
    updateNode(domId, x, y) {
        let id = domId.replace(NODE_ID_PREFIX, "");
        this.data.nodesObj[id].x = x;
        this.data.nodesObj[id].y = y;
    }
}
