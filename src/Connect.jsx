import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

const backgroundImage = "https://wallpapers.com/images/hd/red-texture-background-1920-x-1080-vd2bp9mme3fcwan7.jpg"; // Replace with your actual image URL

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
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="text-4xl md:text-6xl font-bold text-black">Let's Connect</h2>
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-6 text-base sm:text-lg">
        <a
          href="https://drive.google.com/file/d/1k2Le6hVg1R_6unLgLNtI5AyuLdqPFAW0/view?usp=drive_link"
          target="_blank"
          className="flex items-center gap-2 text-black hover:text-white"
        >
          <FaFileAlt size={24} /> Resume
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-gupta0901/"
          target="_blank"
          className="flex items-center gap-2 text-black hover:text-white"
        >
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a
          href="mailto:adigupta.951@gmail.com"
          className="flex items-center gap-2 text-black hover:text-white"
        >
          <FaEnvelope size={24} /> Gmail
        </a>
        <a
          href="https://x.com/Adigupta951"
          target="_blank"
          className="flex items-center gap-2 text-black hover:text-white"
        >
          <FaTwitter size={24} /> Twitter
        </a>
        <a
          href="https://github.com/impulseadi"
          target="_blank"
          className="flex items-center gap-2 text-black hover:text-white"
        >
          <FaGithub size={24} /> GitHub
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
