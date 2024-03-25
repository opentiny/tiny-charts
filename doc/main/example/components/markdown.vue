<template>
  <MdPreview  :modelValue="markDownData" class="main-editor"></MdPreview >
</template>

<script>
export default {
  name: 'MarkdownPage',
  props: {
    mdName: {
      type: String,
      default: 'readme'
    }
  },
  data() {
    return {
      markDownData: ''
    }
  },
  watch: {
    $route: {
      handler() {
        if (this.mdName ==='EChartsNative' || this.mdName.indexOf('Chart') === -1) {
          this.axios.get(`quick_start/${this.mdName}.md`).then(res => {
            this.markDownData = res.data
          })
        }
      },
      immediate: true
    }
  }
}
</script>