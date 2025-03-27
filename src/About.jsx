import React from "react";

const backgroundImage =
  "https://png.pngtree.com/thumb_back/fw800/background/20231230/pngtree-textured-backdrop-of-black-rugged-concrete-wall-image_13783010.png"; // Replace with your actual image URL

const About = () => {
  return (
    <section
      className="py-20 px-6 text-white text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Red Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#f41e14]">
        The Vigilante
      </h2>

      {/* Glowing White/Silver Gradient Paragraph */}
      <p className="mt-4 max-w-2xl mx-auto text-sm md:text-lg font-bold bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-transparent bg-clip-text">
        A self-taught developer by day, a problem solver by night. With
        expertise in React, JavaScript, Express, Node.js, and MongoDB, I build
        applications that stand strong, just like Gotham's Dark Knight.
      </p>
    </section>
  );
};

export default About;
