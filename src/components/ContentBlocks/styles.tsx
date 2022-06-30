import { styled } from "stitches.config";
export const Grid = styled("div", {
  position: "relative",
  margin: "30px auto 0",
  width: "100%",
  maxWidth: "600px",
  display: "grid",
  height: "100%",
  gap: "20px",
  justifyContent: "center",
  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
  gridTemplateRows: "auto",
  gridTemplateAreas: "'video video' 'download externalLink' 'pix email'",
  "@bp4": {
    maxWidth: "none",
    overflow: "hidden",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    height: "100%",
    maxHeight: "245px",
  },
});

export const Video = styled("div", {
  gridArea: "video",
  background: "$dark",
  borderRadius: "10px",
  minHeight: "202px",
  position: "relative",
  overflow: "hidden",
  width: "100%",
  paddingBottom: "56.25%",
  height: 0,
  maxHeight: "245px",

  "@bp4": {
    position: "static",
    height: "245px",
    width: "453px",
    paddingBottom: 0,
  },
  "& iframe": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    "@bp4": {
      position: "static",
      width: "100%",
      height: "100%",
    },
  },
});

export const Download = styled("div", {
  gridArea: "download",
  width: "100%",
  height: "235px",
  "@bp4": {
    maxWidth: "184px",
    height: "245px",
  },
  background: "$dark",
  borderRadius: "10px",
  "& a": {
    textDecoration: "none",
    width: "100%",
    height: "100%",
    display: "grid",
    placeContent: "center",
  },
});

export const ExternalLink = styled("div", {
  gridArea: "externalLink",
  width: "100%",
  height: "235px",
  "@bp4": {
    maxWidth: "184px",
    height: "245px",
  },
  background: "$dark",
  borderRadius: "10px",
  "& a": {
    textDecoration: "none",
    width: "100%",
    height: "100%",
    display: "grid",
    placeContent: "center",
  },
});

export const Pix = styled("div", {
  gridArea: "pix",
  width: "100%",
  height: "235px",
  "@bp4": {
    maxWidth: "184px",
    height: "245px",
  },
  background: "$dark",
  borderRadius: "10px",
  display: "grid",
  placeContent: "center",
});

export const Email = styled("div", {
  gridArea: "email",
  width: "100%",
  height: "235px",
  "@bp4": {
    maxWidth: "184px",
    height: "245px",
  },
  background: "$dark",
  borderRadius: "10px",
  "& a": {
    textDecoration: "none",
    width: "100%",
    height: "100%",
    display: "grid",
    placeContent: "center",
  },
});

export const ContentBlock = styled("div", {
  gridArea: "email",
  width: "100%",
  height: "235px",
  "@bp4": {
    maxWidth: "184px",
    height: "245px",
  },
  background: "$dark",
  borderRadius: "10px",
  "& a": {
    textDecoration: "none",
    width: "100%",
    height: "100%",
    display: "grid",
    placeContent: "center",
  },
});

export const Item = styled("div", {});

export const Text = styled("p", {
  fontSize: "16px",
  lineHeight: "18px",
  color: "$white",
  fontWeight: "400",
  marginTop: "19px",
});

export const ModalContainer = styled("div", {
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
  height: "200px",
  backgroundColor: "$white",
  border: "1px solod $black",
  borderRadius: 10,
  display: "grid",
  textAlign: "center",
});
