// src/HumanVsComputer.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'; // Import the CSS file with your custom styles

const HumanVsComputer = () => {
  const [player1, setPlayer1] = useState({ name: '', symbol: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleStartGame = () => {
    if (!['x', 'X', 'o', 'O'].includes(player1.symbol)) {
      setError('Symbol must be either X or O.');
    } else {
      const computerSymbol = player1.symbol.toLowerCase() === 'x' ? 'O' : 'X';
      navigate('/game', { state: { player1, player2: { name: 'Computer', symbol: computerSymbol } } });
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center pt-5"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://www.shutterstock.com/image-photo/young-man-joystick-playing-video-260nw-661841062.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="container mt-5">
        <h2 className="text-center mb-4 text-light">Human vs Computer</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="bg-transparent p-4 rounded shadow-lg">
              <b><div className="form-group row">
                <label htmlFor="player1Name" className="col-sm-4 col-form-label text-light">Player Name:</label>
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
                <label htmlFor="player1Symbol" className="col-sm-4 col-form-label text-light">Symbol:</label>
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
              </div></b>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanVsComputer;
