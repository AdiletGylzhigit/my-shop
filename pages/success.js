import React, { useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import Layout from "@/components/Layout";
import { runFireworks } from "@/lib/utils";

export default function Success() {
  useEffect(() => {
    runFireworks();
  }, []);

  return (
    <Layout title="Успешная оплата - JIGIT+">
      <div className="min-h-[80vh] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <p className="icon">
            <BsBagCheckFill size={150} className="text-green-500" />
          </p>
          <h2 className="mt-5 font-[500]">Спасибо за ваш заказ!</h2>
          <p className="mt-5">
            Проверьте вашу электронную почту для получения информаций о заказе.
          </p>
          <p className="mt-1">
            Если у вас есть вопросы, свяжитесь{" "}
            <a className="email" href="mailto:bbodyreply@gmail.com">
              jigitreply@gmail.com
            </a>
          </p>
          <Link href="/">
            <button
              type="button"
              width="300px"
              className="mt-5 text-lg bg-red-500 p-2 px-10 rounded-md text-white font-[500] hover:scale-[1.01]"
            >
              Продолжить Покупку
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
