import base from './base';

function polar(iChartOption, chartName) {
    let polarOpt = undefined;
    const { position } = iChartOption;
    switch (chartName) {
        case 'PolarBarChart':
        case 'JadeJueChart':
        case 'CircleProcessChart':
            polarOpt = base(position, chartName);
            break;
    }
    return polarOpt;
}

export default polar;