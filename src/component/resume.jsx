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
<Header/>

      {/* 🚀 NEW SECTION: Download Button and CV View */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-12 px-4">
        
        {/* Download CV Button (Upar wala) */}
        <a 
          href={cvFile} 
          download="YourName-Resume.pdf" // File ka naam specify karein
          className="flex items-center space-x-2 bg-purple-700  hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-xl mb-10"
        >
          <FaDownload className="text-xl" /> 
          <span className="text-xl">Download CV</span>
        </a>

        {/* 📄 CV/PDF Viewer using <iframe> */}
        <div className="w-full max-w-4xl h-[800px] border-4 border-purple-700 rounded-lg shadow-2xl shadow-teal-500/50 overflow-hidden mb-12">
            <iframe 
                src={cvFile} 
                title="Resume Preview"
                // PDF ko full width aur height mein dikhane ke liye
                className="w-full h-full"
                // Browser ko batata hai ki yeh ek document hai (optional)
                frameBorder="0"
            />
        </div>

        {/* Download CV Button (Neeche wala) - Zaroorat ho toh rakhein */}
        <a 
          href={cvFile} 
          download="YourName-Resume.pdf" 
          className="flex items-center space-x-2 bg-purple-700  hover:bg-teal-600  text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-xl mb-10"
        >
          <FaDownload className="text-xl" /> 
          <span className="text-xl">Download CV</span>
        </a>
        
      </div>
      
<Footer/>
    </div>
  );
}