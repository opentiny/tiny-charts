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
  <div class="side-bar-wrap">
    <div class="page-info-box">
      <p class="title">
        Opentiny-Charts
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
          <span v-if="slotScope.data.update" class="update-tag">updated</span>
    </template>
      </tiny-tree-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-bar',
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
  data() {
    return {
      expandeArr: [],
      highlight: ''
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
  watch: {
    $route: {
      handler(router) {
        const activeMenu = router.path;
        this.expandeArr.push(activeMenu);
        this.highlight = activeMenu;
      },
      immediate: true
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
  :deep(.tiny-tree-menu){
    width: var(--panel-width);
  }

  :deep(.tiny-input) {
    position: fixed;
    z-index: 10;
    top: 5rem;
    left: 0;
    width: var(--panel-width);
    padding-left: 10px;
    .tiny-input__prefix{
      left:20px;
    }
  }

  .tiny-tree-menu:before {
    border-right: none;
  }
}
.update-tag{
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
}
</style>
