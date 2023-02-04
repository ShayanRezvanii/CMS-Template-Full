import axios from "axios";
import Image from "next/image";
import React from "react";
import Menubg from "../public/Menu.png";
async function getMenuData() {
  const res = await fetch("http://localhost:8000/api/pages/menu/menu/get");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getMainData() {
  const res = await fetch("http://localhost:8000/api/pages/menu/main/get");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function Menu() {
  const { menuList } = await getMainData();
  const { bodyMenu } = await getMenuData();

  return (
    <div className="w-full min-h-screen bg-white pt-20 pb-10 px-10  flex items-center justify-center">
      <div className="w-full min-h-screen grid lg:grid-cols-2 place-items-center max-w-[1250px]">
        <div className="w-full flex items-start flex-col justify-start h-full py-5  text-right order-2">
          <h4 className="text-2xl text-amber-700 font-IransansBold mb-5">
            {menuList[0] === undefined ? "وقت قهوه هست " : menuList[0].title}
          </h4>
          <h1 className="text-4xl font-Iransansblack text-neutral-800 mb-6">
            {menuList[0] === undefined
              ? "ما بهترین ها رو داریم"
              : menuList[0].subtitle}
          </h1>
          <div className="w-full flex flex-col space-y-10 my-6 px-6">
            {bodyMenu.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex justify-between relative lines p-2 rounded duration-300 hover:bg-neutral-50 hover:drop-shadow-md"
                >
                  <div>
                    <h4 className="text-3xl font-IransansMD">{item.title}</h4>
                    <p className="font-IransansThin">{item.resepi}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <h5 className="text-amber-700 text-5xl">{item.amount}</h5>
                    <p className="text-amber-800">تومان</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className=" px-6 py-2 border border-amber-700 w-1/2 mx-auto rounded mt-10 duration-300 text-amber-700 hover:bg-amber-700 hover:text-neutral-50 hover:drop-shadow-lg">
            بیشتر...
          </button>
        </div>
        <div className="relative w-full h-full order-1">
          {menuList[0] === undefined ? (
            <Image src={Menubg} className="object-cover" alt="Menu Bg" />
          ) : (
            <Image
              src={`${menuList[0].image}`}
              width={500}
              height={500}
              fill
              className="object-cover"
              alt="Menu Bg"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
