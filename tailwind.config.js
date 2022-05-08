module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        back: "url('./src/assets/back.svg')",
        line: "url('./src/assets/line.png')",
        contact: "url('./src/assets/image3.png')",
      },
      backgroundColor: {
        custom: "#FFF",
        customLighter: "#FAFAFA",
        customBlue: "#22B0FF",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
