/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  trailingComma: "none",
  tabWidth: 4,
  arrowParens: "avoid",
  overrides: [
    {
      files: ["*.config.*", "*.json"],
      options: {
        tabWidth: 2,
      },
    },
  ],
};

export default config;
