import { styled } from "stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "100%",
  padding: "22px 20px 0",
  display: "flex",
  flexDirection: "column",

  boxSizing: "border-box",
  "& >:first-of-type": {
    order: 1,
  },
  "& >:nth-child(2)": {
    order: 2,
  },
  "& >:nth-child(3)": {
    order: 3,
  },
  "& :nth-child(4)": {
    order: 4,
  },
  "@bp2": {
    padding: "60px 20 0",
    "& >:first-of-type": {
      order: 1,
    },
    "& >:nth-child(2)": {
      order: 2,
    },
    "& >:nth-child(3)": {
      order: 4,
    },
    "& :nth-child(4)": {
      order: 3,
    },
  },
});
