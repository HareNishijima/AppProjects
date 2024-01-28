import { Card } from "./components/Card";
import { useState } from "react";

export const App = () => {
  const [bingo, setBingo] = useState(Array(9).fill(0));

  const handleSetBingo = (n: number, i: number) => {
    const newBingo: number[] = [...bingo];
    newBingo[i] = n;
    setBingo(newBingo);
  };

  const handleResetBingo = () => {
    setBingo(Array(9).fill(0));
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
        <div className="flex w-full justify-center mt-4">
          <button className="w-1/4 h-8 shadow-md bg-orange-400 rounded" onClick={handleResetBingo}>
            reset
          </button>
        </div>
      </div>
    </>
  );
};
