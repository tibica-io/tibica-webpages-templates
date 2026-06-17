import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
]
