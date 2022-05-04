import React from "react";
import hamg from "../../assets/hamb.svg";
import logo from "../../assets/logo.svg";

function Nav() {
  return (
    <div className="w-screen flex justify-between items-center px-40 text-zinc-900 py-8 font-bold">
      <img src={logo} alt="logo" width={56}></img>
      <div className="flex gap-8 items-center justify-center">
        <a href="#" className="cursor-pointer font-poppins-light">
          About us
        </a>
        <a href="#" className="cursor-pointer font-poppins-light">
          Services
        </a>
        <a
          href="#"
          className="cursor-pointer py-3 px-6 bg-customBlue rounded-full text-white font-poppins-bold"
        >
          Contact
        </a>
      </div>
      <img
        src={hamg}
        alt="hamburguer menu"
        className="cursor-pointer lg:hidden"
        width={40}
      ></img>
    </div>
  );
}

export default Nav;
