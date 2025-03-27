import React from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const backgroundImage =
  "https://wallpapers.com/images/hd/red-texture-background-1920-x-1080-vd2bp9mme3fcwan7.jpg"; // Replace with your actual image URL

const skills = [
  { name: "ReactJS", icon: <FaReact />, image: "https://i.imgur.com/DUdNA.jpeg" },
  { name: "Node.js", icon: <FaNodeJs />, image: "https://i.imgur.com/DUdNA.jpeg" },
  { name: "ExpressJS", icon: "🚀", image: "https://i.imgur.com/DUdNA.jpeg" },
  { name: "MongoDB", icon: <FaDatabase />, image: "https://i.imgur.com/DUdNA.jpeg" },
  { name: "SQL", icon: "🗄️", image: "https://i.imgur.com/DUdNA.jpeg" },
  { name: "JavaScript", icon: "⚡", image: "https://i.imgur.com/DUdNA.jpeg" },
  { name: "HTML & CSS", icon: "🎨", image: "https://i.imgur.com/DUdNA.jpeg" },
  { name: "Java", icon: "☕", image: "https://i.imgur.com/DUdNA.jpeg" },
  { name: "Python", icon: "🐍", image: "https://i.imgur.com/DUdNA.jpeg" },
  { name: "DBMS", icon: "📊", image: "https://i.imgur.com/DUdNA.jpeg" },
];

const Skills = () => {
  return (
    <section
      className="py-20 px-6 text-black text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Black Gradient Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-black via-gray-900 to-black text-transparent bg-clip-text">
        Utility Belt
      </h2>

      {/* Gradient Paragraph */}
      <p className="mb-10 text-sm md:text-lg font-bold bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-transparent bg-clip-text">
        Tools and technologies I wield.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-[140px] md:w-[160px] lg:w-[180px] min-h-[140px] md:min-h-[160px] lg:min-h-[180px] flex flex-col items-center justify-center text-white rounded-xl shadow-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${skill.image})`,
            }}
          >
            <div className="text-3xl md:text-4xl lg:text-5xl bg-black bg-opacity-60 p-2 md:p-3 rounded-full">
              {skill.icon}
            </div>
            <p className="mt-2 text-xs md:text-sm lg:text-base bg-black bg-opacity-60 px-2 py-1 rounded">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
