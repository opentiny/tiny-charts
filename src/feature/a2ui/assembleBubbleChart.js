export default function getBarDefOpt(iChartOpt){
  let defOption = {
    padding: [2,2,2,2],
    theme:  iChartOpt.theme,
    adaptive: true,
    legend:{
      show: true,
      position: {
        left: 'center',
        bottom: 2
      }
    }
  }
  return defOption
}