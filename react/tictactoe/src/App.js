import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function SquareGen({ squareIdx }) {
  return (
    <Square value={squares[squareIdx]} onSquareClick={() => handleClick(squareIdx)} />
  )
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const row0 = [0, 1, 2]
  const row1 = [3, 4, 5]
  const row2 = [6, 7, 8]

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {row0.map((squareIdx) => (
          <Square value={squares[squareIdx]} onSquareClick={() => handleClick(squareIdx)} />
        ))}
      </div>
      <div className="board-row">
        {row1.map((squareIdx) => (
          <Square value={squares[squareIdx]} onSquareClick={() => handleClick(squareIdx)} />
        ))}
      </div>
      <div className="board-row">
        {row2.map((squareIdx) => (
          <Square value={squares[squareIdx]} onSquareClick={() => handleClick(squareIdx)} />
        ))}
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
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
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
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
    [2, 4, 6],
  ];

  const winner = lines.filter(
    ([a, b, c]) => squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
  )
  if (winner.length > 0) {
    return squares[winner[0][0]];
  }
  return null;
}
