<template>
    <div class="github-markdown-body">
      <MarkdownPage mdName="QuickStart" class="markdown-layout"></MarkdownPage>
      <p class="desc">以下为基础图表使用案例，告诫图表参考 [ <a @click="pathUpdate('/HighOrder')">解决方案</a> ] </p>
      <MarkdownPage mdName="QuickStartOther" class="markdown-layout"></MarkdownPage>
    </div>
  </template>
  
  <script>
  import MarkdownPage from '../example/components/markdown.vue';
  
  
  export default {
    name: 'Card',
    components: {
      MarkdownPage,
  },
    data() {
      return {
        showlink: false
      }
     
    },
      watch: {
     
    },
    mounted() {
      setTimeout(()=>{
        this.showlink = true
      },300)
    },
    
    methods: {
      pathUpdate(path) {
          window.parent.postMessage({ newMenuPath: path })
      }
    }
  }
  </script>
  <style lang="less" scoped>
  .title{
    font-size: 28px;
  }
  .desc{
    font-size: 14px;
    line-height: 24px;
    a{
      color: #007dff;
      text-decoration: none;
      &:hover,&:active{
        text-decoration: underline;
      }
    }
  }
  </style>