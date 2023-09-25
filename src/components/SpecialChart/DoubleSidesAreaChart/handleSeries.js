import { codeToRGB, codeToHex } from '../../../util/color';
import { getColorBase } from '../util/theme';
import { isArray } from '../../../util/type';

const handleSeries = (iChartOpt, baseOpt, seriesData, legendData) => {
    const {
        smooth = true,
        area = true,
        color,
        step = false,
        itemStyle,
        lineStyle,
        theme,
        areaStyle,
    } = iChartOpt;

    //  itemStyle默认值
    const itemStyle_base = {
        borderColor: getColorBase(theme).main,
        borderWidth: 3,
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .2)',
    };

    // lineStyle默认值
    const lineStyle_base = {
        width: 2,
        type: 'solid',
    };

    baseOpt.series.forEach((item, index) => {
        item.name = legendData[index];
        item.data = seriesData[item.name];
        item.smooth = smooth;
        item.step = step;
        const colorStops = [];

        // 处理渐变
        function handleColorStops(newColor, colorStops) {
            newColor.forEach((item_c, index_c) => {
                colorStops.push({ offset: index_c, color: codeToRGB(codeToHex(newColor[index]), index_c) });
            });
        }

        // 判断color类型
        if (isArray(color)) {
            if (color.length === 1) {
                const newColor = [...color, ...color];
                handleColorStops(newColor, colorStops);
            } else {
                const newColor = [color[0], color[1]];
                handleColorStops(newColor, colorStops);
            }
        } else {
            const newColor = [color, color];
            handleColorStops(newColor, colorStops);
        }

        // 面积图配置渐变色
        if (area) {
            if (index === 0) {
                // 从上至下渐变
                item.areaStyle = areaStyle && areaStyle[index] || {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops,
                    },
                };
            } else {
                // 从下至上渐变
                item.areaStyle = areaStyle && areaStyle[index] || {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops,
                    },
                };
            }

        }
        // 合并itemStyle节点属性
        item.itemStyle = Object.assign(itemStyle_base, itemStyle);
        item.symbolSize = itemStyle?.symbolSize || 10;
        // 合并lineStyle线条属性
        item.lineStyle = Object.assign(lineStyle_base, lineStyle);
    });
};
export { handleSeries };