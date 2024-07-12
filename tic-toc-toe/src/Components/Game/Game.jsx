import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Game.css';
// import App from '../../App'

const Game = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { player1, player2 } = location.state || {};
  
  if (!player1 || !player2) {
    // Redirect to the homepage if player1 or player2 data is missing
    navigate('/');
  }

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(player1.symbol);
  const [winner, setWinner] = useState(null);
  const [winningCombination, setWinningCombination] = useState([]);

  const winningCombinations = useMemo(() => [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ], []);

  const checkWin = useCallback((board, symbol) => {
    for (let combination of winningCombinations) {
      if (combination.every(index => board[index] === symbol)) {
        return combination;
      }
    }
    return null;
  }, [winningCombinations]);

  const makeMove = useCallback((index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winningCombo = checkWin(newBoard, currentPlayer);
    if (winningCombo) {
      setWinner(currentPlayer);
      setWinningCombination(winningCombo);
      return;
    }

    setCurrentPlayer(currentPlayer === player1.symbol ? player2.symbol : player1.symbol);
  }, [board, currentPlayer, winner, checkWin, player1.symbol, player2.symbol]);

  const getComputerMove = useCallback(() => {
    const emptyIndices = board.map((value, index) => (value === null ? index : null)).filter(value => value !== null);
    if (emptyIndices.length === 0) {
      return null;
    }

    for (let index of emptyIndices) {
      const newBoard = board.slice();
      newBoard[index] = player2.symbol;
      if (checkWin(newBoard, player2.symbol)) {
        return index;
      }
    }

    for (let index of emptyIndices) {
      const newBoard = board.slice();
      newBoard[index] = player1.symbol;
      if (checkWin(newBoard, player1.symbol)) {
        return index;
      }
    }

    return emptyIndices[0];
  }, [board, player1.symbol, player2.symbol, checkWin]);

  useEffect(() => {
    if (currentPlayer === player2.symbol && player2.name === 'Computer' && !winner) {
      const computerMove = getComputerMove();
      if (computerMove !== null) {
        makeMove(computerMove);
      }
    }
  }, [currentPlayer, winner, player2.symbol, player2.name, getComputerMove, makeMove]);

  const handleReplay = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer(player1.symbol);
    setWinner(null);
    setWinningCombination([]);
  };

  const renderSquare = (index) => {
    const isWinningSquare = winningCombination.includes(index);
    return (
      <button
        className={`btn btn-secondary square ${isWinningSquare ? 'bg-success text-white' : ''}`}
        onClick={() => makeMove(index)}
      >
        {board[index]}
      </button>
    );
  };

  return (
    <div className="container mt-5">
      <h2 className='text-center pb-5'><b>Game</b></h2>
      <p className='text-center'><b>Player 1: {player1.name} ({player1.symbol})</b></p>
      <p className='text-center'><b>Player 2: {player2.name} ({player2.symbol})</b></p>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="d-flex justify-content-center pt-5">
      <button className="btn btn-primary mt-3 py-2 px-5" onClick={handleReplay}>
        Replay
      </button>
      <button className="btn btn-primary mt-3 py-2 px-5 ms-5" onClick={() => navigate('/')}>
        Back
      </button>
      </div>
    </div>
  );
};

export default Game;
