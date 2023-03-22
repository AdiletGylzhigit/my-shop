import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import login_validate from "@/lib/validate";
import { useFormik } from "formik";

export default function Join() {
  //formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    const { data } = await axios.post("/api/useremail", {
      email: values.email,
    });
    toast.success("Упешно подписан");
  }

  return (
    <div className="mt-[150px] min-h-[25vh] flex flex-col lg:flex-row">
      <div className="flex-1 flex justify-center items-center border-t border-t-black border-b border-b-black text-xl lg:text-3xl font-[500]">
        ПУСТЬ ТВОИ РЕЗУЛЬТАТЫ ГОВОРЯТ ЗА ТЕБЯ
      </div>
      <div className="flex-1 flex flex-col justify-center items-center bg-black">
        <h1 className="text-white text-sm font-[500]">
          ПОДПИШИСЬ НА НАШИ НОВОСТИ
        </h1>
        <form className="mt-5 flex" onSubmit={formik.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className={`${
              formik.errors.email && formik.touched.email
                ? "border-red-500"
                : ""
            } sm:w-[400px] h-max p-3`}
            {...formik.getFieldProps("email")}
          />
          <button
            type='submit'
            className="sm:w-[200px] h-max bg-blue-700 p-3 font-[500] hover:text-gray-300"
          >
            ПОДПИСАТЬСЯ
          </button>
        </form>
      </div>
    </div>
  );
}
