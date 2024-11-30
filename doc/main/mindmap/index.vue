<template>

  <MarkdownPage mdName="MindmapQuickUse" class="markdown-layout"></MarkdownPage>
  <MindmapLayout :option="options" class="chart-container"></MindmapLayout>
	<MarkdownPage mdName="MindmapBegin"></MarkdownPage>
  <div class="doc-playground">
		<div class="doc-split-pane">
			<div class="doc-editor">
				<div class="title">设置</div>
				<div class="control">
					<div class="control-item">
						<div class="label" title="direction">direction</div>
						<div class="slider">
							<tiny-select v-model="layoutoption.direction">
                <tiny-option v-for="item in directionTypes" :key="item.value" :label="item.label" :value="item.value">
                </tiny-option>
              </tiny-select>
						</div>
						
					</div>
					<div class="control-item">
						<div class="label" title="hGap">hGap</div>
						<div class="slider">
							<tiny-slider v-model="layoutoption.hGap" :min="20" :max="200"></tiny-slider>
							<div class="num">{{ layoutoption.hGap }}</div>
						</div>
					</div>
					<div class="control-item">
						<div class="label" title="width">vGap</div>
						<div class="slider">
							<tiny-slider v-model="layoutoption.vGap" :min="20" :max="200"></tiny-slider>
							<div class="num">{{ layoutoption.vGap }}</div>
						</div>
					</div>
					<div class="control-item normal" v-if="layoutoption.direction == 'V' || layoutoption.direction == 'H'">
						<div class="label" title="sortBy">oneSide</div>
						<div class="radio">
							<tiny-radio v-model="layoutoption.oneSideString" label="researchDept">研发部</tiny-radio>
    					<tiny-radio v-model="layoutoption.oneSideString" label="designDept">设计部</tiny-radio>
						</div>
				</div>
				</div>
			</div>
			<div class="doc-split-pane-right">
				<div id="doc-chart-container" class="doc-chart-container" ref="chartRef"
					:style="{ backgroundColor: backGroundColor }">
					<MindmapLayout :option="options" :layoutoption="layoutoption"></MindmapLayout>
				</div>
			</div>
		</div>
	</div>


</template>

<script>
import MarkdownPage from '../example/components/markdown.vue';
import MindmapLayout from './components/vueNode.vue';
import { Slider, Switch, Radio, Numeric, Select, Option, } from '@opentiny/vue'
const options = {
  theme: 'hdesign-light',
  layout: {
    type: 'mindmap',
    direction: 'LR',
		nodeShape: 'rect',
		oneSide:['designDept'],
    vGap: 40,
    hGap: 100
  },
  node: {
    width: 200,
    height: 80,
  },
  line: {
    type: 'Bezier',
  },
  canvas: {
    show: true,
    scaleAllow:false,
    grid: {
      size: 20,
      show: true,
      type: 'dot', //dot mesh doubleMesh
      config: {
        color: '#aaaaaa', // 颜色
        unitSize: 1, // 宽度
      }
    }
  },
  connector: {
    startSharing: 'merge', // 均分方式 merge sharing  strict
    endSharing: 'merge',
    type: 'expand',
  },
  // 图表数据
  data: {
    id: 'root',
    text: '产品研发中心',
    peopleNum: 100,
    children: [
    {
        id: 'researchDept',
        text: '研发部',
        peopleNum: 20,
      },
      {
        id: 'designDept',
        text: '设计部',
        peopleNum: 60
      }
    ]
  }
};

export default {
  name: 'Card',
  components: {
    MarkdownPage,
    MindmapLayout,
		TinySlider: Slider,
		TinySwitch: Switch,
		TinyRadio: Radio,
		TinyNumeric: Numeric,
		TinySelect: Select,
    TinyOption: Option,
},
  data() {
    return {
				chartCode: [],
				options:options,
        chartData: ['CardChart'],
        activeName: 'DEMO',
        theme: localStorage.getItem('chartTheme') || 'hdesign-light',
        directionTypes: [{
          value: 'LR',
          label: 'LR--由左到右布局'
        },{
          value: 'RL',
          label: 'RL--由右到左布局'
        },{
          value: 'TB',
          label: 'TB--由上到下布局'
        },{
          value: 'BT',
          label: 'BT--由下到上布局'
        },{
          value: 'H',
          label: 'H--左右布局'
        },{
          value: 'V',
          label: 'V--上下布局'
        }],
				layoutoption: {
					direction: 'LR',
					vGap: 40,
					hGap: 100,
					oneSide: ['designDept'],
					oneSideString:'designDept'
				},
				backGroundColor:''
    }
   
  },
	watch: {
   
  },
  mounted() {
    this.chartData.forEach((item, index) => {
      this.axios.get(`quick_start/${item}.md`).then(res => {
        this.chartCode[index] = res.data.replaceAll("{{VITE_BASECOPYRIGHTSPAT}}", import.meta.env.VITE_BASECOPYRIGHTSPAT);
      })
    })
    this.setTheme(this.theme?.indexOf('light') > -1);
    this.$bus.on('themeChange', (val) => {
      this.setTheme(val.indexOf('light') > -1)
    })

		this.backGroundColor = this.theme.toLowerCase().includes('light') ? '#ffffff' : '#191919';


  },
  watch: {
    theme: function (newVal) {
      this.setTheme(newVal.indexOf('light') > -1)
    },
		
  },
  methods: {
		
    setTheme(val) {
      this.tabsBtnACtiveBg = val ? '#ffffff' : '#1c1c1c';
      this.tabsBtnACtiveColor = val ? '#000' : '#f1f0f0';
      this.tabsBtnBg = val ? '#f2f2f2' : '#414141';
      this.tabsBtnColor = val ? '#777777' : '#c9c3c5';
    },
  }
}
</script>
<style lang="less" scoped>

.chart-container{
	border: 1px solid var(--ti-base-color-common-1);
}
.doc-playground .doc-split-pane .doc-editor .control-item.normal{
.radio{
	display: flex;
}
}
</style>