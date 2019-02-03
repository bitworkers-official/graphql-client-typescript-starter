module.exports = {
  extends: 'bitworkers',
  rules: {
    'graphql/template-strings': [
      'error',
      {
        tagName: 'query',
      },
    ],
  },
  plugins: ['graphql'],
}
