import React from "react";
import Image from "next/image";
import Link from "next/link";
import cloudImg from "../public/assets/projects/cloudImg.jpg";
import ProjectItem from "./ProjectItem";
import Etch from "../public/assets/projects/Etch.jpg";
import ReactShoppingCart from "../public/assets/projects/ReactShoppingCart.jpg";
import mentalHealth from "../public/assets/projects/mentalHealth.jpg";
import hangman from "../public/assets/projects/hangman.jpg";
import weather from "../public/assets/projects/weather.jpg";
import calc from "../public/assets/projects/calc.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-24">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Projects I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Simple Calculator"
            backgroundImg={calc}
            builtWith="JavaScript HTML CSS"
            projectUrl="/calculator"
          />
          <ProjectItem
            title="Etch A Sketch"
            backgroundImg={Etch}
            builtWith="HTML CSS JavaScript"
            projectUrl="/etch"
          />
          <ProjectItem
            title="Taco Tuesday Shopping Cart"
            backgroundImg={ReactShoppingCart}
            builtWith="React JavaScript CSS"
            projectUrl="/reactcart"
          />
          <ProjectItem
            title="Cloud Hosting Website"
            backgroundImg={cloudImg}
            builtWith="HTML CSS JavaScript Flexbox Grid"
            projectUrl="/cloud"
          />
          <ProjectItem
            title="Weather App w/ API"
            backgroundImg={weather}
            builtWith="React JavaScript OpenWeatherMap API"
            projectUrl="/weather"
          />
          <ProjectItem
            title="Hangman!"
            backgroundImg={hangman}
            builtWith="React Vite TypeScript"
            projectUrl="/hangman"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
