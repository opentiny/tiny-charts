import LayoutBox from './LayoutBox';
import nonLayeredTidyTree from './compact';

const VALID_DIRECTIONS = [
    'LR', // left to right
    'RL', // right to left
    'TB', // top to bottom
    'BT', // bottom to top
    'H',  // horizontal
    'V'   // vertical
];

const HORIZONTAL_DIRECTIONS = [
    'LR',
    'RL',
    'H'
];

const DEFAULT_DIRECTION = VALID_DIRECTIONS[0];

/**
 * 根据传入数据计算出绘制流程图需要的，具有位置、兄弟关系、父子关系的数据
 * 整体算法思路：
 * @param {用户传入图表的数据，一维数组} data 
 * @returns 绘制所需数据
 */
export default class Layout {
    // 树形结构数据
    data;
    // 最大深度，默认根节点深度为0
    maxDepth = 0;
    // 每层深度的宽度
    depthWidth = [];

    constructor(data, containerSize, option) {
        this.data = data;
        this.direction = option.direction || VALID_DIRECTIONS[1];
        // 容器大小
        this.containerSize = containerSize;
        // 计算每个节点层级
        this.depth(this.data);
        // 节点间的横向距离
        this.xSpace = this.getXpace();
        // 节点间的纵向距离
        this.ySpace = option.vGap || 30;
        // 盒模型计算算法配置
        this.options = {
            direction: this.direction,
            getHGap: (d) => {
                return this.xSpace / 2;
            },
            getVGap: (d) => {
                return this.ySpace;
            },
            getHeight: (d) => {
                return d.height;
            },
            getWidth: (d) => {
                return d.width;
            }
        }
        // 计算每个节点盒模型
        this.setLayoutBox();
        // 计算节点位置
        this.doLayout(this.box, this.options, nonLayeredTidyTree);
        // 将整个节点树，移动到container中心, 将节点位置同步到this.data中
        this.revisePosn();
    }

    /**
     * 生成所有节点的盒模型
     * 根据 this.data 生成 this.box
     * this.data 和 this.box 结构一样
     * this.data 存储了真正用到的数据，包括：dom, width, height, x, y
     * this.box 存储了盒模型的数据，其中的 width, height 是dom width/height 和hgap/vgap 之和
     */
    setLayoutBox() {
        let rdata = this.data;
        let rootBox = new LayoutBox(rdata, this.options);
        let createBox = (data, box) => {
            if (data.children && data.children.length > 0) {
                for (let i = 0; i < data.children.length; i++) {
                    let childData = data.children[i];
                    let childBox = new LayoutBox(childData, this.options);
                    box.children[i] = childBox;
                    childBox.parent = box;
                    createBox(childData, childBox);
                }
            }
            return
        };
        createBox(rdata, rootBox);
        this.box = rootBox;
    }


    /**
     * 开始执行位置算法
     */
    doLayout(root, options, layoutAlgrithm) {
        const direction = options.direction || DEFAULT_DIRECTION;
        options.isHorizontal = this.isHorizontal(direction);
        if (direction && VALID_DIRECTIONS.indexOf(direction) === -1) {
            throw new TypeError(`Invalid direction: ${direction}`);
        }
        if (direction === VALID_DIRECTIONS[0]) {
            // LR
            layoutAlgrithm(root, options);
        } else if (direction === VALID_DIRECTIONS[1]) {
            // RL
            layoutAlgrithm(root, options);
            root.right2left();
        } else if (direction === VALID_DIRECTIONS[2]) {
            // TB
            layoutAlgrithm(root, options);
        } else if (direction === VALID_DIRECTIONS[3]) {
            // BT
            layoutAlgrithm(root, options);
            root.bottom2top();
        } else if (direction === VALID_DIRECTIONS[4] || direction === VALID_DIRECTIONS[5]) { }
        // fixed root position, default value is true
        let fixedRoot = options.fixedRoot;
        if (fixedRoot === undefined) fixedRoot = true;
        if (fixedRoot) {
            root.translate(-(root.x + root.width / 2 + root.hgap), -(root.y + root.height / 2 + root.vgap));
        }
        return root;
    };


    isHorizontal(direction) {
        return HORIZONTAL_DIRECTIONS.indexOf(direction) > -1;
    }

    /**
     * 计算每层节点之间的间距
     */
    getXpace() {
        this.depthWidth = new Array(this.maxDepth + 1).fill(0);
        let setDepthWidth = (node) => {
            if (this.depthWidth[node.depth] < node.width) {
                this.depthWidth[node.depth] = node.width;
            }
            if (node.children && node.children.length > 0) {
                node.children.forEach(child => {
                    setDepthWidth(child);
                });
            }
        }
        setDepthWidth(this.data);
        let sumWidth = this.depthWidth.reduce((a, b) => a + b);
        return (this.containerSize.width - 30 * 2 - sumWidth) / this.maxDepth;
    }

    /**
     * 计算每个节点的层级
     */
    depth(root) {
        let setDepth = (node, parent) => {
            node.depth = parent.depth + 1;
            node.parent = parent.id;
            if (this.maxDepth < node.depth) {
                this.maxDepth = node.depth;
            }
            if (node.children && node.children.length > 0) {
                node.children.forEach(child => {
                    setDepth(child, node);
                });
            }
        };
        setDepth(root, {id: null,depth: -1});
    }

    /**
     * 1. 将节点树移动到container中心
     * 2. 将节点位置同步到this.data中
     */
    revisePosn() {
        let minX = 99999;
        let maxX = -99999;
        let minY = 99999;
        let maxY = -99999;
        let getTreeBounding = (box, data) => {
            if (minX > box.x) {
                minX = box.x
            };
            if (minY > box.y) {
                minY = box.y
            };
            if (maxX < (box.x + data.width)) {
                maxX = box.x + data.width
            };
            if (maxY < (box.y + data.height)) {
                maxY = box.y + data.height
            };
            if (box.children && box.children.length > 0) {
                box.children.forEach((child, index) => {
                    getTreeBounding(child, data.children[index])
                });
            }
        }
        getTreeBounding(this.box, this.data);
        let revise = {
            x: this.containerSize.width / 2 - (maxX + minX) / 2,
            y: this.containerSize.height / 2 - (maxY + minY) / 2
        }
        let copyPosition = (box, data) => {
            data.x = box.x + revise.x;
            data.y = box.y + revise.y;
            if (box.children && box.children.length > 0) {
                box.children.forEach((child, index) => {
                    copyPosition(child, data.children[index]);
                });
            }
        }
        copyPosition(this.box, this.data);
    }
}



