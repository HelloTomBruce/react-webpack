module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["standard", "promise", "json"],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    "handle-callback-err": 0,
    "space-before-function-paren": 0,
    "key-spacing": [2, { mode: "minimum", align: "value" }],
    "no-callback-literal": 0,
    "no-new": 0,
    "no-tabs": 0,
    "node/no-unpublished-require": 0,
    "node/no-unsupported-features/es-syntax": 0,
    "react/prop-types": 0,
    "no-console": 0,
    "no-var": "error",
    "init-declarations": 2,
    semi: ["error", "never"],
    "no-extra-semi": "error",
    "array-bracket-spacing": [2, "never"],
    "block-scoped-var": 0,
    "brace-style": [2, "1tbs", { allowSingleLine: true }],
    "comma-dangle": [2, "never"],
    "comma-spacing": [2, { before: false, after: true }],
    "comma-style": [2, "last"],
    complexity: [2, 9],
    "computed-property-spacing": [2, "never"]
  },
  globals: {
    // configure global variables avoid no-undef error
    API: true,
    GLOBAL: true
  }
};
