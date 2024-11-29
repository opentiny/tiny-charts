<template>
  <div class="code-container">
    <h4 className='code-header'>
      {{ title }}
    </h4>
    <div className='code-content'>
      <slot></slot>
    </div>
    <div class="code-footer">
      <div class="code-btn-container"  :class="[showOption ? 'expand' : 'close']" @click="btnClick">
        <div class='show-code'>
          <IconChevronUp v-if="!showOption"></IconChevronUp>
          <IconChevronDown v-else></IconChevronDown>查看代码</div>
      </div>
      <v-md-preview class="markdown code-block-box" :text="code" :style="{display: showOption ? 'block' : 'none'}"></v-md-preview >
    </div>
  </div>
</template>

<script>
import { IconChevronUp, IconChevronDown } from '@opentiny/vue-icon'

export default {
  name: 'CodeExample',
  components: {
    IconChevronUp: IconChevronUp(),
    IconChevronDown: IconChevronDown()
  },
  props: {
    code: {
      type: String
    },
    title: {
      type: String
    },
  },
  data(){
    return {
      showOption: false
    }
  },
  methods: {
    btnClick(){
      this.showOption = !this.showOption
    }
  }
}
</script>