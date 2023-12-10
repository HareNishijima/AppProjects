import { useState } from "react";
import Board from './Board.jsx'

export default function Game() {

  const [history, setHistory] = useState([{square: Array(9).fill(null), row: null, col: null}]);
  const [turnCount, setTurnCount] = useState(0);
  const currentSquares = history[turnCount].square;
  // 手順が偶数の時はX、奇数の時はOのターン
  const turn = turnCount % 2 === 0;
  const [historySortDesc, setHistorSortDesc] = useState(false);

  function handlePlay(nextSquares) {
    // jumpToで過去のターンに戻った時、それ以降の内容はすべて削除される
    const nextHistory = [...history.slice(0, turnCount + 1), {square: nextSquares, row: null, col: null}];
    setHistory(nextHistory);
    setTurnCount(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    // turnCountが更新されるとcurrentSquaresが更新され
    // 盤面がリセットされたように見える
    setTurnCount(nextMove);
  }

  const moves = history.map((squares, move) => {

    // hisotrySortDescで並び順が反転する
    if (historySortDesc){
      move = history.length - move -1;
    }

    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function handlehistorySortDesc(){
    setHistorSortDesc(!historySortDesc);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board turn={turn} turnCount={turnCount} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
        <ul>You are at turn #{turnCount + 1}</ul>
      </div>
      <div>
        HistoryToggle
        <input
        type="checkbox"
        checked={historySortDesc}
        onChange={handlehistorySortDesc}
      />
      </div>
    </div>
  );
}
