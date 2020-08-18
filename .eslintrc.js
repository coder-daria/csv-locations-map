module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  plugins: ['react-hooks', 'jest', 'prettier'],
  globals: {
    debug: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    // see discussion https://github.com/airbnb/javascript/issues/1365
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks.
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies.
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
