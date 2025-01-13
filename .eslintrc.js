// .eslintrc.cjs
module.exports = {
  extends: ["next/core-web-vitals"], // Next.js recommended ESLint config
  parserOptions: {
    ecmaVersion: 2021, // Use ECMAScript 2021 features
    sourceType: "module", // Enable ES Modules
  },
  rules: {
    // Add or override ESLint rules here
    "no-unused-vars": "warn", // Example: Warn for unused variables
    "react/react-in-jsx-scope": "off", // Example: Disable rule for React in Next.js
  },
};
