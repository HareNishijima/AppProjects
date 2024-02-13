import { bingoType } from "../types/BingoCard";

export const Stores = (setCheck:(b:boolean)=>void, bingo:bingoType[], setBingo:(b:bingoType[])=>void) =>{

	const handleResetBingo = () => {
    setBingo(
      Array(9)
        .fill(null)
        .map(() => ({ num: 0, bingo: false }))
    );
    setCheck(false);
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
      }
    }
  };

	const handleSetBingo = (i: number, n: number, b: boolean) => {
    const newBingo: bingoType[] = [...bingo];
    newBingo[i].num = n;
    newBingo[i].bingo = b;
    setBingo(newBingo);
  };

	const handleClick = (index: number, item: bingoType) => {
    handleSetBingo(index, item.num + 1, false);
    bingoCheck();
  };

	return{
		handleResetBingo,
		bingoCheck,
		handleSetBingo,
		handleClick
	}


}