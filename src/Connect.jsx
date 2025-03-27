import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

const backgroundImage = "https://wallpapers.com/images/hd/red-texture-background-1920-x-1080-vd2bp9mme3fcwan7.jpg"; // Replace with your actual image URL
const backgroundImage1="https://png.pngtree.com/thumb_back/fw800/background/20231230/pngtree-textured-backdrop-of-black-rugged-concrete-wall-image_13783010.png"; 

const Education = () => {
  return (
    <section
      className="py-20 px-6 text-black text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="text-4xl md:text-6xl font-bold text-black">Education</h2>
      <div className="mt-6 text-base md:text-lg">
        <p className="font-bold">JSS Academy Of Technical Education, Noida</p>
        <p>B.Tech in Electronics and Communication Engineering</p>
        <p>2020 - 2024 | CGPA: 7.84</p>
      </div>
    </section>
  );
};
const Connect = () => {
  return (
    <section
      className="py-20 px-6 text-black text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage1})` }}
    >
      <h2 className="text-4xl md:text-6xl font-bold text-[#f41e14]">Let's Connect</h2>
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-6 text-base sm:text-lg">
        <a
          href="https://drive.google.com/file/d/1k2Le6hVg1R_6unLgLNtI5AyuLdqPFAW0/view?usp=drive_link"
          target="_blank"
          className="flex items-center gap-2 text-[#f41e14] hover:text-white group"
          aria-label="Resume"
        >
          <FaFileAlt size={24} className="opacity-100 group-hover:opacity-100" />
          <span className="bg-gradient-to-r from-white to-[#f41e14] text-transparent bg-clip-text group-hover:text-white">Resume</span>
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-gupta0901/"
          target="_blank"
          className="flex items-center gap-2 text-[#f41e14] hover:text-white group"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} className="opacity-100 group-hover:opacity-100" />
          <span className="bg-gradient-to-r from-white to-[#f41e14] text-transparent bg-clip-text group-hover:text-white">LinkedIn</span>
        </a>
        <a
          href="mailto:adigupta.951@gmail.com"
          className="flex items-center gap-2 text-[#f41e14] hover:text-white group"
          aria-label="Gmail"
        >
          <FaEnvelope size={24} className="opacity-100 group-hover:opacity-100" />
          <span className="bg-gradient-to-r from-white to-[#f41e14] text-transparent bg-clip-text group-hover:text-white">Gmail</span>
        </a>
        <a
          href="https://x.com/Adigupta951"
          target="_blank"
          className="flex items-center gap-2 text-[#f41e14] hover:text-white group"
          aria-label="Twitter"
        >
          <FaTwitter size={24} className="opacity-100 group-hover:opacity-100" />
          <span className="bg-gradient-to-r from-white to-[#f41e14] text-transparent bg-clip-text group-hover:text-white">Twitter</span>
        </a>
        <a
          href="https://github.com/impulseadi"
          target="_blank"
          className="flex items-center gap-2 text-[#f41e14] hover:text-white group"
          aria-label="GitHub"
        >
          <FaGithub size={24} className="opacity-100 group-hover:opacity-100" />
          <span className="bg-gradient-to-r from-white to-[#f41e14] text-transparent bg-clip-text group-hover:text-white">GitHub</span>
        </a>
      </div>
    </section>
  );
};


const ConnectPage = () => {
  return (
    <>
      <Education />
      <Connect />
    </>
  );
};

export default ConnectPage;
