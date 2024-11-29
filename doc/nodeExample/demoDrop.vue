<template>
  <div id="mindmap-card">
    <div class="mindmap-top" :style="{ backgroundColor: dynamicBackgroundColor }">
      <p>{{ info.text }}</p>
    </div>
    <div class="mindmap-middle">
      <div class="mindmap-info" v-html="currentInfo"></div>
      <div class="mindmap-dropdown">
        <tiny-dropdown @item-click="handleClick" :value="selectedKey">
          <span>更多</span>
          <template #dropdown>
            <tiny-dropdown-menu>
              <tiny-dropdown-item v-for="(value, key) in info.more" :key="key" :value="key" :label=key>
                {{ getLabel(key) }}
              </tiny-dropdown-item>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </div>
    </div>
    <div class="mindmap-bottom">
      <h4>部门人数: {{ info.peopleNum }}人</h4>
      <div class="mindmap-progress-container">
        <tiny-progress class="progress" :stroke-width="8" :percentage="info.peopleNum"
          :format="formatText"></tiny-progress>
      </div>
    </div>
  </div>
</template>

<script  >
import { Dropdown, DropdownMenu, DropdownItem, Progress } from '@opentiny/vue'
export default {
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    TinyProgress: Progress,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      info: {
        id: 'root',
        text: 'UCD中心',
        peopleNum: 20,
        more: {
          introduction: '部门介绍:xx',
          address: '部门地址:xx',
          iphone: '部门电话:xx',
          email: '部门邮箱:xxx',
          contact: '部门联系人:xx'
        },
      },
      selectedKey: 'introduction', // 默认选中第一个选项
    };
  },
  mounted() {
    if (this.data) {
      Object.assign(this.info, this.data);
    }
  },
  computed: {
    dynamicBackgroundColor() {
      if (this.info.id.includes('1')) {
        return '#2070F3';
      } else if (this.info.id.includes('2')) {
        return '#F4840C';
      } else if (this.info.id.includes('3')) {
        return '#09AA71';
      }
      return '#E02128'; // 默认背景颜色
    },
    currentInfo() {
      return this.info.more[this.selectedKey];
    }
  },

  methods: {
    handleClick(value) {
      this.selectedKey = value.vm.label;
    },
    formatText() {
      return `${this.info.peopleNum}/100`
    },
    getLabel(key) {
      const labels = {
        introduction: '部门介绍',
        address: '部门地址',
        iphone: '部门电话',
        email: '部门邮箱',
        contact: '部门联系人'
      };
      return labels[key] || key;
    }
  },
  watch: {
    data:{
      handler: function(newValue, oldValue) {
        Object.assign(this.info, newValue);
      },
      deep:true
    }
  }
}
</script>


<style>
#mindmap-card {
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

.mindmap-middle {
  height: 30%;
  display: flex;
  font-size: 12px;
}

.mindmap-info {
  width: 74%;
  padding: 10px;
  display: flex;
  align-items: center;
}

.mindmap-dropdown {
  width: 26%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mindmap-bottom {
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
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