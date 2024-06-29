const option = {
  // 图表类型(嵌套式)
  type: 'nested',
  theme: 'hdesign-light',
  data: [
    {
      type: 'VPCC', value: 100, label: 'VPCC',
      children: [
        { value: 28, label: 'UK', showLabel: true },
        { value: 23, label: 'France', showLabel: true },
        { value: 23, label: 'Belgium', showLabel: true },
        { value: 23, label: 'Finland' },
        { value: 20, label: 'Denmark' },
        { value: 23, label: 'TR', showLabel: true },
      ]
    },
    {
      type: 'EIP', value: 100, label: 'EIP',
      children: [
        { value: 23, label: 'Angola', showLabel: true },
        { value: 23, label: 'Ghana', showLabel: true },
        { value: 23, label: 'Congo', showLabel: true },
        { value: 17, label: 'Kenya', showLabel: true },
        { value: 23, label: 'Libya' },
      ]
    },
    {
      type: 'SG', value: 100, label: 'SG',
      children: [
        { value: 28, label: 'Brazil' },
        { value: 23, label: 'Argentina' },
        { value: 23, label: 'Bolivia', showLabel: true },
        { value: 23, label: 'Lajos', showLabel: true },
      ]
    },
    {
      type: 'XR', value: 100, label: 'XR',
      children: [
        { value: 23, label: 'Australia', showLabel: true },
        { value: 17, label: 'Nauru', showLabel: true },
        { value: 26, label: 'New Zealand' },
      ]
    },
    {
      type: 'YD', value: 100, label: 'YD',
      children: [
        { value: 36, label: 'China', showLabel: true },
        { value: 38, label: 'India', showLabel: true },
        { value: 38, label: 'Russia', showLabel: true },
        { value: 36, label: 'Japan' },
        { value: 20, label: 'Iran' },
      ]
    },
    {
      type: 'AJF', value: 100, label: 'AJF',
      children: [
        { value: 28, label: 'USA', showLabel: true },
        { value: 23, label: 'Canada', showLabel: true },
        { value: 21, label: 'Mexico', showLabel: true },
      ]
    },
  ]
};

