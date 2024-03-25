import { createRouter, createWebHistory } from 'vue-router';
import { NAV_DATA } from '../main/menu/menu.js';
import Example from '../main/example/example.vue';
import DocPage from '../main/main-page.vue';
import ChartIframe from '../main/example/components/iframe.vue';

const routerArr = [];
NAV_DATA.forEach(item => {
  if (item.children) {
    item.children.forEach(v => {
      routerArr.push({
        path: `/${v.value}`,
        name: v.value,
        component: ChartIframe,
      });
    });
  } else {
    routerArr.push({
      path: `/${item.value}`,
      name: item.value,
      component: ChartIframe,
    });
  }
});
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/ReadMe',
      name: '快速开始',
    },
    {
      path: '/doc-comps',
      name: 'doc-comps',
      component: DocPage,
      children: routerArr,
    },
    {
      path: '/Example',
      name: 'Example',
      component: Example,
    },
  ],
});
export default router;
