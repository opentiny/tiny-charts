export default function defCircleProcessChartOption(iChartOpt){
  let defOption = {
    padding: [20,0,10,0],
    theme:  iChartOpt.theme,
    adaptive:true,
    legend:{
      show:false
    }
  }
  return defOption
}