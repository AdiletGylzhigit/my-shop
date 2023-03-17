import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTelegram } from "react-icons/bs";

export default function Telegram() {
  return (
    <div className="mt-[150px] min-h-[80vh] bg-black flex flex-wrap lg:flex-nowrap justify-center gap-10 items-center">
      <Image
        src="/assets/telegramSc.png"
        alt=""
        width={2000}
        height={200}
        className="w-[150px] h-max"
      />
      <div className="w-[400px] text-white font-[500]">
        <p>
          ПРИСОЕДИНЯЙСЯ В ТЕЛЕГРАМ{" "}
          <BsTelegram className="mb-1 inline-block text-blue-500" /> ГРУППУ ДЛЯ
          ЭКЛЮЗИВНЫХ ПРЕДЛОЖЕНИЙ.
        </p>
        <a href="https://t.me/+MLZ4q5vmxoJiMTYy" target="_blank">
          <button className="mt-10 p-3 bg-blue-700 text-black hover:scale-[1.01]">
            ПРИСОЕДИНИТЬСЯ
          </button>
        </a>
      </div>
    </div>
  );
}
