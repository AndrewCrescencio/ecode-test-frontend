import { styled } from "stitches.config";
export const Container = styled("div", {
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto",
  "@bp3": {
    borderTop: "1px solid $lightGray",
    borderBottom: "1px solid $lightGray",
    paddingTop: "40px",
    paddingBottom: "16px",
  },
});

export const ItemsContainer = styled("div", {
  "@bp3": {
    display: "flex",
    justifyContent: "flex-start",
    gap: "92px",
    margin: "0",
  },
});
export const Title = styled("h1", {
  fontSize: "30px",
  lineHeight: "35px",
  display: "none",
  "@bp3": {
    display: "block",
  },
});

export const Item = styled("div", {
  width: "100%",
  borderTop: "1px solid $lightGray",
  padding: "24px 9px",
  "&:last-of-type": {
    borderBottom: "1px solid $lightGray",
  },
  "@bp3": {
    width: "max-content",
    padding: "24px 0",
    borderTop: "none",
    "&:last-of-type": {
      borderBottom: "none",
    },
  },
});
export const Text = styled("p", {
  color: "$black",
  fontSize: "24px",
  lineHeight: "28px",
  fontWeight: "400",
});

export const Small = styled("small", {
  color: "$black",
  fontSize: "16px",
  lineHeight: "18px",
  fontWeight: "400",
});
