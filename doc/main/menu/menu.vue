<template>
  <div class="side-bar-wrap">
    <div class="page-info-box">
      <p class="title">
        {{ title }} HUICharts
      </p>
      <p class="version">
        <span class="version-text">版本号：{{ version.versionNumber }}</span>
        <span class="version-time">更新时间：{{ version.updateTime }}</span>
      </p>
    </div>
    <div class="menu-box">
      <tiny-tree-menu :data="compsData" node-key="path" :filter-node-method="filterNode"
        :default-expanded-keys="expandeArr" :default-expanded-keys-highlight="highlight" @node-click="routerChange"
        accordion>
        <template #default="slotScope">
          {{ slotScope.data.label }}
          <span v-if="slotScope.data.isHigher" class="higher-tag">高阶</span>
        </template>
      </tiny-tree-menu>
    </div>
  </div>
</template>

<script>
import { TreeMenu } from '@opentiny/vue'

export default {
  name: 'side-bar',
  components: {
    TinyTreeMenu: TreeMenu
  },
  props: {
    compsData: {
      type: Array,
      default: () => []
    },
    version: {
      type: Object,
      default: () => { }
    }
  },
  created() {
    this.title = import.meta.env.VITE_BASECOPYRIGHTS;
  },
  data() {
    return {
      expandeArr: [],
      highlight: ''
    }
  },
  
  watch: {
    $route: {
      handler(router) {
        let activeMenu = ''
        if(router.hash) {
          activeMenu = `/${router.hash.split('/')[2]}`
        } else {
          activeMenu = router.path;
        }
        this.expandeArr.push(activeMenu);
        this.highlight = activeMenu;

        // 网站部署添加
        window.parent.postMessage(
          {
            action: 'routechange',
            module: 'hui',
            iframeRoute: activeMenu,
          },
          '*',
        );
      },
      immediate: true
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) {
        return true
      }
      return data.label.toLowerCase().includes(value.toLowerCase())
    },
    routerChange(value) {
      value.path && this.$router.push({
        path: value.path,
        query: this.$route.query
      })

    }
  },
}
</script>

<style scoped lang="less">
.side-bar-wrap {
  border-right: 1px solid var(--ti-base-color-common-1);
}

.page-info-box {
  padding: 1.375rem 1rem 1rem 1.5rem;

  .title {
    display: inline-block;
    font-size: 1rem;
    font-weight: 700;
    color: var(--ti-base-color-common-7);
  }

  .version {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: var(--ti-base-color-common-2);

    .version-text {
      margin-right: 0.5rem;
    }
  }

}

.menu-box {
  width: var(--panel-width);
  height: calc(100% - 5.25rem);
  overflow-y: auto;
  margin-top: 2rem;

  :deep(.tiny-tree-menu) {
    width: var(--panel-width);
  }

  :deep(.tiny-input) {
    position: fixed;
    z-index: 10;
    top: 5rem;
    left: 0;
    width: var(--panel-width);
    padding-left: 10px;

    .tiny-input__prefix {
      left: 20px;
    }
  }

  .tiny-tree-menu:before {
    border-right: none;
  }
}

.update-tag,
.higher-tag {
  border: 1px solid #5990fd;
  background-color: #5990fd;
  color: #fff;
  margin-left: 5px;
  font-weight: 500;
  font-size: 12px;
  padding: 2px 8px;
  line-height: 1.125rem;
  border-radius: 0.75rem;
  display: inline-block;
  cursor: default;
  white-space: nowrap;
}</style>
