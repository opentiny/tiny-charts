<template>
	<MarkdownPage mdName="LinearArcQuickUse" class="markdown-layout"></MarkdownPage>
	<GridLayout :option="option"></GridLayout>
	<MarkdownPage mdName="LinearArcConfiguration"></MarkdownPage>
	<MarkdownPage mdName="LinearArcBegin"></MarkdownPage>
	<div class="doc-playground">
		<div class="doc-split-pane">
			<div class="doc-editor">
				<div class="title">设置</div>
				<div class="control">
					<div class="control-item">
						<div class="label" title="begin坐标X">begin坐标X</div>
						<div class="slider">
							<tiny-slider v-model="beginOption.beginX" :min="20" :max="220"></tiny-slider>
							<div class="num">{{ beginOption.beginX }}</div>
						</div>

					</div>
					<div class="control-item">
						<div class="label" title="begin坐标Y">begin坐标Y</div>
						<div class="slider">
							<tiny-slider v-model="beginOption.beginY" :min="60" :max="120"></tiny-slider>
							<div class="num">{{ beginOption.beginY }}</div>
						</div>
					</div>
					<div class="control-item">
						<div class="label" title="width">width</div>
						<div class="slider">
							<tiny-slider v-model="beginOption.width" :min="600" :max="1000"></tiny-slider>
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
</template>

<script>
import MarkdownPage from '../example/components/markdown.vue';
import GridLayout from './components/grid-layout.vue';
import { Slider, Switch, Radio, Numeric } from '@opentiny/vue'

const beginOption = {
	beginX: 120,
	beginY: 90,
	width: 800,
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
			option: { type: 'default' },
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