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
