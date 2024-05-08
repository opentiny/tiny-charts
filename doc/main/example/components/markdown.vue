<!--
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
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