import React from "react";
import { cookies } from "next/headers";
function page() {
  const cookiesList = cookies();
  console.log();
  return <div></div>;
}

export default page;
