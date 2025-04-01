import React from "react";
import { useDispatch } from "react-redux";
import { resetGame } from "./store/gameSlice";
import ChessBoard from "./components/ChessBoard";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>React Chess Game</h1>
      <ChessBoard />
      <button onClick={() => dispatch(resetGame())}>Reset Game</button>
    </div>
  );
};

export default App;
