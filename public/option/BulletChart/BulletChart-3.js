const option = {
	theme: 'light',
	data: [
		{ 'Month': '一月', 'Score': 400 },
		{ 'Month': '二月', 'Score': 500, },
		{ 'Month': '三月', 'Score': 900,},
		{ 'Month': '四月', 'Score': 700 },
		{ 'Month': '五月', 'Score': 800 },
		{ 'Month': '六月', 'Score': 500 },
		{ 'Month': '七月', 'Score': 900 },
		{ 'Month': '八月', 'Score': 300 },
		{ 'Month': '九月', 'Score': 500 },
		{ 'Month': '十月', 'Score': 800 },
		{ 'Month': '十一月', 'Score': 900 },
		{ 'Month': '十二月', 'Score': 500 }
	],
	color: '#2070f3',
	legend: {
		show: true,          // 图例是否显示
		position: {           // 图例在容器中的上下左右的位置
				right: 25,
				top: 15
		},
		orient: 'horizontal', // 图例排布方向
		tooltip: {            // 图例悬浮提示框
				show: true
		}
	},
	xAxis: {
			data: 'Month',
	},
	yAxis: {
		name: '单位'
	},
	markLine: {
		data: 800,
		name: 'info'
	},
	background: [{
		name: 'error',
		data: 100,
	},{
		name: 'warning',
		data: 200,
	},{
		name: 'subwarning',
		data: 300,
	},{
		name: 'success',
		data: 400,
	}]
};
  