module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: { "legacyDecorators": true },
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier',
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
