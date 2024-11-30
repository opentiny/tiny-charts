<template>
  <MarkdownPage mdName="LineOptionTitle"></MarkdownPage>
  <div class="doc-playground">
    <div class="doc-split-pane">
      <div class="doc-editor">
        <div class="title">Settings</div>
        <div class="control">
          <div class="control-item">
            <div class="label">连线类型</div>
            <div class="slider">
              <tiny-select v-model="option.line.type">
                <tiny-option v-for="item in lineTypes" :key="item" :label="item" :value="item">
                </tiny-option>
              </tiny-select>
            </div>
          </div>
          <div class="control-item">
            <div class="label">连线宽度</div>
            <div class="slider">
              <tiny-slider v-model="option.line.style.width" :min="1" :max="5"></tiny-slider>
            </div>
            <div class="slider-value">{{ option.line.style.width }}</div>
          </div>
          <div class="control-item" v-if="option.line.type === 'Round'">
            <div class="label">折线弧度</div>
            <div class="slider">
              <tiny-slider v-model="option.line.style.radius" :min="1" :max="10"></tiny-slider>
            </div>
            <div class="slider-value">{{ option.line.style.radius }}</div>
          </div>
          <div class="control-item">
            <div class="label">连线种类</div>
            <div class="slider">
              <tiny-select v-model="option.line.style.mode">
                <tiny-option v-for="item in modeTypes" :key="item" :label="item" :value="item">
                </tiny-option>
              </tiny-select>
            </div>
          </div>
          <div class="control-item">
            <div class="label">连线颜色</div>
            <div class="slider">
              <tiny-color-picker v-model="option.line.style.color" @confirm="onConfirm1" />
            </div>
          </div>
          <!-- <div class="control-item">
            <div class="label">箭头尺寸</div>
            <div class="slider">
              <tiny-slider v-model="option.line.endMarker.size" :min="4" :max="10"></tiny-slider>
            </div>
            <div class="slider-value">{{ option.line.endMarker.size }}</div>
          </div>
          <div class="control-item">
            <div class="label">箭头类型</div>
            <div class="slider">
              <tiny-select v-model="option.line.endMarker.type">
                <tiny-option v-for="item in markerTypes" :key="item" :label="item" :value="item">
                </tiny-option>
              </tiny-select>
            </div>
          </div>
          <div class="control-item">
            <div class="label">箭头颜色</div>
            <div class="slider">
              <tiny-color-picker v-model="option.line.endMarker.color" @confirm="onConfirm2" />
            </div>
          </div> -->
        </div>
      </div>
      <div class="doc-split-pane-right">
        <div id="doc-chart-container" class="doc-chart-container" ref="chartRef">
          <lineOption :datas="option"></lineOption>
        </div>
      </div>
    </div>
  </div>
  <MarkdownPage mdName="LineOptionContent" class="markdown-layout"></MarkdownPage>
</template>

<script>
import MarkdownPage from '../../example/components/markdown.vue';
import lineOption from './components/lineOption.vue';
import { Slider, Select, Option, Button, ColorPicker } from '@opentiny/vue'

export default {
  name: 'DragManager',
  components: {
    MarkdownPage,
    lineOption,
    TinySlider: Slider,
    TinySelect: Select,
    TinyOption: Option,
    TinyButton: Button,
    TinyColorPicker: ColorPicker
  },
  data() {
    return {
      option: {
        line: {
          type: 'Direct',
          style: {
            width:1,
            color:'#c2c2c2',
            mode:'solid',
            active: {
              color: 'red',
              width: 2,
            },
            disable: {
              color: 'blue',
            },
          },
          endMarker:{
            size:8,
            type:'classic',
            color:'#c2c2c2'
          },
          onHover: (dom) => {
            // console.log('onHover----',dom)
          },
          onClick: (dom) => {
            // console.log('onClick----',dom)
          },
        }
      },
      lineTypes:['Round','Direct','Circle','Ellipse','Bezier'],
      modeTypes:['dash','solid'],
      markerTypes:['block','classic','diamond','cross','async','circle'],
    }
  },
  mounted() {

  },
  methods: {
    onConfirm1(value) {
      this.option.line.style.color = value;
    },
    onConfirm2(value) {
      this.option.line.endMarker.color = value;
    }
  }
}
</script>
