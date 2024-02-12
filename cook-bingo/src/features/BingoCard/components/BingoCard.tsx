import { Card } from "./Card";
import { useState } from "react";
import { Stores } from "../stores";

export const BingoCard = () => {
  const [check, setCheck] = useState(false);
  const [bingo, setBingo] = useState(
    Array(9)
      .fill(null)
      .map(() => ({ num: 0, bingo: false }))
  );

  const hooks = Stores(setCheck, bingo, setBingo);
  const handleResetBingo = hooks.handleResetBingo;
  const handleClick = hooks.handleClick;

  return (
    <>
      <div className="w-full m-auto max-w-screen-md">
        <div className="m-auto w-fit justify-items-center bg-blue-100">
          <div className="grid gap-6 grid-cols-3 p-6 rounded-lg">
            {Array(9)
              .fill(0)
              .map((n, i) => (
                <Card key={i} index={i} item={bingo[i]} handleClick={handleClick} />
              ))}
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <button className="w-1/4 h-8 shadow-md bg-white rounded mt-4" onClick={handleResetBingo}>
            reset
          </button>
          {check ? (
            <button className="w-1/4 h-8 shadow-md bg-orange-400 rounded mt-4" onClick={handleResetBingo}>
              bingo!
            </button>
          ) : (
            <button className="w-1/4 h-8 shadow-md bg-white rounded mt-4" onClick={handleResetBingo}>
              no bingo
            </button>
          )}
        </div>
      </div>
    </>
  );
};
