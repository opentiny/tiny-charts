/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import mitt from 'mitt'
import Axios from 'axios';
import router from './router';
import main from './main.vue';
import VueAxios from 'vue-axios';
import { createApp, h } from 'vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import TinyThemeTool from '@opentiny/vue-theme/theme-tool';

Axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? import.meta.env.VITE_PUBLISH_URL : `/`
const app = createApp({
  render() {
    return h(main);
  },
});
VMdPreview.use(githubTheme, {
  Hljs: hljs
})
const theme = new TinyThemeTool('', 'tinyStyleSheetId'); // 初始化主题
app.config.globalProperties.theme = theme; // 将 theme 对象挂到 vue 实例中
app.config.globalProperties.$bus = new mitt()
app.use(VMdPreview).use(router).use(VueAxios, Axios)
app.mount('#app');
