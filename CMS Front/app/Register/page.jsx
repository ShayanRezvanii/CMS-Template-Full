"use client";

import Image from "next/image";
import React, { useState } from "react";
import Background from "/public/Register/rejsterBg.jpg";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();
  const [firstname, setname] = useState();
  const [lastname, setlastname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [signup, setsignup] = useState(true);
  const signupHandler = () => {
    setsignup(!signup);
  };
  const SignupPOST = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("firstname", firstname);
    data.append("lastname", lastname);
    data.append("email", email);
    data.append("password", password);
    axios
      .post("http://localhost:8000/api/pages/signup", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loginPOST = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pages/login", {
        email,
        password,
      })
      .then((res) => {
        setCookie("Token", res.data.token);
        setCookie("Userid", res.data._id);
        router.push("/dashboard/Profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* Background */}
      <div className=" w-full h-screen fixed z-0">
        <Image
          src={Background}
          fill
          className="object-cover"
          alt="RegisterBg"
          placeholder="blur"
        />
        <div className="w-full h-screen absolute top-0 left-0 bg-black/50" />
      </div>
      {/* Background END */}
      {/* FORM Login */}
      <div className="w-[90%] max-w-[550px] min-h-[550px]  bg-white dark:bg-gray-800  relative overflow-hidden rounded-3xl drop-shadow-md flex justify-start items-center z-10">
        <div
          className={`w-full px-5 absolute top-1/2 right-1/2 duration-300 transform  -translate-y-1/2 ${
            signup ? "translate-x-1/2" : "-translate-x-1/2"
          }`}
        >
          <div className="flex justify-center items-center flex-col space-y-4">
            <CgProfile className="text-7xl text-neutral-700 dark:text-neutral-50" />
            <h1 className="font-Iransansblack text-4xl text-neutral-700 dark:text-neutral-50">
              ورود به پنل
            </h1>
          </div>
          <div className="mt-10">
            <form
              onSubmit={loginPOST}
              className="w-full lg:w-4/5 mx-auto flex flex-col gap-5"
            >
              <input
                type={"email"}
                className="inputControll"
                placeholder="ایمیل"
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="password"
                className="inputControll"
                placeholder="پسورد"
                onChange={(e) => setpassword(e.target.value)}
              />
              <button className="w-full bg-amber-700 hover:bg-amber-800 hover:drop-shadow-lg duration-300 p-3 rounded text-neutral-100 font-IransansMD">
                ورود
              </button>
              <h5
                onClick={signupHandler}
                className="text-amber-700 text-center cursor-pointer"
              >
                ثبت نام
              </h5>
            </form>
          </div>
        </div>
        {/* FORM SignUp */}
        <div
          className={`w-full absolute top-1/2 left-1/2 transform duration-300  -translate-y-1/2 ${
            signup ? "translate-x-1/2 " : "-translate-x-1/2 "
          }`}
        >
          <div className="flex justify-center items-center flex-col space-y-4">
            <CgProfile className="text-7xl text-neutral-700" />
            <h1 className="font-Iransansblack text-4xl text-neutral-700">
              ثبت نام ادمین
            </h1>
          </div>
          <div className="mt-10">
            <form
              onSubmit={SignupPOST}
              className="w-full text-right  px-5 lg:w-4/5 mx-auto flex flex-col gap-5"
            >
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  className="inputControll"
                  placeholder="نام"
                  onChange={(e) => setname(e.target.value)}
                />
                <input
                  type="text"
                  className="inputControll"
                  placeholder="نام خانوادگی"
                  onChange={(e) => setlastname(e.target.value)}
                />
              </div>
              <input
                type={"email"}
                className="inputControll"
                placeholder="ایمیل"
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="password"
                className="inputControll"
                placeholder="پسورد"
                onChange={(e) => setpassword(e.target.value)}
              />
              <button className="w-full bg-amber-700 hover:bg-amber-800 hover:drop-shadow-lg duration-300 p-3 rounded text-neutral-100 font-IransansMD">
                ثبت نام
              </button>
              <h5
                onClick={signupHandler}
                className="text-amber-700 text-center cursor-pointer"
              >
                ورود
              </h5>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
