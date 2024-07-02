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
	xAxis: {
		data: 'Month',
	},
	yAxis: {
		name: '单位'
	},
	markLine: {
		data: [300, 600, 800, 800, 700, 700, 800, 400, 300, 700, 800 ,400],
		name: 'info'
	},
	label: {
		show: true,
	}
}
