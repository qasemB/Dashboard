import { Canvas, Circle } from "fabric";
import { useEffect, useState } from "react";

const MainBoard = () => {
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const newCanvas = new Canvas("canvas", {
      backgroundColor: "#f3f3f3",
    });
    setCanvas(newCanvas);

    return () => {
      newCanvas.dispose();
    };
  }, []);

  const addShape = () => {
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
      alert("هیچ داده‌ای برای بارگذاری وجود ندارد!");
    }
  };

  return (
    <div>
      <button className="bg-blue-500 py-1 px-3 rounded-lg" onClick={saveCanvas}>
        Save
      </button>
      <button className="bg-blue-500 py-1 px-3 rounded-lg" onClick={loadCanvas}>
        Load
      </button>
      <button className="bg-blue-500 py-1 px-3 rounded-lg" onClick={addShape}>
        Add Shape
      </button>
      <canvas id="canvas" width={800} height={600} className="border-2" />
    </div>
  );
};

export default MainBoard;
