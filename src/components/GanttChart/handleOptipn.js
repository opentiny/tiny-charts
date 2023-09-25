/**
 * 设置ChartPadding
 */
export function setChartPadding(chartPadding) {
  const defaultPadding = [];
  if (!chartPadding) {
    defaultPadding[0] = 20;
    defaultPadding[1] = 30;
    defaultPadding[2] = 20;
    defaultPadding[3] = 20;
  } else if (chartPadding.length === 1) {
    defaultPadding[0] = chartPadding[0];
    defaultPadding[1] = chartPadding[0];
    defaultPadding[2] = chartPadding[0];
    defaultPadding[3] = chartPadding[0];
  } else if (chartPadding.length === 2) {
    defaultPadding[0] = chartPadding[0];
    defaultPadding[1] = chartPadding[1];
    defaultPadding[2] = chartPadding[0];
    defaultPadding[3] = chartPadding[1];
  } else if (chartPadding.length === 3) {
    defaultPadding[0] = chartPadding[0];
    defaultPadding[1] = chartPadding[1];
    defaultPadding[2] = chartPadding[2];
    defaultPadding[3] = chartPadding[1];
  } else {
    defaultPadding[0] = chartPadding[0];
    defaultPadding[1] = chartPadding[1];
    defaultPadding[2] = chartPadding[2];
    defaultPadding[3] = chartPadding[3];
  }
  return defaultPadding;
}
