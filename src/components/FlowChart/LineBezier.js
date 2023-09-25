const VDirection = ['TB', 'BT', 'V'];
const HDirection = ['LR', 'RL', 'H'];

// 贝塞尔曲线连线
export default class LineBezier {
    // 水平直线占横向距离的百分比
    lineDistance = 0.15;
    // 贝塞尔曲线控制点
    bezierDistance = 0.6;

    constructor(option) {
        this.lineDistance = option.lineDistance || 0.15;
        this.bezierDistance = option.bezierDistance || 0.6;
    }

    setData(edge, data, direction) {
        if(VDirection.indexOf(direction) !== -1){
            this.setTargetDataV(edge, data);
        }else{
            this.setTargetData(edge, data);
        }
    }

    setTargetData(edge, data) {
        let end = edge.target;
        let start = edge.source;
        let nodesObj = data.nodesObj;
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
        let hDis = edge.endPoint.x - edge.startPoint.x;
        let vDis = edge.endPoint.y - edge.startPoint.y;
        // 贝塞尔曲线起始点
        edge.bezierStartPoint = {
            x: edge.startPoint.x + hDis * this.lineDistance,
            y: edge.startPoint.y,
        }
        // 贝塞尔曲线第一个控制点
        edge.bezierFirstControlPoint = {
            x: edge.bezierStartPoint.x + hDis * this.bezierDistance,
            y: edge.bezierStartPoint.y,
        };
        // 贝塞尔曲线结束点
        edge.bezierEndPoint = {
            x: edge.endPoint.x - hDis * this.lineDistance,
            y: edge.endPoint.y,
        };
        // 贝塞尔曲线第二个控制点
        edge.bezierSecondControlPoint = {
            x: edge.bezierEndPoint.x - hDis * this.bezierDistance,
            y: edge.bezierEndPoint.y,
        };
    }

    setTargetDataV(edge, data) {
        let end = edge.target;
        let start = edge.source;
        let nodesObj = data.nodesObj;
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
        let vDis = edge.endPoint.y - edge.startPoint.y;
        // 贝塞尔曲线起始点
        edge.bezierStartPoint = {
            x: edge.startPoint.x,
            y: edge.startPoint.y  + vDis * this.lineDistance,
        }
        // 贝塞尔曲线第一个控制点
        edge.bezierFirstControlPoint = {
            x: edge.bezierStartPoint.x,
            y: edge.bezierStartPoint.y  + vDis * this.bezierDistance,
        };
        // 贝塞尔曲线结束点
        edge.bezierEndPoint = {
            x: edge.endPoint.x,
            y: edge.endPoint.y - vDis * this.lineDistance,
        };
        // 贝塞尔曲线第二个控制点
        edge.bezierSecondControlPoint = {
            x: edge.bezierEndPoint.x,
            y: edge.bezierEndPoint.y  - vDis * this.bezierDistance,
        };
    }

    setPath(edge) {
        let a = `M${edge.startPoint.x} ${edge.startPoint.y}`;
        let b = `L${edge.bezierStartPoint.x} ${edge.bezierStartPoint.y}`;
        let c = `C${edge.bezierFirstControlPoint.x} ${edge.bezierFirstControlPoint.y} ${edge.bezierSecondControlPoint.x} ${edge.bezierSecondControlPoint.y} ${edge.bezierEndPoint.x} ${edge.bezierEndPoint.y}`;
        let d = `L${edge.endPoint.x} ${edge.endPoint.y}`;
        return `${a} ${b} ${c} ${d}`;
    }
}


