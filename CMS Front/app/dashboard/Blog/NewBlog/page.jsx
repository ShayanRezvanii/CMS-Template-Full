"use client";
import Link from "next/link";
import { BsCaretLeftFill } from "react-icons/bs";
import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";
import Status from "../../../../components/Status";
import { useRouter } from "next/navigation";
function Page() {
  const [title, settitel] = useState();
  const [subtitle, setsummery] = useState();
  const [content, setcontent] = useState();
  const [image, setimage] = useState();

  const [status, setstatus] = useState(false);
  const [valid, setvalid] = useState(false);
  const [massage, setmassage] = useState(false);
  const router = useRouter();

  const PostNewBlog = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("subtitle", subtitle);
    data.append("content", content);
    data.append("image", image, image.name);
    axios
      .post("http://localhost:8000/api/pages/blog/new", data)
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
        <h1 className="text-2xl font-IransansBold">بلاگ جدید</h1>
        <button className="BackBtn" onClick={() => router.back()}>
          بازگشت
          <IoMdArrowRoundBack className="mr-2" />
        </button>
      </div>
      <div className="w-full grid lg:grid-cols-2 mt-10 px-4">
        <div>
          <h2 className="">اطلاعات بلاگ جدید</h2>
          <h3 className="text-gray-500 font-IransansThin">
            اطلاعات بلاگ جدید را وارد کنید
          </h3>
        </div>
        <div className="w-full bg-white dark:bg-gray-800 px-4 py-6 rounded-lg shadow-sm">
          <form onSubmit={PostNewBlog} className=" flex flex-col space-y-3">
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
              خلاصه :
            </label>
            <input
              className="inputControll"
              id="subtitle"
              name="subtitle"
              type="text"
              autoComplete="off"
              onChange={(e) => setsummery(e.target.value)}
            />
            <label htmlFor="price" className="lableControll">
              توضیحات :
            </label>
            <textarea
              className="inputControll"
              id="content"
              name="content"
              autoComplete="off"
              onChange={(e) => setcontent(e.target.value)}
            />
            <div className="flex justify-start items-center gap-4 text-neutral-800 whitespace-nowrap">
              <label className="lableControll">
                پس زمینه:
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  onChange={(e) => setimage(e.target.files[0])}
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
            <button className="Updatebtn">ذخیره</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
