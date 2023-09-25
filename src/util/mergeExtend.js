function mergeExtend(iChartOption, baseOption){
    if(!iChartOption) return;
    let extend = iChartOption.extend;
    if(!extend) return;
    for (const key in extend) {
        if (Object.hasOwnProperty.call(extend, key)) {
            baseOption[key] = extend[key];
        }
    }
}

export default mergeExtend;