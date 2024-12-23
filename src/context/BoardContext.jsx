import { generateRandomSixDigitNumber } from "../utils/codeUtils";

const { Canvas } = require("fabric");
const { createContext, useState, useEffect } = require("react");

export const BoardContext = createContext({
  canvas: new Canvas(),
  setCanvas: () => {},
  screenId: "",
  setScreenId: () => {},
});

const BoardContextProvider = ({ children }) => {
  const [canvas, setCanvas] = useState(null);
  const [screenId, setScreenId] = useState("");

  useEffect(() => {
    setScreenId(generateRandomSixDigitNumber());
  }, []);

  return (
    <BoardContext.Provider
      value={{
        canvas,
        screenId,
        setCanvas,
        setScreenId,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContextProvider;
