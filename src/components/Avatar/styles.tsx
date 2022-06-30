import { styled } from "@stitches/react";
export const Name = styled("p", {
  fontFamily: "Raleway",
  fontSize: "30px",
  lineHeight: "35px",
  marginTop: "24px",
  marginBottom: "12px",
});

export const Text = styled("p", {
  fontSize: "16px",
  marginBottom: "30px",
});

export const Wrapper = styled("div", {
  maxWidth: "613px",
  margin: "0 auto",
  padding: "0 7px",
  textAlign: "center",
  "& img": {
    borderRadius: "100%",
  },
});
