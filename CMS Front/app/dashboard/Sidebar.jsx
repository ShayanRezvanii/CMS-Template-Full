"use client";
import { useEffect, useState } from "react";

import { IoMdSettings } from "react-icons/io";
import { IoInformationCircleSharp } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import {
  AiFillHome,
  AiFillContacts,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { MdMenuBook } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { deleteCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

function Sidebar({ togler, condition }) {
  const open = condition;
  const router = useRouter();

  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const [status, setstatus] = useState("");
  useEffect(() => {
    setstatus(id);
    localStorage.setItem("Sidebar", open);
  }, [id, open]);

  const logoutHandler = () => {
    deleteCookie("Token");
    deleteCookie("Userid");
    router.push("/Register");
  };
  return (
    <div
      className={`px-6 flex flex-col  shadow-lg z-50  justify-between items-center min-h-screen py-4 border-l  duration-500 top-0 fixed  bg-white dark:bg-gray-800 dark:border-gray-700 ${
        open
          ? "right-0 w-[60%] lg:w-60"
          : " w-[60%] lg:right-0 -right-full lg:w-28"
      } `}
    >
      {/* profile */}

      <div
        onClick={togler}
        className="flex flex-row justify-start overflow-hidden select-none space-x-5 relative items-center px-1 py-2  w-full rounded duration-300  hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-300 text-neutral-700 dashboardicon"
      >
        {open ? (
          <AiOutlineMenuUnfold
            size={35}
            className="min-w-[55px] text-amber-600"
          />
        ) : (
          <AiOutlineMenuFold
            size={35}
            className="min-w-[55px] text-amber-600"
          />
        )}
        <h3
          className={`
            }duration-300 text-2xl  overflow-hidden whitespace-nowrap  ${
              open
                ? "transform -translate-x-4 opacity-100"
                : "transform opacity-0 -translate-x-28"
            }`}
        >
          کافه
        </h3>
      </div>

      {/* profile */}
      {/* Pages */}
      <div className="w-full flex flex-col space-y-4 ">
        <Link href="dashboard/Hero">
          <div
            className={`DashboardBTN ${
              status === "Hero"
                ? "bg-amber-600 dark:text-gray-100 text-gray-100"
                : ""
            }`}
          >
            <AiFillHome size={25} className="min-w-[55px]" />
            <h3
              className={`duration-700 overflow-hidden whitespace-nowrap ${
                open
                  ? "transform -translate-x-1 opacity-100"
                  : "transform opacity-0 -translate-x-28"
              }`}
            >
              خانه
            </h3>
            {open ? (
              ""
            ) : (
              <div className="absolute top-2 -left-36 z-40 bg-amber-600 text-white px-2 py-1  rounded duration-500 transform -translate-x-5 opacity-0 toltip">
                خانه
              </div>
            )}
          </div>
        </Link>
        <Link href={"dashboard/About"}>
          <div
            className={`DashboardBTN ${
              status === "About"
                ? "bg-amber-600 dark:text-gray-100 text-gray-100"
                : ""
            }`}
          >
            <IoInformationCircleSharp size={25} className="min-w-[55px]" />
            <h3
              className={`duration-700 overflow-hidden whitespace-nowrap ${
                open
                  ? "transform -translate-x-1 opacity-100"
                  : "transform opacity-0 -translate-x-28"
              }`}
            >
              درباره ما
            </h3>
            {open ? (
              ""
            ) : (
              <div className="absolute top-2 -left-36 bg-amber-600 text-white px-2 py-1  rounded duration-500 transform -translate-x-5 opacity-0 toltip">
                درباره ما
              </div>
            )}
          </div>
        </Link>
        <Link href="dashboard/Menu">
          <div
            className={`DashboardBTN ${
              status === "Menu"
                ? "bg-amber-600 dark:text-gray-100 text-gray-100"
                : ""
            }`}
          >
            <MdMenuBook size={25} className="min-w-[55px]" />
            <h3
              className={`duration-700 overflow-hidden whitespace-nowrap ${
                open
                  ? "transform -translate-x-1 opacity-100"
                  : "transform opacity-0 -translate-x-28"
              }`}
            >
              منو
            </h3>
            {open ? (
              ""
            ) : (
              <div className="absolute top-2 -left-36 bg-amber-600 text-white px-2 py-1 rounded duration-500 transform -translate-x-5 opacity-0 toltip">
                منو
              </div>
            )}
          </div>
        </Link>
        <Link href={"dashboard/Blog"}>
          <div
            className={`DashboardBTN ${
              status === "Blog"
                ? "bg-amber-600 dark:text-gray-100 text-gray-100"
                : ""
            }`}
          >
            <BiNews size={25} className="min-w-[55px]" />
            <h3
              className={`duration-700 overflow-hidden whitespace-nowrap ${
                open
                  ? "transform -translate-x-1 opacity-100"
                  : "transform opacity-0 -translate-x-28"
              }`}
            >
              بلاگ
            </h3>
            {open ? (
              ""
            ) : (
              <div className="absolute top-2 -left-36 bg-amber-600 text-white px-2 py-1  rounded duration-500 transform -translate-x-5 opacity-0 toltip">
                بلاگ
              </div>
            )}
          </div>
        </Link>
        <Link href={"dashboard/Contact"}>
          <div
            className={`DashboardBTN ${
              status === "Contact"
                ? "bg-amber-600 dark:text-gray-100 text-gray-100"
                : ""
            }`}
          >
            <AiFillContacts size={25} className="min-w-[55px]" />
            <h3
              className={`duration-700 overflow-hidden whitespace-nowrap ${
                open
                  ? "transform -translate-x-1 opacity-100"
                  : "transform opacity-0 -translate-x-28"
              }`}
            >
              ارتباط با ما
            </h3>
            {open ? (
              ""
            ) : (
              <div className="absolute top-2 -left-36 bg-amber-600 text-white px-2 py-1 rounded duration-500 transform -translate-x-5 opacity-0 toltip">
                ارتباط با ما
              </div>
            )}
          </div>
        </Link>
      </div>
      {/* Pages */}
      {/* Setting */}
      <div className="w-full flex flex-col space-y-4">
        <Link href={"dashboard/Setting"}>
          <div
            className={`DashboardBTN ${
              status === "Setting"
                ? "bg-amber-600 dark:text-gray-100 text-gray-100"
                : ""
            }`}
          >
            <IoMdSettings size={25} className="min-w-[55px]" />
            <h3
              className={`duration-1000 overflow-hidden whitespace-nowrap ${
                open
                  ? "transform -translate-x-1 opacity-100"
                  : "transform opacity-0 -translate-x-28"
              }`}
            >
              تنظیمات
            </h3>
            {open ? (
              ""
            ) : (
              <div className="absolute top-2 -left-36 bg-amber-600 text-white px-2 py-1 rounded duration-500 transform -translate-x-5 opacity-0 toltip">
                تنظیمات
              </div>
            )}
          </div>
        </Link>
        <div className="DashboardBTN" onClick={() => logoutHandler()}>
          <CiLogout size={25} className="min-w-[55px]" />
          <h3
            className={`duration-1000 overflow-hidden whitespace-nowrap ${
              open
                ? "transform -translate-x-1 opacity-100"
                : "transform opacity-0 -translate-x-28"
            }`}
          >
            خروج
          </h3>
          {open ? (
            ""
          ) : (
            <div className="absolute top-2 -left-36 bg-amber-600 text-white px-2 py-1 rounded duration-500 transform -translate-x-5 opacity-0 toltip">
              خروج
            </div>
          )}
        </div>
      </div>
      {/* Setting */}
    </div>
  );
}

export default Sidebar;
