import React, { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 ">
      <header className="flex items-center justify-between p-6">
        <div className="text-2xl font-bold flex gap-3">
          <img src="favicon.png" alt="Logo icon" className="h-8" />
          <span className="text-blue-400">T-Shirt </span>
          <span className="text-pink-400">Custom</span>
        </div>{" "}
        <a
          href="/"
          className="bg-pink-600 hover:bg-fuchsia-600 tracking-wide text-lg text-white  py-2 px-6 rounded-xl "
        >
          Inicio
        </a>
      </header>
    </nav>
  );
};

export default Navbar;
