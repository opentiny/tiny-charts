<template>

  <MarkdownPage mdName="ConnectorQuickUse" class="markdown-layout"></MarkdownPage>
  <div class="doc-playground">
    <div class="doc-split-pane">
      <div class="doc-editor">
        <div class="title">设置</div>
        <div class="control">
          <div class="control-item">
            <div class="label"  title="type">节点形状</div>
            <div class="slider">
              <tiny-select v-model="option.nodeType">
                <tiny-option v-for="item in option.nodeTypes" :key="item" :label="item" :value="item">
                </tiny-option>
              </tiny-select>
            </div>
          </div>
					<div class="control-item between">
						<div class="label" title="show">连接点显示</div>
						<div class="swith">
							<tiny-switch v-model="option.show"></tiny-switch>
						</div>
					</div>
          <div class="control-item">
            <div class="label"  title="type">连接点类型</div>
            <div class="slider">
              <tiny-select v-model="option.types">
                <tiny-option v-for="item in option.connectotTypes" :key="item" :label="item" :value="item">
                </tiny-option>
              </tiny-select>
            </div>
          </div>
          <div class="control-item">
            <div class="label"  title="startSharing">起始连接点均分类型(只在rect节点起用)</div>
            <div class="slider">
              <tiny-select v-model="option.startSharing">
                <tiny-option v-for="item in option.startSharings" :key="item" :label="item" :value="item">
                </tiny-option>
              </tiny-select>
            </div>
          </div>
					<div class="control-item between">
						<div class="label" title="centerCircle">连接点位于圆心(只在circle节点起用)</div>
						<div class="swith">
							<tiny-switch v-model="option.centerCircle"></tiny-switch>
						</div>
					</div>
        </div>
      </div>
      <div class="doc-split-pane-right">
        <div id="doc-chart-container" class="doc-chart-container" ref="chartRef">
          <Connector :option="option"></Connector>
        </div>
      </div>
    </div>
  </div>
	<MarkdownPage mdName="ConnectorUse" class="markdown-layout"></MarkdownPage>

</template>

<script>
import MarkdownPage from '../example/components/markdown.vue';
import Connector from './components/connector.vue';
import { Slider, Select, Option, Button, ColorPicker, Switch} from '@opentiny/vue'

const option = {
    width: 6,
    height: 6,
    color: '#fff',
    show: true,
    types: 'dot',
    connectotTypes: ['dot','expand'],
		startSharings:['merge','sharing','strict'],
		startSharing: 'merge',
		nodeTypes: ['rect','circle'],
		nodeType:'rect',
		centerCircle: false,
		type: 'default'
};

export default {
  name: 'Card',
  components: {
    MarkdownPage,
    Connector,
    TinySlider: Slider,
    TinySelect: Select,
    TinyOption: Option,
    TinyButton: Button,
    TinyColorPicker: ColorPicker,
		TinySwitch: Switch
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
        option: option,
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
    onConfirm1(value){
      this.option.color = value;
    },
  }
}
</script>
<style lang="less">

.chart-container{
    .circle {
        .cards{
            border-radius: 50%;
        }
    }
}
</style>