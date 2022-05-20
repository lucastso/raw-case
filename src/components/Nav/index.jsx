import React from "react";
import hamg from "../../assets/hamb.svg";
import logo from "../../assets/logo.svg";
import { Link } from "react-scroll";
import Hamb from "../Hamb";

function Nav() {
  return (
    <div className="w-screen flex justify-between items-center xs:px-4 lg:px-40 text-zinc-900 py-8 font-bold">
      <img src={logo} alt="logo" className="xs:w-8 lg:w-12"></img>
      <div className="flex xs:gap-2 lg:gap-8 items-center justify-center">
        <a
          href="#"
          className="cursor-pointer font-poppins-light xs:text-sm lg:text-base lg:block xs:hidden"
        >
          About us
        </a>
        <a
          href="#"
          className="cursor-pointer font-poppins-light xs:text-sm lg:text-base lg:block xs:hidden"
        >
          Services
        </a>
        <Link
          to="contact"
          className="cursor-pointer py-3 px-6 bg-customBlue rounded-full text-white font-poppins-bold"
          smooth={true}
          offset={50}
          duration={1000}
        >
          Contact
        </Link>
      </div>
      <Hamb />
    </div>
  );
}

export default Nav;
