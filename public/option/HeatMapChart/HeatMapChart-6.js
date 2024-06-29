const option = {
    theme: 'light',
    // 图表类型(日历热力图)
    type: 'CalendarHeatMapChart',
    // padding控制图表距离容器的上、右、下、左padding值
    padding: [50, 120, 20, 20],
    // 矩形的颜色,默认值'#1F55B5'
    color: '#1F55B5',
    // 视觉滑块的配置,本属性传显示视觉滑块,不传不显示
    handle: {
        // 是否反转显示文本,默认值false
        inverse: true,
        // 两端的文本,默认值为data第三个属性值的最大值和最小值
        text: ['亮', '暗'],
        // 水平与垂直放置,默认值'vertical'
        // 'vertical' 或者 'horizontal'
        orient: 'vertical',
        // 视觉滑块的宽度,默认值20
        width: 16,
        // 视觉滑块的高度,默认值400
        height: 390,
        // 是否显示手柄,默认值不显示
        calculable: true,
        // 位置
        // top 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比,
        // left 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比,
        // right 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比,
        // bottom 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比,
        position: {
            bottom: '6%',
            right: '4%'
        }
    },
    // 矩形的边框颜色,默认值和color一致
    borderColor: '#6D8FF0',
    // 是否显示文本,默认值true
    showLabel: true,
    // data数据
    // Name:x轴数据类别,属性名称自定义
    // Week:y轴数据类别,属性名称自定义
    // Value:显示的文本,属性名称自定义
    // x,y轴的数据类别显示顺序按照data中书写顺序决定
    data: [
        { Name: 'Q1', Week: 'Monday', Value: 86, },
        { Name: 'Q1', Week: 'Tuesday', Value: 66, },
        { Name: 'Q1', Week: 'Wednesday', Value: 78, },
        { Name: 'Q1', Week: 'Thursday', Value: 58, },
        { Name: 'Q1', Week: 'Friday', Value: 66, },

        { Name: 'Q2', Week: 'Monday', Value: 36, },
        { Name: 'Q2', Week: 'Tuesday', Value: 22, },
        { Name: 'Q2', Week: 'Wednesday', Value: 99, },
        { Name: 'Q2', Week: 'Thursday', Value: 67, },
        { Name: 'Q2', Week: 'Friday', Value: 66, },

        { Name: 'Q3', Week: 'Monday', Value: 77, },
        { Name: 'Q3', Week: 'Tuesday', Value: 46, },
        { Name: 'Q3', Week: 'Wednesday', Value: 30, },
        { Name: 'Q3', Week: 'Thursday', Value: 31, },
        { Name: 'Q3', Week: 'Friday', Value: 56, },

        { Name: 'Q4', Week: 'Monday', Value: 59, },
        { Name: 'Q4', Week: 'Tuesday', Value: 48, },
        { Name: 'Q4', Week: 'Wednesday', Value: 29, },
        { Name: 'Q4', Week: 'Thursday', Value: 38, },
        { Name: 'Q4', Week: 'Friday', Value: 16, },

        { Name: 'Q5', Week: 'Monday', Value: 76, },
        { Name: 'Q5', Week: 'Tuesday', Value: 66, },
        { Name: 'Q5', Week: 'Wednesday', Value: 17, },
        { Name: 'Q5', Week: 'Thursday', Value: 81, },
        { Name: 'Q5', Week: 'Friday', Value: 86, },

        { Name: 'Q6', Week: 'Monday', Value: 20, },
        { Name: 'Q6', Week: 'Tuesday', Value: 10, },
        { Name: 'Q6', Week: 'Wednesday', Value: 47, },
        { Name: 'Q6', Week: 'Thursday', Value: 5, },
        { Name: 'Q6', Week: 'Friday', Value: 66, },

        { Name: 'Q7', Week: 'Monday', Value: 30, },
        { Name: 'Q7', Week: 'Tuesday', Value: 78, },
        { Name: 'Q7', Week: 'Wednesday', Value: 67, },
        { Name: 'Q7', Week: 'Thursday', Value: 54, },
        { Name: 'Q7', Week: 'Friday', Value: 66, },

        { Name: 'Q8', Week: 'Monday', Value: 43, },
        { Name: 'Q8', Week: 'Tuesday', Value: 4, },
        { Name: 'Q8', Week: 'Wednesday', Value: 63, },
        { Name: 'Q8', Week: 'Thursday', Value: 33, },
        { Name: 'Q8', Week: 'Friday', Value: 26, },

        { Name: 'Q9', Week: 'Monday', Value: 66, },
        { Name: 'Q9', Week: 'Tuesday', Value: 78, },
        { Name: 'Q9', Week: 'Wednesday', Value: 31, },
        { Name: 'Q9', Week: 'Thursday', Value: 88, },
        { Name: 'Q9', Week: 'Friday', Value: 96, },

        { Name: 'Q10', Week: 'Monday', Value: 78, },
        { Name: 'Q10', Week: 'Tuesday', Value: 50, },
        { Name: 'Q10', Week: 'Wednesday', Value: 66, },
        { Name: 'Q10', Week: 'Thursday', Value: 59, },
        { Name: 'Q10', Week: 'Friday', Value: 86, },
    ],
};



