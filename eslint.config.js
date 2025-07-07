import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: ["commitlint.config.js", "**/*.config.js"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // Aturan custom Anda
    },
  },
];
