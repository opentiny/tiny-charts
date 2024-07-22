const option = {
    theme: 'dark',
    // 图表类型(日历热力图)
    type: 'CalendarHeatMapChart',
    // padding控制图表距离容器的上、右、下、左padding值
    padding: [50, 120, 20, 20],
    color: ['#2CBBC9', '#09AA71', '#62B42E', '#FCC800', '#F4840C', '#E61866'],
    changeProperty: 'color',
    visualMap: {
        show: true,
        type: 'piecewise',
        text: '',
        align: 'left',
        itemHeight:60,
        bottom:'middle',
        splitNumber:6,
        showLabel:false
    },
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
    series: [
        {
            name: 'calendar',
            itemStyle: {
                //颜色自定义
                borderColor: '#191919',
                borderWidth: 1
            }
        }
    ]
};



