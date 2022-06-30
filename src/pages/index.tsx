import { ReactElement, useContext, useEffect } from "react";
import { GetServerSideProps } from "next";
import { LinksContext } from "src/context";
import Head from "next/head";
import { api } from "@services/api";

import Layout from "@components/Layout";
import { Profile } from "@components/Profile";

import type { TProfile } from "@sharedtypes/profile/profile";

type HomeProps = {
  content: TProfile;
};

const Home = ({ content }: HomeProps) => {
  const { links, setLinks } = useContext(LinksContext);
  useEffect(() => {
    setLinks(content.share_links);
  }, [content.share_links, links, setLinks]);
  return (
    <div>
      <Head>
        <title>Página inicial</title>
        <meta name="description" content="Página inicial test frontend ecode" />
      </Head>
      <Profile content={content} />
    </div>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (_context) => {
  try {
    const result = await api.get("/profile").then((response) => response.data);
    return {
      props: {
        content: result,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
