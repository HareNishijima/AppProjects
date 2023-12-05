import { useState } from "react";

type Props = {
  value: string;
};

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    console.log("clicked!");
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
