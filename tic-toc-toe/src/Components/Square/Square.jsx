// src/components/Square.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Square = ({ value, onClick }) => (
  <button className="btn btn-light square" onClick={onClick}>
    {value}
  </button>
);

export default Square;
