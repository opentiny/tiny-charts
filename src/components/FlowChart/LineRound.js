const VDirection = ['TB', 'BT', 'V'];
const HDirection = ['LR', 'RL', 'H'];

// 圆角曲线连线
export default class LineRound {
    // 默认圆弧拐角的 radius 为 20  
    radius = 10;
    // 连线向前多少开始拐弯
    dis = 15;
    // 直角拐点占水平距离的百分比
    lineDistance = 0.5;

    constructor(option) {
        this.radius = option.radius === undefined ? this.radius : option.radius;
        this.lineDistance = option.lineDistance || 0.5;
    }

    /**
     * 以lineRound作为试点，连线有两种对齐方式：
     * 1. 默认为向后对齐，即向target节点对齐，优先级低
     * 2. 然后再将source节点出来的连线向前对齐，优先级高
     */
    setData(edge, data, direction) {
        if(VDirection.indexOf(direction) !== -1){
            if(edge.alignType == 'target'){
                this.setTargetDataV(edge, data);
            }else if(edge.alignType == 'source'){
                this.setSourceDataV(edge, data);
            }
        }else{
            if(edge.alignType == 'target'){
                this.setTargetData(edge, data);
            }else if(edge.alignType == 'source'){
                this.setSourceData(edge, data);
            }
        }
    }

    // 计算出以目标节点为对齐方式的连线数据
    setTargetData(edge, data){
        let end = edge.target;
        let start = edge.source;
        let nodesObj = data.nodesObj;
        // 拐角半径
        edge.radius = this.radius;
        // 起始点
        edge.startPoint = {
            x: nodesObj[start].x + nodesObj[start].width + ( nodesObj[start].innerWidth - nodesObj[start].width ) / 2,
            y: nodesObj[start].y + nodesObj[start].height / 2,
        };
        // 结束点
        edge.endPoint = {
            x: nodesObj[end].x - ( nodesObj[end].innerWidth - nodesObj[end].width ) / 2,
            y: nodesObj[end].y + nodesObj[end].height / 2,
        };
        // let hDis = edge.endPoint.x - edge.startPoint.x;
        let vDis = edge.endPoint.y - edge.startPoint.y;
        // endPoint向左距离20点位置开始绘制曲线
        let hDis = this.dis;

        // radius 根据 vDis 大小而动态调整
        if(Math.abs(vDis) <= this.radius * 2){
            edge.radius = Math.abs(vDis) / 2;
        }
        
        let revise = edge.radius;
        // 当end节点在start节点下方时，个别点的位置需要修正
        if(edge.endPoint.y < edge.startPoint.y){
            revise = -edge.radius
        }
        // 第一个圆弧起始点
        edge.firstRoundStartPoint = {
            x: edge.endPoint.x  - hDis - edge.radius * 2,
            y: edge.startPoint.y,
        }
        // 第一个圆弧控制点
        edge.firstRoundControlPoint = {
            x: edge.endPoint.x - hDis - edge.radius,
            y: edge.startPoint.y,
        }
        // 第一个圆弧结束点
        edge.firstRoundEndPoint = {
            x: edge.endPoint.x - hDis - edge.radius,
            y: edge.startPoint.y + revise,
        };
        // 第二个圆弧起始点
        edge.secondRoundStartPoint = {
            x: edge.endPoint.x - hDis - edge.radius,
            y: edge.endPoint.y - revise,
        };
        // 第二个圆弧控制点
        edge.secondRoundControlPoint = {
            x: edge.endPoint.x - hDis - edge.radius,
            y: edge.endPoint.y,
        };
        // 第二个圆弧结束点
        edge.secondRoundEndPoint = {
            x: edge.endPoint.x - hDis,
            y: edge.endPoint.y,
        };
    }

    // 计算出以源头节点为对齐方式的连线数据
    setSourceData(edge, data){
        let end = edge.target;
        let start = edge.source;
        let nodesObj = data.nodesObj;
        // 拐角半径
        edge.radius = this.radius;
        // 起始点
        edge.startPoint = {
            x: nodesObj[start].x + nodesObj[start].width + ( nodesObj[start].innerWidth - nodesObj[start].width ) / 2,
            y: nodesObj[start].y + nodesObj[start].height / 2,
        };
        // 结束点
        edge.endPoint = {
            x: nodesObj[end].x - ( nodesObj[end].innerWidth - nodesObj[end].width ) / 2,
            y: nodesObj[end].y + nodesObj[end].height / 2,
        };
        // let hDis = edge.endPoint.x - edge.startPoint.x;
        let vDis = edge.endPoint.y - edge.startPoint.y;
        // endPoint向左距离20点位置开始绘制曲线
        let hDis = this.dis;

        // radius 根据 vDis 大小而动态调整
        if(Math.abs(vDis) <= this.radius * 2){
            edge.radius = Math.abs(vDis) / 2;
        }
        
        let revise = edge.radius;
        // 当end节点在start节点下方时，个别点的位置需要修正
        if(edge.endPoint.y < edge.startPoint.y){
            revise = -edge.radius
        }
        // 第一个圆弧起始点
        edge.firstRoundStartPoint = {
            x: edge.startPoint.x  + hDis,
            y: edge.startPoint.y,
        }
        // 第一个圆弧控制点
        edge.firstRoundControlPoint = {
            x: edge.startPoint.x + hDis + edge.radius,
            y: edge.startPoint.y,
        }
        // 第一个圆弧结束点
        edge.firstRoundEndPoint = {
            x: edge.startPoint.x + hDis + edge.radius,
            y: edge.startPoint.y + revise,
        };
        // 第二个圆弧起始点
        edge.secondRoundStartPoint = {
            x: edge.startPoint.x + hDis + edge.radius,
            y: edge.endPoint.y - revise,
        };
        // 第二个圆弧控制点
        edge.secondRoundControlPoint = {
            x: edge.startPoint.x + hDis + edge.radius,
            y: edge.endPoint.y,
        };
        // 第二个圆弧结束点
        edge.secondRoundEndPoint = {
            x: edge.startPoint.x + hDis + edge.radius * 2,
            y: edge.endPoint.y,
        };
    }

    // 计算出以目标节点为对齐方式的连线数据 --- 纵向
    setTargetDataV(edge, data){
        let end = edge.target;
        let start = edge.source;
        let nodesObj = data.nodesObj;
        // 拐角半径
        edge.radius = this.radius;
        // 起始点
        edge.startPoint = {
            x: nodesObj[start].x + nodesObj[start].width / 2,
            y: nodesObj[start].y + nodesObj[start].height + ( nodesObj[start].innerHeight - nodesObj[start].height ) / 2,
        };
        // 结束点
        edge.endPoint = {
            x: nodesObj[end].x + nodesObj[end].width / 2,
            y: nodesObj[end].y - ( nodesObj[end].innerHeight - nodesObj[end].height ) / 2,
        };
        let hDis = edge.endPoint.x - edge.startPoint.x;
        // endPoint向上距离20点位置开始绘制曲线
        let vDis = this.dis;

        // radius 根据 vDis 大小而动态调整
        if(Math.abs(hDis) <= this.radius * 2){
            edge.radius = Math.abs(hDis) / 2;
        }
        
        let revise = edge.radius;
        // 当end节点在start节点左方时，个别点的位置需要修正
        if(edge.endPoint.x < edge.startPoint.x){
            revise = -edge.radius
        }
        // 第一个圆弧起始点
        edge.firstRoundStartPoint = {
            x: edge.startPoint.x,
            y: edge.endPoint.y  - vDis - edge.radius * 2,
        }
        // 第一个圆弧控制点
        edge.firstRoundControlPoint = {
            x: edge.startPoint.x,
            y: edge.endPoint.y  - vDis - edge.radius,
        }
        // 第一个圆弧结束点
        edge.firstRoundEndPoint = {
            x: edge.startPoint.x + revise,
            y: edge.endPoint.y - vDis - edge.radius,
        };
        // 第二个圆弧起始点
        edge.secondRoundStartPoint = {
            x: edge.endPoint.x - revise,
            y: edge.endPoint.y - vDis - edge.radius,
        };
        // 第二个圆弧控制点
        edge.secondRoundControlPoint = {
            x: edge.endPoint.x,
            y: edge.endPoint.y - vDis - edge.radius,
        };
        // 第二个圆弧结束点
        edge.secondRoundEndPoint = {
            x: edge.endPoint.x,
            y: edge.endPoint.y - vDis,
        };
    }

    // 计算出以源头节点为对齐方式的连线数据  --- 纵向
    setSourceDataV(edge, data){
        let end = edge.target;
        let start = edge.source;
        let nodesObj = data.nodesObj;
        // 拐角半径
        edge.radius = this.radius;
        // 起始点
        edge.startPoint = {
            x: nodesObj[start].x + nodesObj[start].width / 2,
            y: nodesObj[start].y + nodesObj[start].height  + ( nodesObj[start].innerHeight - nodesObj[start].height ) / 2,
        };
        // 结束点
        edge.endPoint = {
            x: nodesObj[end].x + nodesObj[end].width / 2,
            y: nodesObj[end].y - ( nodesObj[end].innerHeight - nodesObj[end].height ) / 2,
        };
        let hDis = edge.endPoint.x - edge.startPoint.x;
        // endPoint向上距离20点位置开始绘制曲线
        let vDis = this.dis;

        // radius 根据 vDis 大小而动态调整
        if(Math.abs(hDis) <= this.radius * 2){
            edge.radius = Math.abs(hDis) / 2;
        }
        
        let revise = edge.radius;
        // 当end节点在start节点左方时，个别点的位置需要修正
        if(edge.endPoint.x < edge.startPoint.x){
            revise = -edge.radius
        }
        // 第一个圆弧起始点
        edge.firstRoundStartPoint = {
            x: edge.startPoint.x,
            y: edge.startPoint.y  + vDis,
        }
        // 第一个圆弧控制点
        edge.firstRoundControlPoint = {
            x: edge.startPoint.x,
            y: edge.startPoint.y  + vDis + edge.radius,
        }
        // 第一个圆弧结束点
        edge.firstRoundEndPoint = {
            x: edge.startPoint.x + revise,
            y: edge.startPoint.y  + vDis + edge.radius,
        };
        // 第二个圆弧起始点
        edge.secondRoundStartPoint = {
            x: edge.endPoint.x - revise,
            y: edge.startPoint.y  + vDis + edge.radius,
        };
        // 第二个圆弧控制点
        edge.secondRoundControlPoint = {
            x: edge.endPoint.x,
            y: edge.startPoint.y  + vDis + edge.radius,
        };
        // 第二个圆弧结束点
        edge.secondRoundEndPoint = {
            x: edge.endPoint.x,
            y: edge.startPoint.y  + vDis + edge.radius * 2,
        };
    }

    setPath (edge){
        let m =  `M${edge.startPoint.x} ${edge.startPoint.y}`;
        let l1 = `L${edge.firstRoundStartPoint.x} ${edge.firstRoundStartPoint.y}`;
        let q1 = `Q${edge.firstRoundControlPoint.x} ${edge.firstRoundControlPoint.y} ${edge.firstRoundEndPoint.x} ${edge.firstRoundEndPoint.y}`;
        let l2 = `L${edge.secondRoundStartPoint.x} ${edge.secondRoundStartPoint.y}`;
        let q2 = `Q${edge.secondRoundControlPoint.x} ${edge.secondRoundControlPoint.y} ${edge.secondRoundEndPoint.x} ${edge.secondRoundEndPoint.y}`;
        let l3 = `L${edge.endPoint.x} ${edge.endPoint.y}`;
        return `${m} ${l1} ${q1} ${l2} ${q2} ${l3}`;
    }
}
