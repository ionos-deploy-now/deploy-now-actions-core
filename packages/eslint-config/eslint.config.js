module.exports = {
    root: true,

    env: {
        node: true,
    },

    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? ['error', {allow: ['error']}] : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'prettier/prettier': [
            'warn',
            {},
            {
                usePrettierrc: true,
            },
        ],
        'no-unused-vars': 'off',
        'no-empty-pattern': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off'
    },

    parserOptions: {
        parser: '@typescript-eslint/parser',
    },

    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};