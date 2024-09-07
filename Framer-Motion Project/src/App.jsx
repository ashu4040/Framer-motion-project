import React from "react";
import Background from "./component/Background";
import ForeGround from "./component/ForeGround";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-800">
      <Background />
      <ForeGround />
    </div>
  );
};

export default App;
