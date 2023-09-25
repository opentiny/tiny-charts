/*
* tipHtml 回调函数控制自定义悬浮框：
* ( params: Array, 
*   ticket: string, 
*   callback: (ticket: string, html: string)
* ) => string | HTMLElement | HTMLElement[]
*
* 通过回调函数的参数，自行制作一个 HTML 片段
* 详细参数解释见： https://echarts.apache.org/zh/option.html#tooltip.formatter 
*/
const option = {
    theme: 'light',
    title: {
        text: `{a|300}{b|个}\n{c|总数量}`,
        textStyle: {
            rich: {
                a: {
                    color: '#191919',
                    fontSize: 50,
                },
                b: {
                    fontSize: 16,
                    color: '#999',
                    padding: [10, 0, 0, 10]
                },
                c: {
                    fontSize: 24,
                    color: '#bbbbbb',
                    padding: [10, 0, 0, 0]
                },
            }
        },
    },
    tipHtml: (params, ticket, callback) => {
        let htmlString =
            '<div>' +
            '<span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + params.color + ';">' +
            '</span>' +
            '<span style="margin-left:5px;">' +
            '<span style="display:inline-block;padding-right:5px;">' + params.name + '</span>' +
            '<span style="font-weight:normal">' + params.value + '</span>' +
            '<span>(' + params.percent + '%)</span>' +
            '</span>' +
            '</div>';
        return htmlString
    },
    label: {
        show: true,
        type: 'percent',
        line: false
    },
    data: [
        { value: 100, name: '架构设计' },
        { value: 100, name: '开发' },
        { value: 50, name: '性能' },
        { value: 50, name: '测试' },
    ]
};
