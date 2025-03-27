import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "001",
    name: "Job Portal Application",
    description: "A real-time job portal application that connects job seekers with job recruiters.",
    image: "https://github.com/user-attachments/assets/45bdfe2a-1614-495b-99b0-d6f97d6f9b2f",
    liveLink: "https://job-portal-client-git-main-impulseadis-projects.vercel.app/",
    githubLink: "https://github.com/impulseadi/job-portal"
  },
  {
    id: "002",
    name: "AI SaaS Application",
    description: "A full-stack AI-powered image generator with a credit-based system for managing AI image generation.",
    image: "https://github.com/user-attachments/assets/e083f3eb-83b9-4ca1-a847-6db646de49cb",
    liveLink: "https://imagify-frontend-gnsc.onrender.com/",
    githubLink: "https://github.com/impulseadi/imagify"
  },
  {
    id: "003",
    name: "React.js Dice Game",
    description: "Developed an engaging and interactive dice game web application using React.js.",
    image: "https://github.com/user-attachments/assets/0fd188a4-1f46-4b4f-942e-1f8a2d1b552d",
    liveLink: "https://timely-belekoy-5b7add.netlify.app/",
    githubLink: "https://github.com/impulseadi/ReactDiceGame"
  }
];

const Projects = () => {
  return (
    <section
      className="relative py-20 px-6 text-white text-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20231230/pngtree-textured-backdrop-of-black-rugged-concrete-wall-image_13783010.png')" }} // Replace with your preferred background
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f41e14] via-red-600 to-[#f41e14] text-transparent bg-clip-text">
          Case Files
        </h2>
        <p className="mt-4 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 text-transparent bg-clip-text">
          Confidential projects from the Batcave.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                className="relative p-6 rounded-lg shadow-lg overflow-hidden border border-[#f41e14] bg-cover bg-center"
                style={{
                  backgroundImage: "url(https://www.jokeruniverse.com/wp-content/gallery/mynov2011posts/batmanfiles4.jpg)" // Case file texture
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-70 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-5/6 h-3/6 object-cover rounded-md shadow-md border-2 border-gray-700"
                  />
                </div>
              </motion.div>

              {/* Project Details */}
              <div className="mt-4 text-center max-w-sm">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#f41e14] via-red-500 to-[#f41e14] text-transparent bg-clip-text">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 font-bold text-transparent bg-clip-text">
                  {project.description}
                </p>

                {/* Links */}
                <div className="mt-4 flex justify-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#f41e14]  font-bold via-red-500 to-[#f41e14] text-transparent bg-clip-text hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r font-bold from-[#f41e14] via-red-500 to-[#f41e14] text-transparent bg-clip-text hover:underline"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
