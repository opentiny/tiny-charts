<template>
  <div v-if="showLoading" id="loading-mark"></div>
  <iframe :src="iframeSrc" class="iframe" ref="iframeRef"></iframe>
</template>

<script>
import { Loading } from '@opentiny/vue';
export default {
  name: 'ChartIframe',
  data() {
    return {
      showLoading: true,
      loadingInstance: null,
      iframeSrc: '',
      chartName: '',
      iframe: null,
      isDarkTheme: false,
      currentTheme: localStorage.getItem('chartTheme') || 'hdesign-light',
    };
  },
  watch: {
    $route: {
      handler(val) {
        // 系统颜色主题
        const windowTheme = window.matchMedia('(prefers-color-scheme:dark)');
        this.isDarkTheme = val.query.theme?.toLocaleLowerCase().includes('dark') || windowTheme.matches;
        if(val.hash) {
          this.chartName = val.hash.split('/')[2]
        } else {
          this.chartName = val.name;
        }
        this.updateIframeSrc();
        if (this.iframe) {
          this.sendMessage();
        }
      },
      immediate: true,
    },
    isDarkTheme(val){
      if(val) {
        this.currentTheme = 'hdesign-dark'
      } else {
        this.currentTheme = 'hdesign-light'
      }
      this.updateIframeSrc();
    }
  },
  mounted() {
    this.loadingInstance = Loading.service({
      target: document.getElementById('loading-mark'),
      text: '加载中...',
      size: 'large',
      customClass: this.isDarkTheme && this.$route.query.theme !== 'light' ? 'dark-loading' : '',
    });

    this.$nextTick(() => {
      this.iframe = this.$refs.iframeRef;
      if (this.iframe.attachEvent) {
        this.sendMessage();
        this.iframe.attachEvent('onload', function () {});
      } else {
        this.iframe.onload = () => {
          this.sendMessage();
          this.loadingInstance.close();
          this.showLoading = false;
        };
      }
    });

    const windowTheme = window.matchMedia('(prefers-color-scheme:dark)');
    windowTheme.addEventListener('change', () => {
      this.iframe.contentWindow?.postMessage({
        chartName: this.chartName,
        theme: this.$route.query.theme || (windowTheme.matches ? 'hdesign-dark' : 'hdesign-light'),
      });
    });
    const __self = this;
    window.__ChartRoute__ = {
      jumpToChartExample: function (value) {
        __self.$router.push({ name: value });
      },
    };
  },
  methods: {
    sendMessage() {
      this.iframe.contentWindow.postMessage({
        chartName: this.chartName,
        theme: this.$route.query.theme || (this.isDarkTheme ? 'hdesign-dark' : 'hdesign-light'),
      });
    },

    updateIframeSrc(){
      let loactionHref = window.location.href.split('/')
      let name = loactionHref[loactionHref.length - 1]
      if (window.self.name === 'hdesignFrame') {
        this.iframeSrc = `${import.meta.env.VITE_HDESIGN_URL}/Example#/Example/${name}?theme=${this.currentTheme}`
        } else {
        this.iframeSrc = `Example#/Example/${name}?theme=${this.currentTheme}`;
      }
    }
  },
};
</script>

<style>
#loading-mark {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: var(--panel-width);
  z-index: 100;
}

.dark-loading {
  background-color: #141414;
}
</style>
