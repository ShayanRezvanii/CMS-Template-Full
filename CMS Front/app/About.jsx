import Image from "next/image";
import React from "react";
import aboutbg from "../public/aboutbg.png";
import { GiPaperBagFolded } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa";
import { CiCoffeeBean } from "react-icons/ci";
import axios from "axios";
async function getContentData() {
  const res = await fetch("http://localhost:8000/api/pages/abouts/get");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getMainData() {
  const res = await fetch("http://localhost:8000/api/pages/about/get");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function About() {
  const { about } = await getContentData();
  const { bodyAbouts } = await getMainData();

  return (
    <div className="w-full min-h-screen  bg-gray-100 py-20 px-10  flex items-center justify-center ">
      <div className="w-full min-h-screen grid lg:grid-cols-2 place-items-center max-w-[1250px]">
        <div className="w-full flex items-start flex-col justify-start h-full py-5  text-right order-2 lg:order-1 ">
          <h4 className="text-2xl text-amber-700 font-IransansBold mb-5">
            {about[0] === undefined ? "درباره محصولات ما " : about[0].title}
          </h4>
          <h1 className="text-5xl font-Iransansblack text-neutral-800 mb-6">
            {about[0] === undefined ? "بهترین نوع قهوه " : about[0].subtitle}
          </h1>
          <div className="w-full justify-start items-start flex flex-col space-y-16 my-6">
            {bodyAbouts.map((item) => {
              return (
                <div
                  key={item._id}
                  className="flex justify-center space-x-4 items-center "
                >
                  <div className="w-56 h-28  ml-4 relative">
                    <Image
                      src={item.image}
                      fill
                      className="object-contain"
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl font-IransansBold text-neutral-800 mb-3">
                      {item.title}
                    </h2>
                    <p className="font-IransansThin text-neutral-800 w-full lg:max-w-[80%]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative  w-full h-full  bg-center order-1 lg:order-2">
          <Image
            src={about[0] === undefined ? aboutbg : about[0].image}
            alt="about Background"
            fill
            className="object-right object-contain bg-center"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
