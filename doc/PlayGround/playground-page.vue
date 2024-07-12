<template>
  <div class="ic-playground" :class="{ 'ic-light': hasLight, 'ic-dark': hasDark }">
    <tiny-button class="ic-playground-run" :style="{ left: left + 'px' }" ref="runRef" @click="runCode()">运行</tiny-button>
    <tiny-popover class="ic-playground-changeContainer" :style="{ left: containerLeft + 'px' }">
      <tiny-layout>
        <tiny-row>
          <tiny-col :span="12">
            <span>容器规格：</span>
            <tiny-radio-group v-model="sizeValue" size="mini" @change="changeContainerSize(sizeValue)">
              <tiny-radio-button label="1">小</tiny-radio-button>
              <tiny-radio-button label="2">中</tiny-radio-button>
              <tiny-radio-button label="3">大</tiny-radio-button>
            </tiny-radio-group>
          </tiny-col>
        </tiny-row>
        <tiny-row class="ic-playground-row">
          <tiny-col :span="12">
            <span>容器大小：</span>
            <tiny-input class="ic-playground-leftInput" v-model="widthValue" placeholder="长(PX)"></tiny-input>
            <span>*</span>
            <tiny-input class="ic-playground-rightInput" v-model="heightValue" placeholder="宽(PX)"></tiny-input>
            <tiny-button @click="changeContainer(widthValue, heightValue)">确定</tiny-button>
          </tiny-col>
        </tiny-row>
      </tiny-layout>
      <template #reference>
        <tiny-button class="ic-playground-button">切换容器</tiny-button>
      </template>
    </tiny-popover>

    <div class="ic-split-pane">
      <Editor ref="editorRef" :code="iChartOption" :theme="theme" :chartName="chartName"></Editor>
      <div class="ic-split-pane-right">
        <div id="ic-chart-container" class="ic-chart-container" ref="chartRef"
          :style="{ backgroundColor: backGroundColor }"></div>
      </div>
    </div>

    <tiny-button class="ic-playground-downLoad" :icon="IconDownload" :style="{ left: left + 'px' }" ref="downloadRef"
      @click="downLoadCode()">
      下载示例
    </tiny-button>
    <tiny-button class="ic-playground-screenshot" :icon="IconPicture" :style="{ left: imgLeft + 'px' }"
      @click="takeScreenshot()">
      截图
    </tiny-button>
  </div>
</template>

<script>
import * as d3 from 'd3';
import axios from 'axios';
import 'echarts-wordcloud';
import '../../src/index.less';
//import 'echarts-extension-amap';
import * as echarts from 'echarts';
import Editor from './editor-page.vue';
import '../style/playground/index.less';
import IntegrateChart from '../../src/index';
import DragManager from '../../src/feature/drag';
import FlowChart from '../../src/components/FlowChart';
import WaveChart from '../../src/components/WaveChart';
import GanttChart from '../../src/components/GanttChart';
import RiverChart from '../../src/components/RiverChart';
import TerraceChart from '../../src/components/TerraceChart';
import BaiduMapChart from '../../src/components/BaiduMapChart';
import TimelineChart from '../../src/components/TimelineChart';
import {
  IconDownload,
  IconPicture
} from '@opentiny/vue-icon';
import SnowFlakeChart from '../../src/components/SnowFlakeChart';
import HoneycombChart from '../../src/components/HoneycombChart';
import AutonaviMapChart from '../../src/components/AutonaviMapChart';
import OrganizationChart from '../../src/components/OrganizationChart';
import MilestoneChart from '../../src/components/MilestoneChart';
import { Button, Popover, Layout, Row, Col, RadioGroup, RadioButton, Input } from '@opentiny/vue'

let instance;

export default {
  name: 'Playground',
  components: {
    Editor,
    TinyButton: Button,
    TinyPopover: Popover,
    TinyLayout: Layout,
    TinyRow: Row,
    TinyCol: Col,
    TinyRadioGroup: RadioGroup,
    TinyRadioButton: RadioButton,
    TinyInput: Input,
  },
  data() {
    return {
      iChartOption: '',
      theme: '',
      chartName: '',
      searchStr: '',
      chartDocPath: '',
      backGroundColor: '',
      left: 0,
      containerLeft: 0,
      imgLeft: 0,
      screenWidth: null,
      sizeValue: '3',
      widthValue: '',
      heightValue: '',
      IconDownload: IconDownload(),
      IconPicture: IconPicture(),
    };
  },
  watch: {
    screenWidth() {
      this.setResize();
    },
  },

  created() {
    this.integrateChart = new IntegrateChart();
    // 先把值传递给子组件
    this.searchStr = window.location.search;
    // 文档路径名称
    this.chartDocPath = this.searchStr.slice(this.searchStr.search(/=/i) + 1, this.searchStr.search(/&/i));
    // 图表主题
    this.theme = this.searchStr.slice(this.searchStr.search(/theme/i) + 6);
    // 图表名称
    this.chartName = this.chartDocPath.split('-')[0];
    this.hasLight = this.theme.toLowerCase().includes('light');
    this.hasDark = this.theme.toLowerCase().includes('dark');
  },

  mounted() {
    this.setResize();
    let optionPath = `option/${this.chartName}/${this.chartDocPath}.js`;
    if (process.env.NODE_ENV === 'production') {
        optionPath = `${import.meta.env.VITE_PUBLISH_URL}option/${this.chartName}/${this.chartDocPath}.js`;
    }
    axios.get(optionPath).then(response => {
      const option = this.transformCode(response.data);
      this.iChartOption = response.data;
      option.theme = this.theme;
      this.renderChart(option);
    });

    this.backGroundColor = this.theme.toLowerCase().includes('light') ? '#ffffff' : '#191919';
    this.screenWidth = document.body.clientWidth;
    // 监听窗口变化
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
      })();
    };
  },

  methods: {
    // 代码转换
    transformCode(codeString) {
      const codeObj = {
        code: 0
      };
      window.resolve = option => {
        this.renderChart(option);
      };
      window.codeObj = codeObj
      const script = document.createElement('script');
      script.textContent = ` (function () {
                'use strict';
                ${codeString}
                 window.codeObj.code = option || {}
            })();`
      document.body.appendChild(script);
      document.body.removeChild(script);
      return window.codeObj.code;
    },

    // 点击运行
    runCode() {
      const option = this.transformCode(this.$refs.editorRef.getCode());
      if (instance) {
        this.$refs.chartRef.innerHTML = '';
      }
      if (option.theme === undefined) {
        option.theme = this.theme;
      }
      this.renderChart(option);
    },

    // 切换大小容器
    changeContainerSize(sizeValue) {
      switch (sizeValue) {
        case '1':
          this.$refs.chartRef.style.width = '450px';
          this.$refs.chartRef.style.height = '250px';
          break;
        case '2':
          this.$refs.chartRef.style.width = '900px';
          this.$refs.chartRef.style.height = '500px';
          break;
        case '3':
          this.$refs.chartRef.style.width = '100%';
          this.$refs.chartRef.style.height = '100%';
          break;
      }
    },

    // 自定义容器大小尺寸
    changeContainer(widthValue, heightValue) {
      this.$refs.chartRef.style.width = widthValue + 'px';
      this.$refs.chartRef.style.height = heightValue + 'px';
    },

    // 截图
    takeScreenshot() {
      const canvas = document.querySelector('#ic-chart-container>div>canvas');
      const dataUrl = canvas.toDataURL();
      this.downloadFile(dataUrl, this.chartName);
    },

    // 下载示例
    async downLoadCode() {
      let name = `${this.chartName}Option.json`;
      let content = JSON.stringify(this.transformCode(this.$refs.editorRef.getCode()));
      if (typeof name == 'undefined') {
        throw new Error('The first parameter name is a must');
      }
      if (typeof content == 'undefined') {
        throw new Error('The second parameter content is a must');
      }
      if (!(content instanceof Blob)) {
        content = new Blob([content], {
          type: 'text/javascript'
        });
      }
      const link = URL.createObjectURL(content);
      this.downloadFile(link, name);
    },

    // 根据链接下载文件并提供文件名
    downloadFile(link, name) {
      if (!name) {
        // 如果没有提供名字，从给的Link中截取最后一个
        name = link.slice(link.lastIndexOf('/') + 1);
      }
      const eleLink = document.createElement('a');
      eleLink.download = name;
      eleLink.style.display = 'none';
      eleLink.href = link;
      document.body.appendChild(eleLink);
      eleLink.click();
      document.body.removeChild(eleLink);
    },

    // 根据主题切换背景色
    changeBackgroundColor(theme) {
      this.theme = theme;
      this.backGroundColor = this.theme.toLowerCase().includes('light') ? '#ffffff' : '#191919';
    },

    // 按钮位置自适应
    setResize() {
      this.left = this.$refs.chartRef.getBoundingClientRect().left;
      setTimeout(() => {
        this.containerLeft = this.$refs.runRef.$el.getBoundingClientRect().right + 12;
        this.imgLeft = this.$refs.downloadRef.$el.getBoundingClientRect().right + 12;
      });
    },

    // 渲染图表
    renderChart(option) {
      this.changeBackgroundColor(option.theme);
      let chartObj = {
        'FlowChart': FlowChart,
        'AutonaviMapChart': AutonaviMapChart,
        'BaiduMapChart': BaiduMapChart,
        'HoneycombChart': HoneycombChart,
        'OrganizationChart': OrganizationChart,
        'WaveChart': WaveChart,
        'TerraceChart': TerraceChart,
        'TimelineChart': TimelineChart,
        'MilestoneChart': MilestoneChart,
      }
      if(Object.keys(chartObj).includes(this.chartName)){
        this.$refs.chartRef.innerHTML = '';
        this.integrateChart.init(this.$refs.chartRef);
        this.integrateChart.setSimpleOption(chartObj[this.chartName], option, {});
        this.integrateChart.render();
      } else if (this.chartName === 'RiverChart') {
        instance = new RiverChart();
        instance.init(this.$refs.chartRef);
        instance.setOption(option);
      } else if (this.chartName === 'GanttChart') {
        instance = new GanttChart();
        instance.init(this.$refs.chartRef);
        instance.setOption(option);
      } else if (this.chartName === 'SnowFlakeChart') {
        this.$refs.chartRef.innerHTML = '';
        const drag = new DragManager(this.$refs.chartRef);
        this.integrateChart.init(drag.getDragDom());
        this.integrateChart.setSimpleOption(SnowFlakeChart, option, {
          drag
        });
        this.integrateChart.render({
          image5R: './image/device/5gRight.png',
          image5L: './image/device/5gLeft.png',
          image2R: './image/device/2.4gRight.png',
          image2L: './image/device/2.4gLeft.png',
          imageUp: './image/device/up.svg',
          imageDown: './image/device/down.svg',
          wirelessR: './image/device/wirelessR.svg',
          wirelessL: './image/device/wirelessL.svg',
        });
      } else {
        if (!this.integrateChart.dom) {
          this.integrateChart.init(this.$refs.chartRef);
        }
        this.integrateChart.setSimpleOption(this.chartName, option, {
          d3
        });
        // 延迟图表渲染，使页面打开时图表有动画
        setTimeout(() => {
          this.integrateChart.render();
        }, 20);
      }
    },
  },

};
</script>
