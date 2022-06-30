import { styled } from "stitches.config";
export const Container = styled("div", {
  display: "none",
  width: "100%",
  height: "100%",
  position: "fixed",
  overflow: "auto",
  top: 0,
  left: 0,
  boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
  placeContent: "center",
  zIndex: 3,
  "&.open": {
    display: "grid",
  },
});
export const Modal = styled("div", {
  width: "100%",
  maxWidth: "374px",
  height: "199px",
  backgroundColor: "$white",
  borderRadius: 10,
  display: "block",
  padding: "36px 24px",
  textAlign: "center",
  border: "1px solid $black",
  "@bp3": {
    width: "742px",
    maxWidth: "742px",
    padding: "51px 0 49px",
    height: "207px",
  },
});

export const Text = styled("p", {
  color: "$black",
  fontSize: "24px",
  lineHeight: "28px",
  marginBottom: "20px",
  "@bp2": {
    marginBottom: "28px",
  },
});

export const Button = styled("button", {
  width: "100%",
  padding: "15px 0",
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "center",
  backgroundColor: "$black",
  color: "white",
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
  "@bp2": {
    maxWidth: "157px",
  },
});
