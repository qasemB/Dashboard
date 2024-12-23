import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import { Circle, IText, Rect, Triangle } from "fabric";

export const useCreateShape = () => {
  const { canvas } = useContext(BoardContext);
  const addCircle = () => {
    if (canvas) {
      const circle = new Circle({
        left: 150,
        top: 150,
        fill: "green",
        radius: 50,
      });
      canvas.add(circle);
    }
  };

  const addSquare = () => {
    if (canvas) {
      const square = new Rect({
        left: 200, // موقعیت افقی
        top: 200, // موقعیت عمودی
        fill: "blue", // رنگ پر شده
        width: 100, // عرض مربع
        height: 100, // ارتفاع مربع
      });
      canvas.add(square);
    }
  };

  const addTriangle = () => {
    if (canvas) {
      const triangle = new Triangle({
        left: 250, // موقعیت افقی
        top: 250, // موقعیت عمودی
        fill: "red", // رنگ پر شده
        width: 100, // عرض مثلث
        height: 100, // ارتفاع مثلث
      });
      canvas.add(triangle);
    }
  };

  const addText = () => {
    if (canvas) {
      const text = new IText("Hello World", {
        left: 250, // موقعیت افقی
        top: 250, // موقعیت عمودی
        fontSize: 24, // اندازه فونت
        fill: "black", // رنگ متن
        fontFamily: "Arial", // نوع فونت
      });
      canvas.add(text);
    }
  };

  return {
    addCircle,
    addSquare,
    addTriangle,
    addText
  };
};
