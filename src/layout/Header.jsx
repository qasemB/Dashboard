import React, { useContext } from "react";
import Logo from "../img/8439b51bb7a19f6e65ce1064bc37c197.svg";
import { BoardContext } from "../context/BoardContext";
import { IoRefresh } from "react-icons/io5";
import { generateRandomSixDigitNumber } from "../utils/codeUtils";
const Header = () => {
  const { screenId, setScreenId } = useContext(BoardContext);
  return (
    <div className="bg-gradient-to-r from-white via-blue-700  to-purple-500 fixed top-0 left-0 z-100  w-full h-16  bg-white  shadow-md flex justify-between items-center px-5">
      <img src={Logo} alt="logo" />
      <span className="text-white flex gap-2">
        <IoRefresh size={24} className="cursor-pointer" onClick={()=>setScreenId(generateRandomSixDigitNumber())}/>
        {screenId}
      </span>
    </div>
  );
};

export default Header;
