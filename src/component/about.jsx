import React from "react";

import backgroundImage from "../assets/background.jpg";

import aboutright from "../assets/aboutright.png"; // apni image ka path
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

// ✅ Import Header & Footer
import Header from "../layout/header";
import Footer from "../layout/footer";

export default function About() {
  return (
    <div
      className="relative text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

<Header/>
      {/* 🌟 About Section */}
      <section
        id="about"
        className="grid grid-cols-1 md:grid-cols-2 items-center px-10 md:px-20 py-12 gap-10 ml-12"
      >
        {/* Left - Text Section */}
        <div className="text-left">
          <h2
            className="text-4xl font-semibold text-white mb-2 ml-30"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            Know <span className="text-white font-bold">Who</span>{" "}
            <span className="text-teal-400 font-bold">I’M</span>
          </h2>

          <p className="max-w-2xl text-lg mt-6 leading-relaxed text-white">
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

          <p className="max-w-2xl text-lg mt-4 leading-relaxed text-white">
            I’m skilled in{" "}
            <span className="text-white">
              React.js, Vite, HTML, CSS, JavaScript, and TailwindCSS
            </span>
            , with a strong focus on clean code and modern UI design. I
            graduated with a Bachelor of Science in Computer Science from{" "}
            <span className="text-white">Iqra University (Airport Campus)</span>
            .
          </p>

          <div className="max-w-2xl mt-6 text-left text-lg text-white">
            <p className="text-teal-400 font-bold mb-2 text-xl">
              Apart from my professional work, I am passionate about:
            </p>
            <ul className="space-y-2 text-gray-200 ml-10">
              <li className="flex items-center gap-2">
                <FaHandPointRight color="white" size={20} />
                <span>Exploring modern frontend frameworks</span>
              </li>

              <li className="flex items-center gap-2">
                <FaHandPointRight color="white" size={20} />
                <span>
                  Building high-performance web apps with React and Vite
                </span>
              </li>

              <li className="flex items-center gap-2">
                <FaHandPointRight color="white" size={20} />
                <span>Creating engaging and user-friendly interfaces</span>
              </li>

              <li className="flex items-center gap-2">
                <FaHandPointRight color="white" size={20} />
                <span>
                  Continuously learning new technologies to enhance my
                  development workflow
                </span>
              </li>
            </ul>
          </div>

          <p className="text-teal-400 text-2xl italic font-bold mt-6 ml-12 text-center">
            "Code with creativity, design with purpose, and build with passion!"
          </p>

          <h3 className="text-lg mt-2 font-bold text-white ml-12 text-center">
            --Muhammad Usman Siddiqui
          </h3>
        </div>

        {/* Right - Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={aboutright}
            alt="About Usman"
            className="rounded-2xl shadow-lg max-w-full w-full object-contain"
          />
        </div>
      </section>
      {/* Professional Skill Set Section */}
      <section className="py-16 text-center">
        <h2 className="text-5xl font-bold mb-10">
          <span className="text-white">Professional </span>
          <span className="text-teal-400">SkillSet</span>
        </h2>

        {/* Skill Set Boxes - 2 Rows with 3 Boxes Centered Each */}
        <div className="flex flex-col items-center gap-10 px-10 md:px-20">
          {/* 🔹 Row 1 */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Box 1 */}
            <div className="relative bg-transparent border-2 border-transparent hover:border-white hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <img
                  src={reacts}
                  alt="React"
                  className="w-40 h-40 object-contain transition-all duration-500 ease-in-out hover:scale-125 hover:brightness-200"
                />
              </div>
            </div>

            {/* Box 2 */}
            <div className="relative bg-transparent border-2 border-transparent hover:border-white hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <img
                  src={html}
                  alt="HTML5"
                  className="w-40 h-40 object-contain transition-all duration-500 ease-in-out hover:scale-125 hover:brightness-200"
                />
              </div>
            </div>

            {/* Box 3 */}
            <div className="relative bg-transparent border-2 border-transparent hover:border-white hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <img
                  src={csss}
                  alt="CSS3"
                  className="w-40 h-40 object-contain transition-all duration-500 ease-in-out hover:scale-125 hover:brightness-200"
                />
              </div>
            </div>
          </div>

          {/* 🔹 Row 2 */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Box 4 */}
            <div className="relative bg-transparent border-2 border-transparent hover:border-white hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <img
                  src={tailwand}
                  alt="Tailwind"
                  className="w-40 h-40 object-contain transition-all duration-500 ease-in-out hover:scale-125 hover:brightness-200"
                />
              </div>
            </div>

            {/* Box 5 */}
            <div className="relative bg-transparent border-2 border-transparent hover:border-white hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <img
                  src={javascript}
                  alt="JavaScript"
                  className="w-40 h-40 object-contain transition-all duration-500 ease-in-out hover:scale-125 hover:brightness-200"
                />
              </div>
            </div>

            {/* Box 6 */}
            <div className="relative bg-transparent border-2 border-transparent hover:border-white hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <img
                  src={vite}
                  alt="Vite"
                  className="w-40 h-40 object-contain transition-all duration-500 ease-in-out hover:scale-125 hover:brightness-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-5xl font-bold mb-10">
          <span className="text-teal-400">Tools </span>
          <span className="text-white">I Use</span>
        </h2>

        {/* Skill Set Boxes - 2 Rows with 3 Boxes Centered Each */}
        <div className="flex flex-col items-center gap-10 px-10 md:px-20">
          {/* 🔹 Row 1 */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Box 1 */}
            <div className="relative bg-transparent border-2 border-transparent hover:border-white hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <img
                  src={npms}
                  alt="npm"
                  className="w-40 h-40 object-contain transition-all duration-500 ease-in-out hover:scale-125 hover:brightness-200"
                />
              </div>
            </div>

            {/* Box 2 */}
            <div className="relative bg-transparent border-2 border-transparent hover:border-white hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <img
                  src={visuals}
                  alt="HTML5"
                  className="w-40 h-40 object-contain transition-all duration-500 ease-in-out hover:scale-125 hover:brightness-200"
                />
              </div>
            </div>

            {/* Box 3 */}
            <div className="relative bg-transparent border-2 border-transparent hover:border-white hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <img
                  src={github}
                  alt="CSS3"
                  className="w-40 h-40 object-contain transition-all duration-500 ease-in-out hover:scale-125 hover:brightness-200"
                />
              </div>
            </div>
          </div>

          {/* 🔹 Row 2 */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Box 4 */}
            <div className="relative bg-transparent border-2 border-transparent hover:border-white hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <img
                  src={jsons}
                  alt="Tailwind"
                  className="w-40 h-40 object-contain transition-all duration-500 ease-in-out hover:scale-125 hover:brightness-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>

    </div>
  );
}
