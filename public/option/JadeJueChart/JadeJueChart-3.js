const option = {
  theme: 'light',
  data: [
    { name: '机关干部', value: 70 },
    { name: '专家学者', value: 90 },
    { name: '单位职工', value: 110 },
    { name: '农村居民', value: 130 },
    { name: '外裔华人', value: 110 },
  ],
  // 自定义最大值，用于展示data中每项数据在最大值的占据比例，一般可取value最大值。
  // 未定义则data中每项数据的占比为其value值与总value值的比值。
  max: 200,
  tooltip: {
    formatter: (params, ticket, callback, data) => {
      if (params.data.sum !== 0) {
        let htmlString = '';
        const value = params.data.value || params.value;
        const name = params.data.name || params.name;
        htmlString +=
          `<span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">type : 
        <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:
        ${params.color}"></span>
        <br/>
        <span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">name : 
        ${name}</span>
        <br/>
        <span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">value : 
        ${value}</span>
        <br/>
        <span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">占比 : 
        ${((value / (params.data.max || params.data.sum)) * 100).toFixed()}%
        </span>`;
        return htmlString;
      }
    }
  }
};
