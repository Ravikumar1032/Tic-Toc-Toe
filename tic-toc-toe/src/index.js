// src/index.js or src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HumanVsComputer from './Components/HumanVsComputer/HumanVsComputer';
import HumanVsHuman from './Components/HumanVsHuman/HumanVsHuman';
import Game from './Components/Game/Game';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/human-vs-computer" element={<HumanVsComputer />} />
      <Route path="/human-vs-human" element={<HumanVsHuman />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
