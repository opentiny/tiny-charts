import cloneDeep from '../../../util/cloneDeep';
import Theme from '../../../feature/theme'
const baseRadiusAxis = {
    axisLine: {
        show: false,
        lineStyle: {
            color: undefined,
            width: 1,
            type: 'solid',
        },
    },
    axisTick: {
        length: 5,
        show: false,
        lineStyle: {
            color: undefined,
            width: 1,
            type: 'solid',
        },
    },
    axisLabel: {
        show: true,
        color: undefined,
        fontSize: 12,
        fontFamily: 'HuaweiSans',
        align: 'right',
        margin: 20,
        interval: 0,
    },
    splitLine: {
        lineStyle: {
            type: 'dashed',
        },
    },
};

function base(theme, chartName) {
    const RadiusAxisOption = cloneDeep(baseRadiusAxis);
    const colorBase =Theme.color.base
    RadiusAxisOption.axisLine.lineStyle.color = colorBase.axis;
    RadiusAxisOption.axisTick.lineStyle.color = colorBase.axis;
    RadiusAxisOption.axisLabel.color = colorBase.axislabel;
    if (chartName === 'PolarBarChart') {
        RadiusAxisOption.axisLabel.margin = 4;
    }
    return RadiusAxisOption;
}

export default base;
