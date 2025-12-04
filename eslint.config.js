// @ts-check

import react from 'eslint-plugin-react';
import ts_eslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
const config = [
  {
    ignores: ['node_modules/**', 'dist/**', 'out/**']
  },
  ...ts_eslint.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.{tsx,ts}'],
    ...react.configs.flat.recommended,
    ...react.configs.flat['jsx-runtime'],
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser
      }
    },
    rules: {
      '@typescript-eslint/array-type': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-restricted-types': 'error'
    }
  },
  eslintPluginPrettierRecommended
];
export default config;
