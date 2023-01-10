/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit, MdPlaylistAdd } from "react-icons/md";
import Loader from "../../../components/loader";

function page() {
  const [Loaded, setLoaded] = useState(false);
  const [isempety, setempety] = useState(false);
  const [bodyMenus, setbodyMenu] = useState();
  const [main, setmain] = useState([]);

  async function getMain() {
    const res = await fetch("http://localhost:8000/api/pages/menu/main/get");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const { menuList } = await res.json();
    if (menuList[0] === undefined) {
      setmain(menuList);
      setempety(true);
    } else {
      setmain(menuList[0]);
      setempety(false);
      console.log(menuList[0]);
    }

    return;
  }
  useEffect(() => {
    async function getMenu() {
      const res = await fetch("http://localhost:8000/api/pages/menu/menu/get/");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const { bodyMenu } = await res.json();
      setLoaded(true);
      setbodyMenu(bodyMenu);
      return;
    }
    getMenu();
    getMain();
  }, []);
  const deletProduct = async (id) => {
    await axios.delete(
      `http://localhost:8000/api/pages/menu/menu/delete/${id}`
    );
  };
  const [title, settitle] = useState();
  const [subtitle, setsubtitle] = useState();
  const [image, setimage] = useState();

  const MainFormUpdate = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("subtitle", subtitle);
    data.append("image", image, image.name);
    // console.log(image);
    if (main.length === 0) {
      axios
        .post("http://localhost:8000/api/pages/menu/main", data)
        .then((res) => {
          getMain();
        })
        .catch((err) => {});
    } else {
      axios
        .put(
          `http://localhost:8000/api/pages/menu/main/update/${main._id}`,
          data
        )
        .then((res) => {})
        .catch((err) => {});
    }
  };
  return (
    <div className="w-full min-h-screen px-4 lg:px-10">
      <div className="w-full text-2xl font-IransansBold">منو</div>
      <div className="w-full grid lg:grid-cols-2 mt-10 px-4">
        <div>
          <h2 className="">اطلاعات اصلی</h2>
          <h3 className="text-gray-500 font-IransansThin">
            اطلاعات اصلی قسمت منو را مدیریت کنید
          </h3>
        </div>
        <div className="w-full bg-white dark:bg-gray-800 px-4 py-6 rounded-lg shadow-sm">
          <form onSubmit={MainFormUpdate} className=" flex flex-col space-y-3">
            <label htmlFor="titel" className="lableControll">
              عنوان :
            </label>
            <input
              className="inputControll"
              id="titel"
              name="titel"
              type="text"
              autoComplete="off"
              defaultValue={isempety ? "" : main.title}
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
              defaultValue={isempety ? "" : main.subtitle}
              onChange={(e) => setsubtitle(e.target.value)}
            />

            <div className="flex justify-start items-center gap-4 text-neutral-800 whitespace-nowrap">
              <label className="lableControll">
                پس زمینه:
                <input
                  id="photo"
                  name="photo"
                  onChange={(e) => setimage(e.target.files[0])}
                  defaultValue={isempety ? "" : main.image}
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
        </div>
      </div>

      <div className="  border-t-2 dark:border-gray-800 flex items-center justify-between py-3 mt-10 px-4">
        <h2 className="text-2xl font-IransansBold">محصولات</h2>
        <div className="my-2">
          <Link href="dashboard/Menu/NewMenu">
            <button className="bg-green-500 hover:bg-green-600 duration-200 shadow-sm text-gray-50 border dark:border-green-500 px-6 py-2 flex items-center justify-center rounded-lg  ">
              <MdPlaylistAdd size={24} />
              جدید
            </button>
          </Link>
        </div>
      </div>
      <div className=" mb-16">
        <div className="w-full max-h-[700px] overflow-scroll flex flex-col  ">
          {/* Card */}
          {Loaded ? (
            <div className="mt-5 overflow-x-scroll p-3">
              <table className="divide-y rounded-lg shadow-sm  divide-gray-200 dark:divide-gray-700  dark:border-gray-700  overflow-hidden  table-fixed min-w-full ">
                <thead className="bg-gray-200  dark:bg-gray-800/70 dark:text-gray-300 text-neutral-600">
                  <tr>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">
                      نام محصول
                    </th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">
                      محتویات
                    </th>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">
                      قیمت
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  whitespace-nowrap"
                    ></th>
                  </tr>
                </thead>
                <tbody className="bg-gray-50 divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800 w-full dark:text-gray-300 text-gray-600">
                  {bodyMenus.map((item) => {
                    return (
                      <tr
                        key={item._id}
                        className="hover:bg-gray-100 dark:hover:bg-gray-700 duration-200"
                      >
                        <td className="px-6 py-3 text-center">{item.title}</td>
                        <td className="px-6 py-3 text-center whitespace-nowrap">
                          {item.resepi}
                        </td>
                        <td className="px-6 py-3 text-center">{item.amount}</td>
                        <td className="px-6 py-3 text-center">
                          <div className="flex items-center justify-center gap-2 ">
                            <Link href={`dashboard/Menu/${item._id}`}>
                              <div className="text-white bg-sky-500 hover:bg-sky-600 p-1 rounded duration-300 flex justify-center items-center">
                                <MdModeEdit size={26} />
                                <p className="text-sm mx-2 select-none">
                                  ویرایش
                                </p>
                              </div>
                            </Link>
                            <div
                              onClick={() => deletProduct(item._id)}
                              className="text-white bg-red-500  hover:bg-red-600 p-2 rounded duration-300 flex justify-center items-center"
                            >
                              <FaTrash size={18} />
                              <p className="text-sm mx-2 select-none">حذف</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="w-full flex items-center justify-center mt-5">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
