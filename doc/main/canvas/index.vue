<template>
  <MarkdownPage mdName="Canvas"></MarkdownPage>
  <div class="doc-playground">
    <div class="doc-split-pane">
      <div class="doc-editor">
        <div class="title">设置</div>
        <div class="control">
          <div class="control-item">
            <div class="label">网格大小</div>
            <div class="slider">
              <tiny-slider v-model="option.gridSize"></tiny-slider>
            </div>
            <div class="slider-value">{{ option.gridSize }}</div>
          </div>
          <div class="control-item">
            <div class="label">网格颜色</div>
            <div class="slider">
              <tiny-color-picker v-model="option.gridColor" size="mini" @confirm="onConfirm1" />

              <!-- <div @click="changeVisible">Show Color select panel</div>
              <div style="position: relative">
                <tiny-color-select-panel v-model="color" :visible="visible" @confirm="hidden" @cancel="hidden" />
              </div> -->
            </div>
          </div>
          <div class="control-item">
            <div class="label">网格粗细</div>
            <div class="slider">
              <tiny-slider v-model="option.thickness" :min="1" :max="8"></tiny-slider>
            </div>
            <div class="slider-value">{{ option.thickness }}</div>
          </div>
          <div class="control-item">
            <div class="label">网格类型</div>
            <div class="slider">
              <tiny-select v-model="option.gridType">
                <tiny-option v-for="item in option.gridTypes" :key="item" :label="item" :value="item">
                </tiny-option>
              </tiny-select>
            </div>
          </div>
          <div class="control-item" v-if="option.gridType === 'doubleMesh'">
            <div class="label" title="二级网格颜色">二级网格颜色</div>
            <div class="slider">
              <tiny-color-picker v-model="option.SecondaryColor" size="mini" @confirm="onConfirm2" />
            </div>
          </div>
          <div class="control-item" v-if="option.gridType === 'doubleMesh'">
            <div class="label" title="二级网格粗细">二级网格粗细</div>
            <div class="slider">
              <tiny-slider v-model="option.SecondaryThickness" :min="1" :max="8"></tiny-slider>
            </div>
            <div class="slider-value">{{ option.SecondaryThickness }}</div>
          </div>
          <div class="control-item" v-if="option.gridType === 'doubleMesh'">
            <div class="label"  title="二级网格间距">二级网格间距</div>
            <div class="slider">
              <tiny-slider v-model="option.factor" :min="1" :max="8"></tiny-slider>
            </div>
            <div class="slider-value">{{ option.factor }}</div>
          </div>
        </div>
      </div>
      <div class="doc-split-pane-right">
        <div id="doc-chart-container" class="doc-chart-container" ref="chartRef">
          <CanvasExample :datas="option"></CanvasExample>
        </div>
      </div>
    </div>
  </div>
  
  <MarkdownPage mdName="CanvasContent"></MarkdownPage>
</template>

<script>
import MarkdownPage from '../example/components/markdown.vue';
import CanvasExample from './components/canvas.vue';
import { Slider, Select, Option, Button, ColorPicker } from '@opentiny/vue'

export default {
  name: 'DragManager',
  components: {
    MarkdownPage,
    CanvasExample,
    TinySlider: Slider,
    TinySelect: Select,
    TinyOption: Option,
    TinyButton: Button,
    TinyColorPicker: ColorPicker
  },
  data(){
    return {
      option: {
        gridSize: 20,
        gridType: 'dot',
        gridTypes: ['dot', 'mesh', 'doubleMesh'],
        gridColor: '#bfbfbf',
        thickness: 1,
        SecondaryColor: '#BFBEBE',
        SecondaryThickness: 2,
        factor: 4,
      }
    }
  },
  mounted(){
    
  },
  methods: {
    onConfirm1(value){
      this.option.gridColor = value;
    },
    onConfirm2(value){
      this.option.SecondaryColor = value;
    }
  }
}
</script>

<style lang="less" scoped>
:deep(.tiny-tabs__header) {
	margin: 20px 0;
}
:deep(.tiny-tabs__item__title) {
  font-size: 14px;
}
:deep(.tiny-tabs__content) {
	margin: 0;
}
.code-container:first-child {
	margin-top: 0;
}
:deep(.tiny-tabs__item-separator-space) {
	padding: 0 !important;
}
.api-title{
  font-size: 20px;
  margin-bottom: 1rem;
  color: var(--ti-base-color-common-7);
}


:deep(.markdown-layout){
	.github-markdown-body pre code {
		max-height: 600px;
	}
}
:deep(.tiny-slider){
  border-radius: 4px;
	background: #f5f5f5;
	height: 8px;
  .tiny-slider__range{
    height: 8px;
    margin-top: 0px;
		background: #1476ff;
		border-radius: 4px;
  }
	.tiny-slider__handle {
		border-radius: 999px;
		width: 24px;
		height: 24px;
		margin: -8px -8px 0;
		background: #fff;
		border: 1px solid #dbdbdb;
		&:hover {
			color: #595959;
			border-color: #1476ff;
			border-width: 2px;
		}
		svg {
			display: none;
		}
	}
	.tiny-slider__tips {
		background: #fff;
		color: #191919;
		border: none;
		box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.16);
		&::before {
			border-color: #fff transparent;
		}
		&::after {
			border-color: #fff transparent;
		}
	}
}
:deep(.tiny-color-picker){
  .tiny-color-select-panel{
    z-index: 11;
  }
}
:deep(.tiny-input){
  --ti-input-small-height:28px;
  --ti-input-border-radius:6px;
}
:deep(.tiny-button){
  --ti-button-size-small-height:28px
}
:deep(.tiny-color-select-panel){
  --ti-color-select-panel-tools-line-height:40px;
  --ti-color-select-panel-btn-margin:6px;
  --ti-color-select-panel-border-radius-xs: 6px;
}
:deep(.tiny-button-group){
  // --ti-button-group-border-color: #595959
}
:deep(.tiny-color-select-panel){
  .tiny-color-select-panel__tools{
    margin-top: 6px;
  }
  .tiny-collapse{
    border-top: 1px solid rgb(240, 240, 240);
    .tiny-collapse-item{
      margin: 3px 0;
      border: none;
      border-bottom: 1px solid rgb(240, 240, 240);
      .tiny-collapse-item__wrap{
        will-change: height;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background: #f5f5f5;
        .tiny-collapse-item__content{
          border: 0;
          padding: 12px;
          font-size: 14px;
          line-height: 1.5;
        }
      }
    }
    .tiny-collapse-item__header{
      padding: 12px 20px;
      height: 40px;
      color: rgb(25, 25, 25);
    }
    .tiny-collapse-item__arrow{
      display: block;
    }
  }
  
  
}
</style>