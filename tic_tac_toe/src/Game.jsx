import { useState } from "react";
import Board from './Board.jsx'

export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [turnCount, setTurnCount] = useState(0);
  const currentSquares = history[turnCount];
  // 手順が偶数の時はX、奇数の時はOのターン
  const turn = turnCount % 2 === 0;

  function handlePlay(nextSquares) {
    // jumpToで過去のターンに戻った時、それ以降の内容はすべて削除される
    const nextHistory = [...history.slice(0, turnCount + 1), nextSquares];
    setHistory(nextHistory);
    setTurnCount(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    // turnCountが更新されるとcurrentSquaresが更新され
    // 盤面がリセットされたように見える
    setTurnCount(nextMove);
  }

  const moves = history.map((squares, move) => {
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

  return (
    <div className="game">
      <div className="game-board">
        <Board turn={turn} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
        <ul>You are at turn #{turnCount + 1}</ul>
      </div>
    </div>
  );
}
