import { styled } from "@stitches/react";
export const Container = styled("div", {
  width: "252px",
  maxWidth: "252px",
  display: "flex",
  gap: "20px",
  margin: "0 auto",
  alignItems: "center",
  marginBottom: "30px",
  overflow: "hidden",
});

export const SocialLink = styled("div", {
  width: "48px",
  overflow: "hidden",
  maxWidth: "48px !important",
  height: "48px",
  backgroundColor: "$dark",
  display: "grid",
  placeContent: "center",
  borderRadius: "5px",
  cursor: "pointer",

  "& svg": {
    overflow: "hidden",
    fill: "$white",
    width: "20px",
    maxWidth: "20px",
    height: "20px",
  },
});
