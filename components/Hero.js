import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div>
      <Image
        src="/assets/hero.jpg"
        alt=""
        width={2000}
        height={2000}
        className="relative w-[100vw] h-[95vh] object-cover"
      />
      <div className="absolute top-[45%] flex w-full justify-center">
        <Link href='/products'>
          <button className="px-8 py-4 bg-black text-xl text-white font-[500] hover:scale-[1.01] duration-100">
            В ПОКУПКИ
          </button>
        </Link>
      </div>
    </div>
  );
}
