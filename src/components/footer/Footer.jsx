import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../../assets/ringku.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
        {/* Logo & Name */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 rounded-full h-10" />
          <span className="text-xl font-bold text-primary">Ringku.SD</span>
        </Link>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl mt-2">
          <a
            href="https://www.linkedin.com/in/ringku-sutradhar-8461002aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sutradhar2071"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-4">&copy; {new Date().getFullYear()} Ringku.SD | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
