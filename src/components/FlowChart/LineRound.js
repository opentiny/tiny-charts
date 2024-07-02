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
    setTargetData(targetEdge, data){
        let end = targetEdge.target;
        let start = targetEdge.source;
        let nodesObj = data.nodesObj;
        let startWidth = nodesObj[start].width || 50;
        let startInnerWidth = nodesObj[start].innerWidth || 50;
        let startHeight = nodesObj[start].height || 50;
        let endWidth = nodesObj[end].width || 50;
        let endInnerWidth = nodesObj[end].innerWidth || 50;
        let endHeight = nodesObj[end].height || 50;
        // 拐角半径
        targetEdge.radius = this.radius;
        // 起始点
        targetEdge.startPoint = {
            x: nodesObj[start].x + startWidth + ( startInnerWidth - startWidth ) / 2-data.minX,
            y: nodesObj[start].y + startHeight / 2-data.minY,
        };
        // 结束点
        targetEdge.endPoint = {
            x: nodesObj[end].x - ( endInnerWidth - endWidth ) / 2-data.minX,
            y: nodesObj[end].y + endHeight / 2-data.minY,
        };
        let vDis = targetEdge.endPoint.y - targetEdge.startPoint.y;
        // endPoint向左距离20点位置开始绘制曲线
        let hDis = this.dis;

        // radius 根据 vDis 大小而动态调整
        if(Math.abs(vDis) <= this.radius * 2){
            targetEdge.radius = Math.abs(vDis) / 2;
        }

        let revise = targetEdge.radius;
        // 当end节点在start节点下方时，个别点的位置需要修正
        if(targetEdge.endPoint.y < targetEdge.startPoint.y){
            revise = -targetEdge.radius
        }
        // 第一个圆弧起始点
        targetEdge.firstRoundStartPoint = {
            x: targetEdge.endPoint.x  - hDis - targetEdge.radius * 2,
            y: targetEdge.startPoint.y,
        }
        // 第一个圆弧控制点
        targetEdge.firstRoundControlPoint = {
            x: targetEdge.endPoint.x - hDis - targetEdge.radius,
            y: targetEdge.startPoint.y,
        }
        // 第一个圆弧结束点
        targetEdge.firstRoundEndPoint = {
            x: targetEdge.endPoint.x - hDis - targetEdge.radius,
            y: targetEdge.startPoint.y + revise,
        };
        // 第二个圆弧起始点
        targetEdge.secondRoundStartPoint = {
            x: targetEdge.endPoint.x - hDis - targetEdge.radius,
            y: targetEdge.endPoint.y - revise,
        };
        // 第二个圆弧控制点
        targetEdge.secondRoundControlPoint = {
            x: targetEdge.endPoint.x - hDis - targetEdge.radius,
            y: targetEdge.endPoint.y,
        };
        // 第二个圆弧结束点
        targetEdge.secondRoundEndPoint = {
            x: targetEdge.endPoint.x - hDis,
            y: targetEdge.endPoint.y,
        };
    }

    // 计算出以源头节点为对齐方式的连线数据
    setSourceData(edge, data){
        let end = edge.target;
        let start = edge.source;
        let nodesObj = data.nodesObj;
        let startWidth = nodesObj[start].width || 50;
        let startInnerWidth = nodesObj[start].innerWidth || 50;
        let startHeight = nodesObj[start].height || 50;
        let endWidth = nodesObj[end].width || 50;
        let endInnerWidth = nodesObj[end].innerWidth || 50;
        let endHeight = nodesObj[end].height || 50;
        // 拐角半径
        edge.radius = this.radius;
        // 起始点
        edge.startPoint = {
            x: nodesObj[start].x + startWidth + ( startInnerWidth - startWidth ) / 2-data.minX,
            y: nodesObj[start].y + startHeight / 2-data.minY,
        };
        // 结束点
        edge.endPoint = {
            x: nodesObj[end].x - ( endInnerWidth - endWidth ) / 2-data.minX,
            y: nodesObj[end].y + endHeight / 2-data.minY,
        };
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
    setTargetDataV(targetEdge, data){
        let end = targetEdge.target;
        let start = targetEdge.source;
        let nodesObj = data.nodesObj;
        let startWidth = nodesObj[start].width || 50;
        let startInnerHeight = nodesObj[start].innerHeight || 50;
        let startHeight = nodesObj[start].height || 50;
        let endWidth = nodesObj[end].width || 50;
        let endInnerHeight = nodesObj[end].innerHeight || 50;
        let endHeight = nodesObj[end].height || 50;
        // 拐角半径
        targetEdge.radius = this.radius;
        // 起始点
        targetEdge.startPoint = {
            x: nodesObj[start].x + startWidth / 2-data.minX,
            y: nodesObj[start].y + startHeight + ( startInnerHeight - startHeight ) / 2-data.minY,
        };
        // 结束点
        targetEdge.endPoint = {
            x: nodesObj[end].x + endWidth / 2-data.minX,
            y: nodesObj[end].y - ( endInnerHeight - endHeight ) / 2-data.minY,
        };
        let hDis = targetEdge.endPoint.x - targetEdge.startPoint.x;
        // endPoint向上距离20点位置开始绘制曲线
        let vDis = this.dis;

        // radius 根据 vDis 大小而动态调整
        if(Math.abs(hDis) <= this.radius * 2){
            targetEdge.radius = Math.abs(hDis) / 2;
        }

        let revise = targetEdge.radius;
        // 当end节点在start节点左方时，个别点的位置需要修正
        if(targetEdge.endPoint.x < targetEdge.startPoint.x){
            revise = -targetEdge.radius
        }
        // 第一个圆弧起始点
        targetEdge.firstRoundStartPoint = {
            x: targetEdge.startPoint.x,
            y: targetEdge.endPoint.y  - vDis - targetEdge.radius * 2,
        }
        // 第一个圆弧控制点
        targetEdge.firstRoundControlPoint = {
            x: targetEdge.startPoint.x,
            y: targetEdge.endPoint.y  - vDis - targetEdge.radius,
        }
        // 第一个圆弧结束点
        targetEdge.firstRoundEndPoint = {
            x: targetEdge.startPoint.x + revise,
            y: targetEdge.endPoint.y - vDis - targetEdge.radius,
        };
        // 第二个圆弧起始点
        targetEdge.secondRoundStartPoint = {
            x: targetEdge.endPoint.x - revise,
            y: targetEdge.endPoint.y - vDis - targetEdge.radius,
        };
        // 第二个圆弧控制点
        targetEdge.secondRoundControlPoint = {
            x: targetEdge.endPoint.x,
            y: targetEdge.endPoint.y - vDis - targetEdge.radius,
        };
        // 第二个圆弧结束点
        targetEdge.secondRoundEndPoint = {
            x: targetEdge.endPoint.x,
            y: targetEdge.endPoint.y - vDis,
        };
    }

    // 计算出以源头节点为对齐方式的连线数据  --- 纵向
    setSourceDataV(edge, data){
        let end = edge.target;
        let start = edge.source;
        let nodesObj = data.nodesObj;
        let startWidth = nodesObj[start].width || 50;
        let startInnerHeight = nodesObj[start].innerHeight || 50;
        let startHeight = nodesObj[start].height || 50;
        let endWidth = nodesObj[end].width || 50;
        let endInnerHeight = nodesObj[end].innerHeight || 50;
        let endHeight = nodesObj[end].height || 50;
        // 拐角半径
        edge.radius = this.radius;
        // 起始点
        edge.startPoint = {
            x: nodesObj[start].x + startWidth / 2-data.minX,
            y: nodesObj[start].y + startHeight  + ( startInnerHeight - startHeight ) / 2-data.minY,
        };
        // 结束点
        edge.endPoint = {
            x: nodesObj[end].x + endWidth / 2-data.minX,
            y: nodesObj[end].y - ( endInnerHeight - endHeight ) / 2-data.minY,
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
