const option = {
    theme: 'light',
    gradientColor: ['rgba(78,127,243)', 'rgba(78,127,243)'],
    // gradientColor:['red','blue'],
    data: [
        {
            value: 33,
            name: ''
        }
    ],
    position: {
        radius: '30%'
    },
    text: {
        offset: [5, 0],
        // 格式化文本函数，参数value为数据数值，返回的字符串格式： {styleName|要显示的文本}
        formatter: function (value) {
            return '{value|' + value + '}{unit|%}'
        },
        formatterStyle: {
            value: {
                fontSize: 40,
                color: '#212121',
            },
            unit: {
                fontSize: 12,
                color: '#191919',
            },
        }
    },
    pointer: true,
    splitNumber: 2,
    itemStyle: {
        lineStyle: {
            length: 15,
            color: 'transparent'
        },
    },
    axisLabelStyle: {
        color: 'gray',
    },
    pointerStyle: {
        width: 30,
        length: '20%',
        pointerDistance: '-120%',
        lineDistance: '4%',
    },
    // mask：外层光晕的蒙层
    // show：是否显示蒙层(蒙层区域的颜色为gradientColor循环取色，透明度.1)
    // hightLight:是否高亮(高亮区域的颜色为gradientColor[0]，透明度1;高亮区域前面的颜色为gradientColor[0]，透明度.5; 高亮区域后面的颜色为gradientColor循环取色，透明度.5)
    // width:调整外层光晕到进度条之间的蒙层的宽度，不设置时则与lineDistance正相关。页面适配差异时需手动设置
    mask: {
        show: true,
        hightLight: true,
        width: 10
    }
};
