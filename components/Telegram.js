import React from "react";
import { BsTelegram } from "react-icons/bs";

export default function Telegram() {
  
  return (
    <div className="mt-[150px] px-5 min-h-[80vh] bg-black flex flex-wrap lg:flex-nowrap justify-center gap-10 items-center">
      <img
        src="/assets/telegramSc.png"
        alt=""
        className="w-[150px] h-max object-contain"
      />
      <div className="sm:w-[400px] text-white font-[500]">
        <p>
          ПРИСОЕДИНЯЙСЯ В ТЕЛЕГРАМ{" "}
          <BsTelegram className="mb-1 inline-block text-blue-500" /> ГРУППУ ДЛЯ
          ЭКЛЮЗИВНЫХ ПРЕДЛОЖЕНИЙ.
        </p>
        <a href="https://t.me/jigitplus" target="_blank">
          <button className="my-10 p-3 bg-blue-700 text-black hover:scale-[1.01]">
            ПРИСОЕДИНИТЬСЯ
          </button>
        </a>
      </div>
    </div>
  );
}
