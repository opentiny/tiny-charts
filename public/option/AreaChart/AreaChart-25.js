/*
* dataZoom 区域缩放功能
* dataZoom.show 表示是否启用区域缩放功能， 默认false
* dataZoom.position : {top, left, right, bottom}
* top 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
* left 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
* right 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
* bottom 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
*/
const option = {
    theme: 'light',
    area: true,
    padding: [50, 30, 55, 20],
    dataZoom: {
        show: true,
        position: {
            left: 40,
            bottom: 18
        },
        style: {
            // 背景底色
            backgroundColor: '#FAFAFA',
            // 未选中区域数据填充色
            unSelectDataColor: '#CCCCCC',
            // 选中区域数据填充色
            selectDataColor: '#009966',
            // 选中区域的整体蒙层
            middleFillerColor: 'rgba(102,204,255,0.5)'
        }
    },
    legend: {
        show: true,
        icon: 'line',
        position: {
            top: 15,
            right: 15
        },
    },
    data: [
        { 'Time': '00:00', 'Domestic': 33, 'Abroad': 37 },
        { 'Time': '00:01', 'Domestic': 27, 'Abroad': 39 },
        { 'Time': '00:02', 'Domestic': 31, 'Abroad': 20 },
        { 'Time': '00:03', 'Domestic': 30, 'Abroad': 15 },
        { 'Time': '00:04', 'Domestic': 37, 'Abroad': 13 },
        { 'Time': '00:05', 'Domestic': 36, 'Abroad': 17 },
        { 'Time': '00:06', 'Domestic': 42, 'Abroad': 22 },
        { 'Time': '00:07', 'Domestic': 22, 'Abroad': 12 },
        { 'Time': '00:08', 'Domestic': 17, 'Abroad': 30 },
        { 'Time': '00:09', 'Domestic': 40, 'Abroad': 33 },
        { 'Time': '00:10', 'Domestic': 42, 'Abroad': 22 },
        { 'Time': '00:11', 'Domestic': 32, 'Abroad': 11 },
        { 'Time': '00:12', 'Domestic': 33, 'Abroad': 37 },
        { 'Time': '00:13', 'Domestic': 27, 'Abroad': 39 },
        { 'Time': '00:14', 'Domestic': 31, 'Abroad': 20 },
        { 'Time': '00:15', 'Domestic': 30, 'Abroad': 15 },
        { 'Time': '00:16', 'Domestic': 37, 'Abroad': 13 },
        { 'Time': '00:17', 'Domestic': 36, 'Abroad': 17 },
        { 'Time': '00:18', 'Domestic': 42, 'Abroad': 22 },
        { 'Time': '00:19', 'Domestic': 22, 'Abroad': 12 },
        { 'Time': '00:20', 'Domestic': 17, 'Abroad': 30 },
        { 'Time': '00:21', 'Domestic': 40, 'Abroad': 33 },
        { 'Time': '00:22', 'Domestic': 42, 'Abroad': 22 },
        { 'Time': '00:23', 'Domestic': 32, 'Abroad': 11 },
        { 'Time': '00:24', 'Domestic': 33, 'Abroad': 37 },
        { 'Time': '00:25', 'Domestic': 27, 'Abroad': 39 },
        { 'Time': '00:26', 'Domestic': 31, 'Abroad': 20 },
        { 'Time': '00:27', 'Domestic': 30, 'Abroad': 15 },
        { 'Time': '00:28', 'Domestic': 37, 'Abroad': 13 },
        { 'Time': '00:29', 'Domestic': 36, 'Abroad': 17 },
        { 'Time': '00:30', 'Domestic': 42, 'Abroad': 22 },
        { 'Time': '00:31', 'Domestic': 22, 'Abroad': 12 },
        { 'Time': '00:32', 'Domestic': 17, 'Abroad': 30 },
        { 'Time': '00:33', 'Domestic': 40, 'Abroad': 33 },
        { 'Time': '00:34', 'Domestic': 42, 'Abroad': 22 },
        { 'Time': '00:35', 'Domestic': 32, 'Abroad': 11 },
        { 'Time': '00:36', 'Domestic': 33, 'Abroad': 37 },
        { 'Time': '00:37', 'Domestic': 27, 'Abroad': 39 },
        { 'Time': '00:38', 'Domestic': 31, 'Abroad': 20 },
        { 'Time': '00:39', 'Domestic': 30, 'Abroad': 15 },
        { 'Time': '00:40', 'Domestic': 37, 'Abroad': 13 },
        { 'Time': '00:41', 'Domestic': 36, 'Abroad': 17 },
        { 'Time': '00:42', 'Domestic': 42, 'Abroad': 22 },
        { 'Time': '00:43', 'Domestic': 22, 'Abroad': 12 },
        { 'Time': '00:44', 'Domestic': 17, 'Abroad': 30 },
        { 'Time': '00:45', 'Domestic': 40, 'Abroad': 33 },
        { 'Time': '00:46', 'Domestic': 42, 'Abroad': 22 },
        { 'Time': '00:47', 'Domestic': 32, 'Abroad': 11 },
        { 'Time': '00:48', 'Domestic': 32, 'Abroad': 11 },
        { 'Time': '00:49', 'Domestic': 33, 'Abroad': 37 },
        { 'Time': '00:50', 'Domestic': 27, 'Abroad': 39 },
        { 'Time': '00:51', 'Domestic': 31, 'Abroad': 20 },
        { 'Time': '00:52', 'Domestic': 30, 'Abroad': 15 },
        { 'Time': '00:53', 'Domestic': 37, 'Abroad': 13 },
        { 'Time': '00:54', 'Domestic': 36, 'Abroad': 17 },
        { 'Time': '00:55', 'Domestic': 42, 'Abroad': 22 },
        { 'Time': '00:56', 'Domestic': 22, 'Abroad': 12 },
        { 'Time': '00:57', 'Domestic': 17, 'Abroad': 30 },
        { 'Time': '00:58', 'Domestic': 40, 'Abroad': 33 },
        { 'Time': '00:59', 'Domestic': 42, 'Abroad': 22 },
        { 'Time': '00:60', 'Domestic': 32, 'Abroad': 11 },
    ],
    xAxis: {
        data: 'Time',
        fullGrid: true
    },
    yAxis: {
        name: 'Percentage (%)'
    }
};
