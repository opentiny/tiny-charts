import Theme from '../../feature/theme';
import cloneDeep from '../../util/cloneDeep';
import { getColor } from '../../util/color';

export const seriesInit = (type) => {
    const baseSeries = {
        type: 'bar',
        coordinateSystem: 'polar',
        emphasis: {
            focus: 'series',
        },
        animation: true,
        data: [],
    };
    return (
        type === 'normal' ? {
            ...baseSeries,
            barGap: '-100%',
            barCategoryGap: '40%',
            itemStyle: {
                borderRadius: [0, 0, 8, 8],
            },

        } : {
            ...baseSeries,
            barWidth: '96%',
            itemStyle: {},
        }
    );
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
export function setSeries(seriesData, labelData, iChartOption, polar, type) {
    const { data, label } = iChartOption;
    const series = [];
    if (type === 'normal') {
        data.forEach((item, i) => {
            const seriesUnit = cloneDeep(seriesInit(type));
            seriesUnit.name = item.name;
            seriesUnit.data = seriesData[i];
            series.push(seriesUnit);
        });
    } else {
        const seriesUnit = cloneDeep(seriesInit(type));
        seriesUnit.data = seriesData;
        handleBarItemStyle(iChartOption, seriesUnit);
        series.push(seriesUnit);
    }
    // 需要显示角度轴坐标文本
    const showLabel = label ? label.show : true;
    if (showLabel && type === 'normal') {
        const pieUnit = cloneDeep(pieInit);
        pieUnit.data = labelData;
        pieUnit.center = polar.center;
        pieUnit.label.textStyle.color = Theme.color.base.axislabel;
        // 外radius
        const radius = polar.radius[1];
        const radius_n = Number(radius.substring(0, radius.length - 1));
        pieUnit.radius = [radius, `${radius_n + 8}%`];
        series.push(pieUnit);
    }
    return series;
}

/**
 * 设置bar类型的series.itemStyle(因为数据属于一个series，不设置的话所有图元都是一个颜色)
 * @param {*} iChartOption 
 * @param {*} seriesUnit 
 */
export function handleBarItemStyle(iChartOption, seriesUnit) {
    const { color, data } = iChartOption;
    const seriesColor = {};
    const typeArr = [];
    data.forEach((item, index) => {
        if (typeArr.indexOf(item.type) === -1) {
            seriesColor[item.type] = [];
            typeArr.push(item.type);
        }
        seriesColor[item.type].push(index);
    });
    seriesUnit.itemStyle.color = ({ dataIndex }) => {
        let num = 0;
        for (let i in seriesColor) {
            if (seriesColor[i].indexOf(dataIndex) !== -1) {
                return getColor(color, num);
            }
            num++;
        }
    };
}