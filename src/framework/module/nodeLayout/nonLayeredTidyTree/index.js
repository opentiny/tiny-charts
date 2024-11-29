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
import NodeBox from './NodeBox';
import nonLayeredTidyTree from './algorithm';

// 布局方向
const VALID_DIRECTIONS = ['LR','RL', 'TB', 'BT', 'H', 'V'];

// 横向布局方向
const HORIZONTAL_DIRECTIONS = ['LR', 'RL', 'H'];

// 默认布局方向
const DEFAULT_DIRECTION = VALID_DIRECTIONS[0];

// 默认间距
const DEFAULT_GAP = 30;

export default class Layout {
    // 树形结构数据
    data;
    // 最大深度，默认根节点深度为0
    maxDepth = 0;
    // 每层深度的宽度
    depthWidth = [];

    constructor(data, containerSize, option) {
        this.data = data;
        this.direction = option.layout.direction || VALID_DIRECTIONS[0];
        // H结构设置左节点
        this.oneSide = option.layout.oneSide;
        // V结构设置上节点
        this.upSide = option.layout.upSide;
        // 容器大小
        this.containerSize = containerSize;
        // 计算每个节点层级
        this.depth(this.data);
        // 节点间的横向距离
        this.xSpace = option.layout.hGap || DEFAULT_GAP;
        // 节点间的纵向距离
        this.ySpace = option.layout.vGap || DEFAULT_GAP;
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
            },
            getSide: (d) => {
                if (this.oneSide.indexOf(d.id) > -1) {
                    return 'left';
                }
                return 'right';
            },
        }
        // 计算每个节点盒模型
        this.setNodeBox();
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
    setNodeBox() {
        let rdata = this.data;
        let rootBox = new NodeBox(rdata, this.options);
        let createBox = (data, box) => {
            if (data.children && data.children.length > 0) {
                for (let i = 0; i < data.children.length; i++) {
                    let childData = data.children[i];
                    let childBox = new NodeBox(childData, this.options);
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

    // 开始执行位置算法
    doLayout(root, options, layoutAlgrithm) {
        const direction = options.direction || DEFAULT_DIRECTION;
        options.isHorizontal = this.isHorizontal(direction);
        if (direction && VALID_DIRECTIONS.indexOf(direction) === -1) {
            throw new TypeError(`Invalid direction: ${direction}`);
        }
        if (direction === VALID_DIRECTIONS[0]) {  // LR
            layoutAlgrithm(root, options);
        } else if (direction === VALID_DIRECTIONS[1]) { // RL
            layoutAlgrithm(root, options);
            root.right2left();
        } else if (direction === VALID_DIRECTIONS[2]) { // TB
            layoutAlgrithm(root, options);
        } else if (direction === VALID_DIRECTIONS[3]) { // BT
            layoutAlgrithm(root, options);
            root.bottom2top();
        } else if (direction === VALID_DIRECTIONS[4] || direction === VALID_DIRECTIONS[5]) { // H or V
            // separate into left and right trees
            const { left, right } = this.separateTree(root, options);
            // do layout for left and right trees
            layoutAlgrithm(left, options);
            layoutAlgrithm(right, options);
            options.isHorizontal ? (left.right2left()) : (left.bottom2top());
            // combine left and right trees
            right.translate(left.x - right.x, left.y - right.y);
            // translate root
            root.x = left.x;
            root.y = right.y;
            const bb = root.getBoundingBox();
            if (options.isHorizontal) {
                if (bb.top < 0) {
                    root.translate(0, -bb.top);
                }
            } else {
                if (bb.left < 0) {
                    root.translate(-bb.left, 0);
                }
            }
        }
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

    separateTree(root, options) {
        // 初始化左右两棵树
        const left = new NodeBox(this.data, options);
        const right = new NodeBox(this.data, options);
        // automatically
        const treeSize = root.children.length;
        const rightTreeSize = Math.round(treeSize / 2);
        // separate left and right tree by meta data
        const getSide = options.getSide || function (child, index) {
            if (index < rightTreeSize) {
                return 'right';
            }
            return 'left';
        };
        for (let i = 0; i < treeSize; i++) {
            const child = root.children[i];
            const side = getSide(child, i);
            if (side === 'right') {
                right.children.push(child);
            } else {
                left.children.push(child);
            }
        }
        left.eachNode(node => {
            if (!node.isRoot()) {
                node.side = 'left';
            }
        });
        right.eachNode(node => {
            if (!node.isRoot()) {
                node.side = 'right';
            }
        });
        return {
            left,
            right
        };
    };

    // 计算每层节点之间的间距
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
        return Math.abs((this.containerSize.width - 30 * 2 - sumWidth) / this.maxDepth);
    }

    // 计算每个节点的层级,增加depth和parent属性
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
        setDepth(root, { id: null, depth: -1 });
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