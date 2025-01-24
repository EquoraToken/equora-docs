export default [
  {
    ignores: ["node_modules", ".next"],
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    // Add the Next.js ESLint plugin
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      next: require("eslint-plugin-next"),
    },
    rules: {
      "next/no-html-link-for-pages": "off",
    },
  },
];
