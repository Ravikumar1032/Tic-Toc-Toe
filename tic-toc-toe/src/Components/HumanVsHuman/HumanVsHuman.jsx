import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HumanVsHuman = () => {
  const [player1, setPlayer1] = useState({ name: '', symbol: '' });
  const [player2, setPlayer2] = useState({ name: '', symbol: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleStartGame = () => {
    if (
      !['x', 'X', 'o', 'O'].includes(player1.symbol) ||
      !['x', 'X', 'o', 'O'].includes(player2.symbol)
    ) {
      setError('Symbols must be either X or O.');
    } else if (player1.symbol.toLowerCase() === player2.symbol.toLowerCase()) {
      setError('Symbols must be different.');
    } else {
      navigate('/game', { state: { player1, player2 } });
    }
  };

  return (
    <div
      className="container-fluid pt-5"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://www.shutterstock.com/image-photo/young-man-joystick-playing-video-260nw-661841062.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="container mt-5">
        <h2 className="text-center mb-4 text-light">Human vs Human</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="bg-transparent p-4 rounded shadow-lg">
              <div className="form-group row">
                <label htmlFor="player1Name" className="col-sm-4 col-form-label text-light">Player 1 Name:</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="player1Name"
                    value={player1.name}
                    onChange={(e) => setPlayer1({ ...player1, name: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="player1Symbol" className="col-sm-4 col-form-label text-light">Player 1 Symbol:</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="player1Symbol"
                    value={player1.symbol}
                    onChange={(e) => setPlayer1({ ...player1, symbol: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="player2Name" className="col-sm-4 col-form-label text-light">Player 2 Name:</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="player2Name"
                    value={player2.name}
                    onChange={(e) => setPlayer2({ ...player2, name: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="player2Symbol" className="col-sm-4 col-form-label text-light">Player 2 Symbol:</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="player2Symbol"
                    value={player2.symbol}
                    onChange={(e) => setPlayer2({ ...player2, symbol: e.target.value })}
                  />
                </div>
              </div>
              {error && (
                <div className="form-group row">
                  <div className="col-sm-12">
                    <div className="alert alert-danger">{error}</div>
                  </div>
                </div>
              )}
              <div className="form-group row">
                <div className="col-sm-12">
                  <button className="btn btn-primary btn-block" onClick={handleStartGame}>
                    Start Game
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanVsHuman;
