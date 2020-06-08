module.exports = {
    parser: "babel-eslint",
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:promise/recommended"],
    plugins: ["standard", "react", "promise", "json"],
    env: {
        browser: true,
        es6: true,
        node: true
    },
    rules: {
        "space-before-function-paren": 0,
        "key-spacing": [2, { beforeColon: false, mode: "strict", align: "value" }],
        "react/prop-types": 0,
        "react/display-name": [0],
        "promise/always-return": 0
    },
    globals: {
        // configure global variables avoid no-undef error
        API: true,
        GLOBAL: true
    }
};
