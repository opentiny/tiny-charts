```javascript
// 数据
const ChartData = {
    legend: {
        show: true,
        // 扩展图例的多选形态设置
        upgrade: {
            type: "mutiselect",
            width: "90%",
            itemStyle:{
                copy:true,
            }
        },
    },
    data: [
        {
            Month: "Jan",
            "计算机视觉与图像处理 (CV)": 10,
            "人工智能与机器学习 (AI)": 15,
            "网络安全与信息加密 (Cyber)": 20,
            "虚拟现实与增强现实 (VR/AR)": 25,
            "软件工程与系统设计 ( SEEE)": 30,
            "数据挖掘与大数据分析 (DM)": 35,
            "人与机器交互 (PHCIMAC)": 40,
            "云计算与服务导向架构 (Cloud)": 45,
            "嵌入式系统与实时操作系统 (Embedded)": 50,
            "区块链技术 (Blockchains)": 55,
            "量子计算与量子信息 (Quantum)": 60,
        },
        {
            Month: "Feb",
            "计算机视觉与图像处理 (CV)": 11,
            "人工智能与机器学习 (AI)": 16,
            "网络安全与信息加密 (Cyber)": 21,
            "虚拟现实与增强现实 (VR/AR)": 26,
            "软件工程与系统设计 ( SEEE)": 31,
            "数据挖掘与大数据分析 (DM)": 36,
            "人与机器交互 (PHCIMAC)": 41,
            "云计算与服务导向架构 (Cloud)": 46,
            "嵌入式系统与实时操作系统 (Embedded)": 51,
            "区块链技术 (Blockchains)": 56,
            "量子计算与量子信息 (Quantum)": 61,
        },
        {
            Month: "Mar",
            "计算机视觉与图像处理 (CV)": 13,
            "人工智能与机器学习 (AI)": 18,
            "网络安全与信息加密 (Cyber)": 23,
            "虚拟现实与增强现实 (VR/AR)": 28,
            "软件工程与系统设计 ( SEEE)": 33,
            "数据挖掘与大数据分析 (DM)": 38,
            "人与机器交互 (PHCIMAC)": 43,
            "云计算与服务导向架构 (Cloud)": 48,
            "嵌入式系统与实时操作系统 (Embedded)": 53,
            "区块链技术 (Blockchains)": 58,
            "量子计算与量子信息 (Quantum)": 63,
        },
        {
            Month: "Apr",
            "计算机视觉与图像处理 (CV)": 15,
            "人工智能与机器学习 (AI)": 19,
            "网络安全与信息加密 (Cyber)": 24,
            "虚拟现实与增强现实 (VR/AR)": 29,
            "软件工程与系统设计 ( SEEE)": 34,
            "数据挖掘与大数据分析 (DM)": 39,
            "人与机器交互 (PHCIMAC)": 44,
            "云计算与服务导向架构 (Cloud)": 49,
            "嵌入式系统与实时操作系统 (Embedded)": 54,
            "区块链技术 (Blockchains)": 59,
            "量子计算与量子信息 (Quantum)": 64,
        },
        {
            Month: "Jun",
            "计算机视觉与图像处理 (CV)": 15,
            "人工智能与机器学习 (AI)": 20,
            "网络安全与信息加密 (Cyber)": 25,
            "虚拟现实与增强现实 (VR/AR)": 30,
            "软件工程与系统设计 ( SEEE)": 35,
            "数据挖掘与大数据分析 (DM)": 40,
            "人与机器交互 (PHCIMAC)": 45,
            "云计算与服务导向架构 (Cloud)": 50,
            "嵌入式系统与实时操作系统 (Embedded)": 55,
            "区块链技术 (Blockchains)": 60,
            "量子计算与量子信息 (Quantum)": 65,
        },
        {
            Month: "Jul",
            "计算机视觉与图像处理 (CV)": 13,
            "人工智能与机器学习 (AI)": 18,
            "网络安全与信息加密 (Cyber)": 22,
            "虚拟现实与增强现实 (VR/AR)": 28,
            "软件工程与系统设计 ( SEEE)": 33,
            "数据挖掘与大数据分析 (DM)": 38,
            "人与机器交互 (PHCIMAC)": 43,
            "云计算与服务导向架构 (Cloud)": 48,
            "嵌入式系统与实时操作系统 (Embedded)": 53,
            "区块链技术 (Blockchains)": 58,
            "量子计算与量子信息 (Quantum)": 63,
        },
        {
            Month: "Aug",
            "计算机视觉与图像处理 (CV)": 17,
            "人工智能与机器学习 (AI)": 22,
            "网络安全与信息加密 (Cyber)": 27,
            "虚拟现实与增强现实 (VR/AR)": 32,
            "软件工程与系统设计 ( SEEE)": 37,
            "数据挖掘与大数据分析 (DM)": 42,
            "人与机器交互 (PHCIMAC)": 47,
            "云计算与服务导向架构 (Cloud)": 52,
            "嵌入式系统与实时操作系统 (Embedded)": 57,
            "区块链技术 (Blockchains)": 62,
            "量子计算与量子信息 (Quantum)": 67,
        },
        {
            Month: "Sep",
            "计算机视觉与图像处理 (CV)": 18,
            "人工智能与机器学习 (AI)": 23,
            "网络安全与信息加密 (Cyber)": 28,
            "虚拟现实与增强现实 (VR/AR)": 33,
            "软件工程与系统设计 ( SEEE)": 38,
            "数据挖掘与大数据分析 (DM)": 43,
            "人与机器交互 (PHCIMAC)": 48,
            "云计算与服务导向架构 (Cloud)": 53,
            "嵌入式系统与实时操作系统 (Embedded)": 58,
            "区块链技术 (Blockchains)": 63,
            "量子计算与量子信息 (Quantum)": 68,
        },
        {
            Month: "Oct",
            "计算机视觉与图像处理 (CV)": 19,
            "人工智能与机器学习 (AI)": 24,
            "网络安全与信息加密 (Cyber)": 29,
            "虚拟现实与增强现实 (VR/AR)": 34,
            "软件工程与系统设计 ( SEEE)": 39,
            "数据挖掘与大数据分析 (DM)": 44,
            "人与机器交互 (PHCIMAC)": 49,
            "云计算与服务导向架构 (Cloud)": 54,
            "嵌入式系统与实时操作系统 (Embedded)": 59,
            "区块链技术 (Blockchains)": 64,
            "量子计算与量子信息 (Quantum)": 69,
        },
        {
            Month: "Nov",
            "计算机视觉与图像处理 (CV)": 18,
            "人工智能与机器学习 (AI)": 23,
            "网络安全与信息加密 (Cyber)": 28,
            "虚拟现实与增强现实 (VR/AR)": 33,
            "软件工程与系统设计 ( SEEE)": 38,
            "数据挖掘与大数据分析 (DM)": 43,
            "人与机器交互 (PHCIMAC)": 48,
            "云计算与服务导向架构 (Cloud)": 53,
            "嵌入式系统与实时操作系统 (Embedded)": 58,
            "区块链技术 (Blockchains)": 63,
            "量子计算与量子信息 (Quantum)": 68,
        },
        {
            Month: "Dec",
            "计算机视觉与图像处理 (CV)": 21,
            "人工智能与机器学习 (AI)": 26,
            "网络安全与信息加密 (Cyber)": 31,
            "虚拟现实与增强现实 (VR/AR)": 36,
            "软件工程与系统设计 ( SEEE)": 41,
            "数据挖掘与大数据分析 (DM)": 46,
            "人与机器交互 (PHCIMAC)": 51,
            "云计算与服务导向架构 (Cloud)": 56,
            "嵌入式系统与实时操作系统 (Embedded)": 61,
            "区块链技术 (Blockchains)": 66,
            "量子计算与量子信息 (Quantum)": 71,
        },
    ],
    xAxis: {
        key: "Month",
        name: "月",
    },
    yAxis: {
        name: "热度",
    },
    theme: "hdesign-light",
    smooth: true,
};

export default {
    name: "MutiselectLegend",
    data() {
        return {
            value: 0,
            currentTheme: localStorage.getItem("chartTheme") || "hdesign-light",
        };
    },
    created() {
        this.integrateChart = new IntegrateChart();
    },
    mounted() {
        this.renderChart();
        this.$bus.on("themeChange", (val) => {
            this.integrateChart.setSimpleOption("LineChart", ChartData, {});
            this.integrateChart.render();
            Theme.setDefaultTheme(val);
            this.integrateChart.changeTheme();
        });
    },
    methods: {
        renderChart() {
            this.integrateChart.init(this.$refs.chartContainer);
            this.integrateChart.setSimpleOption("LineChart", ChartData, {});
            this.integrateChart.render();
        },
    },
};
```
