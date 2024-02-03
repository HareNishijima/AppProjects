import { Card } from "./components/Card";
import { useState, useEffect } from "react";
import { bingoType } from "./data/data";

export const App = () => {
  const [check, setCheck] = useState(false);
  const [bingo, setBingo] = useState(
    Array(9)
      .fill(null)
      .map(() => ({ num: 0, bingo: false }))
  );

  useEffect(() => {
    bingoCheck();
  }, [bingo]);

  const handleSetBingo = (i: number, n: number, b: boolean) => {
    const newBingo: bingoType[] = [...bingo];
    newBingo[i].num = n;
    newBingo[i].bingo = b;
    setBingo(newBingo);
  };

  const handleResetBingo = () => {
    setBingo(
      Array(9)
        .fill(null)
        .map(() => ({ num: 0, bingo: false }))
    );
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
      const [li, lj, lk] = checkList[i];
      if (bingo[li].num > 0 && bingo[lj].num > 0 && bingo[lk].num > 0) {
        handleSetBingo(li, bingo[li].num, true);
        handleSetBingo(lj, bingo[lj].num, true);
        handleSetBingo(lk, bingo[lk].num, true);
        setCheck(true);
        return;
      }
    }
    setCheck(false);
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
          {check ? (
            <div className="w-1/4 h-8 shadow-md bg-orange-400 rounded  mt-4" onClick={handleResetBingo}>
              bingo!
            </div>
          ) : (
            <div className="w-1/4 h-8 shadow-md bg-white rounded  mt-4" onClick={handleResetBingo}>
              no bingo
            </div>
          )}
        </div>
      </div>
    </>
  );
};
