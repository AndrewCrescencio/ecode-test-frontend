import React, { useContext } from "react";
import arrowUp from "public/assets/arrow-up-from-bracket-solid-1.svg";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  IconButton,
} from "./styles";

import { LinksContext } from "src/context";
import type { LinksContextState } from "src/context/index";

export const MobileShareButton = () => {
  const handleSharing = async (link: string) => {
    const shareDetails = {
      title: link,
      text: link,
      url: link,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareDetails);
      } catch (error) {
        alert(`Não é possivel compartilhar: ${error}`);
      }
    } else {
      window.open(link, "_blank");
    }
  };

  const { links } = useContext<LinksContextState>(LinksContext);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <>
          <IconButton aria-label="Customise options">
            <Image src={arrowUp} alt="Compartilhar" />
          </IconButton>
          compartilhar
        </>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={20} align="center">
        <DropdownMenuItem onClick={() => handleSharing(links.facebook)}>
          Facebook
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleSharing(links.twitter)}>
          Twitter
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleSharing(links.whatsapp)}>
          WhatsApp
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
