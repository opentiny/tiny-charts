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
