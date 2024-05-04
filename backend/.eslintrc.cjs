module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                ".eslintrc.{js,cjs}",
            ],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        "ecmaVersion": "latest",
    },
    rules: {
        // Reglas Generales
        "global-require": "off",
        "no-process-env": "off",
        "semi": [ "error", "always" ],
        "quotes": [ "error", "double" ],
        "jsx-quotes": [ "error", "prefer-double" ],
        "indent": [ "error", 4, { "StaticBlock": { "body": 4 } }],
        "camelcase": [ 2, { "properties": "always" }],
        "comma-dangle": [ "error", "always-multiline" ],
        "comma-spacing": [ "error", { "before": false, "after": true }],
        "no-multi-spaces": "error",
        "no-trailing-spaces": [ "error", { "ignoreComments": true }],

        // Reglas de Interlineados
        "no-multiple-empty-lines": [ "error", { "max": 1, "maxEOF": 1, "maxBOF": 1 }],
        "eol-last": [ "error", "never" ],

        // Reglas de Variables y Constantes
        "prefer-const": [ "error", { "destructuring": "any", "ignoreReadBeforeAssign": false }],

        // Reglas de Funciones
        "func-style": [ "error", "expression" ],
        "no-spaced-func": "error",
        "max-statements": [ "error", 20 ],
        "arrow-parens": [ "error", "always" ],

        // Reglas de Arrays
        "array-bracket-spacing": [ "error", "always", { "singleValue": false, "arraysInArrays": true, "objectsInArrays": false }],

        // Reglas de Objetos
        "object-curly-spacing": [ "error", "always" ],
    },
};