export default function getRadarDefOpt(iChartOpt){
  let defOption = {
    padding: [20, 0, 10, 0],
    theme:  iChartOpt.theme,
    adaptive: true,
    legend: {
      show: true,
      position: {
        left: 'center',
      bottom: 2
      },
      orient: 'horizontal'
    },
    position: {
      center: ['50%','50%'],
      radius: '65%'
    },
    radar: {
      axisName: {
        formatter: (val) => {
          return val.length > 4 ? val.slice(0, 4) + '...' : val;
        }
      },
      axisNameGap: 12
    }
  }
  return defOption
}
