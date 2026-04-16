import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parserOptions: { ecmaVersion: 2022, sourceType: "module" },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
  ignores: ["**/dist/**", "**/node_modules/**", "**/.prisma/**"],
});
