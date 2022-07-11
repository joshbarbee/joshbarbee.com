"use strict";

// const version = require("./package.json").version

// eslint-disable-next-line no-undef
module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "2017"
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  plugins: ["prettier", "@typescript-eslint/tslint"],
  rules: {
    "no-lonely-if": "off",
    "no-shadow": "off",
    "no-warning-comments": "warn",
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true
      }
    ]
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    "shared-node-browser": true
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json"
      },
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["camelCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow"
          },
          {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow"
          },
          {
            selector: "typeLike",
            format: ["PascalCase"]
          },
          {
            selector: "property",
            format: null
          },
          {
            selector: "method",
            format: null
          }
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "no-implicit-globals": "off"
      }
    },
    {
      files: ["scripts/**/*.ts", "tests/**/*.ts"],
      rules: {
        "no-console": "off",
        semi: [2, "always"],
        quotes: ["error", "single"]
      }
    },
    {
      files: ["svelte"],
      overrides: [
        {
          files: ["*.svelte"],
          parser: "svelte-eslint-parser"
        }
      ]
    }
  ]
};
