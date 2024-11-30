<template>

  <MarkdownPage mdName="Contextmenu" class="contextmenu"></MarkdownPage>
  <div class="ic-playground">
		<div class="ic-split-pane">
			<div class="ic-split-pane-right">
				<div id="ic-chart-container" class="ic-chart-container" ref="chartRef"
					:style="{ backgroundColor: backGroundColor }">
					<Contextmenu></Contextmenu>
				</div>
			</div>
		</div>
	</div>

  <MarkdownPage mdName="ContextmenuConfiguration"></MarkdownPage>
	<div class="ic-playground">
		<div class="ic-split-pane">
			<div class="ic-split-pane-right">
				<div id="ic-chart-container" class="ic-chart-container" ref="chartRef"
				:style="{ backgroundColor: backGroundColor }">
				<ItemRender></ItemRender>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import MarkdownPage from '../example/components/markdown.vue';
import Contextmenu from './components/contextmenu.vue';
import ItemRender from './components/item-render.vue';




export default {
  name: 'Card',
  components: {
    MarkdownPage,
    Contextmenu,
		ItemRender

},
  data() {
    return {
        chartCode: [],
        chartData: ['CardChart'],
        activeName: 'DEMO',
        theme: localStorage.getItem('chartTheme') || 'hdesign-light',
				backGroundColor: '',
    }
   
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
.ic-playground {
	position: relative;
	border: 1px solid var(--ti-base-color-common-1);
	background-color: #f5f5f5;
	.ic-split-pane {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		padding: 30px;

		.ic-split-pane-right {
			height: 100%;
			flex: 1;
			box-shadow: 0 0 10px 1px #e9e9e9;
			.ic-chart-container {
				position: relative;
				height: 100%;
				overflow: hidden;
				border-radius: 4px;
				// border: 1px solid #c6c6c650;
			}
		}
	}
}
:deep(.contextmenu){
	.github-markdown-body pre code {
		max-height: 600px;
	}
}


</style>