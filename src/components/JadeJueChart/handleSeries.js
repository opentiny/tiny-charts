import { getColor } from '../../util/color';
import cloneDeep from '../../util/cloneDeep';
import { handleMinRatio } from './handleOption';
import Theme from '../../feature/theme';

// 配置玉玦图的seriesData数据（value,name,color）
export function setSeriesData(iChartOption, baseOpt) {
    const { showBackground = true, data, color, roundCap = true } = iChartOption;
    // 原先写法是将所有data放在series[0]，灰度data放在series[1]中，因此无法为每条数据单独配置图例
    // 遍历数据，为每条数据配置series
    data.forEach((dataItem, index) => {
        if (!dataItem.children) {
            let sum = 0;
            data.forEach(dataItem => {
                sum += dataItem.value;
            });
            const newData = cloneDeep(data);
            newData.forEach((newItem) => {
                newItem.value = 0;
                if (newItem.name === dataItem.name) {
                    newItem.value = dataItem.value;
                }
                newItem.itemStyle = {
                    color: Array.isArray(color) ? getColor(color, index) : color,
                };
                newItem.sum = sum;
                newItem.beforeChangeValue = 0;
            });
            baseOpt.series.push({
                type: 'bar',
                data: newData,
                stack: 'a',
                // 配置柱体两端是否圆角（在编辑器修改此属性重新调用echarts.setOption，但是视图未更新。bug）
                roundCap,
                z: 2,
                coordinateSystem: 'polar',
                name: dataItem.name,
            });
        }
    });

    // 自定义柱体最小占比
    handleMinRatio(iChartOption, baseOpt);

    // 配置展示每项data的名称,及显示层级
    baseOpt.radiusAxis.z = 10;
    baseOpt.radiusAxis.data = [];
    data.forEach((item, index) => {
        baseOpt.radiusAxis.data.push(item.name);
    });

    data.forEach(dataItem => {
        let sum = 0;
        // data中的每项如果没有children
        if (!dataItem.children) {
            // 是否显示柱条背景样式---补全75%数据及颜色
            if (showBackground) {
                // 当数据全为0时，手动设置sum和max使其不为0，避免视图丢失
                if (baseOpt.angleAxis.sum === 0) {
                    baseOpt.angleAxis.sum = 1;
                    baseOpt.angleAxis.max = 4 / 3;
                }
                const newData = cloneDeep(data);
                newData.forEach(newItem => {
                    newItem.itemStyle = {
                        color: Theme.color.base.subg,
                    };
                    newItem.value = (baseOpt.angleAxis.sum - newItem.value);
                    newItem.sum = 0;
                });
                baseOpt.series[data.length] = {
                    type: 'bar',
                    data: newData,
                    stack: 'a',
                    z: 1,
                    roundCap,
                    coordinateSystem: 'polar',
                    // 关闭灰色进度鼠标hover事件
                    silent: true,
                };
            }
        } else {
            // data中的value是数组类型，处理数据;配置初始数据及颜色;获取图例type，后续赋给series
            let legendData = [];
            data.forEach(dataItem => {
                dataItem.children.forEach(child => {
                    sum += child.value;
                });
            });
            data.forEach(dataItem => {
                dataItem.children.forEach(child => {
                    child.sum = sum;
                    legendData.push(child.type);
                });
            });
            // 添加series中的数据
            legendData = Array.from(new Set(legendData));
            createSeries(iChartOption, baseOpt, sum, legendData);
            // 配置图例颜色
            baseOpt.color = color;
        }
    });
}

function createSeries(iChartOption, baseOpt, sum, legendData) {
    // 添加series中的数据
    let length = 0;
    iChartOption.data.forEach(dataItem => {
        if (length <= dataItem.children.length) {
            length = dataItem.children.length;
        }
    });
    // 通过判断图例的数量来配置series的子集数量
    if (baseOpt.series.length < length) {
        for (let i = 0; i <= length - baseOpt.series.length + 1; i++) {
            baseOpt.series.push({
                type: 'bar',
                data: '',
                stack: 'a',
                roundCap: false,
                z: 2,
                coordinateSystem: 'polar',
            });
        }
    }
    // series的非头尾数据的圆角取消及z值最高
    baseOpt.series.forEach((series, index) => {
        series.sum = sum;
        series.itemStyle = {
            borderColor: Theme.color.base.bg,
            borderWidth: 2,
        };
        if (index === 0) {
            series.z = 1;
        } else if (index === baseOpt.series.length - 1) {
            series.z = 0;
        } else {
            series.roundCap = false;
        }
    });
    // 将iChartOption的data数据依次赋给series
    for (let i = 0; i < length; i++) {
        baseOpt.series[i].data = [];
        iChartOption.data.forEach(item_ => {
            baseOpt.series[i].data.push(item_.children[i]);
            baseOpt.series[i].name = legendData[i];
        });
    }
}