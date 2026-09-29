export default function getBarDefOpt(iChartOpt){
  let defOption = {
    padding: [52,2,0,2],
    theme: iChartOpt.theme,
    adaptive: true,
    tooltip:{
      show:true
    },
    legend:{
      show: true,
      top: 2,
      right: 6,
      left: 'auto'
    }
  }
  return defOption
}
