import React from "react";
import batman from "./assets/batman.jpg"; // Import the image

const Hero = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center md:justify-end"
      style={{
        backgroundImage: `url(${batman})`, // Use the imported image here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f41e14", // Fallback red background
      }}
    >
      <div className="text-center md:text-left md:mr-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-black via-gray-800 to-black text-transparent bg-clip-text">
          Welcome to the Aditya's
        </h1>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-transparent bg-clip-text inline-block">
          Bat
        </h2>
        <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black inline-block">
          Cave
        </h3>
      </div>
    </div>
  );
};

export default Hero;
