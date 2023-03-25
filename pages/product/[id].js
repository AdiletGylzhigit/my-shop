import Layout from "@/components/Layout";
import clientPromise from "@/mongo/connectdb";
import { cartAddItem, cartToggle } from "@/redux/reducer";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export async function getStaticPaths() {
  const client = await clientPromise;
  const db = client.db("my-shop");

  const products = await db.collection("products").find({}).toArray();

  return {
    paths: products.map((product) => ({
      params: { id: product._id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const client = await clientPromise;
  const db = client.db("my-shop");
  const id = params.id.toString();
  const o_id = new ObjectId(id);

  const products = await db.collection("products").find({}).toArray();
  const product = await db.collection("products").findOne({ _id: o_id });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

export default function ProductItem({ product, products }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const state = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState("");

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Извините. Продукт вышел из наличий");
      return;
    }

    dispatch(cartAddItem({ ...product, quantity, size, color }));
    dispatch(cartToggle());
  };

  const handleChange = (i) => {
    setSelectedImg(i);
  };

  return (
    <Layout title={`${product.name} - JIGIT+`}>
      <div className="mt-[150px] px-5 lg:px-[150px] grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5 lg:flex-row transition-all">
            <Image
              className="w-[400px] h-[450px] object-contain cursor-pointer"
              alt=""
              src={product.images[selectedImg] || product.images[0]}
              width={500}
              height={500}
            />
            <div >
              <div
                style={{ height: `${100 * selectedImg}px` }}
                className="hidden lg:block absolute w-[2px] border-l border-black duration-500"
              />
            </div>
            <div className="flex lg:flex-col gap-2">
              {product.images.map((img, i) => (
                <Image
                  key={i}
                  alt=""
                  onClick={() => handleChange(i)}
                  src={img}
                  className="w-[40px] lg:w-[60px] object-contain cursor-pointer"
                  width={500}
                  height={500}
                />
              ))}
            </div>
          </div>
        <div className="w-[350px]">
          <h1 className="uppercase text-xl font-[500]">{product.name}</h1>
          <p className="mt-5">{product.description}</p>
          <p className="my-2 font-[500]">
            Цена: <span className="font-[400]">{product.price} сом</span>
          </p>
          <div className="mt-5 w-[300px]">
            <p className="font-[500]">Размер</p>
            <select
              onChange={(e) => setSize(e.target.value)}
              className="mt-2 w-full bg-gray-100 p-3"
            >
              {product.sizes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-5 w-[300px]">
            <p className="font-[500]">Цвет</p>
            <select
              onChange={(e) => setColor(e.target.value)}
              className="mt-2 w-full bg-gray-100 p-3"
            >
              {product.colors.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-5 w-[300px]">
            <button
              onClick={addToCartHandler}
              className="p-3 w-full bg-blue-700 border-[2px] border-black font-[500] hover:scale-[1.01]"
            >
              ДОБАВИТЬ В КОРЗИНУ
            </button>
          </div>
          <div className="mt-5 w-[300px]">
            <button
              onClick={addToCartHandler}
              className="p-3 w-full bg-violet-700 font-[600] text-white tracking-widest hover:scale-[1.01]"
            >
              КУПИТЬ
            </button>
          </div>
          <Image
            src="/assets/payments.jpg"
            alt=""
            width={500}
            height={500}
            className="mt-10 w-[300px]"
          />
        </div>
      </div>

      <div className="mt-[100px] lg:px-[200px]">
        <h1 className="text-center text-xl font-[500]">
          ЗАКОНЧИ СВОЙ FIT С ЭТИМИ ПРОДУКТАМИ...
        </h1>
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {products.map((product) => (
            <div key={product._id} className="mt-10 h-[500px] w-[300px]">
              <Link href={`/product/${product._id}`}>
                <Image
                  src={product.images[0]}
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
