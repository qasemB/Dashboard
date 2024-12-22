import { Canvas, Circle, IText, Rect } from "fabric";
import { useEffect, useState } from "react";

const MainBoard = () => {
  const [canvas, setCanvas] = useState(null); // تعریف State برای ذخیره بوم

  useEffect(() => {
    // ایجاد بوم (Canvas)
    const newCanvas = new Canvas("canvas", {
      backgroundColor: "#f3f3f3", // رنگ پس‌زمینه
    });

    setCanvas(newCanvas); // ذخیره نمونه Canvas در State

    // رسم مستطیل
    const rect = new Rect({
      left: 50,
      top: 50,
      fill: "red",
      width: 100,
      height: 100,
    });
    newCanvas.add(rect);

    // اضافه کردن متن
    const text = new IText("Hi Kiana", {
      left: 200,
      top: 200,
      fontSize: 24,
      fill: "blue",
    });
    newCanvas.add(text);

    // پاکسازی بوم هنگام خروج از کامپوننت
    return () => {
      newCanvas.dispose();
    };
  }, []);

  // تابع نمونه برای افزودن اشکال یا متن
  const addShape = () => {
    if (canvas) {
      const circle = new Circle({
        left: 150, // موقعیت افقی
        top: 150,  // موقعیت عمودی
        fill: "green", // رنگ دایره
        radius: 50,   // شعاع دایره
      });
      canvas.add(circle); // اضافه کردن دایره به بوم
    }
  };

  return (
    <div>
      <button onClick={addShape} className="bg-blue-500 text-white px-4 py-2 mb-2">
        اضافه کردن شکل
      </button>
      <canvas id="canvas" width={800} height={600} className="border-2" />
    </div>
  );
};

export default MainBoard;
