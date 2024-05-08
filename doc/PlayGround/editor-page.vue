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
  <div class="ic-editor" ref="chartRef"></div>
</template>

<script>
import * as monaco from 'monaco-editor';

let editor = null;
const theme = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: '', foreground: 'D4D4D4' },
    { token: 'invalid', foreground: 'f44747' },
    { token: 'emphasis', fontStyle: 'italic' },
    { token: 'strong', fontStyle: 'bold' },

    { token: 'variable', foreground: '74B0DF' },
    { token: 'variable.predefined', foreground: '4864AA' },
    { token: 'variable.parameter', foreground: '9CDCFE' },
    { token: 'constant', foreground: '569CD6' },
    { token: 'comment', foreground: '608B4E' },
    { token: 'number', foreground: 'B5CEA8' },
    { token: 'number.hex', foreground: '5BB498' },
    { token: 'regexp', foreground: 'B46695' },
    { token: 'annotation', foreground: 'cc6666' },
    { token: 'type', foreground: 'DCDCDC' },

    { token: 'delimiter', foreground: 'DCDCDC' },
    { token: 'delimiter.html', foreground: '808080' },
    { token: 'delimiter.xml', foreground: '808080' },

    { token: 'tag', foreground: '569CD6' },
    { token: 'tag.id.pug', foreground: '4F76AC' },
    { token: 'tag.class.pug', foreground: '4F76AC' },
    { token: 'meta.scss', foreground: 'A79873' },
    { token: 'meta.tag', foreground: 'CE9178' },
    { token: 'metatag', foreground: 'DD6A6F' },
    { token: 'metatag.content.html', foreground: '9CDCFE' },
    { token: 'metatag.html', foreground: '569CD6' },
    { token: 'metatag.xml', foreground: '569CD6' },
    { token: 'metatag.php', fontStyle: 'bold' },

    { token: 'key', foreground: '9CDCFE' },
    { token: 'string.key.json', foreground: '9CDCFE' },
    { token: 'string.value.json', foreground: 'CE9178' },

    { token: 'attribute.name', foreground: '9CDCFE' },
    { token: 'attribute.value', foreground: 'CE9178' },
    { token: 'attribute.value.number.css', foreground: 'B5CEA8' },
    { token: 'attribute.value.unit.css', foreground: 'B5CEA8' },
    { token: 'attribute.value.hex.css', foreground: 'D4D4D4' },

    { token: 'string', foreground: 'CE9178' },
    { token: 'string.sql', foreground: 'FF0000' },

    { token: 'keyword', foreground: '569CD6' },
    { token: 'keyword.flow', foreground: 'C586C0' },
    { token: 'keyword.json', foreground: 'CE9178' },
    { token: 'keyword.flow.scss', foreground: '569CD6' },

    { token: 'operator.scss', foreground: '909090' },
    { token: 'operator.sql', foreground: '778899' },
    { token: 'operator.swift', foreground: '909090' },
    { token: 'predefined.sql', foreground: 'FF00FF' },
  ],
  colors: {
    'editor.background': '#1E1E1E',
    'editor.foreground': '#000000',
    'editor.inactiveSelectionBackground': '#3A3D41',
    'editorIndentGuide.background1': '#404040',
    'editorIndentGuide.activeBackground1': '#707070',
    'editor.selectionHighlightBackground': '#ADD6FF26',
  },
};

export default {
  name: 'Editor',
  props: {
    code: String,
    theme: String,
    chartName: String,
  },
  data() {
    return {
      newcode: this.code || '',
    };
  },
  mounted() {
    this.initEditor();
  },

  methods: {
    // 初始化编辑器
    initEditor() {
      monaco.editor.defineTheme('onedark', theme);
      const chartRef = this.$refs.chartRef;
      let editorTheme = this.theme.toLowerCase().includes('dark') ? 'dark' : 'light';
      // 初始化编辑器相关属性
      editor = monaco.editor.create(chartRef, {
        language: 'javascript',
        renderWhitespace: 'boundary', // 控制代码缩进样式
        tabSize: 5, // tab 缩进长度
        lineHeight: 22, // 设置行高
        autoIndent: 'keep', // 是否在输入时自动缩进，'keep'表示保持原有的缩进
        formatOnPaste: true, // 是否在粘贴时自动格式化代码
        automaticLayout: true, // 自动布局
        foldingStrategy: 'indentation', // 代码可分小段折叠
        overviewRulerBorder: false, // 不要滚动条的边框
        theme: this.theme.toLowerCase().includes('dark') ? 'onedark' : `vs-${editorTheme}`,
        minimap: { enabled: false }, // 是否显示小地图
        scrollBeyondLastLine: false,
      });
    },

    // 获取编辑器代码
    getCode() {
      let editorVal = editor.getValue();
      return editorVal;
    },

    // 监听code的变化
    watchEditor(code) {
      if (editor && code) {
        // code 需要调整主题
        const themeFlag = {
          hdesignLight: code.match("theme: 'hdesign-light'")?.index,
          hdesignDark: code.match("theme: 'hdesign-dark'")?.index,
          cloudLight: code.match("theme: 'cloud-light'")?.index,
          bpitLight: code.match("theme: 'bpit-light'")?.index,
          bpitDark: code.match("theme: 'bpit-dark'")?.index,
          light: code.match("theme: 'light'")?.index,
          dark: code.match("theme: 'dark'")?.index,
        };
        if (this.theme) {
          for (let key in themeFlag) {
            if (themeFlag[key]) {
              const themeIndex = themeFlag[key] + key.length + 9;
              const beforeCode = code.slice(0, themeFlag[key]);
              const afterCode = code.slice(themeIndex);
              code = beforeCode + "theme: '" + this.theme + "'" + afterCode
              break;
            }
          }
        }
        editor.setValue(code);
      }
    },
  },

  watch: {
    // 监听code的变化
    code(newVal) {
      this.newcode = newVal;
      this.watchEditor(this.newcode);
    },
  },
};
</script>
