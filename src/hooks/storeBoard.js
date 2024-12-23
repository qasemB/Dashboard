import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import { Circle, Rect, Triangle } from "fabric";

export const useStoreBoard = () => {
  const { canvas } = useContext(BoardContext);

  const saveCanvas = () => {
    if (canvas) {
      const canvasData = canvas.toJSON();
      console.log("Saving data:", canvasData); // مشاهده داده‌های ذخیره‌شده
      localStorage.setItem("canvasData", JSON.stringify(canvasData));
      alert("Canvas Saved!");
    }
  };

  const loadCanvas = () => {
    const savedData = localStorage.getItem("canvasData");
    if (savedData && canvas) {
      canvas.clear(); // پاک کردن بوم قبل از بارگذاری
      const parsedData = JSON.parse(savedData);
      console.log("Loading data:", parsedData); // مشاهده داده‌های بارگذاری‌شده

      if (parsedData.objects && Array.isArray(parsedData.objects)) {
        parsedData.objects.forEach((obj) => {
          let newObject;
          if (obj.type === "Circle") {
            newObject = new Circle(obj);
          }
          if (obj.type === "Rect") {
            newObject = new Rect(obj);
          }
          if (obj.type === "Triangle") {
            newObject = new Triangle(obj);
          }
          // سایر انواع اشیاء را اینجا اضافه کنید (مثل Rect یا Text)

          if (newObject) {
            canvas.add(newObject);
          }
        });

        // تنظیم رنگ پس‌زمینه
        canvas.backgroundColor = parsedData.background || "#f3f3f3";
        canvas.renderAll(); // رندر مجدد برای اعمال تغییرات
        console.log("Data loaded successfully!");
        alert("Canvas Loaded!");
      } else {
        console.error("No valid objects found in the saved data.");
      }
    } else {
      alert("There is no data...!");
    }
  };

  return {
    saveCanvas,
    loadCanvas,
  };
};
