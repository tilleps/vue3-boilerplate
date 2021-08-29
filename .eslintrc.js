"use strict";

//  eslint-plugin-no-autofix

/*eslint-env node*/
module.exports = {
  globals: {
    // prevent no-undef errors for __dirname
    "__dirname": "readonly"
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  rules: {
    // override/add rules settings here, such as:
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "no-console": [
      "warn", { "allow" : ["error", "warn"] }
    ],
    "no-unused-vars": "warn",
    "quotes": ["warn", "double"],
    "semi": "warn",
    "vue/no-unused-vars": "error"
  },
};