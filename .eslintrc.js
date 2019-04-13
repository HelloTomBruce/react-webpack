module.exports = {
    parser: "babel-eslint",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:promise/recommended"
    ],
    plugins: ["standard", "react", "promise", "json"],
    env: {
        browser: true,
        es6: true,
        node: true
    },
    rules: {
        indent: ["error", 4],
        "space-before-function-paren": 1,
        "key-spacing": [
            2,
            { beforeColon: false, mode: "script", align: "colon" }
        ]
    },
    globals: {
        // configure global variables avoid no-undef error
        API: true,
        GLOBAL: true
    }
};
