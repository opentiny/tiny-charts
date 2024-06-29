<template>
  <div class="code-container">
    <h4 className='code-header'>
      {{ title }}
    </h4>
    <div className='code-content'>
      <slot></slot>
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