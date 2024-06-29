```javascript

// 机场日周月数据
const airportChartData = {
	today: {
		data: [
			{ "Today": '00:00', "出境": 3300, "入境": 1300},
			{ "Today": '04:00', "出境": 2700, "入境": 2300},
			{ "Today": '08:00', "出境": 3100, "入境": 4300},
			{ "Today": '12:00', "出境": 3000, "入境": 1600},
			{ "Today": '16:00', "出境": 3700, "入境": 2200},
			{ "Today": '20:00', "出境": 3600, "入境": 1300},
			{ "Today": '00:00', "出境": 3600, "入境": 2000}
		],
		xAxis: {
			key: 'Today',
			name: '今天'
		},
	},
	week: {
		data: [
			{ "Week": '周日', "出境": 13300, "入境": 10300},
			{ "Week": '周一', "出境": 18700, "入境": 14300},
			{ "Week": '周二', "出境": 16200, "入境": 12300},
			{ "Week": '周三', "出境": 10600, "入境": 9200},
			{ "Week": '周四', "出境": 18700, "入境": 16300},
			{ "Week": '周五', "出境": 13400, "入境": 10400},
			{ "Week": '周六', "出境": 19200, "入境": 17800}
		],
		xAxis: {
			key: 'Week',
			name: '7天内'
		},
	},
	month: {
		data: [
			{ "Month": '1', "出境": 3300, "入境": 1300},
			{ "Month": '2', "出境": 9700, "入境": 5300},
			{ "Month": '3', "出境": 13100, "入境": 10300},
			{ "Month": '4', "出境": 16000, "入境": 6300},
			{ "Month": '5', "出境": 2700, "入境": 4300},
			{ "Month": '6', "出境": 6600, "入境": 5300},
			{ "Month": '7', "出境": 13600, "入境": 12300},
			{ "Month": '8', "出境": 18300, "入境": 15300},
			{ "Month": '9', "出境": 7700, "入境": 5200},
			{ "Month": '10', "出境": 4100, "入境": 2200},
			{ "Month": '11', "出境": 13000, "入境": 10300},
			{ "Month": '12', "出境": 13700, "入境": 8300},
			{ "Month": '13', "出境": 14600, "入境": 11300},
			{ "Month": '14', "出境": 1600, "入境": 2600},
			{ "Month": '15', "出境": 5300, "入境": 4600},
			{ "Month": '16', "出境": 5700, "入境": 5100},
			{ "Month": '17', "出境": 9100, "入境": 7200},
			{ "Month": '18', "出境": 6000, "入境": 5300},
			{ "Month": '19', "出境": 13700, "入境": 11300},
			{ "Month": '20', "出境": 15900, "入境": 12900},
			{ "Month": '21', "出境": 17700, "入境": 15300},
			{ "Month": '22', "出境": 9200, "入境": 8100},
			{ "Month": '23', "出境": 18700, "入境": 17300},
			{ "Month": '24', "出境": 3200, "入境": 2900},
			{ "Month": '25', "出境": 9000, "入境": 8300}
		],
		xAxis: {
			key: 'Month',
			name: '25天内'
		},
	}
}
// 机场图表配置
let airportChartOpt = {
	theme: 'hdesign-light',
	padding: [60, 70, 24, 24],
	data: [
		{ "Today": '00:00', "出境": 3300, "入境": 1300},
		{ "Today": '04:00', "出境": 2700, "入境": 2300},
		{ "Today": '08:00', "出境": 3100, "入境": 4300},
		{ "Today": '12:00', "出境": 3000, "入境": 1600},
		{ "Today": '16:00', "出境": 3700, "入境": 2200},
		{ "Today": '20:00', "出境": 3600, "入境": 1300},
		{ "Today": '00:00', "出境": 3600, "入境": 2000}
	],
	xAxis: {
		key: 'Month',
		name: '今天'
	},
	yAxis: {
		name: '人次',
	},
	legend: {
		show: true,
		position: {
			top: 0,
			right: 25
		}
	}
};

// 产品图表配置
let productChartOpt = {
	theme: 'hdesign-light',
	padding: [60, 70, 24, 24],
	data: [
		{ "Month": 'Jan', "负载率": 92, },
		{ "Month": 'Feb', "负载率": 88, },
		{ "Month": 'Mar', "负载率": 58, },
		{ "Month": 'Apr', "负载率": 86, },
		{ "Month": 'May', "负载率": 96, },
		{ "Month": 'Jun', "负载率": 89, },
	],
	xAxis: {
		key: 'Month',
	},
	yAxis: {
		name: '负载率'
	},
	markLine: {
		top: 80, // 上阈值
	},
	legend: {
		show: true,
		position: {
			top: 15,
			right: 25
		}
	}
};


export default {
	name: 'BarChart',
	data() {
		return {
			value: 0
		}
	},
	created() {
		this.airportIntegrateChart = new IntegrateChart();
		this.productIntegrateChart = new IntegrateChart();
	},
	mounted() {
		// 机场图表卡片数据
		const airportCardData = {
			title:{
				name: '飞机场出入境人数统计',
				tip: {
					show: true
				}
			},
			operation:{
				data:[{
						type: 'button',
						data: [{
								text: '今天',
								name: 'today'
						},{
								text: '7天内',
								name: 'week',
						},{
								text: '25天内',
								name: 'month'
						}],
						active: 0
				},{
						type: 'icon',
						data: [{
								path: './icons/refresh.png',
								name: 'refresh'
						}],
				}],
				onChange: (data, index) => {
					let currentData = data[index];
					let name = currentData.name;
					if (name =='today' || name =='week' || name =='month') {
						let newData = airportChartData[name];
						airportChartOpt = Object.assign(airportChartOpt, newData);
					} 
					this.airportIntegrateChart.setSimpleOption('BarChart', airportChartOpt, {});
					this.airportIntegrateChart.render();
				}      
			},
			valueArea: {
				data:[{
						value: 5500,
						unit: '',
						desc: '平均人次',
				},{
						value: 17300,
						unit: '',
						desc: '最大人次',
				},{
						value: 1300,
						unit: '',
						desc: '最小人次',
				}],
			}
		}

		// 产品图表卡片数据
		const productCardData = {
			title:{
				name: '产品负载率',
				tip: {
					show: true
				}
			},
			operation:{
				data:[{
						type: 'icon-button',
						data: [{
								path: './icons/line.png',
								name: 'line'
						},{
								path: './icons/bar.png',
								name: 'bar'
						}],
						active: 0
				},{
						type: 'icon',
						data: [{
								path: './icons/refresh.png',
								name: 'refresh'
						}],
				}],
				onChange: (data, index) => {
					let currentData = data[index];
					let name = currentData.name;
					let type = 'BarChart';
					if (name == 'line' || name == 'bar'){
						type = name.charAt(0).toUpperCase() + name.slice(1) + 'Chart'
					}
					this.productIntegrateChart.setSimpleOption(type, productChartOpt, {});
					this.productIntegrateChart.render();
				}      
			},
			valueArea: {
				data:[{
					value: 90,
					unit: '%',
					desc: '平均负载率',
				},{
						value: 96,
						unit: '%',
						desc: '最大负载率',
				},{
						value: 58,
						unit: '%',
						desc: '最小负载率',
				}],
			}
			
		}
		let containerDom = this.$refs.container;
		let airportCardCon = this.$refs.airportCardConRef;
		let productCardCon = this.$refs.productCardConRef;
		this.renderChart();
		new CardManager(airportCardCon, airportCardData);
		new CardManager(productCardCon, productCardData);
        // 检测主题变换
		this.$bus.on('themeChange',val => {
            airportChartOpt.theme = val;
			productChartOpt.theme = val;
			this.airportIntegrateChart.setSimpleOption('BarChart', airportChartOpt, {});
			this.productIntegrateChart.setSimpleOption('LineChart', productChartOpt, {});
			this.airportIntegrateChart.render();
			this.productIntegrateChart.render();
			containerDom.className = '';
			containerDom.setAttribute('class',val);
		})
		
	},
	methods: {
		
		renderChart() {
			this.airportIntegrateChart.init(this.$refs.airportChartContainer);
			this.productIntegrateChart.init(this.$refs.productChartContainer);
			this.airportIntegrateChart.setSimpleOption('BarChart', airportChartOpt, {});
			this.productIntegrateChart.setSimpleOption('LineChart', productChartOpt, {});
			this.airportIntegrateChart.render();
			this.productIntegrateChart.render();
		}
	}
}