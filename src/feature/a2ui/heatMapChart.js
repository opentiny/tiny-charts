export default function getBarDefOpt(iChartOpt){
  let defOption = {
    padding: [32,2,0,2],
    theme: iChartOpt.theme,
    adaptive: true,
    xAxis: {
      boundaryGap: false
    }
  }
  return defOption
}
