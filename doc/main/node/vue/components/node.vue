<template>
  <div class="mindmap-card">
    <div class="mindmap-top" :style="{ backgroundColor: dynamicBackgroundColor }">
      <p>{{ data.text }}</p>
    </div>
    <div class="mindmap-con">
      <h4>部门人数: {{ data.peopleNum }}人</h4>
      <div class="mindmap-progress-container">
        <tiny-progress class="progress" :stroke-width="8" :percentage="data.peopleNum"
          :format="formatText"></tiny-progress>
      </div>
    </div>
  </div>
</template>

<script  >
import {  Progress } from '@opentiny/vue'
export default {
  components: {
    TinyProgress: Progress,
  },
  props: {
    data: Object,
  },
  computed: {
    dynamicBackgroundColor() {
      if (this.data.id.includes('root')) {
        return '#2070F3';
      } else if (this.data.id.includes('researchDept')) {
        return '#F4840C';
      } else if (this.data.id.includes('designDept')) {
        return '#09AA71';
      }
      return '#E02128'; // 默认背景颜色
    }
  },
  methods: {
    formatText() {
      return `${this.data.peopleNum}/100`
    }
  }
}
</script>


<style>
.mindmap-card {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  font-family: Arial, sans-serif;
  padding-left: 4px;
  padding-right: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
}

.mindmap-top {
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  margin-left: -16px;
  margin-right: -16px;
  color: white;
}

.mindmap-con {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  margin-top: 10px;
  box-sizing: border-box;
  font-size: 12px;
}

.tiny-progress__text {
  font-size: 12px !important;
  width: 20%
}

.mindmap-progress-container {
  width: 100%;
  margin-top: 4px;
  margin-bottom: 6px;
}

.tiny-progress tiny-progress--line progress {
  width: 80%
}
</style>