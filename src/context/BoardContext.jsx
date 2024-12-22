const { Canvas } = require("fabric");
const { createContext, useState } = require("react");

export const BoardContext = createContext({ canvas: new Canvas(), setCanvas: () => {} });

const BoardContextProvider = ({ children }) => {
  const [canvas, setCanvas] = useState(null);
  return (
    <BoardContext.Provider
      value={{
        canvas,
        setCanvas,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContextProvider;
