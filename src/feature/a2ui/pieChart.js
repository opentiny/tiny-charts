export default function getPieDefOpt(iChartOpt){
  let defOption = {
    padding: [20,0,10,0],
    theme:  iChartOpt.theme,
    adaptive:true,
    data: iChartOpt.data,
    label:{
      show: iChartOpt.label?.show ?? false
    },
    legend:{
      show:true,
      top: 'center',
      left: '68%',
      orient: 'vertical',
      formatter: (name) => {
        let item = defOption.data.filter((item) => item.name === name)[0];
        return '{title|' + name + '}{value|' + item.value + '}'
      }
    },
    position: {
      center: ['35%','50%'],
      radius: '65%'
    },
    title: {
      itemGap: 6
    },
    type: 'circle'
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
  if(iChartOpt && !iChartOpt.title?.text) {
    defOption.type = iChartOpt?.type || 'pie'
  }
  return defOption
}
