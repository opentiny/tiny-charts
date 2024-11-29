<template>
	<MarkdownPage mdName="CircleQuickUse" class="markdown-layout"></MarkdownPage>
	<CircleLayout :option="option"></CircleLayout>
	<MarkdownPage mdName="CircleConfiguration"></MarkdownPage>
	<MarkdownPage mdName="CircleCenter"></MarkdownPage>
	<div class="doc-playground">
		<div class="doc-split-pane">
				<div class="doc-editor">
						<div class="title">设置</div>
						<div class="control">
								<div class="control-item">
										<div class="label" title="center坐标X">center坐标X</div>
										<div class="slider">
												<tiny-slider v-model="centerOption.centerX" :min="400" :max="600"></tiny-slider>
												<div class="num">{{ centerOption.centerX }}</div>
										</div>
										
								</div>
								<div class="control-item">
										<div class="label" title="center坐标Y">center坐标Y</div>
										<div class="slider">
												<tiny-slider v-model="centerOption.centerY" :min="80" :max="120"></tiny-slider>
												<div class="num">{{ centerOption.centerY }}</div>
										</div>
								</div>
								<div class="control-item">
										<div class="label" title="radius">radius</div>
										<div class="slider">
												<tiny-slider v-model="centerOption.radius" :min="50" :max="150"></tiny-slider>
												<div class="num">{{ centerOption.radius }}</div>
										</div>
								</div>
								<div class="control-item between">
										<div class="label" title="clockwise">clockwise</div>
										<div class="swith">
												<tiny-switch v-model="centerOption.clockwise"></tiny-switch>
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

	<MarkdownPage mdName="CircleAngle"></MarkdownPage>
	<div class="doc-playground">
			<div class="doc-split-pane">
					<div class="doc-editor">
							<div class="title">设置</div>
							<div class="control">
								<div class="control-item">
											<div class="label" title="startAngle">startAngle</div>
											<div class="slider">
													<tiny-slider v-model="angleOption.startAngle" :min="0" :max="6.3" step="0.1"></tiny-slider>
													<div class="num">{{ angleOption.startAngle }}</div>
											</div>
									</div>
							</div>
					</div>
					<div class="doc-split-pane-right">
							<div id="doc-chart-container" class="doc-chart-container" ref="chartRef"
									:style="{ backgroundColor: backGroundColor }">
									<CircleLayout :option="angleOption"></CircleLayout>
							</div>
					</div>
			</div>
	</div>
	<MarkdownPage mdName="CircleRadius"></MarkdownPage>
	<div class="doc-playground">
				<div class="doc-split-pane">
						<div class="doc-editor">
								<div class="title">设置</div>
								<div class="control">
									<div class="control-item">
												<div class="label" title="startRadius">startRadius</div>
												<div class="slider">
														<tiny-slider v-model="radiusOption.startRadius" :min="10" :max="50" step="1"></tiny-slider>
														<div class="num">{{ radiusOption.startRadius }}</div>
												</div>
										</div>
										<div class="control-item">
												<div class="label" title="endRadius">endRadius</div>
												<div class="slider">
														<tiny-slider v-model="radiusOption.endRadius" :min="80" :max="120" step="1"></tiny-slider>
														<div class="num">{{ radiusOption.endRadius }}</div>
												</div>
										</div>
								</div>
						</div>
						<div class="doc-split-pane-right">
								<div id="doc-chart-container" class="doc-chart-container" ref="chartRef"
										:style="{ backgroundColor: backGroundColor }">
										<CircleLayout :option="radiusOption"></CircleLayout>
								</div>
						</div>
				</div>
	</div>
	<MarkdownPage mdName="CircleDivisions"></MarkdownPage>
	<div class="doc-playground">
				<div class="doc-split-pane">
						<div class="doc-editor">
								<div class="title">设置</div>
								<div class="control">
									<div class="control-item between">
										<div class="label" title="divisions">divisions</div>
										<div class="numeric">
											<tiny-numeric v-model="divisionsOption.divisions" :step="1" :min="1" :max="5"></tiny-numeric>
										</div>
									</div>
								</div>
						</div>
						<div class="doc-split-pane-right">
								<div id="doc-chart-container" class="doc-chart-container" ref="chartRef"
										:style="{ backgroundColor: backGroundColor }">
										<CircleLayout :option="divisionsOption"></CircleLayout>
								</div>
						</div>
				</div>
	</div>
	<MarkdownPage mdName="CircleOrdering" class="markdown-layout"></MarkdownPage>
	<div class="doc-playground">
				<div class="doc-split-pane">
						<div class="doc-editor">
								<div class="title">设置</div>
								<div class="control">
										<div class="control-item normal">
												<div class="label" title="ordering">ordering</div>
												<div class="radio circle">
														<tiny-radio v-model="orderingOption.ordering" label="">null</tiny-radio>
														<tiny-radio v-model="orderingOption.ordering" label="topology">topology</tiny-radio>
														<tiny-radio v-model="orderingOption.ordering" label="degree">degree</tiny-radio>
												</div>
										</div>
								</div>
						</div>
						<div class="doc-split-pane-right">
								<div id="doc-chart-container" class="doc-chart-container" ref="chartRef"
										:style="{ backgroundColor: backGroundColor }">
										<CircleLayout :option="orderingOption"></CircleLayout>
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
	centerY: 100,
	radius: 100,
	clockwise: true,
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