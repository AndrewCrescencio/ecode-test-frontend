import Avatar from "@components/Avatar";
import SocialLinks from "@components/SocialLinks";
import { NewsletterForm } from "@components/NewsletterForm";
import { ContentBlocks } from "@components/ContentBlocks";

import { Container } from "./styles";

import { TProfile } from "@sharedtypes/profile/profile";

type ProfileProps = {
  content: TProfile;
};
export const Profile = ({ content }: ProfileProps) => {
  return (
    <Container>
      <Avatar
        name={content.name}
        text={content.bio}
        avatarUrl={content.avatar_url}
      />
      <SocialLinks socialLinks={content.social_media_links} />
      <NewsletterForm />
      <ContentBlocks blocks={content.content_blocks} />
    </Container>
  );
};
