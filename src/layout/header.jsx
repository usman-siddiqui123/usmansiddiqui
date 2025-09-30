import React from "react";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-2 bg-opacity-40 h-20">
      {/* Logo */}
      <div className="flex items-center space-x-3 h-full">
        <img src={logo} alt="Logo" className="h-[120px] w-auto object-contain" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-lg items-center h-full">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center space-x-2 transition ${
                isActive ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1" : "hover:text-teal-400"
              }`
            }
          >
            <FaHome /> <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center space-x-2 transition ${
                isActive ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1" : "hover:text-teal-400"
              }`
            }
          >
            <FaUser /> <span>About</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center space-x-2 transition ${
                isActive ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1" : "hover:text-teal-400"
              }`
            }
          >
            <FaProjectDiagram /> <span>Projects</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `flex items-center space-x-2 transition ${
                isActive ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1" : "hover:text-teal-400"
              }`
            }
          >
            <FaFileAlt /> <span>Resume</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
