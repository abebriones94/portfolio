import Image from "next/image";
import React from "react";
import cloudImg from "../public/assets/projects/cloudImg.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const cloud = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cloudImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Simple Calculator</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="py-4">
            As an aspiring developer, I took the initiative to build a clone of
            a cloud hosting website using HTML, CSS Grid, Flexbox, and
            JavaScript. Throughout the project, I added comments to enhance my
            understanding of how CSS Grid and JavaScript functions work within a
            functioning website. I applied new CSS techniques such as
            animations, keyframes, custom root properties, and media queries,
            further strengthening my CSS skills. I also became familiar with the
            utilization of font-awesome in adding icons with a professional
            touch. This website build provided a valuable learning opportunity
            and has inspired me to continue improving my personal website with
            creative animations and media queries.
          </p>
          <a
            href="https://github.com/abebriones94/Cloud-Hosting-Website"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ">
              Code
            </button>
          </a>
          <a
            href="https://abebriones94.github.io/Cloud-Hosting-Website/"
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
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Flexbox
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Grid
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

export default cloud;
