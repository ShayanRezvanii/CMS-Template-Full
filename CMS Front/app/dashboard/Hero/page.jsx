"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
function Hero() {
  const [title, settitle] = useState();
  const [subtitle, setsubtitle] = useState();
  const [image, setimage] = useState();
  const [Loaded, setLoaded] = useState(false);
  const [isempety, setempety] = useState(false);
  const [main, setmain] = useState([]);

  async function getMain() {
    const res = await fetch("http://localhost:8000/api/pages/hero");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const { hero } = await res.json();
    console.log(hero);
    if (hero[0] === undefined) {
      setmain(hero);
      setempety(true);
    } else {
      setmain(hero[0]);
      setempety(false);
      console.log(hero[0]);
    }

    return;
  }
  useEffect(() => {
    getMain();
  }, []);
  const MainFormUpdate = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("subtitle", subtitle);
    data.append("image", image, image.name);
    // console.log(image);
    if (main.length === 0) {
      axios
        .post("http://localhost:8000/api/pages/hero", data)
        .then((res) => {
          console.log("POST IS SOOOOOOO");

          console.log(res);
          getMain();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .put(`http://localhost:8000/api/pages/hero/update/${main._id}`, data)
        .then((res) => {
          console.log("PUT IS WORKING");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="w-full min-h-screen px-4 lg:px-10">
      <div className="w-full text-2xl font-IransansBold">خانه</div>
      <div className="w-full grid lg:grid-cols-2 mt-10 px-4">
        <div>
          <h2 className="">اطلاعات اصلی</h2>
          <h3 className="text-gray-500 font-IransansThin">
            اطلاعات اصلی قسمت خانه را مدیریت کنید
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
    </div>
  );
}

export default Hero;
