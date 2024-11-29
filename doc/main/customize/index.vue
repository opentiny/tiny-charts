<template>
	<MarkdownPage mdName="CustomizeQuickUse" class="markdown-layout"></MarkdownPage>
	<CustomizeLayout :option="option"></CustomizeLayout>
	<MarkdownPage mdName="CustomizeQuickUseTwo" class="markdown-layout"></MarkdownPage>
	<CustomizeLayout :option="funOption"></CustomizeLayout>
	<MarkdownPage mdName="CustomizeArcConfiguration"></MarkdownPage>
</template>
  
<script>
import MarkdownPage from '../example/components/markdown.vue';
import CustomizeLayout from './components/customize-layout.vue';
import { Slider, Switch, Radio, Numeric } from '@opentiny/vue'

const funOption = {
	type: 'function'
};




export default {
	name: 'Card',
	components: {
		MarkdownPage,
		CustomizeLayout,
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
			funOption: funOption,
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