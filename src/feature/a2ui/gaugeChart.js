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
      radius: '80%'
    },
    adaptive: true,
    splitLine: {
      show: false
    }
  }
  if (iChartOpt.splitColor) {
    defOption.itemStyle.lineStyle = {
      color: iChartOpt.theme.includes('light') ? '#fff' : '#000',
      width: 4
    }
    delete defOption.splitLine;
  }
  return defOption
}
