module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-conventionalcommits',

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
        'build', // for deployment purpose only
        'dependency',
      ],
    ],
    'body-max-line-length': [2, 'always', 80],
    'subject-case': [2, 'always', 'sentence-case'],
  },

  prompt: {
    settings: {},
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚',
          },
          build: {
            description:
              'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '🛠',
          },
          chore: {
            description: "Other changes that don't modify src or test files",
            title: 'Chores',
            emoji: '♻️',
          },
        },
      },
    },
  },
  scope: {
    description:
      'What is the scope of this change (e.g. component or file name)',
  },
  subject: {
    description: 'Write a short, imperative tense description of the change',
  },
  body: {
    description: 'Provide a longer description of the change',
  },
};
