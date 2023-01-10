"use client";
import axios from "axios";
import { getCookie, hasCookie } from "cookies-next";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BackDrop from "../../components/BackDrop";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  const [sidebar, setsidebar] = useState(false);
  console.log(sidebar);
  const router = useRouter();
  const Switch = () => {
    setsidebar(!sidebar);
  };
  useEffect(() => {
    const Token = hasCookie("Token");
    const id = hasCookie("Userid");
    if (Token && id) {
      const JWT = getCookie("Token");
      const Userid = getCookie("Userid");
      axios
        .get(`http://localhost:8000/api/pages/user/${Userid}`, {
          headers: {
            Authorization: `token ${JWT}`,
          },
        })
        .then((res) => {
          return;
        })
        .catch((err) => {
          router.push("/Register");
        });
    } else {
      router.push("/Register");
    }
  }, [router]);
  return (
    <ThemeProvider attribute="class">
      <div className="w-full min-h-full flex bg-gray-100 dark:bg-gray-900">
        <Sidebar togler={Switch} condition={sidebar} />
        <BackDrop togler={Switch} condition={sidebar} />
        <main
          className={`w-full min-h-screen flex flex-col  space-y-10 z-10 duration-500 pr-0   relative ${
            sidebar === true ? "lg:pr-60 " : "lg:pr-28"
          }`}
        >
          <Header togler={Switch} condition={sidebar} />
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
