<template>

  <MarkdownPage mdName="GridQuickUse" class="markdown-layout"></MarkdownPage>
  <GridLayout :option="option"></GridLayout>
  <MarkdownPage mdName="GridConfiguration"></MarkdownPage>
  <MarkdownPage mdName="GridBegin"></MarkdownPage>
  <div class="doc-playground">
		<div class="doc-split-pane">
			<div class="doc-editor">
				<div class="title">设置</div>
				<div class="control">
					<div class="control-item">
						<div class="label" title="begin坐标X">begin坐标X</div>
						<div class="slider">
							<tiny-slider v-model="beginOption.beginX" :min="-100" :max="100"></tiny-slider>
							<div class="num">{{ beginOption.beginX }}</div>
						</div>
						
					</div>
					<div class="control-item">
						<div class="label" title="begin坐标Y">begin坐标Y</div>
						<div class="slider">
							<tiny-slider v-model="beginOption.beginY" :min="-100" :max="100"></tiny-slider>
							<div class="num">{{ beginOption.beginY }}</div>
						</div>
					</div>
					<div class="control-item">
						<div class="label" title="width">width</div>
						<div class="slider">
							<tiny-slider v-model="beginOption.width" :min="400" :max="600"></tiny-slider>
							<div class="num">{{ beginOption.width }}</div>
						</div>
					</div>
					<div class="control-item">
						<div class="label" title="height">height</div>
						<div class="slider">
							<tiny-slider v-model="beginOption.height" :min="100" :max="300"></tiny-slider>
							<div class="num">{{ beginOption.height }}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="doc-split-pane-right">
				<div id="doc-chart-container" class="doc-chart-container" ref="chartRef"
					:style="{ backgroundColor: backGroundColor }">
					<GridLayout :option="beginOption"></GridLayout>
				</div>
			</div>
		</div>
	</div>

  <MarkdownPage mdName="GridPreventOverlap"></MarkdownPage>
	<div class="doc-playground">
		<div class="doc-split-pane">
			<div class="doc-editor">
				<div class="title">设置</div>
				<div class="control">
					<div class="control-item between">
						<div class="label" title="preventOverlap">preventOverlap</div>
						<div class="swith">
							<tiny-switch v-model="preventOverlapOption.preventOverlap"></tiny-switch>
						</div>
					</div>
					<div class="control-item">
						<div class="label" title="preventOverlapPadding">preventOverlapPadding</div>
						<div class="slider">
							<tiny-slider v-model="preventOverlapOption.preventOverlapPadding" :min="0" :max="50"></tiny-slider>
							<div class="num">{{ preventOverlapOption.preventOverlapPadding }}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="doc-split-pane-right">
				<div id="doc-chart-container" class="doc-chart-container" ref="chartRef"
					:style="{ backgroundColor: backGroundColor }">
					<GridLayout :option="preventOverlapOption"></GridLayout>
				</div>
			</div>
		</div>
	</div>
	<MarkdownPage mdName="GridRows"></MarkdownPage>
  <div class="doc-playground">
		<div class="doc-split-pane">
			<div class="doc-editor">
				<div class="title">设置</div>
				<div class="control">
					<div class="control-item between">
						<div class="label" title="rows">rows</div>
						<div class="numeric">
							<tiny-numeric v-model="rowsOption.rows" :step="1" :min="1" :max="5"></tiny-numeric>
						</div>
					</div>
				</div>
			</div>
			<div class="doc-split-pane-right">
				<div id="doc-chart-container" class="doc-chart-container" ref="chartRef"
					:style="{ backgroundColor: backGroundColor }">
					<GridLayout :option="rowsOption"></GridLayout>
				</div>
			</div>
		</div>
	</div>
	<!-- <MarkdownPage mdName="GridCondense"></MarkdownPage>
  <GridLayout :option="condenseOption"></GridLayout> -->
	<MarkdownPage mdName="GridSortBy" class="markdown-layout"></MarkdownPage>
	<div class="doc-playground">
		<div class="doc-split-pane">
			<div class="doc-editor">
				<div class="title">设置</div>
				<div class="control">
					<div class="control-item normal">
						<div class="label" title="sortBy">sortBy</div>
						<div class="radio">
							<tiny-radio v-model="sortByOption.sortBy" label="">默认</tiny-radio>
    					<tiny-radio v-model="sortByOption.sortBy" label="degreeMany">degreeMany</tiny-radio>
							<tiny-radio v-model="sortByOption.sortBy" label="degreeFew">degreeFew</tiny-radio>
							<tiny-radio v-model="sortByOption.sortBy" label="cluser">自定义</tiny-radio>
						</div>
					</div>
				</div>
			</div>
			<div class="doc-split-pane-right">
				<div id="doc-chart-container" class="doc-chart-container" ref="chartRef"
					:style="{ backgroundColor: backGroundColor }">
					<GridLayout :option="sortByOption"></GridLayout>
				</div>
			</div>
		</div>
	</div>


</template>

<script>
import MarkdownPage from '../example/components/markdown.vue';
import GridLayout from './components/grid-layout.vue';
import { Slider, Switch, Radio, Numeric } from '@opentiny/vue'

const beginOption = {
	beginX: 50,
	beginY: -20,
	width: 500,
	height: 200,
	type: 'begin'
};
const preventOverlapOption = {
	preventOverlap: false,
	preventOverlapPadding: 25,
	type: 'pre'
}
const rowsOption = {
	rows: 2,
	type: 'rows',
	preventOverlap: true,
	preventOverlapPadding: 10,
}
const sortByOption = {
	sortBy: 'cluser',
	type: 'sortBy',
	width: 600
}


export default {
  name: 'Card',
  components: {
    MarkdownPage,
    GridLayout,
		TinySlider: Slider,
		TinySwitch: Switch,
		TinyRadio: Radio,
		TinyNumeric: Numeric
},
  data() {
    return {
        chartCode: [],
        chartData: ['CardChart'],
        activeName: 'DEMO',
        theme: localStorage.getItem('chartTheme') || 'hdesign-light',
        tabsBtnACtiveBg: '#fff',
        tabsBtnACtiveColor: '#000',
        tabsBtnColor: '#595959',
        tabsBtnBg: '#f0f0f0',
        option: {type: 'default'},
        beginOption: beginOption,
				preventOverlapOption: preventOverlapOption,
				rowsOption: rowsOption,
				sortByOption: sortByOption,
				backGroundColor: '',
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


</style>