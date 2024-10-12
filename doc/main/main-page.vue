<template>
  <div class="doc-container" :class="{ 'has-header': isHeader}">
    <div id="header"></div>
    <sidebar :comps-data="menuList" :version="version" />
    <div class="doc-content" style="width: 100%">
      <router-view />
    </div>
    <!-- <tiny-dropdown class="theme-wrap" @item-click="itemClick" :show-icon="false">
      <span>切换主题</span>
      <div class="theme-icon" :class="{ dark: isDarkTheme }"></div>
      <template #dropdown>
        <tiny-dropdown-menu :options="themeOptions" popper-class="theme-drop-panel"></tiny-dropdown-menu>
      </template>
    </tiny-dropdown> -->
  </div>
</template>

<script setup>
import {onMounted } from 'vue'
import Sidebar from './menu/menu.vue';
import { useRoute, useRouter } from 'vue-router';
import { THEMES } from '../../src/util/constants';
import { ref, computed, getCurrentInstance, watch } from 'vue';
// import { CUSTOM_DARK_THEME } from './theme/dark-theme.js';
import { NAV_DATA, versionNumber, updateTime } from './menu/menu.js';
// import {
//   Dropdown as TinyDropdown,
//   DropdownMenu as TinyDropdownMenu,
// } from '@opentiny/vue'

const route = useRoute();
const router = useRouter();
const theme = getCurrentInstance().appContext.config.globalProperties.theme;
// 系统颜色主题
const windowTheme = window.matchMedia('(prefers-color-scheme:dark)');

windowTheme.addEventListener('change', () => {
  if (!route.query.theme) {
  
    if (windowTheme.matches) {
      theme.changeTheme();
    } else {
      theme.changeTheme();
    }
  }
});

const isDarkTheme = ref(false);
const isHeader = ref(false);
const themeOptions = ref([
  {
    label: 'H Design1.1图表浅色主题',
    value: THEMES.HDESIGN_LIGHT,
    divided: true,
  },
  {
    label: 'H Design1.1图表深色主题',
    value: THEMES.HDESIGN_DARK,
    divided: true,
  },
  // {
  //   label: 'ICT3.0图表浅色主题',
  //   value: THEMES.LIGHT,
  //   divided: true,
  // },
  // {
  //   label: 'ICT3.0图表深色主题',
  //   value: THEMES.DARK,
  //   divided: true,
  // },
  // {
  //   label: '华为云图表浅色主题',
  //   value: THEMES.CLOUD_LIGHT,
  //   divided: true,
  // },
  // {
  //   label: '质量&流程IT图表浅色主题',
  //   value: THEMES.BPIT_LIGHT,
  //   divided: true,
  // },
  // {
  //   label: '质量&流程IT图表深色主题',
  //   value: THEMES.BPIT_DARK,
  //   divided: true,
  // },
]);

// 切换主题
const itemClick = data => {
  router.push({
    path: route.path,
    query: {
      theme: data.itemData.value,
    },
  });
};

// 组件库版本号信息
const version = ref({
  versionNumber,
  updateTime,
});

// 左侧导航数据
const menuList = computed(() => {
  let menuList = [];
  let menuObj = {};
  NAV_DATA.forEach(item => {
    let menus = [];
    if (item.children) {
      let children = item.children;
      children.forEach(list => {
        menus.push({
          id: list.titleId,
          label: list.title,
          path: `/${list.value}`,
        });
      });
    }
    menuObj = {
      id: item.titleId,
      label: item.title,
    };
    if (item.value) menuObj.path = `/${item.value}`;
    if (item.isHigher) menuObj.isHigher = item.isHigher;
    if (menus.length) menuObj.children = menus;
    menuList.push(menuObj);
  });
  return menuList;
});

onMounted(() => {
    // 加载header
  if (window.TDCommon) {
    const common = new window.TDCommon(['#header'], {
      searchConfig: {
        show: true
      },
    })
    isHeader.value = true;
    common.renderHeader()
  }
})

watch(
  route,
  newVal => {
    if (newVal.query.theme?.toLowerCase().includes('dark')) {
      // 切换为深色模式
      isDarkTheme.value = true;
      theme.changeTheme();
    } else if (newVal.query.theme?.toLocaleLowerCase().includes('light')) {
      isDarkTheme.value = false;
      // 切换为默认模式
      theme.changeTheme('');
    } else if (windowTheme.matches) {
      // 系统深色模式
      isDarkTheme.value = true;
      theme.changeTheme();
    } else {
      isDarkTheme.value = false;
      // 默认正常模式
      theme.changeTheme();
    }
  },
  {
    immediate: true,
  },
);
</script>

<style scoped lang="less">
.doc-container {
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  overflow: hidden;
  height: 100%;
  &.has-header {
    height: calc(100% - 60px);
    margin-top: 60px;
    :deep(.tiny-input) {
      &.tiny-input-prefix {
        top: calc(5rem + 60px);
      }
    }
  }
  .side-bar-wrap {
    position: relative;
    height: 100%;
    padding-bottom: 2.25rem;
    background-color: var(--ti-base-color-white);
  }

  .doc-content {
    overflow-y: overlay;
  }

  .theme-wrap {
    display: block;
    position: fixed;
    font-size: 0;
    bottom: 6rem;
    right: 6.45rem;

    .theme-icon {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
      background-image: url(/icons/theme_icon_light.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-color: #fff;

      &.dark {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
        background-image: url(/icons/theme_icon_dark.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-color: #1c1c1c;
      }

      &:hover {
        background-color: rgba(245, 245, 245);
      }

      &.dark:hover {
        background-color: #2c2c2c;
      }
    }

    .tiny-dropdown-menu {
      width: 180px;
    }
  }
}
</style>
<style>
.theme-drop-panel .tiny-dropdown-item {
  max-width: 240px;
}
</style>
