import { styled } from "stitches.config";

export const Container = styled("div", {
  width: "100%",
  display: "flex",
  position: "relative",
  height: "88px",
  backgroundColor: "white",
  boxSizing: "border-box",
  "@bp2": {
    height: "100px",
    backgroundColor: "$dark",
  },
});

export const Wrapper = styled("nav", {
  width: "100%",
  boxSizing: "border-box",
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "0 20px",
  "@bp2": {
    padding: "0 40px",
  },
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "$white",
  "& .logo": {
    display: "none !important",
    "@bp2": {
      display: "block !important",
    },
  },
});

export const Buttons = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

export const Button = styled("button", {
  width: 48,
  height: 48,
  border: "1px solid $white",
  backgroundColor: "transparent",
  borderRadius: 5,
  cursor: "pointer",
});

export const MobileMenu = styled("div", {
  position: "fixed",
  color: "$white",
  background: "$dark",
  width: "100%",
  height: "100%",
  top: "0",
  right: "-100%",
  transition: "all 0.3s",
  zIndex: 9,
  "&.active": {
    right: "0",
  },
});

export const MobileMenuWrapper = styled("div", {
  margin: "0 auto",
  width: "100%",
  maxWidth: "1440px",
  padding: "27px 20px",
});

export const MobileMenuItem = styled("div", {
  display: "block",
  "&:first-of-type": {
    marginBottom: "87px",
  },
});

export const MedicalProfileLink = styled("a", {
  display: "flex",
  gap: "11px",
  marginBottom: "38px",
  fontSize: "24px",
});
