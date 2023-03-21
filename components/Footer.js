import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="mt-[100px] lg:px-20 py-12 lg:py-12 text-white font-[500] bg-black ">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <p>Права защищены © JIGIT+ 2023 </p>
          <div className="mt-5 flex flex-wrap gap-5 lg:w-[700px]">
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
        <div>
          <p className="mb-5">Связаться с нами</p>
          <p className="flex gap-5  justify-start items-center">
            <AiOutlineMail size={20} />
            <span>jigitreply@gmail.com</span>
          </p>
          <div className="mt-5 flex gap-5">
            <a href="https://wa.me/message/PYGKMJD35DYXA1" target="_blank">
              <BsWhatsapp className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100089681949079"
              target="_blank"
            >
              <BsFacebook className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
