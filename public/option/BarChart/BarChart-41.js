/*
* dataZoom 区域缩放功能
* dataZoom.show 表示是否启用区域缩放功能， 默认false
* dataZoom.position : {top, left, right, bottom}
* top 的值可以是 30 这样的具体像素值，可以是 '30%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
* bottom 的值可以是 30 这样的具体像素值，可以是 '30%' 这样相对于容器高宽的百分比
* right 的值可以是 30 这样的具体像素值，可以是 '30%' 这样相对于容器高宽的百分比
* left 的值可以是 30 这样的具体像素值，可以是 '30%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
*/
const option = {
    theme: 'light',
    padding: [60, 30, 60, 20],
    itemStyle: {
        barWidth: 6,
        barGap: '50%',
    },
    dataZoom: {
        show: true,
        position: {
            left: 35,
            bottom: 20
        },
        start: 25,
        end: 75
    },
    legend: {
        show: true,
        position: {
            top: 30,
            right: 30
        },
    },
    data: [
        { "Time": '01:00', "Domestic": 33, "Abroad": 37 },
        { "Time": '01:01', "Domestic": 27, "Abroad": 39 },
        { "Time": '01:02', "Domestic": 31, "Abroad": 20 },
        { "Time": '01:03', "Domestic": 30, "Abroad": 15 },
        { "Time": '01:04', "Domestic": 37, "Abroad": 13 },
        { "Time": '01:05', "Domestic": 36, "Abroad": 17 },
        { "Time": '01:06', "Domestic": 42, "Abroad": 22 },
        { "Time": '01:07', "Domestic": 22, "Abroad": 12 },
        { "Time": '01:08', "Domestic": 17, "Abroad": 30 },
        { "Time": '01:09', "Domestic": 40, "Abroad": 33 },
        { "Time": '01:10', "Domestic": 42, "Abroad": 22 },
        { "Time": '01:11', "Domestic": 32, "Abroad": 11 },
        { "Time": '01:12', "Domestic": 33, "Abroad": 37 },
        { "Time": '01:13', "Domestic": 27, "Abroad": 39 },
        { "Time": '01:14', "Domestic": 31, "Abroad": 20 },
        { "Time": '01:15', "Domestic": 30, "Abroad": 15 },
        { "Time": '01:16', "Domestic": 37, "Abroad": 13 },
        { "Time": '01:17', "Domestic": 36, "Abroad": 17 },
        { "Time": '01:18', "Domestic": 42, "Abroad": 22 },
        { "Time": '01:19', "Domestic": 22, "Abroad": 12 },
        { "Time": '01:20', "Domestic": 17, "Abroad": 30 },
        { "Time": '01:21', "Domestic": 40, "Abroad": 33 },
        { "Time": '01:22', "Domestic": 42, "Abroad": 22 },
        { "Time": '01:23', "Domestic": 32, "Abroad": 11 },
        { "Time": '01:24', "Domestic": 33, "Abroad": 37 },
        { "Time": '01:25', "Domestic": 27, "Abroad": 39 },
        { "Time": '01:26', "Domestic": 31, "Abroad": 20 },
        { "Time": '01:27', "Domestic": 30, "Abroad": 15 },
        { "Time": '01:28', "Domestic": 37, "Abroad": 13 },
        { "Time": '01:29', "Domestic": 36, "Abroad": 17 },
        { "Time": '01:30', "Domestic": 42, "Abroad": 22 },
        { "Time": '01:31', "Domestic": 22, "Abroad": 12 },
        { "Time": '01:32', "Domestic": 17, "Abroad": 30 },
        { "Time": '01:33', "Domestic": 40, "Abroad": 33 },
        { "Time": '01:34', "Domestic": 42, "Abroad": 22 },
        { "Time": '01:35', "Domestic": 32, "Abroad": 11 },
        { "Time": '01:36', "Domestic": 33, "Abroad": 37 },
        { "Time": '01:37', "Domestic": 27, "Abroad": 39 },
        { "Time": '01:38', "Domestic": 31, "Abroad": 20 },
        { "Time": '01:39', "Domestic": 30, "Abroad": 15 },
        { "Time": '01:40', "Domestic": 37, "Abroad": 13 },
        { "Time": '01:41', "Domestic": 36, "Abroad": 17 },
        { "Time": '01:42', "Domestic": 42, "Abroad": 22 },
        { "Time": '01:43', "Domestic": 22, "Abroad": 12 },
        { "Time": '01:44', "Domestic": 17, "Abroad": 30 },
        { "Time": '01:45', "Domestic": 40, "Abroad": 33 },
        { "Time": '01:46', "Domestic": 42, "Abroad": 22 },
        { "Time": '01:47', "Domestic": 32, "Abroad": 11 },
        { "Time": '01:48', "Domestic": 32, "Abroad": 11 },
        { "Time": '01:49', "Domestic": 33, "Abroad": 37 },
        { "Time": '01:50', "Domestic": 27, "Abroad": 39 },
        { "Time": '01:51', "Domestic": 31, "Abroad": 20 },
        { "Time": '01:52', "Domestic": 30, "Abroad": 15 },
        { "Time": '01:53', "Domestic": 37, "Abroad": 13 },
        { "Time": '01:54', "Domestic": 36, "Abroad": 17 },
        { "Time": '01:55', "Domestic": 42, "Abroad": 22 },
        { "Time": '01:56', "Domestic": 22, "Abroad": 12 },
        { "Time": '01:57', "Domestic": 17, "Abroad": 30 },
        { "Time": '01:58', "Domestic": 40, "Abroad": 33 },
        { "Time": '01:59', "Domestic": 42, "Abroad": 22 },
        { "Time": '01:60', "Domestic": 32, "Abroad": 11 },
    ],
    xAxis: {
        data: "Time",
    },
    yAxis: {
        name: "Percentage (%)"
    }
};
