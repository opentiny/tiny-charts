function axisPointer(tooltip, theme, chartName) {
  switch (chartName) {
    case 'ProcessBarChart':
    case 'BarChart':
      tooltip.axisPointer = {
        type: 'shadow',
        shadowStyle: {
          color: theme.indexOf('dark') !== -1 ? 'rgba(238,238,238,0.08)' : 'rgba(25,25,25,0.08)',
        },
      };
      break;
    default:
      break;
  }
}

export default axisPointer;
