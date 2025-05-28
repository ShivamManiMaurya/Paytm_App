// apps/web/tailwind.config.js
const config = require("config/tailwind.config");

module.exports = {
  ...config,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}", // If you're using shared UI packages
  ],
};
