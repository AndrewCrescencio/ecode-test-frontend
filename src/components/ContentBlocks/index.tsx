import {
  Grid,
  Video,
  Download,
  ExternalLink,
  Pix,
  Email,
  Item,
  Text,
  ModalContainer,
  Modal,
} from "./styles";
import downloadIcon from "public/assets/download-solid-1.svg";
import externalIcon from "public/assets/arrow-up-right-from-square-solid-1.svg";
import pixIcon from "public/assets/pix-brands-1.svg";
import emailIcon from "public/assets/envelope-solid-1.svg";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

import type { TContentBlocks } from "@sharedtypes/profile/content-blocks";
type ContentBlocksProps = {
  blocks: TContentBlocks[];
};
export const ContentBlocks = ({ blocks }: ContentBlocksProps) => {
  const [pixModal, setPixModal] = useState<boolean>(false);
  const [pixImageUrl, setPixImageUrl] = useState<string | StaticImageData>(
    "/public/assets/pix-brands-1.svg"
  );

  useEffect(() => {
    //preciso dar um jeito de filtrar isto
    let url: string | StaticImageData = blocks[3].config.qrcode_image_url
      ? blocks[3].config.qrcode_image_url
      : "/public/assets/pix-brands-1.svg";
    setPixImageUrl(url);
  }, [blocks]);

  return (
    <>
      <Grid>
        {blocks.map((block, i) => {
          switch (block.type) {
            case "video":
              return (
                <Video key={i}>
                  <iframe
                    title={block.title}
                    src={`https://www.youtube.com/embed/gEPmA3USJdI`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    width="100%"
                    height="100%"
                  ></iframe>
                </Video>
              );
              break;
            case "download":
              return (
                <Download title={block.title} key={i}>
                  <a
                    // href="https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf"
                    href={block.config.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={downloadIcon}
                      alt="Ícone download"
                      width={27}
                      height={27}
                    />
                    <Item>
                      <Text>Download</Text>
                    </Item>
                  </a>
                </Download>
              );
              break;
            case "external-link":
              return (
                <ExternalLink title={block.title} key={i}>
                  <a href={block.config.url} target="_blank" rel="noreferrer">
                    <Image
                      src={externalIcon}
                      alt="Ícone link externo"
                      width={23}
                      height={27}
                    />
                    <Item>
                      <Text>Link Externo</Text>
                    </Item>
                  </a>
                </ExternalLink>
              );
            case "pix":
              return (
                <Pix
                  onClick={() => setPixModal(true)}
                  title={block.title}
                  key={i}
                >
                  <Image src={pixIcon} alt="Ícone pix" width={23} height={27} />
                  <Item>
                    <Text>Pix</Text>
                  </Item>
                </Pix>
              );
            case "email":
              return (
                <Email title={block.title} key={i}>
                  <a
                    href="mailto:andrew_workstation@hotmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={emailIcon}
                      alt="Ícone email"
                      width={23}
                      height={27}
                    />
                    <Item>
                      <Text>Email</Text>
                    </Item>
                  </a>
                </Email>
              );
            default:
              return <h1>ops</h1>;
          }
        })}
      </Grid>

      <ModalContainer
        className={pixModal ? "open" : ""}
        onClick={() => setPixModal(false)}
      >
        <Modal>
          <Image
            src={pixImageUrl}
            layout="intrinsic"
            width={200}
            height={200}
            alt="Pix QR Code"
          />
        </Modal>
      </ModalContainer>
    </>
  );
};
