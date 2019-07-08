module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'indent': [2, 4, {
            'SwitchCase': 1
        }],
        // 大括号样式
        'brace-style': ['off'],
        // 强制在关键字前后使用一致的空格 (前后腰需要) eg:if (condition) { ... }
        'keyword-spacing': 'off',
        // 要求调用无参构造函数时带括号
        'new-parens': 'error',
        // 函数定义时括号前面要不要有空格
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'never'
        }],
        'semi': ['off', 'always'],
        'no-eval': ['off'],
        'prefer-promise-reject-errors': ['error', { 'allowEmptyReject': true }],
        'allowEmptyReject': true,
        'valid-typeof': 'off',
        'import/first': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
