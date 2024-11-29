import { createRouter, createWebHistory } from 'vue-router';
import { NAV_DATA } from '../main/menu/menu.js';
import Example from '../main/example/example.vue';
import DocPage from '../main/main-page.vue';
import ChartIframe from '../main/example/components/iframe.vue';

const routerArr = [];
function processItem(item) {
  if (item.children && item.children.length > 0) {
    item.children.forEach(child => {
      processItem(child);
    });
  } else {
    if (item.value) {
      routerArr.push({
        path: `/${item.value}`,
        name: item.value,
        component: ChartIframe,
      });
    }
  }
}

// 处理NAV_DATA中的每个顶层项
NAV_DATA.forEach(item => {
  processItem(item);
});

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? `/${import.meta.env.VITE_BASEROUTER}/` : '/'),
  routes: [
    {
      path: '/',
      redirect: '/QuickStart',
      name: '快速开始',
    },
    {
      path: '/doc-comps',
      name: 'doc-comps',
      component: DocPage,
      children: routerArr,
      // beforeRouteEnter: (to, from, next) => {
      //   window.parent.postMessage(
      //     {
      //       action: 'routechange',
      //       module: 'hui',
      //       iframeRoute: `/${to.name}`
      //     },
      //     '\*'
      //   )
      //   next()
      // }
    },
    {
      path: '/Example',
      name: 'Example',
      component: Example,
    },
    {
      path: '/:pathMatch(.*)*', // 此处需特别注意至于最底部
      redirect: { path: 'QuickStart' },
    }
  ],
});
export default router;
