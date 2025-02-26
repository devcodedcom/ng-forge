// @ts-check
import tsEslint from 'typescript-eslint';
import rootConfig from '../../eslint.config.js';

export default tsEslint.config(
  ...rootConfig,
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'fg',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'fg',
          style: 'kebab-case'
        }
      ]
    }
  },
  {
    files: ['**/*.html']
  }
);
