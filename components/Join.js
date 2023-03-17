import React from "react";

export default function Join() {
  return (
    <div className="mt-[150px] min-h-[25vh] flex flex-col lg:flex-row">
      <div className="flex-1 flex justify-center items-center border-t border-t-black border-b border-b-black text-xl lg:text-3xl font-[500]">
        ПУСТЬ ТВОИ РЕЗУЛЬТАТЫ ГОВОРЯТ ЗА ТЕБЯ
      </div>
      <div className="flex-1 flex flex-col justify-center items-center bg-black">
        <h1 className="text-white text-sm font-[500]">ПОДПИШИСЬ НА НАШИ НОВОСТИ</h1>
        <div className="mt-5">
          <input
            type="email"
            name="email"
            className="lg:w-[400px] h-max p-3"
            placeholder="Email"
          />
          <button className="w-[200px] h-max bg-blue-700 p-3 font-[500] hover:text-gray-300">
            ПОДПИСАТЬСЯ
          </button>
        </div>
      </div>
    </div>
  );
}
