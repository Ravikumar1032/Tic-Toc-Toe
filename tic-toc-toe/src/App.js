// src/App.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="container-fluid pt-5 background-container">
      <h1 className="text-center pb-5 text-light"><b>Tic-Tac-Toe</b></h1>
      <div className="row justify-content-evenly">
        <div className="col-md-4 mb-3">
          <Link to="/human-vs-human" className="card text-white bg-primary text-center h-100">
            <div className="card-body d-flex align-items-center justify-content-center human-vs-human">
              <h5 className="card-title">Play with Friend</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/human-vs-computer" className="card text-white bg-primary text-center h-100">
            <div className="card-body d-flex align-items-center justify-content-center human-vs-computer">
              <h5 className="card-title">Play with Computer</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
