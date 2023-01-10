"use client";

import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Status from "../../../../components/Status";
function Page() {
  const [Loaded, setLoaded] = useState(false);
  const [product, setproduct] = useState();
  const [status, setstatus] = useState(false);
  const [valid, setvalid] = useState(false);
  const [massage, setmassage] = useState(false);
  const pathname = usePathname();
  const id = pathname.split("/")[3];
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `http://localhost:8000/api/pages/menu/menu/get/${id}`
      );
      const { product } = await res.json();

      setproduct(product);
      setLoaded(true);
    };
    getData();
  });

  const title = useRef();
  const resepi = useRef();
  const amount = useRef();

  const ChangeProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/api/pages/menu/menu/update/${id}`,
        {
          title: title.current.value,
          resepi: resepi.current.value,
          amount: amount.current.value,
        }
      );
      setstatus(true);
      setvalid(true);
      setmassage("تغیرات  با موفقیت ثبت شد");
      setTimeout(() => {
        setstatus(false);
        router.back();
      }, 3000);
    } catch (error) {
      setstatus(true);
      setvalid(false);
      setmassage("تغیرات  با خطا مواجه شد");
      setTimeout(() => {
        setstatus(false);
        router.back();
      }, 3000);
    }
  };
  return (
    <div className="w-full min-h-screen px-4 lg:px-10 relative">
      <Status massage={massage} status={status} valid={valid} />
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-IransansBold">ویرایش منو</h1>
        <button className="BackBtn" onClick={() => router.back()}>
          بازگشت
          <IoMdArrowRoundBack className="mr-2" />
        </button>
      </div>
      <div className="w-full grid lg:grid-cols-2 mt-10 px-4">
        <div>
          <h2 className="">اطلاعات اصلی</h2>
          <h3 className="text-gray-500 font-IransansThin">
            اطلاعات اصلی قسمت منو را مدیریت کنید
          </h3>
        </div>
        <div className="w-full bg-white dark:bg-gray-800 px-4 py-6 rounded-lg shadow-sm">
          {Loaded ? (
            <form onSubmit={ChangeProduct} className=" flex flex-col space-y-3">
              <label htmlFor="titel" className="lableControll">
                عنوان :
              </label>
              <input
                className="inputControll"
                id="titel"
                name="titel"
                type="text"
                autoComplete="off"
                placeholder="عنوان....."
                Value={product.title}
                ref={title}
              />
              <label htmlFor="resepi" className="lableControll">
                محتویات :
              </label>
              <input
                className="inputControll"
                id="resepi"
                name="resepi"
                type="text"
                autoComplete="off"
                placeholder="اسپرسو و شیر....."
                Value={product.resepi}
                ref={resepi}
              />
              <label htmlFor="price" className="lableControll">
                قیمت :
              </label>
              <input
                className="inputControll"
                id="price"
                name="price"
                type="number"
                autoComplete="off"
                placeholder="10 تومان"
                defaultValue={product.amount}
                ref={amount}
              />
              <button className="Updatebtn">بروزرسانی</button>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
