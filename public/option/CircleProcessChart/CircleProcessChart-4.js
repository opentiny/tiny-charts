const option = {
  theme: 'light',
  data: [
    {
      name: 'IPV4',
      value: 80,
    },
    {
      name: 'IPV6',
      value: 40,
    }
  ],
  max: 200,
  tooltip: {
    show: true,
    formatter: (params, ticket, callback) => {
      const seriesName = params.seriesName;
      const color = params.color;
      const value = params.value;
      const htmlString = `<div>
                                <span style="display:inline-block;width:10px;height:10px;margin-right:8px;
                                border-radius:5px;border-style: solid;border-width:1px;
                                border-color:${color};background-color:${color};"></span>
                                <span style="margin-right:16px">${seriesName}</span>
                                <span>${(value/200)*100}%</span>
                           </div>`;
      return htmlString;
    }
  }
};