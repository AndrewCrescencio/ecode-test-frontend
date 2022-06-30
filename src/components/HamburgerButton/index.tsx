import React from "react";
import { Button } from "./styles";
import barsSolid from "public/assets/bars-solid-1.svg";
import xmarkSolid from "public/assets/xmark-solid-1.svg";
import Image from "next/image";
type HamburgerButtonProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const HamburgerButton = ({ menuOpen, setMenuOpen }: HamburgerButtonProps) => (
  <Button
    className={menuOpen ? "open" : ""}
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? (
      <Image
        className="close"
        src={xmarkSolid}
        alt="close button"
        width={17}
        height={20}
      />
    ) : (
      <Image
        className="close"
        src={barsSolid}
        width={13}
        height={20}
        alt="hamburguer button"
      />
    )}
  </Button>
);
export default HamburgerButton;
