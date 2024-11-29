<template>
  <MarkdownPage mdName="Animation"></MarkdownPage>
  <div class='animate-demo'>
    <TinyButton @click="start1">启动</TinyButton>
    <div class="animate-demo-squares" ref="squares1"></div>
  </div>
  <MarkdownPage mdName="AnimationCase1"></MarkdownPage>
  <div class="animate-demo height300">
    <TinyButton @click="start2">启动</TinyButton>
    <div class="animate-demo-squares" ref="squares2"></div>
    <div class="animate-demo-squares top100" ref="squares3"></div>
  </div>
  <MarkdownPage mdName="AnimationCase2"></MarkdownPage>
</template>

<script>
import MarkdownPage from '../../example/components/markdown.vue';
import { Button } from '@opentiny/vue'
import { Animation, AnimationGroup, Easing } from '../../../../src/framework/module/animation'

export default {
  name: 'VueNodes',
  components: {
    MarkdownPage,
    TinyButton: Button
  },
  data() {
    return {
      isDarkTheme:false,
      options1: [
        { value: 'Linear', label: 'Linear: 线性匀速的缓动' },
        { value: 'Quadratic', label: 'Quadratic: 二次方的缓动' },
        { value: 'Cubic', label: 'Cubic: 三次方的缓动' },
        { value: 'Quartic', label: 'Quartic: 四次方的缓动' },
        { value: 'Quintic', label: 'Quintic: 五次方的缓动' },
        { value: 'Sinusoidal', label: 'Sinusoidal: 正弦曲线的缓动' },
        { value: 'Exponential', label: 'Exponential: 指数曲线的缓动' },
        { value: 'Circular', label: 'Circular: 圆形曲线的缓动' },
        { value: 'Elastic', label: 'Elastic: 指数衰减的正弦曲线缓动' },
        { value: 'Back', label: 'Back: 超过范围的三次方的缓动' },
        { value: 'Bounce', label: 'Bounce: 指数衰减的反弹缓动' }
      ],
      options2: [
        { value: 'In', label: 'In: 加速，先慢后快' },
        { value: 'Out', label: 'Out: 减速，先快后慢' },
        { value: 'InOut', label: 'InOut: 前半段加速，后半段减速' }
      ],
      value1: 'Linear',
      value2: 'In',

    }
  },
  methods: {
    start1() {
      let animation = new Animation(this.$refs.squares1, {
        start: {
          left: 10
        },
        end: {
          left: 500
        },
        duration: 1000,
      })
      animation.start();
    },
    start2() {
      let animationGroup = new AnimationGroup();
      animationGroup.add(this.$refs.squares2, {
        start: {
          left: 10
        },
        end: {
          left: 500
        },
        duration: 1000,
      })
      animationGroup.add(this.$refs.squares3, {
        start: {
          left: 500
        },
        end: {
          left: 10
        },
        duration: 1000
      })
      animationGroup.start();
    }
  },
}
</script>

<style lang="less" scoped>
.animate-demo {
  border: 1px solid var(--ti-base-color-common-1);
  position: relative;
  margin-top: 20px;
  width: 100%;
  height: 140px;
  padding: 10px;

  &.height300 {
    height: 260px;
  }

  .animate-demo-squares {
    position: absolute;
    top: 60px;
    width: 50px;
    height: 50px;
    background: #2070f3;

    &.top100 {
      top: 160px;
      left: 500px;
    }
  }
  :deep(.tiny-button){
    background: transparent;
  }
}
</style>