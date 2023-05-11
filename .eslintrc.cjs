module.exports = {
  root: true,
  extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'import', '@typescript-eslint'],
  env: {
    node: true,
    es6: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.json']
      }
    }
  },
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^__',
        varsIgnorePattern: '^__'
      }
    ],
    curly: [2, 'all'],
    'global-require': 0,
    'import/named': 0,
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@escape/**',
            group: 'internal',
            position: 'after'
          }
        ]
      }
    ],
    'prettier/prettier': 'error',
    'jest/no-disabled-tests': 0,
    'jest/no-focused-tests': 0,
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline']
  }
}
