/*
* label 控制圆盘图的标签：
* label.show 控制是否显示label
* label.line 控制是否显示label连接线
* label.type 控制是否label显示格式，当前支持两种形态：
* label.type:'name'（默认） 表示显示数据的名称
* label.type:'percent' 表示显示数据及其百分比
* label.labelHtml:标签内容格式器
* label.rich:富文本编辑器
*/
const option = {
    theme: 'light',
    title:{
        text:`{a|253}{b|个}\n{c|总数量}`,
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
    label:{
        show: true,
        type:'percent',
        line: true,
        labelHtml:`{a|}{b|{b}:}{c|{d}%}`,
        rich:{
               a:{
                 width:12,
                 height:12,
                 backgroundColor: {
                    image: './image/Doc/ic_jiantou_hong.svg'
                    },
                },
                b:{
                    color:'#191919',
                    padding:[2,4,0,0]
                },
                c:{
                    color:'#000000',
                    fontWeight:'bold',
                     padding:[2,0,0,0]
                }
        }
    },
    data:[                             
        {value: 100,name: 'VPC'},
        {value: 90, name: 'IM' },
        {value: 49, name: 'EIP'},
        {value: 14, name: 'SG' },
    ]
};
