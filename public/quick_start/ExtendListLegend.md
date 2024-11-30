```javascript
// 数据
const chartData = {
    legend: {
        show: true,
        // 扩展图例的列表形态设置
        upgrade: {
            type: "list",
            width: "30%",
            itemStyle: {
                showTips: true,
                icon: "line",
                copy:true,
            },
        },
    },
    data: [
        {
            Month: "Jan",
            "卷积神经网络 (Convolutional Neural Network)": 5,
            "深度学习神经网络模型 (Deep Learning Neural Network Model)": 10,
            "分布式计算资源调度系统 (Distributed Computing Resource Scheduling System)": 15,
            "自然语言处理与理解技术 (Natural Language Processing and Understanding Tech)": 20,
            "大数据实时流处理平台 (Big Data Real-Time Stream Processing Platform)": 25,
            "区块链去中心化应用开发 (Blockchain Decentralized Application Development)": 30,
            "云服务弹性扩展管理机制 (Cloud Service Elastic Scaling Management Mechanism)": 35,
            "网络数据包捕获与分析工具 (Network Packet Capture and Analysis Tools)": 40,
            "高性能图形处理单元架构 (High-Performance Graphics Processing Unit Architecture)": 45,
            "虚拟化技术与资源管理平台 (Virtualization Technology and Resource Management Platform)": 50,
            "基于人工智能的自动化运维系统 (AI-Based Automated Operations and Maintenance System)": 55,
            "面向服务的架构设计原则 (Service-Oriented Architecture Design Principles)": 60,
            "实时数据同步与缓存机制 (Real-Time Data Synchronization and Caching Mechanism)": 65,
            "多层次网络安全防护体系 (Multi-Layer Network Security Protection System)": 70,
            "分布式存储系统容错机制 (Distributed Storage System Fault Tolerance Mechanism)": 75,
            "深度强化学习算法优化 (Deep Reinforcement Learning Algorithm Optimization)": 80,
            "量子计算与量子通信技术 (Quantum Computing and Quantum Communication Technology)": 85,
            "大规模并行处理计算平台 (Large-Scale Parallel Processing Computing Platform)": 90,
            "自然语言处理 (Natural Language Processing)": 95,
        },
        {
            Month: "Feb",
            "卷积神经网络 (Convolutional Neural Network)": 6,
            "深度学习神经网络模型 (Deep Learning Neural Network Model)": 11,
            "分布式计算资源调度系统 (Distributed Computing Resource Scheduling System)": 16,
            "自然语言处理与理解技术 (Natural Language Processing and Understanding Tech)": 21,
            "大数据实时流处理平台 (Big Data Real-Time Stream Processing Platform)": 26,
            "区块链去中心化应用开发 (Blockchain Decentralized Application Development)": 31,
            "云服务弹性扩展管理机制 (Cloud Service Elastic Scaling Management Mechanism)": 36,
            "网络数据包捕获与分析工具 (Network Packet Capture and Analysis Tools)": 41,
            "高性能图形处理单元架构 (High-Performance Graphics Processing Unit Architecture)": 46,
            "虚拟化技术与资源管理平台 (Virtualization Technology and Resource Management Platform)": 51,
            "基于人工智能的自动化运维系统 (AI-Based Automated Operations and Maintenance System)": 56,
            "面向服务的架构设计原则 (Service-Oriented Architecture Design Principles)": 61,
            "实时数据同步与缓存机制 (Real-Time Data Synchronization and Caching Mechanism)": 66,
            "多层次网络安全防护体系 (Multi-Layer Network Security Protection System)": 71,
            "分布式存储系统容错机制 (Distributed Storage System Fault Tolerance Mechanism)": 76,
            "深度强化学习算法优化 (Deep Reinforcement Learning Algorithm Optimization)": 81,
            "量子计算与量子通信技术 (Quantum Computing and Quantum Communication Technology)": 86,
            "大规模并行处理计算平台 (Large-Scale Parallel Processing Computing Platform)": 91,
            "自然语言处理 (Natural Language Processing)": 96,
        },
        {
            Month: "Mar",
            "卷积神经网络 (Convolutional Neural Network)": 8,
            "深度学习神经网络模型 (Deep Learning Neural Network Model)": 13,
            "分布式计算资源调度系统 (Distributed Computing Resource Scheduling System)": 18,
            "自然语言处理与理解技术 (Natural Language Processing and Understanding Tech)": 23,
            "大数据实时流处理平台 (Big Data Real-Time Stream Processing Platform)": 28,
            "区块链去中心化应用开发 (Blockchain Decentralized Application Development)": 33,
            "云服务弹性扩展管理机制 (Cloud Service Elastic Scaling Management Mechanism)": 38,
            "网络数据包捕获与分析工具 (Network Packet Capture and Analysis Tools)": 43,
            "高性能图形处理单元架构 (High-Performance Graphics Processing Unit Architecture)": 48,
            "虚拟化技术与资源管理平台 (Virtualization Technology and Resource Management Platform)": 53,
            "基于人工智能的自动化运维系统 (AI-Based Automated Operations and Maintenance System)": 58,
            "面向服务的架构设计原则 (Service-Oriented Architecture Design Principles)": 63,
            "实时数据同步与缓存机制 (Real-Time Data Synchronization and Caching Mechanism)": 68,
            "多层次网络安全防护体系 (Multi-Layer Network Security Protection System)": 73,
            "分布式存储系统容错机制 (Distributed Storage System Fault Tolerance Mechanism)": 78,
            "深度强化学习算法优化 (Deep Reinforcement Learning Algorithm Optimization)": 83,
            "量子计算与量子通信技术 (Quantum Computing and Quantum Communication Technology)": 88,
            "大规模并行处理计算平台 (Large-Scale Parallel Processing Computing Platform)": 93,
            "自然语言处理 (Natural Language Processing)": 98,
        },
        {
            Month: "Apr",
            "卷积神经网络 (Convolutional Neural Network)": 10,
            "深度学习神经网络模型 (Deep Learning Neural Network Model)": 15,
            "分布式计算资源调度系统 (Distributed Computing Resource Scheduling System)": 19,
            "自然语言处理与理解技术 (Natural Language Processing and Understanding Tech)": 24,
            "大数据实时流处理平台 (Big Data Real-Time Stream Processing Platform)": 29,
            "区块链去中心化应用开发 (Blockchain Decentralized Application Development)": 34,
            "云服务弹性扩展管理机制 (Cloud Service Elastic Scaling Management Mechanism)": 39,
            "网络数据包捕获与分析工具 (Network Packet Capture and Analysis Tools)": 44,
            "高性能图形处理单元架构 (High-Performance Graphics Processing Unit Architecture)": 49,
            "虚拟化技术与资源管理平台 (Virtualization Technology and Resource Management Platform)": 54,
            "基于人工智能的自动化运维系统 (AI-Based Automated Operations and Maintenance System)": 59,
            "面向服务的架构设计原则 (Service-Oriented Architecture Design Principles)": 64,
            "实时数据同步与缓存机制 (Real-Time Data Synchronization and Caching Mechanism)": 69,
            "多层次网络安全防护体系 (Multi-Layer Network Security Protection System)": 74,
            "分布式存储系统容错机制 (Distributed Storage System Fault Tolerance Mechanism)": 79,
            "深度强化学习算法优化 (Deep Reinforcement Learning Algorithm Optimization)": 84,
            "量子计算与量子通信技术 (Quantum Computing and Quantum Communication Technology)": 89,
            "大规模并行处理计算平台 (Large-Scale Parallel Processing Computing Platform)": 94,
            "自然语言处理 (Natural Language Processing)": 99,
        },
        {
            Month: "Jun",
            "卷积神经网络 (Convolutional Neural Network)": 9,
            "深度学习神经网络模型 (Deep Learning Neural Network Model)": 14,
            "分布式计算资源调度系统 (Distributed Computing Resource Scheduling System)": 20,
            "自然语言处理与理解技术 (Natural Language Processing and Understanding Tech)": 25,
            "大数据实时流处理平台 (Big Data Real-Time Stream Processing Platform)": 30,
            "区块链去中心化应用开发 (Blockchain Decentralized Application Development)": 35,
            "云服务弹性扩展管理机制 (Cloud Service Elastic Scaling Management Mechanism)": 40,
            "网络数据包捕获与分析工具 (Network Packet Capture and Analysis Tools)": 45,
            "高性能图形处理单元架构 (High-Performance Graphics Processing Unit Architecture)": 50,
            "虚拟化技术与资源管理平台 (Virtualization Technology and Resource Management Platform)": 55,
            "基于人工智能的自动化运维系统 (AI-Based Automated Operations and Maintenance System)": 60,
            "面向服务的架构设计原则 (Service-Oriented Architecture Design Principles)": 65,
            "实时数据同步与缓存机制 (Real-Time Data Synchronization and Caching Mechanism)": 70,
            "多层次网络安全防护体系 (Multi-Layer Network Security Protection System)": 75,
            "分布式存储系统容错机制 (Distributed Storage System Fault Tolerance Mechanism)": 80,
            "深度强化学习算法优化 (Deep Reinforcement Learning Algorithm Optimization)": 85,
            "量子计算与量子通信技术 (Quantum Computing and Quantum Communication Technology)": 90,
            "大规模并行处理计算平台 (Large-Scale Parallel Processing Computing Platform)": 95,
            "自然语言处理 (Natural Language Processing)": 100,
        },
        {
            Month: "Jul",
            "卷积神经网络 (Convolutional Neural Network)": 8,
            "深度学习神经网络模型 (Deep Learning Neural Network Model)": 13,
            "分布式计算资源调度系统 (Distributed Computing Resource Scheduling System)": 18,
            "自然语言处理与理解技术 (Natural Language Processing and Understanding Tech)": 23,
            "大数据实时流处理平台 (Big Data Real-Time Stream Processing Platform)": 28,
            "区块链去中心化应用开发 (Blockchain Decentralized Application Development)": 33,
            "云服务弹性扩展管理机制 (Cloud Service Elastic Scaling Management Mechanism)": 38,
            "网络数据包捕获与分析工具 (Network Packet Capture and Analysis Tools)": 43,
            "高性能图形处理单元架构 (High-Performance Graphics Processing Unit Architecture)": 48,
            "虚拟化技术与资源管理平台 (Virtualization Technology and Resource Management Platform)": 53,
            "基于人工智能的自动化运维系统 (AI-Based Automated Operations and Maintenance System)": 58,
            "面向服务的架构设计原则 (Service-Oriented Architecture Design Principles)": 63,
            "实时数据同步与缓存机制 (Real-Time Data Synchronization and Caching Mechanism)": 68,
            "多层次网络安全防护体系 (Multi-Layer Network Security Protection System)": 73,
            "分布式存储系统容错机制 (Distributed Storage System Fault Tolerance Mechanism)": 78,
            "深度强化学习算法优化 (Deep Reinforcement Learning Algorithm Optimization)": 83,
            "量子计算与量子通信技术 (Quantum Computing and Quantum Communication Technology)": 88,
            "大规模并行处理计算平台 (Large-Scale Parallel Processing Computing Platform)": 93,
            "自然语言处理 (Natural Language Processing)": 98,
        },
    ],
    xAxis: {
        key: "Month",
        name: "月",
    },
    yAxis: {
        name: "热度",
    },
    tooltip: {
        textStyle: {
            fontSize: 12, // 字体大小
        },
    },
    theme: "hdesign-light",
    smooth: true,
};

export default {
    name: "ListLegend",
    data() {
        return {
            value: 0,
            currentTheme: localStorage.getItem("chartTheme") || "hdesign-light",
        };
    },
    created() {
        this.airportIntegrateChart = new IntegrateChart();
    },
    mounted() {
        this.renderChart();
        // // 检测主题变换
        this.$bus.on("themeChange", (val) => {
            this.airportIntegrateChart.setSimpleOption("LineChart", chartData, {});
            this.airportIntegrateChart.render();
            Theme.setDefaultTheme(val);
            this.airportIntegrateChart.changeTheme();
        });
    },
    methods: {
        renderChart() {
            this.airportIntegrateChart.init(this.$refs.airportChartContainer);
            this.airportIntegrateChart.setSimpleOption("LineChart", chartData, {});
            this.airportIntegrateChart.render();
        },
    },
};
```
