"use client";
import React, { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { AiOutlineMenuFold } from "react-icons/ai";

function Header({ togler }) {
  const { theme, setTheme } = useTheme();
  const [spliPath, setspliPath] = useState([]);
  const pathname = usePathname();
  useEffect(() => {
    const dictionary = {
      dashboard: "داشبورد",
      Profile: "پروفایل",
      Menu: "منو",
      NewMenu: "منو جدید",
      Hero: "خانه",
      Contact: "تماس با ما",
      About: "تماس با ما",
      Blog: "بلاگ",
    };
    const BreadCrumb = () => {
      const splited = pathname.split("/");
      const changed = [];
      splited.map((item) => {
        changed.push(dictionary[`${item}`]);
      });
      setspliPath(changed);
    };
    BreadCrumb();
  }, [pathname]);

  return (
    <div className=" w-full sticky top-0 h-20 py-5 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 z-10 select-none text-black border-b  px-10 flex items-center justify-between">
      <div
        onClick={togler}
        className="block lg:hidden px-1 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 text-amber-600 rounded-lg "
      >
        <AiOutlineMenuFold size={35} className="min-w-[55px]   " />
      </div>
      <div className=" hidden lg:flex space-x-9">
        {spliPath.map((item, index) => {
          return (
            <p key={index} className="font-IransansMD text-gray-500 ">
              {item}
            </p>
          );
        })}
      </div>
      <div className="flex  text-gray-700 dark:text-gray-500">
        {theme === "dark" ? (
          <HiSun size={32} onClick={() => setTheme("light")} />
        ) : (
          <HiMoon size={32} onClick={() => setTheme("dark")} />
        )}
        <Link href={"dashboard/Profile"}>
          <div className="mr-5">
            <CgProfile size={32} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
