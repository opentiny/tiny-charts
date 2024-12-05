<template>
  <div class="github-markdown-body">
    <h1 class="title">开始使用</h1>
    <p class="desc">当前关系图引擎，包括<a @click="pathUpdata('/MindmapChart')">思维导图</a>、<a @click="pathUpdata('/GridChart')">网格图</a>、<a @click="pathUpdata('/CircleChart')">环形图</a>、<a @click="pathUpdata('/LinearArcChart')">线形弧线图</a>、<a @click="pathUpdata('/CircleArcChart')">圆形弧线图</a>、<a @click="pathUpdata('/CustomizeChart')">自定义布局图</a>。</p>
    <MarkdownPage mdName="FrameworkLifeCycle" class="markdown-layout"></MarkdownPage>
    <p class="desc" v-show="showlink">当您需要局部刷新节点数据或连线数据时可参考<a @click="pathUpdata('/NodeManager')">节点数据刷新</a>或者<a @click="pathUpdata('/LineOption')">连线数据刷新</a>。  </p>
    <MarkdownPage mdName="FrameworkLifeCycleEvents"></MarkdownPage>
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
		pathUpdata(path) {
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