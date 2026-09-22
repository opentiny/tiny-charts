import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import commonjs from '@rollup/plugin-commonjs';
import resolvePlugin from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import strip from '@rollup/plugin-strip';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUTPUT_DIR = resolve(__dirname, 'dist/umd');
const SRC_ENTRY = resolve(__dirname, 'src/index.js');
const SRC_LESS = resolve(__dirname, 'src/index.less');

const UMD_ENTRY = 'virtual:umd-entry';

const umdEntryPlugin = {
  name: 'umd-entry',
  resolveId(id) {
    if (id === UMD_ENTRY) return UMD_ENTRY;
  },
  load(id) {
    if (id !== UMD_ENTRY) return null;
    return [
      `import HuiCharts, * as named from ${JSON.stringify(SRC_ENTRY)};`,
      `import ${JSON.stringify(SRC_LESS)};`,
      'Object.assign(HuiCharts, named);',
      'delete HuiCharts.default;',
      'export default HuiCharts;',
    ].join('\n');
  },
};

const sharedPlugins = [
  umdEntryPlugin,
  resolvePlugin(),
  commonjs(),
  url(),
  postcss({
    extensions: ['.less', '.css'],
    minimize: true,
    inject: true,
    use: {
      less: { javascriptEnabled: true },
    },
    plugins: [autoprefixer({
      overrideBrowserslist: [
        'Firefox >= 40',
        'chrome >= 50',
        'ie > 11',
        'edge >= 12',
      ],
    })],
  }),
  babel({
    babelHelpers: 'bundled',
    presets: [['@babel/preset-env', { loose: true }]],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
  strip({
    debugger: true,
    functions: ['console.log'],
  }),
];

const external = ['echarts', 'echarts/extension/bmap/bmap'];
const globals = {
  echarts: 'echarts',
  'echarts/extension/bmap/bmap': 'BMapExtension',
};

export default [
  {
    input: UMD_ENTRY,
    output: {
      file: resolve(OUTPUT_DIR, 'hui-charts.umd.js'),
      format: 'umd',
      name: 'HUICharts',
      exports: 'default',
      sourcemap: true,
      globals,
    },
    external,
    plugins: sharedPlugins,
  },
  {
    input: UMD_ENTRY,
    output: {
      file: resolve(OUTPUT_DIR, 'hui-charts.umd.min.js'),
      format: 'umd',
      name: 'HUICharts',
      exports: 'default',
      sourcemap: true,
      compact: true,
      globals,
    },
    external,
    plugins: sharedPlugins,
  },
];