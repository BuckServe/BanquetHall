import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import diamond from "../constants/photos/diamond.png";
const categories = [
  { id: 1, name: "HOME", path: "/home" },
  { id: 2, name: "GALLERY", path: "/gallery" },
  { id: 3, name: "ABOUT US", path: "/about" },
  { id: 4, name: "CONTACT US", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = (event) => {
    const category = event.target.innerText.toLowerCase();
    const selectedCategory = categories.find(
      (item) => item.name.toLowerCase() === category
    );
    if (selectedCategory) {
      navigate(selectedCategory.path);
      setIsOpen(false);
    }
  };
  return (
    <nav className="absolute top-0 lef-0 font-sans box-border px-6 md:px-20 py-5 md:py-10 w-full flex justify-between items-center bg-transparent text-white">
      <img src={diamond} alt="diamond" className="w-8 h-8 " />

      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RxHamburgerMenu />
      </button>

      {isOpen && (
        <ul
          onClick={clickHandler}
          className="absolute top-14 z-10 left-0 w-full bg-gray bg-opacity-50 flex flex-col items-center py-5 space-y-4 md:hidden"
        >
          {categories.map((item) => (
            <li key={item.id} className="text-white text-lg cursor-pointer">
              {item.name}
            </li>
          ))}
        </ul>
      )}

      <ul
        onClick={clickHandler}
        className="hidden md:flex justify-around gap-10 "
      >
        {categories.map((item) => (
          <li
            key={item.id}
            className="underline px-2 cursor-pointer font-medium"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
