import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black p-6 text-xl flex justify-between items-center border-b border-[#f41e14]">
      {/* Logo */}
      <div className="relative flex items-center text-3xl font-bold">
        <span className="relative z-10 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-transparent bg-clip-text">
          THE BAT
        </span>
        <span className="text-[#f41e14]">CAVE</span>
      </div>

      {/* Navigation Links with Responsive Design */}
      <ul className="hidden md:flex space-x-8">
        {["About", "Skills", "Case Files", "Contact"].map((text, index) => (
          <li key={index}>
            <a
              href={`#${text.toLowerCase().replace(" ", "")}`}
              className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-transparent bg-clip-text hover:text-white cursor-pointer"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="text-[#f41e14] text-3xl">&#9776;</button>
      </div>
    </nav>
  );
};

export default Navbar;
