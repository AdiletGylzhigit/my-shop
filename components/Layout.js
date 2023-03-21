import Head from "next/head";
import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, title }) {
  return (
    <>
      {/* <Head>
        <title>{title}</title>
      </Head> */}
      <Navbar />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </>
  );
}
