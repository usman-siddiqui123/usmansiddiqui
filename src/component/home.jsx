// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/background.jpg";
import rightImage from "../assets/rightimage.png";
import righte from "../assets/righteimage.svg";

// ✅ Import Header & Footer
import Header from "../layout/header";
import Footer from "../layout/footer";

export default function Home() {
  const [showReactDev, setShowReactDev] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowReactDev((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative text-white bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* ✅ Header imported */}
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row justify-between items-center h-auto md:h-[85vh] px-6 md:px-24 py-10 md:py-0 text-center md:text-left">
        {/* Left Text */}
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Hi There 👋
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
            <span className="text-white">I’m </span>
            <span className="text-white">Muhammad Usman</span>
          </h1>
          <h3 className="text-2xl md:text-4xl font-extrabold text-purple-400 transition-all duration-700 ease-in-out">
            {showReactDev ? "React Developer" : "Frontend Developer"}
          </h3>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={rightImage}
            alt="Right Side"
            className="w-[280px] sm:w-[350px] md:w-[500px] h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center px-6 md:px-24 py-10 gap-10 text-center md:text-left">
        {/* Left Text */}
        <div className="flex-1 space-y-4 p-4 md:p-6 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            <span className="text-white">LET ME </span>
            <span
              className="text-purple-400"
              style={{ fontFamily: "arialsanssarif" }}
            >
              INTRODUCE{" "}
            </span>
            <span className="text-white">MYSELF</span>
          </h2>

          <p className="text-white text-base md:text-xl">
            <span className="font-bold text-purple-400">Web development</span> captured my interest with its ability to create interactive and dynamic user experiences.
          </p>
          <p className="text-white text-base md:text-xl">
            I am proficient in <span className="font-bold text-purple-400">React.js, Vite, HTML, CSS, and JavaScript</span>, with hands-on experience in building responsive and high-performance web applications.
          </p>
          <p className="text-white text-base md:text-xl">
            My fields of interest include <span className="font-bold text-purple-400">Frontend Development and UI/UX design</span>, focusing on creating seamless and visually appealing interfaces.
          </p>
          <p className="text-white text-base md:text-xl">
            I also enjoy building projects using <span className="font-bold text-purple-400">React, Vite, and modern frontend technologies</span> to bring ideas to life on the web.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={righte}
            alt="Right Side"
            className="w-[220px] sm:w-[250px] md:w-[280px] h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* ✅ Footer imported */}
      <Footer />
    </div>
  );
}
