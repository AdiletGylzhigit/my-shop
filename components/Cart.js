import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useRouter } from "next/router";
import { MdOutlineWhatsapp } from "react-icons/md";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  cartAddItem,
  cartToggle,
  cartRemoveItem,
  saveShippingAddress,
  cartClearItems,
} from "@/redux/reducer";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { getError } from "@/utils/error";
import axios from "axios";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { BsWhatsapp } from "react-icons/bs";

export default function Cart({ product }) {
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const router = useRouter();
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [makePayment, setMakePayment] = useState(false);
  const [loading, setLoading] = useState(false);
  const state = useSelector((state) => state.app.cart);
  const { cartItems, shippingAddress } = state;
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

  const totalPrice = round2(
    cartItems.reduce((a, c) => a + c.quantity * c.price, 0) / 87
  ); // 123.4567 => 123.46

  useEffect(() => {
    const loadPaypalScript = async () => {
      const { data: clientId } = await axios.get("/api/keys/paypal");
      paypalDispatch({
        type: "resetOptions",
        value: {
          "client-id": clientId,
          currency: "USD",
        },
      });
      paypalDispatch({ type: "setLoadingStatus", value: "pending" });
    };
    loadPaypalScript();
  }, [paypalDispatch]);

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
  }, [setValue, shippingAddress]);

  const removeItemHandler = (item) => {
    dispatch(cartRemoveItem(item));
  };

  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch(cartAddItem({ ...item, quantity }));
  };

  const submitHandler = async ({ fullName, address, phoneNumber, email }) => {
    dispatch(saveShippingAddress({ fullName, address, phoneNumber, email }));
    setMakePayment(true);
  };

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      const { fullName, address, phoneNumber, email } = shippingAddress;

      let name2;
      let slug2;
      let quantity2;
      let size2;
      let color2;
      let name3;
      let slug3;
      let quantity3;
      let size3;
      let color3;
      let name4;
      let slug4;
      let quantity4;
      let size4;
      let color4;
      let name5;
      let slug5;
      let quantity5;
      let size5;
      let color5;
      let name6;
      let slug6;
      let quantity6;
      let size6;
      let color6;
      let name7;
      let slug7;
      let quantity7;
      let size7;
      let color7;
      let name8;
      let slug8;
      let quantity8;
      let size8;
      let color8;
      let name9;
      let slug9;
      let quantity9;
      let size9;
      let color9;
      let name10;
      let slug10;
      let quantity10;
      let size10;
      let color10;

      const { name, slug, quantity, size, color } = cartItems[0];

      if (cartItems[1]) {
        const {
          name: name2_1,
          slug: slug2_1,
          quantity: quantity2_1,
          color: color2_1,
          size: size2_1,
        } = cartItems[1];
        name2 = name2_1;
        slug2 = slug2_1;
        size2 = size2_1;
        color2 = color2_1;
        quantity2 = quantity2_1;
      }
      if (cartItems[2]) {
        const {
          name: name3_1,
          slug: slug3_1,
          quantity: quantity3_1,
          color: color3_1,
          size: size3_1,
        } = cartItems[2];
        name3 = name3_1;
        slug3 = slug3_1;
        quantity3 = quantity3_1;
        size3 = size3_1;
        color3 = color3_1;
      }
      if (cartItems[3]) {
        const {
          name: name4_1,
          slug: slug4_1,
          quantity: quantity4_1,
          color: color4_1,
          size: size4_1,
        } = cartItems[3];
        name4 = name4_1;
        slug4 = slug4_1;
        quantity4 = quantity4_1;
        size4 = size4_1;
        color4 = color4_1;
      }
      if (cartItems[4]) {
        const {
          name: name5_1,
          slug: slug5_1,
          quantity: quantity5_1,
          color: color5_1,
          size: size5_1,
        } = cartItems[4];
        name5 = name5_1;
        slug5 = slug5_1;
        quantity5 = quantity5_1;
        size5 = size5_1;
        color5 = color5_1;
      }
      if (cartItems[5]) {
        const {
          name: name6_1,
          slug: slug6_1,
          quantity: quantity6_1,
          color: color6_1,
          size: size6_1,
        } = cartItems[5];
        name6 = name6_1;
        slug6 = slug6_1;
        quantity6 = quantity6_1;
        size6 = size6_1;
        color6 = color6_1;
      }
      if (cartItems[6]) {
        const {
          name: name7_1,
          slug: slug7_1,
          quantity: quantity7_1,
          color: color7_1,
          size: size7_1,
        } = cartItems[6];
        name7 = name7_1;
        slug7 = slug7_1;
        quantity7 = quantity7_1;
        size7 = size7_1;
        color7 = color7_1;
      }
      if (cartItems[7]) {
        const {
          name: name8_1,
          slug: slug8_1,
          quantity: quantity8_1,
          color: color8_1,
          size: size8_1,
        } = cartItems[7];
        name8 = name8_1;
        slug8 = slug8_1;
        quantity8 = quantity8_1;
        size8 = size8_1;
        color8 = color8_1;
      }
      if (cartItems[8]) {
        const {
          name: name9_1,
          slug: slug9_1,
          quantity: quantity9_1,
          color: color9_1,
          size: size9_1,
        } = cartItems[8];
        name9 = name9_1;
        slug9 = slug9_1;
        quantity9 = quantity9_1;
        size9 = size9_1;
        color9 = color9_1;
      }
      if (cartItems[9]) {
        const {
          name: name10_1,
          slug: slug10_1,
          quantity: quantity10_1,
          color: color10_1,
          size: size10_1,
        } = cartItems[9];
        name10 = name10_1;
        slug10 = slug10_1;
        quantity10 = quantity10_1;
        size10 = size10_1;
        color10 = color10_1;
      }

      const infoOrder = {
        name,
        slug,
        quantity,
        size,
        color,
        name2,
        slug2,
        quantity2,
        size2,
        color2,
        name3,
        slug3,
        quantity3,
        size3,
        color3,
        name4,
        slug4,
        quantity4,
        size4,
        color4,
        name5,
        slug5,
        quantity5,
        size5,
        color5,
        name6,
        slug6,
        quantity6,
        size6,
        color6,
        name7,
        slug7,
        quantity7,
        size7,
        color7,
        name8,
        slug8,
        quantity8,
        size8,
        color8,
        name9,
        slug9,
        quantity9,
        size9,
        color9,
        name10,
        slug10,
        quantity10,
        size10,
        color10,
        fullName,
        address,
        phoneNumber,
        email,
        totalPrice,
      };

      try {
        setLoading(true);
        const { data } = await axios.post("/api/orders", {
          orderItems: cartItems,
          shippingAddress,
          totalPrice,
        });

        const { data: data2 } = await axios.post("/api/email", infoOrder);
        const { data: data3 } = await axios.post("/api/send", infoOrder);
        setLoading(false);
        dispatch(cartClearItems());
        dispatch(cartToggle());
        toast.success("Заказ успешно оплачен");
        router.push("/success");
      } catch (err) {
        getError(err);
        toast.error(
          "С данной картой не получается провести операцию, Попробуйте другую карту."
        );
        console.log(getError(err));
      }
    });
  }

  function onError(err) {
    toast.error(getError(err));
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll overflow-x-hidden bg-black/20 w-[100vw] z-[999]">
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute right-0 lg:w-[500px] min-h-[100vh] bg-white z-[999]"
      >
        <button
          type="button"
          className="flex items-center m-5"
          onClick={() => dispatch(cartToggle())}
        >
          <AiOutlineLeft />
          <span className="font-[500] ml-5">Ваша Корзина</span>
        </button>

        <div className="my-5 h-[10vh] bg-blue-800 flex justify-center items-center">
          <p className="font-[500] text-white">Shop at JIGIT+</p>
        </div>

        {cartItems.length < 1 && (
          <div className="flex flex-col items-center px-5">
            <AiOutlineShopping size={150} />
            <h3>Ваша корзина пуста</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => dispatch(cartToggle())}
                className="mt-5 p-2 px-4 bg-red-500 rounded-full font-[500] text-white"
              >
                ПРОДОЛЖИТЬ ПОКУПКУ
              </button>
            </Link>
          </div>
        )}

        <div className="px-2">
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <div className="mt-10 flex" key={item._id}>
                <img
                  src={item.images[0]}
                  alt=""
                  width={200}
                  height={200}
                  className="w-[100px] h-[100px]"
                />
                <div className="ml-1">
                  <div className="flex gap-5">
                    <h5 className="text-normal text-[#324d67] text-lg font-bold lg:w-[250px]">
                      {item.name}
                    </h5>
                    <div className="flex items-start text-normal font-[500] w-[100px]">
                      {item.price}сом
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                        className="ml-2"
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="mt-2">
                      <div className="mt-2 flex flex-col sm:flex-row w-max ">
                        <div>
                          <div className="font-[500]">
                            Количество:{" "}
                              <span className="font-[400]">
                                {item.quantity}
                              </span>
                          </div>
                          <div className="font-[500]">
                            Цена:{" "}
                            <span className="font-[400]">
                              {item.price * item.quantity}сом
                            </span>
                          </div>
                        </div>
                        <div>
                          <p className="font-[500]">
                            Размер:{" "}
                            <span className="font-[400]">{item.size}</span>
                          </p>
                          <p className="font-[500]">
                            Цвет:{" "}
                            <span className="font-[400]">{item.color}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    {makePayment === false && showShippingForm === false && (
                      <button
                        type="button"
                        onClick={() => removeItemHandler(item)}
                      >
                        <TiDeleteOutline
                          size={25}
                          className="mt-2 text-red-500"
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {cartItems.length > 0 && (
          <>
            <div className="mt-5 mx-5 font-[500]">
              Итого ({cartItems.reduce((a, c) => a + c.quantity, 0)}) :{" "}
              {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)} сом
            </div>
            <p className="text-[12px] mx-5">
              (доставка осущетсвляется по Бишкеку 1-3 дней)
            </p>
          </>
        )}

        {cartItems.length > 0 && showShippingForm === false && (
          <div className="mt-10 flex justify-center items-center">
            <button
              onClick={() => setShowShippingForm(true)}
              className="px-20 py-3 rounded-sm font-[500] text-white bg-green-500 hover:scale-[1.01]"
            >
              Сделать Заказ
            </button>
          </div>
        )}

        {showShippingForm && makePayment == false && (
          <form
            className="mt-10 px-5 mb-10"
            onSubmit={handleSubmit(submitHandler)}
          >
            <h1 className="font-[500]">Адресс Доставки</h1>
            <div className="mt-2">
              <label htmlFor="fullName" className="text-sm">
                ФИО
              </label>
              <input
                // onChange={(e) => setFullName(e.target.value)}
                className="w-full border"
                id="fullName"
                autoFocus
                {...register("fullName", {
                  required: "Пажалуйста, введите ФИО",
                })}
              />
              {errors.fullName && (
                <div className="text-rose-500">{errors.fullName.message}</div>
              )}
            </div>
            <div className="mt-2">
              <label htmlFor="address" className="text-sm">
                Адресс
              </label>
              <input
                // onChange={(e) => setAddress(e.target.value)}
                className="w-full border"
                id="address"
                autoFocus
                {...register("address", {
                  required: "Пажалуйста, введите адрес доставки",
                })}
              />
              {errors.address && (
                <div className="text-rose-500">{errors.address.message}</div>
              )}
            </div>
            <div className="mt-2">
              <label htmlFor="phoneNumber" className="text-sm">
                Номер тел.
              </label>
              <input
                // onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full border"
                id="phoneNumber"
                autoFocus
                {...register("phoneNumber", {
                  required: "Пажалуйста, введите номер тел.",
                })}
              />
              {errors.phoneNumber && (
                <div className="text-rose-500">
                  {errors.phoneNumber.message}
                </div>
              )}
            </div>
            <div className="mt-2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                // onChange={(e) => setEmail(e.target.value)}
                className="w-full border"
                id="email"
                autoFocus
                {...register("email", {
                  required: "Пажалуйста, введите email",
                })}
              />
              {errors.email && (
                <div className="text-rose-500">{errors.email.message}</div>
              )}
            </div>
            <div className="mt-4 flex justify-center items-center">
              <button
                is
                type="submit"
                className="px-10 py-2 rounded-sm text-white font-[500] bg-indigo-800 hover:scale-[1.01]"
              >
                Потвердить
              </button>
            </div>
          </form>
        )}

        {makePayment && (
          <>
            <div className="mt-4 p-5 shadow-md border m-5">
              <h2 className="font-[500] tracking-wide">Адрес доставки</h2>
              <div>
                {shippingAddress?.fullName}, {shippingAddress?.address},{" "}
                {shippingAddress.phoneNumber}
              </div>
              <div className="mt-4">
                {isPending ? (
                  <div>Загрузка...</div>
                ) : (
                  <div className="mt-5 w-full">
                    <h1 className=" font-[500]">
                      Оплатить через Paypal или Картой
                    </h1>
                    <p className="mb-5 text-[12px]">
                      (для оплаты обычной картой, нажмите Debit or Credit Card,
                      автоматическая конвертация уже включена com в usd)
                    </p>
                    <PayPalButtons
                      createOrder={createOrder}
                      onApprove={onApprove}
                      onError={onError}
                    ></PayPalButtons>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 p-5 shadow-md border m-5">
              <h1 className="mb-5 font-[500]">Заказать через Whatsapp</h1>
              <a href="https://wa.me/message/PYGKMJD35DYXA1" target="_blank">
                <button className="w-full flex justify-center items-center gap-3 py-3 rounded-md text-white font-[500] bg-green-600 hover:scale-[1.01]">
                  <span>Whatsapp</span>
                  <span>
                    <BsWhatsapp size={25} className="text-white" />
                  </span>
                </button>
              </a>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
