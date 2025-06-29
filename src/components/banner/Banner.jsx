import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import img from "../../assets/ringku.png";
import resume from '../../assets/Ringku (1).pdf'

const Banner = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10">
        {/* Profile Image */}
        <img
          src={img}
          className="w-64 rounded-full shadow-2xl border-4 border-primary"
          alt="Ringku"
        />

        {/* Text Content */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-3">
            Hi, I’m <span className="text-accent">Ringku Sutradhar</span>
          </h1>

          <h2 className="text-xl lg:text-2xl font-semibold mb-4">
            MERN Stack Developer |{" "}
            <span className="text-secondary">Frontend Specialist</span>
          </h2>

          <p className="mb-6 max-w-xl text-base-content">
            Passionate about crafting user-friendly web applications with clean
            UI and efficient code. I love working with React, TailwindCSS, and
            modern frontend tools.
          </p>

          {/* Social Buttons + React Icon */}
          <div className="flex gap-4 flex-wrap mb-4 items-center">
            <a
              href="https://github.com/Sutradhar2071"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary flex items-center gap-2"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ringku-sutradhar-8461002aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-secondary flex items-center gap-2"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>

            {/* React Icon - slow spin */}
            <div className="text-4xl text-cyan-400 animate-spin-slow">
              <FaReact />
            </div>
          </div>

          {/* Resume Button with Animation */}
          <a
            href={resume}
            download
            className="btn btn-success btn-sm w-fit flex items-center gap-2 group transition-all duration-300 hover:scale-105"
          >
            <FaDownload className="text-lg group-hover:animate-bounce" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
