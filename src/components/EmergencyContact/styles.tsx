import { styled } from "stitches.config";
export const Container = styled("div", {
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "24px 0 0",
  "@bp3": {
    padding: "40px 0",
    borderBottom: "1px solid $lightGray",
    marginBottom: "158px",
  },
});

export const Title = styled("h1", {
  fontSize: "16px",
  lineHeight: "19px",
  fontWeight: "400",
  marginBottom: "24px",
  "@bp2": {
    marginBottom: "31px",
  },
  "@bp3": {
    fontSize: "30px",
    lineHeight: "35px",
  },
});
export const ContactName = styled("p", {
  fontSize: "16px",
  lineHeight: "19px",
});

export const ContactNumber = styled("p", {
  fontSize: "24px",
  lineHeight: "28px",
});

export const Button = styled("a", {
  width: "100%",
  display: "block",
  border: "1px solid $black",
  borderRadius: "5px",
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  backgroundColor: "$white",
  color: "$black",
  padding: "14px 0 15px",
  margin: "32px auto 40px",
  "@bp3": {
    display: "none",
  },
});
