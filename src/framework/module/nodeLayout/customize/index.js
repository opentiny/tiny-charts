export default class Layout {
    data;

    constructor(data, containerSize, option) {
        this.data = data;
        // 容器大小
        this.containerSize = containerSize;
        // 计算节点位置
        this.doLayout(this.data.nodes,option);
    }

    // 开始执行位置算法
    doLayout(nodes,options) {
        options.layout.algorithm && options.layout.algorithm(nodes,this.containerSize);
    };
}