import Link from "next/link";
import React from "react";


export default function Footer() {
  return (
    <div className="mt-[100px] lg:px-20 py-12 lg:py-5 text-white font-[500] bg-black ">
      <div className="p-3 flex justify-between">
        <p>Права защищены © JIGIT+ 2023 </p>
        <p>Свяжитесь jigitreply@gmail.com</p>
      </div>
      <div className="mt-5 px-3 flex flex-wrap lg:w-[700px] gap-5">
        <Link href="/shipping-policy">
          <p className="text-[12px]">ПОЛИТИКА ДОСТАВКИ</p>
        </Link>
        <Link href="/refund-policy">
          <p className="text-[12px]">ПОЛИТИКА ВОЗВРАТА</p>
        </Link>
        <Link href="/chargeback-policy">
          <p className="uppercase text-[12px]">
            Политика предотвращения возвратных платежей
          </p>
        </Link>
        <Link href="/privacy-policy">
          <p className="uppercase text-[12px] text-right">
            Политика конфедициальности
          </p>
        </Link>

        <Link href="/terms-of-service">
          <p className="uppercase text-[12px]">Условия использования</p>
        </Link>
      </div>
    </div>
  );
}
