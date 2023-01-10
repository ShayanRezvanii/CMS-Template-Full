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
        `http://localhost:8000/api/pages/about/get/${id}`
      );
      const { about } = await res.json();
      console.log(about);
      setproduct(about);
      setLoaded(true);
    };
    getData();
  }, [id]);

  const [title, settitle] = useState();
  const [subtitle, setsubtitle] = useState();
  const [image, setimage] = useState();
  const ChangeProduct = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("subtitle", subtitle);
    data.append("image", image, image.name);
    try {
      await axios.put(
        `http://localhost:8000/api/pages/about/about/update/${id}`,
        data
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
        <h1 className="text-2xl font-IransansBold">ویرایش محتوا ها</h1>
        <button className="BackBtn" onClick={() => router.back()}>
          بازگشت
          <IoMdArrowRoundBack className="mr-2" />
        </button>
      </div>
      <div className="w-full grid lg:grid-cols-2 mt-10 px-4">
        <div>
          <h2 className="">اطلاعات اصلی</h2>
          <h3 className="text-gray-500 font-IransansThin">
            اطلاعات اصلی قسمت محتوای خود را مدیریت کنید
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
                defaultValue={Loaded ? product.title : ""}
                onChange={(e) => settitle(e.target.value)}
              />
              <label htmlFor="subtitel" className="lableControll">
                توضیحات :
              </label>
              <input
                className="inputControll"
                id="subtitel"
                name="subtitel"
                type="text"
                autoComplete="off"
                defaultValue={Loaded ? product.subtitle : ""}
                onChange={(e) => setsubtitle(e.target.value)}
              />

              <div className="flex justify-start items-center gap-4 text-neutral-800 whitespace-nowrap">
                <label className="lableControll">
                  پس زمینه:
                  <input
                    id="photo"
                    name="photo"
                    // value={Loaded ? product.image : ""}
                    onChange={(e) => setimage(e.target.files[0])}
                    type="file"
                    className="text-sm text-grey-500 duration-300
            file:mr-5 file:py-2 file:px-6
            file:duration-300
            file:rounded-full
            file:border-0
            file:text-sm file:font-medium
            file:bg-gray-100
            dark:file:bg-gray-700 dark:file:text-gray-100 dark:file:hover:bg-gray-600 file:text-gray-700
            hover:file:cursor-pointer hover:file:bg-gray-200
          "
                  />
                </label>
              </div>

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
