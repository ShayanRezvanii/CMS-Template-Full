import React from "react";

function page() {
  return (
    <div className=" w-full h-full ">
      <form className="grid md:grid-cols-2 place-items-center w-full">
        <div className="w-full max-w-[300px] flex space-y-6 flex-col">
          <div>
            <label htmlFor="Instagram" className="lableControll ">
              اینستاگرام :
            </label>
            <input
              className="inputControll"
              id="Instagram"
              name="Instagram"
              type="text"
              autoComplete="off"
              placeholder="instagram.com"
            />
          </div>

          <div>
            <label htmlFor="facebook" className="lableControll">
              فیسبوک :{" "}
            </label>
            <input
              className=" inputControll"
              id="facebook"
              name="facebook"
              type="text"
              autoComplete="off"
              placeholder="FaceBook.com"
            />
          </div>

          <div>
            <label htmlFor="Telegram" className="lableControll">
              تلگرام :{" "}
            </label>
            <input
              className=" inputControll"
              id="Telegram"
              name="Telegram"
              type="text"
              autoComplete="off"
              placeholder="Telegram.com"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="lableControll">
              واتساپ :{" "}
            </label>
            <input
              className=" inputControll"
              id="whatsapp"
              name="whatsapp"
              type="text"
              autoComplete="off"
              placeholder="Whatsapp.com"
            />
          </div>
        </div>
        {/* Adress */}

        <div className="w-full max-w-[300px] flex space-y-6 flex-col mt-5">
          <div>
            <label htmlFor="phone" className="lableControll">
              موبایل :
            </label>
            <input
              className=" inputControll"
              id="phone"
              name="phone"
              type="number"
              autoComplete="off"
              placeholder="09123456789"
            />
          </div>
          <div>
            <label htmlFor="adress" className="lableControll">
              ادرس :
            </label>
            <textarea
              className=" inputControll"
              id="adress"
              name="adress"
              type="text"
              autoComplete="off"
            />
          </div>
        </div>

        {/* Submit */}

        <div className="w-full max-w-[300px] my-6 ">
          <button className="flex flex-row justify-center overflow-hidden  space-x-5  items-center px-1 py-2  w-full rounded duration-300 bg-amber-600  hover:bg-amber-700 text-gray-50 ">
            ذخیره
          </button>
        </div>
      </form>
    </div>
  );
}

export default page;
