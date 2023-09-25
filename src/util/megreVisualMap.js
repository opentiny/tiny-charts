// VisualMap的覆盖方式比较特殊，采用直接全覆盖的形式
function megreVisualMap(iChartOption, baseOption) {
    let userVisualMap = iChartOption.visualMap;
    if(userVisualMap){
        baseOption.visualMap = userVisualMap;
    }
} 

export default megreVisualMap;