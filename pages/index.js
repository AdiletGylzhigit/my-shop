import About from "@/components/About";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Join from "@/components/Join";
import Layout from "@/components/Layout";
import Telegram from "@/components/Telegram";
import clientPromise from "@/mongo/connectdb";
import Head from "next/head";

export async function getStaticProps() {
  const client = await clientPromise;
  const db = client.db("my-shop");

  const product = await db
    .collection("products")
    .findOne({ name: "В работай тишине Футболка" });

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

export default function Home({ product }) {
  return (
    <>
      <Head>
        <title>JIGIT+</title>
      </Head>
      <Layout>
        <Hero />
        <Featured product={product} />
        <About />
        <Telegram />
        <Join />
      </Layout>
    </>
  );
}
