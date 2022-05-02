module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        blob: "url('./src/assets/blob.svg')",
        bigblob: "url('./src/assets/blob2.svg')",
        fundo: "url('./src/assets/fundo.jpg')",
        figure: "url('./src/assets/figure.svg')",
        line: "url('./src/assets/line.png')",
      },
      backgroundColor: {
        custom: "#EEF5FB",
        customLighter: "#E6ECF1",
      },
    },
  },
  plugins: [],
};
