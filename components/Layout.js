import Head from "next/head";
import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="google-site-verification"
          content="Z1y-jEXqrFFvb9uUB6DXBs1iHFTZNZDdscjZERY8GDo"
        />
      </Head>
      <Navbar />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </>
  );
}
