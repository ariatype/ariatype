const colors = require("tailwindcss/colors");

const cyan = require("@ddddurk/colors/colors/cyan.json");
const green = require("@ddddurk/colors/colors/green.json");
const pink = require("@ddddurk/colors/colors/pink.json");
const white = require("@ddddurk/colors/colors/white.json");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,mdx,tsx}",
    "./node_modules/@dddstack/davaiui-astro/**/safelist.json"
  ],
  plugins: [],
  theme: {
    colors: {
      cyan,
      gray: colors.stone,
      green,
      pink,
      white: white.white
    }
  }
};
