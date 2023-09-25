import cloneDeep from '../../../util/cloneDeep';
import Theme from '../../../feature/theme'
const baseAngleAxis = {
    splitNumber: 6,
    startAngle: 90,
    axisLine: {
        show: false,
        lineStyle: {
            color: undefined,
            width: 1,
            type: 'solid',
        },
    },
    splitLine: {
        show: false,
        lineStyle: {
            color: undefined,
            width: 1,
            type: 'solid',
        },
    },
    axisTick: {
        show: false,
        length: 5,
        lineStyle: {
            color: undefined,
            width: 1,
            type: 'solid',
        },
    },
    axisLabel: {
        show: true,
        fontSize: 12,
        fontFamily: 'HuaweiSans',
        color: undefined,
        formatter: undefined,
    },
};

function base(theme, chartName) {
    const angleAxisOption = cloneDeep(baseAngleAxis);
    const colorBase = Theme.color.base
    angleAxisOption.axisLine.lineStyle.color = colorBase.axis;
    angleAxisOption.splitLine.lineStyle.color = colorBase.axis
    angleAxisOption.axisTick.lineStyle.color = colorBase.axis
    angleAxisOption.axisLabel.color = colorBase.axislabel;
    if (chartName === 'PolarBarChart') {
        angleAxisOption.type = 'category'
        angleAxisOption.axisLine.show = true
        angleAxisOption.axisLabel.show = false
        angleAxisOption.splitLine.show = true
    }
    return angleAxisOption;
}

export default base;
