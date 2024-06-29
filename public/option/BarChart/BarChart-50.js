const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
         show: true,
    },
    type: 'stack',
    stack: {
         '堆叠一': ['中断terminal', '非中断terminal'],
         '堆叠二': ['中断flow', '非中断flow'],
    },
    data: [
         { 'Time': '变更1', '中断terminal': 33, '非中断terminal': 5, '中断flow': 23, '非中断flow': 5 },
         { 'Time': '变更2', '中断terminal': 27, '非中断terminal': 8, '中断flow': 28, '非中断flow': 6 },
         { 'Time': '变更3', '中断terminal': 31, '非中断terminal': 6, '中断flow': 18, '非中断flow': 7 },
         { 'Time': '变更4', '中断terminal': 30, '非中断terminal': 7, '中断flow': 20, '非中断flow': 8 }
    ],
    xAxis: {
         data: 'Time',
    },
    yAxis: {
         name: '中断数'
    }
};