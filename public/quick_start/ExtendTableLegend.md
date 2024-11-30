```javascript
// 线性图数据
const chartData1 = {
	legend: {
		show: false,
		// 扩展图例的表格形态设置
		upgrade: {
			type: 'list',//list
			width: "35%",
			itemStyle: {
				showTips: true,
				icon: "line",
				copy:true,
			},
			statistics: {
				head: [" ", "当前", `占比`, "同比"],
				data: new Array(19).fill(0).map((item, index) => {
					return [ index+"%",index+"%",index+"%" ]
				})
			}
		},
	},
	data: [{
		"Month": "Jan",
		"卷积": 5,
		"网络 ": 10,
		"分布式 ": 15,
		"自然语言 ": 20,
		"大数据": 25,
		"区块链": 30,
		"云服务": 35,
		"数据包": 40,
		"高性能": 45,
		"虚拟化": 50,
		"人工智能": 55,
		"架构设计": 60,
		"同步与缓存": 65,
		"防护体系": 70,
		"容错机制": 75,
		"算法优化": 80,
		"量子计算": 85,
		"并行处理": 90,
		"处理器": 95,

	},
	{
		"Month": "Feb",
		"卷积": 6,
		"网络 ": 11,
		"分布式 ": 16,
		"自然语言 ": 21,
		"大数据 ": 26,
		"区块链": 31,
		"云服务": 36,
		"数据包": 41,
		"高性能": 46,
		"虚拟化": 51,
		"人工智能": 56,
		"架构设计": 61,
		"同步与缓存": 66,
		"防护体系": 71,
		"容错机制": 76,
		"算法优化": 81,
		"量子计算": 86,
		"并行处理": 91,
		"处理器": 96,
	},
	{
		"Month": "Mar",
		"卷积": 8,
		"网络 ": 13,
		"分布式 ": 18,
		"自然语言 ": 23,
		"大数据 ": 28,
		"区块链": 33,
		"云服务": 38,
		"数据包": 43,
		"高性能": 48,
		"虚拟化": 53,
		"人工智能": 58,
		"架构设计": 63,
		"同步与缓存": 68,
		"防护体系": 73,
		"容错机制": 78,
		"算法优化": 83,
		"量子计算": 88,
		"并行处理": 93,
		"处理器": 98,
	},
	{
		"Month": "Apr",
		"卷积": 10,
		"网络 ": 15,
		"分布式 ": 19,
		"自然语言 ": 24,
		"大数据 ": 29,
		"区块链": 34,
		"云服务": 39,
		"数据包": 44,
		"高性能": 49,
		"虚拟化": 54,
		"人工智能": 59,
		"架构设计": 64,
		"同步与缓存": 69,
		"防护体系": 74,
		"容错机制": 79,
		"算法优化": 84,
		"量子计算": 89,
		"并行处理": 94,
		"处理器": 99,
	},
	{
		"Month": "Jun",
		"卷积": 9,
		"网络 ": 14,
		"分布式 ": 20,
		"自然语言 ": 25,
		"大数据 ": 30,
		"区块链": 35,
		"云服务": 40,
		"数据包": 45,
		"高性能": 50,
		"虚拟化": 55,
		"人工智能": 60,
		"架构设计": 65,
		"同步与缓存": 70,
		"防护体系": 75,
		"容错机制": 80,
		"算法优化": 85,
		"量子计算": 90,
		"并行处理": 95,
		"处理器": 100,
	},
	{
		"Month": "Jul",
		"卷积": 8,
		"网络 ": 13,
		"分布式 ": 18,
		"自然语言 ": 23,
		"大数据 ": 28,
		"区块链": 33,
		"云服务": 38,
		"数据包": 43,
		"高性能": 48,
		"虚拟化": 53,
		"人工智能": 58,
		"架构设计": 63,
		"同步与缓存": 68,
		"防护体系": 73,
		"容错机制": 78,
		"算法优化": 83,
		"量子计算": 88,
		"并行处理": 93,
		"处理器": 98,
	}],
	xAxis: {
		key: 'Month',
		name: "月",
	},
	yAxis: {
		name: '热度'
	},

	tooltip: {
		textStyle: {
			fontSize: 12 // 字体大小
		},
	},
	theme: 'hdesign-light',
	smooth: true,
}
//圆环图数据
const chartData2 = {
	position: {
		radius: ['20%', '60%'],
		center: ['35%', '50%']
  	},
    // 扩展图例的表格形态设置
    legend: {
        show: true,
        upgrade: {
            type: "list",
            width: "35%",
            itemStyle: {
                icon: "circle",
            },
			statistics: {
				head: [" ", "当前", `占比`, "同比"],
				data: new Array(6).fill(0).map((item, index) => {
					return [ index+"%",index+"%",index+"%" ]
				})
			}
        },
    },
    data: [
        { value: 100, name: "VPC" },
        { value: 90, name: "IM" },
        { value: 49, name: "EIP" },
        { value: 30, name: "SG" },
        { value: 60, name: "KM" },
        { value: 40, name: "CV" },

    ],
    theme: "hdesign-light",
    smooth: true,
    type: "pie",
    selectedMode: "multiple",
};
export default {
	name: 'TableLegend',
	data() {
		return {
			value: 0,
			currentTheme: localStorage.getItem('chartTheme') || 'hdesign-light',
		}
	},
	created() {
		this.chartContainer1 = new IntegrateChart();
		this.chartContainer2 = new IntegrateChart();

	},
	mounted() {
		this.renderChart();
		// 检测主题变换
		this.$bus.on('themeChange', val => {
			this.chartContainer1.setSimpleOption('LineChart', chartContainer1, {});
			this.chartContainer1.render();
			this.chartContainer2.setSimpleOption('PieChart', chartContainer2, {});
			this.chartContainer2.render();
			Theme.setDefaultTheme(val);
			this.chartContainer1.changeTheme();
			this.chartContainer2.changeTheme();
		})

	},
	methods: {
		renderChart() {
			this.chartContainer1.init(this.$refs.chartContainer1);
			this.chartContainer1.setSimpleOption('LineChart', chartData1, {});
			this.chartContainer1.render();
			this.chartContainer2.init(this.$refs.chartContainer2);
			this.chartContainer2.setSimpleOption('PieChart', chartData2, {});
			this.chartContainer2.render();
		}
	}
}
```
