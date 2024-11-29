<template>
  <div class="line-node">
    {{ data.text }}
  </div>
</template>

<script>
export default {
  name: 'LineNode',
  props: {
    data: Object
  }
}
</script>

<style lang="less" scoped>
.line-node{
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #c2c2c2;
}
</style>