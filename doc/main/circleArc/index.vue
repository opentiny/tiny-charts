<template>
	<MarkdownPage mdName="CircleArcQuickUse" class="markdown-layout"></MarkdownPage>
	<CircleLayout :option="option"></CircleLayout>
	<MarkdownPage mdName="CircleArcConfiguration"></MarkdownPage>
	<MarkdownPage mdName="CircleArcCenter"></MarkdownPage>
	<div class="doc-playground">
		<div class="doc-split-pane">
				<div class="doc-editor">
						<div class="title">设置</div>
						<div class="control">
								<div class="control-item">
										<div class="label" title="center坐标X">center坐标X</div>
										<div class="slider">
												<tiny-slider v-model="centerOption.centerX" :min="300" :max="700"></tiny-slider>
												<div class="num">{{ centerOption.centerX }}</div>
										</div>
										
								</div>
								<div class="control-item">
										<div class="label" title="center坐标Y">center坐标Y</div>
										<div class="slider">
												<tiny-slider v-model="centerOption.centerY" :min="90" :max="130"></tiny-slider>
												<div class="num">{{ centerOption.centerY }}</div>
										</div>
								</div>
								<div class="control-item">
										<div class="label" title="radius">radius</div>
										<div class="slider">
												<tiny-slider v-model="centerOption.radius" :min="60" :max="120"></tiny-slider>
												<div class="num">{{ centerOption.radius }}</div>
										</div>
								</div>
								<div class="control-item">
										<div class="label" title="radian">radian</div>
										<div class="slider">
												<tiny-slider v-model="centerOption.radian" :min="200" :max="400"></tiny-slider>
												<div class="num">{{ centerOption.radian }}</div>
										</div>
								</div>
						</div>
				</div>
				<div class="doc-split-pane-right">
						<div id="doc-chart-container" class="doc-chart-container" ref="chartRef"
								:style="{ backgroundColor: backGroundColor }">
								<CircleLayout :option="centerOption"></CircleLayout>
						</div>
				</div>
		</div>
	</div>
</template>
  
<script>
import MarkdownPage from '../example/components/markdown.vue';
import CircleLayout from './components/circle-layout.vue';
import { Slider, Switch, Radio, Numeric } from '@opentiny/vue'

const centerOption = {
	centerX: 500,
	centerY: 110,
	radius: 90,
	radian: 300,
	type: 'center'
};
const angleOption = {
	startAngle: 0,
	endAngle: 2 * Math.PI,
	type: 'angle'
}
const radiusOption = {
	startRadius: 30,
	endRadius: 100,
	type: 'radius'
}
const divisionsOption = {
	divisions: 3,
	type: 'divisions'
}

const orderingOption = {
	ordering: 'degree',
	type: 'ordering',
}


export default {
	name: 'Card',
	components: {
		MarkdownPage,
		CircleLayout,
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
			centerOption: centerOption,
			angleOption: angleOption,
			radiusOption: radiusOption,
			divisionsOption: divisionsOption,
			orderingOption: orderingOption,
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