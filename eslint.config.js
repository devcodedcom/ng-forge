// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const rxjs = require('eslint-plugin-rxjs-x');
const eslintImportX = require('eslint-plugin-import-x');

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      rxjs.configs.strict,

      // Needed both for importing, sorting and grouping imports
      // It requires eslint-import-resolver-typescript for grouping and importing
      eslintImportX.flatConfigs.recommended,
      eslintImportX.flatConfigs.typescript,
    ],
    // Needed for eslint-plugin-rxjs-x
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    processor: angular.processInlineTemplates,
    rules: {
      // angular-eslint rules
      "@angular-eslint/component-max-inline-declarations": ["error"],
      "@angular-eslint/no-async-lifecycle-method": ["error"],
      "@angular-eslint/no-duplicates-in-metadata-arrays": ["error"],
      "@angular-eslint/no-lifecycle-call": ["error"],
      "@angular-eslint/prefer-on-push-component-change-detection": ["error"], // TODO To be changed to error in the future
      "@angular-eslint/prefer-output-readonly": ["error"],
      "@angular-eslint/prefer-signals": ["error"], // TODO To be changed to error in the future
      "@angular-eslint/relative-url-prefix": ["error"], // TODO To be changed to error in the future
      "@angular-eslint/sort-lifecycle-methods": ["error"],
      "@angular-eslint/use-component-selector": ["error"],
      "@angular-eslint/use-component-view-encapsulation": ["error"],
      "@angular-eslint/use-lifecycle-interface": ["error"],

      // typescript-eslint rules
      "@typescript-eslint/no-explicit-any": ["error"], // TODO To be changed to error in the future
      "@typescript-eslint/consistent-indexed-object-style": ["error"],
      "@typescript-eslint/consistent-type-assertions": ["error"],
      "@typescript-eslint/explicit-function-return-type": ["error"],
      "@typescript-eslint/explicit-member-accessibility": ["error", {
        "accessibility": "no-public"
      }],
      "@typescript-eslint/explicit-module-boundary-types": ["error"],
      "@typescript-eslint/member-ordering": ["error"],
      "@typescript-eslint/method-signature-style": ["error"],
      "@typescript-eslint/naming-convention": ["error",
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'import',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: ['function', 'classMethod', 'classicAccessor'],
          format: ['camelCase'],
        },
        {
          selector: ['variable', 'classProperty'],
          format: ['camelCase', 'UPPER_CASE'],
        },
        {
          "selector": "parameter",
          "format": ["camelCase"],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        }
      ],
      "@typescript-eslint/no-empty-function": ["error"],
      "@typescript-eslint/no-implied-eval": ["error"],
      "@typescript-eslint/no-inferrable-types": ["error"],

      // eslint-plugin-import-x rules (eslint-import-resolver-typescript is required)
      "import-x/order": ["error", {
        "groups": ["builtin","external", "internal", ["sibling", "parent"], "index", "unknown"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }],

      // eslint-plugin-rxjs-x
      "rxjs-x/finnish": ["error", {
        "functions": true,
        "methods": true,
        "names": {
          "^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$": false
        },
        "parameters": true,
        "properties": true,
        "strict": false,
        "types": {
          "^EventEmitter$": false
        },
        "variables": true
      }],
      "rxjs-x/no-ignored-error": ["error"],
      "rxjs-x/no-ignored-subscribe": ["error"],
      "rxjs-x/no-unsafe-takeuntil": ["error", {"alias": ["takeUntilDestroyed"]}],
      "rxjs-x/suffix-subjects": ["error", {
        "parameters": true,
        "properties": true,
        "suffix": "Subject",
        "types": {
          "^EventEmitter$": false
        },
        "variables": true,
      }],

      // eslint rules
      "max-params": ["error"],
      "no-eval": ["error"],
      "no-implied-eval": ["off"], // Has to be off to turn on a @typescript-eslint/no-implied-eval rule
      "no-magic-numbers": ["error"],
      "sort-imports": [
        "error",
        {
          "ignoreCase": true,
          "ignoreDeclarationSort": true
        }
      ]
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      // ...angular.configs.templateAccessibility, TODO To be changed when accessibility is needed
    ],
    rules: {
      "@angular-eslint/template/alt-text": ["error"],
      "@angular-eslint/template/attributes-order": ["error"],
      "@angular-eslint/template/prefer-self-closing-tags": ["error"],
      "@angular-eslint/template/no-any": ["error"], // TODO To be changed to error in the future
      "@angular-eslint/template/no-inline-styles": ["error"],
      "@angular-eslint/template/prefer-control-flow": ["error"]
    },
  }
);
