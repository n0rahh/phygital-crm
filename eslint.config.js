import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'no-multi-spaces': ['error'],
      'vue/multi-word-component-names': 0,
      'vue/no-restricted-component-options': [
        'error',
        {
          name: 'component',
          message: 'Use "components" instead.',
        },
      ],
      'vue/html-indent': [
        'error',
        2,
        {
          attribute: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: [],
        },
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  },
  prettierConfig,
  eslintPluginPrettierRecommended,
];
