<template>
  <div class="app-container">
    <playground></playground>
  </div>
</template>

<script>
import playground from './playground/playground-page.vue';
export default {
  name: 'main-playground',
  components:{
    playground
  }
};
</script>

<style lang="less">
@import './style/main/index.less';
</style>
