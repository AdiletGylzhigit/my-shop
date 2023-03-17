import { cartAddItem, cartToggle } from "@/redux/reducer";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Featured({ product }) {
  const [size, setSize] = useState('M');
  const [color, setColor] = useState('Черный');
  const state = useSelector((state) => state.app);
  const dispatch = useDispatch();

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

  console.log(size)
  console.log(color)
  return (
    <div className="mt-32 min-h-[80vh] px-5 lg:px-[250px] grid lg:grid-cols-2 gap-10">
      <div>
        <Image
          src={product.image}
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="w-[350px]">
        <h1 className="uppercase text-xl font-[500]">{product.name}</h1>
        <p className="mt-5">{product.description}</p>
        <p className="mt-2 font-[500]">Цена:</p>
        <p>
          1200com (${product.price}){" "}
          <span className="text-rose-500 font-[500]">OFF</span>
        </p>
        <p className="text-[12px]">(доставка в течений 1-3 дней)</p>
        <div className="mt-5 w-[300px]">
          <p className="font-[500]">Размер</p>
          <select onChange={(e) => setSize(e.target.value)} className="mt-2 w-full bg-gray-100 p-3">
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
          </select>
        </div>
        <div className="mt-5 w-[300px]">
          <p className="font-[500]">Цвет</p>
          <select onChange={(e) => setColor(e.target.value)} className="mt-2 w-full bg-gray-100 p-3">
              <option>Черный</option>
              {/* <option>Белый</option> */}
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
      </div>
    </div>
  );
}
