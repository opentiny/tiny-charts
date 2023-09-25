/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';
// import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

//文档工程打包的配置
const projectBuild = {
  // 指定输出路径
  outDir: 'dist',
  // 生成静态资源的存放路径
  assetsDir: 'assets',
  // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
  assetsInlineLimit: 4096,
  // 指定使用哪种混淆器。默认为 Esbuild
  minify: 'esbuild',
  // 构建后是否生成 source map 文件
  sourcemap: false,
  // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
  emptyOutDir: true,
  rollupOptions: {
    input: {
      index: resolve(__dirname, 'index.html'),
      example: resolve(__dirname, 'example.html'),
      playground: resolve(__dirname, 'playground.html'),
    },
    output: {},
  },
};

//.js库模式打包的配置
const libBuild = {
  lib: {
    entry: resolve(__dirname, './src/index.js'),
    name: 'iChart',
    fileName: 'iChart',
  },
  minify: 'terser',
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true,
    },
  },
  rollupOptions: {
    external: ['echarts'],
    output: {
      globals: {
        echarts: 'echarts',
      },
    },
  },
};

export default ({ mode }) => {
  let build;
  switch (mode) {
    case 'lib':
      build = libBuild;
      break;
    default:
      build = projectBuild;
      break;
  }

  return defineConfig({
    plugins: [react(), monacoEditorPlugin({})],
    server: {
      host: '0.0.0.0',
      port: 8080,
    },
    test: {
      globals: true,
      // environment: 'jsdom',
      coverage: {
        exclude: [
          // 'IconRender.tsx',
          // '**/__tests__/*',
        ],
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        reportsDirectory: './test/unit/coverage',
      },
      reporters: ['default', 'html'],
      setupFiles: './test/unit/vitest-setup.js',
      outputFile: './test/unit/output/index.html',
      // include: ['**/TipBox/__tests__/*.test.tsx'],
      // exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
      // css: true, // parsing CSS is slow
    },
    resolve: {
      alias: {
        '@test': resolve(__dirname, './test/unit'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.less', '.css', '.md'],
    },
    base: './',
    build,
  });
};
