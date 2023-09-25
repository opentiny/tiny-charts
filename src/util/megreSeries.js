import megre from './megre';

function megreSeries(iChartOption, baseOption) {
    const userSeries = iChartOption.series;
    const baseSeries = baseOption.series;
    userSeries && userSeries.forEach(uitem => {
        let isNewSeries = true;
        baseSeries.forEach(bitem => {
            if (bitem.name === uitem.name) {
                isNewSeries = false;
                megre(bitem, uitem);
            }
        });
        if (isNewSeries) {
            baseSeries.push(uitem);
        }
    });
}

export default megreSeries;