module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'import',
    'simple-import-sort',
    'react',
    'jsx-a11y',
    'react-hooks',
    '@typescript-eslint',
    'storybook',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  rules: {
    'no-console': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // SIMPLE-IMPORT-SORT
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node.js builtins
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Type imports
          ['^@?\\w.*\\u0000$', '^[^.].*\\u0000$', '^\\..*\\u0000$'],
          // NPM packages. `react` related packages come first
          ['^react', '^@react', '^@?\\w'],
          // Side effect imports
          ['^\\u0000'],
          // Absolute imports
          [
            '^(@|components|config|elements|hooks|lib|pages|src|state|stories|styles|types|utils|store|theme)(/.*|$)',
          ],
          // Parent imports. Put `..` last
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    // SIMPLE-IMPORT-SORT
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['src/', 'node_modules/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/ignore': ['node_modules'],
  },
};
