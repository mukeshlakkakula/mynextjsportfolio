import nextConfig from "eslint-config-next/core-web-vitals";

const eslintConfig = {
  ...nextConfig,
  rules: {
    // Customize your rules here, if needed
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
  },
};

export default eslintConfig;
