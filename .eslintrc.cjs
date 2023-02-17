/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        'prettier',
        // '@vue/eslint-config-prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        // 'prettier/prettier': [
        //     'warn',
        //     {
        //         singleQuote: true,
        //         tabWidth: 4,
        //         bracketSpacing: true,
        //         bracketSameLine: true,
        //         printWidth: 120,
        //         endOfLine: 'auto',
        //     },
        // ],
    },
};
