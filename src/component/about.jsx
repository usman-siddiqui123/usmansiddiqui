import React from "react";
import backgroundImage from "../assets/background.jpg";
import aboutright from "../assets/aboutright.png";
import { FaHandPointRight } from "react-icons/fa";
import html from "../assets/htm.png";
import csss from "../assets/css.png";
import reacts from "../assets/react.png";
import vite from "../assets/vite.png";
import tailwand from "../assets/tailwand.png";
import javascript from "../assets/javascript.png";
import jsons from "../assets/json.png";
import visuals from "../assets/visual.png";
import github from "../assets/Githubb.png";
import npms from "../assets/npm.png";

import Header from "../layout/header";
import Footer from "../layout/footer";

export default function About() {
  return (
    <div
      className="relative text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />

      {/* 🌟 About Section */}
      <section
        id="about"
        className="grid grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-10 md:px-20 py-12 gap-10"
      >
        {/* Left - Text Section */}
        <div className="text-left">
          <h2
            className="text-3xl sm:text-4xl font-semibold text-white mb-2"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            Know <span className="text-white font-bold">Who</span>{" "}
            <span className="text-teal-400 font-bold">I’M</span>
          </h2>

          <p className="max-w-2xl text-base sm:text-lg mt-6 leading-relaxed text-white">
            I’M{" "}
            <span className="text-teal-400 font-bold text-xl">
              Muhammad Usman Siddiqui
            </span>{" "}
            from{" "}
            <span className="text-teal-400 font-bold text-xl">
              Karachi, Pakistan
            </span>
            . I am currently working as a{" "}
            <span className="text-white font-semibold">
              React & Frontend Developer
            </span>
            , passionate about crafting responsive, dynamic, and visually
            appealing web applications.
          </p>

          <p className="max-w-2xl text-base sm:text-lg mt-4 leading-relaxed text-white">
            I’m skilled in{" "}
            <span className="text-white">
              React.js, Vite, HTML, CSS, JavaScript, and TailwindCSS
            </span>
            , with a strong focus on clean code and modern UI design. I
            graduated with a Bachelor of Science in Computer Science from{" "}
            <span className="text-white">Iqra University (Airport Campus)</span>.
          </p>

          <div className="max-w-2xl mt-6 text-left text-base sm:text-lg text-white">
            <p className="text-teal-400 font-bold mb-2 text-xl">
              Apart from my professional work, I am passionate about:
            </p>
            <ul className="space-y-2 text-gray-200 ml-6 sm:ml-10">
              {[
                "Exploring modern frontend frameworks",
                "Building high-performance web apps with React and Vite",
                "Creating engaging and user-friendly interfaces",
                "Continuously learning new technologies to enhance my workflow",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaHandPointRight color="white" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-teal-400 text-xl sm:text-2xl italic font-bold mt-6 text-center">
            "Code with creativity, design with purpose, and build with passion!"
          </p>

          <h3 className="text-base sm:text-lg mt-2 font-bold text-white text-center">
            --Muhammad Usman Siddiqui
          </h3>
        </div>

        {/* Right - Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={aboutright}
            alt="About Usman"
            className="rounded-2xl shadow-lg max-w-full w-3/4 sm:w-2/3 md:w-full object-contain"
          />
        </div>
      </section>

      {/* Professional Skill Set Section */}
      <section className="py-16 text-center px-4 sm:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          <span className="text-white">Professional </span>
          <span className="text-teal-400">SkillSet</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center">
          {[reacts, html, csss, tailwand, javascript, vite].map((img, i) => (
            <div
              key={i}
              className="bg-transparent border-2 border-transparent hover:border-white hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg p-6 sm:p-10 flex items-center justify-center"
            >
              <img
                src={img}
                alt="Skill"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain transition-all duration-500 ease-in-out hover:scale-125 hover:brightness-200"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 text-center px-4 sm:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          <span className="text-teal-400">Tools </span>
          <span className="text-white">I Use</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center">
          {[npms, visuals, github, jsons].map((tool, i) => (
            <div
              key={i}
              className="bg-transparent border-2 border-transparent hover:border-white hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg p-6 sm:p-10 flex items-center justify-center"
            >
              <img
                src={tool}
                alt="Tool"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain transition-all duration-500 ease-in-out hover:scale-125 hover:brightness-200"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
