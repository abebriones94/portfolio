import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            As a motivated soon-to-be veteran with a passion for software
            engineering, I am eager to transition into a career in this field! I
            have honed my skills through self-study and hands-on experience,
            gaining proficiency in technologies such as JavaScript, HTML, CSS,
            React, C#, and Visual Studio. Furthermore, I hold various Azure
            certifications, showcasing my knowledge and expertise in the
            Microsoft Cloud.
          </p>
          <p className="py-2 text-gray-600">
            I am seeking opportunities to further my growth as a software
            engineer and make a meaningful impact on a team. If you're
            interested in learning more about my background and qualifications,
            please feel free to connect with me on LinkedIn. Let's explore how
            we can work together to drive success.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.{" "}
              <BsFillArrowDownCircleFill size="30px" className="mt-3" />
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
