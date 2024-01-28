type propsType = {
  index: number;
  item: number;
  handleSetBingo: (n: number, i: number) => void;
};

export const Card = (props: propsType) => {
  const index = props.index;
  const item = props.item;
  const handleSetBingo = props.handleSetBingo;

  const handleClick = () => {
    handleSetBingo(item + 1, index);
  };

  return (
    <div className="w-28 h-28 bg-white rounded-lg">
      <button className="w-full h-full" onClick={handleClick}>
        {item}
      </button>
    </div>
  );
};
