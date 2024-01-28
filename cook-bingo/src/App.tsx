import { Card } from "./components/Card";
import { useState } from "react";

export const App = () => {
  const [check, setCheck] = useState(false);
  const [bingo, setBingo] = useState(Array(9).fill(0));

  const handleSetBingo = (n: number, i: number) => {
    const newBingo: number[] = [...bingo];
    newBingo[i] = n;
    setBingo(newBingo);
    bingoCheck();
  };

  const handleResetBingo = () => {
    setBingo(Array(9).fill(0));
  };

  const bingoCheck = () => {
    const checkList = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < checkList.length; i++) {
      if (bingo[checkList[i][0]] > 0 && bingo[checkList[i][1]] > 0 && bingo[checkList[i][2]] > 0) {
        setCheck(true);
        return;
      }
    }
  };

  return (
    <>
      <div className="w-full m-auto max-w-screen-md">
        <div className="m-auto w-fit justify-items-center bg-blue-100">
          <div className="grid gap-6 grid-cols-3 p-6 rounded-lg">
            {Array(9)
              .fill(0)
              .map((n, i) => (
                <Card key={i} index={i} item={bingo[i]} handleSetBingo={handleSetBingo} />
              ))}
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <button className="w-1/4 h-8 shadow-md bg-orange-400 rounded  mt-4" onClick={handleResetBingo}>
            reset
          </button>
        </div>
      </div>
    </>
  );
};
