import React from "react";
import githubs from "../assets/github.png";
import instagrams from "../assets/instagram.jpg";
import whatsapps from "../assets/whatsapp.png";

export default function Footer() {
  return (
    <footer className="w-full bg-purple-700 text-white py-2 px-8 flex justify-between items-center text-sm mt-8">
      {/* Left */}
      <div>Designed and Developed by Muhammad Usman</div>

      {/* Center */}
      <div>Copyright © 2025 MU</div>

      {/* Right */}
      <div className="flex items-center gap-7">
        <a
          href="https://www.instagram.com/usmansiddiqui1723/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 flex justify-center items-center bg-white rounded-full"
        >
          <img src={instagrams} alt="Instagram" className="w-4 h-4" />
        </a>
        <a
          href="https://wa.me/03317518658"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 flex justify-center items-center bg-white rounded-full"
        >
          <img src={whatsapps} alt="WhatsApp" className="w-4 h-4" />
        </a>
        <a
          href="https://github.com/usman-siddiqui123"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 flex justify-center items-center bg-white rounded-full"
        >
          <img src={githubs} alt="Github" className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}
