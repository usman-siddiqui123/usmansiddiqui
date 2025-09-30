import React, { useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-2 bg-opacity-40 h-20 bg-transparent">
      {/* Logo */}
      <div className="flex items-center space-x-3 h-full">
        <img src={logo} alt="Logo" className="h-[100px] w-auto object-contain" />
      </div>

      {/* Hamburger Icon (visible only on mobile) */}
      <div
        className="md:hidden text-2xl text-white cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex-col md:flex-row md:flex items-center text-lg md:space-x-8 absolute md:static bg-black md:bg-transparent left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
          open ? "top-20 flex" : "top-[-400px] hidden"
        }`}
      >
        <li className="py-3 md:py-0">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center justify-center space-x-2 transition ${
                isActive
                  ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                  : "hover:text-teal-400 text-white"
              }`
            }
            onClick={() => setOpen(false)}
          >
            <FaHome /> <span>Home</span>
          </NavLink>
        </li>

        <li className="py-3 md:py-0">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center justify-center space-x-2 transition ${
                isActive
                  ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                  : "hover:text-teal-400 text-white"
              }`
            }
            onClick={() => setOpen(false)}
          >
            <FaUser /> <span>About</span>
          </NavLink>
        </li>

        <li className="py-3 md:py-0">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center justify-center space-x-2 transition ${
                isActive
                  ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                  : "hover:text-teal-400 text-white"
              }`
            }
            onClick={() => setOpen(false)}
          >
            <FaProjectDiagram /> <span>Projects</span>
          </NavLink>
        </li>

        <li className="py-3 md:py-0">
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `flex items-center justify-center space-x-2 transition ${
                isActive
                  ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                  : "hover:text-teal-400 text-white"
              }`
            }
            onClick={() => setOpen(false)}
          >
            <FaFileAlt /> <span>Resume</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
