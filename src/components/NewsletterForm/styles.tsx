import { keyframes, styled } from "stitches.config";

import * as LabelPrimitive from "@radix-ui/react-label";

const StyledLabel = styled(LabelPrimitive.Root, {
  fontSize: "14px",
  lineHeight: "16px",
  fontWeight: "400",
  marginBottom: "6px",
  userSelect: "none",
  "&.error": {
    color: "red",
  },
});

export const Label = StyledLabel;

export const Container = styled("div", {
  width: "100%",
  maxWidth: "374px",
  margin: "0 auto",
  "@bp2": {
    margin: "68px auto 69px",
  },
});

export const Text = styled("p", {
  fontSize: "14px",
  lineHeight: "16px",
  fontWeight: "400",
  marginBottom: "6px",
});

export const Form = styled("form", {
  width: "100%",
  display: "flex",
  gap: "16px",
});

export const Input = styled("input", {
  width: "100%",
  display: "flex",
  gap: "16px",
  padding: "15px 16px",
  background: "$white",
  border: "1px solid $black",
  borderRadius: "5px",
});

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const Button = styled("button", {
  minWidth: "48px",
  height: "48px",
  padding: "0",
  display: "grid",
  placeContent: "center",
  backgroundColor: "$black",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  "&:disabled": {
    backgroundColor: "$lightGray",
  },

  "& .lds-ring": {
    display: "grid",
    placeContent: "center",
    position: "relative",
    width: "20px",
    height: "20px",
    "& div": {
      boxSizing: "border-box",
      display: "block",
      position: "absolute",
      width: "16px",
      height: "16px",
      margin: "2px",
      border: "2px solid #fff",
      borderRadius: "50%",
      animation: `${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
      borderColor: "#fff transparent transparent transparent",
      "& div:nth-child(1)": {
        animationDelay: "-0.45s",
      },
      "& div:nth-child(2)": {
        animationDelay: "-0.3s",
      },
      "& div:nth-child(3)": {
        animationDelay: "-0.15s",
      },
    },
  },
});
