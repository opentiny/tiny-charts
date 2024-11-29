import fluctuation, { transformData } from '../../../feature/fluctuation';
import { isNumber } from '../../../util/type';

function defaultFormatter(val) {
    if (!isNumber(val)) return val
    const actualVal = Number.parseFloat(val.toFixed(2))
    return actualVal
}

export default function axisOptimization(yAxis, baseYaxis, data) {
    // 静态给定y轴优化范围
    if (yAxis && yAxis.fluctuation) {
        const { equalSplit, splitNumber, active, labelFormatter } = yAxis.fluctuation
        if (!active) return
        const newdata = transformData(data);
        const value = fluctuation(newdata);
        baseYaxis.min = value[0];
        baseYaxis.max = value[1];
        if (equalSplit) {
            const interval = (value[1] - value[0]) / (splitNumber ?? 5)
            baseYaxis.interval = interval
            baseYaxis.axisLabel.formatter = labelFormatter || defaultFormatter
        }
    }
    // 动态优化y轴范围
    if (yAxis && yAxis.allowRange) {
        const newdata = transformData(data);
        const value = fluctuation(newdata, yAxis.allowRange);
        baseYaxis.min = value[0];
        baseYaxis.max = value[1];
    }
}