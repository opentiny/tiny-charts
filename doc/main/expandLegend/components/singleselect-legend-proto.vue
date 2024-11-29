<template>
    <div style="display: flex;justify-content: space-evenly;">
        <div
            style="width: 30%; padding: 20px 20px 0 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1); position: relative">
            <div class="chart-container1" ref="chartContainer1" style="width: 100%; height: 500px"
                :style="{ height: '500px', width: '100%' }"></div>
        </div>
        <div
            style="width: 30%;  padding: 20px 20px 0 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1); position: relative">
            <div class="chart-container2" ref="chartContainer2" style="width: 100%; height: 500px"
                :style="{ height: '500px', width: '100%' }"></div>
        </div>
    </div>
</template>
<script>
import IntegrateChart from "../../../../src/index";
import Theme from "../../../../src/feature/token";


const ChartData1 = {
    theme: 'cloud-light',
    padding: [50, 70, 30, 30],
    data: [
        {
            Month: "Jan",
            "CV": 10,
            "AI": 15,
            "Cyber": 20,
            "VR/AR": 25,
            "SEEE": 30,
            "DM": 35,
            "PHCIMAC": 40,
            "Cloud": 45,
            "Embedded": 50,
            "Blockchains": 55,
            "Quantum": 60,
        },
        {
            Month: "Feb",
            "CV": 11,
            "AI": 16,
            "Cyber": 21,
            "VR/AR": 26,
            "SEEE": 31,
            "DM": 36,
            "PHCIMAC": 41,
            "Cloud": 46,
            "Embedded": 51,
            "Blockchains": 56,
            "Quantum": 61,
        },
        {
            Month: "Mar",
            "CV": 13,
            "AI": 18,
            "Cyber": 23,
            "VR/AR": 28,
            "SEEE": 33,
            "DM": 38,
            "PHCIMAC": 43,
            "Cloud": 48,
            "Embedded": 53,
            "Blockchains": 58,
            "Quantum": 63,
        },
        {
            Month: "Apr",
            "CV": 15,
            "AI": 19,
            "Cyber": 24,
            "VR/AR": 29,
            "SEEE": 34,
            "DM": 39,
            "PHCIMAC": 44,
            "Cloud": 49,
            "Embedded": 54,
            "Blockchains": 59,
            "Quantum": 64,
        },
        {
            Month: "Jun",
            "CV": 15,
            "AI": 20,
            "Cyber": 25,
            "VR/AR": 30,
            "SEEE": 35,
            "DM": 40,
            "PHCIMAC": 45,
            "Cloud": 50,
            "Embedded": 55,
            "Blockchains": 60,
            "Quantum": 65,
        },
        {
            Month: "Jul",
            "CV": 13,
            "AI": 18,
            "Cyber": 22,
            "VR/AR": 28,
            "SEEE": 33,
            "DM": 38,
            "PHCIMAC": 43,
            "Cloud": 48,
            "Embedded": 53,
            "Blockchains": 58,
            "Quantum": 63,
        },
        {
            Month: "Aug",
            "CV": 17,
            "AI": 22,
            "Cyber": 27,
            "VR/AR": 32,
            "SEEE": 37,
            "DM": 42,
            "PHCIMAC": 47,
            "Cloud": 52,
            "Embedded": 57,
            "Blockchains": 62,
            "Quantum": 67,
        },
        {
            Month: "Sep",
            "CV": 18,
            "AI": 23,
            "Cyber": 28,
            "VR/AR": 33,
            "SEEE": 38,
            "DM": 43,
            "PHCIMAC": 48,
            "Cloud": 53,
            "Embedded": 58,
            "Blockchains": 63,
            "Quantum": 68,
        },
        {
            Month: "Oct",
            "CV": 19,
            "AI": 24,
            "Cyber": 29,
            "VR/AR": 34,
            "SEEE": 39,
            "DM": 44,
            "PHCIMAC": 49,
            "Cloud": 54,
            "Embedded": 59,
            "Blockchains": 64,
            "Quantum": 69,
        },
        {
            Month: "Nov",
            "CV": 18,
            "AI": 23,
            "Cyber": 28,
            "VR/AR": 33,
            "SEEE": 38,
            "DM": 43,
            "PHCIMAC": 48,
            "Cloud": 53,
            "Embedded": 58,
            "Blockchains": 63,
            "Quantum": 68,
        },
        {
            Month: "Dec",
            "CV": 21,
            "AI": 26,
            "Cyber": 31,
            "VR/AR": 36,
            "SEEE": 41,
            "DM": 46,
            "PHCIMAC": 51,
            "Cloud": 56,
            "Embedded": 61,
            "Blockchains": 66,
            "Quantum": 71,
        },
    ],
    xAxis: {
        key: 'Month',
        name: '月份'
    },
    yAxis: {
        name: '百分比(%)',
    },
    legend: {
        show: true,
        upgrade: {
            type: "singleselect",
            // width: "80%",
            itemStyle: {
                icon: "circle",
            },
        },
        position: {
            top: 15,
            right: 25
        }
    },
    smooth: true,

};

const ChartData2 = {
    legend: {
        show: true,
        upgrade: {
            type: "singleselect",
            // width: "80%",
            itemStyle: {
                icon: "circle",
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
export default {
    name: "SingleselectLegend",
    data() {
        return {
            value: 0,
            currentTheme: localStorage.getItem("chartTheme") || "hdesign-light",
        };
    },
    created() {
        this.integrateChart1 = new IntegrateChart();
        this.integrateChart2 = new IntegrateChart();

    },
    mounted() {
        this.renderChart();
        this.$bus.on("themeChange", (val) => {
            this.integrateChart1.setSimpleOption("LineChart", ChartData1, {});
            this.integrateChart1.render();
            this.integrateChart2.setSimpleOption("PieChart", ChartData2, {});
            this.integrateChart2.render();
            Theme.setDefaultTheme(val);
            this.integrateChart1.changeTheme();
            this.integrateChart2.changeTheme();
        });
    },
    methods: {
        renderChart() {
            this.integrateChart1.init(this.$refs.chartContainer1);
            this.integrateChart1.setSimpleOption("LineChart", ChartData1, {});
            this.integrateChart1.render();
            this.integrateChart2.init(this.$refs.chartContainer2);
            this.integrateChart2.setSimpleOption("PieChart", ChartData2, {});
            this.integrateChart2.render();
        },
    },
};
</script>
