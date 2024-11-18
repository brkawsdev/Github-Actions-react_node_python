export default [
  {
    files: ["**/*.js", "**/*.mjs"],  // Adjust file types as needed
    languageOptions: {
      ecmaVersion: 2021,  // or whatever version you are using
      sourceType: "module",
    },
    env: {
      browser: true,
      node: true,
      jest: true,  // Add Jest environment to recognize Jest globals
    },
    plugins: {
      react: require("eslint-plugin-react"),  // Example of react plugin if using React
      jest: require("eslint-plugin-jest"),    // Optional, if using eslint-plugin-jest
    },
    rules: {
      // Your custom rules go here
    },
  },
];
