import defendXSS from "../../util/defendXSS";

/**
 * 目前假设的组织关系为固定3层，后续肯定要修改
 */
const defaultUserHead = `<svg class="icon" style="width: 48px;height: 48px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3967"><path d="M171.9808 860.8256c5.8368 0 5.8368 0 0 0 0-17.5616 0-35.1744 5.8368-52.6848 5.888-29.3376 11.7248-58.6752 17.6128-82.1248s17.6128-46.8992 35.2256-70.3488c11.7248-23.4496 23.4496-41.0624 41.0112-52.736a138.24 138.24 0 0 1 52.736-46.9504c17.6128-17.5616 41.0624-29.2864 64.512-35.1744h5.8368c17.6128 35.1744 41.0624 64.512 58.6752 99.6864 17.5616 35.1744 41.0112 70.2976 58.624 99.6352 0 5.8368 0 5.8368 5.888 0l70.3488-105.5744c11.7248-17.6128 23.5008-41.0112 35.2256-58.624 5.888-11.7248 11.7248-23.4496 23.5008-35.1744h5.7856c17.6128 5.888 41.0112 17.6128 58.624 29.3376s41.1136 29.3376 52.7872 46.8992c17.6128 23.5008 35.2256 41.0624 46.8992 70.3488 17.6128 35.2256 29.2864 76.2368 41.0112 117.248 5.888 17.6128 5.888 35.2256 5.888 52.7872v52.6848h-5.888c-35.1232 17.6128-76.1856 29.3376-117.1968 35.2256-41.1136 11.7248-82.1248 17.6128-123.0848 23.5008-17.6128 0-41.1136 5.7856-58.6752 5.7856H482.6624c-41.0624 0-87.9616-5.7856-128.9728-11.7248-41.0624-5.888-82.1248-17.6128-123.0848-29.2864-17.6128-5.888-41.0624-11.7248-58.6752-17.6128h-5.7856c5.8368-17.5616 5.8368-23.3984 5.8368-35.1232zM529.5616 75.264h11.7248c17.6128 0 35.2256 5.888 46.9504 11.7248 11.7248 5.8368 29.2864 17.6128 41.1136 23.4496l35.1232 35.1744c17.6128 17.6128 29.2864 41.0624 35.2256 64.512 5.888 11.7248 5.888 29.2864 5.888 41.0624v29.2864c0 23.4496-5.888 41.0112-17.6128 64.4608a128 128 0 0 1-29.2864 46.8992l-35.2768 35.1744c-11.7248 11.7248-29.2864 17.5616-46.8992 23.4496-17.6128 5.8368-29.3376 11.7248-41.0624 11.7248-29.2864 0-52.736 0-82.0736-5.8368-23.4496-11.7248-46.8992-23.4496-64.512-41.0624-17.6128-17.5616-35.1232-35.1744-46.8992-58.624a113.5104 113.5104 0 0 1-17.6128-58.624v-35.1744c0-23.4496 5.888-41.0624 11.7248-64.512s17.6128-41.0112 35.1744-52.7872c5.888-11.7248 17.6128-23.4496 29.3376-35.1744 23.5008-17.5616 46.9504-23.3984 70.3488-35.1232 11.7248 0 17.664-5.8368 29.3376-5.8368 11.7248 5.8368 17.6128 5.8368 29.2864 5.8368z m0 0" fill="#999999"></path></svg>`
export default class NodeManager {
    // 圆环容器
    dom;
    // 数据
    data;
    // 圆环默认大小
    radius = 500;
    // 圆环纵向间隔
    distance = 350;
    // 分隔角度
    unitAngle = 20;
    // 当前选中的组织index
    selected;

    constructor(dom, option, selected) {
        this.dom = dom;
        this.selected = selected;
        this.data = option.data;
        this.createWarppers();
        this.createInitNodes();
    }

    // 创建层级圆环
    createWarppers() {
        // 最顶层的圆环的位置
        const initTop = -700;
        let depth = getDataDepth(this.data, 0);
        for (let index = 0; index < depth; index++) {
            let top = initTop + index * this.distance;
            let width = this.radius * 2;
            let zindex = 100 - index;
            // 圆环
            let warpper = `<div class="ozc_warpper" style='top: ${top}px;width: ${width}px;height: ${width}px;z-index: ${zindex}; transform: translateX(-50%) rotate(0deg);'></div>`;
            this.dom.insertAdjacentHTML('beforeend', warpper);
            // 竖线
            let warpperLine = `<div class="ozc_warpper_line" style='top: ${top + this.radius * 2 - this.distance / 3}px;height: ${this.distance / 3}px;'></div>`;
            this.dom.insertAdjacentHTML('beforeend', warpperLine);
            // 标签
            let warpperRect = `<div class="ozc_warpper_rect" style='top: ${top + this.radius * 2 - this.distance / 5}px;'>N层</div>`;
            this.dom.insertAdjacentHTML('beforeend', warpperRect);
            // 空数据提示
            let warpperEmpty = `<div class="ozc_warpper_empty" style='top: ${top + this.radius * 2 - this.distance / 3 - 36}px;'>当前部门无子部门</div>`;
            this.dom.insertAdjacentHTML('beforeend', warpperEmpty);
        }
        this.warppers = this.dom.getElementsByClassName('ozc_warpper');
        this.warpperLines = this.dom.getElementsByClassName('ozc_warpper_line');
        this.warpperRects = this.dom.getElementsByClassName('ozc_warpper_rect');
        this.warpperEmptys = this.dom.getElementsByClassName('ozc_warpper_empty');
    }

    // 创建初始节点和布局
    createInitNodes() {
        this.createBoss();
        let firstLevel = this.data.children || [];
        let firstSelect = this.selected[0];
        this.warpperRects[0].innerHTML = this.data.level;
        this.createLevel(firstLevel, firstSelect, 0);
        let secondLevel = firstLevel[firstSelect].children;
        let secondSelect = this.selected[1];
        this.warpperRects[1].innerHTML = firstLevel[firstSelect].level;
        this.createLevel(secondLevel, secondSelect, 1);
    }

    // 创建boss节点
    createBoss() {
        // 绘制最顶层管理者 
        let boss = this.createNode(this.data,  'left: 50%;top: 36px;transform: translateX(-50%);'); 
        this.dom.insertAdjacentHTML('beforeend', boss);
    }

    /**
     * 绘制每层员工dom
     * @param {整层数据} data 
     * @param {选中dom下标} index 
     * @param {圆环容器} warpper 
     */
    createLevel(data, selectedIndex, warpperIndex){
        let warpper = this.warppers[warpperIndex];
        let warpperLine = this.warpperLines[warpperIndex];
        let warpperRect = this.warpperRects[warpperIndex];
        let warpperEmpty = this.warpperEmptys[warpperIndex];
        if(!data || data.length == 0){
            warpperEmpty.style.display = 'block';
            warpper.style.display = 'none';
            warpperLine.style.display = 'none';
            warpperRect.style.display = 'none';
            return;
        }else{
            warpperEmpty.style.display = 'none';
            warpper.style.display = 'block';
            warpperLine.style.display = 'block';
            warpperRect.style.display = 'block';
        }
        let initAngle = selectedIndex * this.unitAngle * -1;
        let userCardWidth = 150; // 这个值讲道理应该动态获取
        let userHeadWidth = 52; // 这个值讲道理应该动态获取
        data.forEach((user, i) => {
            let center = { x: this.radius,y: this.radius };
            let angle = initAngle + this.unitAngle * i;
            let left = center.x + this.radius * Math.sin(Math.PI * angle / 180) - userCardWidth / 2;
            let top = center.y + this.radius * Math.cos(Math.PI * angle / 180) - userHeadWidth / 2;
            let style = `left: ${left}px;top: ${top}px;`;
            if(i === selectedIndex){
                style = `left: ${left}px;top: ${top}px;transform: scale(1.2);`;
            }
            let node = this.createNode(user, style, warpperIndex, i);
            warpper.insertAdjacentHTML('beforeend', node);
        });
    }

    // 刷新第二层数据和DOM
    refreshSecondWarpper(selected){
        this.warppers[1].style.transform = ` translateX(-50%) rotate(0deg)`;
        this.warppers[1].innerHTML = '';
        this.selected = selected;
        let secondLevel = this.data.children[this.selected[0]].children;
        let secondSelect = Math.floor(secondLevel.length / 2); 
        this.selected[1] = secondSelect;
        this.createLevel(secondLevel, secondSelect, 1);
    }

    createNode(data, style, warpperIndex, nodeIndex) {
        let node = `
            <div class='user_card' style='${style}' data-warpper-index='${warpperIndex}' data-node-index='${nodeIndex}'>
                <div class='user_head'>
                    ${
                        data.head ? '<img class="user_head_img " draggable="false" src="' + defendXSS(data.head) + '"/>' : defaultUserHead
                    }
                </div>
                <div class='user_name'>${defendXSS(data.name)}</div>
                <div class='user_id'>${defendXSS(data.id)}</div>
                <div class='user_address'>${defendXSS(data.address)}</div>
                <div class='user_subordinates'>${data.children ? data.children.length : 0}个下层组织</div>
            </div>`;
        return node;
    }
}


// data：obj
function getDataDepth(data, depth) {
    if (data && data.children && data.children.length > 0) {
        depth++;
        let childDepths = data.children.map(child => {
            return getDataDepth(child, depth)
        });
        depth = Math.max(...childDepths)
    }
    return depth;
}
