import { styled, keyframes } from "stitches.config";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 238,
  backgroundColor: "$white",
  borderRadius: 5,
  border: "1px solid $black",
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const itemStyles = {
  fontSize: "16px",
  lineHeight: "18px",
  color: "$dark",
  position: "relative",
  userSelect: "none",
  textAlign: "center",
  padding: "14px 0",
  "& a": {
    textDecoration: "none",
    color: "inherit",
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  backgroundColor: "$dark",
  height: 1,
});

export const IconButton = styled("div", {
  height: 20,
  width: 17,
  display: "grid",
  placeContent: "center",
  color: "$white",
  backgroundColor: "$black",
  padding: 0,
  border: "none",
  cursor: "pointer",

  "&:focus": { boxShadow: "0 0 0 2px blue" },
});

export const DropdownMenuTrigger = styled(DropdownMenuPrimitive.Trigger, {
  display: "flex",
  border: "none",
  alignItems: "center",
  background: "transparent",
  padding: 0,
  color: "$white",
  gap: 11,
  fontSize: "24px",
});

export const DropdownMenu = DropdownMenuPrimitive.Root;
// export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuSeparator = StyledSeparator;
