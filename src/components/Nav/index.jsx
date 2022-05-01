import React from "react";
import hamg from "../../assets/hamb.svg";
import logo from "../../assets/logo.svg";

function Nav() {
  return (
    <div className="w-screen flex justify-between items-center px-40 text-zinc-900 text-lg py-8 font-bold">
      <img
        src={hamg}
        alt="hamburguer menu"
        className="cursor-pointer"
        width={40}
      ></img>
      <img src={logo} alt="logo" width={56}></img>
    </div>
  );
}

export default Nav;
