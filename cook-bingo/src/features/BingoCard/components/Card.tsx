import { bingoType } from "../types/data";

type propsType = {
  index: number;
  item: bingoType;
  handleClick: (index: number, item: bingoType) => void;
};

export const Card = (props: propsType) => {
  const index = props.index;
  const item = props.item;
  const handleClick = props.handleClick;

  return (
    <>
      {item.bingo ? (
        <div className="w-28 h-28 rounded-lg bg-yellow-400">
          <button className="w-full h-full" onClick={() => handleClick(index, item)}>
            {item.num}
          </button>
        </div>
      ) : (
        <div className={`w-28 h-28  rounded-lg ${item.num > 0 ? "bg-red-400" : "bg-white"}`}>
          <button className="w-full h-full" onClick={() => handleClick(index, item)}>
            {item.num}
          </button>
        </div>
      )}
    </>
  );
};
