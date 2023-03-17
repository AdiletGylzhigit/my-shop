import Layout from "@/components/Layout";
import React from "react";

export default function ShipppingPolicy() {
  return (
    <Layout title='Политика доставки - JIGIT+'>
      <div className="mt-[150px] px-[200px]">
        <h1 className="text-center text-4xl font-[600]">ПОЛИТИКА ДОСТАВКИ</h1>
        <ul className="mt-[50px] px-[250px] flex  flex-col gap-5">
          <li className="list-disc font-[500]">Мы осуществляем доставку заказов по СНГ!</li>
          <li className="list-disc font-[500]">Мы также обеспечиваем доставку по всему миру по обычным международным тарифам CARGO.</li>
          <li className="list-disc font-[500]">Товары будут доставляться напрямую из наших центров распределения продукции.</li>
          <li className="list-disc font-[500]">Пожалуйста, дайте нам 2-4 недели для отправки вашего заказа</li>
          <li className="list-disc font-[500]">Стоимость доставки первого класса CARGO должна обеспечивать доставку в течение 3-5 рабочих дней после отправки.</li>
          <li className="list-disc font-[500]">Если у вас есть какие-либо проблемы с доставкой или вопросы о доставке, напишите в нашу службу поддержки клиентов по адресу jigitreply@gmail.com.</li>
        </ul>
      </div>
    </Layout>
  );
}
