import { GetServerSideProps } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import Layout from "src/components/Layout";
import { api } from "src/services/api";
import { MedicalProfile } from "@components/MedicalProfile";
import { styled } from "stitches.config";

const Main = styled("section", {
  padding: 0,
  margin: 0,
  width: "100%",
  position: "relative",
});

import type { TMedicalProfile } from "@sharedtypes/medical-profile/medical-profile";

type HomeProps = {
  content: TMedicalProfile;
};
const Home = ({ content }: HomeProps) => {
  return (
    <div>
      <Head>
        <title>Perfil Médico</title>
        <meta
          name="description"
          content="Página de perfil médico test frontend ecode"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <MedicalProfile content={content} />
      </Main>
    </div>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (_context) => {
  try {
    const result = await api
      .get("/medical-profile")
      .then((response) => response.data);

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
