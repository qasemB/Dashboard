import { useContext, useEffect } from "react";
import { BoardContext } from "../context/BoardContext";
import { Canvas } from "fabric";

const MainBoard = () => {
  const { setCanvas } = useContext(BoardContext);
  useEffect(() => {
    const newCanvas = new Canvas("canvas", {
      backgroundColor: "#f3f3f3",
    });
    setCanvas(newCanvas);

    return () => {
      newCanvas.dispose();
    };
  }, []);
  
  return (
    <div>
      <canvas id="canvas" width={800} height={600} className="border-2" />
    </div>
  );
};

export default MainBoard;
