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
    };
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
        theme: this.$route.query.theme || (windowTheme.matches ? 'dark' : 'light'),
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
        theme: this.$route.query.theme || (this.isDarkTheme ? 'dark' : 'light'),
      });
    },
  },
  watch: {
    $route: {
      handler(val) {
        // 系统颜色主题
        const windowTheme = window.matchMedia('(prefers-color-scheme:dark)');
        this.isDarkTheme = val.query.theme?.toLocaleLowerCase().includes('dark') || windowTheme.matches;
        this.chartName = val.name;
        this.iframeSrc = `/Example#/Example/${this.chartName}`;
        if (this.iframe) {
          this.sendMessage();
        }
      },
      immediate: true,
    },
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
