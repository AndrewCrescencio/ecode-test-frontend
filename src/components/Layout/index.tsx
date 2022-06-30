import { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import { Navbar } from "../Navbar";
import { styled } from "@stitches/react";
import { Footer } from "@components/Footer";
import LinksProvider from "src/context";

const PageContainer = styled("div", {
  width: "100%",
  height: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  boxSizing: "border-box",
  position: "relative",
  fontFamily: "Raleway !important",
});

type LayoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <LinksProvider>
        <Head>
          <title>Ecode Desafio Frontend</title>
          <meta property="og:title" content="My page title" key="title" />
          <meta name="author" content="Author: Andrew Crescencio" />
          <meta property="description" content="Desafio frontend Pedido Pago" />
          <meta
            property="keywords"
            content="ecode, desafio, frontend, front-end"
          />
          <meta property="og:site_name" content="ECode Test Frontend" />
        </Head>

        <Navbar />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </LinksProvider>
    </>
  );
};

export default Layout;
