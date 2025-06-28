import React from "react";
import { FaDownload } from "react-icons/fa";
import resume from "../../assets/Ringku (1).pdf";
import img from "../../assets/ringku.png";
import { NavLink } from "react-router";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold"
              : "hover:text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-medium"
              : "hover:text-primary"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 sticky z-50 top-0 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex justify-center gap-0 items-center">
          <img src={img} alt="" className="h-8 rounded-full w-8" />
          <a className="btn hidden lg:flex font-medium btn-ghost text-xl">Ringku.SD</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className="menu menu-horizontal
         px-1"
        >
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href={resume}
          download
          className="btn btn-sm btn-outline bg-primary text-white flex items-center gap-2"
        >
          <FaDownload />
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
