```javascript
// 数据
const ChartData = {
        legend: {
        show: true,
        // 扩展图例的单选形态设置
        upgrade: {
            type: "singleselect",
            width: "80%",
            itemStyle: {
                icon: "circle",
                copy:true,
            },
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

import HuiCharts from '{{VITE_BASECOPYRIGHTSPAT}}';
// 引入样式
import '{{VITE_BASECOPYRIGHTSPAT}}/feature/expandLegend/index.css'

export default {
    name: "SingleselectLegend",
    data() {
        return {
            value: 0,
            currentTheme: localStorage.getItem("chartTheme") || "hdesign-light",
        };
    },
    created() {
        this.integrateChart = new HuiCharts();
    },
    mounted() {
        this.renderChart();
        this.$bus.on("themeChange", (val) => {
            this.integrateChart.setSimpleOption("PieChart", ChartData, {});
            this.integrateChart.render();
            Theme.setDefaultTheme(val);
            this.integrateChart.changeTheme();
        });
    },
    methods: {
        renderChart() {
            this.integrateChart.init(this.$refs.chartContainer);
            this.integrateChart.setSimpleOption("PieChart", ChartData, {});
            this.integrateChart.render();
        },
    },
};
```
