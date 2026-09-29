export default function getBarDefOpt(iChartOpt) {
  const getMaxValue = (data) => {
    if (data && data.length > 0) {
      return Math.max(...data.map((item) => item.value))
    }
  }
  const maxValue = getMaxValue(iChartOpt.data)
  const calibrationValue = (maxValue && maxValue > 100) ? { calibrationValue: maxValue } : {}

  let defOption = {
    padding: [12, 0, 0, 0],
    title: {
      fontSize: 12,
      position: [0, -14],
      color: '#777777',
    },
    text: {
      color: '#777777',
      fontSize: 12,
      offset: [0, -14]
    },
    theme: iChartOpt.theme,
    legend: {
      show: false
    },
    adaptive: true,
    ...calibrationValue
  }

  return defOption
}
