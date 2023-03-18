import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { dropToggle } from "@/redux/reducer";
import axios from "axios";
import Image from "next/image";

export default function SideDrop() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, [setProducts]);

  const filteredProduct = useMemo(
    () =>
      products.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, products]
  );

  return (
    <div className="w-full overflow-y-scroll sm:overflow-hidden bg-black/20 fixed top-0 left-0 right-0 bottom-0 z-[999]">
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="fixed left-0  w-[300px] h-full overflow-y-scroll sm:overflow-hidden bg-white "
      >
        <TfiClose
          onClick={() => dispatch(dropToggle())}
          size={25}
          className="mt-5 ml-5 cursor-pointer"
        />
        <div className="mt-5 flex sm:h-full flex-col">
          <Link href="/">
            <p
              onClick={() => dispatch(dropToggle())}
              className="sm:flex-1 h-[20vh] flex justify-center items-center bg-black text-white hover:scale-[1.01] cursor-pointer"
            >
              ГЛАВНАЯ
            </p>
          </Link>
          <Link href="/products">
            <p
              onClick={() => dispatch(dropToggle())}
              className="sm:flex-1 h-[20vh] flex justify-center items-center bg-gray-100 hover:scale-[1.01] cursor-pointer"
            >
              ПРОДУКТЫ
            </p>
          </Link>
          <div className="flex-1 flex flex-col justify-center items-center bg-black hover:scale-[1.01]">
            <input
              type="text"
              name="search"
              placeholder="Поиск"
              className="mt-5 sm:mt-0 p-4 sm:p-3"
              onChange={(e) => setFilter(e.target.value)}
            />
            <div className="min-h-[35vh] sm:hidden flex flex-wrap gap-10 justify-center bg-black/50 text-white px-2 py-5 rounded-md">
              {filter &&
                filteredProduct.slice(0, 20).map((p) => (
                  <div key={p.slug}>
                    <Link href={`/product/${p._id}`}>
                      <Image
                        onClick={() => dispatch(dropToggle())}
                        src={p.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] object-contain rounded-sm"
                      />
                    </Link>
                    <h1 className="mt-3 text-center font-[500]">{p.name}</h1>
                    <p className="text-center font-[500] tracking-widest">
                      1200com (${p.price}){" "}
                      <span className="text-rose-500 font-[500]">OFF</span>
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="hidden sm:block absolute left-[40%] top-[20%] flex flex-wrap gap-10 justify-center bg-black/50 text-white px-2 py-5 rounded-md">
        {filter &&
          filteredProduct.slice(0, 20).map((p) => (
            <div key={p.slug}>
              <Link href={`/product/${p._id}`}>
                <Image
                  onClick={() => dispatch(dropToggle())}
                  src={p.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="h-[300px] w-[300px] object-contain rounded-sm"
                />
              </Link>
              <h1 className="mt-3 text-center font-[500]">{p.name}</h1>
              <p className="text-center font-[500] tracking-widest">
                1200com (${p.price}){" "}
                <span className="text-rose-500 font-[500]">OFF</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
