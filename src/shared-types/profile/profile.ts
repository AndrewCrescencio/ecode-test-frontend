import type { TContentBlocks } from "./content-blocks";
import type { TSocialMediaLinks } from "./social-media-links";
import type { TShareLinks } from "./share-links";

export type TProfile = {
  name: string;
  bio: string;
  avatar_url: string;
  social_media_links: TSocialMediaLinks[];
  content_blocks: TContentBlocks[];
  share_links: TShareLinks;
};
