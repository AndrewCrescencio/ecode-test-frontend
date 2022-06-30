import React, { useContext } from "react";
import shareIcon from "public/assets/share-icon.svg";
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

export const ShareButton = () => {
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
      <DropdownMenuTrigger asChild>
        <IconButton aria-label="Customise options">
          <Image src={shareIcon} alt="Compartilhar" />
        </IconButton>
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

export default ShareButton;
