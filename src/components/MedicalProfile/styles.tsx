import { styled } from "stitches.config";
export const Container = styled("div", {
  maxWidth: "1280px",
  width: "100%",
  margin: "0 auto",
  padding: "22px 20px 0",
  "@bp2": {
    padding: "60px 20px 0",
  },
  boxSizing: "border-box",
  position: "relative",
});
