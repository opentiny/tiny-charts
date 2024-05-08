/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import Axios from 'axios';
import router from './router';
import main from './main.vue';
import hljs from 'highlight.js';
import VueAxios from 'vue-axios';
import { createApp, h } from 'vue';
import TinyVue from '@opentiny/vue';
import { MdPreview }  from 'md-editor-v3';
import TinyThemeTool from '@opentiny/vue-theme/theme-tool';
import 'md-editor-v3/lib/style.css';
import 'md-editor-v3/lib/preview.css';

Axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? `/${import.meta.env.VITE_BASEROUTER}/` : '/'
const app = createApp({
  render() {
    return h(main);
  },
});
const theme = new TinyThemeTool('', 'tinyStyleSheetId'); // 初始化主题
app.config.globalProperties.theme = theme; // 将 theme 对象挂到 vue 实例中

app.use(MdPreview).use(router).use(TinyVue).use(VueAxios, Axios)
app.mount('#app');
