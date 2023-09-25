import Theme from '../../feature/theme';
import cloneDeep from '../../util/cloneDeep';

export const seriesInit = {
    type: 'bar',
    coordinateSystem: 'polar',
    barGap: '-100%',
    barCategoryGap: '40%',
    itemStyle: {
        borderRadius: [0, 0, 8, 8],
    },
    emphasis: {
        focus: 'series',
    },
    animation: false,
    data: [],
};

// 利用pie文本rotate特性作为x轴的文本
export const pieInit = {
    type: 'pie',
    label: {
        show: true,
        textStyle: {
            fontSize: 12,
            color: '',
        },
        position: 'inside',
    },
    itemStyle: {
        color: 'transparent',
    },
    animation: false,
    silent: true,
    data: [],
};


/**
 * 组装echarts所需要的series
 * @param {图表数据} seriesData
 * @param {文本数据} LabelData
 * @param {坐标} polar
 * @returns
 */
export function setSeries(seriesData, labelData, iChartOption, polar) {
    const {data, label } = iChartOption;
    const series = [];
    data.forEach((item, i) => {
        const seriesUnit = cloneDeep(seriesInit);
        seriesUnit.name = item.name;
        seriesUnit.data = seriesData[i];
        series.push(seriesUnit);
    });
    // 需要显示角度轴坐标文本
    const showLabel = label ? label.show : true;
    if (showLabel) {
        const pieUnit = cloneDeep(pieInit);
        pieUnit.data = labelData;
        pieUnit.center = polar.center;
        pieUnit.label.textStyle.color = Theme.color.base.axislabel;
        // 外radius
        const radius = polar.radius[1];
        const radius_n = Number(radius.substring(0, radius.length - 1));
        pieUnit.radius = [radius, `${radius_n + 8  }%`];
        series.push(pieUnit);
    }

    return series;
}