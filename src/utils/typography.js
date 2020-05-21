import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.8,
  headerFontFamily: [
    "Oswald",  "sans-serif"
  ],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  googleFonts: [
    {
      name: 'Oswald',
      styles: [
        '400',
      ],
    },
    {
      name: 'Open Sans',
      styles: [
        '400',
      ],
    },
  ],
  
});

typography.injectStyles();

export default typography
