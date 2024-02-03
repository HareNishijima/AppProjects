import { bingoType } from "../data/data";

type propsType = {
  index: number;
  item: bingoType;
  handleSetBingo: (n: number, i: number) => void;
};

export const Card = (props: propsType) => {
  const index = props.index;
  const item = props.item;
  const handleSetBingo = props.handleSetBingo;

  const handleClick = () => {
    console.log(item);
    handleSetBingo(item.num + 1, index);
  };

  return (
    <div className={`w-28 h-28 bg-white rounded-lg ${item.num>0 ? "bg-red-400" : ""}`}>
      <button className="w-full h-full" onClick={handleClick}>
        {item.num}
      </button>
    </div>
  );
};
