/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { createApp, h } from 'vue';
import TinyVue from '@opentiny/vue';
import playground from './playground.vue';
import TinyThemeTool from '@opentiny/vue-theme/theme-tool';
import Axios from 'axios';
import * as echarts from 'echarts';

const app = createApp({
  render() {
    return h(playground);
  },
});
const theme = new TinyThemeTool('', 'tinyStyleSheetId'); // 初始化主题
app.config.globalProperties.theme = theme; // 将 theme 对象挂到 vue 实例中
window.axios=Axios;
window.echarts =echarts;
app.use(TinyVue);
app.mount('#app');
