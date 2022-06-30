import { styled } from "stitches.config";
export const Button = styled("button", {
  width: "48px",
  height: "48px",
  backgroundColor: "$white",
  border: "1px solid $black",
  borderRadius: "5px",
  cursor: "pointer",
  position: "fixed",
  top: 20,
  left: 20,
  "@bp2": {
    position: "absolute",
    top: 60,
  },
});
