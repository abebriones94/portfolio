import Image from "next/image";
import React from "react";
import ReactShoppingCart from "../public/assets/projects/ReactShoppingCart.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const reactcart = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ReactShoppingCart}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Taco Tuesday Shopping Cart</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="py-4">
            This shopping cart webpage is built using Create React and allows
            users to purchase Mexican ingredients for an evening of tacos. The
            page is fully functional and uses the React hooks useEffect and
            useState to manage state and ensure that the input is saved after a
            page refresh. The user interface is designed to be simple and
            intuitive, allowing users to easily add, edit, and delete items from
            their cart as they see fit. This webpage is a great example of how
            React can be used to build a practical and useful application and
            showcases the developer's skills in using React hooks and building
            dynamic user interfaces.
          </p>
          <a
            href="https://github.com/abebriones94/ReactShoppingCart"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ">
              Code
            </button>
          </a>
          <a
            href="https://abebriones94.github.io/ReactShoppingCart/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 hover:scale-105">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default reactcart;
