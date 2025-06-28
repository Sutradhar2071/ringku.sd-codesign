import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiVercel,
  SiReactrouter,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-base-100 py-16 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-12">
          My Skills
        </h2>

        {/* Frontend Skills */}
        <SkillCategory title="Frontend">
          <SkillItem icon={<FaHtml5 />} name="HTML5" />
          <SkillItem icon={<FaCss3Alt />} name="CSS3" />
          <SkillItem icon={<SiTailwindcss />} name="TailwindCSS" />
          <SkillItem icon={<SiDaisyui />} name="DaisyUI" />
          <SkillItem icon={<FaReact />} name="React" />
          <SkillItem icon={<SiReactrouter />} name="React Router" />
        </SkillCategory>

        {/* Backend Skills */}
        <SkillCategory title="Backend">
          <SkillItem icon={<FaNodeJs />} name="Node.js" />
          <SkillItem icon={<SiExpress />} name="Express.js" />
          <SkillItem icon={<SiMongodb />} name="MongoDB" />
        </SkillCategory>

        {/* Tools & Deployment */}
        <SkillCategory title="Tools & Deployment">
          <SkillItem icon={<FaGitAlt />} name="Git" />
          <SkillItem icon={<FaGithub />} name="GitHub" />
          <SkillItem icon={<SiNetlify />} name="Netlify" />
          <SkillItem icon={<SiVercel />} name="Vercel" />
          <SkillItem icon={<FaServer />} name="Surge" />
        </SkillCategory>
      </div>
    </div>
  );
};

// ✅ Skill Category Wrapper
const SkillCategory = ({ title, children }) => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-accent mb-6">{title}</h3>
      <div className="flex flex-wrap justify-center gap-5">{children}</div>
    </div>
  );
};

// ✅ Reusable Skill Badge with subtle hover animation
const SkillItem = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-base-200 text-sm rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-base-300">
      <span className="text-lg text-primary">{icon}</span>
      <span className="font-medium text-base-content">{name}</span>
    </div>
  );
};

export default Skills;
