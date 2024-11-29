<template>
  <MarkdownPage mdName="AnimationEasing"></MarkdownPage>
  
  <MarkdownPage mdName="AnimationEasingCase"></MarkdownPage>
  <div class="easing-demo">
    <div class="easing-demo-actions">
      <tiny-select v-model="value1">
        <tiny-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" >
        </tiny-option>
      </tiny-select>
      <tiny-select v-model="value2">
        <tiny-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" >
        </tiny-option>
      </tiny-select>
      <TinyButton @click="confirm">启动</TinyButton>
    </div>
    <div class="easing-demo-con">
      <div class="easing-demo-con-squares" ref="squares"></div>
    </div>
  </div>
  <MarkdownPage mdName="AnimationEasingCase2"></MarkdownPage>
</template>

<script>
import MarkdownPage from '../../example/components/markdown.vue';
import { Select, Option, Button } from '@opentiny/vue'
import {Animation, Easing} from '../../../../src/framework/module/animation'

export default {
  name: 'VueNodes',
  components: {
    MarkdownPage,
    TinySelect: Select,
    TinyOption: Option,
    TinyButton: Button
  },
  data(){
    return {
      options1:[
        { value: 'Linear', label: 'Linear: 线性匀速的缓动'},
        { value: 'Quadratic', label: 'Quadratic: 二次方的缓动'},
        { value: 'Cubic', label: 'Cubic: 三次方的缓动'},
        { value: 'Quartic', label: 'Quartic: 四次方的缓动'},
        { value: 'Quintic', label: 'Quintic: 五次方的缓动' },
        { value: 'Sinusoidal', label: 'Sinusoidal: 正弦曲线的缓动'},
        { value: 'Exponential', label: 'Exponential: 指数曲线的缓动'},
        { value: 'Circular', label: 'Circular: 圆形曲线的缓动'},
        { value: 'Elastic', label: 'Elastic: 指数衰减的正弦曲线缓动'},
        { value: 'Back', label: 'Back: 超过范围的三次方的缓动' },
        { value: 'Bounce', label: 'Bounce: 指数衰减的反弹缓动'}
      ],
      options2:[
        { value: 'In', label: 'In: 加速，先慢后快'},
        { value: 'Out', label: 'Out: 减速，先快后慢'},
        { value: 'InOut', label: 'InOut: 前半段加速，后半段减速'}
      ],
      value1: 'Linear',
      value2: 'In',

    }
  },
  methods: {
    confirm() {
      let animation = new Animation(this.$refs.squares, {
        start: {
          left: 0
        },
        end: {
          left: 1000
        },
        duration: 1000,
        easing: Easing[this.value1][this.value2],
    })
    animation.start();
    }
  }
}
</script>

<style lang="less" scoped>

.tiny-select {
  width: 180px;
}
.easing-demo{
  width: 100%;
  height: 120px;
  border: 1px solid var(--ti-base-color-common-1);
  padding: 10px;
  .easing-demo-con{
    position: relative;
    margin-top: 20px;
    width: 100%;
    height: 100px;
    .easing-demo-con-squares{
      position: absolute;
      width: 50px;
      height: 50px;
      background: #2070f3;
    }
  }
}
:deep(.tiny-button){

  background: transparent;
}

</style>