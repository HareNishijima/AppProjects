export default function Board({ turn, turnCount, squares, onPlay }) {

  const {winner, winnerLine} = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if(turnCount != 9){
    status = "Next player: " + (turn ? "X" : "O");
  } else{
    status = "Draw";
  }

  function handleClick(i, j) {

    let squaresIdx = i*3+j;
    const {winner, winnerLine} = calculateWinner(squares);
    if (squares[squaresIdx] || winner) {
      return;
    }

    const nextSquares = squares.slice();
    if (turn) {
      nextSquares[squaresIdx] = "X";
    } else {
      nextSquares[squaresIdx] = "O";
    }
    onPlay(nextSquares, i, j);
  }

  return (
    <>
      <div className="status">{status}</div>
      {
        Array(3).fill(0).map((_v, i)=>(
            <div className="board-row" key={i}>
            {
              Array(3).fill(0).map((_v, j)=>(
                <Square value = { squares[i*3+j] } onSquareClick={() => handleClick(i, j)} 
                  winnerLine = {winnerLine.some((w) => w == i*3+j)} key={j} />
              ))
            }
          </div>
        ))
      }
    </>
  );
}

function Square({value, onSquareClick, winnerLine}) {
  if(winnerLine){
    const cssString = {backgroundColor: 'yellow'};
    return (
      <button style={cssString} className="square" onClick={onSquareClick}>
        {value}
      </button>
    )
  }else{
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // squares[a]がnullのときは条件がtrueにならない
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {winner: squares[a], winnerLine:[a,b,c]}
    }
  }
  return {winner: null, winnerLine:[null, null, null]}
}
