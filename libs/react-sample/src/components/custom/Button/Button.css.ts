import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  ":hover": {
    background: "#222",
  },
  background: "#000",
  border: "none",
  borderRadius: 8,
  color: "#FFF",
  cursor: "pointer",
  padding: "12px 16px",
  textDecoration: "none",
});
