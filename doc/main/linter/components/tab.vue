<template>
  <div class="card-tab">
    <div
    class="card-item" 
    :class="{ 'active': index === active}" 
    v-for="(item,index) in option" 
    :key="item"
    @click="onclick(index)"
    >{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    value: Number,
    type: String,
    option:Array
  },
  emits: ['updatatype'],
  data() {
    return {
      active:0
    }
  },
  created() {
    this.active = this.value;
  },
  methods: {
    onclick(val) {
      this.active = val;
      this.$emit('updatatype', val === 0 ? '' : this.option[val], this.type);
    }
  }
}
</script>

<style>
  .card-tab{
    display: flex;
    margin: 0 10px;
    position: relative;
    border-radius: 4px;
    background: rgba(25, 25, 25, 0.05);
    color: #777777;
    padding: 2px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .card-item{
    color: #0067D1;
    border-radius: 4px;
    padding: 3px 16px;
    font-size: 12px;
    line-height: 18px;
    cursor: pointer !important;
  }
  .card-item.active{
    background-color: #fff;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.08);
  }
</style>