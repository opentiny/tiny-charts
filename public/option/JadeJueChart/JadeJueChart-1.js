const option = {
  theme: 'hwCloud-light',
  data: [
    { name: '语文', value: 70 },
    { name: '数学', value: 90 },
    { name: '英语', value: 60 },
    { name: '物理', value: 92 },
    { name: '化学', value: 90 },
  ],
  event: {
    'series': {
      click: (params) => {
        console.log(params);
      },
      dblclick: (params) => {

      }
    }
  }
};
