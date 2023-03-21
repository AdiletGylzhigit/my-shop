import { cartAddItem, cartToggle } from "@/redux/reducer";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Featured({ product }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
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

  console.log(color)
  console.log(size)


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
        <p className="my-2 font-[500]">
          Цена: <span className="font-[400]">{product.price} сом</span>
        </p>
        <p className="text-[12px] font-[500]">
          (доставка в течений 1-3 дней - Бишкек)
        </p>
        <div className="mt-5 w-[300px]">
          <p className="font-[500]">Размер</p>
          <select
            onChange={(e) => setSize(e.target.value)}
            className="mt-2 w-full bg-gray-100 p-3"
          >
            {product.sizes.map((item) => (
              <option key={item} value={item}>{item}</option>
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
              <option key={item} value={item}>{item}</option>
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
      </div>
    </div>
  );
}
