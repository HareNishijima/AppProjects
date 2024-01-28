import { Card } from "./components/Card";
import { useState } from "react";

export const App = () => {
  const [bingo, setBingo] = useState(Array(9).fill(0));

  const handleSetBingo = (n: number, i: number) => {
    const newBingo: number[] = [...bingo];
    newBingo[i] = n;
    setBingo(newBingo);
  };

  return (
    <>
      <div className="m-auto w-fit justify-items-center bg-blue-100">
        <div className="grid gap-6 grid-cols-3 p-6 rounded-lg">
          {Array(9)
            .fill(0)
            .map((n, i) => (
              <Card key={i} index={i} item={bingo[i]} handleSetBingo={handleSetBingo}/>
            ))}
        </div>
      </div>
    </>
  );
};
