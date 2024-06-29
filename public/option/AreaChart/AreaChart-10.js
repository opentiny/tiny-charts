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
    padding: [50, 30, 80, 20],
    smooth: true,
    area: true,
    dataZoom: {
        start: 0,
        end: 30,
        show: true,
        position: {
            left: 40,
            bottom: 42
        }
    },
    data: [
        { 'Time': '12:00', 'Train': 80, 'Bus': 56, 'Aircraft': 20 },
        { 'Time': '12:01', 'Train': 55, 'Bus': 39, 'Aircraft': 15 },
        { 'Time': '12:02', 'Train': 63, 'Bus': 20, 'Aircraft': 21 },
        { 'Time': '12:03', 'Train': 30, 'Bus': 46, 'Aircraft': 75 },
        { 'Time': '12:04', 'Train': 37, 'Bus': 33, 'Aircraft': 42 },
        { 'Time': '12:05', 'Train': 70, 'Bus': 37, 'Aircraft': 32 },
        { 'Time': '12:06', 'Train': 42, 'Bus': 52, 'Aircraft': 76 },
        { 'Time': '12:07', 'Train': 50, 'Bus': 12, 'Aircraft': 60 },
        { 'Time': '12:08', 'Train': 34, 'Bus': 38, 'Aircraft': 65 },
        { 'Time': '12:09', 'Train': 40, 'Bus': 33, 'Aircraft': 88 },
        { 'Time': '12:10', 'Train': 60, 'Bus': 22, 'Aircraft': 65 },
        { 'Time': '12:11', 'Train': 62, 'Bus': 42, 'Aircraft': 56 },
        { 'Time': '12:12', 'Train': 83, 'Bus': 56, 'Aircraft': 20 },
        { 'Time': '12:13', 'Train': 55, 'Bus': 39, 'Aircraft': 15 },
        { 'Time': '12:14', 'Train': 60, 'Bus': 20, 'Aircraft': 21 },
        { 'Time': '12:15', 'Train': 30, 'Bus': 46, 'Aircraft': 75 },
        { 'Time': '12:16', 'Train': 37, 'Bus': 33, 'Aircraft': 42 },
        { 'Time': '12:17', 'Train': 70, 'Bus': 37, 'Aircraft': 32 },
        { 'Time': '12:18', 'Train': 42, 'Bus': 52, 'Aircraft': 76 },
        { 'Time': '12:19', 'Train': 52, 'Bus': 12, 'Aircraft': 60 },
        { 'Time': '12:20', 'Train': 30, 'Bus': 38, 'Aircraft': 65 },
        { 'Time': '12:21', 'Train': 40, 'Bus': 33, 'Aircraft': 88 },
        { 'Time': '12:22', 'Train': 60, 'Bus': 22, 'Aircraft': 65 },
        { 'Time': '12:23', 'Train': 62, 'Bus': 42, 'Aircraft': 56 },
        { 'Time': '12:24', 'Train': 83, 'Bus': 56, 'Aircraft': 20 },
        { 'Time': '12:25', 'Train': 50, 'Bus': 39, 'Aircraft': 15 },
        { 'Time': '12:26', 'Train': 63, 'Bus': 20, 'Aircraft': 21 },
        { 'Time': '12:27', 'Train': 30, 'Bus': 46, 'Aircraft': 75 },
        { 'Time': '12:28', 'Train': 37, 'Bus': 33, 'Aircraft': 42 },
        { 'Time': '12:29', 'Train': 70, 'Bus': 37, 'Aircraft': 32 },
        { 'Time': '12:30', 'Train': 42, 'Bus': 52, 'Aircraft': 76 },
        { 'Time': '12:31', 'Train': 52, 'Bus': 12, 'Aircraft': 60 },
        { 'Time': '12:32', 'Train': 30, 'Bus': 38, 'Aircraft': 65 },
        { 'Time': '12:33', 'Train': 40, 'Bus': 33, 'Aircraft': 88 },
        { 'Time': '12:34', 'Train': 60, 'Bus': 22, 'Aircraft': 65 },
        { 'Time': '12:35', 'Train': 62, 'Bus': 42, 'Aircraft': 56 },
        { 'Time': '12:36', 'Train': 83, 'Bus': 56, 'Aircraft': 20 },
        { 'Time': '12:37', 'Train': 55, 'Bus': 39, 'Aircraft': 15 },
        { 'Time': '12:38', 'Train': 63, 'Bus': 20, 'Aircraft': 21 },
        { 'Time': '12:39', 'Train': 30, 'Bus': 46, 'Aircraft': 75 },
        { 'Time': '12:40', 'Train': 37, 'Bus': 33, 'Aircraft': 42 },
        { 'Time': '12:41', 'Train': 70, 'Bus': 37, 'Aircraft': 32 },
        { 'Time': '12:42', 'Train': 42, 'Bus': 52, 'Aircraft': 76 },
        { 'Time': '12:43', 'Train': 52, 'Bus': 12, 'Aircraft': 60 },
        { 'Time': '12:44', 'Train': 30, 'Bus': 38, 'Aircraft': 65 },
        { 'Time': '12:45', 'Train': 40, 'Bus': 33, 'Aircraft': 88 },
        { 'Time': '12:46', 'Train': 60, 'Bus': 22, 'Aircraft': 65 },
        { 'Time': '12:47', 'Train': 60, 'Bus': 42, 'Aircraft': 56 }
    ],
    xAxis: {
        data: 'Time',
        fullGrid: true,
    },
    yAxis: {
        name: 'Percentage(%)'
    }
};
