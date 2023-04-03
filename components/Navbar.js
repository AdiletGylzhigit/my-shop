import { cartToggle, dropToggle } from "@/redux/reducer";
import Link from "next/link";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import SideDrop from "./SideDrop";

export default function Navbar() {
  const cart = useSelector((state) => state.app.cart);
  const showCart = useSelector((state) => state.app.cart.showCart);
  const drop = useSelector((state) => state.app.cart.drop);
  const dispatch = useDispatch();
  return (
    <nav className="h-[10vh] px-[50px] py-5 lg:py-0 lg:px-[200px] flex justify-between fixed w-full top-0 z-[998]">
      <div
        onClick={() => dispatch(dropToggle())}
        className="one flex mt-1 cursor-pointer"
      >
        <div className="mr-1 w-[4px] h-[25px] bg-black mt-[5px]" />
        <div className="mr-1 w-[4px] h-[25px] bg-black mt-[5px]" />
        <div className="mr-1 w-[4px] h-[25px] bg-black mt-[5px]" />
      </div>
      <div>
        <Link href="/">
          <h1 className="text-5xl font-[500]">JIGIT+</h1>
        </Link>
      </div>
      <div
        onClick={() => dispatch(cartToggle())}
        className="mt-3 relative hover:text-blue-500 duration-200 cursor-pointer"
      >
        <FiShoppingBag size={30} />
        {cart.cartItems.length > 0 ? (
          <span className="absolute bg-red-500 text-sm text-white py-[2px] px-[8px] rounded-full top-[-7px] right-[-7px]">
            {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
          </span>
        ) : (
          <></>
        )}
      </div>
      {drop && <SideDrop />}
      {showCart && <Cart />}
    </nav>
  );
}
