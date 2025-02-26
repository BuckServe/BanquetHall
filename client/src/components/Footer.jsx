import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full h-[8.125rem] px-32 flex items-center justify-between bg-gray text-white">
      <a
        href="https://wa.me/923086608585"
        className="fixed rounded-full p-2 box-border bg-[#37d775] text-white bottom-16 right-6"
      >
        <FaWhatsapp size={40} />
      </a>
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <FaLocationDot />
          <span>Sargodha, Pakistan</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <span>+92 308 6608585</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <Link to="/about">About us</Link>
        <Link>Gallery</Link>
      </div>
    </footer>
  );
};

export default Footer;
