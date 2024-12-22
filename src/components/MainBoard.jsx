import { useContext, useEffect } from "react";
import { BoardContext } from "../context/BoardContext";
import { Canvas } from "fabric";
import { IoTrash } from "react-icons/io5";

const MainBoard = () => {
  const { setCanvas, canvas } = useContext(BoardContext);
  useEffect(() => {
    const newCanvas = new Canvas("canvas", {
      backgroundColor: "#f3f3f3",
    });
    setCanvas(newCanvas);

    return () => {
      newCanvas.dispose();
    };
  }, []);

  // const changeColor = ()=>{
  //   const activeObj = canvas.getActiveObject()
  //   if (activeObj) {
  //     activeObj.set("fill", "black")
  //     canvas.renderAll();
  //   }
  // }

  const handleClear = () => {
    if (canvas) canvas.clear();
  };

  return (
    <div>
      <div className="text-end">
        <button className="" onClick={handleClear}>
          <IoTrash className="text-red-500 hover:drop-shadow-lg" size={20}/>
        </button>
      </div>
      <canvas id="canvas" width={800} height={600} className="border-2" />
    </div>
  );
};

export default MainBoard;
