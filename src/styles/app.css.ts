import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const cssVars = createGlobalTheme(":root", {
  color: {
    white: "rgb(255, 255, 255)",
    orangeLight: "rgb(252, 238, 199)",
    orange: "rgb(255, 204, 103)",
    orangeDark: "rgb(96, 72, 21)",
    orangeDarkest: "rgb(56, 54, 51)",
    blueLight: "rgb(0, 153, 255)",
    blue: "rgb(6, 91, 169)",
    blueDark: "rgb(28, 49, 68)",
    green: "rgb(159, 228, 169)",
    greenDark: "rgb(40, 83, 46)",
    red: "rgb(255, 124, 124)",
    redDark: "rgb(169, 96, 96)",
    grayLight: "rgb(241, 241, 241)",
    gray: "rgb(232, 232, 232)",
    grayDark: "rgb(209, 209, 209)",
    blackLight: "rgb(107, 107, 107)",
    black: "rgb(34, 34, 34)",
    blackDark: "rgb(16, 16, 16)",
  },
  fontSize: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "1.75rem",
    "3xl": "2rem",
    "4xl": "3rem",
  },
  lineHeight: {
    none: "1",
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
    loose: "2",
  },
  width: {
    container: "63.5rem",
    prose: "40rem",
    sidebar: "16rem",
  },
});

globalStyle("body", {
  // fontFamily: `"Noto Sans JP Variable", "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`,
  fontSize: cssVars.fontSize.md,
  lineHeight: cssVars.lineHeight.normal,
  color: cssVars.color.blueDark,
  backgroundColor: cssVars.color.white,
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: cssVars.color.gray,
      backgroundColor: cssVars.color.black,
    },
  },
});

globalStyle("*:focus", {
  outline: "none",
  boxShadow: "0 0 1px 1px rgb(0 0 0 / 20%)",
  "@media": {
    "(prefers-color-scheme: dark)": {
      boxShadow: "0 0 1px 1px rgb(255 255 255 / 20%)",
    },
  },
});

globalStyle("*:focus-visible", {
  outline: "none",
  boxShadow: `0 0 0 2px ${cssVars.color.white}, 0 0 0 4px ${cssVars.color.blue}`,
  "@media": {
    "(prefers-color-scheme: dark)": {
      boxShadow: `0 0 0 2px ${cssVars.color.black}, 0 0 0 4px ${cssVars.color.blue}`,
    },
  },
});

globalStyle(":target", {
  scrollMarginBlockStart: "6rem",
  "@media": {
    "screen and (min-width: 64em)": {
      scrollMarginBlockStart: "1rem",
    },
  },
});
