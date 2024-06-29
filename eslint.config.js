const antfu = require('@antfu/eslint-config').default;

module.exports = antfu(
  {
    ignores: [
    // 忽略的路径/文件
      'node_modules/*',
      'dist/*',
      'build/*',
      '.cloudbuild/*',
      '.codecheck/*',
      '.vscode/*',
      'deployment/*',
      'test/*',
      'website/*',
    ],
  },
  {
    rules: {
      'import/order': 'off',
      'vue/quote-props': 'off',
      'vue/attributes-order': 'off',
      'vue/html-self-closing': 'off',
      'vue/comma-dangle': 'off',
      'vue/prefer-template': 'off',
      'vue/no-unused-refs': 'off',
      'vue/require-component-is': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/component-name-in-template-casing': 'off',
      'vue/component-options-name-casing': 'off',
      'vue/block-order': ['error', {
        'order': ['template', 'script', 'style']
      }],
      'style/comma-dangle': 'off',
      'style/arrow-parens': 'off',
      'style/quote-props': 'off',
      'style/multiline-ternary': 'off',
      'antfu/if-newline': 'off',
      'antfu/top-level-function': 'off',
      'curly': 'off',
      'style/semi': ['error', 'always'],
      'sort-imports': 'off',
      'prefer-template': 'off',
      'prefer-const': 'off',
      'jsonc/quote-props': 'off',
      'jsonc/comma-dangle': 'off'
    },
  },
);
