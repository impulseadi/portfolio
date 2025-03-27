import React from "react";

const Hero = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-end justify-center pb-16 md:pb-24 lg:pb-32"
      style={{
        backgroundImage:
          "url('https://images.hdqwalls.com/download/the-batman-2020-logo-4k-ek-1920x1080.jpg')",
      }}
    >
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#f41e14] via-red-600 to-[#f41e14] text-transparent bg-clip-text">
        Welcome to the Batcave
      </h1>
    </div>
  );
};

export default Hero;
