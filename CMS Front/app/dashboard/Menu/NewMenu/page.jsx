"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";
import Status from "../../../../components/Status";
import { useRouter } from "next/navigation";

function Page() {
  const [title, settitel] = useState();
  const [resepi, setresepi] = useState();
  const [amount, setamount] = useState();

  const [status, setstatus] = useState(false);
  const [valid, setvalid] = useState(false);
  const [massage, setmassage] = useState(false);
  const router = useRouter();

  const PostNewMenu = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pages/menu/menu", {
        title,
        resepi,
        amount,
      })
      .then((res) => {
        setstatus(true);
        setvalid(true);
        setmassage("ایتم با موفقیت به منو اضافه شد");
        setTimeout(() => {
          setstatus(false);
          router.back();
        }, 3000);
      })
      .catch((err) => {
        setstatus(true);
        setvalid(false);
        setmassage("ایتم  با خطا مواجه شد");
        setTimeout(() => {
          setstatus(false);
          router.back();
        }, 3000);
      });
  };
  return (
    <div className="w-full min-h-screen px-4 lg:px-10 relative">
      <Status massage={massage} status={status} valid={valid} />
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-IransansBold">منو جدید</h1>
        <button className="BackBtn" onClick={() => router.back()}>
          بازگشت
          <IoMdArrowRoundBack className="mr-2" />
        </button>
      </div>
      <div className="w-full grid lg:grid-cols-2 mt-10 px-4">
        <div>
          <h2 className="">اطلاعات منو جدید</h2>
          <h3 className="text-gray-500 font-IransansThin">
            اطلاعات محصول جدید را وارد کنید
          </h3>
        </div>
        <div className="w-full bg-white dark:bg-gray-800 px-4 py-6 rounded-lg shadow-sm">
          <form onSubmit={PostNewMenu} className=" flex flex-col space-y-3">
            <label htmlFor="titel" className="lableControll">
              عنوان :
            </label>
            <input
              className="inputControll"
              id="titel"
              name="titel"
              type="text"
              autoComplete="off"
              onChange={(e) => settitel(e.target.value)}
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
              onChange={(e) => setresepi(e.target.value)}
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
              onChange={(e) => setamount(e.target.value)}
            />
            <button className="Updatebtn">ذخیره</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
