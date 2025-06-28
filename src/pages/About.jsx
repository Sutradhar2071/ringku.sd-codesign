import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">About Me</h2>
        <p className="text-lg text-base-content leading-relaxed">
          Hello! I’m <span className="font-semibold text-accent">Ringku Sutradhar</span>, a passionate and self-motivated MERN Stack Developer with a strong focus on <span className="font-medium">frontend development</span>.  
          <br /><br />
          My journey into programming started with curiosity — I wanted to understand how websites work. I began with HTML and CSS, then quickly moved on to mastering JavaScript, React, and now I'm diving deeper into backend technologies like Node.js, Express, and MongoDB.
          <br /><br />
          I enjoy building clean, interactive, and responsive user interfaces that provide great user experiences. I’m particularly passionate about working with <span className="font-medium text-secondary">React, TailwindCSS, and Firebase</span> to craft modern web applications.
          <br /><br />
          Outside of programming, I enjoy walking daily to stay active, listening to music, and exploring new technologies. I also have a deep interest in learning about design systems and software engineering principles.
          <br /><br />
          I'm constantly learning and love collaborating on meaningful projects. Whether it’s a team environment or a solo mission — I’m always ready to build something impactful!
        </p>
      </div>
    </div>
  );
};

export default About;
