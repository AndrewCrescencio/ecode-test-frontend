import { Container, SocialLink } from "./styles";
import Image from "next/image";
import type { TSocialMediaLinks } from "@sharedtypes/profile/social-media-links";
type SocialLinks = {
  socialLinks: TSocialMediaLinks[];
};
const SocialLinks = ({ socialLinks }: SocialLinks) => (
  <Container>
    {socialLinks.map((link, i) => {
      return (
        <a
          title={link.slug}
          key={i}
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          <SocialLink
            dangerouslySetInnerHTML={{ __html: link.svg_icon }}
          ></SocialLink>
        </a>
      );
    })}
  </Container>
);
export default SocialLinks;
