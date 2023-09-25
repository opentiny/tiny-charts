module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },

  plugins: ['react'],

  extends: ['eslint:recommended', 'plugin:react/recommended'],

  rules: {
    // js + eslint/recommended
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'spaced-comment': ['error', 'always', { exceptions: ['*'] }], // 规则11 `//` 和注释内容之间要有一个空格
    'max-len': ['error', { code: 120, ignoreComments: true }], // 规则16, 22 超长代码需要被换行
    'comma-spacing': ['error', { before: false, after: true }],
    'keyword-spacing': [
      'error',
      {
        // 规则18 关键字周围空格的一致性
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],
    'prefer-const': ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
    'no-console': 'warn', // 规则62 禁用console
    'no-var': 'error', // 建议68 var声明会被提升至该作用域的顶部，所以变量声明应该在作用域顶部
    'no-alert': 'error',
    'no-self-compare': 'warn',
    'no-empty': 'warn',
    // complexity: ['off', 20], // 建议21 圈复杂度不超过20
    // 'max-lines-per-function': ['off', 200], // 函数最大长度
    // 'max-lines': ['off'], // 文件最大长度
    'no-useless-return': 'warn',
    yoda: 'error',
    'padding-line-between-statements': 'error',
    // react + react/recommended
    'react/self-closing-comp': 'error',
    'react/jsx-closing-tag-location': 'warn',
    'react/prop-types': 'warn',
    'react/no-deprecated': 'warn',
    'react/jsx-key': 'warn',
    'react/jsx-equals-spacing': 'warn',
    'react/jsx-props-no-multi-spaces': 'warn',
    // ts + ts/recommended
    'no-useless-concat': 'error', // 规则36 使用模板字符串（` ` ）实现字符串拼接
    'prefer-template': 'error', // 规则36 使用模板字符串（` ` ）实现字符串拼接
    'no-unused-vars': 'warn',
  },
};
