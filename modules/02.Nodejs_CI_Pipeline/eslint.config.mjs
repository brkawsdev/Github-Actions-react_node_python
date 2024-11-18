import eslintPluginReact from "eslint-plugin-react";
import eslintPluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    env: {
      browser: true,
      node: true,
      jest: true,
    },
    plugins: {
      react: eslintPluginReact,  // Use imported modules instead of require
      jest: eslintPluginJest,    // Use imported modules instead of require
    },
    rules: {
      // Your custom rules go here
    },
  },
];
