const option = {
    theme: 'light',
    // 图表类型(日历热力图)
    type: 'CalendarHeatMapChart',
    // padding控制图表距离容器的上、右、下、左padding值
    padding: [50, 30, 20, 20],
    // 矩形的颜色,默认'#1F55B5'
    color: '#1F55B5',
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
        { Name: 'Q1', Week: 'Monday', Value: 85, },
        { Name: 'Q1', Week: 'Tuesday', Value: 66, },
        { Name: 'Q1', Week: 'Wednesday', Value: 78, },
        { Name: 'Q1', Week: 'Thursday', Value: 58, },
        { Name: 'Q1', Week: 'Friday', Value: 65, },

        { Name: 'Q2', Week: 'Monday', Value: 36, },
        { Name: 'Q2', Week: 'Tuesday', Value: 22, },
        { Name: 'Q2', Week: 'Wednesday', Value: 99, },
        { Name: 'Q2', Week: 'Thursday', Value: 67, },
        { Name: 'Q2', Week: 'Friday', Value: 45, },

        { Name: 'Q3', Week: 'Monday', Value: 77, },
        { Name: 'Q3', Week: 'Tuesday', Value: 46, },
        { Name: 'Q3', Week: 'Wednesday', Value: 30, },
        { Name: 'Q3', Week: 'Thursday', Value: 31, },
        { Name: 'Q3', Week: 'Friday', Value: 55, },

        { Name: 'Q4', Week: 'Monday', Value: 59, },
        { Name: 'Q4', Week: 'Tuesday', Value: 48, },
        { Name: 'Q4', Week: 'Wednesday', Value: 29, },
        { Name: 'Q4', Week: 'Thursday', Value: 38, },
        { Name: 'Q4', Week: 'Friday', Value: 15, },

        { Name: 'Q5', Week: 'Monday', Value: 76, },
        { Name: 'Q5', Week: 'Tuesday', Value: 66, },
        { Name: 'Q5', Week: 'Wednesday', Value: 17, },
        { Name: 'Q5', Week: 'Thursday', Value: 81, },
        { Name: 'Q5', Week: 'Friday', Value: 85, },

        { Name: 'Q6', Week: 'Monday', Value: 20, },
        { Name: 'Q6', Week: 'Tuesday', Value: 10, },
        { Name: 'Q6', Week: 'Wednesday', Value: 47, },
        { Name: 'Q6', Week: 'Thursday', Value: 5, },
        { Name: 'Q6', Week: 'Friday', Value: 75, },

        { Name: 'Q7', Week: 'Monday', Value: 30, },
        { Name: 'Q7', Week: 'Tuesday', Value: 78, },
        { Name: 'Q7', Week: 'Wednesday', Value: 67, },
        { Name: 'Q7', Week: 'Thursday', Value: 54, },
        { Name: 'Q7', Week: 'Friday', Value: 45, },

        { Name: 'Q8', Week: 'Monday', Value: 43, },
        { Name: 'Q8', Week: 'Tuesday', Value: 4, },
        { Name: 'Q8', Week: 'Wednesday', Value: 63, },
        { Name: 'Q8', Week: 'Thursday', Value: 33, },
        { Name: 'Q8', Week: 'Friday', Value: 25, },

        { Name: 'Q9', Week: 'Monday', Value: 66, },
        { Name: 'Q9', Week: 'Tuesday', Value: 78, },
        { Name: 'Q9', Week: 'Wednesday', Value: 31, },
        { Name: 'Q9', Week: 'Thursday', Value: 88, },
        { Name: 'Q9', Week: 'Friday', Value: 95, },

        { Name: 'Q10', Week: 'Monday', Value: 78, },
        { Name: 'Q10', Week: 'Tuesday', Value: 50, },
        { Name: 'Q10', Week: 'Wednesday', Value: 66, },
        { Name: 'Q10', Week: 'Thursday', Value: 59, },
        { Name: 'Q10', Week: 'Friday', Value: 85, },
    ],
};



