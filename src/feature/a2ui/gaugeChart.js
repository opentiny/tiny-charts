export default function getGaugeDefOpt(iChartOpt){
  let defOption = {
    padding: [20,0,10,1],
    theme:  iChartOpt.theme,
    itemStyle: {
      outerGauge: {
        show: false
      }
    },
    legend: {
      show: false
    },
    position: {
      center: ['50%','50%'],
      radius: '65%'
    },
    adaptive: true,
    splitLine: {
      show: false
    }
  }
  return defOption
}
