import mobile from "../../util/mobile";

function updatePosition(iChartOption, legend, chartInstance) {
    // 兼容旧属性chartPosition
    let position = iChartOption.position || iChartOption.chartPosition;
    const adaptive = iChartOption?.adaptive;
    const width = chartInstance?.getWidth?.();
    const height = chartInstance?.getHeight?.();
    // 暂时用来只开放华为云主题
    const theme = iChartOption?.theme;
    const isMobile = iChartOption.isMobile || mobile();
    const mobileCenter = isMobile ? getMobilePositionCenter(iChartOption) : undefined;
    const graphHeight = iChartOption.graphHeight; //移动端左右布局图例大于50%时，图形剩余高度

    // 1.自适应处理圆环中心点位置，开启adaptive就会强行覆盖用户的position
    if (adaptive && theme.includes('cloud')) {
        position = {}; // 初始化为空对象
        // 圆环外直径
        let circleDiameter;
        if (legend.show === true) {
            //上下布局
            if (legend.orient === 'horizontal') {
                const circleSection = height - 16 - (legend.bottom !== 'auto' ? legend.bottom : 4);
                position.center = isMobile ? mobileCenter : [width / 2, circleSection / 2];
                circleDiameter = isMobile && graphHeight ? graphHeight - 16 :Math.min(width, circleSection) * 0.6;
            } else {
                //左右布局
                position.center =  isMobile ? mobileCenter : ['30%', '50%'];
                circleDiameter = isMobile  ? width * 0.5 * 0.8 : width * 0.6 * 0.8;
            }
        } else {
            // 图例不显示中心就居中
            position.center = ['50%', '50%'];
            circleDiameter = width * 0.8;
        }
        position.radius = Math.max(120, Math.min(200, Math.min(circleDiameter, height))) / 2;
    }
    return position;
}

function getMobilePositionCenter(iChartOption){
    const graphHeight = iChartOption.graphHeight; // 图形区高度 图例大于50%时
    const legend = iChartOption.legend; // 图形区高度 图例大于50%时
    if (!graphHeight){
        if (legend?.orient === 'horizontal') {
            return ['25%', '50%'];
        } else {
            return ['25%', '50%'];
        }
    }
    let center = ['25%', '50%'];
    if (graphHeight < 120) {
      center = ['50%', 60];
    } else {
      center = ['50%', (graphHeight / 2) - 4]
    }
    return center

}

export default updatePosition;