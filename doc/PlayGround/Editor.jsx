import React, { useEffect, forwardRef, useImperativeHandle, useState } from 'react';
import * as monaco from 'monaco-editor';
import axios from 'axios';

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

function Editor(props, parentRef) {
  let chartRef = React.createRef();
  let code = props.code || '';

  useImperativeHandle(parentRef, () => {
    return {
      getCode: () => {
        let editorVal = editor.getValue();
        if (props.jsiframe && props.jsiframe !== 'origin') {
          // 找到export default chartOption索引后的第一个{
          const exportVal = editorVal.slice(editorVal.match('export default').index + 'export default'.length);
          const chartVal = exportVal.slice(exportVal.match('chartOption').index + 'chartOption'.length);
          const khVal = chartVal.slice(chartVal.match('{').index);
          let j = 0;
          let newLength = 0;
          // 用于查找框架内的iChartOption配置
          const findkh = (computedVal, j, newLength, jsiframeLength) => {
            for (let i = computedVal.length - 1; i >= 0; i--) {
              if (computedVal[i] === '}') {
                j++;
                if (j === jsiframeLength) {
                  newLength = computedVal.length - 1 - i;
                }
              }
            }
            const newVal = computedVal.slice(0, -1 * newLength);
            return newVal;
          };
          if (props.jsiframe !== 'react') {
            // 找到computed之前的倒数第三个}
            const computedVal = khVal.slice(0, khVal.match('computed').index);
            return findkh(computedVal, j, newLength, 3);
          } else {
            // 找到constructor之前的倒数第一个}
            const constructorVal = khVal.slice(0, khVal.match('constructor').index);
            return findkh(constructorVal, j, newLength, 1);
          }
        } else {
          return editorVal;
        }
      },
    };
  });

  useEffect(() => {
    monaco.editor.defineTheme('onedark', theme);

    // 初始化编辑器相关属性
    editor = monaco.editor.create(chartRef, {
      language: 'javascript',
      renderWhitespace: 'boundary', // 控制代码缩进样式
      tabSize: 2, // tab 缩进长度
      lineHeight: 22,
      autoIndent: 'keep',
      formatOnPaste: true,
      formatOnType: true,
      automaticLayout: true, // 自动布局
      foldingStrategy: 'indentation', // 代码可分小段折叠
      overviewRulerBorder: false, // 不要滚动条的边框
      // theme: `vs-${props.theme}`,
      theme: props.theme === 'dark' ? 'onedark' : `vs-${props.theme}`,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
    });
  }, []);

  useEffect(() => {
    if (editor && code) {
      // 判断是否为vue
      const { jsiframe, theme, chartName } = props;
      // code 需要调整主题
      if (theme) {
        const themeIndex = code.match('light')?.index || code.match('dark')?.index;
        if (themeIndex) {
          const themeIndex_ = code.match('light')?.index + 'light'.length || code.match('dark')?.index + 'dark'.length;
          const beforeCode = code.slice(0, themeIndex);
          const afterCode = code.slice(themeIndex_);
          code = beforeCode + theme + afterCode;
        }
      }
      // 判断是否用到技术栈
      if (jsiframe && jsiframe !== 'origin') {
        const optionPath = `jsiframe/${jsiframe}.txt`;
        axios.get(optionPath).then(response => {
          if (jsiframe !== 'react') {
            // 将code合入到vue对应的txt中
            const chartIndex = response.data.match('chartOption:').index + 'chartOption:'.length;
            const beforeCode = response.data.slice(0, chartIndex);
            const afterCode = response.data.slice(chartIndex);
            code = beforeCode + '\n' + code + afterCode;
            // 动态修改txt中的图表名称
            code = code.replace('name="GaugeChart"', `name="${chartName}"`);
          } else {
            // 将code合入到react对应的txt中
            const chartIndex = response.data.match('chartOption =').index + 'chartOption ='.length;
            const beforeCode = response.data.slice(0, chartIndex);
            const afterCode = response.data.slice(chartIndex);
            code = beforeCode + '\n' + code + afterCode;
            // 动态修改txt中的图表名称
            code = code.replace("chartName = 'JadeJueChart'", `chartName = '${chartName}'`);
          }
          editor.setValue(code);
        });
      } else {
        editor.setValue(code);
      }
    }
  }, [code]);

  return (
    <div
      className="ic-editor"
      ref={e => {
        chartRef = e;
      }}
    />
  );
}

export default forwardRef(Editor);
