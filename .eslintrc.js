module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:import/warnings", "plugin:react/recommended", "prettier/react"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    "browser": true,
    "es6": true,
    "node": true,
    "jest/globals": true,
  },
  plugins: ["react", "react-hooks", "jest"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-var": 1,
    "prefer-const": 2,
    "no-console": "off",
    "no-use-before-define": "warn",
    "react/no-typos": 2,
    "react/jsx-fragments": [1, "syntax"],
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/boolean-prop-naming": ["error", { "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+", "validateNested": true }],
    // "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
