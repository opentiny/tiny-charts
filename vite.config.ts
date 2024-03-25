import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monacoEditorPluginModule from 'vite-plugin-monaco-editor'

const isObjectWithDefaultFunction = (module: unknown): module is { default: typeof monacoEditorPluginModule } => (
  module != null &&
  typeof module === 'object' &&
  'default' in module &&
  typeof module.default === 'function'
)

const monacoEditorPlugin = isObjectWithDefaultFunction(monacoEditorPluginModule)
  ? monacoEditorPluginModule.default
  : monacoEditorPluginModule

export default defineConfig({
  plugins: [vue(), monacoEditorPlugin({}),],
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  define: {
    'process.env': { ...process.env }
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.less', '.css', '.md'],
  },
  base: './',
  build: {
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
        playground: resolve(__dirname, 'playground.html'),
      },
      output: {},
    },
  },
});

