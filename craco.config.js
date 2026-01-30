// craco.config.js
const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [
        require("@tailwindcss/postcss"),
        require("autoprefixer"),
      ],
    },
  },
  webpack: {
    alias: {
      // 👇 Force all references of 'tailwindcss' to point to v4 in node_modules
      tailwindcss: path.resolve(__dirname, "node_modules/tailwindcss"),
    },
  },
};

