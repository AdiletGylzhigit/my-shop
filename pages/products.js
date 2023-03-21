import Layout from "@/components/Layout";
import clientPromise from "@/mongo/connectdb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function getStaticProps() {
  const client = await clientPromise;
  const db = client.db("my-shop");

  const products = await db.collection("products").find({}).toArray();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default function Products({ products }) {
  return (
    <Layout title="Продукты - JIGIT+">
      <div className="mt-[150px] px-5 lg:px-[200px]">
        <h1 className="text-center text-3xl font-[500]">ВСЕ ПРОДУКТЫ.</h1>
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {products.map((product) => (
            <div key={product._id} className="mt-10 h-[500px] w-[300px]">
              <Link href={`/product/${product._id}`}>
                <Image
                  src={product.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="h-[400px] w-[300px] object-contain"
                />
              </Link>
              <div className="min-h-[100px] bg-gray-100 flex flex-col justify-center items-center">
                <h1 className="text-center font-[500]">{product.name}</h1>
                <p className="mt-2 text-center font-[500] tracking-widest">
                  1200com (${product.price}){" "}
                  <span className="text-rose-500 font-[500]">OFF</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
