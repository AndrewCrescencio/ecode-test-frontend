import React, { createContext, useState } from "react";
import type { TShareLinks } from "@sharedtypes/profile/share-links";

export type LinksContextState = {
  links: TShareLinks;
  setLinks: (links: TShareLinks) => void;
};

const contextDefaultValues: LinksContextState = {
  links: {
    facebook: "",
    twitter: "",
    whatsapp: "",
  },
  setLinks: () => {},
};

export const LinksContext =
  createContext<LinksContextState>(contextDefaultValues);
LinksContext.displayName = "LinksCONTEXT";
type LinksProviderProps = {
  children: React.ReactNode;
};
const LinksProvider = ({ children }: LinksProviderProps) => {
  const [links, setLinks] = useState<TShareLinks>(contextDefaultValues.links);

  return (
    <LinksContext.Provider
      value={{
        links,
        setLinks,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
};

export default LinksProvider;
