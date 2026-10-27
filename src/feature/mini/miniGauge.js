function mMiniGauge(baseOpt, iChartOpt) {
  const index = baseOpt.series.findIndex(item => item.name === 'data') || 0;
  if (iChartOpt.mini && baseOpt.series?.[index]?.detail) {
    baseOpt.series[index].detail.show = false
  } else {
    baseOpt.series[index].detail.show = true
  }
}

export default mMiniGauge;