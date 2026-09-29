export default function getBarDefOpt(iChartOpt){
  let defOption = {
    padding: [32,2,0,2],
    theme:  iChartOpt.theme,
    adaptive: true,
    label: {
      color: '#ffffff'
    },
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