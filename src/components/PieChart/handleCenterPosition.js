import mobile from "../../util/mobile";

function updatePosition(iChartOption, legend, chartInstance) {
    // 兼容旧属性chartPosition
    let position = iChartOption.position || iChartOption.chartPosition;
    const userCenter = iChartOption.position?.center;
    const adaptive = iChartOption?.adaptive;
    const width = chartInstance?.getWidth?.();
    const height = chartInstance?.getHeight?.();
    // 暂时用来只开放华为云主题
    const theme = iChartOption?.theme;
    const isMobile = mobile();
    // 1.自适应处理圆环中心点位置，开启adaptive就会强行覆盖用户的position
    if (adaptive && theme.includes('cloud')) {
        position = {}; // 初始化为空对象
        // 圆环外直径
        let circleDiameter;
        if (legend.show === true) {
            //上下布局
            if (legend.orient === 'horizontal') {
                const circleSection = height - 16 - (legend.bottom !== 'auto' ? legend.bottom : 4);
                position.center = isMobile ? (userCenter || ['25%', '50%']) : [width / 2, circleSection / 2];
                circleDiameter = Math.min(width, circleSection) * 0.6;
            } else {
                //左右布局
                position.center = isMobile ? (userCenter || ['25%', '50%']) : ['30%', '50%'];
                circleDiameter = width * 0.6 * 0.8;
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

export default updatePosition;