<template>
  <MdPreview :modelValue="markDownData" class="main-editor"></MdPreview>
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
        if (this.mdName === 'EChartsNative' || this.mdName.indexOf('Chart') === -1) {
          this.axios.get(`quick_start/${this.mdName}.md`).then(res => {
            let data = res.data.replaceAll("{{VITE_BASECOPYRIGHTSPAT}}", import.meta.env.VITE_BASECOPYRIGHTSPAT).replaceAll("{{VITE_BASECOPYRIGHTS}}",import.meta.env.VITE_BASECOPYRIGHTS);
            if (process.env.NODE_ENV === 'production') {
              this.markDownData = data.replaceAll("{{VITE_BASEROUTER}}", import.meta.env.VITE_PUBLISH_URL);
            } else {
              this.markDownData = data.replaceAll("{{VITE_BASEROUTER}}",'');
            }
            
          })
        }
      },
      immediate: true
    }
  }
}
</script>