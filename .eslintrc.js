module.exports = {
  extends: 'airbnb-base',
  env: {
    node: true,
    es6: true,
  },
  plugins: [
    'react', 'import', 'jest'
  ],
  rules: {
    curly: ['error', 'all']
  }
}
