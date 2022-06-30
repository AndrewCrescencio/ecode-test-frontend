import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "public/assets/ecode-logo.svg";
import medicIcon from "public/assets/medic-icon.svg";
import shareIconMobile from "public/assets/share-icon-mobile.svg";

import { useWindowSize } from "src/hooks/useWindowSize";
import HamburgerButton from "../HamburgerButton";
import { ShareButton } from "@components/ShareButton";
import { MobileShareButton } from "@components/MobileShareButton";

import {
  Container,
  Wrapper,
  Buttons,
  Button,
  MobileMenu,
  MobileMenuWrapper,
  MobileMenuItem,
  MedicalProfileLink,
} from "./styles";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const size = useWindowSize();
  useEffect(() => {
    if (size.width > 768) {
      setMenuOpen(false);
    }
  }, [size]);
  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <Image
            className="logo"
            src={logo}
            alt="ecode"
            width={125}
            height={34}
          />
        </Link>
        <Buttons>
          {size.width <= 768 ? (
            <>
              <HamburgerButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            </>
          ) : (
            <>
              <Link href="/medical-profile">
                <Button>
                  <Image src={medicIcon} alt="medic profile link" />
                </Button>
              </Link>
              <Link href="/">
                <ShareButton />
              </Link>
            </>
          )}
        </Buttons>
      </Wrapper>
      <MobileMenu className={menuOpen ? "active" : ""}>
        <MobileMenuWrapper>
          <MobileMenuItem>
            <Link className="logo" href="/">
              <Image
                className="logo"
                src={logo}
                alt="ecode"
                width={125}
                height={34}
              />
            </Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <Link href="/medical-profile">
              <MedicalProfileLink className="medical-profile-link">
                <Image src={medicIcon} alt="ecode" width={20} height={20} />
                <p>Perfil Médico</p>
              </MedicalProfileLink>
            </Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileShareButton />
          </MobileMenuItem>
        </MobileMenuWrapper>
      </MobileMenu>
    </Container>
  );
};
