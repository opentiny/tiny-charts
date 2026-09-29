
export default function getBarDefOpt(iChartOpt){
  let defOption = {
    padding: [32,2,0,2],
    theme:  iChartOpt.theme,
    data: iChartOpt.data,
    adaptive: true,
    title: {
      itemGap: 6
    },
    legend: {
      show: true,
      position: {
        left: '64%',
        top: 'center'
      },
      orient: 'vertical',
      formatter: (name) => {
        let item = defOption.data.filter((item) => item.name === name)[0];
        return '{title|' + name + '}{value|' + item.value + '}'
      }
    },
    barWidth: 8,
    labelContent: 'nameWithRatio',
   
  }
  if (iChartOpt.legendPosition === 'bottomCenter'){
    defOption.legend = {
      show: true,
      position: {
        left: 'center',
        bottom: 2
      },
      orient: 'horizontal'
    }
  }
  return defOption
}
