const option = {
    theme: 'light',
    padding: [50, 30, 15, 20],
    smooth: true,
    legend: {
        show: true,         
        icon: 'line',       
        width: 480,      // 设定图例区域宽度
        type: 'scroll',  // 超出后开始翻页
        position: {          
            right: 25,
            top: 20
        }
    },
    data: [
        { 'Time': 'Jan', 'Item1': 10, 'Item2': 15, 'Item3': 20, 'Item4': 25, 'Item5': 30, 'Item6': 35, 'Item7': 40, 'Item8': 45, 'Item9': 50 },
        { 'Time': 'Feb', 'Item1': 11, 'Item2': 16, 'Item3': 21, 'Item4': 26, 'Item5': 31, 'Item6': 36, 'Item7': 41, 'Item8': 46, 'Item9': 51 },
        { 'Time': 'Mar', 'Item1': 10, 'Item2': 15, 'Item3': 20, 'Item4': 25, 'Item5': 30, 'Item6': 35, 'Item7': 40, 'Item8': 45, 'Item9': 50 },
        { 'Time': 'Apr', 'Item1': 13, 'Item2': 18, 'Item3': 23, 'Item4': 28, 'Item5': 33, 'Item6': 38, 'Item7': 43, 'Item8': 48, 'Item9': 53 },
        { 'Time': 'May', 'Item1': 15, 'Item2': 19, 'Item3': 24, 'Item4': 29, 'Item5': 34, 'Item6': 39, 'Item7': 44, 'Item8': 49, 'Item9': 54 },
        { 'Time': 'Jun', 'Item1': 15, 'Item2': 20, 'Item3': 25, 'Item4': 30, 'Item5': 35, 'Item6': 40, 'Item7': 45, 'Item8': 50, 'Item9': 55 },
        { 'Time': 'Jul', 'Item1': 13, 'Item2': 18, 'Item3': 22, 'Item4': 28, 'Item5': 33, 'Item6': 38, 'Item7': 43, 'Item8': 48, 'Item9': 53 },
        { 'Time': 'Aug', 'Item1': 17, 'Item2': 22, 'Item3': 27, 'Item4': 32, 'Item5': 37, 'Item6': 42, 'Item7': 47, 'Item8': 52, 'Item9': 57 },
        { 'Time': 'Sep', 'Item1': 18, 'Item2': 23, 'Item3': 28, 'Item4': 33, 'Item5': 38, 'Item6': 43, 'Item7': 48, 'Item8': 53, 'Item9': 58 },
        { 'Time': 'Oct', 'Item1': 19, 'Item2': 24, 'Item3': 29, 'Item4': 34, 'Item5': 39, 'Item6': 44, 'Item7': 49, 'Item8': 54, 'Item9': 59 },
        { 'Time': 'Nov', 'Item1': 18, 'Item2': 23, 'Item3': 28, 'Item4': 33, 'Item5': 38, 'Item6': 43, 'Item7': 48, 'Item8': 53, 'Item9': 58 },
        { 'Time': 'Dec', 'Item1': 21, 'Item2': 26, 'Item3': 31, 'Item4': 36, 'Item5': 41, 'Item6': 46, 'Item7': 51, 'Item8': 56, 'Item9': 61 }
    ],
    xAxis: {
        data: 'Time'
    },
    yAxis: {
        name: 'Units'
    }
};