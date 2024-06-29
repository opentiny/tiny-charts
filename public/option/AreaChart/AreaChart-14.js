const option = {
    theme: 'light',
    chartPadding: [50, 30, 50, 20],
    area: true,
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 34 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 24 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 14 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 34 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 24 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 14 }
    ],
    // linearGradient线性渐变,循环取色(支持rgb颜色、英文单词颜色、十六进制颜色)，渐变方向由左向右
    // initialColor:柱体起始颜色，循环取色。当此属性未配置时则从color属性中循环取色
    // endColor:柱体起始颜色，循环取色。当此属性未配置时则从color属性中循环取色
    linearGradient: {
        initialColor: ['blue', 'yellow'],
        endColor: ['red', '#fff'],
    }
};