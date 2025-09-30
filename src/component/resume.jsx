import React from "react";
import backgroundImage from "../assets/background.jpg";
import invoice1 from "../assets/Usman Cv.pdf"; 
import Header from "../layout/header";
import Footer from "../layout/footer";
import { FaDownload } from "react-icons/fa";

const cvFile = invoice1; 

export default function Resume() {
  return (
    <div
      className="relative text-white bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />

      {/* 🚀 Resume Section */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-12 px-4 sm:px-6 md:px-10 lg:px-16 text-center">
        
        {/* Download Button (Top) */}
        <a 
          href={cvFile} 
          download="MuhammadUsman-Resume.pdf"
          className="flex items-center justify-center space-x-2 bg-purple-700 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-xl mb-10 text-base sm:text-lg md:text-xl"
        >
          <FaDownload className="text-lg sm:text-xl" /> 
          <span>Download CV</span>
        </a>

        {/* 📄 PDF Viewer */}
        <div className="w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-[400px] sm:h-[600px] md:h-[700px] lg:h-[800px] border-4 border-purple-700 rounded-lg shadow-2xl shadow-teal-500/50 overflow-hidden mb-10">
          <iframe 
            src={cvFile} 
            title="Resume Preview"
            className="w-full h-full"
            frameBorder="0"
          />
        </div>

        {/* Download Button (Bottom) */}
        <a 
          href={cvFile} 
          download="MuhammadUsman-Resume.pdf" 
          className="flex items-center justify-center space-x-2 bg-purple-700 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-xl mb-12 text-base sm:text-lg md:text-xl"
        >
          <FaDownload className="text-lg sm:text-xl" /> 
          <span>Download CV</span>
        </a>
      </div>

      <Footer />
    </div>
  );
}
