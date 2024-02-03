import { bingoType } from "../data/data";

type propsType = {
  index: number;
  item: bingoType;
  handleSetBingo: (n: number, i: number, b: boolean) => void;
};

export const Card = (props: propsType) => {
  const index = props.index;
  const item = props.item;
  const handleSetBingo = props.handleSetBingo;

  const handleClick = () => {
    console.log(item);
    handleSetBingo(index, item.num + 1, false);
  };

  return (
    <>
      {item.bingo ? (
        <div className="w-28 h-28 rounded-lg bg-yellow-400">
          <button className="w-full h-full" onClick={handleClick}>
            {item.num}
          </button>
        </div>
      ) : (
        <div className={`w-28 h-28  rounded-lg ${item.num > 0 ? "bg-red-400" : "bg-white"}`}>
          <button className="w-full h-full" onClick={handleClick}>
            {item.num}
          </button>
        </div>
      )}
    </>
  );
};
