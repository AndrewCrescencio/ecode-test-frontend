import { styled } from "stitches.config";
export const Button = styled("button", {
  zIndex: 11,
  display: "grid",
  placeContent: "center",
  border: "1px solid $dark",
  width: "48px",
  height: "48px",
  borderRadius: "5px",
  backgroundColor: "$white",
  transition: "all 0.3s",
  "&.open": {
    backgroundColor: "$dark",
    border: "1px solid $white",
    "& svg": {
      transition: "all 0.3s",
      fill: "$white",
    },
  },
  "& svg": {
    transition: "all 0.3s",
    fill: "$dark",
  },
});
