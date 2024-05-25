const love = require('eslint-config-love');
module.exports = [
    {
        ...love,
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        ignores: [
            'jest.config.ts',
            'babel.config.js',
            'tests/**/*',
        ],
        languageOptions:{
            ...love.languageOptions,
            parserOptions: {
                ...love.languageOptions.parserOptions,
                project: './configs/tsconfig.esm.json',
            }
        },
    }
]