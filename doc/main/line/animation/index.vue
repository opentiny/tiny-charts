<template>
  <MarkdownPage mdName="LineAnimationTitle"></MarkdownPage>
  <div class="doc-playground">
    <div class="doc-split-pane">
      <div class="doc-editor">
        <div class="title">Settings</div>
        <div class="control">
          <div class="control-item">
            <div class="label">动效类型</div>
            <div class="slider">
              <tiny-select v-model="option.animation">
                <tiny-option v-for="item in animationTypes" :key="item" :label="item" :value="item">
                </tiny-option>
              </tiny-select>
            </div>
          </div>
        </div>
      </div>
      <div class="doc-split-pane-right">
        <div id="doc-chart-container" class="doc-chart-container" ref="chartRef">
          <lineAnimation :datas="option"></lineAnimation>
        </div>
      </div>
    </div>
  </div>
  <MarkdownPage mdName="LineAnimationContent" class="markdown-layout"></MarkdownPage>
</template>

<script>
import MarkdownPage from '../../example/components/markdown.vue';
import lineAnimation from './components/lineAnimation.vue';
import { Slider, Select, Option, Button, ColorPicker } from '@opentiny/vue'

export default {
  name: 'DragManager',
  components: {
    MarkdownPage,
    lineAnimation,
    TinySlider: Slider,
    TinySelect: Select,
    TinyOption: Option,
    TinyButton: Button,
    TinyColorPicker: ColorPicker
  },
  data() {
    return {
      option: {
        animation: 'grow',
        line: {
          type: 'Direct',
          style: {
            width: 1,
            color: '#c2c2c2',
            mode: 'solid',
            active: {
              color: 'red',
              width: 2,
            },
            disable: {
              color: 'blue',
            },
          },
          endMarker: {
            size: 8,
            type: 'classic',
            color: '#c2c2c2'
          },
          onHover: (dom) => {
            // console.log('onHover----',dom)
          },
          onClick: (dom) => {
            // console.log('onClick----',dom)
          },
        }
      },
      animationTypes: ['grow', 'dash', 'streamer'],
    }
  },
}
</script>
