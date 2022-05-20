import React, { useState } from "react";
import hamg from "../../assets/hamb.svg";

function Hamb() {
  const [hamb, setHamb] = useState(false);
  const handleClick = () => {
    setHamb(!hamb);
  };

  return (
    <div>
      {hamb ? (
        <div className="bg-zinc-800 absolute top-0 left-0">
          <div className="flex gap-8 items-center flex-col justify-center w-40 h-80 text-white font-bold">
            <a href="#" className="cursor-pointer font-poppins-light">
              About us
            </a>
            <a href="#" className="cursor-pointer font-poppins-light">
              Services
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
      <img
        src={hamg}
        alt="hamburguer menu"
        onClick={handleClick}
        className="cursor-pointer lg:hidden xs:w-8 lg:w-12"
      ></img>
    </div>
  );
}

export default Hamb;
