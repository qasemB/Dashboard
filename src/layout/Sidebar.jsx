import React, { useContext } from "react";
import { AiOutlineFileText } from "react-icons/ai"; // Import a close icon for toggling
import {
  MdRadioButtonUnchecked,
  MdCropSquare,
  MdChangeHistory,
  MdStarOutline,
  MdVideoLibrary,
} from "react-icons/md"; // Other icons
import { FaImage } from "react-icons/fa"; // Image Upload icon
import { useCreateShape } from "../hooks/createShape";
import { IoSaveOutline } from "react-icons/io5";
import { PiUpload } from "react-icons/pi";
import { useStoreBoard } from "../hooks/storeBoard";
import { saveData } from "../utils/saveData";
import { BoardContext } from "../context/BoardContext";

const Sidebar = ({ isOpen, toggleMenu }) => {
  const { addCircle, addSquare, addTriangle, addText } = useCreateShape();

  const { screenId, canvas } = useContext(BoardContext);

  const handleSaveData = async () => {
    try {
      await saveData(screenId, canvas.toJSON());
      alert("Saved Successfully...");
    } catch (error) {
      alert("Can't Save...");
    }
  };

  return (
    <div
      className={`overflow-x-hidden fixed top-0 left-0 h-full border-b bg-gradient-to-t from-gray-400 via-gray-200 to-white shadow-xl bg-white transition-all duration-300 pt-16
            ${isOpen ? "w-64" : "w-20"}`}
    >
      <div className="flex flex-col items-center pt-5">
        <ul
          className={`flex gap-5 flex-col space-y-4 text-black items-center w-full`}
        >
          <li className="flex flex-col items-start gap-3 cursor-pointer relative hover:hovered">
            <div className="flex flex-nowrap items-center">
              <div className="flex justify-center items-center flex-wrap w-10 h-10 rounded-lg bg-white">
                <MdRadioButtonUnchecked className="text-blue-500" />
                <MdCropSquare className="text-blue-500" />
                <MdChangeHistory className="text-blue-500" />
                <MdStarOutline className="text-blue-500" />
              </div>
            </div>
            <span className="font-inter text-sm cursor-pointer">Shape</span>
            <div className="shape_menu fixed !w-52 h-10 flex justify-between items-center top-[85px] left-16 bg-white z-40 origin-left scale-x-0 transition-all px-2">
              <MdRadioButtonUnchecked
                className="text-blue-500 hover:text-blue-700"
                size={36}
                onClick={addCircle}
              />
              <MdCropSquare
                className="text-blue-500 hover:text-blue-700"
                size={36}
                onClick={addSquare}
              />
              <MdChangeHistory
                className="text-blue-500 hover:text-blue-700"
                size={36}
                onClick={addTriangle}
              />
            </div>
          </li>
          <li
            className="flex flex-col justify-center items-start cursor-pointer"
            onClick={addText}
          >
            <div className="flex flex-col gap-3 text-center ">
              <div className="flex justify-center items-center flex-wrap w-10 h-10 rounded-lg bg-white">
                <AiOutlineFileText className="text-blue-500" />
              </div>
              <span className="font-inter text-sm cursor-pointer">Text</span>
            </div>
          </li>
          <li className="flex flex-col justify-center items-start cursor-pointer">
            <div className="flex flex-col gap-3 text-center ">
              <div className="flex justify-center items-center flex-wrap w-10 h-10 rounded-lg bg-white">
                <FaImage className="text-blue-500" />
              </div>
              <span className="font-inter text-sm cursor-pointer">Image</span>
            </div>
          </li>
          <li className="flex flex-col justify-center items-start cursor-pointer">
            <div className="flex flex-col gap-3 text-center ">
              <div className="flex justify-center items-center flex-wrap w-10 h-10 rounded-lg bg-white">
                <MdVideoLibrary className="text-blue-500" />
              </div>
              <span className="font-inter text-sm cursor-pointer">Video</span>
            </div>
          </li>
          <li
            className="flex flex-col justify-center items-start cursor-pointer"
            onClick={handleSaveData}
          >
            <div className="flex flex-col gap-3 text-center justify-center items-center">
              <IoSaveOutline size={24} />
              <span className="font-inter text-sm cursor-pointer">Save</span>
            </div>
          </li>
          {/* <li
            className="flex flex-col justify-center items-start cursor-pointer"
            onClick={loadCanvas}
          >
            <div className="flex flex-col gap-3 text-center justify-center items-center">
              <PiUpload size={24} />
              <span className="font-inter text-sm cursor-pointer">Load</span>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
