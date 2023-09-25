import LineRound from './LineRound';

// 圆角曲线连线
export default class LineAnimation {

    constructor(option, container) {
        this.insertMarker(container);
        this.lineRoundIns = new LineRound(option);
    }

    // 插入动效原件
    insertMarker(container){
        let midMarker = 
        `<marker id="markerArrow" markerWidth="20" markerHeight="10" refX="1.3" refY="0.2" markerUnits="strokeWidth"
            class="fc-arrow" orient='auto'>
            <path class="p1" stroke-linecap="round" d="M0 0 L 50 50 L0 100" fill="transparent" stroke-width="20" stroke="#6D8FF0" style="transform: scale(0.0035) translateX(10px) translateY(10px);" />
            <path class="p2" stroke-linecap="round" d="M0 0 L 50 50 L0 100" fill="transparent" stroke-width="20" stroke="#6D8FF0" style="transform: scale(0.0035) translateX(70px) translateY(10px);" />
            <path class="p3" stroke-linecap="round" d="M0 0 L 50 50 L0 100" fill="transparent" stroke-width="20" stroke="#6D8FF0" style="transform: scale(0.0035) translateX(130px) translateY(10px);" />
            <path class="p4" stroke-linecap="round" d="M0 0 L 50 50 L0 100" fill="transparent" stroke-width="20" stroke="#6D8FF0" style="transform: scale(0.0035) translateX(190px) translateY(10px);" />
        </marker>`;
        container.parentElement.firstElementChild.innerHTML = '';
        container.parentElement.firstElementChild.insertAdjacentHTML('beforeend', midMarker);
    }

    setData(edge, data) {
        this.lineRoundIns.setData(edge, data)
    }

    setPath (edge){
        return this.lineRoundIns.setPath(edge)
    }
}
