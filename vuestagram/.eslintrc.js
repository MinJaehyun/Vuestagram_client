module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['@vue/prettier', 'plugin:vue/essential'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    // NOTE: 아래 2개 설정하여 router/index 의 import parsing error 해결
    extends: 'standard',
    parser: 'babel-eslint',
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        useTabs: false,
        tabWidth: 2,
        printWidth: 90,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
  },
};
