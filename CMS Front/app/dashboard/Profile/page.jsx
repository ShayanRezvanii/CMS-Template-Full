import React from "react";

function Profile() {
  return (
    <div className="w-full min-h-screen px-4 lg:px-10 ">
      <div className="w-full text-2xl font-IransansBold">پروفایل من</div>
      <div className="w-full grid lg:grid-cols-2 mt-10 px-4">
        <div>
          <h2 className="">اطلاعات شخصی</h2>
          <h3 className="text-gray-500 font-IransansThin">
            اطلاعات شخصی خود را مدیریت کنید
          </h3>
        </div>
        <div className="w-full bg-white dark:bg-gray-800 px-4 py-6 rounded-lg shadow-sm">
          <form className=" flex flex-col space-y-3">
            <label htmlFor="name" className="lableControll">
              نام:
            </label>
            <input autoComplete="off" id="lastname" className="inputControll" />
            <label htmlFor="lastname" className="lableControll">
              نام خانوادگی:
            </label>
            <input autoComplete="off" id="email" className="inputControll" />
            <label htmlFor="email" className="lableControll">
              ایمیل:
            </label>
            <input autoComplete="off" id="password" className="inputControll" />
            <label htmlFor="password" className="lableControll">
              پسورد:
            </label>
            <input autoComplete="off" id="name" className="inputControll" />
            <div className="flex justify-start items-center gap-4 text-neutral-800 whitespace-nowrap">
              <label className="lableControll">
                پروفایل:
                <input
                  id="photo"
                  name="photo"
                  // onChange={(e) => setimage(e.target.files[0])}
                  // defaultValue={isempety ? "" : main.image}
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

export default Profile;
