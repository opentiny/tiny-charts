import Theme from '../../feature/theme';
import cloneDeep from '../../util/cloneDeep';

export const seriesInit = {
    type: 'bar',
    coordinateSystem: 'polar',
    emphasis: {
        focus: 'series',
    },
    animation: false,
    stack: 'total',
    showBackground: true,
    backgroundStyle: {
        color: '',
    },
    emphasis: {
        focus: 'series',
    },
    data: [],
};


/**
 * 组装echarts所需要的series
 * @param {图表数据} seriesData
 * @param {文本数据} LabelData
 * @param {坐标} polar
 * @returns
 */
export function setSeries(seriesData, iChartOption) {
    const { data } = iChartOption;
    const series = [];
    const colorBase = Theme.color.base
    data.forEach((item, i) => {
        const seriesUnit = cloneDeep(seriesInit);
        seriesUnit.name = item.name;
        seriesUnit.data = seriesData[i];
        seriesUnit.backgroundStyle.color = colorBase.subg;
        series.push(seriesUnit);
    });
    return series;
}