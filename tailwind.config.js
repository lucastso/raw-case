module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        back: "url('./src/assets/back.svg')",
        line: "url('./src/assets/line.png')",
      },
      backgroundColor: {
        custom: "#FFF",
        customLighter: "#FAFAFA",
        customBlue: "#22B0FF",
      },
    },
  },
  plugins: [],
};
