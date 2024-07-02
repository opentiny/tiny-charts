格式：

```d
data: [
  { time: '2013/1/24',open: 2320.26,close:2320.26,lowest:2287.3,highest:2362.94,volume:197310000},
  { time: '2013/1/25',open:2300,close:2291.3,lowest:2288.26,highest:2308.38,volume:221290000}, 
  { time: '2013/1/26',open:2295.35,close:2346.5,lowest:2295.35,highest:2346.92,volume:191460000}, 
  ...
];
```
说明：图表数据 , time 为 x 轴数据 , open为开盘价, close 为 收盘价, lowest为最低价,  highest 为最高价,volume为成交价<br/>
open、close、lowest、highest、volume属性名称不可更换，volume可选，如没有volume则不配         
time名称（key 值）可更换,通过配置xAxis:{keyName:"key"}实现自定义<br/>  
