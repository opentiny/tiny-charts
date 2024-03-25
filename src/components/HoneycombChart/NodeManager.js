import TipManager from './TipManager';
export default class NodeManager {
    data;
    theme;
    render;
    tipHtml;
    vGap;
    hGap;
    layout;
    dom;
    // 节点宽度
    nodeWidth;
    // 节点dom数组
    nodeCluster;
    container;
    hcContainer;
    tipManager;


    constructor(dom, option) {
        this.dom = dom;
        this.container = this.dom.getElementsByClassName('hc-rows')[0];
        this.hcContainer = this.dom.getElementsByClassName('hc-container')[0];
        this.data = option.data || [];
        this.theme = option.theme;
        this.render = option.render;
        this.tipHtml = option.tipHtml;
        this.vGap = option.vGap + 'px' || 0;
        this.hGap = option.hGap === undefined ? 8 : option.hGap;
        this.layout = option.layout || 'common';
        this.nodeWidth = this.getNodeWidth() + this.hGap;
        this.tipManager = new TipManager(this.theme, this.tipHtml);
        this.tipManager.init(this.hcContainer);
        this.createNodes();
    }

    /**
     * 在container中插入一个节点，获取节点宽度
    */
    getNodeWidth() {
        let node = this.data[0];
        let nodeDom = this.createNode(node);
        this.container.appendChild(nodeDom);
        let width = nodeDom.clientWidth;
        this.container.removeChild(nodeDom)
        return width;
    }

    /**
     * 根据用户传入数据生成节点Dom
     */
    createNodes() {
        let nodeCluster = [];
        this.data.forEach((node) => {
            let nodeDom = this.createNode(node);
            nodeDom.addEventListener('mouseenter', (e) => {
                this.tipManager.show(e, node, this.hcContainer, this.dom);
            });
            nodeDom.addEventListener('mouseleave', (e) => {
                this.tipManager.close(e);
            });
            nodeCluster.push(nodeDom);
        });
        this.nodeCluster = nodeCluster;
    }

    /**
     * 创建节点
     **/
    createNode(node) {
        let { render } = node;
        let nodeDom = document.createElement('div');
        nodeDom.classList.add('hc-node');
        nodeDom.style.marginRight = this.hGap / 2 + 'px';
        nodeDom.style.marginLeft = this.hGap / 2 + 'px';
        let renderFun = render || this.render;
        if (renderFun) {
            renderFun(nodeDom, node);
        }
        return nodeDom;
    }

    /**
     * 根据布局生成图表
     **/
    layoutNodes() {
        let containerWidth = this.hcContainer.getBoundingClientRect().width;
        let total = this.data.length;
        // 一行放几个节点
        let size = Math.trunc(containerWidth / this.nodeWidth);
        // 获取布局分布数据
        let rowSize = this.getRowSize(total, size);
        // 布局
        rowSize.forEach((item, index) => {
            // 创建一个rowDom
            let rowDom = document.createElement('div');
            rowDom.classList.add('hc-row');
            // 位移
            let left = this.getRowLeft(index);
            rowDom.style.left = left + 'px';
            // vGap控制节点之间垂直间距
            if (index !== 0) {
                rowDom.style.marginTop = this.vGap;
            }
            // 插入
            item.forEach(i => {
                let dom = this.nodeCluster[i];
                rowDom.appendChild(dom);
            });
            this.container.appendChild(rowDom);
        });
    }

    /**
     * 返回每行left值
    **/
    getRowLeft(index) {
        let left = 0;
        switch (this.layout) {
            case 'common':
                left = index % 2 === 1 ? this.nodeWidth / 2 : 0;
                break;
            case 'ellipse':
                left = index % 2 === 0 ? this.nodeWidth / 2 : 0;
                break;
            default:
                left = 0;
                break
        }
        return left;
    }

    /**
     * 返回二维数组
     **/
    getRowSize(total, size) {
        let arr = [];
        let num = this.layout === 'ellipse' ? size - 1 : size;
        let row = 0;
        for (let i = 0, j = 0; i < total; i++) {
            if (j >= num) {
                j = 0;
                row++;
                switch (this.layout) {
                    case 'common':
                    case 'ellipse':
                        num = num === size ? size - 1 : size;
                        break;
                    case 'rect':
                        num = size;
                }
            }
            if (j === 0) {
                arr[row] = [];
            }
            arr[row][j] = i;
            j++;
        }
        return arr;
    }
}
