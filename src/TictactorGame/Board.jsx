import React, { useState } from "react";
import Square from "./Square";
function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isitX, setX] = useState(true);
  const handleclick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isitX ? "X" : "O";
    setState(copyState);
    setX(!isitX);
  };

  const checkwinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winner) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkwinner();
  console.log(isWinner);
  const reset = () => {
    setState(Array(9).fill(null));
  };
  return (
    <div className="board-container">
      {isWinner ? (
        <>
          <h3>{isWinner} Won The game</h3>
          <button onClick={reset}>Reset The game</button>
        </>
      ) : (
        <>
          <h3>Player {isitX ? "X's" : "O's"} Turn</h3>
          <div className="board-row">
            <Square
              onClick={() => {
                handleclick(0);
              }}
              value={<h1>{state[0]}</h1>}
            />
            <Square
              onClick={() => {
                handleclick(1);
              }}
              value={<h1>{state[1]}</h1>}
            />
            <Square
              onClick={() => {
                handleclick(2);
              }}
              value={<h1>{state[2]}</h1>}
            />
          </div>
          <div className="board-row">
            <Square
              onClick={() => {
                handleclick(3);
              }}
              value={<h1>{state[3]}</h1>}
            />
            <Square
              onClick={() => {
                handleclick(4);
              }}
              value={<h1>{state[4]}</h1>}
            />
            <Square
              onClick={() => {
                handleclick(5);
              }}
              value={<h1>{state[5]}</h1>}
            />
          </div>
          <div className="board-row">
            <Square
              onClick={() => {
                handleclick(6);
              }}
              value={<h1>{state[6]}</h1>}
            />
            <Square
              onClick={() => {
                handleclick(7);
              }}
              value={<h1>{state[7]}</h1>}
            />
            <Square
              onClick={() => {
                handleclick(8);
              }}
              value={<h1>{state[8]}</h1>}
            />
          </div>
          <br />
          <button onClick={reset}>Reset The game</button>
        </>
      )}
    </div>
  );
}

export default Board;
