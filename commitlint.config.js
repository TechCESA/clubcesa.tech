module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat', // feature
        'fix', // bug
        'docs',
        'chore', // unnameable changes
        'dependency',
      ],
    ],
    'body-max-line-length': [2, 'always', 80],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};
