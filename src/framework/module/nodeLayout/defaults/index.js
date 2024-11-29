import execute from './excute';
export default class Layout {
    // 树形结构数据
    data;

    constructor(data, containerSize, option) {
        this.data = data;
        // 容器大小
        this.containerSize = containerSize;

        // 计算节点位置
        this.doLayout(this.data.nodes,this.data,option);
    }

    // 开始执行位置算法
    doLayout(nodes,data,options) {
        execute(nodes,data,this.containerSize,options)
    };
    
}