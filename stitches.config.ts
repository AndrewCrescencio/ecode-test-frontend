// stitches.config.ts
import { createStitches } from "@stitches/react";
import { reset } from "stitches-reset";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      dark: "#101010",
      white: "#fff",
      black: "#000",
      darkGray: "#999",
      lightGray: "#c4c4c4",
    },
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
    bp4: "(min-width: 1280px)",
  },
});

// define the dark theme using the de-constructed function
export const darkTheme = createTheme({
  colors: {
    dark: "#101010",
    white: "#fff",
    black: "#000",
    darkGray: "#999",
    lightGray: "#c4c4c4",
  },
});

const GlobalStyles = globalCss({
  ...reset,
  html: {
    width: "100%",
    boxSizing: "border-box",
    "& *": {
      boxSizing: "border-box",
    },
  },
  body: {
    fontFamily: "Raleway",
    width: "100%",
    boxSizing: "border-box",
  },
});

//we can declare the styles here or in pages/_app.tsx
GlobalStyles();
